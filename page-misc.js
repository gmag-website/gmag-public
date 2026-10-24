"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
/* Gosan Weblog — archive, about, contact pages */

/* The issue's sections in editorial order — the same taxonomy the home page lays
   out and the «دفتر نخست» menu links to, so every one of those links lands on a
   filter that exists here. Sections with nothing in them yet are still listed: the
   archive says so plainly rather than hiding a section that was announced. */
var ARCHIVE_SECTIONS = ['جستار', 'پروندهٔ سیاست‌گذاری فرهنگی', 'پروندهٔ اقتصاد خلاق', 'پروندهٔ آموزش', 'دیدگاه', 'یادمان', 'گفتگو', 'نقد و بررسی'];

/* The register of issues — issues.json, the same file the share cards are built
   from: issues[{ number, line, slugs }]. One request, kept for the session. A
   site without the file simply has no issue choice. */
var GOSAN_ISSUES = null;
var loadIssues = function loadIssues() {
  return GOSAN_ISSUES || (GOSAN_ISSUES = fetch('issues.json').then(function (r) {
    return r.json();
  }).then(function (d) {
    return d && Array.isArray(d.issues) ? d.issues.filter(function (i) {
      return i && Number.isFinite(i.number) && Array.isArray(i.slugs);
    }) : [];
  })["catch"](function () {
    GOSAN_ISSUES = null;
    return [];
  }));
};

/* Search that reads Persian the way a reader types it: Arabic ي and ك are ی and ک,
   the half-space and the tatweel are not there, «هٔ» and «ۀ» are «ه», vowel marks
   are dropped, and a digit is the same digit in Persian, Arabic or Latin form. */
var faFold = function faFold(s) {
  return String(s || '').toLowerCase().replace(/[‌‍‎‏­ـ]/g, '') // ZWNJ, ZWJ, marks, soft hyphen, tatweel
  .replace(/[ً-ٰٟ]/g, '') // harakat, tanwin, hamza above (هٔ)
  .replace(/[يى]/g, 'ی').replace(/ك/g, 'ک') // ي ى → ی ; ك → ک
  .replace(/[ۀۂة]/g, 'ه') // ۀ ۂ ة → ه
  .replace(/[۰-۹]/g, function (d) {
    return d.charCodeAt(0) - 0x06f0;
  }) // ۰–۹ → 0–9
  .replace(/[٠-٩]/g, function (d) {
    return d.charCodeAt(0) - 0x0660;
  }) // ٠–٩ → 0–9
  .replace(/\s+/g, ' ').trim();
};

/* The issue chosen and the words typed. A change of section is a change of address
   and remounts the page, so the two are kept here and the three narrow together;
   leaving the archive clears them, and the next visit opens on everything. */
var ARCHIVE_PICK = {
  issue: null,
  q: ''
};
function ArchivePage(_ref) {
  var tag = _ref.tag;
  /* Any tag in the URL filters. An unknown or empty section shows nothing rather
     than silently falling back to the whole archive — پروندهٔ آموزش has no essays
     yet, and showing all twelve there would misrepresent it. */
  var active = tag || 'همه';
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    issues = _React$useState2[0],
    setIssues = _React$useState2[1];
  var _React$useState3 = React.useState(ARCHIVE_PICK.issue),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    issue = _React$useState4[0],
    setIssue = _React$useState4[1];
  var _React$useState5 = React.useState(ARCHIVE_PICK.q),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    q = _React$useState6[0],
    setQ = _React$useState6[1];
  React.useEffect(function () {
    var on = true;
    loadIssues().then(function (list) {
      if (on) setIssues(list);
    });
    return function () {
      on = false;
      if (window.gosanPath().replace(/^\/?/, '').split('/')[0] !== 'archive') {
        ARCHIVE_PICK.issue = null;
        ARCHIVE_PICK.q = '';
      }
    };
  }, []);
  React.useEffect(function () {
    ARCHIVE_PICK.issue = issue;
    ARCHIVE_PICK.q = q;
  }, [issue, q]);

  /* three ways to narrow the one list, and they narrow together: the issue, the
     section, the words. Only what the registry lists is ever shown — a slug an
     issue names but the site does not list never surfaces. */
  var picked = issues.find(function (i) {
    return i.number === issue;
  }) || null;
  var inIssue = picked ? new Set(picked.slugs) : null;
  var words = faFold(q).split(' ').filter(Boolean);
  var posts = GOSAN_POSTS.filter(function (p) {
    if (active !== 'همه' && p.tag !== active) return false;
    if (inIssue && !inIssue.has(p.slug)) return false;
    if (!words.length) return true;
    var text = faFold([p.title, p.author, p.excerpt, GOSAN_SUMMARIES[p.slug]].join(' '));
    return words.every(function (w) {
      return text.includes(w);
    });
  });
  var sectionEmpty = active !== 'همه' && !GOSAN_POSTS.some(function (p) {
    return p.tag === active;
  });
  /* a tag a post carries but the list above forgot is appended rather than lost —
     that is how دیدگاه went missing from this page while carrying two essays */
  var strays = _toConsumableArray(new Set(GOSAN_POSTS.map(function (p) {
    return p.tag;
  }))).filter(function (t) {
    return !ARCHIVE_SECTIONS.includes(t);
  });
  var tags = ['همه'].concat(ARCHIVE_SECTIONS, _toConsumableArray(strays));
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "ARCHIVE // ALL ENTRIES",
    title: "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC",
    lede: "\u0647\u0645\u0647\u0654 \u0646\u0648\u0634\u062A\u0627\u0631\u0647\u0627\u06CC \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u060C \u0627\u0632 \u0646\u062E\u0633\u062A\u06CC\u0646 \u062F\u0641\u062A\u0631 \u062A\u0627\u06A9\u0646\u0648\u0646"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "archive-tools"
  }, issues.length ? /*#__PURE__*/React.createElement("div", {
    className: "filter-row",
    role: "group",
    "aria-label": "\u0634\u0645\u0627\u0631\u0647"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "filter-btn".concat(picked ? '' : ' is-active'),
    "aria-pressed": !picked,
    onClick: function onClick() {
      return setIssue(null);
    }
  }, "\u0647\u0645\u0647\u0654 \u0634\u0645\u0627\u0631\u0647\u200C\u0647\u0627"), issues.map(function (i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i.number,
      type: "button",
      title: i.line,
      className: "filter-btn".concat(picked === i ? ' is-active' : ''),
      "aria-pressed": picked === i,
      onClick: function onClick() {
        return setIssue(i.number);
      }
    }, 'شمارهٔ ' + faDigits(i.number));
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, tags.map(function (t) {
    return /*#__PURE__*/React.createElement("a", {
      key: t,
      className: "filter-btn".concat(t === active ? ' is-active' : ''),
      href: t === 'همه' ? '/archive' : "/archive/".concat(t)
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    className: "newsletter-form archive-search"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "search",
    enterKeyHint: "search",
    autoComplete: "off",
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "\u0639\u0646\u0648\u0627\u0646\u060C \u0645\u0648\u0636\u0648\u0639 \u06CC\u0627 \u0646\u0648\u06CC\u0633\u0646\u062F\u0647\u2026",
    "aria-label": "\u062C\u0633\u062A\u062C\u0648"
  })), picked && picked.line ? /*#__PURE__*/React.createElement("p", {
    className: "archive-issue-line"
  }, picked.line) : null), posts.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      padding: '2rem 0 4rem'
    }
  }, sectionEmpty ? 'هنوز نوشتاری در این بخش منتشر نشده است.' : 'چیزی یافت نشد.') : null, /*#__PURE__*/React.createElement("div", {
    className: "archive-grid"
  }, posts.map(function (p, i) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i % 3 * 110
    }, /*#__PURE__*/React.createElement(ArticleCard, _extends({}, p, {
      tagVariant: p.tag === 'یادمان' ? 'gold' : undefined,
      href: "/article/".concat(p.slug)
    })));
  }))));
}
var GOSAN_BOARD = [{
  key: 'hafez',
  name: 'حافظ باباشاهی',
  role: 'گروه نویسندگان گاهنامهٔ گوسان',
  craft: 'پیانیست، مدرس موسیقی',
  img: 'assets/board-hafez.png',
  bio: 'موسیقیدان و دانش‌آموختهٔ دانشگاه موسیقی وین، بنیان‌گذار جشنوارهٔ آواز کلاسیک «وینر لیدر هربست»، مدیر هنری مسابقهٔ پیانوی ماکان، مدرس پیانو در کنسرواتوار ریشارد واگنر وین است. به عنوان تک‌نواز، پیانیست لید و نوازندهٔ موسیقی مجلسی در تالارهایی چون موزیک‌فراین و کنسرت‌هاوس وین، گاستایگ مونیخ، دویچه اوپر برلین، ویگمور هال لندن و تالار کنسرت شانگهای روی صحنه رفته است. جشنوارهٔ آواز او بیش از یک دهه است که به پرورش و عرضهٔ آواز کلاسیک می‌پردازد، و جشنوارهٔ پیانوی ماکان، با مسابقهٔ برخط برای کودکان و آموزش از راه دور، به پرورش پیانیست‌های جوان در ایران اختصاص دارد.'
}, {
  key: 'yalda',
  name: 'یلدا زمانی',
  role: 'مدیرمسئول اندیشکدهٔ فرهنگ و هنر گوسان / سردبیر گاهنامهٔ گوسان',
  craft: 'رهبر ارکستر، آهنگساز',
  img: 'assets/board-yalda.png',
  bio: 'رهبر ارکستر و آهنگساز؛ سردبیر گاهنامهٔ گوسان و مدیرمسئول اندیشکدهٔ فرهنگ و هنر گوسان. مدرس پیشین دانشگاه موسیقی و تئاتر هامبورگ، بنیان‌گذار و مدیر هنری ارکستر مجلسی معاصر البه و دستیار پیشین رهبر آنسامبل اینترکنتمپورن در فیلارمونی پاریس (۲۰۲۴–۲۰۲۶) است. در کنار کار هنری، پژوهشگر سیاست‌گذاری فرهنگی است.'
}, {
  key: 'ehsan',
  name: 'احسان شواربی',
  role: 'مدیر بخش پژوهش',
  craft: 'باستان‌شناس، سکه‌شناس',
  img: 'assets/board-ehsan.png',
  bio: 'باستان‌شناس و سکه‌شناس؛ متصدی سکه‌های سدهٔ میانه و شرق در گنجینهٔ سکهٔ موزهٔ تاریخ هنر وین است. پژوهش‌های او بر سکه و تاریخ پولی جهان ایرانی باستان، آسیای میانه و شمال هند متمرکز است؛ به‌ویژه بر سکه‌شناسی و شمایل‌نگاری ساسانی، جغرافیای تاریخی ایران پیش از اسلام، و زبان‌ها و کتیبه‌های ایران باستان. پیش‌تر سکه‌های ساسانی موزهٔ ملک تهران را فهرست کرده و سروده‌های بازماندهٔ منجیک ترمذی، شاعر سدهٔ چهارم هجری، را تصحیح کرده است. احسان شواربی مدیر بخش  پژوهش گاهنامهٔ گوسان و اندیشکدهٔ فرهنگ و هنر گوسان است. خوشنویسی نشان گوسان نیز کار اوست.'
}, {
  key: 'sohrab',
  name: 'سهراب لبیب',
  role: 'گروه نویسندگان گاهنامهٔ گوسان',
  craft: 'پیانیست، مدرس موسیقی',
  img: 'assets/board-sohrab.png',
  bio: 'سهراب لبیب، متولد ۱۳۶۶، فراگیری موسیقی را از کودکی آغاز کرد و پس از اتمام تحصیلات در هنرستان موسیقی تهران، عازم فرانسه و مدرسۀ عالی آلفرد کورتو در پاریس شد. پس از طی چند سال هنرآموزی نزد اساتید تراز اول در این مدرسۀ عالی، با اخذ بالاترین درجه در نوازندگی پیانو از آن فارغ‌التحصیل شد و فعالیت خود را در دو عرصۀ نوازندگی و آموزش موسیقی ادامه داد. همکاری و اجراهای متعدد با پیانیست شهیر فرانسوی، فیلیپ آنترومون، در کارنامۀ او ثبت است. سهراب دغدغه‌مند مسائل ایران است و فعالیت‌های اجتماعی و فرهنگی خود را در ارتباط با ایران از ۱۳۸۸ تا به امروز حفظ کرده است.'
}, {
  key: 'amin',
  name: 'امین نایب‌پور',
  role: 'گروه نویسندگان گاهنامهٔ گوسان',
  craft: 'محقق اندیشهٔ سیاسی',
  img: 'assets/board-amin.png',
  bio: 'تحصیلات خود را در رشتۀ ریاضیات در دانشگاه صنعتی آریامهر (شریف) آغاز کرد و سپس برای ادامۀ تحصیل در فلسفه راهی آمریکا و آلمان شد. کارشناسی فلسفه و الهیات مسیحی را در دانشگاه سنت لوئیس در ایالت میزوری به پایان رساند و در ادامه در دانشگاه New School for Social Research در نیویورک به تحصیل در مقطع کارشناسی ارشد پرداخت. او مدرک دکتری خود در فلسفه را در سال ۲۰۲۳ از دانشگاه فرایبورگ آلمان دریافت کرد و پس از آن یک دورۀ پژوهشی پست‌دکترا را در دانشگاه شیکاگو گذراند. او اکنون خارج از دانشگاه مشغول مشاورۀ ریسک‌های حقوقی و سیاسی برای شرکت‌های بخش خصوصی است.'
}];

/* The team is listed به ترتیب حروف الفبا — by family name (باباشاهی، زمانی،
   شواربی، لبیب، نایب‌پور), which is the order GOSAN_BOARD itself is kept in.
   Both mastheads read the names from here rather than repeating them, so
   adding or reordering a member updates every place the list appears. */
var boardNames = function boardNames() {
  return GOSAN_BOARD.map(function (m) {
    return m.name;
  });
};
/* the same names broken into rows of `per`, each row but the last ending in a
   Persian comma, so the masthead keeps its stacked shape */
