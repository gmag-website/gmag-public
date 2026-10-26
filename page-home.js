"use strict";

var _excluded = ["slug", "children"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* Gosan Weblog — bilingual (FA/EN) New Criterion–style home.
   3-up featured strip + dense two-column body + sticky sidebar.
   All article images are fill-later <image-slot> placeholders. */

/* English mirror of GOSAN_POSTS (same slugs, translated) */
var GOSAN_POSTS_EN = {};
var HOME_T = {
  fa: {
    mastName: 'گاهنامهٔ فرهنگی و هنری گوسان',
    issueR: 'سال ۱ · شمارهٔ ۱',
    season: 'مهرگان ۲۵۸۵ (۱۴۰۵)',
    tagline: 'گاهنامه‌ای در فرهنگ، هنر و میراث کهن ایران',
    subSmall: 'ده شماره در سال · دسترسی به بایگانی',
    sub: 'نگاهی به این شماره',
    issueLine: 'سال ۱ · شمارهٔ ۱ · مهرگان ۲۵۸۵ (۱۴۰۵)',
    notes: 'یادداشت‌ها و درنگ‌ها',
    features: 'جستارهای این شماره',
    featuresMore: 'همهٔ جستارها ←',
    interviews: 'گفتگو',
    interviewsMore: 'همهٔ گفتگوها ←',
    poetry: 'شعر',
    memoriam: 'یادمان',
    memoriamMore: 'همهٔ یادمان‌ها ←',
    popular: 'پرخواننده‌ترین‌ها',
    coverH: 'انتشار نخستین دفتر گوسان در مهرگان ۲۵۸۵ (۱۴۰۵)',
    coverBtn: 'دریافت اشتراک گاهنامهٔ گوسان',
    newsK: 'خبرنامه',
    newsH: 'خبرنامهٔ گوسان',
    newsP: 'نوشتارهای تازه، خبرها و رویدادهای گوسان',
    newsBtn: 'پیوستن',
    newsOk: 'سپاس؛ نشانی شما ثبت شد.',
    edK: 'پیامی از سردبیران',
    edH: 'در پاسداشتِ فرهنگ و هنرِ ایران با ما همراه شوید.',
    edP: 'یاریِ شما، روایتگریِ گوسان را پایدار نگاه می‌دارد.',
    edBtn: 'حمایت می‌کنم',
    slotPh: 'تصویر را اینجا رها کنید',
    latestK: 'تازه‌ترین‌ها',
    manK: 'بیانیهٔ گوسان',
    manLead: 'گوسان ریشه در روزگاران کهن دارد.',
    manBody: ['در ایران باستان، گوسان به رامشگران و نغمه‌خوانانی گفته می‌شد که حافظ تاریخ و افسانه‌های کهن بودند. گوسان‌ها روایتگر بودند؛ روایتگر شادی و اندوه مردمان، روایتگر رزم و بزم شاهان، روایتگر پیروزی و شکست قهرمانان. و این همه را به دیبای وزن و قافیه می‌آراستند تا سینه به سینه بازگفته و بازخوانده شود. گوسان‌ها می‌سرودند و می‌نواختند تا تاریخ و افسانه را در جامهٔ زربفتِ چامه و موسیقی از گزند فراموشی در امان بدارند. از پس آنان خدای‌نامه‌نویسانِ ساسانی آمدند و پسان‌تر سرایندگانِ پارسی‌گوی، از توس و بخارا تا تبریز و گنجه، از شیراز و کرمان تا غزنه و دهلی.', 'امروز نیز ما در گاهنامهٔ «گوسان» گردآمده‌ایم تا روایتگر باشیم؛ روایتگرِ فرهنگ و هنر و میراثِ کهنِ ایران، در روزگاری که فرهنگ و هنر به کنج انزوا گرفتار آمده و ستیز با تاریخ و میراثِ کهنِ ایران فزونی گرفته است؛ چنان‌که حکیم توس در شرح روزگارِ چیرگی ضحاکِ تازی گفته است:'],
    manVerse: {
      a: 'هنر خوار شد جادویی ارجمند',
      b: 'نهان راستی، آشکارا گزند'
    },
    manClose: 'گاهنامهٔ «گوسان» در پی آن است که غبار فراموشی را از صفحهٔ فرهنگ و هنر و میراثِ ایران بزداید؛ گوشه‌های ناشناختهٔ تاریخ و فرهنگ و هنرِ ایران را به ابزارِ پژوهش و نقد بکاود، بشناسد و روایت کند.',
    topics: [['جستار', '/archive/جستار'], ['گفتگو', '/archive/گفتگو'], ['یادمان', '/archive/یادمان'], ['یادداشت آزاد', '/archive/یادداشت آزاد'], ['شیوه‌نامه', '/shivenameh'], ['اندیشکده', '/thinktank']],
    verses: [{
      hemistichs: ['هنر خوار شد جادویی ارجمند', 'نهان راستی، آشکارا گزند'],
      poet: 'فردوسی — شاهنامه'
    }, {
      hemistichs: ['بسی رنج بردم در این سال سی', 'عجم زنده کردم بدین پارسی'],
      poet: 'فردوسی — شاهنامه'
    }]
  },
  en: {
    mastName: 'Gōsān — a magazine of culture and art',
    issueR: 'Vol. I · No. 1',
    season: 'Autumn 2585 (1405)',
    tagline: 'A review of the arts, culture & heritage of Iran',
    subSmall: 'Ten issues a year · archive access',
    sub: 'A look at this issue',
    issueLine: 'No. 1 — Autumn 2585 (1405)',
    notes: 'Notes & Comments',
    features: 'Features',
    featuresMore: 'All essays →',
    interviews: 'Interviews',
    interviewsMore: 'All interviews →',
    poetry: 'Poetry',
    memoriam: 'Memoriam',
    memoriamMore: 'All memorials →',
    popular: 'Most Popular',
    coverH: 'The first issue of Gōsān comes out at Mehregān 2585 (1405)',
    coverBtn: 'Subscribe to Gōsān',
    newsK: 'NEWSLETTER',
    newsH: 'The Gōsān Newsletter',
    newsP: 'New essays, news and what is happening at Gōsān — straight to your inbox.',
    newsBtn: 'Join',
    newsOk: 'Thank you — your address is registered.',
    edK: 'A MESSAGE FROM THE EDITORS',
    edH: 'Join us in preserving the culture & art of Iran.',
    edP: 'Your support keeps Gōsān’s storytelling alive.',
    edBtn: 'Support us',
    slotPh: 'Drop an image',
    latestK: 'Latest',
    manK: 'The Gōsān Manifesto',
    manLead: 'Gōsān is the name of those ancient minstrels and narrators who kept the history and legend of this land safe from oblivion, in the brocade of verse and song.',
    manBody: ['We took this name to carry the same charge: to tell the story of Iran’s culture, art, and heritage as it deserves to be told — not with a blind nostalgia for the past, but with a clear eye on the present.', 'Gōsān is not a museum, nor a mourner of bygone days. It is a living review that bridges tradition and now — from the miniature to the new poetry, from the musical radif to the architecture of old alleys.', 'Our belief is simple: a culture that is not narrated is forgotten. And we have come to narrate it.'],
    topics: [['Essays', '/archive/جستار'], ['Interviews', '/archive/گفتگو'], ['Memoriam', '/archive/یادمان'], ['Notes', '/archive/یادداشت آزاد'], ['Style', '/shivenameh'], ['Think Tank', '/thinktank']],
    verses: [{
      hemistichs: ['Art was scorned, and sorcery prized,', 'truth lay hidden, and harm ran rife.'],
      poet: 'Ferdowsi — Shāhnāmeh'
    }, {
      hemistichs: ['Much have I toiled across these thirty years —', 'I revived the Persians with this Persian tongue.'],
      poet: 'Ferdowsi — Shāhnāmeh'
    }]
  }
};
function postFor(slug, lang) {
  if (lang === 'en') return _objectSpread({
    slug: slug
  }, GOSAN_POSTS_EN[slug]);
  return GOSAN_POSTS.find(function (p) {
    return p.slug === slug;
  });
}

/* real cover photos for articles that ship with imagery; the rest fall back
   to fillable <image-slot> placeholders. */
/* Home-page cover photos use a black-and-white halftone treatment (separate
   files); the same photos appear inside the articles in their original form. */
/* Essays announced on the landing page whose text has not arrived yet. The card
   stays exactly as it is — cover, kicker, title, byline — but nothing on it is
   clickable, so a reader is never dropped onto a «به‌زودی» placeholder. Add a
   slug here and every link to it on this page goes inert; remove it and the
   links come back. Nothing else about the card changes. */
var NO_LINK = new Set(['who-is-the-gosan' /* «گوسان کیست؟» — احسان شواربی; awaiting the text (EIC, 2026-09-19) */]);

/* A link to an article that goes inert for a NO_LINK slug. Same className and
   children either way, so the card's typography and layout are untouched; the
   <a> simply becomes a <span> with no href — which also takes it out of the tab
   order and drops the :hover and :focus-visible affordances. */
function ALink(_ref) {
  var slug = _ref.slug,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (NO_LINK.has(slug)) {
    return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
      "aria-disabled": "true"
    }), children);
  }
  return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: "/article/".concat(slug)
  }), children);
}
var GOSAN_COVERS = {
  "ethos-of-survival": "uploads/covers/ethos-of-survival.jpg",
  "herzfeld-german-archives": "uploads/covers/herzfeld-german-archives.jpg",
  "oil-to-narrative": "uploads/covers/oil-to-narrative.jpg",
  "interview-farnaz-modarresifar": "uploads/covers/interview-farnaz-modarresifar.jpg",
  "music-totalitarian-regimes": "uploads/covers/music-totalitarian-regimes.jpg",
  "beyzaie-myth-symbolic-action": "uploads/covers/beyzaie-myth-symbolic-action.jpg",
  "between-two-defeats": "uploads/covers/between-two-defeats.jpg",
  "azarkeyvani-creation-myth": "uploads/covers/azarkeyvani-creation-myth.jpg",
  "who-is-the-gosan": "uploads/covers/who-is-the-gosan.jpg",
  "farabi-music-politics": "uploads/covers/farabi-music-politics.jpg",
  "note-for-gosan": "uploads/covers/note-for-gosan.jpg",
  "crossroads-ahead": "uploads/covers/crossroads-ahead.jpg"
};
var GOSAN_COVER_ALTS = {
  "ethos-of-survival": "سه نوازندهٔ بزم: دف، کمانچه و سازی زهی؛ نگاره‌ای از خمسهٔ نظامی («خسرو و شیرین»)، دههٔ ۱۵۷۰ میلادی.\n(منبع: کتابخانهٔ ملی روسیه، دست‌نویس Dorn 341، برگ ۷۰پ؛ ویکی‌انبار، مالکیت عمومی)",
  "herzfeld-german-archives": "پاسارگاد، کاخ P پیش از کاوش.\n(عکس: ارنست هرتسفلد، آرشیو فریر-سکلر)",
  "oil-to-narrative": "چاه نفت در ایران، حدود دههٔ ۱۹۱۰.\n(عکس: A. P. Godber)",
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر در ویلای مدیچی، رم، ۲۰۲۵.\n(عکس: فرید مدرسی‌فر)",
  "music-totalitarian-regimes": "ویلهلم فورتونگلر در کنسرت کارخانهٔ آ.ا.گ، برلین.\n(منبع: Bundesarchiv Bild 183-L0607-504, CC BY-SA 3.0 DE)",
  "beyzaie-myth-symbolic-action": "پوستر چریکه تارا (۱۳۵۸)، ساختهٔ بهرام بیضایی.\n(منبع: ویکی‌انبار، مالکیت عمومی)",
  "between-two-defeats": "خیابان چراغ‌گاز، تهران، حدود ۱۲۶۰ خورشیدی.\n(عکس: آنتوان سوریوگین)",
  "azarkeyvani-creation-myth": "دو برگ مصوّر از «اقتباس دبستان مذاهب»، دست‌نویس فارسی، ۱۲۸۴ ق.\n(منبع: موزهٔ سالار جنگ، حیدرآباد؛ عکس: Sailko، CC BY 3.0)",
  "who-is-the-gosan": "بشقاب سیمین ساسانی: شاه بر تخت در میان نوازندگان.\n(منبع: ارمیتاژ؛ عکس: Darafsh، CC BY-SA 4.0)",
  "farabi-music-politics": "نگارهٔ ساز شاهرود از دست‌نویس کتاب الموسیقی الکبیر فارابی.\n(منبع: ویکی‌انبار، مالکیت عمومی)",
  "note-for-gosan": "سرلوحهٔ شمارهٔ نخست مجلهٔ کاوه، برلین، ۱۹۱۶.\n(منبع: ویکی‌انبار، مالکیت عمومی)",
  "crossroads-ahead": "تالار رودکی تهران، حدود ۱۳۴۹.\n(منبع: آرشیو باله‌های ایرانی (Les Ballets Persans)؛ ویکی‌انبار، مالکیت عمومی)"
};

