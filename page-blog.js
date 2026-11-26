"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
/* Gosan Weblog — گاه‌نوشت (the journal / blog).

   These pieces live ONLY on the website: they are never printed in the
   گاهنامه, so they are deliberately kept OUT of GOSAN_POSTS. Nothing here
   reaches the issue pages, the archive, or the «دفتر نخست» menu.

   A گاه‌نوشت has its own look, unlike an essay: a card on the list, a journal
   page with a cover photograph, one «like» with its count, and readers' comments
   (EIC, 20 Oct 2026). No sign-off at the end: the byline under the title already
   carries the writer's name and the date (EIC, 20 Oct 2026).

   To add an entry, put a new object at the TOP of GOSAN_BLOG:

     {
       slug: 'a-url-safe-slug',
       title: 'عنوان گاه‌نوشت',
       author: 'نام نویسنده',
       date: '۲۸ مهر ۲۵۸۵ (۱۴۰۵)',        // imperial year always with its solar year
       excerpt: 'یکی دو جمله برای فهرست.',     // one of the writer's own sentences, verbatim
       tags: ['باستان‌شناسی'],             // fields: shown on the card and the page, filter the
                                          // list (/blog?tag=…) and feed the site search;
                                          // an in-memoriam post also carries 'یادمان'
       cover: { image: 'uploads/blog/x.jpg', credit: '…' },   // caption and alt follow the title
                                          // (its name, without the years) — the page, the
                                          // photograph and the share thumbnail always name
                                          // him or her alike; give caption only for a picture
                                          // that is not of the post's subject
       body: [                            // one entry per block, in reading order:
         'بند …',                         //   a string is a paragraph
         { lines: ['سطر…', 'سطر…'] },     //   a paragraph the author set as separate lines
         { image: 'uploads/x.jpeg', alt: '…', caption: 'تصویر ۱. … منبع: … .' },
       ],
       notes: ['[۱] …'],                  // the author's own apparatus, reproduced as
                                          // written; *…* is italic, bare URLs are linked
     }

   شیوه‌نامه: every image needs a caption carrying a short description and the
   source or the name of the rights holder.

   Likes and comments live in the analytics Worker's database
   (tools/analytics-worker/journal.js). No comment is shown before the editorial
   desk approves it at https://gosan-analytics.gosan.workers.dev/moderate.
*/

var GOSAN_BLOG = [{
  slug: 'yousef-majidzadeh',
  title: 'دکتر یوسف مجیدزاده (۱۳۱۵–۱۴۰۵)',
  author: 'احسان شواربی',
  date: '۲۸ مهر ۲۵۸۵ (۱۴۰۵)',
  kicker: 'در یاد',
  /* the subtitle is one of the writer's own sentences, verbatim (EIC, 20 Oct 2026) */
  excerpt: 'این یادداشت در سوگ زنده‌یاد دکتر یوسف مجیدزاده، باستان‌شناس برجستۀ ایرانی، نوشته شده است.',
  tags: ['یادمان', 'باستان‌شناسی', 'مردم‌شناسی'],
  /* CREDIT PENDING — the photograph came without a source and circulates uncredited in the
     Iranian press reports of his death (20 Oct 2026); the EIC supplies it before publishing */
  cover: {
    image: 'uploads/blog/majidzadeh.jpg',
    credit: ''
  },
  body: ['امروز یکی دیگر از چهره‌های برجستۀ باستان‌شناسی ایران از میان ما رفت. زنده‌یاد دکتر یوسف مجیدزاده را بسیاری با کاوش‌هایش در کُنارصندل جیرفت، تپۀ ازبکی هشتگرد و تپۀ قبرستان در دشت قزوین می‌شناسند. اما دامنۀ علایق پژوهشی او بسیار فراتر از اینها بود.', 'مجیدزاده فعالیت پژوهشی خود را در اواخر دهۀ ۱۳۳۰ در ادارۀ کل موزه‌ها و فرهنگ عامۀ وزارت فرهنگ، زیر نظر دکتر صادق کیا، آغاز کرد. در همان سال‌ها، برای انجام پژوهش‌های مردم‌شناختی به نواحی گوناگون غرب ایران اعزام شد تا آداب و رسوم مردمان آن مناطق را ثبت و مستندسازی کند؛ از جمله ایل زرزا در اطراف اشنویه و نیز شماری از طوایف لرستان. نتایج این پژوهش‌ها در چند مقاله در مجلۀ <i>هنر و مردم</i> منتشر شد.', 'همین آشنایی با فرهنگ‌های بومی مردمان ایران و شیوه‌های زندگی آنان بود که علاقۀ او را به شناخت فرهنگ مردمان در گذشته‌های دور برانگیخت و او را به سوی باستان‌شناسی کشاند. مجیدزاده تحصیل در رشتۀ باستان‌شناسی را در دانشگاه تهران آغاز کرد و شاگرد اول دورۀ خود شد. سپس با بورس دولتی به امریکا رفت و در سال ۱۳۵۵ تحصیلات خود را در دانشگاه شیکاگو به پایان رساند. رسالۀ دکتری او به فرهنگ‌های پیشاتاریخی در مرکز فلات ایران می‌پردازد. او در همان سال به ایران بازگشت و استادیار دانشگاه تهران شد.', 'پس از فاجعۀ ۱۳۵۷، جماعت انقلابی در پی آن بودند که رشتۀ باستان‌شناسی را، که از نظر آنان مروج طاغوت، امپریالیسم و اسلام‌ستیزی بود، به‌کلی از برنامۀ دانشگاه‌ها حذف کنند. مجیدزاده یکی از کسانی بود که ایستادگی کرد و برای پیشگیری از این کار بسیار کوشید. به یاد دارم یکی از استادان نقل می‌کرد که مجیدزاده حتی به دیدار خمینی رفت و تلاش کرد با آیه و حدیث به او بفهماند که میراث گذشتگان باید حفظ و مطالعه شود. سرانجام، تلاش‌های او مؤثر افتاد و رشتۀ باستان‌شناسی نجات یافت. اما خودِ او چند سال بعد قربانی پرونده‌سازی و پاکسازی‌های انقلابی شد. به او اتهام ضدانقلاب زدند و از دانشگاه تهران اخراجش کردند.', 'مجیدزاده باقی عمر خود را در فرانسه گذراند، ولی پیوندش با باستان‌شناسی ایران گسسته نشد. در مقاطعی به ایران بازگشت و کاوش‌های تپۀ ازبکی و کُنارصندل جیرفت را سرپرستی کرد؛ کاوش‌هایی که دستاوردهای پژوهشی بسیار داشت. میراث علمی مجیدزاده حدود بیست جلد کتاب و ده‌ها مقالۀ پژوهشی ارزشمند به زبان‌های فارسی، انگلیسی و فرانسوی در زمینه‌های گوناگون باستان‌شناسی ایران است. از میان آثار ماندگار او می‌توان به این کتاب‌ها اشاره کرد: <i>آغاز شهرنشینی در ایران</i> (۱۳۶۸)، <i>تاریخ و تمدن ایلام</i> (۱۳۷۰)، <i>تاریخ و تمدن بین‌النهرین</i> (در سه جلد، ۱۳۷۶–۱۳۷۹)، <i>جیرفت: کهنترین تمدن شرق</i> (۱۳۸۲)، <i>کاوش‌های محوطۀ باستانی ازبکی</i> (در دو جلد، ۱۳۸۹)، <i>کاوش‌های تپه قبرستان</i> (۱۳۹۶) و <i>باستان‌شناسی حوضۀ هلیل‌رود: جیرفت</i> (در سه جلد، ۱۳۹۸).', 'یادش گرامی.']
}];

