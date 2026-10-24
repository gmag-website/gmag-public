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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Gosan DS components — composed from the bound design-system bundle.
   Classes live in the DS css (gsn-*) — do not restyle them here. */

var _window$GosanMagazine = window.GosanMagazineDesignSystem_8ee353,
  Button = _window$GosanMagazine.Button,
  Tag = _window$GosanMagazine.Tag,
  SectionHead = _window$GosanMagazine.SectionHead,
  ArticleCard = _window$GosanMagazine.ArticleCard,
  Verse = _window$GosanMagazine.Verse,
  PullQuote = _window$GosanMagazine.PullQuote,
  GoldDots = _window$GosanMagazine.GoldDots,
  DraftFrame = _window$GosanMagazine.DraftFrame,
  FormField = _window$GosanMagazine.FormField;

/* ---------- drafting lines ---------- */
/* the negative insets are inline, so the phone rules that pull them back inside
   the screen have to be !important — see «PHONE COMPOSITION» in site.css */
function DraftLineH(_ref) {
  var top = _ref.top,
    _ref$right = _ref.right,
    right = _ref$right === void 0 ? '-4rem' : _ref$right,
    _ref$left = _ref.left,
    left = _ref$left === void 0 ? '-4rem' : _ref$left;
  return /*#__PURE__*/React.createElement("div", {
    className: "gsn-draft-h",
    style: {
      position: 'absolute',
      top: top,
      right: right,
      left: left,
      height: '1px',
      background: 'var(--line-draft)',
      pointerEvents: 'none'
    }
  });
}
function DraftLineV(_ref2) {
  var side = _ref2.side,
    offset = _ref2.offset,
    _ref2$top = _ref2.top,
    top = _ref2$top === void 0 ? '-3rem' : _ref2$top,
    _ref2$bottom = _ref2.bottom,
    bottom = _ref2$bottom === void 0 ? '-3rem' : _ref2$bottom;
  var st = {
    position: 'absolute',
    top: top,
    bottom: bottom,
    width: '1px',
    background: 'var(--line-draft)',
    pointerEvents: 'none'
  };
  st[side] = offset;
  return /*#__PURE__*/React.createElement("div", {
    className: "gsn-draft-v",
    style: st
  });
}

/* ---------- motion: scroll reveal + parallax ---------- */
function Reveal(_ref3) {
  var children = _ref3.children,
    _ref3$delay = _ref3.delay,
    delay = _ref3$delay === void 0 ? 0 : _ref3$delay,
    style = _ref3.style,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? '' : _ref3$className;
  var ref = React.useRef(null);
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inView = _React$useState2[0],
    setInView = _React$useState2[1];
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var fired = false;
    var show = function show() {
      if (!fired) {
        fired = true;
        setInView(true);
        cleanup();
      }
    };
    var io = null;
    try {
      io = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) show();
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -5% 0px'
      });
      io.observe(el);
    } catch (e) {/* IO unavailable */}
    /* fallback: IO can be inert during the bundler splash / embedded frames —
       re-check from scroll position over the first few seconds until layout settles */
    var check = function check() {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) show();
    };
    var timers = [120, 400, 900, 1600, 2600].map(function (t) {
      return setTimeout(check, t);
    });
    window.addEventListener('load', check);
    window.addEventListener('scroll', check, {
      passive: true
    });
    window.addEventListener('resize', check, {
      passive: true
    });
    function cleanup() {
      if (io) io.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener('load', check);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    return cleanup;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "rv".concat(inView ? ' rv-in' : '').concat(className ? ' ' + className : ''),
    style: _objectSpread({
      transitionDelay: "".concat(delay, "ms")
    }, style)
  }, children);
}
function useParallax() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.06;
  var ref = React.useRef(null);
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('plx');
    var raf = 0;
    var onScroll = function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        if (document.body.dataset.motion === 'off') {
          el.style.transform = '';
          return;
        }
        var r = el.getBoundingClientRect();
        var d = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = "translateY(".concat((-d * speed).toFixed(1), "px)");
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return ref;
}