/* split a two-part title at «:» or «؛» and drop the second part to a new line.
   Some titles have no separator but still need a fixed break point. */
var TITLE_BREAKS = {};
function splitTitle(t) {
  var s = String(t == null ? '' : t);
  var m = s.match(/^(.+?)\s*[:؛—–]\s*(.+)$/);
  return m ? [m[1].trim(), m[2].trim()] : [s, null];
}

/* Persian title line-breaking: a wrapped line must START with a connector
   (از، در، و، به…). All other spaces become no-break spaces; segments that
   grow too long fall back to normal wrapping so nothing ever overflows. */
function smartTitleBreaks(t) {
  var CONN = new Set(['از', 'در', 'و', 'به', 'با', 'برای', 'میان', 'بر', 'تا', 'نزد', 'چون', 'همچون', 'دربارهٔ', 'دربارۀ']);
  var words = String(t == null ? '' : t).split(' ').filter(Boolean);
  if (words.length < 2) return String(t == null ? '' : t);
  var segs = [[words[0]]];
  for (var i = 1; i < words.length; i++) {
    if (CONN.has(words[i])) segs.push([words[i]]);else segs[segs.length - 1].push(words[i]);
  }
  return segs.map(function (seg) {
    var joined = seg.join(' ');
    return joined.length > 30 ? joined : seg.join("\xA0");
  }).join(' ');
}
function TitleLines(_ref2) {
  var text = _ref2.text;
  /* long one-part titles wrap at a fixed point — same size, same colour.
     A trailing «(بخش …)» label loses its parentheses and drops to its own,
     smaller line. */
  var raw = String(text == null ? '' : text);
  var pm = raw.match(/^(.*?)\s*(?:\((بخش\s[^)]+)\)|[—–-]\s*(بخش\s.+?))\s*$/);
  var base = pm ? pm[1] : raw;
  var partEl = pm ? /*#__PURE__*/React.createElement("span", {
    className: "title-part"
  }, pm[2] || pm[3]) : null;
  var br = TITLE_BREAKS[base];
  if (br) return /*#__PURE__*/React.createElement(React.Fragment, null, br.map(function (l, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 ? /*#__PURE__*/React.createElement("br", null) : null, l);
  }), partEl);
  var _splitTitle = splitTitle(base),
    _splitTitle2 = _slicedToArray(_splitTitle, 2),
    main = _splitTitle2[0],
    sub = _splitTitle2[1];
  return sub ? /*#__PURE__*/React.createElement(React.Fragment, null, smartTitleBreaks(main), /*#__PURE__*/React.createElement("span", {
    className: "title-sub"
  }, smartTitleBreaks(sub)), partEl) : /*#__PURE__*/React.createElement(React.Fragment, null, smartTitleBreaks(base), partEl);
}
function CoverCredit(_ref3) {
  var slug = _ref3.slug;
  var text = GOSAN_COVER_ALTS[slug];
  if (!text) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "cover-credit"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cover-credit-btn",
    "aria-label": 'اعتبار تصویر: ' + text
  }, "i"), /*#__PURE__*/React.createElement("span", {
    className: "cover-credit-tip",
    role: "tooltip"
  }, gosanSoftCredit(text)));
}