/* likes and comments: the analytics Worker (tools/analytics-worker/journal.js) */
var GOSAN_JOURNAL_ENDPOINT = 'https://gosan-analytics.gosan.workers.dev';
var faNum = function faNum(n) {
  return Number(n || 0).toLocaleString('fa-IR');
};

/* a comment's date in the house form: imperial year with its solar year, «۲۸ مهر ۲۵۸۵ (۱۴۰۵)» */
function blogDateOf(ts) {
  try {
    var parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).formatToParts(new Date(ts * 1000));
    var get = function get(t) {
      return (parts.find(function (p) {
        return p.type === t;
      }) || {}).value || '';
    };
    var solar = parseInt(get('year').replace(/[۰-۹]/g, function (d) {
      return '۰۱۲۳۴۵۶۷۸۹'.indexOf(d);
    }), 10);
    return "".concat(get('day'), " ").concat(get('month'), " ").concat(faNum(solar + 1180).replace(/٬/g, ''), " (").concat(get('year'), ")");
  } catch (e) {
    return '';
  }
}
function blogReadMinutes(post) {
  var words = (post.body || []).map(function (b) {
    return typeof b === 'string' ? b : (b.lines || []).join(' ');
  }).join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
function blogStore(key, value) {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    if (value === null) window.localStorage.removeItem(key);else window.localStorage.setItem(key, value);
  } catch (e) {/* private window or blocked storage: the page still works */}
  return null;
}

/* one fetch per post, shared by the card and the page */
var blogStatsCache = {};
function useBlogStats(slug) {
  var _React$useState = React.useState(blogStatsCache[slug] || null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    stats = _React$useState2[0],
    setStats = _React$useState2[1];
  var reload = React.useCallback(function () {
    fetch("".concat(GOSAN_JOURNAL_ENDPOINT, "/j/post?s=").concat(encodeURIComponent(slug))).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (d) {
      if (d) {
        blogStatsCache[slug] = d;
        setStats(d);
      }
    })["catch"](function () {});
  }, [slug]);
  React.useEffect(function () {
    reload();
  }, [reload]);
  return [stats, setStats, reload];
}

/* ---------- icons (line, 1.6 stroke, currentColor) ---------- */
function IconHeart(_ref) {
  var filled = _ref.filled;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "20",
    height: "20",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20.3s-7.6-4.6-7.6-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.6 2.5c0 5.6-7.6 10.2-7.6 10.2z",
    fill: filled ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}
