"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Gosan Weblog — path router (clean addresses, see index.html), tweaks, app shell */

var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "typeScale": 100,
  "accent": "#6E94A0",
  "motion": true
} /*EDITMODE-END*/;
var GOSAN_ACCENTS = {
  '#6E94A0': {
    accent: '#6E94A0',
    strong: '#547C8B',
    wash: 'rgba(110, 148, 160, 0.16)'
  },
  '#1D92B4': {
    accent: '#1D92B4',
    strong: '#0E7D99',
    wash: 'rgba(29, 146, 180, 0.14)'
  },
  '#C99227': {
    accent: '#C99227',
    strong: '#A87A1F',
    wash: 'rgba(212, 175, 55, 0.18)'
  }
};
function parseHash() {
  var h = decodeURIComponent(window.gosanPath());
  var parts = h.replace(/^\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'article') {
    /* a social part's address (GOSAN_SOCIAL_PARTS, EIC 19 Oct 2026): the site shows that essay
       whole, so the address becomes the essay's own, with the part's first section as its
       fragment; ArticleView scrolls there once the body is in */
    var part = (window.GOSAN_SOCIAL_PARTS || []).find(function (p) {
      return p.slug === parts[1];
    });
    if (part) {
      history.replaceState(null, '', '/article/' + part.of + location.search + (part.at ? '#' + part.at : ''));
      return {
        page: 'article',
        param: part.of
      };
    }
    return {
      page: 'article',
      param: parts[1] || ''
    };
  }
  if (parts[0] === 'archive') return {
    page: 'archive',
    param: parts[1] || ''
  };
  if (parts[0] === 'issue') return {
    page: 'issue',
    param: parts[1] || '1'
  }; /* #/issue alone is the first issue */
  if (parts[0] === 'about') return {
    page: 'about',
    param: ''
  };
  if (parts[0] === 'contact') return {
    page: 'contact',
    param: ''
  };
  if (parts[0] === 'blog') return {
    page: 'blog',
    param: parts[1] || ''
  };
  if (parts[0] === 'shivenameh') return {
    page: 'shivenameh',
    param: ''
  };
  if (parts[0] === 'thinktank') return {
    page: 'thinktank',
    param: ''
  };
  if (parts[0] === 'impressum') return {
    page: 'impressum',
    param: ''
  };
  if (parts[0] === 'datenschutz') return {
    page: 'datenschutz',
    param: ''
  };
  if (parts[0] === 'support') return {
    page: 'support',
    param: ''
  };
  return {
    page: 'home',
    param: ''
  };
}
function useHashRoute() {
  var _React$useState = React.useState(parseHash),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    route = _React$useState2[0],
    setRoute = _React$useState2[1];
  React.useEffect(function () {
    var last = window.gosanPath();
    var onHash = function onHash() {
      var now = window.gosanPath();
      if (now === last) return; /* only the #fragment moved (a footnote jump): not a new page */
      last = now;
      setRoute(parseHash());
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    };
    window.addEventListener('hashchange', onHash);
    return function () {
      return window.removeEventListener('hashchange', onHash);
    };
  }, []);
  return route;
}

/* search titles carry the name as readers type it too: Google treats «گاهنامهٔ» and «گاهنامه»
   as different words (EIC, 22 Oct 2026). The visible heading and text keep «گاهنامهٔ». */
var ESSAY_TITLE_TAIL = ' — گاهنامه گوسان';
var PAGE_TITLES = {
  home: 'گاهنامهٔ فرهنگی و هنری گوسان · گاهنامه گوسان · Gāhnāme-ye Gōsān · Gōsān Institute',
  article: 'گوسان — نوشتار',
  archive: 'گوسان — بایگانی',
  issue: 'گوسان — دفتر نخست',
  about: 'دربارهٔ گوسان',
  contact: 'گوسان — تماس',
  blog: 'گوسان — گاه‌نوشت',
  shivenameh: 'گوسان — شیوه‌نامه',
  thinktank: 'گوسان — اندیشکدهٔ فرهنگ و هنر',
  impressum: 'گوسان — اطلاعات ناشر (Impressum)',
  datenschutz: 'گوسان — حفاظت از داده‌ها (Datenschutz)',
  support: 'گوسان — حمایت از گوسان'
};

