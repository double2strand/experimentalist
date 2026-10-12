// Minimal GitHub contents-API client. Token lives in localStorage only.
const GH = (() => {
  const LS = 'portal.settings';
  function settings() {
    let s = {}; try { s = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) {}
    return Object.assign({}, window.PORTAL_DEFAULTS, s);
  }
  function save(s) { localStorage.setItem(LS, JSON.stringify(s)); }
  function token() { return localStorage.getItem('portal.token') || ''; }
  function setToken(t) { if (t) localStorage.setItem('portal.token', t); else localStorage.removeItem('portal.token'); }
  const b64enc = (str) => { const bytes = new TextEncoder().encode(str); let bin = ''; for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(bin); };
  const b64dec = (b) => new TextDecoder().decode(Uint8Array.from(atob(b.replace(/\n/g, '')), c => c.charCodeAt(0)));
  async function api(path, opts = {}) {
    const s = settings(); const t = token();
    if (!t) throw new Error('No GitHub token set – open Settings (⚙) first.');
    const url = `https://api.github.com/repos/${s.owner}/${s.repo}/${path}`;
    const r = await fetch(url, Object.assign({}, opts, { headers: Object.assign({ 'Authorization': 'Bearer ' + t, 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, opts.headers || {}) }));
    if (r.status === 404 && opts.allow404) return null;
    if (!r.ok) { let m = r.statusText; try { m = (await r.json()).message; } catch (e) {} throw new Error(`GitHub ${r.status}: ${m}`); }
    return opts.raw ? r.text() : r.json();
  }
  async function getFile(path) { // {sha, text} or null
    const s = settings();
    const meta = await api(`contents/${encodeURI(path)}?ref=${encodeURIComponent(s.branch)}`, { allow404: true });
    if (!meta) return null;
    let text = meta.content ? b64dec(meta.content) : null;
    if (text === null || meta.encoding === 'none') text = await api(`contents/${encodeURI(path)}?ref=${encodeURIComponent(s.branch)}`, { raw: true, headers: { Accept: 'application/vnd.github.raw' } });
    return { sha: meta.sha, text };
  }
  async function putFile(path, contentB64, message, sha) {
    const s = settings();
    const body = { message, content: contentB64, branch: s.branch }; if (sha) body.sha = sha;
    return api(`contents/${encodeURI(path)}`, { method: 'PUT', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } });
  }
  async function putText(path, text, message) {
    for (let attempt = 0; attempt < 3; attempt++) {
      const cur = await getFile(path);
      try { return await putFile(path, b64enc(text), message, cur && cur.sha); }
      catch (e) { if (!/409|sha/i.test(e.message) || attempt === 2) throw e; }
    }
  }
  async function updateJSON(path, mutate, message) { // read-modify-write with retry on conflict
    for (let attempt = 0; attempt < 3; attempt++) {
      const cur = await getFile(path);
      const obj = mutate(cur ? JSON.parse(cur.text) : null);
      try { return await putFile(path, b64enc(JSON.stringify(obj)), message, cur && cur.sha); }
      catch (e) { if (!/409|sha/i.test(e.message) || attempt === 2) throw e; }
    }
  }
  async function whoami() { const t = token(); const r = await fetch('https://api.github.com/user', { headers: { Authorization: 'Bearer ' + t } }); if (!r.ok) throw new Error('Token rejected (' + r.status + ')'); return r.json(); }
  return { settings, save, token, setToken, getFile, putFile, putText, updateJSON, whoami, b64enc };
})();