/* A card may carry its own crop instead of the carousel's (EIC, 11 Oct 2026, Goshtasb: the carousel
   keeps its crop; the cards show the open manuscript centred on its gutter, symmetrical). */
var GOSAN_CARD_COVERS = {
  'azarkeyvani-creation-myth': 'uploads/covers/azarkeyvani-creation-myth-full.jpg'
};
function Slot(_ref4) {
  var slug = _ref4.slug,
    lang = _ref4.lang,
    ph = _ref4.ph;
  var whole = GOSAN_CARD_COVERS[slug];
  var cover = whole || GOSAN_COVERS[slug];
  return /*#__PURE__*/React.createElement("div", {
    className: "nc-img-wrap"
  }, cover ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "nc-cover-img",
    src: cover,
    alt: GOSAN_COVER_ALTS[slug] || ''
  }), /*#__PURE__*/React.createElement(CoverCredit, {
    slug: slug
  })) : React.createElement('image-slot', {
    id: "slot-".concat(lang, "-").concat(slug),
    placeholder: ph,
    shape: 'rect'
  }));
}
function ByLine(_ref5) {
  var post = _ref5.post;
  return /*#__PURE__*/React.createElement("p", {
    className: "nc-by"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-by-name"
  }, post.author));
}

/* The line above a card's title. It carries the section tag, and — for a piece
   that came out of the اندیشکده rather than the گاهنامه's own desk — a second,
   quieter mark in the institute's teal, so a reader can tell at a glance where
   the writing originates. Cards only; the tag row wraps rather than pushing the
   title out of line. */
