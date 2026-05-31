/**
 * POST /api/vote
 * Record or change a vote for a panel design.
 * Body: { panelId: string, voterId: string }
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { panelId, voterId } = body;

    if (!panelId || !voterId) {
      return jsonResponse({ error: 'panelId and voterId are required' }, 400);
    }

    const kv = env.CKB_DIR;
    if (!kv) {
      return jsonResponse({ error: 'KV not configured' }, 500);
    }

    // Derive group from panelId (everything before the last _NN suffix)
    const match = panelId.match(/^(.*)_(\d+)$/);
    const groupId = match ? match[1] : panelId;

    const voterKey = `voter:${voterId}:${groupId}`;
    const existingVote = await kv.get(voterKey);

    if (existingVote === panelId) {
      // Same vote — no-op
      const countKey = `votes:${panelId}`;
      const current = parseInt(await kv.get(countKey) || '0', 10);
      return jsonResponse({ success: true, panelId, groupId, total: current, changed: false });
    }

    if (existingVote) {
      // Changing vote — decrement old panel
      const oldCountKey = `votes:${existingVote}`;
      const oldCurrent = parseInt(await kv.get(oldCountKey) || '0', 10);
      await kv.put(oldCountKey, String(Math.max(0, oldCurrent - 1)));
    }

    // Record the voter's new choice
    await kv.put(voterKey, panelId);

    // Increment new panel vote count
    const countKey = `votes:${panelId}`;
    const current = parseInt(await kv.get(countKey) || '0', 10);
    await kv.put(countKey, String(current + 1));

    return jsonResponse({ success: true, panelId, groupId, total: current + 1, changed: !!existingVote });
  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
