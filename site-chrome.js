"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Gosan Weblog — site chrome: header (bilingual + EN/FA switch) + footer */

var NAV_ITEMS = [{
  fa: 'خانه',
  en: 'Home',
  href: '/'
}, {
  fa: 'گاه‌نوشت',
  en: 'Journal',
  href: '/blog'
}, {
  fa: 'بایگانی',
  en: 'Archive',
  href: '/archive'
}, {
  fa: 'دربارهٔ گوسان · تماس',
  en: 'About · Contact',
  href: '/about'
}
/* شیوه‌نامه is hidden from the nav for now (editor-in-chief, 24 Aug 2026).
   The page, its route and its title are all still in place — uncomment this
   single line to bring it back. Direct link: #/shivenameh */
// { fa: 'شیوه‌نامه', en: 'Style', href: '/shivenameh' },
];

/* «دفتر نخست» — one link to the issue's own page (IssuePage, page-issue.jsx):
   the complete issue to leaf through and what is in it. The archive is a page of
   its own, #/archive. The sections menu that used to open here was removed
   (editor-in-chief, 3 Oct 2026); the sections stay reachable from the archive's
   filters. `match` is what the address begins with on that page (#/issue alone
   lands there too). */
var ISSUE_MENU = {
  fa: 'دفتر نخست',
  en: 'Issue No. 1',
  href: '/issue/1',
  match: '/issue'
};
function NavIssueMenu(_ref) {
  var en = _ref.en,
    _ref$as = _ref.as,
    Tag = _ref$as === void 0 ? 'li' : _ref$as,
    linkClass = _ref.linkClass,
    _ref$active = _ref.active,
    active = _ref$active === void 0 ? false : _ref$active;
  var label = en ? ISSUE_MENU.en : ISSUE_MENU.fa;
  /* in a bar of plain links it is one more plain link, carrying that bar's class */
  if (linkClass) return /*#__PURE__*/React.createElement("a", {
    href: ISSUE_MENU.href,
    className: linkClass + (active ? ' is-active' : '')
  }, label);
  return /*#__PURE__*/React.createElement(Tag, {
    className: "nav-issue-li"
  }, /*#__PURE__*/React.createElement("a", {
    href: ISSUE_MENU.href,
    className: 'nav-issue' + (active ? ' is-active' : ''),
    style: {
      fontWeight: active ? 700 : 400,
      opacity: active ? 1 : 0.92
    }
  }, label));
}

/* ---- mobile ----------------------------------------------------------------
   The desktop nav is a single row that wraps into four lines on a phone, and
   its issue menu opens on hover, which a touch screen cannot do. Below 760px
   it is replaced by a slim bar — mark on the right, search and menu on the
   left — and a drawer that opens from the right with the sections expanded in
   place. Two separate components rather than one restyled: they behave
   differently, not merely at different sizes. The drawer itself is portalled to
   <body>: both bars are stacking contexts (sticky + z-index), and a fixed panel
   inside one of them would be painted under the calligraphy that sits above it. */