/* ---------- content (placeholder copy — replace with real pieces) ---------- */
/* Issue 1 is published with one essay still to come («گوسان کیست؟», due مهر ۲۵۸۵ (۱۴۰۵) — no day given since 16 Oct 2026, EIC).
   The note stands beside «نگاهی به این شماره» on the home page and beside the page count on the
   issue page. Set it to '' when the essay is in. (EIC, 8 Oct 2026) */
var GOSAN_ISSUE_PENDING = '(در دست تکمیل)';
var GOSAN_POSTS = [{
  slug: 'ethos-of-survival',
  tag: 'جستار',
  title: 'گذار از خلقیات بقاء',
  excerpt: 'موسیقی دستگاهی ایران چگونه قرن‌ها در «خلقیات بقاء» زیست، از آن بیرون آمد، و پس از ۱۳۵۷ به آن بازگشت.',
  date: 'شهریور ۲۵۸۵ (۱۴۰۵)',
  author: 'سهراب لبیب'
}, {
  slug: 'herzfeld-german-archives',
  tag: 'جستار',
  title: 'ارنست هرتسفلد در آیینۀ اسناد وزارت خارجۀ آلمان — بخش نخست',
  excerpt: 'درآمدی بر سه پوشهٔ اسناد «پروفسور هرتسفلد» در بایگانی سیاسی وزارت خارجهٔ آلمان و نخستین سند از این مجموعه.',
  date: 'مهر ۲۵۸۵ (۱۴۰۵)',
  author: 'سهیل دلشاد'
}, {
  slug: 'note-for-gosan',
  tag: 'دیدگاه',
  title: 'یادداشتی برای گوسان',
  excerpt: 'یادداشتی به مناسبت آغاز به کار گوسان؛ از «روزنامهٔ کاوه» برلین تا رسالت روایتگری گوسانِ امروز.',
  date: 'دی ۲۵۸۴ (۱۴۰۴)',
  author: 'سام گیوراد'
}, {
  slug: 'crossroads-ahead',
  tag: 'دیدگاه',
  title: 'دوراهی پیشِ رو',
  excerpt: 'درنگی در مهاجرت گستردهٔ موسیقی‌دانان ایرانی و پیامدهای آن برای تداوم نهادی آهنگسازی، موسیقی‌شناسی و اجرا.',
  date: 'خرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'مهرداد غلامی'
}, {
  slug: 'oil-to-narrative',
  tag: 'پروندهٔ اقتصاد خلاق',
  title: 'از نفت تا روایت: اهمیت ایجاد صندوق سرمایه‌گذاری ملی برای فرهنگ و هنر',
  excerpt: 'چرا ایجاد صندوق سرمایه‌گذاری ملی برای فرهنگ و هنر، نه یک انتخاب لوکس، که ضرورتی برای بازسازی جایگاه ایران است.',
  date: 'دی ۲۵۸۴ (۱۴۰۴)',
  author: 'مصطفی بوشهری'
}, {
  slug: 'interview-farnaz-modarresifar',
  tag: 'گفتگو',
  title: 'سنتور در کانون آوانگاردیسم: گفتگو با فرناز مدرسی‌فر',
  excerpt: 'فرناز مدرسی‌فر نخستین آهنگساز ایرانی است که به عنوان پانسیونرِ ویلای مدیچی (Villa Medici)، آکادمی فرانسه در رم، انتخاب شده است، و سنتور، به مثابۀ بخشی جدایی‌ناپذیر از هویت موسیقایی‌اش، همواره همراه اوست. نخستین کنسرتش در ویلا، در ماه نوامبر سال گذشته، با اجرای رپرتوار کلاسیک موسیقی ایرانی برگزار شد. حاصل بیش از شانزده سال پژوهش او دربارۀ این ساز، کتابی است که سال آینده در فرانسه منتشر می‌شود. با او گفت‌وگویی داشتم در سه محور، تا از رویکرد نوآورانه‌اش در آهنگسازی معاصر، چالش‌های پیوند میان سنت و مدرنیته، و نگاهش به نقش اجتماعی موسیقی بپرسم.',
  date: 'مرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'یلدا زمانی'
}, {
  slug: 'music-totalitarian-regimes',
  tag: 'جستار',
  title: 'نقش موسیقی در نظام‌های تمامیت‌خواه',
  excerpt: 'از سرودهای رایش سوم تا سمفونی بابی‌یار؛ جستاری در دو چهرهٔ موسیقی زیر سایهٔ قدرت: نوای فرمان و زمزمهٔ پنهان آزادی.',
  date: 'دی ۲۵۸۴ (۱۴۰۴)',
  author: 'حافظ باباشاهی'
}, {
  slug: 'beyzaie-myth-symbolic-action',
  tag: 'دیدگاه',
  title: 'حقیقتی که نمی‌رهاند؛ اسطوره‌سازی و کُنشِ نمادین در تئاتر بهرام بیضایی',
  excerpt: 'اسطوره در تئاتر بیضایی نه پناه‌بردن به گذشته، که راهبردی است برای برهم‌زدن قطعیت‌ها؛ درنگی بر کنش نمادین در «مرگ یزدگرد» و جهان نمایشی بیضایی.',
  date: 'بهمن ۲۵۸۴ (۱۴۰۴)',
  author: 'حامد امان‌پور قرایی'
}, {
  slug: 'between-two-defeats',
  tag: 'پروندهٔ سیاست‌گذاری فرهنگی',
  title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران',
  excerpt: 'این نخستین یادداشت از مجموعه‌ای از یادداشت‌ها است که با تکیه بر نظریه‌های اقتصادی و سیاست‌گذاری عمومی به مسائلِ سیاست‌گذاری فرهنگی در ایرانِ آزادِ آینده می‌پردازد.',
  date: 'مرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'یلدا زمانی'
}, {
  slug: 'azarkeyvani-creation-myth',
  tag: 'جستار',
  title: 'تأویلی آذرکیوانی از اسطورۀ آفرینش زردشتی در کتاب دبستان مذاهب',
  excerpt: 'بررسی روایت دبستان مذاهب از اسطورۀ آفرینش زردشتی و تأویل منسوب به جاماسب حکیم؛ روایتی که سرچشمهٔ آن نه متون زردشتی، که نوشته‌های ملل‌ونحل‌نویسان اسلامی است و تأویلش از اندیشه‌های آذرکیوانی برمی‌خیزد.',
  date: 'تیر ۲۵۸۵ (۱۴۰۵)',
  author: 'فرزانه گشتاسب'
}, {
  slug: 'who-is-the-gosan',
  tag: 'جستار',
  title: 'گوسان کیست؟ سنت گوسانان در ایران باستان',
  excerpt: 'انتشار در مهر ۲۵۸۵ (۱۴۰۵).',
  pending: true,
  date: 'مهر ۲۵۸۵ (۱۴۰۵)',
  author: 'احسان شواربی'
}, {
  slug: 'farabi-music-politics',
  tag: 'جستار',
  title: 'موسیقی، ریاضی، و سیاست در نزد فارابی',
  excerpt: 'فلسفه، سیاست و موسیقی نزد فارابی سه مشغلهٔ جداگانه نیستند. این جستار نشان می‌دهد چرا کتاب موسیقی کبیر هم‌زمان کتابی در آکوستیک، منطق و هنر حکومت‌داری است.',
  date: 'شهریور ۲۵۸۵ (۱۴۰۵)',
  author: 'امین نایب‌پور'
}];

