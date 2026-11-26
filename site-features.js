"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Gosan Weblog — interactive features: scroll progress, search overlay, back-to-top */

/* thin gold reading-progress hairline pinned to the very top */
function ScrollProgress() {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    p = _React$useState2[0],
    setP = _React$useState2[1];
  React.useEffect(function () {
    var on = function on() {
      var el = document.documentElement;
      var max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    window.addEventListener('resize', on);
    return function () {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    style: {
      transform: "scaleX(".concat(p, ")")
    }
  });
}

/* minimal full-screen search — filters posts live; opens via window 'gosan:search' event or "/" key */
function SearchOverlay() {
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    q = _React$useState6[0],
    setQ = _React$useState6[1];
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    var onOpen = function onOpen() {
      return setOpen(true);
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
      var tag = document.activeElement && document.activeElement.tagName || '';
      if (e.key === '/' && !/INPUT|TEXTAREA/.test(tag)) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('gosan:search', onOpen);
    window.addEventListener('keydown', onKey);
    return function () {
      window.removeEventListener('gosan:search', onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  React.useEffect(function () {
    if (open && inputRef.current) inputRef.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [open]);
  var query = q.trim();
  /* the گاه‌نوشت entries are searched too, by title, subtitle, writer and their fields (tags) */
  var journal = (typeof GOSAN_BLOG !== 'undefined' ? GOSAN_BLOG : []).map(function (p) {
    return {
      slug: p.slug,
      title: p.title,
      tag: 'گاه‌نوشت',
      href: "/blog/".concat(p.slug),
      hay: [p.title, p.excerpt, p.author, p.kicker].concat(_toConsumableArray(p.tags || [])).join(' ')
    };
  });
  var posts = GOSAN_POSTS.map(function (p) {
    return _objectSpread(_objectSpread({}, p), {}, {
      href: "/article/".concat(p.slug),
      hay: p.title + ' ' + p.excerpt + ' ' + p.tag + ' ' + p.author
    });
  });
  var results = query ? [].concat(_toConsumableArray(posts), _toConsumableArray(journal)).filter(function (p) {
    return p.hay.includes(query);
  }) : GOSAN_POSTS.slice(0, 5).map(function (p) {
    return _objectSpread(_objectSpread({}, p), {}, {
      href: "/article/".concat(p.slug)
    });
  });
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "search-overlay",
    onClick: function onClick(e) {
      if (e.target.classList.contains('search-overlay')) setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical"
  }, "SEARCH // \u062C\u0633\u062A\u062C\u0648 \u062F\u0631 \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("button", {
    className: "search-close",
    onClick: function onClick() {
      return setOpen(false);
    },
    "aria-label": "\u0628\u0633\u062A\u0646"
  }, "\xD7")), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "search-input",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "\u0639\u0646\u0648\u0627\u0646\u060C \u0645\u0648\u0636\u0648\u0639 \u06CC\u0627 \u0646\u0648\u06CC\u0633\u0646\u062F\u0647\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "search-meta gsn-technical"
  }, query ? "".concat(results.length, " \u0646\u062A\u06CC\u062C\u0647") : 'تازه‌ترین نوشتارها'), /*#__PURE__*/React.createElement("ul", {
    className: "search-results"
  }, results.map(function (p) {
    return /*#__PURE__*/React.createElement("li", {
      key: p.href
    }, /*#__PURE__*/React.createElement("a", {
      href: p.href,
      onClick: function onClick() {
        setOpen(false);
        setQ('');
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "search-r-tag"
    }, p.tag), /*#__PURE__*/React.createElement("span", {
      className: "search-r-title"
    }, p.title), /*#__PURE__*/React.createElement("span", {
      className: "search-r-arrow",
      "aria-hidden": "true"
    }, "\u2190")));
  }), query && results.length === 0 ? /*#__PURE__*/React.createElement("li", {
    className: "search-empty"
  }, "\u0686\u06CC\u0632\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F.") : null)));
}
function BackToTop() {
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    show = _React$useState8[0],
    setShow = _React$useState8[1];
  React.useEffect(function () {
    var on = function on() {
      return setShow(window.scrollY > 700);
    };
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', on);
    };
  }, []);
  return /*#__PURE__*/React.createElement("button", {
    className: "back-top".concat(show ? ' is-show' : ''),
    onClick: function onClick() {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    "aria-label": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0628\u0627\u0644\u0627"
  }, "\u2191");
}