// The think tank is its own multi-page site (gosan-institute*), but the link is
// DISCONNECTED for now (editor-in-chief, 2 Aug 2026): the button stays visible,
// visitors land on this placeholder until the pages are ready to show.
function ThinktankRedirect(_ref) {
  var lang = _ref.lang;
  var en = lang === 'en';
  return /*#__PURE__*/React.createElement("main", {
    style: {
      minHeight: '60vh',
      display: 'grid',
      placeItems: 'center',
      padding: '4rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '32rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      color: 'var(--gold-deep)',
      marginBottom: '1rem'
    }
  }, "\u273B"), /*#__PURE__*/React.createElement("h1", {
    className: "gsn-display",
    style: {
      fontSize: '1.6rem',
      margin: '0 0 0.8rem'
    }
  }, en ? 'Gōsān Institute' : 'اندیشکدهٔ گوسان'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 2
    }
  }, en ? 'The Institute’s pages are being prepared and will open here soon.' : 'صفحه‌های اندیشکده در دست آماده‌سازی است و به‌زودی همین‌جا گشوده می‌شود.'), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.6rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      color: 'var(--accent)'
    }
  }, en ? '← Back to the magazine' : 'بازگشت به گاهنامه ←'))));
}
var NAV_ACTIVE = {
  home: 'خانه',
  issue: 'دفتر نخست',
  archive: 'بایگانی',
  about: 'دربارهٔ گوسان · تماس',
  contact: 'دربارهٔ گوسان · تماس',
  shivenameh: 'شیوه‌نامه',
  blog: 'گاه‌نوشت',
  thinktank: 'اندیشکده'
};
function App() {
  var _useTweaks = useTweaks(TWEAK_DEFAULTS),
    _useTweaks2 = _slicedToArray(_useTweaks, 2),
    t = _useTweaks2[0],
    setTweak = _useTweaks2[1];
  var route = useHashRoute();
  var lang = 'fa';
  React.useEffect(function () {
    try {
      localStorage.setItem('gosan-lang', 'fa');
    } catch (e) {}
    var el = document.documentElement;
    el.dir = 'rtl';
    el.lang = 'fa';
    document.body.dataset.lang = 'fa';
  }, []);

  /* let the embedded Institute iframe ask us to navigate (cross-origin-safe back button) */
  React.useEffect(function () {
    var onMsg = function onMsg(e) {
      var d = e && e.data;
      if (d && d.type === 'gosan-nav' && typeof d.hash === 'string') {
        window.gosanGo(d.hash);
      }
    };
    window.addEventListener('message', onMsg);
    return function () {
      return window.removeEventListener('message', onMsg);
    };
  }, []);

  /* apply tweaks to css custom properties */
  React.useEffect(function () {
    var root = document.documentElement;
    root.style.fontSize = "".concat(16 * t.typeScale / 100, "px");
    var a = GOSAN_ACCENTS[t.accent] || GOSAN_ACCENTS['#6E94A0'];
    root.style.setProperty('--accent', a.accent);
    root.style.setProperty('--accent-strong', a.strong);
    root.style.setProperty('--cerulean-wash', a.wash);
    root.style.setProperty('--font-display', "'IRANSansX', 'Vazirmatn', 'Tahoma', sans-serif");
    document.body.dataset.motion = t.motion ? 'on' : 'off';
  }, [t.typeScale, t.accent, t.motion]);
  React.useEffect(function () {
    /* an essay's tab and search-result title is its own title, as on its link card (SEO, 20 Oct 2026) */
    var essay = route.page === 'article' && (window.GOSAN_POSTS || (typeof GOSAN_POSTS !== 'undefined' ? GOSAN_POSTS : [])).find(function (p) {
      return p.slug === route.param;
    });
    document.title = essay ? essay.title + ESSAY_TITLE_TAIL : PAGE_TITLES[route.page] || PAGE_TITLES.home;
    document.body.dataset.page = route.page;
  }, [route.page, route.param]);
  var activeNav = NAV_ACTIVE[route.page] || 'خانه';
  if (route.page === 'archive' && route.param) activeNav = route.param;
  if (route.page === 'article') activeNav = '';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScrollProgress, null), route.page !== 'home' && route.page !== 'thinktank' ? /*#__PURE__*/React.createElement(SiteHeader, {
    active: activeNav,
    lang: lang
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "route-fade",
    key: route.page + ':' + route.param
  }, route.page === 'article' ? /*#__PURE__*/React.createElement(ArticleView, {
    slug: route.param,
    key: route.param
  }) : route.page === 'archive' ? /*#__PURE__*/React.createElement(ArchivePage, {
    tag: route.param,
    key: route.param
  }) : route.page === 'issue' ? /*#__PURE__*/React.createElement(IssuePage, {
    issue: route.param
  }) : route.page === 'about' ? /*#__PURE__*/React.createElement(AboutPage, null) : route.page === 'contact' ? /*#__PURE__*/React.createElement(ContactPage, null) : route.page === 'blog' ? route.param ? /*#__PURE__*/React.createElement(BlogPostView, {
    slug: route.param
  }) : /*#__PURE__*/React.createElement(BlogPage, null) : route.page === 'shivenameh' ? /*#__PURE__*/React.createElement(ShivenamehPage, null) : route.page === 'impressum' ? /*#__PURE__*/React.createElement(ImpressumPage, null) : route.page === 'datenschutz' ? /*#__PURE__*/React.createElement(DatenschutzPage, null) : route.page === 'support' ? /*#__PURE__*/React.createElement(SupportPage, null) : route.page === 'thinktank' ? /*#__PURE__*/React.createElement(ThinktankRedirect, {
    lang: lang
  }) : /*#__PURE__*/React.createElement(HomePage, {
    lang: lang
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    route: route.page
  }), /*#__PURE__*/React.createElement(SearchOverlay, null), /*#__PURE__*/React.createElement(SubscribeOverlay, null), /*#__PURE__*/React.createElement(BackToTop, null), route.page === 'home' ? /*#__PURE__*/React.createElement(RemembranceRibbon, null) : null, /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0631\u0646\u06AF \u0648 \u062D\u0631\u0648\u0641"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "\u0631\u0646\u06AF \u062A\u0623\u06A9\u06CC\u062F\u06CC",
    value: t.accent,
    options: ['#6E94A0', '#1D92B4', '#C99227'],
    onChange: function onChange(v) {
      return setTweak('accent', v);
    }
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u0645\u0642\u06CC\u0627\u0633 \u062D\u0631\u0648\u0641",
    value: t.typeScale,
    min: 90,
    max: 120,
    step: 2,
    unit: "%",
    onChange: function onChange(v) {
      return setTweak('typeScale', v);
    }
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u062C\u0646\u0628\u0634"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\u062C\u0646\u0628\u0634 \u0627\u0633\u06A9\u0631\u0648\u0644",
    value: t.motion,
    onChange: function onChange(v) {
      return setTweak('motion', v);
    }
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));