/* Essays published in ordered پاره. A reader reaching the foot of one is offered
   the next, so a long piece can be read straight through. Slugs in reading order;
   the article page derives «پیشین/بعدی» from the position. */
/* When شمارهٔ ۱ goes out. Every essay in an issue carries the same publication
   date; a post may override it with its own `published` field. The issue goes
   out in مهر ۱۴۰۵ = مهر ۲۵۸۵ (editor-in-chief, 3 Oct 2026). */
var GOSAN_ISSUE_PUBLISHED = 'مهر ۲۵۸۵ (۱۴۰۵)';

/* «میانِ دو شکست» ran here as three پاره from 31 Aug 2026; it is one article
   again (EIC, 19 Oct 2026), so the list is empty. The rail stays for the next
   essay the editor-in-chief wants read in parts. */
var GOSAN_SERIES = [];

/* Social-only parts (EIC, 19 Oct 2026: «put back the three parts into one part
   on the website … use those extra photos for social media cards to present
   that article in three parts»). The site shows each essay below WHOLE; on
   social media it goes out in these parts, each with its own picture
   (GOSAN_COVERS), its own link card and its own address. An address
   /article/<part> opens the whole essay at the section where the part begins
   (`at`, an id in the body: the opera house picture for بخش دوم, under which
   its marker stands above the section title; the marker «بخش سوم» for بخش سوم,
   whose Grand Hotel picture sits further on, above «کلام آخر» (EIC, 19 Oct
   2026); '' = the top). Nothing here is listed on the site.
   The social tools read this list beside GOSAN_POSTS (tools/build-share-images.py). */