/* subscription — one destination for «دریافت اشتراک» and the «دریافت این شماره» button under the issue;
   both dispatch 'gosan:subscribe' and land here, where the reader leaves an address.
   NOTE: nothing is sent anywhere yet — the address is taken and confirmed in the
   page, exactly like the newsletter form, until a mail endpoint exists. */
/* The subscription endpoint — a Cloudflare Worker holding the Brevo key.
   Set this to the Worker's URL once deployed (tools/subscribe-worker/README.md).
   While it is empty nothing is sent, and the forms say so rather than pretending. */
var GOSAN_SUBSCRIBE_ENDPOINT = 'https://gosan-subscribe.gosan.workers.dev';
var SUB_MSG = {
  pending: 'در حال فرستادن…',
  ok: 'سپاس؛ پیوند تأیید به نشانی شما فرستاده شد. با کلیک بر آن، اشتراک شما کامل می‌شود.',
  fail: 'فرستادن نشانی ممکن نشد. لطفاً دوباره بکوشید یا به info@gosan.org بنویسید.',
  off: 'سامانهٔ اشتراک هنوز راه‌اندازی نشده است. لطفاً به info@gosan.org بنویسید.'
};

/* one path for every address the site collects; kind = issues | print | newsletter */
function gosanSubscribe(_x, _x2) {
  return _gosanSubscribe.apply(this, arguments);
}
function _gosanSubscribe() {
  _gosanSubscribe = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email, kind) {
    var res, data, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (GOSAN_SUBSCRIBE_ENDPOINT) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, {
            ok: false,
            msg: SUB_MSG.off
          });
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return fetch(GOSAN_SUBSCRIBE_ENDPOINT, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              kind: kind
            })
          });
        case 2:
          res = _context2.v;
          _context2.n = 3;
          return res.json()["catch"](function () {
            return {};
          });
        case 3:
          data = _context2.v;
          if (!(res.ok && data.ok)) {
            _context2.n = 4;
            break;
          }
          if (window.gosanTrack) window.gosanTrack('subscribe', kind);
          return _context2.a(2, {
            ok: true,
            msg: SUB_MSG.ok
          });
        case 4:
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t = _context2.v;
        case 6:
          return _context2.a(2, {
            ok: false,
            msg: SUB_MSG.fail
          });
      }
    }, _callee2, null, [[1, 5]]);
  }));
  return _gosanSubscribe.apply(this, arguments);
}
var SUBSCRIBE_COPY = {
  /* the issue card's button — the standing subscription, every issue to come */
  issues: {
    title: 'دریافت اشتراک گاهنامهٔ گوسان',
    lede: 'نشانی ایمیل خود را بنویسید تا با اشتراک گوسان، شماره‌های آینده به‌محض انتشار دیجیتال به دست شما برسد.'
  },
  /* under the issue on the magazine page — a request to hear when the issue can be downloaded
     (EIC, 9 Oct 2026). The confirming link still goes out (double opt-in), so the message names it. */
  print: {
    kicker: 'ISSUE 01 // دفتر نخست',
    /* not a subscription, so not «SUBSCRIBE» (EIC, 9 Oct 2026) */
    title: 'دریافت نسخهٔ PDF این شماره',
    lede: 'این شمارهٔ گاهنامهٔ گوسان در دست تکمیل است. نشانی ایمیل خود را بنویسید تا هر زمان که نسخهٔ PDF آن برای دریافت آماده شد، به شما اطلاع دهیم.',
    ok: 'نشانی ایمیل شما به دست ما رسید. هر زمان که نسخهٔ PDF این شماره برای دریافت آماده شد، به شما اطلاع می‌دهیم. برای ثبت نهایی، لطفاً روی پیوندی که هم‌اکنون به ایمیلتان فرستادیم کلیک کنید.'
  }
};
function SubscribeOverlay() {
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    open = _React$useState0[0],
    setOpen = _React$useState0[1];
  var _React$useState1 = React.useState({
      phase: 'idle',
      msg: ''
    }),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    state = _React$useState10[0],
    setState = _React$useState10[1];
  var _React$useState11 = React.useState('issues'),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    kind = _React$useState12[0],
    setKind = _React$useState12[1];
  var _React$useState13 = React.useState(''),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    email = _React$useState14[0],
    setEmail = _React$useState14[1];
  var inputRef = React.useRef(null);
  var submit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var r;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            if (!(state.phase === 'sending')) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setState({
              phase: 'sending',
              msg: SUB_MSG.pending
            });
            _context.n = 2;
            return gosanSubscribe(email.trim(), kind);
          case 2:
            r = _context.v;
            setState({
              phase: r.ok ? 'sent' : 'failed',
              msg: r.ok && SUBSCRIBE_COPY[kind].ok || r.msg
            });
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function submit(_x3) {
      return _ref.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    var onOpen = function onOpen(e) {
      setKind(e && e.detail && SUBSCRIBE_COPY[e.detail] ? e.detail : 'issues');
      setOpen(true);
      setState({
        phase: 'idle',
        msg: ''
      });
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('gosan:subscribe', onOpen);
    window.addEventListener('keydown', onKey);
    return function () {
      window.removeEventListener('gosan:subscribe', onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  React.useEffect(function () {
    if (open && inputRef.current) inputRef.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
    return function () {
      document.body.style.overflow = '';
    };
  }, [open]);
  if (!open) return null;
  var copy = SUBSCRIBE_COPY[kind];
  return /*#__PURE__*/React.createElement("div", {
    className: "search-overlay sub-overlay",
    onClick: function onClick(e) {
      if (e.target.classList.contains('sub-overlay')) setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-panel sub-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical"
  }, copy.kicker || 'SUBSCRIBE // اشتراک گوسان'), /*#__PURE__*/React.createElement("button", {
    className: "search-close",
    onClick: function onClick() {
      return setOpen(false);
    },
    "aria-label": "\u0628\u0633\u062A\u0646"
  }, "\xD7")), /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display sub-title"
  }, copy.title), /*#__PURE__*/React.createElement("p", {
    className: "sub-lede"
  }, copy.lede), state.phase === 'sent' ? /*#__PURE__*/React.createElement("p", {
    className: "sub-ok"
  }, state.msg) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    className: "sub-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "email",
    required: true,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@example.com",
    "aria-label": "\u0646\u0634\u0627\u0646\u06CC \u0631\u0627\u06CC\u0627\u0646\u0627\u0645\u0647"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "gsn-btn gsn-btn--primary",
    disabled: state.phase === 'sending'
  }, "\u062B\u0628\u062A \u0646\u0634\u0627\u0646\u06CC")), state.msg ? /*#__PURE__*/React.createElement("p", {
    className: "sub-note".concat(state.phase === 'failed' ? ' is-fail' : '')
  }, state.msg) : null)));
}