function MobileNav(_ref2) {
  var en = _ref2.en,
    isActive = _ref2.isActive;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var panel = React.useRef(null);
  React.useEffect(function () {
    var shut = function shut() {
      return setOpen(false);
    };
    window.addEventListener('hashchange', shut);
    return function () {
      return window.removeEventListener('hashchange', shut);
    };
  }, []);
  React.useEffect(function () {
    if (!open) return;
    /* the page behind must not scroll while the drawer is over it */
    var y = window.scrollY;
    document.body.classList.add('nav-locked');
    document.body.style.top = "-".concat(y, "px");
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    if (panel.current) panel.current.focus();
    return function () {
      document.body.classList.remove('nav-locked');
      document.body.style.top = '';
      window.scrollTo(0, y);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);
  var link = function link(href, label) {
    var extra = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      className: "mnav-link".concat(isActive(href) ? ' is-active' : '').concat(extra ? ' ' + extra : ''),
      onClick: function onClick() {
        return setOpen(false);
      }
    }, label);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mnav-controls"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mnav-icon",
    "aria-label": "\u062C\u0633\u062A\u062C\u0648",
    onClick: function onClick() {
      return window.dispatchEvent(new Event('gosan:search'));
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
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
  }))), /*#__PURE__*/React.createElement("button", {
    className: "mnav-icon mnav-burger".concat(open ? ' is-open' : ''),
    "aria-label": open ? 'بستن منو' : 'منو',
    "aria-expanded": open,
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))), ReactDOM.createPortal(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mnav-scrim".concat(open ? ' is-open' : ''),
    onClick: function onClick() {
      return setOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mnav-panel".concat(open ? ' is-open' : ''),
    ref: panel,
    tabIndex: -1,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": en ? 'Menu' : 'منو'
  }, /*#__PURE__*/React.createElement("div", {
    className: "mnav-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-gosan.png",
    alt: "\u06AF\u0648\u0633\u0627\u0646"
  }), /*#__PURE__*/React.createElement("span", null, en ? 'Year 1 · No. 1 · Mehregan 2585 (1405)' : 'سال ۱ · شمارهٔ ۱ · مهرگان ۲۵۸۵ (۱۴۰۵)')), /*#__PURE__*/React.createElement("button", {
    className: "mnav-close",
    "aria-label": en ? 'Close' : 'بستن',
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  })))), /*#__PURE__*/React.createElement("nav", {
    className: "mnav-body"
  }, link('/', en ? 'Home' : 'خانه'), /*#__PURE__*/React.createElement("a", {
    href: ISSUE_MENU.href,
    className: "mnav-link".concat(isActive(ISSUE_MENU.match) ? ' is-active' : ''),
    onClick: function onClick() {
      return setOpen(false);
    }
  }, en ? ISSUE_MENU.en : ISSUE_MENU.fa), NAV_ITEMS.filter(function (it) {
    return it.href !== '/';
  }).map(function (it) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.href
    }, link(it.href, en ? it.en : it.fa));
  })), /*#__PURE__*/React.createElement("div", {
    className: "mnav-foot"
  }, /*#__PURE__*/React.createElement("a", {
    className: "mnav-support",
    href: "/support",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, en ? 'Friends of Gōsān' : 'یاران گوسان'), /*#__PURE__*/React.createElement("a", {
    className: "mnav-think",
    href: "/thinktank"
  }, en ? 'The Gōsān Think Tank' : 'اندیشکدهٔ فرهنگ و هنر گوسان'), /*#__PURE__*/React.createElement("a", {
    className: "mnav-mail",
    href: "mailto:info@gosan.org"
  }, "info@gosan.org")))), document.body));
}
function SiteHeader(_ref3) {
  var active = _ref3.active,
    _ref3$lang = _ref3.lang,
    lang = _ref3$lang === void 0 ? 'fa' : _ref3$lang,
    onToggleLang = _ref3.onToggleLang;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    scrolled = _React$useState4[0],
    setScrolled = _React$useState4[1];
  var _React$useState5 = React.useState(function () {
      return window.gosanPath();
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    hash = _React$useState6[0],
    setHash = _React$useState6[1];
  React.useEffect(function () {
    var onScroll = function onScroll() {
      return setScrolled(window.scrollY > 24);
    };
    var onHash = function onHash() {
      return setHash(window.gosanPath());
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('hashchange', onHash);
    return function () {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);
  var en = lang === 'en';
  var isActive = function isActive(href) {
    return href === '/' ? hash === '' || hash === '/' || hash === '#' : hash.startsWith(href);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "site-header".concat(scrolled ? ' is-scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "nav-desktop",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-search",
    onClick: function onClick() {
      return window.dispatchEvent(new Event('gosan:search'));
    },
    "aria-label": "\u062C\u0633\u062A\u062C\u0648",
    title: "\u062C\u0633\u062A\u062C\u0648 ( / )"
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
  }))), /*#__PURE__*/React.createElement("ul", null, NAV_ITEMS.map(function (it) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.href
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      className: isActive(it.href) ? 'is-active' : '',
      style: {
        fontWeight: isActive(it.href) ? 700 : 400,
        opacity: isActive(it.href) ? 1 : 0.92
      }
    }, en ? it.en : it.fa)), it.href === '/' ? /*#__PURE__*/React.createElement(NavIssueMenu, {
      en: en,
      active: isActive(ISSUE_MENU.match)
    }) : null);
  }), /*#__PURE__*/React.createElement("li", {
    className: "nav-think-li"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/thinktank",
    className: "nav-think".concat(isActive('/thinktank') ? ' is-active' : '')
  }, en ? 'The Gōsān Think Tank' : 'اندیشکدهٔ فرهنگ و هنر گوسان')))), /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "header-mark",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-gosan.png",
    alt: "\u06AF\u0648\u0633\u0627\u0646",
    className: "header-logo",
    style: {
      height: '40px'
    }
  })), /*#__PURE__*/React.createElement(MobileNav, {
    en: en,
    isActive: isActive
  })));
}
function SiteFooter(_ref4) {
  var route = _ref4.route;
  if (route === 'thinktank') return null;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap foot-grid",
    style: {
      paddingTop: '3.5rem',
      paddingBottom: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-gosan.png",
    alt: "\u06AF\u0648\u0633\u0627\u0646",
    style: {
      height: '54px',
      marginBottom: '0.8rem'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 2.1,
      color: 'var(--grey-faint)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("i", null, "\u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"), " \u062F\u0631 \u067E\u06CC \u0622\u0646 \u0627\u0633\u062A \u06A9\u0647 \u063A\u0628\u0627\u0631 \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0631\u0627 \u0627\u0632 \u0635\u0641\u062D\u0647\u0654 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0648 \u0645\u06CC\u0631\u0627\u062B \u06A9\u0647\u0646 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0632\u062F\u0627\u06CC\u062F \u0648 \u06AF\u0648\u0634\u0647\u200C\u0647\u0627\u06CC \u0646\u0627\u0634\u0646\u0627\u062E\u062A\u0647\u0654 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0627\u0628\u0632\u0627\u0631 \u067E\u0698\u0648\u0647\u0634 \u0648 \u0646\u0642\u062F \u0628\u06A9\u0627\u0648\u062F \u0648 \u0628\u0634\u0646\u0627\u0633\u062F \u0648 \u0631\u0648\u0627\u06CC\u062A \u06A9\u0646\u062F.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      color: 'var(--white)',
      fontSize: '1rem',
      margin: '0 0 1rem',
      fontWeight: 700
    }
  }, "\u0628\u062E\u0634\u200C\u0647\u0627"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '0.55rem',
      fontSize: '0.88rem'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/archive/\u062C\u0633\u062A\u0627\u0631"
  }, "\u062C\u0633\u062A\u0627\u0631")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/archive/\u06AF\u0641\u062A\u06AF\u0648"
  }, "\u06AF\u0641\u062A\u06AF\u0648")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/archive/\u06CC\u0627\u062F\u0645\u0627\u0646"
  }, "\u06CC\u0627\u062F\u0645\u0627\u0646")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/archive"
  }, "\u0628\u0627\u06CC\u06AF\u0627\u0646\u06CC \u0634\u0645\u0627\u0631\u0647\u200C\u0647\u0627")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    style: {
      color: 'var(--white)',
      fontSize: '1rem',
      margin: '0 0 1rem',
      fontWeight: 700
    }
  }, "\u067E\u06CC\u0648\u0646\u062F\u0647\u0627"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '0.55rem',
      fontSize: '0.88rem'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/about"
  }, "\u062F\u0631\u0628\u0627\u0631\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/thinktank"
  }, "\u0627\u0646\u062F\u06CC\u0634\u06A9\u062F\u0647\u0654 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/contact"
  }, "\u062A\u0645\u0627\u0633")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/support"
  }, "\u062D\u0645\u0627\u06CC\u062A \u0627\u0632 \u06AF\u0648\u0633\u0627\u0646")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/impressum"
  }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0646\u0627\u0634\u0631", /*#__PURE__*/React.createElement("span", {
    className: "foot-dot"
  }, " \xB7 "), /*#__PURE__*/React.createElement("span", {
    className: "foot-alt"
  }, "Impressum"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "/datenschutz"
  }, "\u062D\u0641\u0627\u0638\u062A \u0627\u0632 \u062F\u0627\u062F\u0647\u200C\u0647\u0627", /*#__PURE__*/React.createElement("span", {
    className: "foot-dot"
  }, " \xB7 "), /*#__PURE__*/React.createElement("span", {
    className: "foot-alt"
  }, "Datenschutz"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@gosan.org",
    style: {
      direction: 'ltr',
      display: 'inline-block',
      borderBottom: '1px solid var(--gold)',
      color: 'var(--white)'
    }
  }, "info@gosan.org"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-dark)',
      textAlign: 'center',
      padding: '1.2rem',
      fontSize: '0.78rem',
      color: '#9A9A9A'
    }
  }, "\u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "\u25CF"), " \u0633\u0627\u0644 \u06F1 \xB7 \u0634\u0645\u0627\u0631\u0647\u0654 \u06F1 \xB7 \u0645\u0647\u0631\u06AF\u0627\u0646 \u06F2\u06F5\u06F8\u06F5 (\u06F1\u06F4\u06F0\u06F5) ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "\u25CF"), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      direction: 'ltr',
      unicodeBidi: 'isolate',
      display: 'inline-block'
    }
  }, "ISSN 3056-221X"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "\u25CF"), " \u0647\u0645\u0647\u0654 \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A"));
}

