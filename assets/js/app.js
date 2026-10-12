(() => {
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const fmtDate = (iso) => { const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };
const SOURCES = { 'Experimental-Updates-311024-310425': 'Oct 2024 – Apr 2025', 'Experiments_010525-211025': 'May – Oct 2025', 'Experiments_21Oct2025': 'Oct 2025 →', 'portal': 'Portal entries' };
const OVERLAY = 'portal.overlay'; // entries committed from this browser, shown until Pages redeploys
const state = { entries: [], byId: {}, mini: null, rules: null, f: { from: '', to: '', tech: new Set(), samp: new Set(), reag: new Set(), src: new Set(), has: new Set() }, q: '', sampleQ: '' };
const cache = {};

function toast(msg, ms = 3500) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(t._h); t._h = setTimeout(() => t.hidden = true, ms); }
function overlay() { try { return JSON.parse(localStorage.getItem(OVERLAY) || '{}'); } catch (e) { return {}; } }
function setOverlay(o) { try { localStorage.setItem(OVERLAY, JSON.stringify(o)); } catch (e) { console.warn('overlay too big', e); } }

marked.setOptions({ gfm: true, breaks: false });
function renderMD(md) { return DOMPurify.sanitize(marked.parse(md || '')); }

// ---------- tagging (same rules as the importer: data/tag_rules.json) ----------
function autoTags(text) {
  const t = (text || '').replace(/\\/g, ''); const R = state.rules; if (!R) return { techniques: [], reagents: [], samples: [] };
  const tech = R.techniques.filter(([k, p, fl]) => new RegExp(p, fl).test(t)).map(r => r[0]);
  const reag = R.reagents.filter(([k, p, fl]) => new RegExp(p, fl).test(t)).map(r => r[0]);
  const cnt = {}; R.samples.forEach(p => (t.match(new RegExp(p, 'g')) || []).forEach(m => { m = m.replace('-MAIN', '').trim(); cnt[m] = (cnt[m] || 0) + 1; }));
  const samples = Object.entries(cnt).sort((a, b) => b[1] - a[1]).slice(0, 25).map(x => x[0]);
  return { techniques: tech, reagents: reag, samples };
}
const plain = (md) => md.replace(/!\[[^\]]*\]\([^)]*\)|[*\\#|]|:?-{3,}:?/g, '').replace(/\s+/g, ' ');
function indexRecord(e) { return { id: e.id, date: e.date, title: e.title, experiments: e.experiments || [], tags: e.tags, source: e.source?.doc || 'portal', images: (e.images || []).length, tables: e.tables || 0, text: plain(e.body), updated: e.updated }; }

// ---------- load ----------
async function load() {
  const [idx, rules] = await Promise.all([fetch('data/index.json', { cache: 'no-cache' }).then(r => r.json()), fetch('data/tag_rules.json').then(r => r.json()).catch(() => null)]);
  state.rules = rules;
  let entries = idx.entries;
  const ov = overlay(); const ids = new Map(entries.map((e, i) => [e.id, i]));
  for (const [id, rec] of Object.entries(ov)) {
    const i = ids.get(id);
    if (i !== undefined && entries[i].updated && entries[i].updated >= rec.index.updated) { delete ov[id]; continue; } // deployed
    if (i !== undefined) entries[i] = rec.index; else entries.push(rec.index);
    cache[id] = rec.entry;
  }
  setOverlay(ov);
  setEntries(entries);
  buildFilters(); route();
}
function setEntries(entries) {
  entries.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : a.id < b.id ? -1 : 1);
  state.entries = entries; state.byId = Object.fromEntries(entries.map(e => [e.id, e]));
  state.mini = new MiniSearch({ fields: ['title', 'text', 'experiments', 'tagtext', 'date', 'pretty'], storeFields: ['id'],
    extractField: (doc, f) => f === 'experiments' ? (doc.experiments || []).join(' ') : f === 'tagtext' ? [...doc.tags.techniques, ...doc.tags.reagents, ...doc.tags.samples, ...(doc.tags.custom || [])].join(' ') : f === 'pretty' ? fmtDate(doc.date) : doc[f],
    searchOptions: { boost: { title: 3, experiments: 2, tagtext: 2 }, prefix: true, fuzzy: 0.15, combineWith: 'AND' } });
  state.mini.addAll(entries);
}
async function getEntry(id) {
  if (cache[id]) return cache[id];
  const r = await fetch(`data/entries/${encodeURIComponent(id)}.json`, { cache: 'no-cache' });
  if (!r.ok) throw new Error('Entry not found: ' + id);
  return cache[id] = await r.json();
}

