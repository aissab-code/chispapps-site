// Public by design: the same project URL and anon key the app ships with. Every function the
// pages call checks its own secret (dashboard token or admin key) or validates and rate-limits
// its input; the anon key alone opens nothing.
window.BE_CONFIG = {
  url: 'https://aoqtzduxolvlwivlquai.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvcXR6ZHV4b2x2bHdpdmxxdWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MzI0ODgsImV4cCI6MjA5NDEwODQ4OH0.vLW6onK6mG5WaEBhhWXaLzjP6KYwywYF5VDPcT8TatI',
};

window.beRpc = async function (name, args) {
  const c = window.BE_CONFIG;
  const res = await fetch(c.url + '/rest/v1/rpc/' + name, {
    method: 'POST',
    headers: { apikey: c.anonKey, Authorization: 'Bearer ' + c.anonKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const err = new Error((body && body.message) || 'Request failed');
    err.status = res.status;
    throw err;
  }
  return body;
};
