/**
 * POST /api/submit
 * Record an app submission request.
 * Body: { submission_type, app_name, description, website, contact_email, ... }
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { app_name, description, website, contact_email } = body;

    if (!app_name || !description || !website || !contact_email) {
      return jsonResponse(
        { error: 'app_name, description, website, and contact_email are required' },
        400
      );
    }

    const kv = env.CKB_DIR;
    if (!kv) {
      return jsonResponse({ error: 'KV not configured' }, 500);
    }

    const id = crypto.randomUUID();
    const submission = {
      id,
      ...body,
      submitted_at: new Date().toISOString()
    };

    await kv.put(`submission:${id}`, JSON.stringify(submission));

    // Also append to an index list (best-effort)
    try {
      const listRaw = await kv.get('submissions:index') || '[]';
      const list = JSON.parse(listRaw);
      list.push(id);
      await kv.put('submissions:index', JSON.stringify(list));
    } catch {
      // ignore index failures
    }

    return jsonResponse({ success: true, id }, 201);
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
