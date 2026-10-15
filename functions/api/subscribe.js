/**
 * Cloudflare Pages Function: POST /api/subscribe
 * Adds a contact to Brevo list 5 (Leads).
 * Requires environment variable: BREVO_API_KEY
 * Set this in Cloudflare Pages → Settings → Environment variables.
 */
export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://crazystrength.co.uk',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await context.request.json();
    const { email, first_name } = body;

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const apiKey = context.env.BREVO_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const payload = {
      email,
      attributes: first_name ? { FIRSTNAME: first_name } : {},
      listIds: [5], // Leads list
      updateEnabled: true, // update existing contacts rather than error
    };

    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // 201 = created, 204 = updated (existing contact)
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    const errBody = await brevoRes.text();
    console.error('Brevo error:', brevoRes.status, errBody);
    return new Response(JSON.stringify({ error: 'Signup failed' }), {
      status: 502,
      headers: corsHeaders,
    });
  } catch (err) {
    console.error('Subscribe function error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// Handle preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://crazystrength.co.uk',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