function Kicker(_ref6) {
  var post = _ref6.post;
  var tt = typeof isThinkTank === 'function' && isThinkTank(post.slug);
  return /*#__PURE__*/React.createElement("span", {
    className: "nc-kicker-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-kicker"
  }, post.tag), tt ? /*#__PURE__*/React.createElement("a", {
    className: "nc-origin",
    href: "/thinktank",
    title: GOSAN_THINKTANK_NOTE,
    "aria-label": GOSAN_THINKTANK_NOTE
  }, GOSAN_THINKTANK_LABEL) : null);
}
function HomePage(_ref7) {
  var _ref7$lang = _ref7.lang,
    lang = _ref7$lang === void 0 ? 'fa' : _ref7$lang,
    onToggleLang = _ref7.onToggleLang;
  var en = lang === 'en';
  var T = HOME_T[lang] || HOME_T.fa;
  var P = function P(slug) {
    return postFor(slug, lang);
  };

  /* elegant scroll-reveals — sections, manifesto, sidebar, dividers.
     No wrapper divs (keeps grid/flex layouts intact); fully gated on motion prefs.
     IO can be inert inside embedded frames, so we also re-check on scroll/resize
     + a few settle timers (same proven pattern as the Reveal component). */
  React.useEffect(function () {
    var sel = '.nc-home .nc-section, .nc-home .nc-manifesto, .nc-home .nc-aside-block, .nc-home .nc-issue-divider, .nc-home .nc-feat';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var els = Array.from(document.querySelectorAll(sel));
    if (reduce || document.body.dataset.motion === 'off') {
      els.forEach(function (e) {
        return e.classList.add('is-in');
      });
      return;
    }
    var reveal = function reveal(e) {
      e.classList.add('is-in');
    };
    var check = function check() {
      var vh = window.innerHeight;
      els = els.filter(function (e) {
        var r = e.getBoundingClientRect();
        if (r.top < vh * 0.92) {
          reveal(e);
          return false;
        }
        return true;
      });
      if (!els.length) cleanup();
    };
    var io = null;
    try {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            reveal(en.target);
            io.unobserve(en.target);
            els = els.filter(function (x) {
              return x !== en.target;
            });
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -6% 0px'
      });
      els.forEach(function (e) {
        return io.observe(e);
      });
    } catch (err) {/* IO unavailable */}
    var timers = [120, 450, 1000, 1800, 2800].map(function (t) {
      return setTimeout(check, t);
    });
    window.addEventListener('scroll', check, {
      passive: true
    });
    window.addEventListener('resize', check, {
      passive: true
    });
    window.addEventListener('load', check);
    function cleanup() {
      if (io) io.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      window.removeEventListener('load', check);
    }
    check();
    return cleanup;
  }, []);

  /* scroll to a section when arriving from an article's category link */
  React.useEffect(function () {
    var target;
    try {
      target = sessionStorage.getItem('gosan-scroll');
    } catch (e) {}
    if (!target) return;
    try {
      sessionStorage.removeItem('gosan-scroll');
    } catch (e) {}
    var tries = 0;
    var _tryScroll = function tryScroll() {
      var el = document.getElementById(target);
      if (el) {
        var y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else if (tries++ < 12) {
        setTimeout(_tryScroll, 130);
      }
    };
    setTimeout(_tryScroll, 150);
  }, []);

  /* The wall carries SEVEN essays, always — the seven the editor-in-chief picks,
     in this order. Add or drop a slug here and the wall follows; the slice is the
     guarantee that an eighth never quietly appears. */
  var WALL_SEVEN = ['who-is-the-gosan', /* ۱ */
  'music-totalitarian-regimes', /* ۲ — حافظ باباشاهی (EIC, 2026-09-19) */
  'herzfeld-german-archives', /* ۳ */
  'azarkeyvani-creation-myth', /* ۴ */
  'between-two-defeats', /* ۵ — یلدا زمانی (EIC, 2026-09-19) */
  'crossroads-ahead', /* ۶ */
  'beyzaie-myth-symbolic-action' /* ۷ */];
  var latest = WALL_SEVEN.map(P).filter(Boolean).slice(0, 7);
  /* پیشخوان — every essay in the issue, so a new one needs no second decision to
     be seen: the pieces that are not on the wall stand at the front, the seven
     follow. Three are on the counter; the arrow glides the rest into view. */
  var onWall = new Set(WALL_SEVEN);
  /* Slugs the editor-in-chief wants opening the پیشخوان, in this order. Anything
     not pinned keeps the old behaviour: off-wall essays first, then the seven. */
  var FEATURED_LEAD = ['ethos-of-survival', 'farabi-music-politics'];
  var rank = function rank(s) {
    return FEATURED_LEAD.indexOf(s) !== -1 ? FEATURED_LEAD.indexOf(s) - FEATURED_LEAD.length : onWall.has(s) ? 1 : 0;
  };
  var featured = GOSAN_POSTS.map(function (p) {
    return p.slug;
  }).sort(function (a, b) {
    return rank(a) - rank(b);
  }).map(P).filter(Boolean);
  var notes = [].map(P).filter(Boolean);
  var features = ['ethos-of-survival', 'azarkeyvani-creation-myth', 'herzfeld-german-archives', 'music-totalitarian-regimes', 'who-is-the-gosan', 'farabi-music-politics'].map(P).filter(Boolean);
  /* بیضایی: from یادمان to دیدگاه (EIC, 21 Oct 2026) */
  var viewpoints = ['note-for-gosan', 'crossroads-ahead', 'beyzaie-myth-symbolic-action'].map(P).filter(Boolean);
  var interviews = ['interview-farnaz-modarresifar'].map(P).filter(Boolean);
  var reviews = [].map(P).filter(Boolean);
  var policyDossier = ['between-two-defeats'].map(P).filter(Boolean);
  var economyDossier = ['oil-to-narrative'].map(P).filter(Boolean);
  /* پرخواننده‌ترین‌ها — the editor-in-chief's order (2026-09-19). */
  var popular = ['music-totalitarian-regimes', /* ۱ — حافظ باباشاهی */
  'crossroads-ahead', /* ۲ — مهرداد غلامی */
  'azarkeyvani-creation-myth', /* ۳ — فرزانه گشتاسب */
  'between-two-defeats', /* ۴ — یلدا زمانی */
  'ethos-of-survival' /* ۵ — سهراب لبیب */].map(P).filter(Boolean);

  /* the magazine's section taxonomy. populated categories reuse the sample
     articles; the rest are fillable placeholder structures (image-slots). */
  var categories = [{
    key: 'dossier-policy',
    label: 'پروندهٔ سیاست‌گذاری فرهنگی',
    posts: policyDossier,
    layout: 'grid'
  }, {
    key: 'essay',
    label: 'جستار',
    posts: features,
    layout: 'grid'
  }, {
    key: 'dossier-economy',
    label: 'پروندهٔ اقتصاد خلاق',
    posts: economyDossier,
    layout: 'grid'
  }, {
    key: 'viewpoint',
    label: 'دیدگاه',
    posts: viewpoints,
    layout: 'grid'
  }, /* یادمان: no section on the home page while it has no piece (EIC, 21 Oct 2026) */
  {
    key: 'interview',
    label: 'گفتگو',
    posts: interviews,
    layout: 'rows'
  }, {
    key: 'review',
    label: 'نقد و بررسی',
    posts: reviews,
    layout: 'grid'
  }];
  return /*#__PURE__*/React.createElement("main", {
    className: "nc-home",
    "data-screen-label": en ? 'Home' : 'خانه'
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-masthead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-masthead-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-mast-side is-start"
  }, /*#__PURE__*/React.createElement("a", {
    href: ISSUE_MENU.href
  }, /*#__PURE__*/React.createElement("img", {
    className: "nc-mast-cover",
    src: "assets/issue-cover.jpg",
    alt: en ? 'Issue No. 1 cover' : 'جلد شمارهٔ ۱'
  })), /*#__PURE__*/React.createElement("div", {
    className: "nc-mast-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-mast-name"
  }, T.mastName), /*#__PURE__*/React.createElement("span", {
    className: "nc-issueline"
  }, T.issueR, " \xB7 ", T.season), /*#__PURE__*/React.createElement("span", {
    className: "nc-issueline nc-mast-issn"
  }, "ISSN 3056-2201"), /*#__PURE__*/React.createElement("a", {
    href: ISSUE_MENU.href,
    className: "nc-mast-sub"
  }, T.sub, typeof GOSAN_ISSUE_PENDING === 'string' && GOSAN_ISSUE_PENDING ? ' ' + GOSAN_ISSUE_PENDING : ''))), /*#__PURE__*/React.createElement("div", {
    className: "nc-mast-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "nc-logo",
    role: "img",
    "aria-label": "\u06AF\u0648\u0633\u0627\u0646"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nc-mast-side is-end"
  }))), /*#__PURE__*/React.createElement(NcFloatingNav, {
    en: en
  }), /*#__PURE__*/React.createElement(NcLatestWall, {
    slides: latest,
    lang: lang,
    T: T
  }), /*#__PURE__*/React.createElement("div", {
    className: "nc-feat-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-label"
  }, "\u067E\u06CC\u0634\u062E\u0648\u0627\u0646"), /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6"))), /*#__PURE__*/React.createElement(NcFeatStrip, {
    items: featured,
    lang: lang,
    T: T
  }), /*#__PURE__*/React.createElement("div", {
    className: "nc-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-main"
  }, categories.map(function (c) {
    return /*#__PURE__*/React.createElement(NcCatSection, {
      key: c.key,
      cat: c,
      lang: lang,
      T: T
    });
  })), /*#__PURE__*/React.createElement("aside", {
    className: "nc-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-aside-block"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "nc-aside-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6"), " ", T.popular), /*#__PURE__*/React.createElement("ol", {
    className: "nc-popular"
  }, popular.map(function (p) {
    return /*#__PURE__*/React.createElement("li", {
      key: p.slug
    }, /*#__PURE__*/React.createElement(ALink, {
      slug: p.slug
    }, p.title, /*#__PURE__*/React.createElement("span", {
      className: "nc-pop-by"
    }, p.author)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "nc-aside-block nc-cover-card"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/issue-cover.jpg",
    alt: en ? 'Gōsān, Issue No. 1' : 'جلد شمارهٔ ۱ گوسان'
  }), /*#__PURE__*/React.createElement("h4", null, T.coverH), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return window.dispatchEvent(new CustomEvent('gosan:subscribe', {
        detail: 'issues'
      }));
    }
  }, T.coverBtn)), /*#__PURE__*/React.createElement(NcNewsletter, {
    T: T
  }), /*#__PURE__*/React.createElement("div", {
    className: "nc-aside-block nc-editors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-kicker"
  }, T.edK), /*#__PURE__*/React.createElement("h4", null, T.edH), /*#__PURE__*/React.createElement("p", null, T.edP), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "sm",
    href: "/support"
  }, T.edBtn)))), /*#__PURE__*/React.createElement("section", {
    className: "nc-blog-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display nc-blog-head"
  }, "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A"), /*#__PURE__*/React.createElement("p", {
    className: "nc-blog-lede"
  }, "\u062A\u0623\u0645\u0644\u0627\u062A \u0631\u0648\u0632"), /*#__PURE__*/React.createElement("p", {
    className: "nc-blog-desc"
  }, "\u0622\u0646\u0686\u0647 \u0645\u06CC\u0627\u0646 \u062F\u0648 \u0634\u0645\u0627\u0631\u0647 \u0645\u06CC\u200C\u06AF\u0630\u0631\u062F."), GOSAN_BLOG.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "nc-blog-empty"
  }, "\u0647\u0646\u0648\u0632 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u06CC \u0645\u0646\u062A\u0634\u0631 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.") : /*#__PURE__*/React.createElement("div", {
    className: "nc-blog-grid bj"
  }, GOSAN_BLOG.slice(0, 3).map(function (b) {
    return /*#__PURE__*/React.createElement("div", {
      key: b.slug,
      className: GOSAN_BLOG.length === 1 ? 'bj-grid-wide' : ''
    }, /*#__PURE__*/React.createElement(BlogCard, {
      post: b,
      wide: GOSAN_BLOG.length === 1
    }));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "blog-more",
    href: "/blog"
  }, "\u0647\u0645\u0647\u0654 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u200C\u0647\u0627")))));
}
function NcFloatingNav(_ref8) {
  var en = _ref8.en;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    navStuck = _React$useState2[0],
    setNavStuck = _React$useState2[1];
  /* the گوسان calligraphy docks into the bar once the manifesto logo has
     scrolled up past it, and leaves again when scrolling back up to it */
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    logoDocked = _React$useState4[0],
    setLogoDocked = _React$useState4[1];
  var navRef = React.useRef(null);
  React.useEffect(function () {
    var onScroll = function onScroll() {
      setNavStuck(window.scrollY > 24);
      /* .nc-man-logo is the manifesto's mark; under 1000px (bar + drawer) the
         reference is the masthead calligraphy itself, so the bar's small mark
         appears only once the big one has scrolled away — not twice, stacked */
      var phone = !!(window.matchMedia && window.matchMedia('(max-width: 1000px)').matches);
      var man = document.querySelector('.nc-man-logo') || (phone ? document.querySelector('.nc-mast-center .nc-logo') : null);
      var nav = navRef.current;
      var navR = nav ? nav.getBoundingClientRect() : null;
      /* on a handheld the bar sits right under the masthead, so the mark also
         waits until the bar is stuck to the top — otherwise both show at once */
      setLogoDocked(!!(man && nav) && man.getBoundingClientRect().bottom <= navR.bottom && (!phone || navR.top <= 0));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    ref: navRef,
    className: "nc-topics".concat(navStuck ? ' is-stuck' : '').concat(logoDocked ? ' has-logo' : '')
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "nc-topics-logo".concat(logoDocked ? ' is-docked' : ''),
    "aria-hidden": !logoDocked,
    tabIndex: logoDocked ? 0 : -1
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-gosan.png",
    alt: "\u06AF\u0648\u0633\u0627\u0646"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nc-topics-main"
  }, NAV_ITEMS.map(function (it) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.href
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      className: "nc-topic-link".concat(it.href === '/' ? ' is-active' : '')
    }, en ? it.en : it.fa), it.href === '/' ? /*#__PURE__*/React.createElement(NavIssueMenu, {
      en: en,
      linkClass: "nc-topic-link"
    }) : null);
  }), /*#__PURE__*/React.createElement("span", {
    className: "nc-topics-sep"
  }), /*#__PURE__*/React.createElement("a", {
    href: "/thinktank",
    className: "nav-think"
  }, en ? 'The Gōsān Think Tank' : 'اندیشکدهٔ فرهنگ و هنر گوسان')), /*#__PURE__*/React.createElement("div", {
    className: "nc-topics-controls"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nc-support-btn",
    href: "/support"
  }, "\u06CC\u0627\u0631\u0627\u0646 \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("button", {
    className: "nav-search",
    onClick: function onClick() {
      return window.dispatchEvent(new Event('gosan:search'));
    },
    "aria-label": en ? 'Search' : 'جستجو',
    title: en ? 'Search ( / )' : 'جستجو ( / )'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "20",
    x2: "16.05",
    y2: "16.05"
  })))), /*#__PURE__*/React.createElement(MobileNav, {
    en: en,
    isActive: function isActive(href) {
      return window.gosanPath() === href;
    }
  }));
}
function NcLatestWall(_ref9) {
  var slides = _ref9.slides,
    lang = _ref9.lang,
    T = _ref9.T;
  /* Seven plates side by side; the open one carries the essay. The wall turns
     its own page every five seconds and stops the moment a reader is on it —
     the same courtesy the carousel's pause-on-hover gave before it. */
  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    open = _React$useState6[0],
    setOpen = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    held = _React$useState8[0],
    setHeld = _React$useState8[1];
  var rowRef = React.useRef(null);
  React.useEffect(function () {
    if (held) return;
    if (document.body.dataset.motion === 'off') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!slides.length) return;
    var id = setInterval(function () {
      return setOpen(function (i) {
        return (i + 1) % slides.length;
      });
    }, 5000);
    return function () {
      return clearInterval(id);
    };
  }, [held, slides.length]);
  React.useEffect(function () {
    var onVis = function onVis() {
      return setHeld(document.hidden);
    };
    document.addEventListener('visibilitychange', onVis);
    return function () {
      return document.removeEventListener('visibilitychange', onVis);
    };
  }, []);
  /* Narrow screens turn the wall into a swipeable rail: keep the open plate in
     view. scrollIntoView cannot be used for this — even with block:'nearest' it
     walks every scrollable ancestor up to the document, so each turn of the wall
     dragged the page itself: measured here, one turn moved the window 321px
     while the rail moved. Scrolling the rail by the measured offset moves the
     rail exactly as far and leaves the window where the reader put it. */
  React.useEffect(function () {
    var row = rowRef.current;
    if (!row || row.scrollWidth <= row.clientWidth + 4) return;
    var plate = row.children[open];
    if (!plate) return;
    var rr = row.getBoundingClientRect();
    var pr = plate.getBoundingClientRect();
    var rtl = getComputedStyle(row).direction === 'rtl';
    var delta = rtl ? pr.right - rr.right : pr.left - rr.left;
    if (Math.abs(delta) < 1) return;
    var quiet = document.body.dataset.motion === 'off' || window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    row.scrollBy({
      left: delta,
      behavior: quiet ? 'auto' : 'smooth'
    });
  }, [open]);

  /* a finger on the rail is the touch equivalent of the cursor resting on the
     wall: hold the turn while it is there, and for a while after it lifts, so a
     reader's own swipe is not yanked back by the timer */
  var resume = React.useRef(null);
  var touchHold = function touchHold() {
    clearTimeout(resume.current);
    setHeld(true);
  };
  var touchRelease = function touchRelease() {
    clearTimeout(resume.current);
    resume.current = setTimeout(function () {
      return setHeld(false);
    }, 6000);
  };
  React.useEffect(function () {
    return function () {
      return clearTimeout(resume.current);
    };
  }, []);
  if (!slides.length) return null; /* nothing published in this rail yet */
  return /*#__PURE__*/React.createElement("section", {
    className: "nc-wall",
    "data-screen-label": lang === 'en' ? 'Latest wall' : T.latestK,
    onMouseEnter: function onMouseEnter() {
      return setHeld(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHeld(false);
    },
    onFocus: function onFocus() {
      return setHeld(true);
    },
    onBlur: function onBlur() {
      return setHeld(false);
    },
    onTouchStart: touchHold,
    onTouchEnd: touchRelease,
    onTouchCancel: touchRelease
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-wall-row",
    ref: rowRef
  }, slides.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.slug,
      className: "nc-plate".concat(i === open ? ' is-open' : ''),
      onMouseEnter: function onMouseEnter() {
        return setOpen(i);
      }
    }, /*#__PURE__*/React.createElement(ALink, {
      slug: p.slug,
      className: "nc-plate-face",
      "aria-label": p.title,
      onFocus: function onFocus() {
        return setOpen(i);
      }
    }, GOSAN_COVERS[p.slug] ? /*#__PURE__*/React.createElement("img", {
      className: "nc-cover-img",
      src: GOSAN_COVERS[p.slug],
      alt: GOSAN_COVER_ALTS[p.slug] || ''
    }) : React.createElement('image-slot', {
      id: "slot-wall-".concat(lang, "-").concat(p.slug),
      placeholder: T.slotPh,
      shape: 'rect'
    }), /*#__PURE__*/React.createElement("span", {
      className: "nc-plate-copy",
      "aria-hidden": i !== open
    }, /*#__PURE__*/React.createElement("span", {
      className: "nc-plate-title"
    }, /*#__PURE__*/React.createElement(TitleLines, {
      text: p.title
    })), /*#__PURE__*/React.createElement("span", {
      className: "nc-plate-by"
    }, p.author), /*#__PURE__*/React.createElement("span", {
      className: 'nc-plate-dek' + (p.pending ? ' is-pending' : '')
    }, p.excerpt))), /*#__PURE__*/React.createElement(CoverCredit, {
      slug: p.slug
    }));
  })));
}
function NcFeatStrip(_ref0) {
  var items = _ref0.items,
    lang = _ref0.lang,
    T = _ref0.T;
  /* three essays stand on the counter; the rest are one hover away. Resting on
     the arrow glides the strip open — the pointer asks, nothing jumps. */
  var railRef = React.useRef(null);
  var glide = React.useRef(0);
  var _React$useState9 = React.useState({
      start: true,
      end: true
    }),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    edge = _React$useState0[0],
    setEdge = _React$useState0[1];
  React.useEffect(function () {
    var rail = railRef.current;
    if (!rail) return;
    var read = function read() {
      var max = rail.scrollWidth - rail.clientWidth;
      var pos = Math.abs(rail.scrollLeft);
      setEdge({
        start: pos <= 2,
        end: max <= 2 || pos >= max - 2
      });
    };
    read();
    var id = setTimeout(read, 400); /* covers must land before the ends are known */
    rail.addEventListener('scroll', read, {
      passive: true
    });
    window.addEventListener('resize', read);
    return function () {
      clearTimeout(id);
      rail.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    };
  }, [items.length]);
  /* RTL: the later essays lie to the left, where scrollLeft runs negative */
  var step = function step(dir) {
    var rail = railRef.current;
    if (!rail) return;
    var card = rail.firstElementChild;
    var gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    var w = card ? card.getBoundingClientRect().width + gap : 340;
    rail.scrollBy({
      left: dir * w,
      behavior: 'smooth'
    });
  };
  var hold = function hold(dir) {
    var rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return step(dir);
    if (document.body.dataset.motion === 'off') return step(dir);
    cancelAnimationFrame(glide.current);
    rail.classList.add('is-gliding');
    var travel = rail.scrollWidth - rail.clientWidth;
    var rtl = rail.scrollLeft <= 0; /* RTL runs 0 → negative */
    var min = rtl ? -travel : 0;
    var max = rtl ? 0 : travel;
    var pos = rail.scrollLeft; /* float accumulator: the box itself rounds */
    var _run = function run() {
      pos = Math.min(max, Math.max(min, pos + dir * 2.4));
      rail.scrollLeft = pos;
      if (pos > min && pos < max) glide.current = requestAnimationFrame(_run);else rail.classList.remove('is-gliding');
    };
    glide.current = requestAnimationFrame(_run);
  };
  var release = function release() {
    cancelAnimationFrame(glide.current);
    var rail = railRef.current;
    if (rail) rail.classList.remove('is-gliding'); /* snap back on, strip settles on a card */
  };
  var arrow = function arrow(dir, off, label) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "nc-feat-arrow ".concat(dir < 0 ? 'is-next' : 'is-prev').concat(off ? ' is-off' : ''),
      "aria-label": label,
      onMouseEnter: function onMouseEnter() {
        return hold(dir);
      },
      onMouseLeave: release,
      onFocus: function onFocus() {
        return hold(dir);
      },
      onBlur: release,
      onClick: function onClick() {
        release();
        step(dir);
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: dir < 0 ? '15 5 8 12 15 19' : '9 5 16 12 9 19'
    })));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "nc-feat-wrap"
  }, /*#__PURE__*/React.createElement("section", {
    className: "nc-feat",
    ref: railRef,
    "data-screen-label": lang === 'en' ? 'Featured' : 'پیشخوان'
  }, items.map(function (p, i) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i * 110
    }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement(Slot, {
      slug: p.slug,
      lang: lang,
      ph: T.slotPh
    }), /*#__PURE__*/React.createElement(Kicker, {
      post: p
    }), /*#__PURE__*/React.createElement("h2", {
      className: "nc-title",
      style: {
        marginTop: '0.5rem'
      }
    }, /*#__PURE__*/React.createElement(ALink, {
      slug: p.slug
    }, /*#__PURE__*/React.createElement(TitleLines, {
      text: p.title
    }))), /*#__PURE__*/React.createElement(ByLine, {
      post: p
    }), /*#__PURE__*/React.createElement("p", {
      className: 'nc-dek' + (p.pending ? ' is-pending' : '')
    }, p.excerpt)));
  })), arrow(-1, edge.end, lang === 'en' ? 'More features' : 'نوشتارهای بیشتر'), arrow(1, edge.start, lang === 'en' ? 'Previous features' : 'نوشتارهای پیشین'));
}