function BoardNameLines(_ref2) {
  var _ref2$per = _ref2.per,
    per = _ref2$per === void 0 ? 2 : _ref2$per;
  var names = boardNames();
  var rows = [];
  for (var i = 0; i < names.length; i += per) rows.push(names.slice(i, i + per));
  return rows.map(function (row, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, row.join('، '), i < rows.length - 1 ? '،' : '', i < rows.length - 1 ? /*#__PURE__*/React.createElement("br", null) : null);
  });
}
function EditorialBoard() {
  var _React$useState7 = React.useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    open = _React$useState8[0],
    setOpen = _React$useState8[1];
  var boardRef = React.useRef(null);
  React.useEffect(function () {
    if (open === null) return;
    var onDoc = function onDoc(e) {
      if (boardRef.current && !boardRef.current.contains(e.target)) setOpen(null);
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    className: "board".concat(open !== null ? ' has-open' : ''),
    ref: boardRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "board-row"
  }, GOSAN_BOARD.map(function (b, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: b.key,
      type: "button",
      className: "board-card".concat(i === open ? ' is-open' : ''),
      onClick: function onClick() {
        return setOpen(open === i ? null : i);
      },
      "aria-expanded": i === open
    }, /*#__PURE__*/React.createElement("span", {
      className: "board-portrait-circle"
    }, /*#__PURE__*/React.createElement("img", {
      src: b.img,
      alt: b.name,
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("span", {
      className: "board-card-name"
    }, b.name)));
  })), open !== null ? /*#__PURE__*/React.createElement("div", {
    className: "board-bio",
    role: "region",
    "aria-live": "polite"
  }, GOSAN_BOARD[open].bio.split('\n').map(function (para, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: i ? {
        marginTop: '0.8em'
      } : null
    }, para);
  })) : null);
}
function Credentials() {
  var editorial = boardNames().join('، ');
  return /*#__PURE__*/React.createElement("div", {
    className: "cred-float"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)'
    }
  }, "MASTHEAD // ISSUE 01"), /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display cred-title"
  }, "\u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647\u0654 \u0634\u0645\u0627\u0631\u0647"), /*#__PURE__*/React.createElement("dl", {
    className: "cred-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0645\u062F\u06CC\u0631\u0645\u0633\u0626\u0648\u0644 \u0648 \u0633\u0631\u062F\u0628\u06CC\u0631"), /*#__PURE__*/React.createElement("dd", null, "\u06CC\u0644\u062F\u0627 \u0632\u0645\u0627\u0646\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0645\u062F\u06CC\u0631 \u0628\u062E\u0634 \u067E\u0698\u0648\u0647\u0634"), /*#__PURE__*/React.createElement("dd", null, "\u0627\u062D\u0633\u0627\u0646 \u0634\u0648\u0627\u0631\u0628\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u06AF\u0631\u0648\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("dd", null, editorial)), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0648\u06CC\u0631\u0627\u0633\u062A\u0627\u0631 / \u062E\u0648\u0634\u0646\u0648\u06CC\u0633\u06CC \u0646\u0634\u0627\u0646"), /*#__PURE__*/React.createElement("dd", null, "\u0627\u062D\u0633\u0627\u0646 \u0634\u0648\u0627\u0631\u0628\u06CC"))));
}

/* The magazine's statement. Moved here from the home page on 2026-08-31 so it
   opens the About page; Persian only, like the rest of this page. The «دربارهٔ گوسان ←»
   action the home version carried is dropped — on this page it pointed at itself. */
var ABOUT_MANIFESTO = {
  lead: 'گوسان ریشه در روزگاران کهن دارد.',
  body: ['در ایران باستان، گوسان به رامشگران و نغمه‌خوانانی گفته می‌شد که حافظ تاریخ و افسانه‌های کهن بودند. گوسان‌ها روایتگر بودند؛ روایتگر شادی و اندوه مردمان، روایتگر رزم و بزم شاهان، روایتگر پیروزی و شکست قهرمانان. و این همه را به دیبای وزن و قافیه می‌آراستند تا سینه به سینه بازگفته و بازخوانده شود. گوسان‌ها می‌سرودند و می‌نواختند تا تاریخ و افسانه را در جامهٔ زربفتِ چامه و موسیقی از گزند فراموشی در امان بدارند. از پسِ آنان خدای‌نامه‌نویسانِ ساسانی آمدند و پسان‌تر سرایندگانِ پارسی‌گوی، از توس و بخارا تا تبریز و گنجه، از شیراز و کرمان تا غزنه و دهلی.', 'امروز نیز ما در <i>گاهنامهٔ گوسان</i> گردآمده‌ایم تا روایتگر باشیم؛ روایتگرِ فرهنگ و هنر و سرگذشت ایران، در روزگاری که فرهنگ و هنر به کنج انزوا گرفتار آمده و ستیز با تاریخ و میراثِ کهنِ ایران فزونی گرفته است؛ چنانکه حکیم توس در شرح روزگارِ چیرگی ضحاکِ تازی گفته است:'],
  verse: {
    a: 'هنر خوار شد، جادویی ارجمند',
    b: 'نهان راستی، آشکارا گزند'
  },
  close: '<i>گاهنامهٔ گوسان</i> در پی آن است که غبار فراموشی را از صفحهٔ فرهنگ و هنر و میراث کهن ایران بزداید؛ گوشه‌های ناشناختهٔ تاریخ و فرهنگ و هنر ایران را به ابزارِ پژوهش و نقد بکاود و بشناسد و روایت کند.'
};
var ENGRAVING_CREDIT = 'جزئی از نگارهٔ بشقاب سیمین ساسانی؛ نوازنده‌ای سوار بر جانور بالدار افسانه‌ای. اصل اثر در موزهٔ ارمیتاژ، سن‌پترزبورگ.';