var GOSAN_SOCIAL_PARTS = [{
  slug: 'between-two-defeats-1',
  of: 'between-two-defeats',
  at: '',
  tag: 'پروندهٔ سیاست‌گذاری فرهنگی',
  title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران',
  excerpt: 'این نخستین یادداشت از مجموعه‌ای از یادداشت‌ها است که با تکیه بر نظریه‌های اقتصادی و سیاست‌گذاری عمومی به مسائلِ سیاست‌گذاری فرهنگی در ایرانِ آزادِ آینده می‌پردازد.',
  summary: 'چارچوب نظری. نویسنده با دو مفهوم بنیادین اقتصاد سیاسی، «شکست بازار» و «شکست دولت»، نشان می‌دهد که چرا فرهنگ و هنر را نه می‌توان یکسره به سازوکار عرضه و تقاضا سپرد و نه به دولتی که آن را ابزار بازتولید ایدئولوژی می‌کند. از مرز مشروع مداخلهٔ دولت آغاز می‌کند، به «اصل فاصله از قدرت» می‌رسد، و با تنش همیشگی میان کارایی و برابری پایان می‌گیرد.',
  date: 'مرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'یلدا زمانی'
}, {
  slug: 'between-two-defeats-2',
  of: 'between-two-defeats',
  at: 'fig-between-two-defeats-opera',
  tag: 'پروندهٔ سیاست‌گذاری فرهنگی',
  title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران (بخش دوم)',
  excerpt: 'تجربهٔ غرب: تاریخ حمایت دولتی از فرهنگ و هنر، الگوهای کهنه و ناکارآمد، و جعبه‌ابزار متنوعی که سیاست فرهنگی امروز در اختیار دارد.',
  summary: 'بخش دوم از «میانِ دو شکست»: تجربهٔ غرب. مروری بر تاریخ حمایت دولتی از فرهنگ و هنر در غرب، نقد الگوهای کهنه و ناکارآمدِ این حمایت، و معرفی جعبه‌ابزار متنوعی که سیاست فرهنگی امروز در اختیار دارد: از یارانهٔ مستقیم تا معافیت مالیاتی و نهادهای واسط.',
  date: 'مرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'یلدا زمانی'
}, {
  slug: 'between-two-defeats-3',
  of: 'between-two-defeats',
  at: 'part-between-two-defeats-3',
  tag: 'پروندهٔ سیاست‌گذاری فرهنگی',
  title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران (بخش سوم)',
  excerpt: 'کاربست ایرانی: چرا اصلاح فنیِ یک ساختار تمامیت‌خواه توهم است، طنز تلخ بوروکراسی، و گذار به دولت ملی.',
  summary: 'بخش سوم از «میانِ دو شکست»: کاربست ایرانی. چرا اصلاح فنیِ یک ساختار تمامیت‌خواه توهم است و گسل اصلی مطالعات سیاست‌گذاری فرهنگی در ایران کجاست؛ از طنز تلخ بوروکراسی تا گذار به دولت ملی و بازگشت به حافظهٔ تاریخی. کتاب‌نامهٔ کامل جستار در پایان همین بخش آمده است.',
  date: 'مرداد ۲۵۸۵ (۱۴۰۵)',
  author: 'یلدا زمانی'
}];

