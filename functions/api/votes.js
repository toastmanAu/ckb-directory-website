/**
 * GET /api/votes
 * Retrieve current vote counts for all panels.
 * Query: ?panels=panel_01,panel_02,...
 */

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  try {
    const kv = env.CKB_DIR;
    if (!kv) {
      return jsonResponse({ error: 'KV not configured' }, 500);
    }

    const panelsParam = url.searchParams.get('panels');
    const panelIds = panelsParam ? panelsParam.split(',') : [];

    const result = {};
    for (const id of panelIds) {
      const count = parseInt(await kv.get(`votes:${id}`) || '0', 10);
      result[id] = count;
    }

    return jsonResponse({ votes: result });
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