function IconComment() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "19",
    height: "19",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 5.5h15v10h-8.2L7 19.2v-3.7H4.5z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}
function IconEye() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.8 12s3.4-6.2 9.2-6.2 9.2 6.2 9.2 6.2-3.4 6.2-9.2 6.2S2.8 12 2.8 12z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }));
}
function IconLink() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }));
}

/* The author's notes are reproduced exactly as written; the only thing added
   is a link around a bare URL so the reader can follow it. */
var BLOG_URL_RE = /(https?:\/\/[^\s]+)/g;
var BLOG_ITALIC_RE = /\*([^*]+)\*/g;

/* «نام کتاب‌ها و مجله‌ها به صورت ایتالیک» — the *…* in a note marks the title
   of the publication; a bare URL becomes a link. Nothing else is touched. */
function BlogNoteText(_ref2) {
  var text = _ref2.text;
  var out = [];
  String(text).split(BLOG_URL_RE).forEach(function (chunk, ci) {
    if (ci % 2 === 1) {
      out.push(/*#__PURE__*/React.createElement("a", {
        key: "u".concat(ci),
        href: chunk,
        target: "_blank",
        rel: "noopener noreferrer",
        dir: "ltr"
      }, chunk));
      return;
    }
    chunk.split(BLOG_ITALIC_RE).forEach(function (piece, pi) {
      if (!piece) return;
      out.push(pi % 2 === 1 ? /*#__PURE__*/React.createElement("em", {
        key: "i".concat(ci, "-").concat(pi)
      }, piece) : /*#__PURE__*/React.createElement(React.Fragment, {
        key: "t".concat(ci, "-").concat(pi)
      }, piece));
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, out);
}
function BlogFigure(_ref3) {
  var block = _ref3.block;
  return /*#__PURE__*/React.createElement("figure", {
    className: "bj-figure",
    style: block.width ? {
      width: block.width
    } : null
  }, /*#__PURE__*/React.createElement("img", {
    src: block.image,
    alt: block.alt || ''
  }), block.caption ? /*#__PURE__*/React.createElement("figcaption", null, block.caption) : null);
}

/* a paragraph may carry the desk's bold/italic (<i>, <b>, <em>, <strong>); nothing else is markup */
var BLOG_EMPH_RE = /<(\/?)(i|b|em|strong)>/g;
function BlogInline(_ref4) {
  var text = _ref4.text;
  var s = String(text);
  if (!BLOG_EMPH_RE.test(s)) return s;
  BLOG_EMPH_RE.lastIndex = 0;
  var root = {
      kids: []
    },
    stack = [root];
  var last = 0,
    m,
    k = 0;
  while (m = BLOG_EMPH_RE.exec(s)) {
    if (m.index > last) stack[stack.length - 1].kids.push(s.slice(last, m.index));
    last = BLOG_EMPH_RE.lastIndex;
    if (!m[1]) {
      var n = {
        tag: m[2] === 'b' || m[2] === 'strong' ? 'strong' : 'em',
        kids: []
      };
      stack[stack.length - 1].kids.push(n);
      stack.push(n);
    } else if (stack.length > 1) stack.pop();
  }
  if (last < s.length) stack[stack.length - 1].kids.push(s.slice(last));
  var _draw = function draw(n) {
    return n.kids.map(function (c) {
      return typeof c === 'string' ? c : React.createElement(c.tag, {
        key: k++
      }, _draw(c));
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, _draw(root));
}
function BlogBlock(_ref5) {
  var block = _ref5.block;
  if (typeof block === 'string') return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(BlogInline, {
    text: block
  }));
  if (block && block.image) return /*#__PURE__*/React.createElement(BlogFigure, {
    block: block
  });
  if (block && block.lines) {
    return /*#__PURE__*/React.createElement("p", null, block.lines.map(function (line, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, i > 0 ? /*#__PURE__*/React.createElement("br", null) : null, /*#__PURE__*/React.createElement(BlogInline, {
        text: line
      }));
    }));
  }
  return null;
}
function BlogNotes(_ref6) {
  var notes = _ref6.notes;
  if (!notes || notes.length === 0) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "bj-notes"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display"
  }, "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A\u200C\u0647\u0627 \u0648 \u0645\u0646\u0627\u0628\u0639"), notes.map(function (note, i) {
    return /*#__PURE__*/React.createElement("p", {
      key: i
    }, /*#__PURE__*/React.createElement(BlogNoteText, {
      text: note
    }));
  }));
}

/* the name a post's title gives, without its years: «دکتر یوسف مجیدزاده (۱۳۱۵–۱۴۰۵)» → «دکتر یوسف مجیدزاده».
   The cover's caption and alt default to it (tools/publish-to-public.py blog_card does the same). */
function blogTitleName(post) {
  return String(post.title || '').replace(/\s*\([^()]*\)\s*$/, '').trim();
}
function blogBySlug(slug) {
  return GOSAN_BLOG.find(function (p) {
    return p.slug === slug;
  }) || null;
}