/* an About string the desk returned with bold or italic (tools/apply-desk-texts.py, EIC 9 Oct 2026) */
var aboutRich = function aboutRich(x) {
  return /<\/?(i|b|em|strong)\b/.test(String(x)) ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: x
    }
  }) : x;
};
function AboutManifesto() {
  var M = ABOUT_MANIFESTO;
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("section", {
    className: "nc-manifesto about-manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-manifesto-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-man-text"
  }, /*#__PURE__*/React.createElement("p", {
    className: "nc-manifesto-p nc-man-first"
  }, /*#__PURE__*/React.createElement("strong", null, aboutRich(M.lead)), " ", aboutRich(M.body[0])), M.body.slice(1).map(function (para, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i,
      className: "nc-manifesto-p"
    }, aboutRich(para));
  }), /*#__PURE__*/React.createElement("div", {
    className: "nc-manifesto-verse"
  }, /*#__PURE__*/React.createElement("span", null, aboutRich(M.verse.a)), /*#__PURE__*/React.createElement("span", null, aboutRich(M.verse.b))), /*#__PURE__*/React.createElement("p", {
    className: "nc-manifesto-p nc-manifesto-close"
  }, aboutRich(M.close))), /*#__PURE__*/React.createElement("figure", {
    className: "about-figure man-figure"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/shahnameh-engraving.jpg",
    alt: ENGRAVING_CREDIT
  }), /*#__PURE__*/React.createElement("span", {
    className: "cover-credit"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cover-credit-btn",
    "aria-label": 'اعتبار تصویر: ' + ENGRAVING_CREDIT
  }, "i"), /*#__PURE__*/React.createElement("span", {
    className: "cover-credit-tip",
    role: "tooltip"
  }, ENGRAVING_CREDIT))), /*#__PURE__*/React.createElement("div", {
    className: "about-cred man-cred"
  }, /*#__PURE__*/React.createElement("img", {
    className: "man-cred-mark",
    src: "assets/logo-gosan.png",
    alt: "\u06AF\u0648\u0633\u0627\u0646"
  }), /*#__PURE__*/React.createElement("dl", {
    className: "cred-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0635\u0627\u062D\u0628 \u0627\u0645\u062A\u06CC\u0627\u0632"), /*#__PURE__*/React.createElement("dd", null, "\u0627\u0646\u062F\u06CC\u0634\u06A9\u062F\u0647\u0654 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u06AF\u0648\u0633\u0627\u0646", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "G\u014Ds\u0101n Institute e. V."))), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0645\u062F\u06CC\u0631\u0645\u0633\u0626\u0648\u0644 \u0648 \u0633\u0631\u062F\u0628\u06CC\u0631"), /*#__PURE__*/React.createElement("dd", null, "\u06CC\u0644\u062F\u0627 \u0632\u0645\u0627\u0646\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0645\u062F\u06CC\u0631 \u0628\u062E\u0634 \u067E\u0698\u0648\u0647\u0634"), /*#__PURE__*/React.createElement("dd", null, "\u0627\u062D\u0633\u0627\u0646 \u0634\u0648\u0627\u0631\u0628\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u06AF\u0631\u0648\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement(BoardNameLines, {
    per: 2
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0648\u06CC\u0631\u0627\u0633\u062A\u0627\u0631 / \u062E\u0648\u0634\u0646\u0648\u06CC\u0633\u06CC \u0646\u0634\u0627\u0646"), /*#__PURE__*/React.createElement("dd", null, "\u0627\u062D\u0633\u0627\u0646 \u0634\u0648\u0627\u0631\u0628\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0647\u0648\u06CC\u062A \u0628\u0635\u0631\u06CC\u060C \u0637\u0631\u0627\u062D\u06CC \u0648 \u0635\u0641\u062D\u0647\u200C\u0622\u0631\u0627\u06CC\u06CC"), /*#__PURE__*/React.createElement("dd", null, "\u06CC\u0644\u062F\u0627 \u0632\u0645\u0627\u0646\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u062A\u0645\u0627\u0633"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "info@gosan.org"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "www.gosan.org"))), /*#__PURE__*/React.createElement("div", {
    className: "cred-row"
  }, /*#__PURE__*/React.createElement("dt", null, "\u0634\u0627\u067E\u0627 \xB7 ISSN"), /*#__PURE__*/React.createElement("dd", null, /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "ISSN 3056-2201"), " (\u0686\u0627\u067E\u06CC)", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "ISSN 3056-221X"), " (\u0628\u0631\u062E\u0637)"))), /*#__PURE__*/React.createElement("span", {
    className: "about-spine"
  }, "\u06AF\u0648\u0633\u0627\u0646 \xB7 \u0633\u0627\u0644 \u06F1 \xB7 \u0634\u0645\u0627\u0631\u0647\u0654 \u06F1 \xB7 \u0645\u0647\u0631\u06AF\u0627\u0646 \u06F2\u06F5\u06F8\u06F5 (\u06F1\u06F4\u06F0\u06F5)")))));
}
function AboutPage() {
  var editorial = boardNames().join('، ');
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u062F\u0631\u0628\u0627\u0631\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646",
    className: "about-main"
  }, /*#__PURE__*/React.createElement(AboutManifesto, null), /*#__PURE__*/React.createElement("section", {
    className: "about-spread"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "about-text"
  }, /*#__PURE__*/React.createElement(PullQuote, {
    style: {
      margin: '0 0 1.8rem'
    }
  }, "\u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u062A\u0627\u0628\u200C\u0622\u0648\u0631\u06CC\u060C \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0648 \u0628\u0627\u0632\u0634\u0646\u0627\u0633\u06CC \u0647\u0648\u06CC\u062A \u06CC\u06A9 \u0645\u0644\u062A \u062F\u0631 \u062A\u0646\u062F\u0628\u0627\u062F\u0647\u0627\u06CC \u062A\u0627\u0631\u06CC\u062E\u200C\u0627\u0646\u062F."), /*#__PURE__*/React.createElement("p", null, "\u0627\u0645\u0631\u0648\u0632 \u06A9\u0647 \u063A\u0628\u0627\u0631 \u0648\u062D\u0634\u062A\u06CC \u0628\u0632\u0631\u06AF \u0628\u0631 \u0634\u0626\u0648\u0646 \u0632\u0646\u062F\u06AF\u0627\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC\u0627\u0646 \u0633\u0627\u06CC\u0647 \u0627\u0641\u06A9\u0646\u062F\u0647 \u0648 \u0646\u0634\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0628\u062D\u0631\u0627\u0646 \u0627\u0632 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u062A\u0627 \u0627\u0642\u062A\u0635\u0627\u062F \u0648 \u0627\u0642\u0644\u06CC\u0645 \u0627\u06CC\u0646 \u06A9\u0647\u0646\u200C\u062F\u06CC\u0627\u0631 \u0631\u0627 \u0641\u0631\u0627 \u06AF\u0631\u0641\u062A\u0647 \u0627\u0633\u062A\u060C \u0645\u0627 \u0641\u0631\u0632\u0646\u062F\u0627\u0646 \u0627\u06CC\u0646 \u0628\u0648\u0645 \u0648 \u0628\u0631 \u0628\u06CC\u0634 \u0627\u0632 \u0647\u0631 \u0632\u0645\u0627\u0646 \u062F\u06CC\u06AF\u0631\u06CC \u0627\u0632 \u062E\u0648\u062F \u0645\u06CC\u200C\u067E\u0631\u0633\u06CC\u0645 \u062F\u0631 \u06A9\u062C\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0628 \u062A\u0627\u0631\u06CC\u06A9 \u0648 \u06AF\u0631\u062F\u0627\u0628 \u0647\u0627\u06CC\u0644 \u0627\u06CC\u0633\u062A\u0627\u062F\u0647\u200C\u0627\u06CC\u0645. \u0628\u06CC\u0634 \u0627\u0632 \u0647\u0631 \u0632\u0645\u0627\u0646 \u062F\u06CC\u06AF\u0631\u06CC \u0646\u0634\u0627\u0646 \u0641\u0631\u0647\u0646\u06AF \u0648 \u062A\u0627\u0631\u06CC\u062E \u062E\u0648\u06CC\u0634 \u0631\u0627 \u0645\u06CC\u200C\u062C\u0648\u06CC\u06CC\u0645 \u062A\u0627 \u0628\u0647 \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0622\u0646 \u0686\u0646\u06AF \u0632\u0646\u06CC\u0645. \u0645\u06CC\u0631\u0627\u062B \u0646\u06CC\u0627\u06A9\u0627\u0646\u060C \u0646\u0647 \u06CC\u0627\u062F\u06AF\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u062E\u0627\u0645\u0648\u0634\u060C \u06A9\u0647 \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC\u06CC \u062F\u0631 \u0647\u0645 \u067E\u06CC\u0648\u0633\u062A\u0647\u200C\u0627\u0646\u062F \u0628\u0631\u0627\u06CC \u0627\u06CC\u0633\u062A\u0627\u062F\u06AF\u06CC \u062F\u0631 \u062A\u0646\u062F\u0628\u0627\u062F\u0647\u0627\u06CC \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0648 \u0633\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC\u061B \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646."), /*#__PURE__*/React.createElement("p", null, "\u0645\u0627 \u062F\u0631 ", /*#__PURE__*/React.createElement("i", null, "\u06AF\u0648\u0633\u0627\u0646"), " \u0628\u0631 \u0627\u06CC\u0646 \u0628\u0627\u0648\u0631\u06CC\u0645 \u06A9\u0647 \u06AF\u0630\u0627\u0631 \u0627\u0632 \u0628\u062D\u0631\u0627\u0646 \u0639\u0645\u06CC\u0642 \u06A9\u0646\u0648\u0646\u06CC\u060C \u0646\u0647 \u0628\u0627 \u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0646 \u062E\u0648\u062F \u062F\u0631 \u062C\u0627\u06CC\u06AF\u0627\u0647 \u0642\u0631\u0628\u0627\u0646\u06CC\u060C \u06A9\u0647 \u062A\u0646\u0647\u0627 \u0628\u0627 \u0628\u0627\u0632\u0634\u0646\u0627\u0633\u06CC \u0646\u0642\u0634 \u062E\u0648\u06CC\u0634 \u0634\u062F\u0646\u06CC \u0627\u0633\u062A. \u0628\u06CC\u0634 \u0627\u0632 \u0686\u0647\u0627\u0631 \u062F\u0647\u0647 \u0633\u0644\u0637\u0647\u0654 \u0646\u0638\u0627\u0645 \u0627\u06CC\u062F\u0626\u0648\u0644\u0648\u0698\u06CC\u06A9 \u0648 \u0645\u062A\u062D\u062C\u0631 \u0628\u0631 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0627\u06CC\u0646 \u0633\u0631\u0632\u0645\u06CC\u0646 \u0628\u06CC\u200C\u062A\u0631\u062F\u06CC\u062F \u0632\u062E\u0645\u06CC \u0639\u0645\u06CC\u0642 \u0628\u0631 \u062C\u0627\u0646 \u062C\u0645\u0639\u06CC \u0645\u0627 \u0646\u0647\u0627\u062F\u0647 \u0648 \u067E\u0631\u0633\u0634\u06CC \u0646\u0627\u06AF\u0632\u06CC\u0631 \u0648 \u0633\u0647\u0645\u06AF\u06CC\u0646 \u0631\u0627 \u062F\u0631 \u0628\u0631\u0627\u0628\u0631\u0645\u0627\u0646 \u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0647 \u0627\u0633\u062A: \u0633\u0647\u0645 \u0648 \u0646\u0642\u0634 \u0645\u0627 \u062F\u0631 \u06AF\u0630\u0627\u0631 \u0627\u0632 \u0627\u06CC\u0646 \u0648\u06CC\u0631\u0627\u0646\u06CC \u0686\u06CC\u0633\u062A\u061F"), /*#__PURE__*/React.createElement("p", null, "\u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631\u060C \u0646\u0647 \u06A9\u0627\u0644\u0627\u0647\u0627\u06CC \u062A\u0641\u0646\u0646\u06CC\u060C \u06A9\u0647 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u062A\u0627\u0628\u200C\u0622\u0648\u0631\u06CC\u060C \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0648 \u0628\u0627\u0632\u0634\u0646\u0627\u0633\u06CC \u0647\u0648\u06CC\u062A \u06CC\u06A9 \u0645\u0644\u062A \u062F\u0631 \u062A\u0646\u062F\u0628\u0627\u062F\u0647\u0627\u06CC \u062A\u0627\u0631\u06CC\u062E\u200C\u0627\u0646\u062F. \u062F\u0631 \u0633\u0631\u0632\u0645\u06CC\u0646\u06CC \u063A\u0627\u0631\u062A\u200C\u0634\u062F\u0647 \u0648 \u062C\u0627\u0645\u0639\u0647\u200C\u0627\u06CC \u0628\u062D\u0631\u0627\u0646\u200C\u0632\u062F\u0647 \u06A9\u0647 \u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0622\u0646 \u0631\u0648 \u0628\u0647 \u0641\u0631\u0633\u0627\u06CC\u0634\u200C\u0627\u0646\u062F\u060C \u0622\u06CC\u0627 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0631\u0627 \u0628\u0647 \u0646\u06CC\u0631\u0648\u06CC\u06CC \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0628\u062F\u0644 \u06A9\u0631\u062F\u061F \u0622\u06CC\u0627 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0648 \u0646\u0628\u0627\u06CC\u062F \u0647\u0646\u0631 \u0648 \u0641\u0631\u0647\u0646\u06AF \u0631\u0627 \u0627\u0632 \u062D\u0627\u0634\u06CC\u0647\u0654 \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0628\u0647 \u0645\u062A\u0646 \u0627\u062D\u06CC\u0627\u06CC \u06CC\u06A9 \u0645\u0644\u062A \u0622\u0648\u0631\u062F \u0648 \u0628\u0627 \u0622\u0646 \u067E\u0644\u06CC \u0628\u0647 \u0633\u0648\u06CC \u0641\u0631\u062F\u0627\u06CC\u06CC \u0631\u0648\u0634\u0646\u200C\u062A\u0631 \u0633\u0627\u062E\u062A\u061F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, "\u0645\u0627 \u0641\u0631\u0632\u0646\u062F\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 ", /*#__PURE__*/React.createElement("i", null, "\u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"), " \u0645\u06CC\u200C\u06A9\u0648\u0634\u06CC\u0645 \u062F\u0631 \u0645\u0633\u06CC\u0631 \u0627\u06CC\u0646 \u0647\u062F\u0641 \u06AF\u0627\u0645 \u0628\u0631\u062F\u0627\u0634\u062A\u0647\u060C \u067E\u0644\u06CC \u0628\u0627\u0634\u06CC\u0645 \u0645\u06CC\u0627\u0646 \u0645\u06CC\u0631\u0627\u062B \u06A9\u0647\u0646 \u067E\u062F\u0631\u0627\u0646 \u0648 \u0686\u0634\u0645\u200C\u0627\u0646\u062F\u0627\u0632 \u0641\u0631\u062F\u0627\u060C \u0648 \u0646\u06CC\u0632 \u0647\u0645\u0631\u0627\u0647\u06CC \u0628\u0631\u0627\u06CC \u0647\u0645\u0647\u0654 \u0622\u0646\u0627\u0646 \u06A9\u0647\u060C \u062F\u0631 \u06AF\u0631\u06AF \u0648 \u0645\u06CC\u0634 \u0634\u0628\u060C \u0646\u0648\u0631 \u0645\u0647\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062F\u0631 \u062F\u0644 \u062F\u0627\u0631\u0646\u062F."), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      marginTop: '2.8rem',
      marginBottom: '2.4rem'
    }
  }), /*#__PURE__*/React.createElement("section", {
    className: "board-section board-inline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: '100%',
      padding: 0,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)',
      display: 'block',
      textAlign: 'right',
      marginBottom: '0.7rem'
    }
  }, "TEAM // ISSUE 01 \u2014 AUTUMN 2585 (1405)"), /*#__PURE__*/React.createElement(SectionHead, {
    title: "\u06AF\u0631\u0648\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"
  }), /*#__PURE__*/React.createElement("p", {
    className: "board-hint"
  }, "\u062F\u0633\u062A\u200C\u0627\u0646\u062F\u0631\u06A9\u0627\u0631\u0627\u0646 \u0627\u06CC\u0646 \u0634\u0645\u0627\u0631\u0647\u061B \u0633\u0627\u0644 \u06F1 \xB7 \u0634\u0645\u0627\u0631\u0647\u0654 \u06F1 \xB7 \u0645\u0647\u0631\u06AF\u0627\u0646 \u06F2\u06F5\u06F8\u06F5 (\u06F1\u06F4\u06F0\u06F5)")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(EditorialBoard, null))))))), /*#__PURE__*/React.createElement("section", {
    className: "about-contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)',
      display: 'block',
      textAlign: 'right',
      marginBottom: '0.7rem'
    }
  }, "CONTACT // G\u014CS\u0100N"), /*#__PURE__*/React.createElement(SectionHead, {
    title: "\u062A\u0645\u0627\u0633"
  }), /*#__PURE__*/React.createElement("p", {
    className: "board-hint"
  }, "\u0628\u0631\u0627\u06CC \u0647\u0645\u06A9\u0627\u0631\u06CC \u0628\u0627 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u060C \u0628\u0627 \u0645\u0627 \u062F\u0631 \u06AF\u0641\u062A\u200C\u0648\u06AF\u0648 \u0628\u0627\u0634\u06CC\u062F.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 110
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2.4rem'
    }
  }, /*#__PURE__*/React.createElement(ContactBody, {
    bare: true
  })))));
}
function ContactBody(_ref3) {
  var _ref3$bare = _ref3.bare,
    bare = _ref3$bare === void 0 ? false : _ref3$bare;
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    sent = _React$useState0[0],
    setSent = _React$useState0[1]; // false · 'ok' · 'mail' (the reader's mail app took over)
  var _React$useState1 = React.useState(''),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    err = _React$useState10[0],
    setErr = _React$useState10[1];
  var _React$useState11 = React.useState(false),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    busy = _React$useState12[0],
    setBusy = _React$useState12[1];
  return /*#__PURE__*/React.createElement("div", {
    className: bare ? 'contact-grid' : 'wrap contact-grid',
    style: bare ? {
      paddingBottom: 0
    } : {
      paddingBottom: '5rem',
      maxWidth: '1100px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "contact-card"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '2.5rem 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)'
    }
  }, "MESSAGE SENT"), /*#__PURE__*/React.createElement("h3", {
    className: "gsn-display",
    style: {
      fontSize: '1.6rem',
      margin: '0.8rem 0 0.5rem'
    }
  }, sent === 'mail' ? 'ایمیل شما آماده است' : 'پیام شما رسید'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.92rem',
      margin: 0
    }
  }, sent === 'mail' ? 'فرستادن از وب‌سایت ممکن نشد؛ پیام شما در برنامهٔ ایمیلتان باز شده است. لطفاً آن را از همان‌جا بفرستید.' : 'سپاس از همراهی شما؛ به‌زودی پاسخ می‌دهیم.')) : /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var v = function v(id) {
        return (document.getElementById(id) || {}).value || '';
      };
      var fields = {
        name: v('c-name'),
        email: v('c-mail'),
        message: v('c-msg'),
        website: v('c-hp'),
        /* honeypot */
        subject: 'تماس از وب‌سایت گوسان — ' + (v('c-name') || 'بدون نام'),
        page: typeof location !== 'undefined' ? location.href : ''
      };
      var problem = gosanNoteProblem(fields);
      if (problem) {
        setErr(problem);
        return;
      }
      if (busy) return;
      setErr('');
      setBusy(true);
      gosanFormSubmit(fields).then(function () {
        return setSent('ok');
      })["catch"](function () {
        gosanMailtoFallback(fields);
        setSent('mail');
      })["finally"](function () {
        return setBusy(false);
      });
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    id: "c-name",
    label: "\u0646\u0627\u0645",
    placeholder: "\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC"
  }), /*#__PURE__*/React.createElement(FormField, {
    id: "c-mail",
    label: "\u0631\u0627\u06CC\u0627\u0646\u0627\u0645\u0647",
    type: "email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(FormField, {
    id: "c-msg",
    label: "\u067E\u06CC\u0627\u0645",
    multiline: true,
    placeholder: "\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F\u2026"
  }), /*#__PURE__*/React.createElement("input", {
    id: "c-hp",
    className: "hp-field",
    type: "text",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true"
  }), err ? /*#__PURE__*/React.createElement("p", {
    className: "form-err",
    role: "alert"
  }, err) : null, /*#__PURE__*/React.createElement(Button, {
    variant: "gold"
  }, busy ? 'در حال فرستادن…' : 'ارسال پیام')))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 130
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(GoldDots, {
    width: 120,
    height: 140,
    style: {
      opacity: 0.7,
      marginBottom: '1.6rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.95rem',
      lineHeight: 2.2,
      color: 'var(--text-muted)',
      textAlign: 'justify',
      margin: '0 0 1.8rem'
    }
  }, "\u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0628\u0633\u062A\u0631\u06CC \u0627\u0633\u062A \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u062A\u0627\u0628 \u0627\u0646\u062F\u06CC\u0634\u0647\u200C\u0647\u0627 \u0648 \u067E\u0698\u0648\u0647\u0634\u200C\u0647\u0627\u06CC \u0646\u0648 \u062F\u0631 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0627\u06CC\u0631\u0627\u0646. \u0627\u0632 \u062A\u0645\u0627\u0645\u06CC \u067E\u0698\u0648\u0647\u0634\u06AF\u0631\u0627\u0646\u060C \u0645\u0646\u062A\u0642\u062F\u0627\u0646 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u062F\u0639\u0648\u062A \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645 \u062A\u0627 \u0622\u062B\u0627\u0631 \u062E\u0648\u062F \u0631\u0627\u060C \u0627\u0639\u0645 \u0627\u0632 \u062C\u0633\u062A\u0627\u0631\u060C \u0646\u0642\u062F \u0648 \u0628\u0631\u0631\u0633\u06CC\u060C \u06AF\u0641\u062A\u06AF\u0648\u060C \u062A\u062D\u0644\u06CC\u0644\u200C\u0647\u0627\u06CC \u0641\u0631\u0647\u0646\u06AF\u06CC \u0648 \u06CC\u0627\u062F\u0645\u0627\u0646\u060C \u0628\u0631\u0627\u06CC \u0645\u0627 \u0628\u0641\u0631\u0633\u062A\u0646\u062F."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: {
      direction: 'ltr',
      display: 'inline-block',
      borderBottom: '1px solid var(--gold)',
      fontWeight: 500
    }
  }, "info@gosan.org"))));
}
function ContactPage() {
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u062A\u0645\u0627\u0633"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "CONTACT // G\u014CS\u0100N",
    title: "\u062A\u0645\u0627\u0633",
    lede: "\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u060C \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u0647\u0627 \u0648 \u0646\u0648\u0634\u062A\u0627\u0631\u0647\u0627\u06CC \u0634\u0645\u0627"
  }), /*#__PURE__*/React.createElement(ContactBody, null));
}
function ImpressumPage() {
  var label = {
    fontSize: '0.72rem',
    letterSpacing: '0.09em',
    color: 'var(--gold-deep)',
    textTransform: 'uppercase',
    fontWeight: 700,
    margin: '1.9rem 0 0.55rem'
  };
  var line = {
    fontSize: '0.98rem',
    lineHeight: 2,
    color: 'var(--ink)',
    margin: '0 0 0.3rem',
    direction: 'ltr',
    textAlign: 'right'
  };
  var mail = {
    direction: 'ltr',
    display: 'inline-block',
    borderBottom: '1px solid var(--gold)',
    fontWeight: 500
  };
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Impressum"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "IMPRESSUM // G\u014CS\u0100N",
    title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0627\u0634\u0631 \u2014 Impressum",
    lede: "\u0634\u0646\u0627\u0633\u0646\u0627\u0645\u0647\u0654 \u062D\u0642\u0648\u0642\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0628\u0631 \u067E\u0627\u06CC\u0647\u0654 \xA7 \u06F5 DDG \u0648 \xA7 \u06F1\u06F8 MStV"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: '760px',
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      lineHeight: 2,
      color: 'var(--text-muted)',
      margin: '0 0 1.4rem',
      textAlign: 'justify'
    }
  }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0642\u0627\u0646\u0648\u0646\u06CC \u0632\u06CC\u0631 \u0628\u0631 \u067E\u0627\u06CC\u0647\u0654 \xA7 \u06F5 \u0642\u0627\u0646\u0648\u0646 \u062E\u062F\u0645\u0627\u062A \u062F\u06CC\u062C\u06CC\u062A\u0627\u0644 \u0622\u0644\u0645\u0627\u0646 (DDG) \u0627\u0631\u0627\u0626\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0646\u0627\u0634\u0631 \xB7 Diensteanbieter"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "G\u014Ds\u0101n Institute e. V."), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Friedrichstr. 155"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "10117 Berlin"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Germany"), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0646\u0645\u0627\u06CC\u0646\u062F\u0647 \xB7 Vertreten durch"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Yalda Zamani"), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062A\u0645\u0627\u0633 \xB7 Kontakt"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "E-Mail: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: mail
  }, "info@gosan.org")), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062B\u0628\u062A \u0627\u0646\u062C\u0645\u0646 \xB7 Registereintrag"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Eingetragen im Vereinsregister des Amtsgerichts Charlottenburg."), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Registernummer: VR 42957 B"), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0634\u0627\u067E\u0627 \xB7 ISSN"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "ISSN 3056-221X (Online-Ausgabe)"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "ISSN 3056-2201 (Druckausgabe)"), /*#__PURE__*/React.createElement("p", {
    style: _objectSpread(_objectSpread({}, line), {}, {
      direction: 'rtl',
      fontSize: '0.8rem',
      color: 'var(--text-muted)'
    })
  }, "\u0632\u06CC\u0631 \u0639\u0646\u0648\u0627\u0646 ", /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      display: 'inline-block'
    }
  }, "G\u0101hn\u0101me-ye G\u014Ds\u0101n"), "\u060C \u0627\u0632 \u0633\u0648\u06CC \u0645\u0631\u06A9\u0632 \u0645\u0644\u06CC \u0634\u0627\u067E\u0627\u06CC \u0622\u0644\u0645\u0627\u0646 (\u06A9\u062A\u0627\u0628\u062E\u0627\u0646\u0647\u0654 \u0645\u0644\u06CC \u0622\u0644\u0645\u0627\u0646)."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC \xB7 Umsatzsteuer-Identifikationsnummer"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Nicht vorhanden; wird nachgetragen, sofern erteilt."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0645\u0633\u0626\u0648\u0644 \u0645\u062D\u062A\u0648\u0627 \xB7 Verantwortlich f\xFCr den Inhalt nach \xA7 18 Abs. 2 MStV"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Yalda Zamani"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Friedrichstr. 155, 10117 Berlin, Germany"), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0642\u0648\u0642 \u0648 \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0646\u0648\u0634\u062A\u0627\u0631\u0647\u0627 \xB7 Rechte und Verantwortung"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.86rem',
      lineHeight: 2,
      color: 'var(--ink)',
      margin: '0 0 0.7rem',
      textAlign: 'justify'
    }
  }, "\u062D\u0642\u0648\u0642 \u0647\u0631 \u0646\u0648\u0634\u062A\u0627\u0631 \u0627\u0632 \u0622\u0646\u0650 \u0646\u0648\u06CC\u0633\u0646\u062F\u0647\u0654 \u0622\u0646 \u0627\u0633\u062A. \u0645\u0633\u0626\u0648\u0644\u06CC\u062A \u0645\u062D\u062A\u0648\u0627\u06CC \u0647\u0631 \u0646\u0648\u0634\u062A\u0627\u0631 \u0628\u0631 \u0639\u0647\u062F\u0647\u0654 \u0646\u0648\u06CC\u0633\u0646\u062F\u0647\u0654 \u0622\u0646 \u0627\u0633\u062A \u0648 \u062F\u06CC\u062F\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0637\u0631\u062D\u200C\u0634\u062F\u0647 \u062F\u0631 \u0622\u0646 \u0644\u0632\u0648\u0645\u0627\u064B \u0628\u0627\u0632\u062A\u0627\u0628 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0646\u06CC\u0633\u062A."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0627\u0639\u062A\u0628\u0627\u0631 \u062A\u0635\u0648\u06CC\u0631\u0647\u0627 \xB7 Bildnachweise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.78rem',
      lineHeight: 1.95,
      color: 'var(--text-muted)',
      margin: '0 0 0.7rem',
      textAlign: 'justify'
    }
  }, "\u062A\u0635\u0648\u06CC\u0631\u0647\u0627\u06CC \u0631\u0648\u06CC \u062C\u0644\u062F \u0646\u0648\u0634\u062A\u0627\u0631\u0647\u0627 \u0627\u0632 \u0645\u062C\u0645\u0648\u0639\u0647\u200C\u0647\u0627\u06CC \u062F\u0633\u062A\u0631\u0633\u06CC \u0622\u0632\u0627\u062F \u0645\u0648\u0632\u0647\u200C\u0647\u0627 \u0648 \u0622\u0631\u0634\u06CC\u0648\u0647\u0627\u06CC \u0639\u0645\u0648\u0645\u06CC \u0628\u0631\u06AF\u0632\u06CC\u062F\u0647 \u0634\u062F\u0647\u200C\u0627\u0646\u062F \u0648 \u0628\u0627 \u067E\u0631\u062F\u0627\u0632\u0634 \u06CC\u06A9\u0633\u0627\u0646 \u0622\u0631\u0634\u06CC\u0648\u06CC \u06AF\u0627\u0647\u0646\u0627\u0645\u0647 \u0628\u0627\u0632\u0646\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '0 0 0.5rem',
      padding: 0
    }
  }, GOSAN_POSTS.filter(function (p) {
    return (window.GOSAN_COVER_ALTS || {})[p.slug];
  }).map(function (p) {
    return /*#__PURE__*/React.createElement("li", {
      key: p.slug,
      style: {
        fontSize: '0.72rem',
        lineHeight: 1.9,
        color: 'var(--text-muted)',
        padding: '0.28rem 0',
        borderBottom: '1px dashed var(--line, #CFCCC3)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "/article/".concat(p.slug),
      style: {
        color: 'var(--ink)',
        textDecoration: 'none'
      }
    }, p.title), /*#__PURE__*/React.createElement("span", {
      style: {
        margin: '0 0.35rem'
      }
    }, "\u2014"), /*#__PURE__*/React.createElement("span", null, gosanSoftCredit(window.GOSAN_COVER_ALTS[p.slug])));
  })), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      margin: '2.6rem 0 1.4rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.82rem',
      lineHeight: 1.95,
      color: 'var(--text-muted)',
      textAlign: 'justify'
    }
  }, "\u062D\u0644 \u0627\u062E\u062A\u0644\u0627\u0641 \u0645\u0635\u0631\u0641\u200C\u06A9\u0646\u0646\u062F\u0647 \xB7 Verbraucherstreitbeilegung: G\u014Ds\u0101n Institute e. V. \u0645\u0627\u06CC\u0644 \u06CC\u0627 \u0645\u0648\u0638\u0641 \u0628\u0647 \u0634\u0631\u06A9\u062A \u062F\u0631 \u0631\u0648\u0634 \u062D\u0644 \u0627\u062E\u062A\u0644\u0627\u0641 \u062F\u0631 \u0628\u0631\u0627\u0628\u0631 \u0647\u06CC\u0626\u062A \u062F\u0627\u0648\u0631\u06CC \u0645\u0635\u0631\u0641\u200C\u06A9\u0646\u0646\u062F\u0647 \u0646\u06CC\u0633\u062A."))));
}
function DatenschutzPage() {
  var label = {
    fontSize: '0.72rem',
    letterSpacing: '0.09em',
    color: 'var(--gold-deep)',
    textTransform: 'uppercase',
    fontWeight: 700,
    margin: '1.9rem 0 0.55rem'
  };
  var line = {
    fontSize: '0.98rem',
    lineHeight: 2,
    color: 'var(--ink)',
    margin: '0 0 0.3rem',
    direction: 'ltr',
    textAlign: 'right'
  };
  var para = {
    fontSize: '0.92rem',
    lineHeight: 2.05,
    color: 'var(--ink)',
    margin: '0 0 1rem',
    textAlign: 'justify'
  };
  var mail = {
    direction: 'ltr',
    display: 'inline-block',
    borderBottom: '1px solid var(--gold)',
    fontWeight: 500
  };
  var ext = {
    direction: 'ltr',
    display: 'inline-block',
    borderBottom: '1px solid var(--gold)',
    fontSize: '0.85rem',
    wordBreak: 'break-all'
  };
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Datenschutz"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "DATENSCHUTZ // G\u014CS\u0100N",
    title: "\u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u2014 Datenschutzerkl\xE4rung",
    lede: "\u067E\u0631\u062F\u0627\u0632\u0634 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u0627\u06CC\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u060C \u0628\u0631 \u067E\u0627\u06CC\u0647\u0654 DSGVO \u0648 TDDDG"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: '760px',
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0627\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0634\u0631\u062D \u0645\u06CC\u200C\u062F\u0647\u062F \u06A9\u0647 \u0647\u0646\u06AF\u0627\u0645 \u0628\u0627\u0632\u062F\u06CC\u062F \u0627\u0632 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0686\u0647 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC\u06CC \u067E\u0631\u062F\u0627\u0632\u0634 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0628\u0647 \u0686\u0647 \u0645\u0646\u0638\u0648\u0631 \u0648 \u0628\u0631 \u06A9\u062F\u0627\u0645 \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC \u2014 \u0648 \u0634\u0645\u0627 \u062F\u0631 \u0628\u0631\u0627\u0628\u0631 \u0622\u0646 \u0686\u0647 \u062D\u0642\u0648\u0642\u06CC \u062F\u0627\u0631\u06CC\u062F. \u0645\u0628\u0646\u0627\u06CC \u0627\u06CC\u0646 \u0627\u0639\u0644\u0627\u0645\u06CC\u0647\u060C \u0645\u0642\u0631\u0631\u0627\u062A \u0639\u0645\u0648\u0645\u06CC \u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0627\u062A\u062D\u0627\u062F\u06CC\u0647\u0654 \u0627\u0631\u0648\u067E\u0627 (DSGVO) \u0648 \u0642\u0627\u0646\u0648\u0646 \u0622\u0644\u0645\u0627\u0646\u06CC TDDDG \u0627\u0633\u062A."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0627\u06CC\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u06CC\u06A9 \u0633\u0627\u06CC\u062A \u0627\u06CC\u0633\u062A\u0627\u0633\u062A: \u0646\u0647 \u06A9\u0648\u06A9\u06CC \u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u062F\u060C \u0646\u0647 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0631\u0627 \u0631\u062F\u06CC\u0627\u0628\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F \u0648 \u0646\u0647 \u0645\u062D\u062A\u0648\u0627\u06CC\u06CC \u0627\u0632 \u0633\u0631\u0648\u06CC\u0633\u200C\u0647\u0627\u06CC \u062B\u0627\u0644\u062B \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F. \u0642\u0644\u0645\u200C\u0647\u0627 \u0648 \u067E\u0631\u0648\u0646\u062F\u0647\u200C\u0647\u0627\u06CC \u0631\u0633\u0627\u0646\u0647\u200C\u0627\u06CC \u0647\u0645\u06AF\u06CC \u0627\u0632 \u062E\u0648\u062F \u0633\u0627\u06CC\u062A \u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0634\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F\u0647\u0627 \u0631\u0627 \u0628\u06CC\u200C\u06A9\u0648\u06A9\u06CC \u0648 \u0628\u06CC\u200C\u0630\u062E\u06CC\u0631\u0647\u0654 \u0646\u0634\u0627\u0646\u06CC IP \u0645\u06CC\u200C\u0634\u0645\u0627\u0631\u06CC\u0645\u061B \u0634\u0631\u062D \u0622\u0646 \u062F\u0631 \u0628\u062E\u0634 \xAB\u0622\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F\xBB \u0622\u0645\u062F\u0647 \u0627\u0633\u062A."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0645\u0633\u0626\u0648\u0644 \u067E\u0631\u062F\u0627\u0632\u0634 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \xB7 Verantwortlicher"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "G\u014Ds\u0101n Institute e. V."), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Friedrichstr. 155"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "10117 Berlin, Germany"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Vertreten durch: Yalda Zamani"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "E-Mail: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: mail
  }, "info@gosan.org")), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \xB7 Hosting (GitHub Pages)"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0627\u06CC\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0631\u0648\u06CC GitHub Pages \u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F\u061B \u0633\u0631\u0648\u06CC\u0633\u06CC \u0627\u0632 \u0634\u0631\u06A9\u062A GitHub, Inc. (\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647\u0654 \u0622\u0645\u0631\u06CC\u06A9\u0627). \u0628\u0627 \u0647\u0631 \u0628\u0627\u0631 \u0628\u0627\u0632 \u0634\u062F\u0646 \u0635\u0641\u062D\u0647\u060C \u0633\u0631\u0648\u0631\u0647\u0627\u06CC GitHub \u0628\u0647\u200C\u0637\u0648\u0631 \u062E\u0648\u062F\u06A9\u0627\u0631 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0641\u0646\u06CC \u0627\u062A\u0635\u0627\u0644 \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F: \u0646\u0634\u0627\u0646\u06CC IP\u060C \u0634\u0646\u0627\u0633\u0647\u0654 \u0645\u0631\u0648\u0631\u06AF\u0631 (User-Agent) \u0648 \u0632\u0645\u0627\u0646 \u062F\u0631\u062E\u0648\u0627\u0633\u062A. \u0627\u06CC\u0646 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0633\u0627\u06CC\u062A \u0648 \u062A\u0623\u0645\u06CC\u0646 \u0627\u0645\u0646\u06CC\u062A \u0641\u0646\u06CC \u0622\u0646 \u0644\u0627\u0632\u0645 \u0627\u0633\u062A. \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC: Art. 6 Abs. 1 lit. f DSGVO \u2014 \u0645\u0646\u0627\u0641\u0639 \u0645\u0634\u0631\u0648\u0639 \u0645\u0627 \u062F\u0631 \u0627\u0631\u0627\u0626\u0647\u0654 \u067E\u0627\u06CC\u062F\u0627\u0631 \u0648 \u0627\u0645\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "GitHub, Inc. \u0632\u06CC\u0631 \xAB\u0686\u0627\u0631\u0686\u0648\u0628 \u062D\u0631\u06CC\u0645 \u062F\u0627\u062F\u0647\u0654 \u0627\u062A\u062D\u0627\u062F\u06CC\u0647\u0654 \u0627\u0631\u0648\u067E\u0627 \u0648 \u0622\u0645\u0631\u06CC\u06A9\u0627\xBB (EU-US Data Privacy Framework) \u06AF\u0648\u0627\u0647\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A\u061B \u0627\u0646\u062A\u0642\u0627\u0644 \u062F\u0627\u062F\u0647 \u0628\u0647 \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0627\u0632 \u0627\u06CC\u0646 \u0631\u0648 \u0628\u0631 \u062A\u0635\u0645\u06CC\u0645 \u06A9\u0641\u0627\u06CC\u062A \u06A9\u0645\u06CC\u0633\u06CC\u0648\u0646 \u0627\u0631\u0648\u067E\u0627 (Art. 45 DSGVO) \u0627\u0633\u062A\u0648\u0627\u0631 \u0627\u0633\u062A. \u062C\u0632\u0626\u06CC\u0627\u062A \u067E\u0631\u062F\u0627\u0632\u0634 \u0646\u0632\u062F GitHub \u062F\u0631 \u0627\u0639\u0644\u0627\u0645\u06CC\u0647\u0654 \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC \u062E\u0648\u062F GitHub \u0622\u0645\u062F\u0647 \u0627\u0633\u062A:", ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
    target: "_blank",
    rel: "noopener noreferrer",
    style: ext
  }, "docs.github.com/\u2026/github-general-privacy-statement")), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0622\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F \xB7 Reichweitenmessung (ohne Cookies)"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0628\u0631\u0627\u06CC \u0622\u0646\u06A9\u0647 \u0628\u062F\u0627\u0646\u06CC\u0645 \u06A9\u062F\u0627\u0645 \u0646\u0648\u0634\u062A\u0647\u200C\u0647\u0627 \u062E\u0648\u0627\u0646\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647 \u0686\u06AF\u0648\u0646\u0647 \u0648\u0631\u0642 \u0632\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0647\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F \u0631\u0627 \u0628\u0627 \u06CC\u06A9 \u067E\u06CC\u0627\u0645 \u06A9\u0648\u062A\u0627\u0647 \u0645\u06CC\u200C\u0634\u0645\u0627\u0631\u06CC\u0645. \u0627\u06CC\u0646 \u067E\u06CC\u0627\u0645 \u0646\u0634\u0627\u0646\u06CC \u0635\u0641\u062D\u0647\u060C \u0648\u0628\u200C\u0633\u0627\u06CC\u062A\u06CC \u06A9\u0647 \u0627\u0632 \u0622\u0646 \u0622\u0645\u062F\u0647\u200C\u0627\u06CC\u062F\u060C \u0632\u0628\u0627\u0646 \u0645\u0631\u0648\u0631\u06AF\u0631\u060C \u0645\u062F\u062A \u0645\u0627\u0646\u062F\u0646 \u062F\u0631 \u0635\u0641\u062D\u0647\u060C \u0627\u0646\u062F\u0627\u0632\u0647\u0654 \u067E\u06CC\u0645\u0627\u06CC\u0634 \u0622\u0646\u060C \u0648 \u06A9\u0627\u0631\u0647\u0627\u06CC\u06CC \u0686\u0648\u0646 \u0648\u0631\u0642 \u0632\u062F\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u060C \u062F\u0631\u06CC\u0627\u0641\u062A PDF\u060C \u0647\u0645\u200C\u0631\u0633\u0627\u0646\u06CC \u06CC\u0627 \u0639\u0636\u0648\u06CC\u062A \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u062F\u0631 \u0628\u0631 \u062F\u0627\u0631\u062F. \u06A9\u0634\u0648\u0631 \u0648 \u0634\u0647\u0631 \u0631\u0627 \u0633\u0631\u0648\u0631 Cloudflare \u0627\u0632 \u0631\u0648\u06CC \u0627\u062A\u0635\u0627\u0644 \u062A\u0634\u062E\u06CC\u0635 \u0645\u06CC\u200C\u062F\u0647\u062F."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0646\u0634\u0627\u0646\u06CC IP \u0634\u0645\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0628\u0631\u0627\u06CC \u0634\u0645\u0631\u062F\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F\u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u06CC\u06A9 \u0631\u0648\u0632\u060C \u0627\u0632 \u0646\u0634\u0627\u0646\u06CC IP \u0648 \u0634\u0646\u0627\u0633\u0647\u0654 \u0645\u0631\u0648\u0631\u06AF\u0631\u060C \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u06A9\u0644\u06CC\u062F\u06CC \u0631\u0648\u0632\u0627\u0646\u0647\u060C \u06CC\u06A9 \u06A9\u062F \u062F\u0631\u0647\u0645\u200C\u0633\u0627\u0632\u06CC\u200C\u0634\u062F\u0647 \u0633\u0627\u062E\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u061B \u0627\u06CC\u0646 \u06A9\u0644\u06CC\u062F \u0647\u0631 \u0634\u0628 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u067E\u0633 \u0627\u0632 \u0622\u0646\u060C \u06A9\u062F \u0628\u0647 \u0647\u06CC\u0686 \u0641\u0631\u062F\u06CC \u0628\u0627\u0632\u0646\u0645\u06CC\u200C\u06AF\u0631\u062F\u062F. \u0647\u06CC\u0686 \u06A9\u0648\u06A9\u06CC \u06CC\u0627 \u0634\u0646\u0627\u0633\u0647\u200C\u0627\u06CC \u062F\u0631 \u062F\u0633\u062A\u06AF\u0627\u0647 \u0634\u0645\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u0628\u0647 \u06A9\u0633\u06CC \u0648\u0627\u06AF\u0630\u0627\u0631 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u067E\u0633 \u0627\u0632 \u06F2\u06F5 \u0645\u0627\u0647 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0627\u06AF\u0631 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 \xABDo Not Track\xBB \u06CC\u0627 \xABGlobal Privacy Control\xBB \u0631\u0627 \u0628\u0641\u0631\u0633\u062A\u062F\u060C \u0647\u06CC\u0686 \u0686\u06CC\u0632\u06CC \u0634\u0645\u0631\u062F\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u067E\u0631\u062F\u0627\u0632\u0634 \u0631\u0648\u06CC \u0633\u0631\u0648\u06CC\u0633 Cloudflare Workers \u0648 \u067E\u0627\u06CC\u06AF\u0627\u0647\u200C\u062F\u0627\u062F\u0647\u0654 D1 \u0627\u0632 \u0634\u0631\u06A9\u062A Cloudflare, Inc. (\u0627\u06CC\u0627\u0644\u0627\u062A \u0645\u062A\u062D\u062F\u0647\u0654 \u0622\u0645\u0631\u06CC\u06A9\u0627) \u0627\u0646\u062C\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F \u06A9\u0647 \u0632\u06CC\u0631 EU-US Data Privacy Framework \u06AF\u0648\u0627\u0647\u06CC \u0634\u062F\u0647 \u0627\u0633\u062A (Art. 45 DSGVO). \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC: Art. 6 Abs. 1 lit. f DSGVO \u2014 \u0645\u0646\u0627\u0641\u0639 \u0645\u0634\u0631\u0648\u0639 \u0645\u0627 \u062F\u0631 \u0634\u0646\u0627\u062E\u062A\u0646 \u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646 \u0648 \u0628\u0647\u062A\u0631 \u06A9\u0631\u062F\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647. \u0628\u0627 \u067E\u06CC\u0627\u0645\u06CC \u0628\u0647 info@gosan.org \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0627\u06CC\u0646 \u067E\u0631\u062F\u0627\u0632\u0634 \u0627\u0639\u062A\u0631\u0627\u0636 \u06A9\u0646\u06CC\u062F (Art. 21 DSGVO)."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062A\u0645\u0627\u0633 \xB7 Kontakt per E-Mail"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0641\u0631\u0645 \u062A\u0645\u0627\u0633 \u0627\u06CC\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u062A\u0646\u0647\u0627 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0634\u0645\u0627 \u0631\u0627 \u0628\u0627\u0632 \u0645\u06CC\u200C\u06A9\u0646\u062F (\u067E\u06CC\u0648\u0646\u062F mailto:)\u061B \u062E\u0648\u062F \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0647\u06CC\u0686 \u062F\u0627\u062F\u0647\u200C\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u06CC\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F. \u0622\u0646\u0686\u0647 \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644 \u0628\u0631\u0627\u06CC \u0645\u0627 \u0628\u0641\u0631\u0633\u062A\u06CC\u062F\u060C \u062A\u0646\u0647\u0627 \u0628\u0631\u0627\u06CC \u067E\u0627\u0633\u062E\u200C\u06AF\u0648\u06CC\u06CC \u0648 \u067E\u06CC\u06AF\u06CC\u0631\u06CC \u0647\u0645\u0627\u0646 \u0645\u06A9\u0627\u062A\u0628\u0647 \u067E\u0631\u062F\u0627\u0632\u0634 \u0645\u06CC\u200C\u0634\u0648\u062F (Art. 6 Abs. 1 lit. b und f DSGVO) \u0648 \u0628\u0647 \u06A9\u0633\u06CC \u0648\u0627\u06AF\u0630\u0627\u0631 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u067E\u0633 \u0627\u0632 \u067E\u0627\u06CC\u0627\u0646 \u0645\u06A9\u0627\u062A\u0628\u0647\u060C \u0627\u06CC\u0645\u06CC\u0644\u200C\u0647\u0627 \u062D\u0630\u0641 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F\u060C \u0645\u06AF\u0631 \u0622\u0646\u06A9\u0647 \u0646\u06AF\u0647\u062F\u0627\u0631\u06CC \u0622\u0646\u0647\u0627 \u062A\u06A9\u0644\u06CC\u0641 \u0642\u0627\u0646\u0648\u0646\u06CC \u0628\u0627\u0634\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062E\u0628\u0631\u0646\u0627\u0645\u0647 \xB7 Newsletter"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u062F\u0631 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0641\u0631\u0645\u06CC \u0628\u0631\u0627\u06CC \u0639\u0636\u0648\u06CC\u062A \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0633\u062A. \u0646\u0634\u0627\u0646\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC \u06A9\u0647 \u062B\u0628\u062A \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F \u062A\u0646\u0647\u0627 \u0628\u0631\u0627\u06CC \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u062E\u0628\u0631\u0646\u0627\u0645\u0647 \u0630\u062E\u06CC\u0631\u0647 \u0648 \u0628\u0647\u200C\u06A9\u0627\u0631 \u0645\u06CC\u200C\u0631\u0648\u062F \u0648 \u0628\u0647 \u0647\u06CC\u0686 \u0645\u0646\u0638\u0648\u0631 \u062F\u06CC\u06AF\u0631\u06CC \u067E\u0631\u062F\u0627\u0632\u0634 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC: \u0631\u0636\u0627\u06CC\u062A \u0634\u0645\u0627 (Art. 6 Abs. 1 lit. a DSGVO). \u0627\u06CC\u0646 \u0631\u0636\u0627\u06CC\u062A \u0631\u0627 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u067E\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u2014 \u0628\u0627 \u067E\u06CC\u0627\u0645\u06CC \u0628\u0647 info@gosan.org \u06CC\u0627 \u0627\u0632 \u0631\u0627\u0647 \u0644\u063A\u0648 \u0639\u0636\u0648\u06CC\u062A \u062F\u0631 \u062E\u0648\u062F \u062E\u0628\u0631\u0646\u0627\u0645\u0647. \u067E\u0633 \u0627\u0632 \u0622\u0646\u060C \u0646\u0634\u0627\u0646\u06CC \u0634\u0645\u0627 \u062D\u0630\u0641 \u0645\u06CC\u200C\u0634\u0648\u062F. \u067E\u0633 \u06AF\u0631\u0641\u062A\u0646 \u0631\u0636\u0627\u06CC\u062A\u060C \u0628\u0647 \u0642\u0627\u0646\u0648\u0646\u06CC \u0628\u0648\u062F\u0646 \u067E\u0631\u062F\u0627\u0632\u0634\u06CC \u06A9\u0647 \u067E\u06CC\u0634 \u0627\u0632 \u0622\u0646 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647 \u062E\u062F\u0634\u0647\u200C\u0627\u06CC \u0646\u0645\u06CC\u200C\u0632\u0646\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u067E\u0633\u0646\u062F \u0648 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u062F\u0631 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \xB7 Gef\xE4llt-mir-Angaben und Kommentare im Journal"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0628\u0627 \u0632\u062F\u0646 \xAB\u067E\u0633\u0646\u062F\u06CC\u062F\u0646\xBB \u062F\u0631 \u06CC\u06A9 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u060C \u062A\u0646\u0647\u0627 \u0634\u0645\u0627\u0631\u0646\u062F\u0647\u0654 \u0647\u0645\u0627\u0646 \u0646\u0648\u0634\u062A\u0647 \u06CC\u06A9\u06CC \u0628\u0627\u0644\u0627 \u0645\u06CC\u200C\u0631\u0648\u062F. \u0628\u0631\u0627\u06CC \u0622\u0646\u06A9\u0647 \u0647\u0631 \u062E\u0648\u0627\u0646\u0646\u062F\u0647 \u062F\u0631 \u06CC\u06A9 \u0631\u0648\u0632 \u062A\u0646\u0647\u0627 \u06CC\u06A9 \u0628\u0627\u0631 \u0634\u0645\u0631\u062F\u0647 \u0634\u0648\u062F\u060C \u0647\u0645\u0627\u0646 \u06A9\u062F \u062F\u0631\u0647\u0645\u200C\u0633\u0627\u0632\u06CC\u200C\u0634\u062F\u0647\u0654 \u0631\u0648\u0632\u0627\u0646\u0647 \u06A9\u0647 \u062F\u0631 \u0628\u062E\u0634 \xAB\u0622\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F\xBB \u0622\u0645\u062F\u0647 \u0627\u0633\u062A\u060C \u06A9\u0646\u0627\u0631 \u067E\u0633\u0646\u062F \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0647\u0631 \u0634\u0628 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0646\u0634\u0627\u0646\u06CC IP\u060C \u0646\u0627\u0645 \u06CC\u0627 \u0634\u0646\u0627\u0633\u0647\u0654 \u062F\u06CC\u06AF\u0631\u06CC \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0627\u06CC\u0646\u06A9\u0647 \u0634\u0645\u0627 \u0646\u0648\u0634\u062A\u0647\u200C\u0627\u06CC \u0631\u0627 \u067E\u0633\u0646\u062F\u06CC\u062F\u0647\u200C\u0627\u06CC\u062F\u060C \u062A\u0646\u0647\u0627 \u062F\u0631 \u062D\u0627\u0641\u0638\u0647\u0654 \u0645\u0631\u0648\u0631\u06AF\u0631 \u062E\u0648\u062F \u0634\u0645\u0627 \u0645\u06CC\u200C\u0645\u0627\u0646\u062F. \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC: Art. 6 Abs. 1 lit. f DSGVO \u2014 \u0645\u0646\u0627\u0641\u0639 \u0645\u0634\u0631\u0648\u0639 \u0645\u0627 \u062F\u0631 \u0634\u0645\u0627\u0631\u0634 \u062F\u0631\u0633\u062A \u067E\u0633\u0646\u062F\u0647\u0627."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0628\u0631\u0627\u06CC \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647\u060C \u0646\u0627\u0645 \u0648 \u0645\u062A\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0631\u0627 \u0645\u06CC\u200C\u0646\u0648\u06CC\u0633\u06CC\u062F\u061B \u0646\u0634\u0627\u0646\u06CC \u0627\u06CC\u0645\u06CC\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0647\u0645\u0631\u0627\u0647 \u0622\u0646\u0647\u0627\u060C \u0646\u0634\u0627\u0646\u06CC \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \u0648 \u0632\u0645\u0627\u0646 \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u0630\u062E\u06CC\u0631\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0628\u0631\u0627\u06CC \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0627\u0632 \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u0627\u0646\u0628\u0648\u0647\u060C \u06A9\u062F \u062F\u0631\u0647\u0645\u200C\u0633\u0627\u0632\u06CC\u200C\u0634\u062F\u0647\u0654 \u0631\u0648\u0632\u0627\u0646\u0647 \u062A\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0647\u0645\u0627\u0646 \u0631\u0648\u0632 \u06A9\u0646\u0627\u0631 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0645\u06CC\u200C\u0645\u0627\u0646\u062F \u0648 \u0634\u0628 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0647\u0631 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0646\u062E\u0633\u062A \u0628\u0647 \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0645\u06CC\u200C\u0631\u0633\u062F \u0648 \u062A\u0646\u0647\u0627 \u067E\u0633 \u0627\u0632 \u062A\u0623\u06CC\u06CC\u062F\u060C \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0646\u0627\u0645 \u0648 \u062A\u0627\u0631\u06CC\u062E\u060C \u0632\u06CC\u0631 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \u0628\u0631\u0627\u06CC \u0647\u0645\u0647 \u062F\u06CC\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u0632\u06CC\u0631 \u0622\u0646 \u067E\u0627\u0633\u062E\u06CC \u0646\u06CC\u0632 \u0645\u0646\u062A\u0634\u0631 \u06A9\u0646\u062F. \u067E\u06CC\u0634 \u0627\u0632 \u062A\u0623\u06CC\u06CC\u062F\u060C \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0631\u0627 \u062A\u0646\u0647\u0627 \u062E\u0648\u062F \u0634\u0645\u0627 \u062F\u0631 \u0645\u0631\u0648\u0631\u06AF\u0631 \u062E\u0648\u062F \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u062F. \u0646\u0627\u0645\u06CC \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0647\u0645\u0631\u0627\u0647 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0645\u0646\u062A\u0634\u0631 \u0634\u0648\u062F\u061B \u0646\u0627\u0645 \u0645\u0633\u062A\u0639\u0627\u0631 \u0646\u06CC\u0632 \u067E\u0630\u06CC\u0631\u0641\u062A\u0647 \u0627\u0633\u062A."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u067E\u0633\u0646\u062F\u0647\u0627 \u0648 \u062F\u06CC\u062F\u06AF\u0627\u0647\u200C\u0647\u0627 \u0631\u0648\u06CC Cloudflare Workers \u0648 \u067E\u0627\u06CC\u06AF\u0627\u0647\u200C\u062F\u0627\u062F\u0647\u0654 D1 \u0627\u0632 \u0634\u0631\u06A9\u062A Cloudflare, Inc. \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F (\u0634\u0631\u062D \u062F\u0631 \u0628\u062E\u0634 \xAB\u0622\u0645\u0627\u0631 \u0628\u0627\u0632\u062F\u06CC\u062F\xBB). \u0628\u0631\u0627\u06CC \u0622\u0646\u06A9\u0647 \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0627\u0632 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u062A\u0627\u0632\u0647 \u0622\u06AF\u0627\u0647 \u0634\u0648\u062F\u060C \u0646\u0627\u0645\u060C \u0645\u062A\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0648 \u0646\u0634\u0627\u0646\u06CC \u0635\u0641\u062D\u0647 \u0628\u0627 \u0627\u06CC\u0645\u06CC\u0644\u06CC \u0627\u0632 \u0631\u0627\u0647 \u0633\u0631\u0648\u06CC\u0633 Brevo (\u0641\u0631\u0627\u0646\u0633\u0647\u060C \u062F\u0631\u0648\u0646 \u0627\u062A\u062D\u0627\u062F\u06CC\u0647\u0654 \u0627\u0631\u0648\u067E\u0627) \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0645\u0628\u0646\u0627\u06CC \u062D\u0642\u0648\u0642\u06CC: \u0631\u0636\u0627\u06CC\u062A \u0634\u0645\u0627 \u0628\u0627 \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647 (Art. 6 Abs. 1 lit. a DSGVO). \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0645\u0646\u062A\u0634\u0631\u0634\u062F\u0647 \u062A\u0627 \u0632\u0645\u0627\u0646\u06CC \u06A9\u0647 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \u062F\u0631 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0627\u0633\u062A \u0645\u06CC\u200C\u0645\u0627\u0646\u062F\u061B \u062F\u06CC\u062F\u06AF\u0627\u0647\u06CC \u06A9\u0647 \u0645\u0646\u062A\u0634\u0631 \u0646\u0634\u0648\u062F\u060C \u0627\u0632 \u0633\u0648\u06CC \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0647\u0631 \u0632\u0645\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0631\u0636\u0627\u06CC\u062A \u062E\u0648\u062F \u0631\u0627 \u067E\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u062D\u0630\u0641 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u062E\u0648\u0627\u0647\u06CC\u062F: \u0646\u0627\u0645\u060C \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \u0648 \u062A\u0627\u0631\u06CC\u062E \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0631\u0627 \u0628\u0647 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: mail
  }, "info@gosan.org"), " \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0627\u0641\u0638\u0647\u0654 \u0645\u0631\u0648\u0631\u06AF\u0631 \u2014 \u0628\u062F\u0648\u0646 \u06A9\u0648\u06A9\u06CC \xB7 Browser-Speicher (keine Cookies)"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0627\u06CC\u0646 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u06A9\u0648\u06A9\u06CC \u0646\u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u062F. \u062A\u0646\u0647\u0627 \u0627\u0632 \u062D\u0627\u0641\u0638\u0647\u0654 \u0645\u0631\u0648\u0631\u06AF\u0631 \u0634\u0645\u0627 (sessionStorage / localStorage) \u0628\u0631\u0627\u06CC \u06A9\u0627\u0631\u06A9\u0631\u062F\u0647\u0627\u06CC \u0641\u0646\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F: \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0646 \u062C\u0627\u06CC \u067E\u06CC\u0645\u0627\u06CC\u0634 \u0635\u0641\u062D\u0647 \u0648 \u0648\u0636\u0639\u06CC\u062A \u0638\u0627\u0647\u0631\u06CC \u0633\u0627\u06CC\u062A\u060C \u0648 \u062F\u0631 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u060C \u067E\u0633\u0646\u062F\u0647\u0627\u06CC \u0634\u0645\u0627\u060C \u0646\u0627\u0645\u06CC \u06A9\u0647 \u0628\u0631\u0627\u06CC \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0646\u0648\u0634\u062A\u0647\u200C\u0627\u06CC\u062F \u0648 \u062F\u06CC\u062F\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u0647\u0646\u0648\u0632 \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F\u0646\u062F. \u0627\u06CC\u0646 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u062F\u0631 \u0645\u0631\u0648\u0631\u06AF\u0631 \u062E\u0648\u062F \u0634\u0645\u0627 \u0645\u06CC\u200C\u0645\u0627\u0646\u062F \u0648 \u0627\u0632 \u0622\u0646\u062C\u0627 \u0628\u0647 \u0645\u0627 \u06CC\u0627 \u062F\u06CC\u06AF\u0631\u06CC \u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F\u061B \u0628\u0627 \u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0633\u0627\u06CC\u062A \u062F\u0631 \u0645\u0631\u0648\u0631\u06AF\u0631\u060C \u0647\u0645\u0647 \u067E\u0627\u06A9 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F. \u0627\u06CC\u0646 \u0630\u062E\u06CC\u0631\u0647\u200C\u0633\u0627\u0632\u06CC \u0628\u0631\u0627\u06CC \u06A9\u0627\u0631\u06A9\u0631\u062F\u0647\u0627\u06CC\u06CC \u06A9\u0647 \u062E\u0648\u062F \u062E\u0648\u0627\u0633\u062A\u0647\u200C\u0627\u06CC\u062F \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A \u0648 \u0628\u0646\u0627\u0628\u0631 \xA7 25 Abs. 2 Nr. 2 TDDDG \u0646\u06CC\u0627\u0632\u06CC \u0628\u0647 \u0631\u0636\u0627\u06CC\u062A \u0646\u062F\u0627\u0631\u062F\u061B \u0627\u0632 \u0647\u0645\u06CC\u0646 \u0631\u0648\u0633\u062A \u06A9\u0647 \u0627\u06CC\u0646 \u0633\u0627\u06CC\u062A \u0628\u0646\u0631 \u06A9\u0648\u06A9\u06CC \u0646\u062F\u0627\u0631\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0642\u0648\u0642 \u0634\u0645\u0627 \xB7 Ihre Rechte als betroffene Person"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u062F\u0631\u0628\u0627\u0631\u0647\u0654 \u062F\u0627\u062F\u0647\u200C\u0647\u0627\u06CC \u0634\u062E\u0635\u06CC \u062E\u0648\u062F\u060C \u0627\u06CC\u0646 \u062D\u0642\u0648\u0642 \u0631\u0627 \u062F\u0627\u0631\u06CC\u062F: \u062F\u0633\u062A\u0631\u0633\u06CC (Art. 15)\u060C \u062A\u0635\u062D\u06CC\u062D (Art. 16)\u060C \u062D\u0630\u0641 (Art. 17)\u060C \u0645\u062D\u062F\u0648\u062F \u06A9\u0631\u062F\u0646 \u067E\u0631\u062F\u0627\u0632\u0634 (Art. 18)\u060C \u0627\u0646\u062A\u0642\u0627\u0644 \u062F\u0627\u062F\u0647\u200C\u0647\u0627 (Art. 20)\u060C \u0627\u0639\u062A\u0631\u0627\u0636 \u0628\u0647 \u067E\u0631\u062F\u0627\u0632\u0634\u0650 \u0645\u0628\u062A\u0646\u06CC \u0628\u0631 \u0645\u0646\u0627\u0641\u0639 \u0645\u0634\u0631\u0648\u0639 (Art. 21)\u060C \u067E\u0633 \u06AF\u0631\u0641\u062A\u0646 \u0631\u0636\u0627\u06CC\u062A \u062F\u0631 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0628\u062F\u0648\u0646 \u0627\u062B\u0631 \u0628\u0631 \u067E\u0631\u062F\u0627\u0632\u0634 \u067E\u06CC\u0634\u06CC\u0646 (Art. 7 Abs. 3) \u0648 \u0634\u06A9\u0627\u06CC\u062A \u0646\u0632\u062F \u0645\u0631\u062C\u0639 \u0646\u0638\u0627\u0631\u062A\u06CC (Art. 77 DSGVO). \u0628\u0631\u0627\u06CC \u0628\u0647\u200C\u06A9\u0627\u0631 \u0628\u0633\u062A\u0646 \u0627\u06CC\u0646 \u062D\u0642\u0648\u0642 \u06A9\u0627\u0641\u06CC \u0627\u0633\u062A \u0628\u0647 ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: mail
  }, "info@gosan.org"), " \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0645\u0631\u062C\u0639 \u0646\u0638\u0627\u0631\u062A\u06CC \u0635\u0644\u0627\u062D\u06CC\u062A\u200C\u062F\u0627\u0631 \u0628\u0631\u0627\u06CC \u0634\u06A9\u0627\u06CC\u062A: Berliner Beauftragte f\xFCr Datenschutz und Informationsfreiheit (BlnBDI)\u060C Alt-Moabit 59\u201361, 10555 Berlin \u2014", ' ', /*#__PURE__*/React.createElement("a", {
    href: "https://www.datenschutz-berlin.de",
    target: "_blank",
    rel: "noopener noreferrer",
    style: ext
  }, "datenschutz-berlin.de")), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      margin: '2.6rem 0 1.4rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)'
    }
  }, "\u0622\u062E\u0631\u06CC\u0646 \u0628\u0627\u0632\u0646\u06AF\u0631\u06CC: \u0627\u06A9\u062A\u0628\u0631 \u06F2\u06F0\u06F2\u06F6 \xB7 Stand: Oktober 2026"))));
}

