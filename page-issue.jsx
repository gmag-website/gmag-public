/* The printed issue on the website: a booklet the reader turns page by page
   (IssueFlipbook), and the page that is given over to it (IssuePage, #/issue/1).
   Pages are the print proof rendered by tools/build-issue-flipbook.py into
   uploads/issue-01/pages/.

   A Persian book: the spine is on the right. Closed, the cover lies on the left
   half of the stage; a leaf turns from the left half over the spine to the right,
   so reading advances leftwards exactly as in the printed copy. */

const ISSUE_DIR = 'uploads/issue-01/';
const faDigits = (n) => String(n).replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);

/* one request for the manifest, shared by the booklet and the page around it */
let ISSUE_MANIFEST = null;
const loadIssueManifest = () => ISSUE_MANIFEST || (ISSUE_MANIFEST = fetch(ISSUE_DIR + 'manifest.json')
  .then((r) => r.json()).catch(() => { ISSUE_MANIFEST = null; return { pages: 0 }; }));

/* The chapters of the slider, from manifest.chapters: the print contents page, written by
   tools/build-issue-flipbook.py. A piece that starts on printed folio f is page index f + 1
   and first lies open once floor((f + 2) / 2) leaves are turned; that is its stop on the
   slider. Two pieces that open on one spread share a stop. The pages before the first piece
   (cover, شناسنامه, فهرست) are the leading stop. No chapters in the manifest: null, and the
   slider stays the plain one. */
/* the web page of a piece in the issue, when the site carries it (an awaited piece has none yet) */
const readHref = (c) => {
  if (!c || !c.slug || /^ph-/.test(c.slug)) return null;
  const posts = typeof GOSAN_POSTS !== 'undefined' ? GOSAN_POSTS : [];
  return posts.some((p) => p.slug === c.slug) ? '/article/' + c.slug : null;
};
const FLIP_THUMB = 14;   // px, --flip-thumb in site.css: the thumb's centre stops half of it short of each end
const joinFa = (xs) => [...new Set(xs.filter(Boolean))].join(' · ');
function issueChapters(chapters, leaves, lastFolio) {
  if (!Array.isArray(chapters) || !leaves) return null;
  const list = chapters.filter((c) => c && c.title && Number.isFinite(c.folio)).sort((a, b) => a.folio - b.folio);
  if (!list.length) return null;
  /* each piece runs to the page before the next one begins; the last one to the last printed
     folio (blank leaves excluded) — the slider names the range, not the first page (EIC, 8 Oct 2026) */
  list.forEach((c, i) => { c.to = i + 1 < list.length ? list[i + 1].folio - 1 : (lastFolio || c.folio); if (c.to < c.folio) c.to = c.folio; });
  const stops = [{ at: 0, section: '', title: 'جلد و فهرست', author: '', page: '' }];
  list.forEach((c) => {
    const at = Math.min(leaves - 1, Math.max(1, Math.floor((c.folio + 2) / 2)));
    const last = stops[stops.length - 1];
    if (last.items && last.at === at) last.items.push(c); else stops.push({ at, items: [c] });
  });
  stops.forEach((s, i) => {
    s.end = i + 1 < stops.length ? stops[i + 1].at : leaves;
    if (!s.items) return;
    const first = s.items[0].folio, last = s.items[s.items.length - 1].to;
    s.section = joinFa(s.items.map((c) => c.section));
    s.title = s.items.map((c) => c.title).join(' · ');
    s.author = joinFa(s.items.map((c) => c.author));
    s.page = 'ص ' + faDigits(first) + (last > first ? '–' + faDigits(last) : '');
  });
  return { list, stops };
}

/* How thick the closed issue is, as a share of its trim width — from the data, so another issue
   with another page count looks right with no edit here: the leaves inside the cover at 0.11 mm
   each (a 115 g/m² text paper) and the two cover boards at 0.3 mm. 132 pages on a 160 mm trim
   come to 7.6 mm. It is drawn a little fuller than life, so a slim issue still shows its edge
   on a screen. */
const ISSUE_FULLER = 1.3;
const issueDepth = (m) => {
  const mm = Math.max(0, ((m.pages || 0) - 4) / 2) * 0.11 + 2 * 0.3;
  return +((mm / (m.width || 160)) * ISSUE_FULLER).toFixed(4);
};

/* goTo = { index, n }: the page around the book asks for a page (0-based image index; n makes
   each request a new one). onOpen([lo, hi]) reports the page indices that lie open. */