/* every field in use, in the order of first appearance, with its count */
function blogAllTags() {
  var seen = new Map();
  GOSAN_BLOG.forEach(function (p) {
    return (p.tags || []).forEach(function (t) {
      return seen.set(t, (seen.get(t) || 0) + 1);
    });
  });
  return _toConsumableArray(seen.entries());
}
function blogTagHref(tag) {
  return "/blog?tag=".concat(encodeURIComponent(tag));
}
function blogCurrentTag() {
  try {
    return new URLSearchParams(window.location.search).get('tag') || '';
  } catch (e) {
    return '';
  }
}
function BlogTags(_ref7) {
  var tags = _ref7.tags,
    _ref7$className = _ref7.className,
    className = _ref7$className === void 0 ? '' : _ref7$className;
  if (!tags || tags.length === 0) return null;
  return /*#__PURE__*/React.createElement("ul", {
    className: "bj-tags ".concat(className),
    "aria-label": "\u0632\u0645\u06CC\u0646\u0647\u200C\u0647\u0627"
  }, tags.map(function (t) {
    return /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("a", {
      className: "bj-tag",
      href: blogTagHref(t)
    }, t));
  }));
}
function BlogEmpty() {
  return /*#__PURE__*/React.createElement("p", {
    className: "bj-empty"
  }, "\u0647\u0646\u0648\u0632 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u06CC \u0645\u0646\u062A\u0634\u0631 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A.");
}

/* ---------- the list: one card per گاه‌نوشت; the newest one lies across the row ---------- */
function BlogCard(_ref8) {
  var post = _ref8.post,
    wide = _ref8.wide;
  var _useBlogStats = useBlogStats(post.slug),
    _useBlogStats2 = _slicedToArray(_useBlogStats, 1),
    stats = _useBlogStats2[0];
  var href = "/blog/".concat(post.slug);
  return /*#__PURE__*/React.createElement("article", {
    className: "bj-card".concat(wide ? ' bj-card--wide' : '')
  }, post.cover ? /*#__PURE__*/React.createElement("a", {
    className: "bj-card-media",
    href: href,
    tabIndex: -1,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: post.cover.image,
    alt: "",
    loading: "lazy"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "bj-card-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bj-card-kicker"
  }, post.kicker ? /*#__PURE__*/React.createElement("span", {
    className: "bj-chip"
  }, post.kicker) : null, /*#__PURE__*/React.createElement("span", null, post.date)), /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display bj-card-title"
  }, /*#__PURE__*/React.createElement("a", {
    href: href
  }, post.title)), post.excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "bj-card-excerpt"
  }, /*#__PURE__*/React.createElement(BlogInline, {
    text: post.excerpt
  })) : null, /*#__PURE__*/React.createElement(BlogTags, {
    tags: post.tags,
    className: "bj-tags--card"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bj-card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bj-card-author"
  }, post.author), /*#__PURE__*/React.createElement("span", {
    className: "bj-card-counts"
  }, /*#__PURE__*/React.createElement("span", {
    title: "\u0628\u0627\u0632\u062F\u06CC\u062F"
  }, /*#__PURE__*/React.createElement(IconEye, null), faNum(stats ? stats.views : 0)), /*#__PURE__*/React.createElement("span", {
    title: "\u067E\u0633\u0646\u062F"
  }, /*#__PURE__*/React.createElement(IconHeart, {
    filled: false
  }), faNum(stats ? stats.likes : 0)), /*#__PURE__*/React.createElement("span", {
    title: "\u062F\u06CC\u062F\u06AF\u0627\u0647"
  }, /*#__PURE__*/React.createElement(IconComment, null), faNum(stats ? stats.comments.length : 0))))));
}

/* the router only re-renders when the PATH changes; /blog → /blog?tag=… keeps the path,
   so the list listens for the move itself */