/* donation configuration — set the PayPal link to activate the button
   (PayPal.Me link or hosted-button URL of the institute account) */
var GOSAN_DONATE = {
  paypal: '',
  // e.g. 'https://www.paypal.com/donate/?hosted_button_id=…'
  iban: '',
  // filled after Registereintragung + bank account
  monthly: {
    5: '',
    20: '',
    50: '',
    100: ''
  },
  // PayPal monthly-subscription links per tier
  yearly: {
    5: '',
    20: '',
    50: '',
    100: ''
  } // PayPal annual-payment links per tier (recommended path)
};
function SupportPage() {
  var label = {
    fontSize: '0.72rem',
    letterSpacing: '0.09em',
    color: 'var(--gold-deep)',
    textTransform: 'uppercase',
    fontWeight: 700,
    margin: '2rem 0 0.6rem'
  };
  var para = {
    fontSize: '0.95rem',
    lineHeight: 2.05,
    color: 'var(--ink)',
    margin: '0 0 1rem',
    textAlign: 'justify'
  };
  var note = {
    fontSize: '0.85rem',
    lineHeight: 2,
    color: 'var(--text-muted)',
    margin: '0 0 1rem',
    textAlign: 'justify'
  };
  var payBtn = {
    display: 'inline-block',
    padding: '0.7rem 2.2rem',
    border: '1px solid var(--ink)',
    background: GOSAN_DONATE.paypal ? 'var(--ink)' : 'var(--surface-band)',
    color: GOSAN_DONATE.paypal ? 'var(--paper, #EAEAE6)' : 'var(--text-muted)',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: GOSAN_DONATE.paypal ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u062D\u0645\u0627\u06CC\u062A \u0627\u0632 \u06AF\u0648\u0633\u0627\u0646"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "SUPPORT // G\u014CS\u0100N",
    title: "\u062D\u0645\u0627\u06CC\u062A \u0627\u0632 \u06AF\u0648\u0633\u0627\u0646"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: '760px',
      paddingBottom: '5rem'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u062A\u062F\u0627\u0648\u0645 \u0648 \u0628\u0647\u0628\u0648\u062F \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u06AF\u0648\u0633\u0627\u0646 \u062A\u0646\u0647\u0627 \u0628\u0627 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646 \u0622\u0646 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A. \u0642\u0644\u0645\u200C\u0628\u0647\u0627\u06CC \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0648 \u067E\u0698\u0648\u0647\u0634\u06AF\u0631\u0627\u0646\u060C \u062F\u0633\u062A\u0645\u0632\u062F \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0648 \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0641\u0646\u06CC\u060C \u0647\u0645\u0647 \u0627\u0632 \u062D\u0645\u0627\u06CC\u062A\u200C\u0647\u0627\u06CC \u0645\u0631\u062F\u0645\u06CC \u062A\u0623\u0645\u06CC\u0646 \u0645\u06CC\u200C\u0634\u0648\u062F. \u06AF\u0648\u0633\u0627\u0646 \u0622\u06AF\u0647\u06CC \u0648 \u0628\u0648\u062F\u062C\u0647\u0654 \u0646\u0647\u0627\u062F\u06CC \u0646\u0645\u06CC\u200C\u067E\u0630\u06CC\u0631\u062F\u061B \u062D\u0627\u0645\u06CC\u0627\u0646 \u062F\u0631 \u0645\u062D\u062A\u0648\u0627 \u062F\u0633\u062A\u06CC \u0646\u062F\u0627\u0631\u0646\u062F \u0648 \u0645\u062D\u062A\u0648\u0627\u06CC \u06AF\u0648\u0633\u0627\u0646 \u0631\u0627 \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0647\u0645\u06AF\u0627\u0646\u060C \u067E\u0633 \u0627\u0632 \u0627\u0646\u062A\u0634\u0627\u0631 \u0645\u06CC\u200C\u062E\u0648\u0627\u0646\u0646\u062F."), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      margin: '2rem 0 1.4rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0644\u0642\u0647\u0654 \u06CC\u0627\u0631\u0627\u0646 \u06AF\u0648\u0633\u0627\u0646 \xB7 Freundeskreis"), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u0645\u0648\u0641\u0642\u06CC\u062A \u0648 \u0645\u0627\u0646\u062F\u06AF\u0627\u0631\u06CC \u0647\u0631 \u0646\u0647\u0627\u062F \u0641\u0631\u0647\u0646\u06AF\u06CC \u0648 \u067E\u0698\u0648\u0647\u0634\u06CC \u0631\u0627 \u0647\u0645\u0648\u0627\u0631\u0647 \u062D\u0644\u0642\u0647\u200C\u0627\u06CC \u0627\u0632 \u06CC\u0627\u0631\u0627\u0646 \u0622\u0646 \u0646\u0647\u0627\u062F \u0627\u0645\u06A9\u0627\u0646\u200C\u067E\u0630\u06CC\u0631 \u0633\u0627\u062E\u062A\u0647 \u0627\u0633\u062A. \u0622\u0646\u0686\u0647 \u06AF\u0648\u0633\u0627\u0646 \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F \u0628\u0631 \u0647\u0645\u06AF\u0627\u0646 \u06AF\u0634\u0648\u062F\u0647 \u0627\u0633\u062A \u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC\u060C \u0627\u0645\u062A\u06CC\u0627\u0632\u06CC \u0628\u0631\u0627\u06CC \u06A9\u0633\u06CC \u0628\u0647 \u0647\u0645\u0631\u0627\u0647 \u0646\u062F\u0627\u0631\u062F. \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u0641\u0639\u0627\u0644\u06CC\u062A\u200C\u0647\u0627\u06CC \u06AF\u0627\u0647\u0646\u0627\u0645\u0647 \u0648 \u0627\u0646\u062F\u06CC\u0634\u06A9\u062F\u0647\u060C \u0633\u0647\u0645 \u062F\u0627\u0634\u062A\u0646 \u062F\u0631 \u0645\u0627\u0646\u062F\u06AF\u0627\u0631\u06CC \u0627\u06CC\u0646 \u0646\u0647\u0627\u062F \u0627\u0633\u062A\u060C \u0648 \u06AF\u0648\u0633\u0627\u0646 \u0627\u06CC\u0646 \u0647\u0645\u0631\u0627\u0647\u06CC \u0631\u0627 \u0627\u0632 \u06CC\u0627\u062F \u0646\u0645\u06CC\u200C\u0628\u0631\u062F."), /*#__PURE__*/React.createElement("p", {
    style: para
  }, "\u06AF\u0648\u0633\u0627\u0646 \u062F\u0631 \u0622\u0644\u0645\u0627\u0646 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646 \u0627\u0646\u062C\u0645\u0646\u06CC \u063A\u06CC\u0631\u0627\u0646\u062A\u0641\u0627\u0639\u06CC \u0628\u0647 \u062B\u0628\u062A \u0631\u0633\u06CC\u062F\u0647 \u0627\u0633\u062A \u0648 \u062A\u0623\u06CC\u06CC\u062F \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u06AF\u06CC \u0622\u0646 \u062F\u0631 \u062C\u0631\u06CC\u0627\u0646 \u0627\u0633\u062A. \u0628\u0627 \u067E\u0627\u06CC\u0627\u0646 \u0627\u06CC\u0646 \u0645\u0631\u062D\u0644\u0647\u060C \u0631\u0627\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0645\u06A9\u200C\u0647\u0627 \u06AF\u0634\u0648\u062F\u0647 \u062E\u0648\u0627\u0647\u062F \u0634\u062F."), /*#__PURE__*/React.createElement("div", {
    className: "sup-tiers",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(178px, 1fr))',
      gap: '0.9rem',
      margin: '0 0 1rem'
    }
  }, [
  /* What ONE MONTH at each level covers, against finance/RATES.md
     (technical run rate €15.16/mo, Band A €20/h). The two upper
     cards name where the money goes and stop short of a fraction:
     a fraction is a price list — the reader multiplies it back and
     judges the fee, and the arithmetic was wrong besides, since B1
     is €400 per CONTRIBUTOR and a paper carries three of them. */
  {
    amt: 5,
    what: 'بخشی از هزینهٔ میزبانی و ابزارها را می‌پوشاند و چراغ تارنما را روشن نگه می‌دارد.'
  }, {
    amt: 20,
    what: 'یک ساعت کار ویراستاری و آماده‌سازی متن را می‌پوشاند.'
  }, {
    amt: 50,
    what: 'سهمی از قلم‌بهای یک جستار گاهنامه است.'
  }, {
    amt: 100,
    what: 'سهمی از قلم‌بهای پژوهشگران اندیشکده است.'
  }].map(function (t) {
    var yLink = GOSAN_DONATE.yearly[t.amt];
    var mLink = GOSAN_DONATE.monthly[t.amt];
    var optStyle = function optStyle(primary, active) {
      return {
        /* one line each: the label carries the period and the sum, and a
           wrapped «— €60» reads as a second, smaller offer */
        display: 'block',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        padding: '0.45rem 0.3rem',
        fontSize: '0.72rem',
        fontWeight: primary ? 700 : 400,
        textDecoration: 'none',
        cursor: active ? 'pointer' : 'default',
        border: '1px solid ' + (primary ? 'var(--ink)' : 'var(--line, #CFCCC3)'),
        background: primary ? 'var(--ink)' : 'transparent',
        color: primary ? 'var(--paper, #EAEAE6)' : 'var(--ink)'
      };
    };
    return /*#__PURE__*/React.createElement("div", {
      key: t.amt,
      style: {
        border: '1px solid var(--line, #CFCCC3)',
        background: 'var(--surface-band)',
        padding: '1rem 0.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1.35rem',
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, "\u20AC", t.amt), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.76rem',
        lineHeight: 1.8,
        color: 'var(--text-muted)',
        minHeight: '3.6em'
      }
    }, t.what), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem',
        marginTop: 'auto',
        borderTop: '1px dashed var(--line, #CFCCC3)',
        paddingTop: '0.7rem'
      }
    }, mLink ? /*#__PURE__*/React.createElement("a", {
      href: mLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: optStyle(true, true)
    }, "\u062D\u0645\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0645\u0627\u0647 \u2014 ", "\u20AC", t.amt) : /*#__PURE__*/React.createElement("span", {
      style: optStyle(true, false)
    }, "\u062D\u0645\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0645\u0627\u0647 \u2014 ", "\u20AC", t.amt), yLink ? /*#__PURE__*/React.createElement("a", {
      href: yLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: optStyle(false, true)
    }, "\u062D\u0645\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0633\u0627\u0644 \u2014 ", "\u20AC", t.amt * 12) : /*#__PURE__*/React.createElement("span", {
      style: optStyle(false, false)
    }, "\u062D\u0645\u0627\u06CC\u062A \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0633\u0627\u0644 \u2014 ", "\u20AC", t.amt * 12)));
  })), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u067E\u06CC\u200C\u067E\u0627\u0644 \xB7 PayPal"), GOSAN_DONATE.paypal ? /*#__PURE__*/React.createElement("p", {
    style: para
  }, /*#__PURE__*/React.createElement("a", {
    href: GOSAN_DONATE.paypal,
    target: "_blank",
    rel: "noopener noreferrer",
    style: payBtn
  }, "\u06A9\u0645\u06A9 \u0627\u0632 \u0631\u0627\u0647 PayPal")) : /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 PayPal \u0648 \u06A9\u0627\u0631\u062A\u200C\u0647\u0627\u06CC \u0628\u0627\u0646\u06A9\u06CC \u0628\u06CC\u0646\u200C\u0627\u0644\u0645\u0644\u0644\u06CC \u0628\u0647\u200C\u0632\u0648\u062F\u06CC \u06AF\u0634\u0648\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0647\u0645\u06CC\u0646\u200C\u062C\u0627 \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u062E\u0648\u0627\u0647\u062F \u0628\u0648\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0627\u0646\u06A9\u06CC \xB7 \xDCberweisung"), /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u0634\u0645\u0627\u0631\u0647 \u062D\u0633\u0627\u0628 \u0627\u0646\u062C\u0645\u0646 (IBAN) \u0631\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0646\u0627\u0645\u0647 \u0628\u0647 info@gosan.org \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F. \u067E\u0633 \u0627\u0632 \u062A\u0623\u06CC\u06CC\u062F \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u06AF\u06CC\u060C \u062F\u0631 \u0647\u0645\u06CC\u0646 \u0635\u0641\u062D\u0647 \u0646\u06CC\u0632 \u0627\u0639\u0644\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0627\u0645\u06CC\u0627\u0646 \u062F\u0631 \u0622\u0644\u0645\u0627\u0646"), /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u0627\u0646\u062C\u0645\u0646 \u0627\u0646\u062F\u06CC\u0634\u06A9\u062F\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 (G\u014Ds\u0101n Institute e. V.\u200E) \u062F\u0631 \u062F\u0627\u062F\u06AF\u0627\u0647 \u0628\u062E\u0634 \u0634\u0627\u0631\u0644\u0648\u062A\u0646\u0628\u0648\u0631\u06AF \u0628\u0631\u0644\u06CC\u0646 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 VR 42957 B \u0628\u0647 \u062B\u0628\u062A \u0631\u0633\u06CC\u062F\u0647 \u0648 \u062A\u0623\u06CC\u06CC\u062F \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u06AF\u06CC \u0631\u0627 \u0627\u0632 \u0627\u062F\u0627\u0631\u0647\u0654 \u062F\u0627\u0631\u0627\u06CC\u06CC \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A. \u0628\u0627 \u062A\u0623\u06CC\u06CC\u062F \u0627\u062F\u0627\u0631\u0647\u0654 \u062F\u0627\u0631\u0627\u06CC\u06CC (\u200E\xA7 60a AO\u200E)\u060C \u0628\u0631\u0627\u06CC \u06A9\u0645\u06A9\u200C\u0647\u0627 \u0648 \u062D\u0642 \u0639\u0636\u0648\u06CC\u062A \u06AF\u0648\u0627\u0647\u06CC \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC (Zuwendungsbest\xE4tigung) \u0635\u0627\u062F\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F \u0648 \u0645\u0627\u0644\u06CC\u0627\u062A\u200C\u062F\u0647\u0646\u062F\u06AF\u0627\u0646 \u0622\u0644\u0645\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0646\u062F \u0622\u0646 \u0631\u0627 \u062F\u0631 \u0627\u0638\u0647\u0627\u0631\u0646\u0627\u0645\u0647\u0654 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC \u062E\u0648\u062F \u0628\u0647 \u062D\u0633\u0627\u0628 \u0622\u0648\u0631\u0646\u062F\u061B \u06A9\u0645\u06A9 \u0628\u0647 \u0627\u0646\u062C\u0645\u0646\u200C\u0647\u0627\u06CC \u0641\u0631\u0647\u0646\u06AF\u06CC \u0627\u0632 \u0647\u0645\u06CC\u0646 \u0645\u0639\u0627\u0641\u06CC\u062A \u0628\u0631\u062E\u0648\u0631\u062F\u0627\u0631 \u0627\u0633\u062A. \u062A\u0627 \u0622\u0646 \u0647\u0646\u06AF\u0627\u0645 \u06A9\u0645\u06A9\u200C\u0647\u0627 \u067E\u0630\u06CC\u0631\u0641\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0648\u0644\u06CC \u06AF\u0648\u0627\u0647\u06CC \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC \u0647\u0645\u0631\u0627\u0647 \u0646\u062F\u0627\u0631\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0627\u0645\u06CC\u0627\u0646 \u062F\u0631 \u0627\u0631\u0648\u067E\u0627 \u0648 \u062F\u06CC\u06AF\u0631 \u06A9\u0634\u0648\u0631\u0647\u0627 \xB7 European & International Donors"), /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u0627\u0632 \u0647\u0631 \u062C\u0627\u06CC \u0627\u0631\u0648\u067E\u0627 \u0648 \u062C\u0647\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0627\u0632 \u06AF\u0648\u0633\u0627\u0646 \u062D\u0645\u0627\u06CC\u062A \u06A9\u0631\u062F: \u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0627\u0646\u06A9\u06CC (\u062F\u0631 \u0645\u0646\u0637\u0642\u0647\u0654 \u06CC\u0648\u0631\u0648 \u0628\u0627 SEPA \u0648 \u0628\u06CC\u200C\u0647\u0632\u06CC\u0646\u0647)\u060C \u06CC\u0627 \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0627 PayPal \u0648 \u06A9\u0627\u0631\u062A \u0628\u0627\u0646\u06A9\u06CC. \u0628\u0646\u0627 \u0628\u0631 \u062D\u0642\u0648\u0642 \u0627\u062A\u062D\u0627\u062F\u06CC\u0647\u0654 \u0627\u0631\u0648\u067E\u0627\u060C \u06A9\u0645\u06A9 \u0628\u0647 \u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u0647\u0654 \u06CC\u06A9 \u06A9\u0634\u0648\u0631 \u0639\u0636\u0648 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062F\u0631 \u06A9\u0634\u0648\u0631 \u0645\u062D\u0644 \u0627\u0642\u0627\u0645\u062A \u062D\u0627\u0645\u06CC \u0627\u0632 \u0645\u0627\u0644\u06CC\u0627\u062A \u06A9\u0633\u0631 \u0634\u0648\u062F\u061B \u06AF\u0648\u0633\u0627\u0646 \u067E\u0633 \u0627\u0632 \u062A\u0623\u06CC\u06CC\u062F \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u06AF\u06CC\u060C \u0627\u0633\u0646\u0627\u062F \u0644\u0627\u0632\u0645 \u0631\u0627 \u062F\u0631 \u0627\u062E\u062A\u06CC\u0627\u0631 \u062D\u0627\u0645\u06CC\u0627\u0646\u06CC \u0645\u06CC\u200C\u06AF\u0630\u0627\u0631\u062F \u06A9\u0647 \u0628\u062E\u0648\u0627\u0647\u0646\u062F \u0627\u0632 \u0627\u06CC\u0646 \u0631\u0627\u0647 \u0628\u0647\u0631\u0647 \u0628\u0628\u0631\u0646\u062F. \u0628\u0631\u0627\u06CC \u06A9\u0645\u06A9\u200C\u0647\u0627\u06CC \u06A9\u0644\u0627\u0646 \u0627\u0632 \u062F\u06CC\u06AF\u0631 \u06A9\u0634\u0648\u0631\u0647\u0627\u06CC \u0627\u0631\u0648\u067E\u0627\u06CC\u06CC\u060C \u0631\u0627\u0647 \u06AF\u0648\u0627\u0647\u06CC \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC \u0645\u062D\u0644\u06CC \u0627\u0632 \u0634\u0628\u06A9\u0647\u0654 Transnational Giving Europe \u0628\u0631\u0631\u0633\u06CC \u0648 \u0647\u0645\u06CC\u0646\u200C\u062C\u0627 \u0627\u0639\u0644\u0627\u0645 \u062E\u0648\u0627\u0647\u062F \u0634\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u062D\u0627\u0645\u06CC\u0627\u0646 \u062F\u0631 \u0622\u0645\u0631\u06CC\u06A9\u0627 \xB7 U.S. Donors"), /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u0627\u0632 \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0628\u0627 \u06A9\u0627\u0631\u062A \u0628\u0627\u0646\u06A9\u06CC \u0648 PayPal \u0627\u0632 \u06AF\u0648\u0633\u0627\u0646 \u062D\u0645\u0627\u06CC\u062A \u06A9\u0631\u062F. \u06A9\u0633\u0631 \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC \u0622\u0645\u0631\u06CC\u06A9\u0627 (tax-deductible) \u0647\u0646\u0648\u0632 \u0628\u0631\u0642\u0631\u0627\u0631 \u0646\u06CC\u0633\u062A\u061B \u067E\u0633 \u0627\u0632 \u062A\u0623\u06CC\u06CC\u062F \u0639\u0627\u0645\u200C\u0627\u0644\u0645\u0646\u0641\u0639\u06AF\u06CC\u060C \u0631\u0627\u0647 \u06A9\u0645\u06A9\u06CC \u06A9\u0647 \u062F\u0631 \u0622\u0645\u0631\u06CC\u06A9\u0627 \u0627\u0632 \u0645\u0627\u0644\u06CC\u0627\u062A \u06A9\u0633\u0631 \u0634\u0648\u062F\u060C \u0627\u0632 \u0635\u0646\u062F\u0648\u0642 \u062F\u0648\u0633\u062A\u0627\u0646 \u0622\u0645\u0631\u06CC\u06A9\u0627\u06CC\u06CC (American Friends Fund) \u06AF\u0634\u0648\u062F\u0647 \u0648 \u0647\u0645\u06CC\u0646\u200C\u062C\u0627 \u0627\u0639\u0644\u0627\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("div", {
    style: label
  }, "\u0634\u0641\u0627\u0641\u06CC\u062A \xB7 Transparenz"), /*#__PURE__*/React.createElement("p", {
    style: note
  }, "\u06AF\u0648\u0633\u0627\u0646 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u0645\u0627\u0644\u06CC \u067E\u0627\u0646\u0632\u062F\u0647\u200C\u0633\u0627\u0644\u0647\u0654 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0633\u0647 \u0645\u0631\u062D\u0644\u0647 \u062A\u0639\u0631\u06CC\u0641 \u06A9\u0631\u062F\u0647 \u0627\u0633\u062A. \u0631\u0634\u062F \u0647\u0631 \u0645\u0631\u062D\u0644\u0647 \u062A\u0646\u0647\u0627 \u0628\u0631 \u067E\u0627\u06CC\u0647\u0654 \u0645\u0646\u0627\u0628\u0639 \u067E\u0627\u06CC\u062F\u0627\u0631 \u0628\u0647\u200C\u062F\u0633\u062A\u200C\u0622\u0645\u062F\u0647 \u0622\u063A\u0627\u0632 \u0645\u06CC\u200C\u0634\u0648\u062F. \u0628\u0631\u0622\u0648\u0631\u062F \u0646\u06CC\u0627\u0632 \u0633\u0627\u0644\u0627\u0646\u0647\u0654 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0648 \u0627\u0646\u062F\u06CC\u0634\u06A9\u062F\u0647\u0654 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u06AF\u0648\u0633\u0627\u0646 \u062F\u0631 \u0641\u0627\u0632 \u0627\u0648\u0644 \u062D\u062F\u0648\u062F \u06F6\u06F5 \u0647\u0632\u0627\u0631 \u06CC\u0648\u0631\u0648 \u0627\u0633\u062A: \u0646\u0632\u062F\u06CC\u06A9 \u0628\u0647 \u06F3\u06F7 \u062F\u0631\u0635\u062F \u0622\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0642\u0644\u0645\u200C\u0628\u0647\u0627 \u0628\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0648 \u067E\u0698\u0648\u0647\u0634\u06AF\u0631\u0627\u0646 \u0645\u06CC\u200C\u0631\u0633\u062F\u061B \u062D\u062F\u0648\u062F \u06F2\u06F2 \u062F\u0631\u0635\u062F \u062F\u0633\u062A\u0645\u0632\u062F \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0648 \u0645\u062F\u06CC\u0631\u06CC\u062A \u0627\u0633\u062A\u061B \u062D\u062F\u0648\u062F \u06F2\u06F2 \u062F\u0631\u0635\u062F \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC\u060C \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0648 \u062A\u0631\u062C\u0645\u0647\u061B \u0648 \u062A\u0646\u0647\u0627 \u062D\u062F\u0648\u062F \u06F4 \u062F\u0631\u0635\u062F \u0647\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0641\u0646\u06CC (\u0645\u06CC\u0632\u0628\u0627\u0646\u06CC \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627). \u0628\u0627\u0642\u06CC\u060C \u0627\u0646\u062F\u0648\u062E\u062A\u0647\u0654 \u0627\u062D\u062A\u06CC\u0627\u0637\u06CC \u0627\u0633\u062A. \u06AF\u0648\u0633\u0627\u0646 \u0647\u0631 \u0633\u0627\u0644 \u06AF\u0632\u0627\u0631\u0634\u06CC \u0627\u0632 \u0645\u0646\u0627\u0628\u0639 \u0648 \u0645\u0635\u0627\u0631\u0641 \u062E\u0648\u062F \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u06A9\u0646\u062F\u060C \u0648 \u0646\u0627\u0645 \u0647\u06CC\u0686 \u062D\u0627\u0645\u06CC \u0628\u06CC\u200C\u062E\u0648\u0627\u0633\u062A \u0627\u0648 \u0628\u0631\u062F\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      margin: '2.4rem 0 1.2rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--line, #CFCCC3)',
      background: 'var(--surface-band)',
      padding: '1.3rem 1.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, "\u0628\u0631\u0627\u06CC \u067E\u0631\u0633\u0634 \u062F\u0631\u0628\u0627\u0631\u0647\u0654 \u062D\u0645\u0627\u06CC\u062A\u060C \u06A9\u0645\u06A9 \u0646\u0647\u0627\u062F\u06CC \u06CC\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC \u0628\u0627 \u0645\u0627 \u062F\u0631 \u062A\u0645\u0627\u0633 \u0628\u0627\u0634\u06CC\u062F."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: {
      display: 'inline-block',
      padding: '0.55rem 1.7rem',
      border: '1px solid var(--ink)',
      background: 'var(--ink)',
      color: 'var(--paper, #EAEAE6)',
      fontWeight: 600,
      fontSize: '0.88rem',
      textDecoration: 'none',
      direction: 'ltr'
    }
  }, "info@gosan.org")))));
}
Object.assign(window, {
  ArchivePage: ArchivePage,
  AboutPage: AboutPage,
  ContactPage: ContactPage,
  ImpressumPage: ImpressumPage,
  DatenschutzPage: DatenschutzPage,
  SupportPage: SupportPage
});