function IssueFlipbook({ issue = 1, goTo, onOpen }) {
  const [manifest, setManifest] = React.useState(null);
  const [turned, setTurned] = React.useState(0);      // leaves already turned over to the right
  const [anim, setAnim] = React.useState(null);        // { dir: 'fwd' | 'back', from: turned }
  const [single, setSingle] = React.useState(false);   // one page at a time on a narrow screen
  const [cur, setCur] = React.useState(0);             // page index in single mode
  const stageRef = React.useRef(null);
  const touch = React.useRef(null);
  const lock = React.useRef(false);   // one turn at a time, whatever fires the handlers
  const mountedAt = React.useRef(Date.now());
  const [sound, setSound] = React.useState(true);
  // zoom: the book scales inside a clipping box; past 100 % the viewer swaps in the sharp
  // page set (pages-hi, twice the pixels) so the type stays crisp, and the book can be dragged
  const [zoom, setZoom] = React.useState(1);
  const clipRef = React.useRef(null);
  const drag = React.useRef(null);
  const setZ = (fn) => setZoom((z) => Math.min(2.5, Math.max(1, +fn(z).toFixed(2))));
  const zoomIn = (e) => { if (!trusted(e)) return; if (posedRef.current) { land(); return; } setZ((z) => z + 0.25); };
  const zoomOut = (e) => { if (trusted(e)) setZ((z) => z - 0.25); };
  const onWheel = (e) => { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); if (posedRef.current) { land(); return; } setZ((z) => z - e.deltaY * 0.01); };
  const zoomAt = React.useRef(null);   // { px, py }: where a double tap asked to zoom, as shares of the stage
  React.useEffect(() => {              // keep the centre of the spread (or the tapped point) in view as the zoom changes
    const c = clipRef.current; if (!c) return;
    const at = zoomAt.current; zoomAt.current = null;
    const maxX = c.scrollWidth - c.clientWidth, maxY = c.scrollHeight - c.clientHeight;
    const L = Math.max(0, Math.min(maxX, (at ? at.px : 0.5) * c.scrollWidth - c.clientWidth / 2));
    const T = Math.max(0, Math.min(maxY, (at ? at.py : 0.5) * c.scrollHeight - c.clientHeight / 2));
    const rtl = getComputedStyle(c).direction === 'rtl';   // in a right-to-left box scrollLeft runs 0 … −max
    c.scrollLeft = rtl ? L - maxX : L; c.scrollTop = T;
  }, [zoom]);
  /* on a touch screen a tap on the page waits a moment for a second one: one tap turns the page,
     two taps zoom in on the point tapped (or back out) — the way a phone reader expects */
  const coarse = React.useMemo(() => !!((window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || (navigator.maxTouchPoints || 0) > 0), []);
  const tapTimer = React.useRef(null);
  React.useEffect(() => () => clearTimeout(tapTimer.current), []);
  const onPageTap = (e, turn) => {
    if (!coarse) { if (zoom === 1) turn(e); return; }
    if (tapTimer.current) {
      clearTimeout(tapTimer.current); tapTimer.current = null;
      if (posedRef.current || !trusted(e)) return;
      const r = stageRef.current.getBoundingClientRect();
      zoomAt.current = { px: (e.clientX - r.left) / r.width, py: (e.clientY - r.top) / r.height };
      setZoom((z) => (z > 1 ? 1 : 2.5));
      return;
    }
    const z0 = zoom;
    tapTimer.current = setTimeout(() => { tapTimer.current = null; if (z0 === 1) turn(e); }, 260);
  };
  const onDragStart = (e) => { if (zoom === 1) return; const c = clipRef.current; drag.current = { x: e.clientX, y: e.clientY, l: c.scrollLeft, t: c.scrollTop }; };
  const onDragMove = (e) => { const d = drag.current; if (!d) return; const c = clipRef.current; c.scrollLeft = d.l - (e.clientX - d.x); c.scrollTop = d.t - (e.clientY - d.y); };
  const onDragEnd = () => { drag.current = null; };
  const swish = React.useRef(null);
  const turnSound = () => {
    if (!sound) return;
    try {
      if (!swish.current) { swish.current = new Audio(ISSUE_DIR + 'page-turn.mp3?v=3'); swish.current.volume = 0.55; }
      swish.current.currentTime = 0; swish.current.play().catch(() => {});
    } catch (err) { /* no sound is fine */ }
  };

  React.useEffect(() => {
    let on = true;
    loadIssueManifest().then((m) => { if (on) setManifest(m); });
    return () => { on = false; };
  }, []);
  React.useEffect(() => {
    const check = () => {
      const w = window.innerWidth, h = window.innerHeight;
      // held upright (a phone, a tablet in portrait): one page at a time, and the reader is asked to
      // turn the device; held sideways: the spread, sized to the height of the screen, with the leaves
      // turning as on a desk (EIC, 8 Oct 2026). A narrow window on a desktop reads as upright too.
      setSingle(h > w && w < 1100);
    };
    check(); window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const N = manifest ? manifest.pages : 0;
  const leaves = N / 2;
  const src = (i) => (i >= 0 && i < N ? ISSUE_DIR + (zoom > 1 ? 'pages-hi/p' : 'pages/p') + String(i + 1).padStart(3, '0') + '.jpg' : null);

  // preload the neighbours so a turn never waits for the network
  React.useEffect(() => {
    if (!N) return;
    const want = single ? [cur - 1, cur + 1, cur + 2] : [2 * turned - 3, 2 * turned - 2, 2 * turned + 1, 2 * turned + 2, 2 * turned + 3];
    want.forEach((i) => { const s = src(i); if (s) { const im = new Image(); im.src = s; } });
  }, [N, turned, cur, single, zoom]);

  // only a real gesture turns a page: the site's image tooling fires synthetic clicks on images
  const trusted = (e) => { if (!e) return true; const n = e.nativeEvent || e; return n.isTrusted !== false; };

  /* The closed issue as an object. On arrival the book stands at an angle, so its thickness can
     be seen. The first thing the reader does with it — a click or tap on it, Enter or Space, an
     arrow, the slider, a page asked for from the contents — brings it to the flat closed position,
     and from there it is the book it always was, for the rest of the visit. That first gesture
     turns no page; what was asked for with it (a slider position, a page) is done once the book
     has come to rest. posed: true (at an angle) → 'landing' (on its way) → false (flat). */
  const [posed, setPosed] = React.useState(true);
  const posedRef = React.useRef(true);
  const afterLand = React.useRef(null);
  const landTimer = React.useRef(null);
  const refocus = React.useRef(false);
  const [aim, setAim] = React.useState(null);   // a slider position chosen before the book had come to rest
  const settle = () => {
    if (posedRef.current === false) return;
    clearTimeout(landTimer.current);
    const a = document.activeElement;           // opened from the keyboard: the focus goes on to the book's own control
    refocus.current = !!(a && a.classList && a.classList.contains('flip-obj'));
    posedRef.current = false; setPosed(false); lock.current = false;
    const then = afterLand.current; afterLand.current = null;
    if (then) then();
  };
  const land = (then) => {
    if (then) afterLand.current = then;
    if (posedRef.current !== true) return;      // already flat, or on its way
    const still = document.body.dataset.motion === 'off' || !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (still) { settle(); return; }            // no flight: the two states change places at once
    posedRef.current = 'landing'; setPosed('landing'); lock.current = true;
    landTimer.current = setTimeout(settle, 900);   // should the transition never report its end
  };
  React.useEffect(() => () => clearTimeout(landTimer.current), []);
  React.useEffect(() => {
    if (posed || !refocus.current) return;
    refocus.current = false;
    const b = stageRef.current && stageRef.current.querySelector('.flip-btn.is-next');
    if (b) b.focus({ preventScroll: true });
  }, [posed]);
  const next = React.useCallback((e) => {
    if (!trusted(e) || Date.now() - mountedAt.current < 800) return;
    if (posedRef.current) { land(); return; }
    if (single) { setCur((c) => Math.min(N - 1, c + 1)); return; }
    if (lock.current || turned >= leaves) return;
    lock.current = true; turnSound();
    setAnim({ dir: 'fwd', from: turned });
    setTimeout(() => { setTurned((t) => t + 1); setAnim(null); lock.current = false; }, 760);
  }, [turned, leaves, single, N]);
  const prev = React.useCallback((e) => {
    if (!trusted(e) || Date.now() - mountedAt.current < 800) return;
    if (posedRef.current) { land(); return; }
    if (single) { setCur((c) => Math.max(0, c - 1)); return; }
    if (lock.current || turned <= 0) return;
    lock.current = true; turnSound();
    setAnim({ dir: 'back', from: turned });
    setTimeout(() => { setTurned((t) => t - 1); setAnim(null); lock.current = false; }, 760);
  }, [turned, single]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (!e.isTrusted) return;
      if (e.key === 'ArrowLeft') next(e);        // reading advances leftwards
      if (e.key === 'ArrowRight') prev(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // a page asked for from outside (the contents' page numbers): the book opens there at once,
  // with no leaf turning. It is no click on the book, so the trusted-gesture guard above is not
  // in play; a leaf in mid-turn is left to land first, and a book still at its angle is brought
  // flat first.
  React.useEffect(() => {
    if (!goTo || !N) return;
    const i = Math.min(N - 1, Math.max(0, goTo.index));
    const open = () => { setCur(i); setTurned(Math.min(leaves, Math.floor((i + 1) / 2))); };
    if (posedRef.current) { land(open); return; }
    if (!lock.current) { open(); return; }
    const wait = setTimeout(open, 800);
    return () => clearTimeout(wait);
  }, [goTo, N]);
  React.useEffect(() => {
    if (onOpen && N) onOpen(single ? [cur, cur] : [Math.max(0, 2 * turned - 1), Math.min(N - 1, 2 * turned)]);
  }, [N, turned, cur, single]);
  /* Which pages are read (EIC, 10 Oct 2026): when the open spread changes, the time the reader
     spent on the one before goes to the counter as «issue:lo-hi:seconds» (page image indices,
     folio = index − 1). Only time with the tab in view counts; nothing is sent in the preview. */
  const dwell = React.useRef(null);   // { key, ms, since }
  const flushDwell = () => {
    const d = dwell.current; if (!d) return;
    if (d.since) { d.ms += Date.now() - d.since; d.since = document.hidden ? 0 : Date.now(); }
    const secs = Math.min(1800, Math.round(d.ms / 1000)); d.ms = 0;
    if (secs >= 1 && window.gosanTrack) window.gosanTrack('page', issue + ':' + d.key + ':' + secs);
  };
  React.useEffect(() => {
    if (!N) return;
    flushDwell();
    const lo = single ? cur : Math.max(0, 2 * turned - 1), hi = single ? cur : Math.min(N - 1, 2 * turned);
    dwell.current = { key: lo + '-' + hi, ms: 0, since: document.hidden ? 0 : Date.now() };
  }, [N, turned, cur, single]);
  React.useEffect(() => {
    const vis = () => { const d = dwell.current; if (!d) return; if (document.hidden) flushDwell(); else if (!d.since) d.since = Date.now(); };
    document.addEventListener('visibilitychange', vis);
    addEventListener('pagehide', flushDwell);
    return () => { document.removeEventListener('visibilitychange', vis); removeEventListener('pagehide', flushDwell); flushDwell(); dwell.current = null; };
  }, []);

  // the slider's chapters, and the small label that names the one under the pointer or the thumb
  const chapters = React.useMemo(() => issueChapters(manifest && manifest.chapters, leaves, manifest ? (manifest.pages || 0) - 4 - (manifest.blank_leaves || 0) : 0), [manifest, leaves]);
  const slideRef = React.useRef(null);
  const tipRef = React.useRef(null);
  const tipWas = React.useRef(null);                 // the last label, kept while it fades out
  const [hover, setHover] = React.useState(null);    // the pointer along the track: 0 at the cover … 1 at the back cover
  const [grab, setGrab] = React.useState(false);     // the thumb is being dragged
  const along = (x) => {                             // a clientX as a share of the thumb's travel, from the right
    const r = slideRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (r.right - x - FLIP_THUMB / 2) / (r.width - FLIP_THUMB)));
  };
  const onSlideMove = (e) => { if (e.pointerType === 'mouse') setHover(along(e.clientX)); };
  const onSlideLeave = () => setHover(null);
  React.useEffect(() => {
    if (!grab) return;
    const drop = (e) => {
      setGrab(false);
      const r = slideRef.current && slideRef.current.getBoundingClientRect();   // released away from the slider, or by a finger: no label
      const over = r && e.pointerType === 'mouse' && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      setHover(over ? along(e.clientX) : null);
    };
    window.addEventListener('pointerup', drop); window.addEventListener('pointercancel', drop);
    return () => { window.removeEventListener('pointerup', drop); window.removeEventListener('pointercancel', drop); };
  }, [grab]);
  const thumbAt = aim != null ? aim : turned;
  const tip = !chapters || single ? null
    : grab ? { v: thumbAt, f: thumbAt / leaves }
    : hover != null ? { v: Math.round(hover * leaves), f: hover } : null;
  React.useLayoutEffect(() => {                      // centred on the pointer or the thumb, never past either end of the slider
    const el = tipRef.current, box = slideRef.current;
    if (!el || !box || !tip) return;
    const W = box.clientWidth, w = el.offsetWidth;
    const x = FLIP_THUMB / 2 + tip.f * (W - FLIP_THUMB);
    el.style.right = Math.max(0, Math.min(W - w, x - w / 2)) + 'px';
  });

  const onTouchStart = (e) => { touch.current = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null; };
  const onTouchEnd = (e) => {
    const t0 = touch.current; touch.current = null;
    if (!t0 || zoom > 1) return;                  // zoomed: a drag moves about the page, it never turns it
    const dx = e.changedTouches[0].clientX - t0.x, dy = e.changedTouches[0].clientY - t0.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;   // an upright drag scrolls the site
    if (dx < 0) next(e); else prev(e);
  };

  if (!manifest) return <div className="flip-wrap" aria-busy="true" />;
  if (!N) return null;

  // what lies flat under a turning leaf
  const t = anim ? anim.from : turned;
  let leftIdx, rightIdx, leaf = null;
  if (anim && anim.dir === 'fwd') {
    leftIdx = 2 * (t + 1); rightIdx = 2 * t - 1;
    leaf = { front: 2 * t, back: 2 * t + 1, turnedClass: 'is-turning' };
  } else if (anim && anim.dir === 'back') {
    leftIdx = 2 * t; rightIdx = 2 * t - 3;
    leaf = { front: 2 * t - 2, back: 2 * t - 1, turnedClass: 'is-returning' };
  } else {
    leftIdx = 2 * t; rightIdx = 2 * t - 1;
  }
  const folio = (i) => (i >= 2 && i <= N - 3 ? faDigits(i - 1) : null);
  const where = single
    ? (cur === 0 ? 'جلد' : cur === N - 1 ? 'پشت جلد' : (folio(cur) ? 'صفحهٔ ' + folio(cur) : ''))
    : (turned === 0 ? 'جلد' : turned >= leaves ? 'پشت جلد'
       : (() => { const fs = [folio(rightIdx), folio(leftIdx)].filter(Boolean); return fs.length > 1 ? 'صفحه‌های ' + fs.join('–') : fs.length ? 'صفحهٔ ' + fs[0] : ''; })());

  // the piece that lies open: on a spread, the last one to start on or before its left page
  // (both, when two start on the one spread); on a single page, the one that page belongs to
  const stopAt = (v) => chapters.stops.reduce((hit, s) => (s.at <= v ? s : hit));
  let piece = '', pieceC = null;
  if (chapters && single) {
    if (folio(cur)) chapters.list.forEach((c) => { if (c.folio + 1 <= cur) { piece = c.title; pieceC = c; } });
  } else if (chapters && turned > 0 && turned < leaves) {
    const s = stopAt(turned);
    piece = s.items ? s.title : '';
  }
  // the label: what a click at that point opens
  if (tip) tipWas.current = tip.v >= leaves ? { section: '', title: 'پشت جلد', author: '', page: '' } : stopAt(tip.v);
  const label = tipWas.current;
  const hot = tip && chapters ? stopAt(Math.min(tip.v, leaves - 1)) : null;

  return (
    <section className="flip-wrap" aria-label={'شمارهٔ ' + faDigits(issue) + ' گاهنامه، ورق بزنید'}>
      <div
        ref={stageRef}
        className={'flip-stage' + (single ? ' is-single' : '') + (turned === 0 ? ' is-closed' : '') + (turned >= leaves ? ' is-ended' : '') + (zoom > 1 ? ' is-zoomed' : '') + (posed ? ' is-posed' : '')}
        onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onWheel={onWheel}
        onMouseDown={onDragStart} onMouseMove={onDragMove} onMouseUp={onDragEnd} onMouseLeave={onDragEnd}
      >
        <div className="flip-clip" ref={clipRef}><div className="flip-zoomlayer" style={{ width: (zoom * 100) + '%', height: (zoom * 100) + '%' }}>
        {single ? (
          <div className="flip-one" onClick={(e) => onPageTap(e, next)}>
            <img src={src(cur)} alt="" />
          </div>
        ) : (
          <div className="flip-book">
            <div className="flip-half is-right" onClick={(e) => onPageTap(e, prev)}>{src(rightIdx) ? <img src={src(rightIdx)} alt="" /> : null}</div>
            <div className="flip-half is-left" onClick={(e) => onPageTap(e, next)}>{src(leftIdx) ? <img src={src(leftIdx)} alt="" /> : null}</div>
            {leaf ? (
              <div className={'flip-leaf ' + leaf.turnedClass}>
                <div className="flip-face is-front">{src(leaf.front) ? <img src={src(leaf.front)} alt="" /> : null}<i className="flip-shade" /></div>
                <div className="flip-face is-back">{src(leaf.back) ? <img src={src(leaf.back)} alt="" /> : null}<i className="flip-shade" /></div>
              </div>
            ) : null}
            <i className="flip-spine" />
          </div>
        )}
        </div></div>
        {/* the closed issue at an angle: the cover, the spine on its right, the block of pages at its
            head, a shadow on the ground. It lies over the flat cover's own box and is gone once flat. */}
        {posed ? (
          <div
            className={'flip-obj' + (posed === true ? ' is-posed' : ' is-landing')} role="button" tabIndex={0}
            aria-label={'جلد شمارهٔ ' + faDigits(issue) + '، ورق بزنید'}
            style={{ '--flip-r': issueDepth(manifest), '--flip-ar': (manifest.width || 2) / (manifest.height || 3) }}
            onClick={(e) => { if (trusted(e)) land(); }}
            onKeyDown={(e) => { if (trusted(e) && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); land(); } }}
            onTransitionEnd={(e) => { if (e.target === e.currentTarget && e.propertyName === 'transform' && posedRef.current === 'landing') settle(); }}
          >
            <i className="flip-obj-ground" />
            <i className="flip-obj-head" />
            <i className="flip-obj-spine" />
            <img className="flip-obj-cover" src={src(0)} alt="" />
          </div>
        ) : null}
        <button type="button" dir="ltr" className="flip-btn is-next" onClick={next} aria-label="ورق بعد" disabled={single ? cur >= N - 1 : turned >= leaves}>‹</button>
        <button type="button" dir="ltr" className="flip-btn is-prev" onClick={prev} aria-label="ورق قبل" disabled={single ? cur <= 0 : turned <= 0}>›</button>
      </div>

      {/* a slider under the book, right to left like the reading: drag to any spread */}
      {!single ? (
        <div
          ref={slideRef} className={'flip-slide' + (chapters ? ' has-chapters' : '')}
          onPointerMove={chapters ? onSlideMove : undefined} onPointerLeave={chapters ? onSlideLeave : undefined}
        >
          {/* the track in chapters: a hairline gap where each piece begins, gold as far as the reader has come */}
          {chapters ? (
            <div className="flip-chapters" aria-hidden="true">
              {chapters.stops.map((s) => (
                <i
                  key={s.at} className={'flip-seg' + (s === hot ? ' is-hot' : '')}
                  style={{ right: (s.at / leaves * 100) + '%', width: ((s.end - s.at) / leaves * 100) + '%' }}
                ><b style={{ width: (Math.min(1, Math.max(0, (turned - s.at) / (s.end - s.at))) * 100) + '%' }} /></i>
              ))}
            </div>
          ) : null}
          <input
            type="range" min="0" max={leaves} value={aim != null ? aim : turned} className="flip-range" aria-label="رفتن به صفحه"
            aria-valuetext={chapters ? [where, piece].filter(Boolean).join('، ') : undefined}
            onPointerDown={chapters ? () => setGrab(true) : undefined}
            onChange={(e) => {
              if (!trusted(e)) return;
              const v = +e.target.value;
              if (posedRef.current) { setAim(v); land(() => { setTurned(v); setAim(null); }); return; }
              if (!lock.current) setTurned(v);
            }}
          />
          {chapters ? (
            <div ref={tipRef} className={'flip-tip' + (tip ? ' is-on' : '')} aria-hidden="true">
              {label && (label.section || label.page) ? (
                <span className="flip-tip-top">
                  <span className="flip-tip-sec">{label.section}</span>
                  <span className="flip-tip-pg">{label.page}</span>
                </span>
              ) : null}
              {label ? (
                <span className="flip-tip-row">
                  <span className="flip-tip-ttl">{label.title}</span>
                  {label.author ? <span className="flip-tip-by">{label.author}</span> : null}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className={'flip-foot' + (chapters ? ' has-chapters' : '')}>
        <span className="flip-where">{where}{piece ? <span className="flip-where-ttl">{(where ? ' · ' : '') + piece}</span> : null}</span>
        {/* on a phone or an upright tablet a printed page is small: the same piece, set for the screen, is a tap away */}
        {single && readHref(pieceC) ? <a className="flip-read" href={readHref(pieceC)}>خواندن این نوشتار در وب‌سایت ←</a> : null}
        {single && coarse ? (
          <span className="flip-hint"><i className="flip-hint-ico" aria-hidden="true" />برای دیدن دوصفحه‌ای و ورق زدن، گوشی را بچرخانید · دو ضربه روی صفحه: بزرگ‌نمایی</span>
        ) : null}
        <div className="flip-actions">
          <span className="flip-zoom" role="group" aria-label="بزرگ‌نمایی">
            <button type="button" className="flip-zbtn" onClick={zoomOut} aria-label="کوچک‌تر" disabled={zoom <= 1}>−</button>
            <span className="flip-zval">{faDigits(Math.round(zoom * 100))}٪</span>
            <button type="button" className="flip-zbtn" onClick={zoomIn} aria-label="بزرگ‌تر" disabled={zoom >= 2.5}>+</button>
          </span>
          <button type="button" className="flip-link" onClick={(e) => { if (trusted(e)) setSound((v) => !v); }} aria-pressed={sound}>{sound ? 'صدا: روشن' : 'صدا: خاموش'}</button>
          {/* the issue is not offered as a file: the reader asks for the PDF and the
              desk sends the current one, so no older version stays in circulation */}
          <button type="button" className="flip-request" onClick={(e) => { if (trusted(e)) window.dispatchEvent(new CustomEvent('gosan:subscribe', { detail: 'print' })); }}>دریافت این شماره</button>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   The issue's own page (#/issue/1): the complete issue first, to be turned; then
   what is in it, who wrote it, and what is on its cover. Everything is read from
   the manifest (the print contents), the post registry and the portraits the site
   already has — nothing about the issue is typed in here but its two ISSNs and
   the cover sentence of the print colophon.
   --------------------------------------------------------------------------- */
const ISSUE_ISSN = { print: 'ISSN 3056-2201', online: 'ISSN 3056-221X' };   // legal/issn/04_ISSN-Zuteilung.md
const ISSUE_COVER_NOTE = 'نگارهٔ گوسان — جزئی از نگارهٔ بشقاب سیمین ساسانی؛ اصل اثر در موزهٔ ارمیتاژ، سن‌پترزبورگ.';

function IssuePage({ issue }) {
  const [manifest, setManifest] = React.useState(null);
  const [goTo, setGoTo] = React.useState(null);     // a page asked of the book: { index, n }
  const [open, setOpen] = React.useState(null);     // the page indices that lie open in the book: [lo, hi]
  const bookRef = React.useRef(null);
  React.useEffect(() => {
    let on = true;
    loadIssueManifest().then((m) => { if (on) setManifest(m); });
    return () => { on = false; };
  }, []);

  const N = manifest ? manifest.pages || 0 : 0;
  const n = (manifest && manifest.issue) || +issue || 1;
  const ch = issueChapters(manifest && manifest.chapters, N / 2);
  const list = ch ? ch.list : [];

  /* the piece on the site, if the site lists one: by slug, or by the very same title where
     the print build still carries a placeholder slug. The registry decides what is shown. */
  const flat = (t) => String(t || '').replace(/\s+/g, ' ').trim();
  const postFor = (c) => GOSAN_POSTS.find((p) => p.slug === c.slug) || GOSAN_POSTS.find((p) => flat(p.title) === flat(c.title)) || null;
  /* announced, text not yet in: the same list that makes the home-page cards inert */
  const awaited = (p) => !!p && typeof NO_LINK !== 'undefined' && NO_LINK.has(p.slug);
  const photos = typeof AUTHOR_PHOTOS !== 'undefined' ? AUTHOR_PHOTOS : {};

  /* the contents, section by section in the print order */
  const groups = [];
  list.forEach((c, k) => {
    const row = { c, post: postFor(c), from: c.folio + 1, to: k + 1 < list.length ? list[k + 1].folio : N - 3 };
    const g = groups[groups.length - 1];
    if (g && g.section === c.section) g.rows.push(row); else groups.push({ section: c.section, rows: [row] });
  });

  /* the people of the issue, in order of appearance; each leads to the first piece of theirs
     the site carries. A byline with neither a portrait nor a piece here is a collective one. */
  const people = [];
  list.forEach((c) => {
    if (!c.author) return;
    let who = people.find((w) => w.name === c.author);
    if (!who) { who = { name: c.author, photo: photos[c.author] || null, post: null, title: '', listed: false }; people.push(who); }
    const post = postFor(c);
    if (post) who.listed = true;
    if (post && !who.post && !awaited(post)) { who.post = post; who.title = c.title; }
    /* the guest of a conversation stands beside its author, as on the printed
       «نویسندگان این شماره» */
    const guest = typeof GUEST_BY_SLUG !== 'undefined' ? GUEST_BY_SLUG[c.slug] : null;
    if (guest && !people.find((w) => w.name === guest)) {
      people.push({ name: guest, photo: photos[guest] || null, post: post && !awaited(post) ? post : null, title: c.title, listed: !!post });
    }
  });
  const writers = people.filter((w) => w.photo || w.listed);
  const roll = list.find((c) => c.slug === 'contributors');   // the printed «نویسندگان این شماره», where the biographies are

  /* a page number is a control: the book opens at that page and comes back into view */
  const turnTo = (e, index) => {
    if (e && e.nativeEvent && e.nativeEvent.isTrusted === false) return;
    setGoTo({ index, n: Date.now() });
    const stage = bookRef.current && bookRef.current.querySelector('.flip-stage');
    if (!stage) return;
    const bar = document.querySelector('.site-header');
    const still = document.body.dataset.motion === 'off' || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    window.scrollTo({ top: Math.max(0, stage.getBoundingClientRect().top + window.scrollY - (bar ? bar.offsetHeight : 0) - 14), behavior: still ? 'auto' : 'smooth' });
  };
  const pageNo = (folio, label) => (
    <button type="button" className="issue-pg" onClick={(e) => turnTo(e, folio + 1)} aria-label={'رفتن به صفحهٔ ' + faDigits(folio)}>{label || faDigits(folio)}</button>
  );

  /* the line of facts, in two halves: when and how long; the two ISSNs. On a phone each half is a line. */
  const facts = [
    [typeof GOSAN_ISSUE_PUBLISHED === 'string' ? 'انتشار: ' + GOSAN_ISSUE_PUBLISHED : null, N ? faDigits(N - 4 - ((manifest && manifest.blank_leaves) || 0)) + ' صفحه' + (typeof GOSAN_ISSUE_PENDING === 'string' && GOSAN_ISSUE_PENDING ? ' ' + GOSAN_ISSUE_PENDING : '') : null],
    [<React.Fragment><bdi dir="ltr">{ISSUE_ISSN.print}</bdi> (چاپی)</React.Fragment>, <React.Fragment><bdi dir="ltr">{ISSUE_ISSN.online}</bdi> (برخط)</React.Fragment>],
  ].map((half) => half.filter(Boolean)).filter((half) => half.length);
  const dot = <React.Fragment> <i aria-hidden="true">·</i> </React.Fragment>;
  const subscribeLabel = typeof SUBSCRIBE_COPY !== 'undefined' ? SUBSCRIBE_COPY.issues.title : 'دریافت اشتراک گاهنامهٔ گوسان';

  return (
    <main className="issue-page" data-screen-label={ISSUE_MENU.fa}>
      {/* no display title (editor-in-chief, 3 Oct 2026): the issue line and the line of facts are
          the head, set quietly above the book. The heading stays for screen readers only. */}
      <header className="issue-head">
        <h1 className="issue-h1">{n === 1 ? ISSUE_MENU.fa : 'شمارهٔ ' + faDigits(n)}</h1>
        <p className="issue-line">{manifest && manifest.line ? manifest.line : '\u00a0'}</p>
        <p className="issue-facts">
          {facts.map((half, h) => (
            <React.Fragment key={h}>
              {h ? <span className="issue-facts-sep">{dot}</span> : null}
              <span className="issue-facts-half">{half.map((f, i) => <React.Fragment key={i}>{i ? dot : null}<span>{f}</span></React.Fragment>)}</span>
            </React.Fragment>
          ))}
        </p>
      </header>

      {/* the issue itself: the centre of the page */}
      <div ref={bookRef}><IssueFlipbook issue={n} goTo={goTo} onOpen={setOpen} /></div>

      <div className="issue-body">
        {groups.length ? (
          <section className="issue-sec">
            <div className="nc-sectionhead"><span className="nc-sh-label">در این شماره</span><span className="nc-sh-mark">◆</span></div>
            <div className="issue-toc">
              {groups.map((g) => (
                <div className="issue-toc-group" key={g.section + g.rows[0].c.folio}>
                  {g.section ? <h3 className="issue-toc-sec">{g.section}</h3> : null}
                  <ol>
                    {g.rows.map(({ c, post, from, to }) => (
                      <li key={c.slug} className={'issue-toc-row' + (open && from <= open[1] && to >= open[0] ? ' is-open' : '')}>
                        {pageNo(c.folio, faDigits(c.folio) + (c.to > c.folio ? '–' + faDigits(c.to) : ''))}
                        <span className="issue-toc-t">
                          {post && !awaited(post)
                            ? <a href={'/article/' + post.slug}>{c.title}</a>
                            : <span className={post ? 'is-awaited' : ''}>{c.title}</span>}
                          {awaited(post) ? <React.Fragment>{' '}<span className="issue-soon">به‌زودی</span></React.Fragment> : null}
                          {c.author ? <span className="issue-toc-by">{c.author}</span> : null}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {writers.length ? (
          <section className="issue-sec">
            <div className="nc-sectionhead">
              <span className="nc-sh-label">{roll ? roll.title : 'نویسندگان این شماره'}</span><span className="nc-sh-mark">◆</span>
              {roll ? <span className="issue-sh-pg">{pageNo(roll.folio, 'ص ' + faDigits(roll.folio) + (roll.to > roll.folio ? '–' + faDigits(roll.to) : ''))}</span> : null}
            </div>
            <ul className="issue-people">
              {writers.map((w) => {
                const face = w.photo
                  ? <img className="author-avatar" src={w.photo} alt="" />
                  : <span className="author-avatar author-avatar--mono" aria-hidden="true">{w.name.trim().charAt(0)}</span>;
                const name = <span className="issue-person-name">{w.name}</span>;
                return (
                  <li key={w.name}>
                    {w.post
                      ? <a className="issue-person" href={'/article/' + w.post.slug} title={w.title}>{face}{name}</a>
                      : <span className="issue-person">{face}{name}</span>}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {N ? (
          <section className="issue-sec">
            <div className="nc-sectionhead"><span className="nc-sh-label">روی جلد</span><span className="nc-sh-mark">◆</span></div>
            <div className="issue-cover">
              <button type="button" className="issue-cover-btn" onClick={(e) => turnTo(e, 0)} aria-label="جلد">
                <img src={ISSUE_DIR + 'pages/p001.jpg'} alt={'جلد شمارهٔ ' + faDigits(n)} />
              </button>
              <p>{ISSUE_COVER_NOTE}</p>
            </div>
          </section>
        ) : null}

        <div className="issue-foot">
          <button type="button" className="flip-request" onClick={() => window.dispatchEvent(new CustomEvent('gosan:subscribe', { detail: 'issues' }))}>{subscribeLabel}</button>
          <a className="issue-more" href="/archive">بایگانی همهٔ نوشتارها ←</a>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { IssueFlipbook, IssuePage });