function useBlogTag() {
  var _React$useState3 = React.useState(blogCurrentTag),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    tag = _React$useState4[0],
    setTag = _React$useState4[1];
  React.useEffect(function () {
    var on = function on() {
      return setTag(blogCurrentTag());
    };
    window.addEventListener('hashchange', on);
    return function () {
      return window.removeEventListener('hashchange', on);
    };
  }, []);
  return tag;
}
function BlogPage() {
  var tag = useBlogTag();
  var all = blogAllTags();
  var posts = tag ? GOSAN_BLOG.filter(function (p) {
    return (p.tags || []).includes(tag);
  }) : GOSAN_BLOG;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A",
    className: "bj"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "JOURNAL // G\u014CS\u0100N",
    title: "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A",
    lede: "\u062A\u0623\u0645\u0644\u0627\u062A \u0631\u0648\u0632 \u2014 \u0622\u0646\u0686\u0647 \u0645\u06CC\u0627\u0646 \u062F\u0648 \u0634\u0645\u0627\u0631\u0647 \u0645\u06CC\u200C\u06AF\u0630\u0631\u062F"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap bj-list-wrap"
  }, all.length ? /*#__PURE__*/React.createElement("nav", {
    className: "bj-filter",
    "aria-label": "\u0632\u0645\u06CC\u0646\u0647\u200C\u0647\u0627"
  }, /*#__PURE__*/React.createElement("a", {
    className: "bj-filter-item".concat(tag ? '' : ' is-on'),
    href: "/blog"
  }, "\u0647\u0645\u0647 ", /*#__PURE__*/React.createElement("span", null, faNum(GOSAN_BLOG.length))), all.map(function (_ref9) {
    var _ref0 = _slicedToArray(_ref9, 2),
      t = _ref0[0],
      n = _ref0[1];
    return /*#__PURE__*/React.createElement("a", {
      key: t,
      className: "bj-filter-item".concat(t === tag ? ' is-on' : ''),
      href: blogTagHref(t)
    }, t, " ", /*#__PURE__*/React.createElement("span", null, faNum(n)));
  })) : null, posts.length === 0 ? tag ? /*#__PURE__*/React.createElement("p", {
    className: "bj-empty"
  }, "\u062F\u0631 \u0627\u06CC\u0646 \u0632\u0645\u06CC\u0646\u0647 \u0647\u0646\u0648\u0632 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u06CC \u0646\u06CC\u0633\u062A.") : /*#__PURE__*/React.createElement(BlogEmpty, null) : /*#__PURE__*/React.createElement("div", {
    className: "bj-grid"
  }, posts.map(function (p, i) {
    return /*#__PURE__*/React.createElement(Reveal, {
      key: p.slug,
      delay: i % 3 * 110,
      className: i === 0 ? 'bj-grid-wide' : ''
    }, /*#__PURE__*/React.createElement(BlogCard, {
      post: p,
      wide: i === 0
    }));
  }))));
}

/* ---------- the like ---------- */
function BlogLike(_ref1) {
  var slug = _ref1.slug,
    stats = _ref1.stats,
    setStats = _ref1.setStats;
  var key = "gosan-like:".concat(slug);
  var _React$useState5 = React.useState(blogStore(key) === '1'),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    liked = _React$useState6[0],
    setLiked = _React$useState6[1];
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    pulse = _React$useState8[0],
    setPulse = _React$useState8[1];
  var count = stats ? stats.likes : 0;
  var toggle = function toggle() {
    var on = !liked;
    setLiked(on);
    blogStore(key, on ? '1' : null);
    if (on) {
      setPulse(true);
      setTimeout(function () {
        return setPulse(false);
      }, 600);
    }
    setStats(_objectSpread(_objectSpread({}, stats || {
      comments: []
    }), {}, {
      likes: Math.max(0, count + (on ? 1 : -1))
    }));
    fetch("".concat(GOSAN_JOURNAL_ENDPOINT, "/j/like"), {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        s: slug,
        on: on
      })
    }).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (d) {
      if (d && typeof d.likes === 'number') {
        blogStatsCache[slug] = _objectSpread(_objectSpread({}, blogStatsCache[slug] || {
          comments: []
        }), {}, {
          likes: d.likes
        });
        setStats(function (s) {
          return _objectSpread(_objectSpread({}, s || {
            comments: []
          }), {}, {
            likes: d.likes
          });
        });
      }
    })["catch"](function () {});
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bj-like".concat(liked ? ' is-on' : '').concat(pulse ? ' is-pulse' : ''),
    onClick: toggle,
    "aria-pressed": liked,
    "aria-label": liked ? 'پس گرفتن پسند' : 'پسندیدن'
  }, /*#__PURE__*/React.createElement(IconHeart, {
    filled: liked
  }), /*#__PURE__*/React.createElement("span", {
    className: "bj-like-n"
  }, faNum(count)), /*#__PURE__*/React.createElement("span", {
    className: "bj-like-label"
  }, liked ? 'پسندیدید' : 'پسندیدن'));
}
function BlogCopyLink() {
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    done = _React$useState0[0],
    setDone = _React$useState0[1];
  var copy = function copy() {
    var url = window.location.href.split('#')[0];
    var ok = function ok() {
      setDone(true);
      setTimeout(function () {
        return setDone(false);
      }, 1800);
    };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(ok)["catch"](function () {});
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bj-act",
    onClick: copy,
    "aria-label": "\u0631\u0648\u0646\u0648\u0634\u062A \u067E\u06CC\u0648\u0646\u062F"
  }, /*#__PURE__*/React.createElement(IconLink, null), /*#__PURE__*/React.createElement("span", {
    className: "bj-act-word"
  }, done ? 'پیوند رونوشت شد' : 'رونوشت پیوند'));
}