/* ---------- provenance: pieces that come out of the think tank ----------
   The گاهنامه carries two kinds of writing. Most of it is commissioned or
   submitted to the magazine; some of it is the written output of the
   اندیشکده's own working teams. A reader is entitled to know which is which,
   so any slug listed here carries an origin mark on its card. Add a slug when
   the piece is the institute's own research output — not merely when its
   subject is policy. */
var GOSAN_THINKTANK_LABEL = 'اندیشکدهٔ فرهنگ و هنر گوسان';
var GOSAN_THINKTANK_NOTE = 'این نوشتار برآمده از کار پژوهشی اندیشکدهٔ فرهنگ و هنر گوسان است.';
var GOSAN_THINKTANK = new Set(['between-two-defeats']);
var isThinkTank = function isThinkTank(slug) {
  return GOSAN_THINKTANK.has(slug);
};

/* ---------- form delivery ---------- */
var GOSAN_FORM_INBOX = 'info@gosan.org';
/* Reader notes go the same way as subscriptions: to the Worker, which mails them
   on through Brevo (tools/subscribe-worker). One processor for both, one AVV, and
   nothing published — the note reaches the desk and stops there. If the endpoint
   is not set yet, or the request fails, callers fall back to a mailto: compose. */
function gosanFormSubmit(_x) {
  return _gosanFormSubmit.apply(this, arguments);
}
/* what a reader's note must have before it is sent: words, and an address that can be answered (or none) */
function _gosanFormSubmit() {
  _gosanFormSubmit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(fields) {
    var endpoint, res, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          endpoint = typeof window !== 'undefined' && window.GOSAN_SUBSCRIBE_ENDPOINT || '';
          if (endpoint) {
            _context.n = 1;
            break;
          }
          throw new Error('subscribe endpoint not configured');
        case 1:
          _context.n = 2;
          return fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              kind: 'comment',
              name: fields.name || '',
              email: fields.email || '',
              message: fields.message || '',
              page: fields.page || '',
              subject: fields.subject || '',
              website: fields.website || '' /* honeypot — a person leaves this empty */
            })
          });
        case 2:
          res = _context.v;
          _context.n = 3;
          return res.json()["catch"](function () {
            return {};
          });
        case 3:
          data = _context.v;
          if (!(!res.ok || !data.ok)) {
            _context.n = 4;
            break;
          }
          throw new Error('relay status ' + res.status);
        case 4:
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _gosanFormSubmit.apply(this, arguments);
}
function gosanNoteProblem(fields) {
  if (!String(fields.message || '').trim()) return 'لطفاً پیام خود را بنویسید.';
  var e = String(fields.email || '').trim();
  if (e && !/^[^@\s,;]+@[^@\s,;]+\.[^@\s,;]{2,}$/.test(e)) return 'نشانی ایمیل درست نیست؛ آن را بررسی کنید یا خالی بگذارید.';
  return '';
}
/* a caption's source, «(…)» after a line break, joins the description when the line has room (EIC, 8 Oct 2026) */
function gosanSoftCaption(c) {
  if (!c || c.dataset.soft) return;
  var br = c.querySelector('br');
  if (!br) return;
  var rest = [];
  var n = br.nextSibling;
  while (n) {
    rest.push(n);
    n = n.nextSibling;
  }
  if (!rest.length || !/^\s*\(/.test(rest.map(function (x) {
    return x.textContent;
  }).join(''))) return;
  var src = document.createElement('span');
  src.className = 'cap-src';
  rest.forEach(function (x) {
    return src.appendChild(x);
  });
  br.replaceWith(document.createTextNode(' '));
  c.appendChild(src);
  c.dataset.soft = '1';
}
/* the same for a plain-text credit written «description\n(source)» */
function gosanSoftCredit(text) {
  var t = String(text || '');
  var i = t.indexOf('\n');
  if (i < 0) return t;
  return /*#__PURE__*/React.createElement(React.Fragment, null, t.slice(0, i), " ", /*#__PURE__*/React.createElement("span", {
    className: "cap-src"
  }, t.slice(i + 1)));
}
function gosanMailtoFallback(fields) {
  var subject = encodeURIComponent(fields.subject || 'پیام از وب‌سایت گوسان');
  var body = encodeURIComponent('نام: ' + (fields.name || '') + '\nرایانامه: ' + (fields.email || '') + '\nصفحه: ' + (fields.page || '') + '\n\nپیام:\n' + (fields.message || ''));
  window.location.href = 'mailto:' + GOSAN_FORM_INBOX + '?subject=' + subject + '&body=' + body;
}

/* article-page چکیده: the author/editor abstract (چکیدهٔ پیشنهادی) where one
   exists; SummaryAside falls back to the teaser excerpt otherwise. */
var GOSAN_SUMMARIES = {
  "ethos-of-survival": "این جستار موسیقی دستگاهی ایران را هنری می‌خواند که قرن‌ها در «خلقیات بقاء» زیسته است: از سخت‌گیری عصر صفوی تا دورانی که اکوسیستم بقاء جای خود را به رشد و اشاعه داد، و بازگشت به همان خلقیات پس از ۱۳۵۷.",
  "farabi-music-politics": "این جستار فلسفه، سیاست و موسیقی را نزد فارابی حلقه‌های یک زنجیر واحد می‌خواند: موسیقی در کتاب موسیقی کبیر به علمی برهانی بدل می‌شود و غایت آن تربیت اخلاقی شهروند در مدینهٔ فاضله است.",
  "azarkeyvani-creation-myth": "این جستار روایت کتاب دبستان مذاهب از اسطورۀ آفرینش زردشتی و تأویل منسوب به جاماسب حکیم را بررسی می‌کند؛ تأویلی که گیتی را بدن انسان، یزدان را روح، اهریمن را طبیعت عنصری و «فکر ردیه» را میل نفس به امور مادی می‌داند. مقایسهٔ روایت دبستان مذاهب با گزارش‌های الملل و النحل شهرستانی نشان می‌دهد که این روایت بیش از همه به عقاید فرقهٔ کیومرثیه نزدیک است: «یزدان ازلی و قدیم و اهرمن محدث و مخلوق است». بنابراین، سرچشمهٔ این روایت نوشته‌های ملل‌ونحل‌نویسان اسلامی بوده است، نه باورهای زردشتی در متون اوستایی یا فارسی میانه.",
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر نخستین آهنگساز ایرانی است که به عنوان پانسیونرِ ویلای مدیچی (Villa Medici)، آکادمی فرانسه در رم، انتخاب شده است، و سنتور، به مثابۀ بخشی جدایی‌ناپذیر از هویت موسیقایی‌اش، همواره همراه اوست. نخستین کنسرتش در ویلا، در ماه نوامبر سال گذشته، با اجرای رپرتوار کلاسیک موسیقی ایرانی برگزار شد. حاصل بیش از شانزده سال پژوهش او دربارۀ این ساز، کتابی است که سال آینده در فرانسه منتشر می‌شود. با او گفت‌وگویی داشتم در سه محور، تا از رویکرد نوآورانه‌اش در آهنگسازی معاصر، چالش‌های پیوند میان سنت و مدرنیته، و نگاهش به نقش اجتماعی موسیقی بپرسم.",
  "herzfeld-german-archives": "این جستار، بخش نخست از مجموعه‌ای دنباله‌دار، به معرفی و بررسی اسناد مربوط به ارنست هرتسفلد، ایران‌شناس و باستان‌شناس نامدار آلمانی، در بایگانی سفارت آلمان در تهران می‌پردازد؛ اسنادی که اکنون در «بایگانی سیاسی ادارۀ فدرال خارجی» در برلین نگهداری می‌شوند.",
  "crossroads-ahead": "این جستار به موج دو دهه‌ای مهاجرت موسیقی‌دانان ایرانی به اروپا و آمریکای شمالی و پیامدهای نهادی آن برای موسیقی کلاسیک ایران می‌پردازد.",
  "between-two-defeats": "این جستار، نخستین از یک مجموعه، با تکیه بر دو مفهوم بنیادین اقتصاد سیاسی، یعنی «شکست بازار» و «شکست دولت»، نشان می‌دهد که چرا فرهنگ و هنر را نه می‌توان کاملا به سازوکار عرضه و تقاضای بازار سپرد و نه به دولت مداخله‌گری که آن را ابزار بازتولید ایدئولوژی می‌کند. نویسنده با مرور تاریخ حمایت دولتی از هنر در غرب و نقد کوشش‌های بومی‌سازی مدل چارترند و مک‌کاهی در ایران، استدلال می‌کند که آیندهٔ فرهنگ باید از مسیری باریک میان این دو شکست بگذرد: دولتی در نقش بسترساز و حامی که با «اصل فاصله از قدرت»، تأمین مالی فرهنگ را از داوری دربارهٔ محتوای آن جدا می‌کند. حاصل چنین آرایشی، سیاستی است که شکاف‌های بازار را جبران می‌کند بی‌آنکه راه پویایی و آزادی آفرینش هنری را ببندد.",
  "music-totalitarian-regimes": "این جستار با شنیدنِ فینال سمفونی نهم بتهوون در ویرانه‌های ساختمان صداوسیما آغاز می‌شود و از همین جا پرسش از نسبت هنرمند با زمانهٔ خویش را پیش می‌کشد. سپس کارکرد دوگانهٔ موسیقی در نظام‌های تمامیت‌خواه را می‌کاود: از یک سو ابزار تبلیغات، سانسور و تربیت ایدئولوژیک، و از سوی دیگر پناهگاه آزادگی و شرافت انسان. گونه‌گونیِ مواضع هنرمندان در دوران سرکوب، آینه‌ای از وضعیت اخلاقی یک دوران است.",
  "beyzaie-myth-symbolic-action": "این یادداشت تئاتر بهرام بیضایی را در برابر سلطهٔ رئالیسمِ توضیح‌محور و نگاه روان‌شناختی می‌نشاند؛ تئاتری که به‌جای افشاگری و وعدهٔ رهایی، با اسطوره و کنش نمادین نظمِ خوگرفته به فهم‌پذیری و تسکین را برهم می‌زند.",
  "note-for-gosan": "این یادداشت به مناسبت زایش گاهنامهٔ گوسان نوشته شده و نویسنده در آن، دعوتِ احسان شواربی و گروهی از ایران‌دوستانِ مقیم اروپا به همکاری با نشریه را دست‌مایهٔ یادآوریِ «روزنامهٔ کاوه» می‌کند؛ نشریه‌ای که سیدحسن تقی‌زاده در گیرودار جنگ جهانی اول در برلن بنیاد نهاد.",
  "oil-to-narrative": "این جستار از پروندهٔ اقتصاد خلاق استدلال می‌کند که فرهنگ و هنر در جهان امروز به عرصه‌ای برای رقابتِ قدرت و «قدرت نرم» بدل شده‌اند و دولت‌های خاورمیانه، از راه صندوق‌های ثروت ملی، آن را در خدمت سه هدف به کار گرفته‌اند: توانمندسازی هنر داخلی، برندسازی ملی، و رقابت منطقه‌ای و جهانی. نویسنده با نمونه‌هایی چون «چشم‌انداز سعودی ۲۰۳۰»، جشنواره‌های ریاض و موزهٔ لوور ابوظبی، این سرمایه‌گذاری‌ها را نه هزینه‌ای تزئینی بلکه راهبردی آگاهانه می‌خواند، و در برابرِ آن تجربهٔ ناتمام ایران را می‌نشاند: از سرمایه‌گذاری‌های فرامرزیِ دوران پهلوی تا فروکاسته‌شدنِ صندوق توسعهٔ ملیِ جمهوری اسلامی به ابزار جبران کسری بودجه. به باور او، ایجاد صندوق سرمایه‌گذاری ملیِ مستقل، شفاف و آینده‌نگر و تخصیص بخشی از آن به فرهنگ و هنر تنها از دولتی ملی برمی‌آید و برای بازسازی جایگاه منطقه‌ای و جهانی ایران نه انتخابی لوکس، بلکه ضرورتی است."
};
Object.assign(window, {
  Button: Button,
  Tag: Tag,
  SectionHead: SectionHead,
  ArticleCard: ArticleCard,
  Verse: Verse,
  PullQuote: PullQuote,
  GoldDots: GoldDots,
  DraftFrame: DraftFrame,
  FormField: FormField,
  DraftLineH: DraftLineH,
  DraftLineV: DraftLineV,
  Reveal: Reveal,
  useParallax: useParallax,
  GOSAN_POSTS: GOSAN_POSTS,
  GOSAN_SUMMARIES: GOSAN_SUMMARIES,
  GOSAN_SERIES: GOSAN_SERIES,
  GOSAN_SOCIAL_PARTS: GOSAN_SOCIAL_PARTS,
  GOSAN_ISSUE_PUBLISHED: GOSAN_ISSUE_PUBLISHED,
  ClockIcon: ClockIcon,
  gosanFormSubmit: gosanFormSubmit,
  gosanMailtoFallback: gosanMailtoFallback,
  gosanSoftCaption: gosanSoftCaption,
  gosanSoftCredit: gosanSoftCredit,
  gosanNoteProblem: gosanNoteProblem
});
function ClockIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  }));
}