/* The manifesto moved to the About page on 2026-08-31 (AboutManifesto in
   page-misc.jsx). The bilingual copy stays in T.man* above, unused for now,
   so a future bilingual About needs no retranslation. */

function NcCatSection(_ref1) {
  var cat = _ref1.cat,
    lang = _ref1.lang,
    T = _ref1.T;
  var key = cat.key,
    label = cat.label,
    posts = cat.posts,
    layout = cat.layout;
  return /*#__PURE__*/React.createElement("section", {
    id: "cat-".concat(key),
    className: "nc-section",
    "data-screen-label": label
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-sectionhead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "nc-sh-mark"
  }, "\u25C6"), /*#__PURE__*/React.createElement("a", {
    className: "nc-sh-more",
    href: "/archive/".concat(encodeURIComponent(label))
  }, "\u0647\u0645\u0647 \u2190")), posts.length ? layout === 'rows' ? /*#__PURE__*/React.createElement("div", {
    className: "nc-rows"
  }, posts.map(function (p) {
    return /*#__PURE__*/React.createElement("article", {
      key: p.slug,
      className: "nc-row"
    }, /*#__PURE__*/React.createElement(Slot, {
      slug: p.slug,
      lang: lang,
      ph: T.slotPh
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
      post: p
    }), /*#__PURE__*/React.createElement("h3", {
      className: "nc-title",
      style: {
        marginTop: '0.35rem'
      }
    }, /*#__PURE__*/React.createElement(ALink, {
      slug: p.slug
    }, /*#__PURE__*/React.createElement(TitleLines, {
      text: p.title
    }))), /*#__PURE__*/React.createElement(ByLine, {
      post: p
    }), /*#__PURE__*/React.createElement("p", {
      className: 'nc-dek' + (p.pending ? ' is-pending' : '')
    }, p.excerpt)));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "nc-grid2"
  }, posts.map(function (p) {
    return /*#__PURE__*/React.createElement("article", {
      key: p.slug
    }, /*#__PURE__*/React.createElement(Slot, {
      slug: p.slug,
      lang: lang,
      ph: T.slotPh
    }), /*#__PURE__*/React.createElement(Kicker, {
      post: p
    }), /*#__PURE__*/React.createElement("h3", {
      className: "nc-title",
      style: {
        marginTop: '0.4rem'
      }
    }, /*#__PURE__*/React.createElement(ALink, {
      slug: p.slug
    }, /*#__PURE__*/React.createElement(TitleLines, {
      text: p.title
    }))), /*#__PURE__*/React.createElement(ByLine, {
      post: p
    }), /*#__PURE__*/React.createElement("p", {
      className: 'nc-dek' + (p.pending ? ' is-pending' : '')
    }, p.excerpt));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "nc-cat-invite"
  }, /*#__PURE__*/React.createElement("p", {
    className: "nc-cat-invite-lead"
  }, "\u0627\u06CC\u0646 \u0628\u062E\u0634 \u0647\u0646\u0648\u0632 \u062F\u0631 \u0622\u063A\u0627\u0632 \u0631\u0627\u0647 \u0627\u0633\u062A \u0648 \u0686\u0634\u0645\u200C\u0628\u0647\u200C\u0631\u0627\u0647 \u0646\u062E\u0633\u062A\u06CC\u0646 \u0646\u0648\u0634\u062A\u0647\u200C\u0647\u0627\u0633\u062A."), /*#__PURE__*/React.createElement("p", {
    className: "nc-cat-invite-body"
  }, "\u067E\u0630\u06CC\u0631\u0627\u06CC \u0645\u0642\u0627\u0644\u0647\u200C\u0647\u0627 \u0648 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0634\u0645\u0627 \u0647\u0633\u062A\u06CC\u0645."), /*#__PURE__*/React.createElement("a", {
    className: "nc-cat-invite-cta",
    href: "/contact"
  }, "\u0627\u0631\u0633\u0627\u0644 \u0645\u0642\u0627\u0644\u0647 \u06CC\u0627 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F \u2190")));
}
function NcNewsletter(_ref10) {
  var T = _ref10.T;
  /* same path as the two subscription controls — see tools/subscribe-worker */
  var _React$useState1 = React.useState(''),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    email = _React$useState10[0],
    setEmail = _React$useState10[1];
  var _React$useState11 = React.useState({
      phase: 'idle',
      msg: ''
    }),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    state = _React$useState12[0],
    setState = _React$useState12[1];
  var submit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
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
            return gosanSubscribe(email.trim(), 'newsletter');
          case 2:
            r = _context.v;
            setState({
              phase: r.ok ? 'sent' : 'failed',
              msg: r.msg
            });
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function submit(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "nc-aside-block nc-news-mini"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nc-kicker"
  }, T.newsK), /*#__PURE__*/React.createElement("h4", null, T.newsH), /*#__PURE__*/React.createElement("p", null, T.newsP), state.phase === 'sent' ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--accent-strong)',
      fontWeight: 500,
      fontSize: '0.85rem',
      margin: 0
    }
  }, state.msg) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    placeholder: "you@example.com",
    "aria-label": "email"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "gsn-btn gsn-btn--gold gsn-btn--sm",
    disabled: state.phase === 'sending'
  }, T.newsBtn)), state.msg ? /*#__PURE__*/React.createElement("p", {
    className: "sub-note".concat(state.phase === 'failed' ? ' is-fail' : '')
  }, state.msg) : null));
}
Object.assign(window, {
  HomePage: HomePage,
  GOSAN_COVERS: GOSAN_COVERS,
  GOSAN_COVER_ALTS: GOSAN_COVER_ALTS
});