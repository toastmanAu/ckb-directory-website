/**
 * CKB Directory Website
 * Single-page app with hash routing, voting, and submission handling.
 */

/* ============================================================
   CONFIG
   ============================================================ */

const CONFIG = {
  // Panel images to vote on. Add your 800x320 images to assets/panels/
  // and update this array.
  panels: [
    {
      id: 'panel_01',
      name: 'Command Center',
      file: 'assets/panels/panel_01.jpg',
      description: 'Multi-monitor trader workstation'
    }
    // Add more panels here, e.g.:
    // { id: 'panel_02', name: 'Neon City', file: 'assets/panels/panel_02.jpg', description: 'Cyberpunk skyline' },
  ],

  // Initial seeded updates shown on the home page
  updates: [
    {
      date: '2026-05-30',
      title: 'CKB Directory Website Launch',
      body: 'The companion website is now live at ckb.directory. Submit your app listings and vote on upcoming panel designs.'
    },
    {
      date: '2026-05-28',
      title: 'Android Build in Progress',
      body: 'The Nervos Companion app is entering final testing. Expect a Google Play release soon followed by iOS.'
    },
    {
      date: '2026-05-20',
      title: 'Ecosystem Directory Expanded',
      body: 'New apps added to the directory including iCKB, Quantum Purse, and Pocket Node. More coming via community submissions.'
    }
  ],

  // Storage keys
  STORE: {
    userId: 'ckb_dir_user_id',
    vote: 'ckb_dir_vote',
    votes: 'ckb_dir_votes',      // local tally object
    submissions: 'ckb_dir_submissions'
  }
};

/* ============================================================
   STATE
   ============================================================ */

const state = {
  currentPage: 'home',
  userId: null,
  userVote: null,
  votes: {},      // { panelId: count }
  voted: false
};

/* ============================================================
   UTILITIES
   ============================================================ */

function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function getUserId() {
  let id = localStorage.getItem(CONFIG.STORE.userId);
  if (!id) {
    id = generateId();
    localStorage.setItem(CONFIG.STORE.userId, id);
  }
  return id;
}

function loadJson(key, fallback = {}) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or disabled
  }
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

/* ============================================================
   INITIALIZATION
   ============================================================ */

async function init() {
  state.userId = getUserId();
  state.userVote = localStorage.getItem(CONFIG.STORE.vote);
  state.votes = loadJson(CONFIG.STORE.votes, {});

  // Seed votes if empty
  if (Object.keys(state.votes).length === 0) {
    CONFIG.panels.forEach(p => { state.votes[p.id] = 0; });
    saveJson(CONFIG.STORE.votes, state.votes);
  }

  state.voted = !!state.userVote;

  // Try to load shared vote counts from backend
  await loadRemoteVotes();

  bindNavigation();
  bindMobileMenu();
  bindSubmitForm();
  renderUpdates();
  handleRoute();

  window.addEventListener('hashchange', handleRoute);
}

/* ============================================================
   ROUTING
   ============================================================ */

function handleRoute() {
  const hash = window.location.hash.replace('#', '') || '/';
  const path = hash.replace(/^\//, '').split('/')[0] || 'home';

  document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

  const pageMap = {
    '': 'home',
    'home': 'home',
    'submit': 'submit',
    'vote': 'vote'
  };

  const pageId = pageMap[path] || 'home';
  const pageEl = document.getElementById(`page-${pageId}`);
  if (pageEl) {
    pageEl.classList.remove('hidden');
    pageEl.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  const navLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (navLink) navLink.classList.add('active');

  state.currentPage = pageId;

  // Page-specific init
  if (pageId === 'vote') {
    renderVotePage();
  }

  if (pageId === 'submit') {
    resetSubmitForm();
  }

  // Close mobile menu on route change
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('navToggle');
  if (menu && menu.classList.contains('open')) {
    menu.classList.remove('open');
    toggle.classList.remove('open');
  }
}

function bindNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });
}

function bindMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
      toggle.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function renderUpdates() {
  const list = document.getElementById('updatesList');
  if (!list) return;

  list.innerHTML = CONFIG.updates.map(u => `
    <article class="update-card">
      <div class="update-date">${formatDate(u.date)}</div>
      <h3 class="update-title">${escapeHtml(u.title)}</h3>
      <p class="update-body">${escapeHtml(u.body)}</p>
    </article>
  `).join('');
}

/* ============================================================
   SUBMIT PAGE
   ============================================================ */

function bindSubmitForm() {
  const form = document.getElementById('submitForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    data.submitted_at = new Date().toISOString();
    data.user_id = state.userId;

    // Try backend first
    let backendOk = false;
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      backendOk = res.ok;
    } catch {
      // Backend unavailable
    }

    // Always store locally as fallback / backup
    const submissions = loadJson(CONFIG.STORE.submissions, []);
    submissions.push(data);
    saveJson(CONFIG.STORE.submissions, submissions);

    // Also attempt to open a mailto as a lightweight "send" action
    const subject = encodeURIComponent(`CKB Directory Submission: ${data.app_name}`);
    const body = encodeURIComponent(
      `Submission Type: ${data.submission_type}\n` +
      `App Name: ${data.app_name}\n` +
      `Description: ${data.description}\n` +
      `Website: ${data.website}\n` +
      `Contact: ${data.contact_email}\n` +
      `Twitter: ${data.twitter || 'N/A'}\n` +
      `GitHub: ${data.github || 'N/A'}\n` +
      `Discord: ${data.discord || 'N/A'}\n` +
      `Banner Colors: ${data.banner_colors || 'N/A'}\n` +
      `Notes: ${data.notes || 'N/A'}\n`
    );

    try {
      window.open(`mailto:submissions@ckb.directory?subject=${subject}&body=${body}`, '_blank');
    } catch {
      // ignore
    }

    // Show success
    form.classList.add('hidden');
    document.getElementById('submitSuccess').classList.remove('hidden');
  });
}

