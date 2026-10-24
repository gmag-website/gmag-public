"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* The printed issue on the website: a booklet the reader turns page by page
   (IssueFlipbook), and the page that is given over to it (IssuePage, #/issue/1).
   Pages are the print proof rendered by tools/build-issue-flipbook.py into
   uploads/issue-01/pages/.

   A Persian book: the spine is on the right. Closed, the cover lies on the left
   half of the stage; a leaf turns from the left half over the spine to the right,
   so reading advances leftwards exactly as in the printed copy. */

var ISSUE_DIR = 'uploads/issue-01/';
var faDigits = function faDigits(n) {
  return String(n).replace(/[0-9]/g, function (d) {
    return '۰۱۲۳۴۵۶۷۸۹'[+d];
  });
};

/* one request for the manifest, shared by the booklet and the page around it */
var ISSUE_MANIFEST = null;
var loadIssueManifest = function loadIssueManifest() {
  return ISSUE_MANIFEST || (ISSUE_MANIFEST = fetch(ISSUE_DIR + 'manifest.json', {
    cache: 'no-cache'
  }).then(function (r) {
    return r.json();
  })["catch"](function () {
    ISSUE_MANIFEST = null;
    return {
      pages: 0
    };
  }));
};

/* The chapters of the slider, from manifest.chapters: the print contents page, written by
   tools/build-issue-flipbook.py. A piece that starts on printed folio f is page index f + 1
   and first lies open once floor((f + 2) / 2) leaves are turned; that is its stop on the
   slider. Two pieces that open on one spread share a stop. The pages before the first piece
   (cover, شناسنامه, فهرست) are the leading stop. No chapters in the manifest: null, and the
   slider stays the plain one. */
/* the web page of a piece in the issue, when the site carries it (an awaited piece has none yet) */
var readHref = function readHref(c) {
  if (!c || !c.slug || /^ph-/.test(c.slug)) return null;
  var posts = typeof GOSAN_POSTS !== 'undefined' ? GOSAN_POSTS : [];
  return posts.some(function (p) {
    return p.slug === c.slug;
  }) ? '/article/' + c.slug : null;
};
var FLIP_THUMB = 14; // px, --flip-thumb in site.css: the thumb's centre stops half of it short of each end
var joinFa = function joinFa(xs) {
  return _toConsumableArray(new Set(xs.filter(Boolean))).join(' · ');
};
function issueChapters(chapters, leaves, lastFolio) {
  if (!Array.isArray(chapters) || !leaves) return null;
  var list = chapters.filter(function (c) {
    return c && c.title && Number.isFinite(c.folio);
  }).sort(function (a, b) {
    return a.folio - b.folio;
  });
  if (!list.length) return null;
  /* each piece runs to the page before the next one begins; the last one to the last printed
     folio (blank leaves excluded) — the slider names the range, not the first page (EIC, 8 Oct 2026) */
  list.forEach(function (c, i) {
    c.to = i + 1 < list.length ? list[i + 1].folio - 1 : lastFolio || c.folio;
    if (c.to < c.folio) c.to = c.folio;
  });
  var stops = [{
    at: 0,
    section: '',
    title: 'جلد و فهرست',
    author: '',
    page: ''
  }];
  list.forEach(function (c) {
    var at = Math.min(leaves - 1, Math.max(1, Math.floor((c.folio + 2) / 2)));
    var last = stops[stops.length - 1];
    if (last.items && last.at === at) last.items.push(c);else stops.push({
      at: at,
      items: [c]
    });
  });
  stops.forEach(function (s, i) {
    s.end = i + 1 < stops.length ? stops[i + 1].at : leaves;
    if (!s.items) return;
    var first = s.items[0].folio,
      last = s.items[s.items.length - 1].to;
    s.section = joinFa(s.items.map(function (c) {
      return c.section;
    }));
    s.title = s.items.map(function (c) {
      return c.title;
    }).join(' · ');
    s.author = joinFa(s.items.map(function (c) {
      return c.author;
    }));
    s.page = 'ص ' + faDigits(first) + (last > first ? '–' + faDigits(last) : '');
  });
  return {
    list: list,
    stops: stops
  };
}

/* How thick the closed issue is, as a share of its trim width — from the data, so another issue
   with another page count looks right with no edit here: the leaves inside the cover at 0.11 mm
   each (a 115 g/m² text paper) and the two cover boards at 0.3 mm. 132 pages on a 160 mm trim
   come to 7.6 mm. It is drawn a little fuller than life, so a slim issue still shows its edge
   on a screen. */
var ISSUE_FULLER = 1.3;
var issueDepth = function issueDepth(m) {
  var mm = Math.max(0, ((m.pages || 0) - 4) / 2) * 0.11 + 2 * 0.3;
  return +(mm / (m.width || 160) * ISSUE_FULLER).toFixed(4);
};

/* goTo = { index, n }: the page around the book asks for a page (0-based image index; n makes
   each request a new one). onOpen([lo, hi]) reports the page indices that lie open. */
function IssueFlipbook(_ref) {
  var _ref$issue = _ref.issue,
    issue = _ref$issue === void 0 ? 1 : _ref$issue,
    goTo = _ref.goTo,
    onOpen = _ref.onOpen;
  var _React$useState = React.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    manifest = _React$useState2[0],
    setManifest = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    turned = _React$useState4[0],
    setTurned = _React$useState4[1]; // leaves already turned over to the right
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    anim = _React$useState6[0],
    setAnim = _React$useState6[1]; // { dir: 'fwd' | 'back', from: turned }
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    single = _React$useState8[0],
    setSingle = _React$useState8[1]; // one page at a time on a narrow screen
  var _React$useState9 = React.useState(0),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    cur = _React$useState0[0],
    setCur = _React$useState0[1]; // page index in single mode
  var stageRef = React.useRef(null);
  var touch = React.useRef(null);
  var lock = React.useRef(false); // one turn at a time, whatever fires the handlers
  var mountedAt = React.useRef(Date.now());
  var _React$useState1 = React.useState(true),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    sound = _React$useState10[0],
    setSound = _React$useState10[1];
  // zoom: the book scales inside a clipping box; past 100 % the viewer swaps in the sharp
  // page set (pages-hi, twice the pixels) so the type stays crisp, and the book can be dragged
  var _React$useState11 = React.useState(1),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    zoom = _React$useState12[0],
    setZoom = _React$useState12[1];
  var clipRef = React.useRef(null);
  var drag = React.useRef(null);
  var setZ = function setZ(fn) {
    return setZoom(function (z) {
      return Math.min(2.5, Math.max(1, +fn(z).toFixed(2)));
    });
  };
  var zoomIn = function zoomIn(e) {
    if (!trusted(e)) return;
    if (posedRef.current) {
      land();
      return;
    }
    setZ(function (z) {
      return z + 0.25;
    });
  };
  var zoomOut = function zoomOut(e) {
    if (trusted(e)) setZ(function (z) {
      return z - 0.25;
    });
  };
  var onWheel = function onWheel(e) {
    if (!(e.ctrlKey || e.metaKey)) return;
    e.preventDefault();
    if (posedRef.current) {
      land();
      return;
    }
    setZ(function (z) {
      return z - e.deltaY * 0.01;
    });
  };
  var zoomAt = React.useRef(null); // { px, py }: where a double tap asked to zoom, as shares of the stage
  React.useEffect(function () {
    // keep the centre of the spread (or the tapped point) in view as the zoom changes
    var c = clipRef.current;
    if (!c) return;
    var at = zoomAt.current;
    zoomAt.current = null;
    var maxX = c.scrollWidth - c.clientWidth,
      maxY = c.scrollHeight - c.clientHeight;
    var L = Math.max(0, Math.min(maxX, (at ? at.px : 0.5) * c.scrollWidth - c.clientWidth / 2));
    var T = Math.max(0, Math.min(maxY, (at ? at.py : 0.5) * c.scrollHeight - c.clientHeight / 2));
    var rtl = getComputedStyle(c).direction === 'rtl'; // in a right-to-left box scrollLeft runs 0 … −max
    c.scrollLeft = rtl ? L - maxX : L;
    c.scrollTop = T;
  }, [zoom]);
  /* on a touch screen a tap on the page waits a moment for a second one: one tap turns the page,
     two taps zoom in on the point tapped (or back out) — the way a phone reader expects */
  var coarse = React.useMemo(function () {
    return !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches || (navigator.maxTouchPoints || 0) > 0);
  }, []);
  var tapTimer = React.useRef(null);
  React.useEffect(function () {
    return function () {
      return clearTimeout(tapTimer.current);
    };
  }, []);
  var onPageTap = function onPageTap(e, turn) {
    if (!coarse) {
      if (zoom === 1) turn(e);
      return;
    }
    if (tapTimer.current) {
      clearTimeout(tapTimer.current);
      tapTimer.current = null;
      if (posedRef.current || !trusted(e)) return;
      var r = stageRef.current.getBoundingClientRect();
      zoomAt.current = {
        px: (e.clientX - r.left) / r.width,
        py: (e.clientY - r.top) / r.height
      };
      setZoom(function (z) {
        return z > 1 ? 1 : 2.5;
      });
      return;
    }
    var z0 = zoom;
    tapTimer.current = setTimeout(function () {
      tapTimer.current = null;
      if (z0 === 1) turn(e);
    }, 260);
  };
  var onDragStart = function onDragStart(e) {
    if (zoom === 1) return;
    var c = clipRef.current;
    drag.current = {
      x: e.clientX,
      y: e.clientY,
      l: c.scrollLeft,
      t: c.scrollTop
    };
  };
  var onDragMove = function onDragMove(e) {
    var d = drag.current;
    if (!d) return;
    var c = clipRef.current;
    c.scrollLeft = d.l - (e.clientX - d.x);
    c.scrollTop = d.t - (e.clientY - d.y);
  };
  var onDragEnd = function onDragEnd() {
    drag.current = null;
  };
  var swish = React.useRef(null);
  var turnSound = function turnSound() {
    if (!sound) return;
    try {
      if (!swish.current) {
        swish.current = new Audio(ISSUE_DIR + 'page-turn.mp3?v=3');
        swish.current.volume = 0.55;
      }
      swish.current.currentTime = 0;
      swish.current.play()["catch"](function () {});
    } catch (err) {/* no sound is fine */}
  };
  React.useEffect(function () {
    var on = true;
    loadIssueManifest().then(function (m) {
      if (on) setManifest(m);
    });
    return function () {
      on = false;
    };
  }, []);
  React.useEffect(function () {
    var check = function check() {
      var w = window.innerWidth,
        h = window.innerHeight;
      // held upright (a phone, a tablet in portrait): one page at a time, and the reader is asked to
      // turn the device; held sideways: the spread, sized to the height of the screen, with the leaves
      // turning as on a desk (EIC, 8 Oct 2026). A narrow window on a desktop reads as upright too.
      setSingle(h > w && w < 1100);
    };
    check();
    window.addEventListener('resize', check);
    return function () {
      return window.removeEventListener('resize', check);
    };
  }, []);
  var N = manifest ? manifest.pages : 0;
  var leaves = N / 2;
  // ?v=<rev>: the manifest's fingerprint of the images, so a rebuilt page is never served from cache
  var rev = manifest && manifest.rev ? '?v=' + manifest.rev : '';
  var src = function src(i) {
    return i >= 0 && i < N ? ISSUE_DIR + (zoom > 1 ? 'pages-hi/p' : 'pages/p') + String(i + 1).padStart(3, '0') + '.jpg' + rev : null;
  };

  // preload the neighbours so a turn never waits for the network
  React.useEffect(function () {
    if (!N) return;
    var want = single ? [cur - 1, cur + 1, cur + 2] : [2 * turned - 3, 2 * turned - 2, 2 * turned + 1, 2 * turned + 2, 2 * turned + 3];
    want.forEach(function (i) {
      var s = src(i);
      if (s) {
        var im = new Image();
        im.src = s;
      }
    });
  }, [N, turned, cur, single, zoom]);

  // only a real gesture turns a page: the site's image tooling fires synthetic clicks on images
  var trusted = function trusted(e) {
    if (!e) return true;
    var n = e.nativeEvent || e;
    return n.isTrusted !== false;
  };

  /* The closed issue as an object. On arrival the book stands at an angle, so its thickness can
     be seen. The first thing the reader does with it — a click or tap on it, Enter or Space, an
     arrow, the slider, a page asked for from the contents — brings it to the flat closed position,
     and from there it is the book it always was, for the rest of the visit. That first gesture
     turns no page; what was asked for with it (a slider position, a page) is done once the book
     has come to rest. posed: true (at an angle) → 'landing' (on its way) → false (flat). */
  var _React$useState13 = React.useState(true),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    posed = _React$useState14[0],
    setPosed = _React$useState14[1];
  var posedRef = React.useRef(true);
  var afterLand = React.useRef(null);
  var landTimer = React.useRef(null);
  var refocus = React.useRef(false);
  var _React$useState15 = React.useState(null),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    aim = _React$useState16[0],
    setAim = _React$useState16[1]; // a slider position chosen before the book had come to rest
  var settle = function settle() {
    if (posedRef.current === false) return;
    clearTimeout(landTimer.current);
    var a = document.activeElement; // opened from the keyboard: the focus goes on to the book's own control
    refocus.current = !!(a && a.classList && a.classList.contains('flip-obj'));
    posedRef.current = false;
    setPosed(false);
    lock.current = false;
    var then = afterLand.current;
    afterLand.current = null;
    if (then) then();
  };
  var land = function land(then) {
    if (then) afterLand.current = then;
    if (posedRef.current !== true) return; // already flat, or on its way
    var still = document.body.dataset.motion === 'off' || !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    if (still) {
      settle();
      return;
    } // no flight: the two states change places at once
    posedRef.current = 'landing';
    setPosed('landing');
    lock.current = true;
    landTimer.current = setTimeout(settle, 900); // should the transition never report its end
  };
  React.useEffect(function () {
    return function () {
      return clearTimeout(landTimer.current);
    };
  }, []);
  React.useEffect(function () {
    if (posed || !refocus.current) return;
    refocus.current = false;
    var b = stageRef.current && stageRef.current.querySelector('.flip-btn.is-next');
    if (b) b.focus({
      preventScroll: true
    });
  }, [posed]);
  var next = React.useCallback(function (e) {
    if (!trusted(e) || Date.now() - mountedAt.current < 800) return;
    if (posedRef.current) {
      land();
      return;
    }
    if (single) {
      setCur(function (c) {
        return Math.min(N - 1, c + 1);
      });
      return;
    }
    if (lock.current || turned >= leaves) return;
    lock.current = true;
    turnSound();
    setAnim({
      dir: 'fwd',
      from: turned
    });
    setTimeout(function () {
      setTurned(function (t) {
        return t + 1;
      });
      setAnim(null);
      lock.current = false;
    }, 760);
  }, [turned, leaves, single, N]);
  var prev = React.useCallback(function (e) {
    if (!trusted(e) || Date.now() - mountedAt.current < 800) return;
    if (posedRef.current) {
      land();
      return;
    }
    if (single) {
      setCur(function (c) {
        return Math.max(0, c - 1);
      });
      return;
    }
    if (lock.current || turned <= 0) return;
    lock.current = true;
    turnSound();
    setAnim({
      dir: 'back',
      from: turned
    });
    setTimeout(function () {
      setTurned(function (t) {
        return t - 1;
      });
      setAnim(null);
      lock.current = false;
    }, 760);
  }, [turned, single]);
  React.useEffect(function () {
    var onKey = function onKey(e) {
      if (!e.isTrusted) return;
      if (e.key === 'ArrowLeft') next(e); // reading advances leftwards
      if (e.key === 'ArrowRight') prev(e);
    };
    window.addEventListener('keydown', onKey);
    return function () {
      return window.removeEventListener('keydown', onKey);
    };
  }, [next, prev]);

  // a page asked for from outside (the contents' page numbers): the book opens there at once,
  // with no leaf turning. It is no click on the book, so the trusted-gesture guard above is not
  // in play; a leaf in mid-turn is left to land first, and a book still at its angle is brought
  // flat first.
  React.useEffect(function () {
    if (!goTo || !N) return;
    var i = Math.min(N - 1, Math.max(0, goTo.index));
    var open = function open() {
      setCur(i);
      setTurned(Math.min(leaves, Math.floor((i + 1) / 2)));
    };
    if (posedRef.current) {
      land(open);
      return;
    }
    if (!lock.current) {
      open();
      return;
    }
    var wait = setTimeout(open, 800);
    return function () {
      return clearTimeout(wait);
    };
  }, [goTo, N]);
  React.useEffect(function () {
    if (onOpen && N) onOpen(single ? [cur, cur] : [Math.max(0, 2 * turned - 1), Math.min(N - 1, 2 * turned)]);
  }, [N, turned, cur, single]);
  /* Which pages are read (EIC, 10 Oct 2026): when the open spread changes, the time the reader
     spent on the one before goes to the counter as «issue:lo-hi:seconds» (page image indices,
     folio = index − 1). Only time with the tab in view counts; nothing is sent in the preview. */
  var dwell = React.useRef(null); // { key, ms, since }
  var flushDwell = function flushDwell() {
    var d = dwell.current;
    if (!d) return;
    if (d.since) {
      d.ms += Date.now() - d.since;
      d.since = document.hidden ? 0 : Date.now();
    }
    var secs = Math.min(1800, Math.round(d.ms / 1000));
    d.ms = 0;
    if (secs >= 1 && window.gosanTrack) window.gosanTrack('page', issue + ':' + d.key + ':' + secs);
  };
  React.useEffect(function () {
    if (!N) return;
    flushDwell();
    var lo = single ? cur : Math.max(0, 2 * turned - 1),
      hi = single ? cur : Math.min(N - 1, 2 * turned);
    dwell.current = {
      key: lo + '-' + hi,
      ms: 0,
      since: document.hidden ? 0 : Date.now()
    };
  }, [N, turned, cur, single]);
  React.useEffect(function () {
    var vis = function vis() {
      var d = dwell.current;
      if (!d) return;
      if (document.hidden) flushDwell();else if (!d.since) d.since = Date.now();
    };
    document.addEventListener('visibilitychange', vis);
    addEventListener('pagehide', flushDwell);
    return function () {
      document.removeEventListener('visibilitychange', vis);
      removeEventListener('pagehide', flushDwell);
      flushDwell();
      dwell.current = null;
    };
  }, []);

  // the slider's chapters, and the small label that names the one under the pointer or the thumb
  var chapters = React.useMemo(function () {
    return issueChapters(manifest && manifest.chapters, leaves, manifest ? (manifest.pages || 0) - 4 - (manifest.blank_leaves || 0) : 0);
  }, [manifest, leaves]);
  var slideRef = React.useRef(null);
  var tipRef = React.useRef(null);
  var tipWas = React.useRef(null); // the last label, kept while it fades out
  var _React$useState17 = React.useState(null),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    hover = _React$useState18[0],
    setHover = _React$useState18[1]; // the pointer along the track: 0 at the cover … 1 at the back cover
  var _React$useState19 = React.useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    grab = _React$useState20[0],
    setGrab = _React$useState20[1]; // the thumb is being dragged
  var along = function along(x) {
    // a clientX as a share of the thumb's travel, from the right
    var r = slideRef.current.getBoundingClientRect();
    return Math.min(1, Math.max(0, (r.right - x - FLIP_THUMB / 2) / (r.width - FLIP_THUMB)));
  };
  var onSlideMove = function onSlideMove(e) {
    if (e.pointerType === 'mouse') setHover(along(e.clientX));
  };
  var onSlideLeave = function onSlideLeave() {
    return setHover(null);
  };
  React.useEffect(function () {
    if (!grab) return;
    var drop = function drop(e) {
      setGrab(false);
      var r = slideRef.current && slideRef.current.getBoundingClientRect(); // released away from the slider, or by a finger: no label
      var over = r && e.pointerType === 'mouse' && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      setHover(over ? along(e.clientX) : null);
    };
    window.addEventListener('pointerup', drop);
    window.addEventListener('pointercancel', drop);
    return function () {
      window.removeEventListener('pointerup', drop);
      window.removeEventListener('pointercancel', drop);
    };
  }, [grab]);
  var thumbAt = aim != null ? aim : turned;
  var tip = !chapters || single ? null : grab ? {
    v: thumbAt,
    f: thumbAt / leaves
  } : hover != null ? {
    v: Math.round(hover * leaves),
    f: hover
  } : null;
  React.useLayoutEffect(function () {
    // centred on the pointer or the thumb, never past either end of the slider
    var el = tipRef.current,
      box = slideRef.current;
    if (!el || !box || !tip) return;
    var W = box.clientWidth,
      w = el.offsetWidth;
    var x = FLIP_THUMB / 2 + tip.f * (W - FLIP_THUMB);
    el.style.right = Math.max(0, Math.min(W - w, x - w / 2)) + 'px';
  });
  var onTouchStart = function onTouchStart(e) {
    touch.current = e.touches.length === 1 ? {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    } : null;
  };
  var onTouchEnd = function onTouchEnd(e) {
    var t0 = touch.current;
    touch.current = null;
    if (!t0 || zoom > 1) return; // zoomed: a drag moves about the page, it never turns it
    var dx = e.changedTouches[0].clientX - t0.x,
      dy = e.changedTouches[0].clientY - t0.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return; // an upright drag scrolls the site
    if (dx < 0) next(e);else prev(e);
  };
  if (!manifest) return /*#__PURE__*/React.createElement("div", {
    className: "flip-wrap",
    "aria-busy": "true"
  });
  if (!N) return null;

  // what lies flat under a turning leaf
  var t = anim ? anim.from : turned;
  var leftIdx,
    rightIdx,
    leaf = null;
  if (anim && anim.dir === 'fwd') {
    leftIdx = 2 * (t + 1);
    rightIdx = 2 * t - 1;
    leaf = {
      front: 2 * t,
      back: 2 * t + 1,
      turnedClass: 'is-turning'
    };
  } else if (anim && anim.dir === 'back') {
    leftIdx = 2 * t;
    rightIdx = 2 * t - 3;
    leaf = {
      front: 2 * t - 2,
      back: 2 * t - 1,
      turnedClass: 'is-returning'
    };
  } else {
    leftIdx = 2 * t;
    rightIdx = 2 * t - 1;
  }
  var folio = function folio(i) {
    return i >= 2 && i <= N - 3 ? faDigits(i - 1) : null;
  };
  var where = single ? cur === 0 ? 'جلد' : cur === N - 1 ? 'پشت جلد' : folio(cur) ? 'صفحهٔ ' + folio(cur) : '' : turned === 0 ? 'جلد' : turned >= leaves ? 'پشت جلد' : function () {
    var fs = [folio(rightIdx), folio(leftIdx)].filter(Boolean);
    return fs.length > 1 ? 'صفحه‌های ' + fs.join('–') : fs.length ? 'صفحهٔ ' + fs[0] : '';
  }();

  // the piece that lies open: on a spread, the last one to start on or before its left page
  // (both, when two start on the one spread); on a single page, the one that page belongs to
  var stopAt = function stopAt(v) {
    return chapters.stops.reduce(function (hit, s) {
      return s.at <= v ? s : hit;
    });
  };
  var piece = '',
    pieceC = null;
  if (chapters && single) {
    if (folio(cur)) chapters.list.forEach(function (c) {
      if (c.folio + 1 <= cur) {
        piece = c.title;
        pieceC = c;
      }
    });
  } else if (chapters && turned > 0 && turned < leaves) {
    var s = stopAt(turned);
    piece = s.items ? s.title : '';
  }
  // the label: what a click at that point opens
  if (tip) tipWas.current = tip.v >= leaves ? {
    section: '',
    title: 'پشت جلد',
    author: '',
    page: ''
  } : stopAt(tip.v);
  var label = tipWas.current;
  var hot = tip && chapters ? stopAt(Math.min(tip.v, leaves - 1)) : null;
  return /*#__PURE__*/React.createElement("section", {
    className: "flip-wrap",
    "aria-label": 'شمارهٔ ' + faDigits(issue) + ' گاهنامه، ورق بزنید'
  }, /*#__PURE__*/React.createElement("div", {
    ref: stageRef,
    className: 'flip-stage' + (single ? ' is-single' : '') + (turned === 0 ? ' is-closed' : '') + (turned >= leaves ? ' is-ended' : '') + (zoom > 1 ? ' is-zoomed' : '') + (posed ? ' is-posed' : ''),
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel,
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-clip",
    ref: clipRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-zoomlayer",
    style: {
      width: zoom * 100 + '%',
      height: zoom * 100 + '%'
    }
  }, single ? /*#__PURE__*/React.createElement("div", {
    className: "flip-one",
    onClick: function onClick(e) {
      return onPageTap(e, next);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src(cur),
    alt: ""
  })) : /*#__PURE__*/React.createElement("div", {
    className: "flip-book"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-half is-right",
    onClick: function onClick(e) {
      return onPageTap(e, prev);
    }
  }, src(rightIdx) ? /*#__PURE__*/React.createElement("img", {
    src: src(rightIdx),
    alt: ""
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "flip-half is-left",
    onClick: function onClick(e) {
      return onPageTap(e, next);
    }
  }, src(leftIdx) ? /*#__PURE__*/React.createElement("img", {
    src: src(leftIdx),
    alt: ""
  }) : null), leaf ? /*#__PURE__*/React.createElement("div", {
    className: 'flip-leaf ' + leaf.turnedClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "flip-face is-front"
  }, src(leaf.front) ? /*#__PURE__*/React.createElement("img", {
    src: src(leaf.front),
    alt: ""
  }) : null, /*#__PURE__*/React.createElement("i", {
    className: "flip-shade"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flip-face is-back"
  }, src(leaf.back) ? /*#__PURE__*/React.createElement("img", {
    src: src(leaf.back),
    alt: ""
  }) : null, /*#__PURE__*/React.createElement("i", {
    className: "flip-shade"
  }))) : null, /*#__PURE__*/React.createElement("i", {
    className: "flip-spine"
  })))), posed ? /*#__PURE__*/React.createElement("div", {
    className: 'flip-obj' + (posed === true ? ' is-posed' : ' is-landing'),
    role: "button",
    tabIndex: 0,
    "aria-label": 'جلد شمارهٔ ' + faDigits(issue) + '، ورق بزنید',
    style: {
      '--flip-r': issueDepth(manifest),
      '--flip-ar': (manifest.width || 2) / (manifest.height || 3)
    },
    onClick: function onClick(e) {
      if (trusted(e)) land();
    },
    onKeyDown: function onKeyDown(e) {
      if (trusted(e) && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        land();
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (e.target === e.currentTarget && e.propertyName === 'transform' && posedRef.current === 'landing') settle();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "flip-obj-ground"
  }), /*#__PURE__*/React.createElement("i", {
    className: "flip-obj-head"
  }), /*#__PURE__*/React.createElement("i", {
    className: "flip-obj-spine"
  }), /*#__PURE__*/React.createElement("img", {
    className: "flip-obj-cover",
    src: src(0),
    alt: ""
  })) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    dir: "ltr",
    className: "flip-btn is-next",
    onClick: next,
    "aria-label": "\u0648\u0631\u0642 \u0628\u0639\u062F",
    disabled: single ? cur >= N - 1 : turned >= leaves
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    dir: "ltr",
    className: "flip-btn is-prev",
    onClick: prev,
    "aria-label": "\u0648\u0631\u0642 \u0642\u0628\u0644",
    disabled: single ? cur <= 0 : turned <= 0
  }, "\u203A")), !single ? /*#__PURE__*/React.createElement("div", {
    ref: slideRef,
    className: 'flip-slide' + (chapters ? ' has-chapters' : ''),
    onPointerMove: chapters ? onSlideMove : undefined,
    onPointerLeave: chapters ? onSlideLeave : undefined
  }, chapters ? /*#__PURE__*/React.createElement("div", {
    className: "flip-chapters",
    "aria-hidden": "true"
  }, chapters.stops.map(function (s) {
    return /*#__PURE__*/React.createElement("i", {
      key: s.at,
      className: 'flip-seg' + (s === hot ? ' is-hot' : ''),
      style: {
        right: s.at / leaves * 100 + '%',
        width: (s.end - s.at) / leaves * 100 + '%'
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        width: Math.min(1, Math.max(0, (turned - s.at) / (s.end - s.at))) * 100 + '%'
      }
    }));
  })) : null, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: leaves,
    value: aim != null ? aim : turned,
    className: "flip-range",
    "aria-label": "\u0631\u0641\u062A\u0646 \u0628\u0647 \u0635\u0641\u062D\u0647",
    "aria-valuetext": chapters ? [where, piece].filter(Boolean).join('، ') : undefined,
    onPointerDown: chapters ? function () {
      return setGrab(true);
    } : undefined,
    onChange: function onChange(e) {
      if (!trusted(e)) return;
      var v = +e.target.value;
      if (posedRef.current) {
        setAim(v);
        land(function () {
          setTurned(v);
          setAim(null);
        });
        return;
      }
      if (!lock.current) setTurned(v);
    }
  }), chapters ? /*#__PURE__*/React.createElement("div", {
    ref: tipRef,
    className: 'flip-tip' + (tip ? ' is-on' : ''),
    "aria-hidden": "true"
  }, label && (label.section || label.page) ? /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-sec"
  }, label.section), /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-pg"
  }, label.page)) : null, label ? /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-ttl"
  }, label.title), label.author ? /*#__PURE__*/React.createElement("span", {
    className: "flip-tip-by"
  }, label.author) : null) : null) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: 'flip-foot' + (chapters ? ' has-chapters' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "flip-where"
  }, where, piece ? /*#__PURE__*/React.createElement("span", {
    className: "flip-where-ttl"
  }, (where ? ' · ' : '') + piece) : null), single && readHref(pieceC) ? /*#__PURE__*/React.createElement("a", {
    className: "flip-read",
    href: readHref(pieceC)
  }, "\u062E\u0648\u0627\u0646\u062F\u0646 \u0627\u06CC\u0646 \u0646\u0648\u0634\u062A\u0627\u0631 \u062F\u0631 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u2190") : null, single && coarse ? /*#__PURE__*/React.createElement("span", {
    className: "flip-hint"
  }, /*#__PURE__*/React.createElement("i", {
    className: "flip-hint-ico",
    "aria-hidden": "true"
  }), "\u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u0646 \u062F\u0648\u0635\u0641\u062D\u0647\u200C\u0627\u06CC \u0648 \u0648\u0631\u0642 \u0632\u062F\u0646\u060C \u06AF\u0648\u0634\u06CC \u0631\u0627 \u0628\u0686\u0631\u062E\u0627\u0646\u06CC\u062F \xB7 \u062F\u0648 \u0636\u0631\u0628\u0647 \u0631\u0648\u06CC \u0635\u0641\u062D\u0647: \u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC") : null, /*#__PURE__*/React.createElement("div", {
    className: "flip-actions"
  }, /*#__PURE__*/React.createElement("span", {
    className: "flip-zoom",
    role: "group",
    "aria-label": "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flip-zbtn",
    onClick: zoomOut,
    "aria-label": "\u06A9\u0648\u0686\u06A9\u200C\u062A\u0631",
    disabled: zoom <= 1
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "flip-zval"
  }, faDigits(Math.round(zoom * 100)), "\u066A"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flip-zbtn",
    onClick: zoomIn,
    "aria-label": "\u0628\u0632\u0631\u06AF\u200C\u062A\u0631",
    disabled: zoom >= 2.5
  }, "+")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flip-link",
    onClick: function onClick(e) {
      if (trusted(e)) setSound(function (v) {
        return !v;
      });
    },
    "aria-pressed": sound
  }, sound ? 'صدا: روشن' : 'صدا: خاموش'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flip-request",
    onClick: function onClick(e) {
      if (trusted(e)) window.dispatchEvent(new CustomEvent('gosan:subscribe', {
        detail: 'print'
      }));
    }
  }, "\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647"))));
}