// ---------- filters ----------
function counts(key) { const c = {}; state.entries.forEach(e => (e.tags[key] || []).forEach(t => c[t] = (c[t] || 0) + 1)); return Object.entries(c).sort((a, b) => b[1] - a[1]); }
function chips(el, items, set, limit) {
  el.innerHTML = items.slice(0, limit || 999).map(([k, n]) => `<button class="chip ${set.has(k) ? 'on' : ''}" data-k="${esc(k)}">${esc(k)}<small>${n}</small></button>`).join('');
  el.onclick = (ev) => { const b = ev.target.closest('.chip'); if (!b) return; const k = b.dataset.k; set.has(k) ? set.delete(k) : set.add(k); b.classList.toggle('on'); goList(); };
}
function buildFilters() {
  chips($('#fTech'), counts('techniques'), state.f.tech);
  chips($('#fReag'), counts('reagents'), state.f.reag);
  renderSampleChips();
  const sc = {}; state.entries.forEach(e => sc[e.source] = (sc[e.source] || 0) + 1);
  chips($('#fSource'), Object.entries(sc).map(([k, n]) => [k, n]), state.f.src);
  $('#fSource').querySelectorAll('.chip').forEach(b => b.firstChild.textContent = SOURCES[b.dataset.k] || b.dataset.k);
  chips($('#fHas'), [['images', state.entries.filter(e => e.images).length], ['tables', state.entries.filter(e => e.tables).length]], state.f.has);
}
function renderSampleChips() { const q = state.sampleQ.toLowerCase(); chips($('#fSamp'), counts('samples').filter(([k]) => !q || k.toLowerCase().includes(q)), state.f.samp, 80); }
function filtered() {
  const f = state.f; let list = state.entries; let hits = null;
  if (state.q.trim()) { const r = state.mini.search(state.q.trim()); hits = new Map(r.map(x => [x.id, x])); if (!r.length) { const r2 = state.mini.search(state.q.trim(), { combineWith: 'OR' }); hits = new Map(r2.map(x => [x.id, x])); } list = list.filter(e => hits.has(e.id)); }
  const all = (set, arr) => [...set].every(k => (arr || []).includes(k));
  list = list.filter(e => (!f.from || e.date >= f.from) && (!f.to || e.date <= f.to) && all(f.tech, e.tags.techniques) && all(f.reag, e.tags.reagents) && all(f.samp, e.tags.samples) && (!f.src.size || f.src.has(e.source)) && (!f.has.has('images') || e.images) && (!f.has.has('tables') || e.tables));
  return { list, hits };
}
function snippet(text, q) {
  if (!q) return esc(text.slice(0, 220));
  const words = q.toLowerCase().split(/\s+/).filter(w => w.length > 1); const low = text.toLowerCase();
  let pos = -1; for (const w of words) { pos = low.indexOf(w); if (pos >= 0) break; }
  const s = Math.max(0, pos - 80); let out = esc((s ? '…' : '') + text.slice(s, s + 240));
  words.forEach(w => { out = out.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
  return out;
}
function goList() { if (!/^#\/?(calendar)?$/.test(location.hash) && location.hash !== '') location.hash = '#/'; else route(); }

// ---------- views ----------
function setNav(n) { document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === n)); }
function viewTimeline() {
  setNav('timeline'); const { list } = filtered(); const desc = localStorage.getItem('portal.order') !== 'asc';
  const L = desc ? [...list].reverse() : list; let html = `<div class="statusline"><span>${list.length} of ${state.entries.length} entries${list.length ? ` · ${fmtDate(list[0].date)} → ${fmtDate(list[list.length - 1].date)}` : ''}</span><span><button class="btn small" id="order">${desc ? 'Newest first' : 'Oldest first'} ⇅</button></span></div>`;
  let cur = '';
  for (const e of L) {
    const m = e.date.slice(0, 7); if (m !== cur) { cur = m; html += `<div class="month">${MONTHS[+m.slice(5) - 1]} ${m.slice(0, 4)}</div>`; }
    const [y, mo, d] = e.date.split('-'); const wd = new Date(e.date + 'T12:00:00').toLocaleDateString('en-GB', { weekday: 'short' });
    html += `<a class="card" href="#/entry/${encodeURIComponent(e.id)}"><div class="d">${+d} ${MONTHS[+mo - 1].slice(0, 3)}<small>${wd} ${y}</small></div><div><h3>${esc(e.title || '(untitled)')}</h3><div class="snip">${snippet(e.text, state.q)}</div><div class="tags">${e.tags.techniques.slice(0, 6).map(t => `<span class="tag">${esc(t)}</span>`).join('')}${e.tags.samples.slice(0, 5).map(t => `<span class="tag s">${esc(t)}</span>`).join('')}${e.images ? `<span class="tag s">🖼 ${e.images}</span>` : ''}${e.tables ? `<span class="tag s">▦ ${e.tables}</span>` : ''}</div></div></a>`;
  }
  if (!list.length) html += '<p class="loading">No entries match. Try clearing filters.</p>';
  $('#main').innerHTML = html;
  $('#order').onclick = () => { localStorage.setItem('portal.order', desc ? 'asc' : 'desc'); viewTimeline(); };
}
function viewCalendar() {
  setNav('calendar'); const { list } = filtered(); const set = new Map(list.map(e => [e.date, e.id])); const allD = new Map(state.entries.map(e => [e.date, e.id]));
  if (!state.entries.length) return;
  const y0 = +state.entries[0].date.slice(0, 4), y1 = Math.max(+state.entries[state.entries.length - 1].date.slice(0, 4), new Date().getFullYear());
  let html = `<div class="statusline"><span>Days with entries are highlighted (${list.length} match current filters).</span></div><div class="cal">`;
  for (let y = y1; y >= y0; y--) {
    html += `<div class="calyear"><h3>${y}</h3><div class="calgrid">`;
    for (let m = 0; m < 12; m++) {
      const first = new Date(y, m, 1); const days = new Date(y, m + 1, 0).getDate(); const off = (first.getDay() + 6) % 7;
      let n = 0; let cells = 'MTWTFSS'.split('').map(c => `<span>${c}</span>`).join('') + '<span></span>'.repeat(off);
      for (let d = 1; d <= days; d++) { const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`; if (allD.has(iso)) { n++; cells += `<a href="#/entry/${encodeURIComponent(allD.get(iso))}" class="${set.has(iso) ? '' : 'dim'}" title="${esc(state.byId[allD.get(iso)].title)}">${d}</a>`; } else cells += `<span>${d}</span>`; }
      html += `<div class="calm"><h5>${MONTHS[m]} <small style="color:var(--muted)">${n || ''}</small></h5><div class="days">${cells}</div></div>`;
    }
    html += '</div></div>';
  }
  $('#main').innerHTML = html + '</div>';
}
async function viewEntry(id) {
  setNav(''); $('#main').innerHTML = '<div class="loading">Loading…</div>';
  let e; try { e = await getEntry(id); } catch (err) { $('#main').innerHTML = `<p class="loading">${esc(err.message)}</p>`; return; }
  const i = state.entries.findIndex(x => x.id === id); const prev = state.entries[i - 1], next = state.entries[i + 1];
  const docLink = e.source?.fileId ? `<a href="https://docs.google.com/document/d/${e.source.fileId}/edit" target="_blank" rel="noopener">original Google Doc</a>` : 'added in portal';
  const tags = e.tags || {};
  const allTags = [...(tags.techniques || []).map(t => ['tech', t]), ...(tags.samples || []).map(t => ['samp', t]), ...(tags.reagents || []).map(t => ['reag', t]), ...(tags.custom || []).map(t => ['custom', t])];
  $('#main').innerHTML = `
  <div class="pager">${prev ? `<a class="btn small" href="#/entry/${encodeURIComponent(prev.id)}">‹ ${fmtDate(prev.date)}</a>` : '<span></span>'}${next ? `<a class="btn small" href="#/entry/${encodeURIComponent(next.id)}">${fmtDate(next.date)} ›</a>` : '<span></span>'}</div>
  <article class="entry">
   <header><div><h1>${fmtDate(e.date)}</h1><div class="meta">${esc(e.title || '')}<br>Source: ${docLink}${e.updated ? ` · edited ${esc(e.updated.replace('T', ' ').slice(0, 16))}` : ''}</div></div>
   <div style="display:flex;gap:6px;flex-shrink:0"><button class="btn small" id="perma">🔗 Link</button><a class="btn small" href="#/edit/${encodeURIComponent(e.id)}">✎ Edit</a></div></header>
   ${e.date_note ? `<div class="note">${esc(e.date_note)}</div>` : ''}
   <div class="tags">${allTags.map(([k, t]) => `<button class="chip" data-k="${k}" data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div>
   ${(e.experiments || []).length > 1 ? `<nav class="toc"><b>Experiments</b><ol>${e.experiments.map((x, j) => `<li><a href="#" data-sub="${j}">${esc(x.replace(/^\d+\.\s*/, ''))}</a></li>`).join('')}</ol></nav>` : ''}
   <div class="md">${renderMD(e.body)}</div>
  </article>
  <div class="pager">${prev ? `<a class="btn small" href="#/entry/${encodeURIComponent(prev.id)}">‹ ${fmtDate(prev.date)}</a>` : '<span></span>'}${next ? `<a class="btn small" href="#/entry/${encodeURIComponent(next.id)}">${fmtDate(next.date)} ›</a>` : '<span></span>'}</div>`;
  window.scrollTo(0, 0);
  $('#perma').onclick = () => { const u = location.href.split('#')[0] + '#/entry/' + encodeURIComponent(e.id); navigator.clipboard?.writeText(u); toast('Permalink copied: ' + u); };
  const hs = [...document.querySelectorAll('.md h3')];
  document.querySelectorAll('[data-sub]').forEach(a => a.onclick = (ev) => { ev.preventDefault(); hs[+a.dataset.sub]?.scrollIntoView({ behavior: 'smooth' }); });
  document.querySelectorAll('.entry .tags .chip').forEach(b => b.onclick = () => { const map = { tech: state.f.tech, samp: state.f.samp, reag: state.f.reag }; if (map[b.dataset.k]) { map[b.dataset.k].add(b.dataset.t); buildFilters(); location.hash = '#/'; } else { $('#q').value = state.q = b.dataset.t; location.hash = '#/'; } });
  const imgs = [...document.querySelectorAll('.md img')]; imgs.forEach((im, j) => { im.loading = 'lazy'; im.onclick = () => lightbox(imgs, j); });
}
function lightbox(imgs, j) {
  const lb = $('#lightbox'), im = lb.querySelector('img'), cap = lb.querySelector('.lb-cap');
  const show = (k) => { j = (k + imgs.length) % imgs.length; im.src = imgs[j].src; cap.textContent = `${j + 1} / ${imgs.length}  ${imgs[j].alt || ''}`; };
  show(j); lb.hidden = false;
  lb.querySelector('.lb-prev').onclick = (ev) => { ev.stopPropagation(); show(j - 1); };
  lb.querySelector('.lb-next').onclick = (ev) => { ev.stopPropagation(); show(j + 1); };
  lb.onclick = (ev) => { if (ev.target === lb || ev.target.classList.contains('lb-close')) lb.hidden = true; };
  document.onkeydown = (ev) => { if (lb.hidden) return; if (ev.key === 'Escape') lb.hidden = true; if (ev.key === 'ArrowLeft') show(j - 1); if (ev.key === 'ArrowRight') show(j + 1); };
}

// ---------- editor ----------
const TABLE_TMPL = '\n| Reagent | Volume |\n| :---- | :---- |\n|  |  |\n|  |  |\n';
async function viewEditor(id) {
  setNav(id ? '' : 'new');
  let e;
  if (id) { try { e = JSON.parse(JSON.stringify(await getEntry(id))); } catch (err) { $('#main').innerHTML = esc(err.message); return; } }
  else { const today = new Date(); const iso = new Date(today.getTime() - today.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); e = { date: iso, title: '', body: localStorage.getItem('portal.draft') || '### 1. \n\n', tags: { custom: [] }, source: { doc: 'portal' } }; }
  const hasToken = !!GH.token(); const s = GH.settings();
  $('#main').innerHTML = `<div class="editor">
    <h2>${id ? 'Edit entry · ' + fmtDate(e.date) : 'New entry'}</h2>
    ${hasToken ? '' : '<div class="note">No GitHub token yet. Add one in <a href="#/settings">Settings</a> to save. Your draft is kept in this browser.</div>'}
    <div class="row"><label>Date<input type="date" id="eDate" value="${esc(e.date)}" ${id ? 'disabled' : ''}></label>
      <label style="flex:1">Title / summary (optional; defaults to experiment headings)<input type="text" id="eTitle" value="${esc(e.title || '')}"></label>
      <label style="flex:1">Extra tags (comma separated)<input type="text" id="eTags" value="${esc((e.tags.custom || []).join(', '))}"></label></div>
    <div class="toolbar">
      <button class="btn small" data-ins="### N. Experiment title\n">H Experiment</button>
      <button class="btn small" data-wrap="**">B</button><button class="btn small" data-wrap="*"><i>I</i></button>
      <button class="btn small" data-ins="- ">• List</button><button class="btn small" data-ins="${esc(TABLE_TMPL)}">▦ Table</button>
      <button class="btn small" data-ins="\n| 98°C | 3 min |\n| :---- | :---- |\n| 98°C | 10 s |\n| 55°C | 15 s |\n| 72°C | 30 s |\n| 72°C | 5 min |\n| 4°C | HOLD |\n">PCR program</button>
      <label class="btn small" style="flex-direction:row">🖼 Image<input type="file" id="eImg" accept="image/*" multiple hidden></label>
      <span style="flex:1"></span>
      <span class="meta" style="color:var(--muted);font-size:12.5px;align-self:center">Saves to ${esc(s.owner)}/${esc(s.repo)}@${esc(s.branch)}</span>
      <button class="btn primary" id="eSave">${id ? 'Save changes' : 'Save entry'}</button>
    </div>
    <div class="split"><textarea id="body" spellcheck="false">${esc(e.body)}</textarea><div id="preview" class="md"></div></div>
    <p style="color:var(--muted);font-size:12.5px">Markdown: tables with pipes, <code>### 1. Title</code> for each sub-experiment. Paste or drag images into the editor to upload them. Ctrl/⌘+S saves.</p>
  </div>`;
  const ta = $('#body'), pv = $('#preview'); const pending = {}; // path -> b64 for uploaded images not yet committed
  const refresh = () => { let md = ta.value; for (const [p, d] of Object.entries(pending)) md = md.split('(' + p + ')').join('(' + d.url + ')'); pv.innerHTML = renderMD(md); if (!id) localStorage.setItem('portal.draft', ta.value); };
  ta.oninput = refresh; refresh();
  const insert = (txt) => { const a = ta.selectionStart, b = ta.selectionEnd; ta.setRangeText(txt.replace(/\\n/g, '\n'), a, b, 'end'); ta.focus(); refresh(); };
  document.querySelectorAll('[data-ins]').forEach(b => b.onclick = () => insert(b.dataset.ins));
  document.querySelectorAll('[data-wrap]').forEach(b => b.onclick = () => { const w = b.dataset.wrap, a = ta.selectionStart, z = ta.selectionEnd; ta.setRangeText(w + ta.value.slice(a, z) + w, a, z, 'end'); refresh(); });
  async function addImages(files) {
    for (const f of files) {
      if (!f.type.startsWith('image/')) continue;
      if (f.size > 20e6) { toast('Image too large (>20 MB): ' + f.name); continue; }
      const date = $('#eDate').value || e.date; const safe = f.name.replace(/[^\w.-]+/g, '_').toLowerCase() || 'image.png';
      const path = `assets/img/uploads/${date}-${Date.now().toString(36)}-${safe}`;
      const b64 = await new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result.split(',')[1]); r.readAsDataURL(f); });
      pending[path] = { b64, url: URL.createObjectURL(f) };
      insert(`\n![${f.name.replace(/\.[^.]+$/, '')}](${path})\n`);
    }
  }
  $('#eImg').onchange = (ev) => addImages([...ev.target.files]);
  ta.addEventListener('paste', (ev) => { const fs = [...(ev.clipboardData?.files || [])]; if (fs.length) { ev.preventDefault(); addImages(fs); } });
  ta.addEventListener('dragover', (ev) => { ev.preventDefault(); ta.classList.add('drop'); });
  ta.addEventListener('dragleave', () => ta.classList.remove('drop'));
  ta.addEventListener('drop', (ev) => { ev.preventDefault(); ta.classList.remove('drop'); addImages([...ev.dataTransfer.files]); });
  const save = async () => {
    if (!GH.token()) { toast('Add a GitHub token in Settings first.'); return; }
    const btn = $('#eSave'); btn.disabled = true; btn.textContent = 'Saving…';
    try {
      const date = $('#eDate').value; if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Pick a date');
      let newId = id;
      if (!newId) { newId = date; let n = 1; while (state.byId[newId]) newId = `${date}-${++n}`; }
      const body = ta.value.replace(/\r\n/g, '\n');
      // upload images that are still referenced
      for (const [p, d] of Object.entries(pending)) if (body.includes('(' + p + ')')) { btn.textContent = 'Uploading image…'; await GH.putFile(p, d.b64, `Add image ${p.split('/').pop()} for ${newId}`); }
      const experiments = [...body.matchAll(/^###\s+(.+)$/gm)].map(m => m[1].trim());
      const at = autoTags(body); const custom = $('#eTags').value.split(',').map(x => x.trim()).filter(Boolean);
      const title = $('#eTitle').value.trim() || experiments.slice(0, 3).map(x => x.replace(/^\d+\.\s*/, '')).join('; ') || plain(body).trim().slice(0, 120);
      const entry = Object.assign({}, e, { id: newId, date, title, body, experiments, images: [...body.matchAll(/!\[[^\]]*\]\(([^)\s]+)\)/g)].map(m => m[1]), tables: (body.match(/^\| *:?-{3,}/gm) || []).length, tags: { ...at, custom }, updated: new Date().toISOString() });
      if (!entry.source || !entry.source.doc) entry.source = { doc: 'portal' };
      btn.textContent = 'Committing entry…';
      await GH.putText(`data/entries/${newId}.json`, JSON.stringify(entry, null, 1), `${id ? 'Edit' : 'Add'} notebook entry ${newId}`);
      const rec = indexRecord(entry);
      btn.textContent = 'Updating index…';
      await GH.updateJSON('data/index.json', (idx) => { idx = idx || { entries: [] }; const k = idx.entries.findIndex(x => x.id === newId); if (k >= 0) idx.entries[k] = rec; else idx.entries.push(rec); idx.entries.sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0); idx.generated = new Date().toISOString(); return idx; }, `Index ${newId}`);
      // immediate effect locally
      cache[newId] = entry; const ov = overlay(); ov[newId] = { index: rec, entry }; setOverlay(ov);
      const list = state.entries.filter(x => x.id !== newId); list.push(rec); setEntries(list); buildFilters();
      if (!id) localStorage.removeItem('portal.draft');
      toast('Saved & committed ✔ (the public site refreshes in ~1 min; you see it now)'); location.hash = '#/entry/' + encodeURIComponent(newId);
    } catch (err) { toast('Save failed: ' + err.message, 8000); btn.disabled = false; btn.textContent = 'Retry save'; }
  };
  $('#eSave').onclick = save;
  document.onkeydown = (ev) => { if ((ev.ctrlKey || ev.metaKey) && ev.key === 's') { ev.preventDefault(); save(); } };
}
function viewSettings() {
  setNav('settings'); const s = GH.settings();
  $('#main').innerHTML = `<div class="settings"><h2>Settings</h2>
   <p style="color:var(--muted);font-size:13.5px">Entries are saved as commits to your GitHub repository via the GitHub API. Your token is stored <b>only in this browser's localStorage</b> and is never committed. Use a fine-grained token limited to this repo with <i>Contents: Read and write</i>.</p>
   <label>Owner<input id="sOwner" value="${esc(s.owner)}"></label><label>Repository<input id="sRepo" value="${esc(s.repo)}"></label><label>Branch<input id="sBranch" value="${esc(s.branch)}"></label>
   <label>GitHub token ${GH.token() ? '(saved – leave blank to keep)' : ''}<input id="sTok" type="password" placeholder="github_pat_…" autocomplete="off"></label>
   <div style="display:flex;gap:8px"><button class="btn primary" id="sSave">Save</button><button class="btn" id="sTest">Test token</button><button class="btn" id="sForget">Forget token</button></div>
   <p id="sOut" style="font-size:13.5px"></p></div>`;
  $('#sSave').onclick = () => { GH.save({ owner: $('#sOwner').value.trim(), repo: $('#sRepo').value.trim(), branch: $('#sBranch').value.trim() || 'main' }); const t = $('#sTok').value.trim(); if (t) GH.setToken(t); $('#sTok').value = ''; toast('Settings saved in this browser'); viewSettings(); };
  $('#sForget').onclick = () => { GH.setToken(''); toast('Token removed'); viewSettings(); };
  $('#sTest').onclick = async () => { try { const u = await GH.whoami(); const f = await GH.getFile('data/index.json'); $('#sOut').textContent = `✔ Authenticated as ${u.login}; ${f ? 'index found in repo' : 'index.json not found in repo/branch'}.`; } catch (e) { $('#sOut').textContent = '✖ ' + e.message; } };
}

// ---------- routing ----------
function route() {
  document.onkeydown = null; $('#lightbox').hidden = true;
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  if (h.startsWith('entry/')) return viewEntry(h.slice(6));
  if (h.startsWith('edit/')) return viewEditor(h.slice(5));
  if (h === 'new') return viewEditor(null);
  if (h === 'settings') return viewSettings();
  if (h === 'calendar') return viewCalendar();
  return viewTimeline();
}
window.addEventListener('hashchange', route);
let qt; $('#q').addEventListener('input', (ev) => { clearTimeout(qt); qt = setTimeout(() => { state.q = ev.target.value; goList(); }, 150); });
document.addEventListener('keydown', (ev) => { if (ev.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { ev.preventDefault(); $('#q').focus(); } });
$('#fFrom').onchange = (ev) => { state.f.from = ev.target.value; goList(); };
$('#fTo').onchange = (ev) => { state.f.to = ev.target.value; goList(); };
$('#sampleFilter').oninput = (ev) => { state.sampleQ = ev.target.value; renderSampleChips(); };
$('#clearFilters').onclick = () => { Object.values(state.f).forEach(v => v instanceof Set && v.clear()); state.f.from = state.f.to = ''; $('#fFrom').value = $('#fTo').value = ''; $('#q').value = state.q = ''; buildFilters(); goList(); };
$('#themeBtn').onclick = () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; localStorage.setItem('theme', t); };
load().catch(err => { $('#main').innerHTML = `<p class="loading">Failed to load notebook: ${esc(err.message)}</p>`; });
})();
