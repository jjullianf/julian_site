// Julian Frick – Website. Inhalte kommen aus /content/*.json (bearbeitbar unter /admin).
const PIECES = {"uni": {"x": 0.54, "y": 25.21, "w": 29.25, "h": 33.62, "clip": "polygon(89.7% 1.1%,60.8% 0.9%,59.2% 1.9%,53.7% 0.0%,37.7% 2.5%,36.4% 3.3%,32.9% 12.3%,28.8% 16.9%,27.4% 22.8%,8.5% 23.7%,8.4% 48.1%,0.7% 50.3%,0.0% 52.1%,0.0% 99.7%,99.2% 99.8%,99.9% 75.2%,97.9% 54.6%,92.7% 50.3%,92.7% 31.5%,90.3% 23.1%)"}, "tower": {"x": 30.02, "y": 10.11, "w": 17.58, "h": 38.94, "clip": "polygon(17.2% 11.7%,17.0% 38.5%,15.0% 40.2%,7.7% 41.3%,5.8% 42.5%,3.7% 60.1%,1.7% 68.6%,2.9% 69.3%,5.8% 69.3%,7.1% 70.4%,7.1% 77.0%,6.1% 79.9%,1.0% 83.5%,0.0% 94.8%,12.8% 98.2%,45.2% 99.9%,81.3% 98.8%,98.0% 94.4%,99.8% 86.6%,98.5% 70.4%,97.8% 68.0%,93.4% 64.5%,92.5% 64.5%,87.8% 68.4%,85.7% 78.7%,84.7% 80.5%,82.7% 81.1%,77.7% 81.1%,75.9% 80.6%,75.0% 79.5%,75.0% 62.4%,75.9% 61.3%,77.4% 60.9%,81.1% 61.6%,85.5% 61.2%,85.2% 35.7%,83.8% 30.9%,83.5% 23.6%,81.5% 23.5%,78.2% 24.9%,72.6% 25.7%,66.7% 27.6%,63.6% 27.3%,62.4% 26.0%,62.4% 20.1%,63.3% 19.0%,64.8% 18.6%,64.1% 15.3%,64.5% 11.6%,55.1% 8.5%,44.0% 5.7%,42.3% 4.1%,42.2% 0.0%,40.8% 0.1%,40.8% 4.4%,39.5% 5.7%)"}, "laptop": {"x": 48.27, "y": 33.72, "w": 16.39, "h": 20.32, "clip": "polygon(0.0% 78.8%,1.1% 88.0%,78.5% 99.7%,93.2% 82.7%,93.2% 72.5%,97.6% 61.8%,99.8% 1.8%,33.0% 0.0%,29.2% 56.5%)"}, "sign": {"x": 73.74, "y": 41.38, "w": 9.84, "h": 20.85, "clip": "polygon(43.5% 0.0%,40.4% 1.0%,36.5% 4.8%,37.1% 10.2%,35.3% 11.2%,18.5% 11.7%,0.6% 14.5%,1.2% 35.2%,33.1% 32.9%,37.1% 33.9%,36.2% 39.5%,1.5% 42.3%,2.4% 62.2%,4.9% 63.0%,36.5% 61.0%,36.5% 83.4%,30.1% 75.8%,29.2% 87.8%,22.5% 81.4%,26.1% 93.9%,21.3% 98.0%,25.8% 99.2%,42.6% 98.2%,50.2% 99.7%,59.6% 99.7%,62.3% 99.0%,59.9% 95.7%,65.0% 90.1%,59.9% 89.8%,64.4% 81.1%,56.8% 85.7%,57.1% 79.8%,52.0% 84.7%,50.2% 84.7%,49.5% 60.5%,70.2% 58.4%,81.5% 58.7%,99.7% 46.4%,79.6% 36.2%,49.5% 38.8%,48.3% 37.8%,48.3% 32.9%,53.8% 31.4%,83.3% 30.4%,99.7% 18.9%,82.1% 8.2%,74.5% 7.7%,67.5% 9.2%,48.9% 10.2%,47.7% 2.8%)"}, "train": {"x": 83.34, "y": 25.53, "w": 15.88, "h": 17.55, "clip": "polygon(1.3% 40.9%,2.3% 44.5%,8.1% 43.9%,10.0% 46.4%,9.6% 60.0%,7.0% 72.7%,0.0% 76.1%,3.4% 79.1%,8.5% 79.1%,16.6% 82.7%,27.7% 81.5%,33.9% 84.5%,36.3% 83.9%,42.4% 85.8%,44.4% 88.2%,48.4% 87.6%,50.7% 85.2%,58.0% 89.4%,62.7% 88.8%,66.7% 91.8%,69.9% 90.0%,74.2% 94.8%,81.5% 95.5%,83.2% 99.7%,85.1% 99.4%,85.9% 93.6%,87.4% 92.4%,92.8% 93.0%,95.3% 95.5%,98.1% 95.5%,99.8% 90.9%,99.4% 74.8%,96.0% 49.4%,93.0% 46.1%,92.7% 42.4%,85.7% 34.5%,71.0% 13.9%,46.3% 2.4%,45.4% 0.0%,38.8% 0.0%,37.5% 3.0%,23.7% 20.0%)"}, "cupid": {"x": 77.5, "y": 12.5, "w": 4.4, "h": 5.76}, "figur": {"x": 44.26, "y": 54.15, "w": 8.79, "h": 43.62}, "ki": {"x": 57.79, "y": 80.94, "w": 6.31, "h": 7.15}, "flugzeug": {"x": 42.76, "y": 4.79, "w": 7.48, "h": 4.47}, "fahnen": {"x": 93.66, "y": 18.72, "w": 3.17, "h": 4.47}, "dokumente": {"x": 89.23, "y": 84.36, "w": 8.97, "h": 13.3}, "herzwolke": {"x": 77.51, "y": 11.28, "w": 5.38, "h": 6.38}};
const SPOTS = [
  {id:"ausbildung", piece:"uni",    tilt:"-1.5deg"},
  {id:"erfahrung",  piece:"tower",  tilt:"1.2deg"},
  {id:"projekte",   piece:"laptop", tilt:"-1deg"},
  {id:"suche",      piece:"sign",   tilt:"1.5deg"},
  {id:"kontakt",    piece:"train",  tilt:"-1deg"},
  {id:"willkommen", piece:"figur",  tilt:"0deg", label:"Willkommen"},
];
// Versteckte Easter Eggs (ohne Beschriftung) und reine Deko
// Reihenfolge = Nummerierung (1/3, 2/3, 3/3) – wird im Titel automatisch gesetzt
const EGGS = [
  {id:"easteregg2", piece:"ki"},
  {id:"easteregg3", piece:"flugzeug"},
  {id:"easteregg",  piece:"herzwolke"},
];
const DECO = [ {piece:"fahnen", cls:"sway"} ];
const HINT_KEY = "jf-hint-seen";
const BASE = document.documentElement.dataset.base || "";
const url = p => !p ? "" : /^(https?:|mailto:|tel:|data:|blob:)/.test(p) ? p : BASE + p.replace(/^\/+/, "");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const md = s => window.marked ? marked.parse(String(s || "")) : "<p>" + esc(s).replace(/\n\n/g, "</p><p>") + "</p>";
const isPdf = p => /\.pdf($|\?)/i.test(p || "");
const cache = {};
async function load(name){
  if (!cache[name]) cache[name] = fetch(url("content/" + name + ".json"), {cache:"no-cache"}).then(r => { if(!r.ok) throw new Error(name); return r.json(); });
  return cache[name];
}