function resetSubmitForm() {
  const form = document.getElementById('submitForm');
  const success = document.getElementById('submitSuccess');
  if (form && success) {
    form.reset();
    form.classList.remove('hidden');
    success.classList.add('hidden');
  }
}

/* ============================================================
   VOTE PAGE
   ============================================================ */

function renderVotePage() {
  const grid = document.getElementById('votingGrid');
  if (!grid) return;

  const totalVotes = Object.values(state.votes).reduce((a, b) => a + b, 0);
  const maxVotes = Math.max(...Object.values(state.votes), 0);
  const leadingIds = Object.entries(state.votes)
    .filter(([, v]) => v === maxVotes && v > 0)
    .map(([id]) => id);

  grid.innerHTML = CONFIG.panels.map(panel => {
    const count = state.votes[panel.id] || 0;
    const percent = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
    const isLeading = leadingIds.includes(panel.id);
    const isVoted = state.userVote === panel.id;

    return `
      <div class="panel-card ${isLeading ? 'leading' : ''}" data-panel="${panel.id}">
        <div class="panel-image-wrap">
          <img src="${panel.file}" alt="${escapeHtml(panel.name)}" class="panel-image" loading="lazy">
          ${isLeading ? '<span class="panel-badge">Leading</span>' : ''}
        </div>
        <div class="panel-info">
          <h3 class="panel-name">${escapeHtml(panel.name)}</h3>
          <p class="panel-meta">${escapeHtml(panel.description)}</p>
          <div class="panel-vote-bar">
            <div class="vote-progress">
              <div class="vote-progress-fill" style="width: ${percent}%"></div>
            </div>
            <div class="vote-count">
              <span class="count">${count} vote${count !== 1 ? 's' : ''}</span>
              <span class="percent">${percent}%</span>
            </div>
          </div>
          <div class="panel-actions">
            <button class="btn-vote ${isVoted ? 'voted' : ''}"
                    data-panel="${panel.id}"
                    ${state.voted && !isVoted ? 'disabled' : ''}>
              ${isVoted
                ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> You Voted`
                : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> Vote`
              }
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Bind vote buttons
  grid.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.dataset.panel;
      if (panelId) castVote(panelId);
    });
  });

  updateStats(totalVotes);
}

function castVote(panelId) {
  if (state.voted) return;

  // Record vote locally
  state.votes[panelId] = (state.votes[panelId] || 0) + 1;
  state.userVote = panelId;
  state.voted = true;

  saveJson(CONFIG.STORE.votes, state.votes);
  localStorage.setItem(CONFIG.STORE.vote, panelId);

  // Re-render
  renderVotePage();

  // Optional: attempt to sync to a backend if one is configured
  syncVoteToBackend(panelId, state.userId);
}

function updateStats(totalVotes) {
  const totalEl = document.getElementById('statTotalVotes');
  const votersEl = document.getElementById('statVoters');
  const leadingEl = document.getElementById('statLeading');

  if (totalEl) totalEl.textContent = totalVotes.toLocaleString();

  // Unique voters is approximated by vote count for local-only mode
  if (votersEl) votersEl.textContent = totalVotes.toLocaleString();

  if (leadingEl) {
    const entries = Object.entries(state.votes);
    if (entries.length === 0 || totalVotes === 0) {
      leadingEl.textContent = '—';
    } else {
      const max = Math.max(...entries.map(([, v]) => v));
      const leaders = entries.filter(([, v]) => v === max).map(([id]) => {
        const panel = CONFIG.panels.find(p => p.id === id);
        return panel ? panel.name : id;
      });
      leadingEl.textContent = leaders.length === 1 ? leaders[0] : 'Tie';
    }
  }
}

async function loadRemoteVotes() {
  try {
    const ids = CONFIG.panels.map(p => p.id).join(',');
    const res = await fetch(`/api/votes?panels=${ids}`, { method: 'GET' });
    if (!res.ok) return;
    const data = await res.json();
    if (data.votes) {
      // Merge remote counts (remote wins if higher)
      Object.entries(data.votes).forEach(([id, count]) => {
        const local = state.votes[id] || 0;
        state.votes[id] = Math.max(local, count);
      });
      saveJson(CONFIG.STORE.votes, state.votes);
    }
  } catch {
    // Backend not available — localStorage fallback works fine
  }
}

async function syncVoteToBackend(panelId, voterId) {
  try {
    const res = await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ panelId, voterId })
    });
    if (res.ok) {
      // Refresh counts from server
      await loadRemoteVotes();
      renderVotePage();
    }
  } catch {
    // Backend unavailable — vote is still recorded locally
  }
}

/* ============================================================
   HELPERS
   ============================================================ */

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   BOOT
   ============================================================ */

document.addEventListener('DOMContentLoaded', init);