/* ---------------------------------------------------------------------------
   The issue's own page (#/issue/1): the complete issue first, to be turned; then
   what is in it, who wrote it, and what is on its cover. Everything is read from
   the manifest (the print contents), the post registry and the portraits the site
   already has — nothing about the issue is typed in here but its two ISSNs and
   the cover sentence of the print colophon.
   --------------------------------------------------------------------------- */
var ISSUE_ISSN = {
  print: 'ISSN 3056-2201',
  online: 'ISSN 3056-221X'
}; // legal/issn/04_ISSN-Zuteilung.md
var ISSUE_COVER_NOTE = 'نگارهٔ گوسان — جزئی از نگارهٔ بشقاب سیمین ساسانی؛ اصل اثر در موزهٔ ارمیتاژ، سن‌پترزبورگ.';
function IssuePage(_ref2) {
  var issue = _ref2.issue;
  var _React$useState21 = React.useState(null),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    manifest = _React$useState22[0],
    setManifest = _React$useState22[1];
  var _React$useState23 = React.useState(null),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    goTo = _React$useState24[0],
    setGoTo = _React$useState24[1]; // a page asked of the book: { index, n }
  var _React$useState25 = React.useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    open = _React$useState26[0],
    setOpen = _React$useState26[1]; // the page indices that lie open in the book: [lo, hi]
  var bookRef = React.useRef(null);
  React.useEffect(function () {
    var on = true;
    loadIssueManifest().then(function (m) {
      if (on) setManifest(m);
    });
    return function () {
      on = false;
    };
  }, []);
  var N = manifest ? manifest.pages || 0 : 0;
  var n = manifest && manifest.issue || +issue || 1;
  var ch = issueChapters(manifest && manifest.chapters, N / 2);
  var list = ch ? ch.list : [];

  /* the piece on the site, if the site lists one: by slug, or by the very same title where
     the print build still carries a placeholder slug. The registry decides what is shown. */
  var flat = function flat(t) {
    return String(t || '').replace(/\s+/g, ' ').trim();
  };
  var postFor = function postFor(c) {
    return GOSAN_POSTS.find(function (p) {
      return p.slug === c.slug;
    }) || GOSAN_POSTS.find(function (p) {
      return flat(p.title) === flat(c.title);
    }) || null;
  };
  /* announced, text not yet in: the same list that makes the home-page cards inert */
  var awaited = function awaited(p) {
    return !!p && typeof NO_LINK !== 'undefined' && NO_LINK.has(p.slug);
  };
  var photos = typeof AUTHOR_PHOTOS !== 'undefined' ? AUTHOR_PHOTOS : {};

  /* the contents, section by section in the print order */
  var groups = [];
  list.forEach(function (c, k) {
    var row = {
      c: c,
      post: postFor(c),
      from: c.folio + 1,
      to: k + 1 < list.length ? list[k + 1].folio : N - 3
    };
    var g = groups[groups.length - 1];
    if (g && g.section === c.section) g.rows.push(row);else groups.push({
      section: c.section,
      rows: [row]
    });
  });

  /* the people of the issue, in order of appearance; each leads to the first piece of theirs
     the site carries. A byline with neither a portrait nor a piece here is a collective one. */
  var people = [];
  list.forEach(function (c) {
    if (!c.author) return;
    var who = people.find(function (w) {
      return w.name === c.author;
    });
    if (!who) {
      who = {
        name: c.author,
        photo: photos[c.author] || null,
        post: null,
        title: '',
        listed: false
      };
      people.push(who);
    }
    var post = postFor(c);
    if (post) who.listed = true;
    if (post && !who.post && !awaited(post)) {
      who.post = post;
      who.title = c.title;
    }
    /* the guest of a conversation stands beside its author, as on the printed
       «نویسندگان این شماره» */
    var guest = typeof GUEST_BY_SLUG !== 'undefined' ? GUEST_BY_SLUG[c.slug] : null;
    if (guest && !people.find(function (w) {
      return w.name === guest;
    })) {
      people.push({
        name: guest,
        photo: photos[guest] || null,
        post: post && !awaited(post) ? post : null,
        title: c.title,
        listed: !!post
      });
    }
  });
  var writers = people.filter(function (w) {
    return w.photo || w.listed;
  });
  var roll = list.find(function (c) {
    return c.slug === 'contributors';
  }); // the printed «نویسندگان این شماره», where the biographies are

  /* a page number is a control: the book opens at that page and comes back into view */
  var turnTo = function turnTo(e, index) {
    if (e && e.nativeEvent && e.nativeEvent.isTrusted === false) return;
    setGoTo({
      index: index,
      n: Date.now()
    });
    var stage = bookRef.current && bookRef.current.querySelector('.flip-stage');
    if (!stage) return;
    var bar = document.querySelector('.site-header');
    var still = document.body.dataset.motion === 'off' || window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: Math.max(0, stage.getBoundingClientRect().top + window.scrollY - (bar ? bar.offsetHeight : 0) - 14),
      behavior: still ? 'auto' : 'smooth'
    });
  };
  var pageNo = function pageNo(folio, label) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "issue-pg",
      onClick: function onClick(e) {
        return turnTo(e, folio + 1);
      },
      "aria-label": 'رفتن به صفحهٔ ' + faDigits(folio)
    }, label || faDigits(folio));
  };

  /* the line of facts, in two halves: when and how long; the two ISSNs. On a phone each half is a line. */
  var facts = [[typeof GOSAN_ISSUE_PUBLISHED === 'string' ? 'انتشار: ' + GOSAN_ISSUE_PUBLISHED : null, N ? faDigits(N - 4 - (manifest && manifest.blank_leaves || 0)) + ' صفحه' + (typeof GOSAN_ISSUE_PENDING === 'string' && GOSAN_ISSUE_PENDING ? ' ' + GOSAN_ISSUE_PENDING : '') : null], [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr"
  }, ISSUE_ISSN.print), " (\u0686\u0627\u067E\u06CC)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("bdi", {
    dir: "ltr"
  }, ISSUE_ISSN.online), " (\u0628\u0631\u062E\u0637)")]].map(function (half) {
    return half.filter(Boolean);
  }).filter(function (half) {
    return half.length;
  });
  var dot = /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("i", {
    "aria-hidden": "true"
  }, "\xB7"), " ");
  var subscribeLabel = typeof SUBSCRIBE_COPY !== 'undefined' ? SUBSCRIBE_COPY.issues.title : 'دریافت اشتراک گاهنامهٔ گوسان';
  return /*#__PURE__*/React.createElement("main", {
    className: "issue-page",
    "data-screen-label": ISSUE_MENU.fa
  }, /*#__PURE__*/React.createElement("header", {
    className: "issue-head"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "issue-h1"
  }, n === 1 ? ISSUE_MENU.fa : 'شمارهٔ ' + faDigits(n)), /*#__PURE__*/React.createElement("p", {
    className: "issue-line"
  }, manifest && manifest.line ? manifest.line : "\xA0"), /*#__PURE__*/React.createElement("p", {
    className: "issue-facts"
  }, facts.map(function (half, h) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: h
    }, h ? /*#__PURE__*/React.createElement("span", {
      className: "issue-facts-sep"
    }, dot) : null, /*#__PURE__*/React.createElement("span", {
      className: "issue-facts-half"
    }, half.map(function (f, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, i ? dot : null, /*#__PURE__*/React.createElement("span", null, f));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    ref: bookRef
  }, /*#__PURE__*/React.createElement(IssueFlipbook, {
    issue: n,
    goTo: goTo,
    onOpen: setOpen
  })), /*#__PURE__*/React.createElement("div", {
    className: "issue-body"
  }, groups.length ? /*#__PURE__*/React.createElement("section", {
    className: "issue-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-label"
  }, "\u062F\u0631 \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647"), /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6")), /*#__PURE__*/React.createElement("div", {
    className: "issue-toc"
  }, groups.map(function (g) {
    return /*#__PURE__*/React.createElement("div", {
      className: "issue-toc-group",
      key: g.section + g.rows[0].c.folio
    }, g.section ? /*#__PURE__*/React.createElement("h3", {
      className: "issue-toc-sec"
    }, g.section) : null, /*#__PURE__*/React.createElement("ol", null, g.rows.map(function (_ref3) {
      var c = _ref3.c,
        post = _ref3.post,
        from = _ref3.from,
        to = _ref3.to;
      return /*#__PURE__*/React.createElement("li", {
        key: c.slug,
        className: 'issue-toc-row' + (open && from <= open[1] && to >= open[0] ? ' is-open' : '')
      }, pageNo(c.folio, faDigits(c.folio) + (c.to > c.folio ? '–' + faDigits(c.to) : '')), /*#__PURE__*/React.createElement("span", {
        className: "issue-toc-t"
      }, post && !awaited(post) ? /*#__PURE__*/React.createElement("a", {
        href: '/article/' + post.slug
      }, c.title) : /*#__PURE__*/React.createElement("span", {
        className: post ? 'is-awaited' : ''
      }, c.title), awaited(post) ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
        className: "issue-soon"
      }, "\u0628\u0647\u200C\u0632\u0648\u062F\u06CC")) : null, c.author ? /*#__PURE__*/React.createElement("span", {
        className: "issue-toc-by"
      }, c.author) : null));
    })));
  }))) : null, writers.length ? /*#__PURE__*/React.createElement("section", {
    className: "issue-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-label"
  }, roll ? roll.title : 'نویسندگان این شماره'), /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6"), roll ? /*#__PURE__*/React.createElement("span", {
    className: "issue-sh-pg"
  }, pageNo(roll.folio, 'ص ' + faDigits(roll.folio) + (roll.to > roll.folio ? '–' + faDigits(roll.to) : ''))) : null), /*#__PURE__*/React.createElement("ul", {
    className: "issue-people"
  }, writers.map(function (w) {
    var face = w.photo ? /*#__PURE__*/React.createElement("img", {
      className: "author-avatar",
      src: w.photo,
      alt: ""
    }) : /*#__PURE__*/React.createElement("span", {
      className: "author-avatar author-avatar--mono",
      "aria-hidden": "true"
    }, w.name.trim().charAt(0));
    var name = /*#__PURE__*/React.createElement("span", {
      className: "issue-person-name"
    }, w.name);
    return /*#__PURE__*/React.createElement("li", {
      key: w.name
    }, w.post ? /*#__PURE__*/React.createElement("a", {
      className: "issue-person",
      href: '/article/' + w.post.slug,
      title: w.title
    }, face, name) : /*#__PURE__*/React.createElement("span", {
      className: "issue-person"
    }, face, name));
  }))) : null, N ? /*#__PURE__*/React.createElement("section", {
    className: "issue-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-label"
  }, "\u0631\u0648\u06CC \u062C\u0644\u062F"), /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6")), /*#__PURE__*/React.createElement("div", {
    className: "issue-cover"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "issue-cover-btn",
    onClick: function onClick(e) {
      return turnTo(e, 0);
    },
    "aria-label": "\u062C\u0644\u062F"
  }, /*#__PURE__*/React.createElement("img", {
    src: ISSUE_DIR + 'pages/p001.jpg',
    alt: 'جلد شمارهٔ ' + faDigits(n)
  })), /*#__PURE__*/React.createElement("p", null, ISSUE_COVER_NOTE))) : null, /*#__PURE__*/React.createElement("div", {
    className: "issue-foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flip-request",
    onClick: function onClick() {
      return window.dispatchEvent(new CustomEvent('gosan:subscribe', {
        detail: 'issues'
      }));
    }
  }, subscribeLabel), /*#__PURE__*/React.createElement("a", {
    className: "issue-more",
    href: "/archive"
  }, "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC \u0647\u0645\u0647\u0654 \u0646\u0648\u0634\u062A\u0627\u0631\u0647\u0627 \u2190"))));
}
Object.assign(window, {
  IssueFlipbook: IssueFlipbook,
  IssuePage: IssuePage
});