/* ---------- comments ---------- */
function BlogComment(_ref10) {
  var c = _ref10.c;
  return /*#__PURE__*/React.createElement("li", {
    className: "bj-comment".concat(c.mine ? ' bj-comment--mine' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "bj-comment-mono",
    "aria-hidden": "true"
  }, (c.name || '؟').trim().charAt(0)), /*#__PURE__*/React.createElement("div", {
    className: "bj-comment-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bj-comment-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bj-comment-name"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "bj-comment-date"
  }, blogDateOf(c.ts)), c.mine ? /*#__PURE__*/React.createElement("span", {
    className: "bj-comment-pending"
  }, "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0623\u06CC\u06CC\u062F \xB7 \u062A\u0646\u0647\u0627 \u0634\u0645\u0627 \u0622\u0646 \u0631\u0627 \u0645\u06CC\u200C\u0628\u06CC\u0646\u06CC\u062F") : null), /*#__PURE__*/React.createElement("p", {
    className: "bj-comment-text"
  }, c.text), c.reply ? /*#__PURE__*/React.createElement("div", {
    className: "bj-reply"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bj-reply-head"
  }, "\u067E\u0627\u0633\u062E \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("p", null, c.reply)) : null));
}
var BJ_FORM_MSG = {
  sending: 'در حال فرستادن…',
  ok: 'سپاس. دیدگاه شما رسید و پس از بازبینی تحریریه منتشر می‌شود.',
  limit: 'امروز بیش از این نمی‌توان دیدگاه فرستاد. لطفاً فردا دوباره بکوشید.',
  fail: 'فرستادن دیدگاه ممکن نشد. لطفاً دوباره بکوشید یا به info@gosan.org بنویسید.'
};
function BlogCommentForm(_ref11) {
  var post = _ref11.post,
    onSent = _ref11.onSent;
  var _React$useState1 = React.useState(blogStore('gosan-comment-name') || ''),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    name = _React$useState10[0],
    setName = _React$useState10[1];
  var _React$useState11 = React.useState(''),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    text = _React$useState12[0],
    setText = _React$useState12[1];
  var _React$useState13 = React.useState(''),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    state = _React$useState14[0],
    setState = _React$useState14[1];
  var hp = React.useRef(null);
  var submit = function submit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim() || state === 'sending') return;
    setState('sending');
    blogStore('gosan-comment-name', name.trim());
    fetch("".concat(GOSAN_JOURNAL_ENDPOINT, "/j/comment"), {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        s: post.slug,
        name: name,
        text: text,
        website: hp.current ? hp.current.value : ''
      })
    }).then(function (r) {
      if (r.status === 429) {
        setState('limit');
        return;
      }
      if (!r.ok) {
        setState('fail');
        return;
      }
      setState('ok');
      setText('');
      if (onSent) onSent({
        name: name.trim(),
        text: text.trim(),
        ts: Math.floor(Date.now() / 1000)
      });
      /* a note to the editorial inbox, so the desk knows a comment is waiting */
      if (typeof GOSAN_SUBSCRIBE_ENDPOINT !== 'undefined' && GOSAN_SUBSCRIBE_ENDPOINT) {
        fetch(GOSAN_SUBSCRIBE_ENDPOINT, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            kind: 'comment',
            name: name,
            page: window.location.href,
            subject: "\u062F\u06CC\u062F\u06AF\u0627\u0647 \u062A\u0627\u0632\u0647 \u062F\u0631 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A \u2014 ".concat(post.title),
            message: "".concat(text, "\n\n\u2014 \u0628\u0631\u0627\u06CC \u0627\u0646\u062A\u0634\u0627\u0631 \u06CC\u0627 \u067E\u0646\u0647\u0627\u0646 \u06A9\u0631\u062F\u0646: ").concat(GOSAN_JOURNAL_ENDPOINT, "/moderate")
          })
        })["catch"](function () {});
      }
    })["catch"](function () {
      return setState('fail');
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    className: "bj-form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("h3", {
    className: "gsn-display bj-form-title"
  }, "\u062F\u06CC\u062F\u06AF\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F"), /*#__PURE__*/React.createElement("label", {
    className: "bj-field"
  }, /*#__PURE__*/React.createElement("span", null, "\u0646\u0627\u0645"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    maxLength: 80,
    required: true,
    autoComplete: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", {
    className: "bj-field"
  }, /*#__PURE__*/React.createElement("span", null, "\u062F\u06CC\u062F\u06AF\u0627\u0647"), /*#__PURE__*/React.createElement("textarea", {
    rows: 5,
    value: text,
    maxLength: 3000,
    required: true,
    onChange: function onChange(e) {
      return setText(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("input", {
    ref: hp,
    type: "text",
    name: "website",
    tabIndex: -1,
    autoComplete: "off",
    className: "bj-hp",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bj-form-foot"
  }, /*#__PURE__*/React.createElement("p", {
    className: "bj-form-note"
  }, "\u062F\u06CC\u062F\u06AF\u0627\u0647\u200C\u0647\u0627 \u067E\u0633 \u0627\u0632 \u0628\u0627\u0632\u0628\u06CC\u0646\u06CC \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647\u060C \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0646\u0627\u0645\u06CC \u06A9\u0647 \u0645\u06CC\u200C\u0646\u0648\u06CC\u0633\u06CC\u062F\u060C \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F\u061B \u0646\u0627\u0645 \u0645\u0633\u062A\u0639\u0627\u0631 \u0646\u06CC\u0632 \u067E\u0630\u06CC\u0631\u0641\u062A\u0647 \u0627\u0633\u062A. \u0646\u0634\u0627\u0646\u06CC \u0627\u06CC\u0645\u06CC\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0646\u0645\u06CC\u200C\u0634\u0648\u062F. \u0634\u0631\u062D \u0628\u06CC\u0634\u062A\u0631 \u062F\u0631 ", /*#__PURE__*/React.createElement("a", {
    href: "/datenschutz"
  }, "\u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627"), "."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bj-submit",
    disabled: state === 'sending'
  }, "\u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647")), state ? /*#__PURE__*/React.createElement("p", {
    className: "bj-form-msg is-".concat(state),
    role: "status"
  }, BJ_FORM_MSG[state]) : null);
}

/* A reader's own comments, kept in their browser until the desk approves them: they see what they
   sent, under the form, marked as waiting. Nobody else sees it before approval. */
function blogMine(slug, list) {
  var key = "gosan-mine:".concat(slug);
  if (list === undefined) {
    try {
      return JSON.parse(blogStore(key) || '[]');
    } catch (e) {
      return [];
    }
  }
  blogStore(key, list.length ? JSON.stringify(list.slice(-10)) : null);
  return list;
}

/* ---------- the edit desk ----------
   The desk (editor.html) opens a گاه‌نوشت as «blog-<slug>» on this page, after staging its payload
   (desk/blog-<slug>.json) in sessionStorage. The page then renders from the payload alone — the
   entry need not be on the public site the desk is served from — with the desk's current body as
   the <article> it edits and the subtitle as its چکیده. Inert when nothing is staged. */
function blogEsc(t) {
  return String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function blogDeskPayload(slug) {
  /* only inside the desk's frame: the staged copy lingers in the tab's sessionStorage afterwards */
  if (window.self === window.top) return null;
  return typeof deskPayload === 'function' ? deskPayload('blog-' + slug) : null;
}

/* ---------- the post page ---------- */
function BlogPostView(_ref12) {
  var slug = _ref12.slug;
  var staged = blogDeskPayload(slug);
  var post = staged ? _objectSpread(_objectSpread(_objectSpread({}, blogBySlug(slug) || {}), staged.post), {}, {
    slug: slug
  }) : blogBySlug(slug);
  var deskBody = staged && staged.override ? staged.override.body : null;
  /* the desk saves title + subtitle as one field (its «summary»): <h1 class="bj-title"> + <p class="bj-dek">.
     An older draft may hold the subtitle alone; the title then comes from the post. */
  var deskHead = staged && staged.override && staged.override.summary ? /bj-title/.test(staged.override.summary) ? staged.override.summary : '<h1 class="gsn-display bj-title">' + blogEsc(post.title) + '</h1><p class="bj-dek">' + staged.override.summary + '</p>' : null;
  var _useBlogStats3 = useBlogStats(slug || ''),
    _useBlogStats4 = _slicedToArray(_useBlogStats3, 2),
    stats = _useBlogStats4[0],
    setStats = _useBlogStats4[1];
  var _React$useState15 = React.useState(function () {
      return blogMine(slug || '');
    }),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    mine = _React$useState16[0],
    setMine = _React$useState16[1];
  if (!post) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A",
      className: "bj"
    }, /*#__PURE__*/React.createElement(PageTitle, {
      technical: "JOURNAL // G\u014CS\u0100N",
      title: "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A"
    }), /*#__PURE__*/React.createElement("div", {
      className: "wrap",
      style: {
        paddingBottom: '5rem'
      }
    }, /*#__PURE__*/React.createElement(BlogEmpty, null), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: "blog-more",
      href: "/blog"
    }, "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A"))));
  }
  var comments = stats ? stats.comments : [];
  /* once the desk approves one, the published copy takes its place */
  var waiting = mine.filter(function (m) {
    return !comments.some(function (c) {
      return c.name === m.name && c.text === m.text;
    });
  });
  var shown = [].concat(_toConsumableArray(waiting.map(function (m, i) {
    return _objectSpread(_objectSpread({}, m), {}, {
      id: "mine-".concat(i),
      mine: true
    });
  }).reverse()), _toConsumableArray(comments.slice().reverse()));
  var addMine = function addMine(c) {
    return setMine(blogMine(post.slug, [].concat(_toConsumableArray(waiting), [c])));
  };
  var photo = typeof AUTHOR_PHOTOS !== 'undefined' ? AUTHOR_PHOTOS[post.author] : null;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A",
    className: "bj bj-post".concat(staged ? ' bj-desk' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "bj-head"
  }, post.kicker ? /*#__PURE__*/React.createElement("span", {
    className: "bj-chip"
  }, post.kicker) : null, deskHead ? /*#__PURE__*/React.createElement("div", {
    className: "bj-headline",
    dangerouslySetInnerHTML: {
      __html: deskHead
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "bj-headline"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "gsn-display bj-title"
  }, post.title), post.excerpt ? /*#__PURE__*/React.createElement("p", {
    className: "bj-dek"
  }, /*#__PURE__*/React.createElement(BlogInline, {
    text: post.excerpt
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "bj-byline"
  }, photo ? /*#__PURE__*/React.createElement(AuthorAvatar, {
    name: post.author
  }) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "bj-byline-name"
  }, post.author), /*#__PURE__*/React.createElement("span", {
    className: "bj-byline-meta"
  }, post.date, " \xB7 ", faNum(blogReadMinutes(post)), " \u062F\u0642\u06CC\u0642\u0647 \u062E\u0648\u0627\u0646\u062F\u0646", stats && stats.views ? /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", faNum(stats.views), " \u0628\u0627\u0632\u062F\u06CC\u062F") : null)))), post.cover ? /*#__PURE__*/React.createElement("figure", {
    className: "bj-cover"
  }, /*#__PURE__*/React.createElement("img", {
    src: post.cover.image,
    alt: post.cover.alt || blogTitleName(post)
  }), post.cover.caption || blogTitleName(post) || post.cover.credit ? /*#__PURE__*/React.createElement("figcaption", null, post.cover.caption || blogTitleName(post), post.cover.credit ? /*#__PURE__*/React.createElement("span", {
    className: "bj-credit"
  }, "\u0639\u06A9\u0633: ", post.cover.credit) : null) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "bj-column"
  }, deskBody ? /*#__PURE__*/React.createElement("article", {
    className: "bj-body",
    dangerouslySetInnerHTML: {
      __html: deskBody
    }
  }) : /*#__PURE__*/React.createElement("article", {
    className: "bj-body"
  }, (post.body || []).map(function (block, i) {
    return /*#__PURE__*/React.createElement(BlogBlock, {
      key: i,
      block: block
    });
  })), /*#__PURE__*/React.createElement(BlogNotes, {
    notes: post.notes
  }), /*#__PURE__*/React.createElement(BlogTags, {
    tags: post.tags,
    className: "bj-tags--post"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bj-bar"
  }, /*#__PURE__*/React.createElement(BlogLike, {
    slug: post.slug,
    stats: stats,
    setStats: setStats
  }), /*#__PURE__*/React.createElement("span", {
    className: "bj-act bj-act--static",
    title: "\u0634\u0645\u0627\u0631 \u062E\u0648\u0627\u0646\u0646\u062F\u06AF\u0627\u0646 \u0627\u06CC\u0646 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A"
  }, /*#__PURE__*/React.createElement(IconEye, null), /*#__PURE__*/React.createElement("span", null, faNum(stats ? stats.views : 0)), /*#__PURE__*/React.createElement("span", {
    className: "bj-act-word"
  }, "\u0628\u0627\u0632\u062F\u06CC\u062F")), /*#__PURE__*/React.createElement("a", {
    className: "bj-act",
    href: "#bj-comments"
  }, /*#__PURE__*/React.createElement(IconComment, null), /*#__PURE__*/React.createElement("span", null, faNum(comments.length)), /*#__PURE__*/React.createElement("span", {
    className: "bj-act-word"
  }, "\u062F\u06CC\u062F\u06AF\u0627\u0647")), /*#__PURE__*/React.createElement(BlogCopyLink, null)), /*#__PURE__*/React.createElement("div", {
    className: "bj-share"
  }, /*#__PURE__*/React.createElement(ShareRow, {
    post: post,
    url: GOSAN_SITE_BASE + 'blog/' + post.slug + '/'
  })), /*#__PURE__*/React.createElement("p", {
    className: "bj-back bj-back--after"
  }, /*#__PURE__*/React.createElement("a", {
    className: "blog-more",
    href: "/blog"
  }, "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A")), /*#__PURE__*/React.createElement("section", {
    className: "bj-comments",
    id: "bj-comments"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display bj-comments-title"
  }, "\u062F\u06CC\u062F\u06AF\u0627\u0647\u200C\u0647\u0627 ", comments.length ? /*#__PURE__*/React.createElement("span", null, faNum(comments.length)) : null), /*#__PURE__*/React.createElement(BlogCommentForm, {
    post: post,
    onSent: addMine
  }), shown.length ? /*#__PURE__*/React.createElement("ul", {
    className: "bj-comment-list"
  }, shown.map(function (c) {
    return /*#__PURE__*/React.createElement(BlogComment, {
      key: c.id,
      c: c
    });
  })) : /*#__PURE__*/React.createElement("p", {
    className: "bj-comments-empty"
  }, "\u0647\u0646\u0648\u0632 \u062F\u06CC\u062F\u06AF\u0627\u0647\u06CC \u0646\u0648\u0634\u062A\u0647 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A. \u0646\u062E\u0633\u062A\u06CC\u0646 \u062F\u06CC\u062F\u06AF\u0627\u0647 \u0631\u0627 \u0634\u0645\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F.")), /*#__PURE__*/React.createElement("p", {
    className: "bj-back"
  }, /*#__PURE__*/React.createElement("a", {
    className: "blog-more",
    href: "/blog"
  }, "\u0647\u0645\u0647\u0654 \u06AF\u0627\u0647\u200C\u0646\u0648\u0634\u062A\u200C\u0647\u0627"))));
}