/* ---------- Szene ---------- */
async function buildScene(){
  const stage = document.getElementById("stage");
  let g = {}; try { g = await load("allgemein"); } catch(e) {}
  const labels = g.beschriftungen || {};
  if (g.name) { document.getElementById("name").textContent = g.name; }
  if (g.hinweis) document.getElementById("hint").textContent = g.hinweis;
  for (const s of SPOTS){
    const p = PIECES[s.piece], label = labels[s.id] || s.label || s.id;
    const b = document.createElement("button");
    b.type = "button"; b.className = "spot"; b.dataset.open = s.id; b.setAttribute("aria-label", label);
    b.style.cssText = `left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%;--tilt:${s.tilt}`;
    b.innerHTML = `<img src="${url("img/pieces/"+s.piece+".webp")}" alt=""${p.clip ? ` style="clip-path:${p.clip}"` : ""}><span class="tag">${esc(label)}</span>`;
    if (s.id === "willkommen") b.classList.add("figure");
    const cxp = p.x + p.w/2; if (cxp > 85) b.classList.add("tag-r"); else if (cxp < 12) b.classList.add("tag-l");
    if (s.id === "suche"){
      const top = g.schild_oben || "Marketing", bottom = g.schild_unten || "Ab Feb. 2027";
      b.insertAdjacentHTML("beforeend", `<span class="board b1">${esc(top)}</span><span class="board b2">${esc(bottom)}</span>`);
    }
    stage.appendChild(b);
  }
  for (const d of DECO){
    const p = PIECES[d.piece], el = document.createElement("img");
    el.className = "deco " + (d.cls || ""); el.alt = ""; el.src = url("img/pieces/"+d.piece+".webp");
    el.style.cssText = `left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%`;
    stage.appendChild(el);
  }
  for (const g of EGGS){
    const c = PIECES[g.piece], e = document.createElement("button");
    e.type = "button"; e.className = "spot egg"; e.dataset.open = g.id; e.setAttribute("aria-label", "Etwas Verstecktes");
    e.style.cssText = `left:${c.x}%;top:${c.y}%;width:${c.w}%;height:${c.h}%`;
    e.innerHTML = `<img src="${url("img/pieces/"+g.piece+".webp")}" alt="">`;
    stage.appendChild(e);
  }
  // Dokumentenstapel unten rechts: öffnet «CV & Downloads»
  { const p = PIECES.dokumente, b = document.createElement("button");
    b.type = "button"; b.className = "spot docs-pile"; b.dataset.open = "downloads";
    const lab = g.dokumente_label || "CV/Dokumente"; b.setAttribute("aria-label", lab);
    b.style.cssText = `left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%;--tilt:2deg`;
    b.innerHTML = `<img src="${url("img/pieces/dokumente.webp")}" alt=""><span class="pile-label" aria-hidden="true">${esc(lab)}</span>`;
    stage.appendChild(b); }
  // «Hier starten»-Hinweis links neben der Figur, verschwindet nach dem ersten Klick
  let seen = false; try { seen = sessionStorage.getItem(HINT_KEY) === "1"; } catch(e) {}
  if (!seen){
    const h = document.createElement("div"); h.className = "hint"; h.id = "hint-start"; h.setAttribute("aria-hidden","true");
    h.innerHTML = `<span>Hier starten</span><svg viewBox="0 0 70 50" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8 C 30 6, 48 16, 60 38"/><path d="M47 36 L61 40 L63 25"/></svg>`;
    stage.appendChild(h);
  }
  stage.addEventListener("click", ev => { const b = ev.target.closest("[data-open]"); if (b) openSheet(b.dataset.open); });
}