/* the endpoint is read by name elsewhere (reader notes in gosan-components.jsx),
   so it goes on window rather than staying inside this script's scope */
Object.assign(window, {
  ScrollProgress: ScrollProgress,
  SearchOverlay: SearchOverlay,
  SubscribeOverlay: SubscribeOverlay,
  BackToTop: BackToTop,
  gosanSubscribe: gosanSubscribe,
  SUB_MSG: SUB_MSG,
  GOSAN_SUBSCRIBE_ENDPOINT: GOSAN_SUBSCRIBE_ENDPOINT
});

/* ============================================================
   یاد فرزندان ایران — the remembrance ribbon
   A fixed Lion-and-Sun ribbon in one bottom corner of the LANDING PAGE only.
   Click: a drawer slides out of the flag, the flag rises level with the name,
   and one person is drawn at random from the roll. Hover while open: another name.
   Draft — entries are unverified and the mark is not on the public site.
   ============================================================ */
var FARZANDAN = [{
  "n": "پویا فراگردی",
  "r": "نوازنده و مدرس ویولن — ۴۴ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "صنم پوربابایی",
  "r": "مدرس و نوازندهٔ ویولن — ۲۶ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "لاهیجان"
}, {
  "n": "ستاره رفیعی",
  "r": "موسیقی‌دان — ۱۹ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "آریا هنرمند",
  "r": "رپر و آهنگساز — ۲۵ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "حسین تهرانچی",
  "r": "نوازندهٔ پیانو — ۳۲ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "امیرحسین ملکشاهی",
  "r": "گیتاریست و خواننده — ۲۸ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "ملیکا دستیاب",
  "r": "نوازندهٔ تنبور و دانشجوی اقتصاد — ۲۱ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "کرمانشاه"
}, {
  "n": "شبنم فردوسی",
  "r": "عروسک‌ساز و طراح گرافیک — ۳۷ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "شکوفه عبدی",
  "r": "عکاس — ۳۶ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "اراک"
}, {
  "n": "جواد گنجی",
  "r": "فیلمساز، دستیار کارگردان و دستیار برنامه‌ریز سینما و تلویزیون — ۳۹ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "فواد صفایی",
  "r": "خواننده و نوازندهٔ پیانو — ۲۴ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "کرج"
}, {
  "n": "امیرحسین احمدوند",
  "r": "بازیگر تئاتر، قهرمان موی‌تای و بوکس — ۳۷ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "احمد عباسی",
  "r": "بازیگر و طراح صحنهٔ تئاتر — ۲۷ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "سیما موسوی",
  "r": "فیلمساز و عکاس — ۳۷ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "کرج"
}, {
  "n": "ندا محمدی",
  "r": "نقاش و هنرمند تجسمی — ۲۲ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "رضا کرمی",
  "r": "نقاش و طراح — ۳۴ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "کرج"
}, {
  "n": "ابوالفضل یغموری",
  "r": "خوانندهٔ رپ و ترانه‌سرا — ۱۷ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "کرج"
}, {
  "n": "حمیدرضا مجیدی",
  "r": "هنرجوی بازیگری — ۳۰ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "ستایش سوسن‌آبادی",
  "r": "طراح لباس — ۳۷ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "رشت"
}, {
  "n": "ریحانه یوسفی",
  "r": "بازیگر تئاتر — ۲۸ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "صهبا رشتیان",
  "r": "هنرمند انیمیشن و داور فوتسال — ۲۳ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "اصفهان"
}, {
  "n": "سورنا گلگون",
  "r": "نوازندهٔ پیانو — ۱۸ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "شهسوار (تنکابن)"
}, {
  "n": "یاسر مدیرروستا",
  "r": "مدرس و نوازندهٔ تار و سه‌تار — ۴۲ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "کرج"
}, {
  "n": "مهدی سلحشور",
  "r": "مجسمه‌ساز — ۴۸ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "مشهد"
}, {
  "n": "زهره شماعی‌زاده",
  "r": "کارگردان، دوبلور و دستیار کارگردان — ۳۳ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "اصفهان"
}, {
  "n": "محمد شیرازی (شاهو)",
  "r": "خواننده و نوازنده — ۳۸ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "شهریار"
}, {
  "n": "امیرعلی زارعی",
  "r": "نوازندهٔ هنگ‌درام و مربی موسیقی کودکان — ۳۵ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "مصطفی رابطی",
  "r": "فارغ‌التحصیل سینما و طراح ویدئوآرت — ۴۵ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "همدان"
}, {
  "n": "یعقوب دلیر",
  "r": "خواننده، نوازندهٔ گیتار و موسیقی‌دان — ۴۷ ساله",
  "d": "۲ بهمن ۱۴۰۴",
  "pl": "آستانهٔ اشرفیه"
}, {
  "n": "داریوش انصاری بختیاروند",
  "r": "خواننده و موزیسین — ۳۷ ساله",
  "d": "۱۰ دی ۱۴۰۴",
  "pl": "فولادشهر"
}, {
  "n": "رضا سمیع‌پور",
  "r": "فیلمساز و دستیار کارگردان — ۵۰ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "رشت"
}, {
  "n": "سروش سلیمانی",
  "r": "خوانندهٔ رپ — ۲۸ ساله",
  "d": "۱۴ دی ۱۴۰۴",
  "pl": "هفشجان"
}, {
  "n": "ماهان قدمی",
  "r": "خوانندهٔ رپ — ۲۳ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "اسلامشهر"
}, {
  "n": "محدثه شهبازی",
  "r": "هنرمند چندرشته‌ای — ۲۰ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "روبینا امینیان",
  "r": "دانشجوی طراحی پارچه و لباس — ۲۳ ساله",
  "d": "۱۸ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "غزل آقایی لیندی",
  "r": "عکاس طبیعت — ۲۸ ساله",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "تهران"
}, {
  "n": "بابک جمالی",
  "r": "خواننده",
  "d": "۱۹ دی ۱۴۰۴",
  "pl": "اراک"
}, {
  "n": "علی‌سینا مصطفوی",
  "r": "نوازندهٔ تار و کوهنورد — ۳۹ ساله",
  "d": "۲۲ مهر ۱۴۰۵",
  "pl": "کرمان"
}];
function RemembranceRibbon() {
  var _React$useState15 = React.useState(false),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    open = _React$useState16[0],
    setOpen = _React$useState16[1];
  var _React$useState17 = React.useState(FARZANDAN[0]),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    person = _React$useState18[0],
    setPerson = _React$useState18[1];
  var _React$useState19 = React.useState(false),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    swap = _React$useState20[0],
    setSwap = _React$useState20[1];
  var bag = React.useRef([]);
  var wrapRef = React.useRef(null);
  var ribRef = React.useRef(null);
  var cardRef = React.useRef(null);
  var nameRef = React.useRef(null);
  var draw = React.useCallback(function () {
    if (!bag.current.length) {
      var b = FARZANDAN.slice();
      for (var i = b.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref2 = [b[j], b[i]];
        b[i] = _ref2[0];
        b[j] = _ref2[1];
      }
      bag.current = b;
    }
    setPerson(bag.current.pop());
  }, []);

  /* the flag glides up until it stands level with the name */
  React.useLayoutEffect(function () {
    var rib = ribRef.current,
      card = cardRef.current,
      name = nameRef.current;
    if (!rib) return;
    if (!open || !card || !name) {
      rib.style.transform = '';
      return;
    }
    var shift = card.offsetHeight - (name.offsetTop + name.offsetHeight / 2) - rib.offsetHeight / 2;
    rib.style.transform = 'translateY(' + -Math.max(0, shift) + 'px)';
  }, [open, person]);
  React.useEffect(function () {
    if (!open) return;
    var onDoc = function onDoc(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* the name changes ONLY on a click of the flag; the drawer closes by
     clicking anywhere else, or with Escape. */
  var onRibbon = function onRibbon(e) {
    e.stopPropagation();
    if (!open) {
      draw();
      setOpen(true);
      return;
    }
    if (swap) return;
    setSwap(true);
    setTimeout(function () {
      draw();
      setSwap(false);
    }, 300);
  };

  /* Rendered straight into <body> through a portal: nothing in the page tree
     can then create a containing block for it, so `position: fixed` always
     resolves against the viewport. */
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "fz-wrap".concat(open ? ' is-on' : ''),
    ref: wrapRef,
    "data-fz": "remembrance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fz-card".concat(swap ? ' is-swap' : ''),
    ref: cardRef,
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("p", {
    className: "fz-kicker"
  }, "\u0641\u0631\u0632\u0646\u062F \u0627\u06CC\u0631\u0627\u0646 \u0648 \u062C\u0627\u0646\u200C\u0641\u062F\u0627\u06CC \u0645\u06CC\u0647\u0646"), /*#__PURE__*/React.createElement("p", {
    className: "fz-name",
    ref: nameRef
  }, person.n), /*#__PURE__*/React.createElement("p", {
    className: "fz-role"
  }, person.r), /*#__PURE__*/React.createElement("p", {
    className: "fz-when"
  }, /*#__PURE__*/React.createElement("b", null, person.d), person.pl ? /*#__PURE__*/React.createElement("span", null, person.pl) : null)), /*#__PURE__*/React.createElement("button", {
    className: "fz-rib",
    ref: ribRef,
    onClick: onRibbon,
    "aria-expanded": open,
    "aria-label": "\u06CC\u0627\u062F \u0641\u0631\u0632\u0646\u062F\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/emblem-lion-and-sun.svg",
    alt: ""
  }))), document.body);
}