/* shared title block for inner pages */
function PageTitle(_ref5) {
  var technical = _ref5.technical,
    title = _ref5.title,
    lede = _ref5.lede;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-title",
    style: {
      maxWidth: '860px',
      margin: '0 auto',
      padding: '4rem 2rem 2.5rem',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(DraftLineH, {
    top: "2.4rem",
    right: "-6rem",
    left: "-6rem"
  }), /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)'
    }
  }, technical), /*#__PURE__*/React.createElement("h1", {
    className: "gsn-display",
    style: {
      fontSize: 'var(--text-display)',
      margin: '1rem 0 0.6rem'
    }
  }, title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 300,
      margin: 0
    }
  }, lede) : null);
}

/* newsletter band — used on home */
function NewsletterBand() {
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sent = _React$useState8[0],
    setSent = _React$useState8[1];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      paddingTop: '4rem',
      paddingBottom: '4.5rem',
      maxWidth: '720px'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)'
    }
  }, "NEWSLETTER"), /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display",
    style: {
      fontSize: '1.9rem',
      margin: '0.8rem 0 0.5rem'
    }
  }, "\u062E\u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.95rem',
      margin: '0 0 2rem'
    }
  }, "\u0647\u0631 \u0641\u0635\u0644 \u06CC\u06A9 \u0646\u0627\u0645\u0647\u061B \u06AF\u0632\u06CC\u062F\u0647\u0654 \u062C\u0633\u062A\u0627\u0631\u0647\u0627 \u0648 \u06AF\u0641\u062A\u06AF\u0648\u0647\u0627\u06CC \u0634\u0645\u0627\u0631\u0647\u0654 \u062A\u0627\u0632\u0647\u060C \u06CC\u06A9\u200C\u0631\u0627\u0633\u062A \u0628\u0647 \u0635\u0646\u062F\u0648\u0642 \u0634\u0645\u0627."), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--accent-strong)',
      fontWeight: 500,
      margin: 0
    }
  }, "\u0633\u067E\u0627\u0633\u061B \u0646\u0634\u0627\u0646\u06CC \u0634\u0645\u0627 \u062B\u0628\u062A \u0634\u062F.") : /*#__PURE__*/React.createElement("form", {
    className: "newsletter-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: "you@example.com",
    "aria-label": "\u0646\u0634\u0627\u0646\u06CC \u0631\u0627\u06CC\u0627\u0646\u0627\u0645\u0647"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gold"
  }, "\u067E\u06CC\u0648\u0633\u062A\u0646")))));
}
Object.assign(window, {
  NAV_ITEMS: NAV_ITEMS,
  MobileNav: MobileNav,
  SiteHeader: SiteHeader,
  SiteFooter: SiteFooter,
  PageTitle: PageTitle,
  NewsletterBand: NewsletterBand
});