/* ---------- Dokument-Vorschau (PDF oder Bild) ---------- */
let pdfLib = null;
function getPdf(){
  if (pdfLib) return pdfLib;
  pdfLib = new Promise((res, rej) => {
    if (window.pdfjsLib) return res(window.pdfjsLib);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    s.onload = () => { pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"; res(pdfjsLib); };
    s.onerror = rej; document.head.appendChild(s);
  });
  return pdfLib;
}
const pdfDocs = {};
async function openPdf(src){
  const lib = await getPdf();
  if (!pdfDocs[src]) pdfDocs[src] = lib.getDocument(src).promise;
  return pdfDocs[src];
}
async function renderPage(doc, n, width){
  const page = await doc.getPage(n);
  const v1 = page.getViewport({scale:1});
  const scale = width / v1.width * (window.devicePixelRatio || 1);
  const vp = page.getViewport({scale});
  const c = document.createElement("canvas"); c.width = vp.width; c.height = vp.height;
  await page.render({canvasContext:c.getContext("2d"), viewport:vp}).promise;
  return c;
}
async function fillThumb(el, src){
  try {
    if (isPdf(src)) { const d = await openPdf(src); el.replaceChildren(await renderPage(d, 1, 180)); }
    else { const i = new Image(); i.src = src; i.alt = ""; el.replaceChildren(i); }
  } catch(e) { el.innerHTML = '<span class="nothumb">PDF</span>'; }
}
function docCard(d){
  const src = url(d.datei);
  const b = document.createElement("button");
  b.type = "button"; b.className = "doc";
  b.innerHTML = `<span class="thumb"></span><span class="t">${esc(d.titel)}</span>`;
  b.addEventListener("click", () => openViewer(d.titel, src));
  fillThumb(b.querySelector(".thumb"), src);
  return b;
}
async function openViewer(title, src){
  const v = document.getElementById("viewer");
  document.getElementById("v-title").textContent = title || "";
  const dl = document.getElementById("v-dl"); dl.href = src; dl.setAttribute("download", "");
  const body = document.getElementById("v-body");
  body.innerHTML = '<p class="vmsg">Wird geladen …</p>';
  v.hidden = false; document.getElementById("v-close").focus();
  try {
    if (isPdf(src)) {
      const d = await openPdf(src); const w = Math.min(900, body.clientWidth - 32);
      body.replaceChildren();
      for (let n = 1; n <= d.numPages; n++) body.appendChild(await renderPage(d, n, w));
    } else { const i = new Image(); i.src = src; i.alt = title || ""; body.replaceChildren(i); }
  } catch(e) {
    if (isPdf(src)) { const f = document.createElement("iframe"); f.src = src; f.title = title || "Dokument"; f.className = "vframe"; body.replaceChildren(f); }
    else body.innerHTML = '<p class="vmsg">Das Dokument konnte nicht geladen werden. Über «Herunterladen» können Sie es direkt öffnen.</p>';
  }
}
function closeViewer(){ document.getElementById("viewer").hidden = true; }

/* ---------- Inhalte der Orte ---------- */
const RENDER = {
  async ausbildung(c, box){
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>`;
    for (const a of c.abschnitte || []){
      const s = document.createElement("section"); s.className = "block";
      s.innerHTML = `<div><h3>${esc(a.ueberschrift)}</h3>${a.untertitel ? `<p class="sub">${esc(a.untertitel)}</p>` : ""}</div><div class="prose">${md(a.text)}</div>`;
      const docs = (a.dokumente || []).filter(d => d.datei);
      if (docs.length){ const w = document.createElement("div"); w.className = "docs"; docs.forEach(d => w.appendChild(docCard(d))); s.appendChild(w); }
      box.appendChild(s);
    }
  },
  async erfahrung(c, box){
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.einleitung ? `<div class="lead">${md(c.einleitung)}</div>` : ""}`;
    for (const j of c.stellen || []){
      const s = document.createElement("section"); s.className = "block job";
      s.innerHTML = `<div><h3>${esc(j.titel)}</h3>${j.untertitel ? `<p class="sub">${esc(j.untertitel)}</p>` : ""}<div class="prose">${md(j.text)}</div></div><div class="side"></div>`;
      if (j.empfehlung && j.empfehlung.datei) s.querySelector(".side").appendChild(docCard({titel:j.empfehlung.titel || "Empfehlungsschreiben", datei:j.empfehlung.datei}));
      box.appendChild(s);
    }
  },
  async projekte(c, box){
    const list = () => {
      box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.einleitung ? `<div class="lead">${md(c.einleitung)}</div>` : ""}<div class="projects"></div>`;
      const g = box.querySelector(".projects");
      (c.projekte || []).forEach((p, i) => {
        const b = document.createElement("button"); b.type = "button"; b.className = "proj";
        b.innerHTML = `<span class="ph">${p.bild ? `<img src="${esc(url(p.bild))}" alt="">` : ""}</span><strong>${esc(p.titel)}</strong>${p.kurz ? `<small>${esc(p.kurz)}</small>` : ""}`;
        b.addEventListener("click", () => detail(i)); g.appendChild(b);
      });
    };
    const detail = i => {
      const p = c.projekte[i];
      box.innerHTML = `<button type="button" class="back">← Alle Projekte</button><div class="detail">${p.bild ? `<img src="${esc(url(p.bild))}" alt="">` : ""}<h2 id="s-title">${esc(p.titel)}</h2><div class="prose">${md(p.text)}</div>${p.link ? `<p><a class="linkbtn" href="${esc(p.link)}" target="_blank" rel="noopener">Website ansehen ↗</a></p>` : ""}</div>`;
      box.querySelector(".back").addEventListener("click", () => { list(); box.querySelector(".proj:nth-child("+(i+1)+")")?.focus(); });
      box.querySelector(".back").focus();
    };
    list();
  },
  async suche(c, box){
    const punkte = (c.punkte || []).filter(p => p.label || p.wert);
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.untertitel ? `<p class="lead">${esc(c.untertitel)}</p>` : ""}${c.text ? `<div class="prose">${md(c.text)}</div>` : ""}${punkte.length ? `<ul class="list"${c.text ? ' style="margin-top:20px"' : ""}>${punkte.map(p => `<li><b>${esc(p.label)}</b><span>${esc(p.wert)}</span></li>`).join("")}</ul>` : ""}`;
  },
  async kontakt(c, box){
    const href = p => {
      let l = (p.link || "").trim(), v = (p.wert || "").trim();
      if (!l && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) l = v;
      if (!l && /^\+?[\d\s()/-]{7,}$/.test(v)) l = v;
      if (!l) return "";
      if (/^(mailto:|tel:|https?:)/i.test(l)) return l;
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)) return "mailto:" + l;
      if (/^\+?[\d\s()/-]{7,}$/.test(l)) return "tel:" + l.replace(/[^\d+]/g, "");
      return "https://" + l.replace(/^\/+/, "");
    };
    const item = p => { const h = href(p); const ext = /^https?:/i.test(h);
      return `<li><b>${esc(p.label)}</b><span>${h ? `<a href="${esc(h)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${esc(p.wert)}</a>` : esc(p.wert)}</span></li>`; };
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.text ? `<div class="lead">${md(c.text)}</div>` : ""}<ul class="list">${(c.punkte||[]).map(item).join("")}</ul>`;
  },
  async downloads(c, box){
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.text ? `<div class="lead">${md(c.text)}</div>` : ""}<ul class="files"></ul>`;
    const ul = box.querySelector(".files");
    for (const f of (c.dateien || []).filter(f => f.datei)){
      const li = document.createElement("li"); const src = url(f.datei);
      li.innerHTML = `<span>${esc(f.titel)}</span><span class="acts"><button type="button">Ansehen</button><a href="${esc(src)}" download>Herunterladen</a></span>`;
      li.querySelector("button").addEventListener("click", () => openViewer(f.titel, src));
      ul.appendChild(li);
    }
  },
  async easteregg(c, box){
    const fotos = (c.fotos || []).filter(f => f.bild);
    box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2>${c.text ? `<div class="lead">${md(c.text)}</div>` : ""}<div class="photos">${fotos.length ? "" : '<p class="empty">Fotos folgen.</p>'}</div>`;
    const g = box.querySelector(".photos");
    fotos.forEach(f => { const b = document.createElement("button"); b.type = "button"; b.innerHTML = `<img src="${esc(url(f.bild))}" alt="${esc(f.beschreibung || "")}">`; b.addEventListener("click", () => openViewer(f.beschreibung || c.titel, url(f.bild))); g.appendChild(b); });
  },
};
RENDER.easteregg2 = RENDER.easteregg;
RENDER.easteregg3 = RENDER.easteregg;
RENDER.willkommen = async (c, box) => {
  box.innerHTML = `<h2 id="s-title">${esc(c.titel)}</h2><div class="prose">${md(c.text)}</div>`;
};
const NARROW = new Set(["suche","kontakt","downloads","easteregg","easteregg2","easteregg3","willkommen"]);
let lastFocus = null;
async function openSheet(id){
  lastFocus = document.activeElement;
  if (id === "willkommen"){ document.getElementById("hint-start")?.remove(); try { sessionStorage.setItem(HINT_KEY, "1"); } catch(e) {} }
  const veil = document.getElementById("veil"), sheet = document.getElementById("sheet"), box = document.getElementById("s-body");
  sheet.classList.toggle("narrow", NARROW.has(id));
  box.innerHTML = '<p class="empty">Wird geladen …</p>';
  veil.hidden = false; sheet.scrollTop = 0; document.getElementById("s-close").focus();
  try {
    let c = await load(id); const ei = EGGS.findIndex(e => e.id === id);
    if (ei >= 0 && c.titel) c = {...c, titel: /\d+\s*\/\s*\d+/.test(c.titel) ? c.titel.replace(/\d+\s*\/\s*\d+/, `${ei+1}/${EGGS.length}`) : c.titel};
    await RENDER[id](c, box);
  }
  catch(e){ box.innerHTML = '<p class="empty">Dieser Inhalt konnte nicht geladen werden.</p>'; }
}
function closeSheet(){ document.getElementById("veil").hidden = true; lastFocus?.focus?.(); }

document.getElementById("s-close").addEventListener("click", closeSheet);
document.getElementById("veil").addEventListener("click", e => { if (e.target.id === "veil") closeSheet(); });
document.getElementById("v-close").addEventListener("click", closeViewer);
document.getElementById("viewer").addEventListener("click", e => { if (e.target.id === "viewer" || e.target.id === "v-body") closeViewer(); });
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!document.getElementById("viewer").hidden) closeViewer();
  else if (!document.getElementById("veil").hidden) closeSheet();
});
buildScene();
const sc = document.getElementById("scroller");
requestAnimationFrame(() => { sc.scrollLeft = (sc.scrollWidth - sc.clientWidth) / 2; });
