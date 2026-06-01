/**
 * GET /api/submissions
 * Retrieve all app submission requests from KV.
 */

export async function onRequestGet(context) {
  const { env } = context;

  try {
    const kv = env.CKB_DIR;
    if (!kv) {
      return jsonResponse({ error: 'KV not configured' }, 500);
    }

    const submissions = [];

    // Try the index first
    try {
      const indexRaw = await kv.get('submissions:index');
      if (indexRaw) {
        const ids = JSON.parse(indexRaw);
        for (const id of ids) {
          const raw = await kv.get(`submission:${id}`);
          if (raw) {
            try {
              submissions.push(JSON.parse(raw));
            } catch {
              // skip corrupt entries
            }
          }
        }
        return jsonResponse({ submissions, count: submissions.length });
      }
    } catch {
      // index missing or corrupt — fall through to list()
    }

    // Fallback: list all keys with submission: prefix
    const list = await kv.list({ prefix: 'submission:' });
    for (const key of list.keys) {
      const raw = await kv.get(key.name);
      if (raw) {
        try {
          submissions.push(JSON.parse(raw));
        } catch {
          // skip corrupt entries
        }
      }
    }

    return jsonResponse({ submissions, count: submissions.length });
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