/* ---------- Persian motif — toranj medallion flanked by two fading gold lines ---------- */
function MotifMark(_ref4) {
  var _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 52 : _ref4$size;
  return /*#__PURE__*/React.createElement("svg", {
    className: "gsn-motif-mark",
    width: size * 86 / 117,
    height: size,
    viewBox: "0 0 86 117",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M43 3 C41.3 6 41.3 8.6 43 11.2 C44.7 8.6 44.7 6 43 3 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.5 9.5 C38 11.4 39.4 12 41 11.7 M48.5 9.5 C48 11.4 46.6 12 45 11.7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 11 C49 14 55 18 57 27 C58.4 31 55.5 33 57 37 C61 46 65 55 65 65 C65 77 56 88 43 103 C30 88 21 77 21 65 C21 55 25 46 29 37 C30.5 33 27.6 31 29 27 C31 18 37 14 43 11 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 18 C47.5 20.5 52 23.5 53.5 31 C54.5 35 52 37 53 40.5 C56 48 59 55 59 64 C59 74 51.5 83 43 95 C34.5 83 27 74 27 64 C27 55 30 48 33 40.5 C34 37 31.5 35 32.5 31 C34 23.5 38.5 20.5 43 18 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 23 C38.5 28 37.5 33 40 40 M43 23 C47.5 28 48.5 33 46 40"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 103 L43 106"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 106 C41.2 108.5 41.2 111 43 113.5 C44.8 111 44.8 108.5 43 106 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 50 C39 58 39 66 43 74 C47 66 47 58 43 50 Z"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "43",
    cy: "61",
    r: "1.6",
    fill: "currentColor"
  }));
}
function MotifDivider(_ref5) {
  var _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 26 : _ref5$size,
    style = _ref5.style,
    _ref5$className = _ref5.className,
    className = _ref5$className === void 0 ? '' : _ref5$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "gsn-motif-divider".concat(className ? ' ' + className : ''),
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-motif-line"
  }), /*#__PURE__*/React.createElement(MotifMark, {
    size: size
  }), /*#__PURE__*/React.createElement("span", {
    className: "gsn-motif-line"
  }));
}
Object.assign(window, {
  MotifMark: MotifMark,
  MotifDivider: MotifDivider
});