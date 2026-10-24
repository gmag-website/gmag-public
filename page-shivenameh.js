"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* Gosan Weblog — شیوه‌نامه (style guide / submissions) — two-column with sticky index */

var SV_SECTIONS = [{
  id: 'sv-scope',
  num: '۰۱',
  en: 'SCOPE',
  title: 'رویکرد و اهداف'
}, {
  id: 'sv-structure',
  num: '۰۲',
  en: 'STRUCTURE',
  title: 'ساختار محتوا'
}, {
  id: 'sv-submission',
  num: '۰۳',
  en: 'SUBMISSION',
  title: 'روند انتشار مقاله'
}, {
  id: 'sv-language',
  num: '۰۴',
  en: 'LANGUAGE',
  title: 'زبان و شیوهٔ نگارش'
}, {
  id: 'sv-citations',
  num: '۰۵',
  en: 'CITATIONS',
  title: 'ارجاعات و منابع'
}, {
  id: 'sv-copyright',
  num: '۰۶',
  en: 'COPYRIGHT',
  title: 'حق نشر و دسترسی آزاد'
}];
function ShivenamehList(_ref) {
  var items = _ref.items,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? false : _ref$cols;
  return /*#__PURE__*/React.createElement("ul", {
    className: "sv-list".concat(cols ? ' sv-list--cols' : '')
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, it);
  }));
}
function ShivenamehSection(_ref2) {
  var id = _ref2.id,
    num = _ref2.num,
    en = _ref2.en,
    title = _ref2.title,
    children = _ref2.children;
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "sv-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sv-section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sv-num",
    "aria-hidden": "true"
  }, num), /*#__PURE__*/React.createElement("div", {
    className: "sv-section-titles"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display sv-title"
  }, title))), /*#__PURE__*/React.createElement("div", {
    className: "sv-section-body"
  }, children)));
}
function ShivenamehTOC(_ref3) {
  var active = _ref3.active;
  var go = function go(e, id) {
    e.preventDefault();
    var el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 88,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "sv-toc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sv-toc-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sv-toc-head"
  }, "\u0641\u0647\u0631\u0633\u062A \u0634\u06CC\u0648\u0647\u200C\u0646\u0627\u0645\u0647"), /*#__PURE__*/React.createElement("nav", {
    className: "sv-toc-nav"
  }, SV_SECTIONS.map(function (s) {
    return /*#__PURE__*/React.createElement("a", {
      key: s.id,
      href: "#".concat(s.id),
      onClick: function onClick(e) {
        return go(e, s.id);
      },
      className: "sv-toc-link".concat(active === s.id ? ' is-active' : '')
    }, /*#__PURE__*/React.createElement("span", {
      className: "sv-toc-num"
    }, s.num), /*#__PURE__*/React.createElement("span", {
      className: "sv-toc-label"
    }, s.title));
  })), /*#__PURE__*/React.createElement("a", {
    className: "sv-toc-cta",
    href: "mailto:info@gosan.org"
  }, "\u0627\u0631\u0633\u0627\u0644 \u0646\u0648\u0634\u062A\u0627\u0631 \u2190")));
}
function ShivenamehPage() {
  var _React$useState = React.useState(SV_SECTIONS[0].id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    active = _React$useState2[0],
    setActive = _React$useState2[1];
  React.useEffect(function () {
    var ids = SV_SECTIONS.map(function (s) {
      return s.id;
    });
    var onScroll = function onScroll() {
      var line = window.innerHeight * 0.32;
      var current = ids[0];
      var _iterator = _createForOfIteratorHelper(ids),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var id = _step.value;
          var el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top - line <= 0) current = id;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setActive(current);
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
    };
  }, []);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u0634\u06CC\u0648\u0647\u200C\u0646\u0627\u0645\u0647"
  }, /*#__PURE__*/React.createElement(PageTitle, {
    technical: "STYLE GUIDE // SUBMISSIONS \u2014 ISSUE 01",
    title: "\u0634\u06CC\u0648\u0647\u200C\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646",
    lede: "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0646\u06AF\u0627\u0631\u0634\u060C \u0627\u0631\u062C\u0627\u0639\u200C\u062F\u0647\u06CC \u0648 \u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u0646\u0648\u0634\u062A\u0627\u0631 \u0628\u0631\u0627\u06CC \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646"
  }), /*#__PURE__*/React.createElement(MotifDivider, {
    style: {
      marginTop: '-0.6rem',
      marginBottom: '2.4rem'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sv-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sv-content"
  }, /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-scope",
    num: "\u06F0\u06F1",
    en: "SCOPE",
    title: "\u0631\u0648\u06CC\u06A9\u0631\u062F \u0648 \u0627\u0647\u062F\u0627\u0641"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sv-p sv-lead"
  }, "\u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0628\u0627 \u0647\u062F\u0641 \u0622\u0634\u0646\u0627\u06CC\u06CC\u060C \u067E\u0698\u0648\u0647\u0634 \u0648 \u0631\u0648\u0634\u0646\u06AF\u0631\u06CC \u062F\u0631 \u0632\u0645\u06CC\u0646\u0647\u0654 \u0641\u0631\u0647\u0646\u06AF\u060C \u0647\u0646\u0631 \u0648 \u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0631\u0627\u0646 \u0648 \u06AF\u0648\u0646\u0647\u200C\u06AF\u0648\u0646\u06CC \u0641\u0631\u0647\u0646\u06AF\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0633\u0631\u0632\u0645\u06CC\u0646 \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("p", {
    className: "sv-p"
  }, "\u06AF\u0648\u0633\u0627\u0646 \u0645\u06CC\u200C\u06A9\u0648\u0634\u062F \u0627\u0632 \u06CC\u06A9 \u0633\u0648 \u0645\u06CC\u0631\u0627\u062B \u0627\u0631\u0632\u0634\u0645\u0646\u062F \u06AF\u0630\u0634\u062A\u0647 \u0631\u0627 \u0628\u0634\u0646\u0627\u0633\u062F \u0648 \u0628\u0634\u0646\u0627\u0633\u0627\u0646\u062F\u060C \u0648 \u0627\u0632 \u0633\u0648\u06CC \u062F\u06CC\u06AF\u0631 \u0628\u0627\u0632\u062A\u0627\u0628\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631\u0633\u0634\u200C\u0647\u0627 \u0648 \u062F\u063A\u062F\u063A\u0647\u200C\u0647\u0627\u06CC \u0641\u0631\u0647\u0646\u06AF\u06CC \u0648 \u0647\u0646\u0631\u06CC \u0627\u0645\u0631\u0648\u0632 \u0648 \u0641\u0631\u062F\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0634\u062F. \u0627\u06CC\u0646 \u0634\u06CC\u0648\u0647\u200C\u0646\u0627\u0645\u0647 \u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u0639\u0644\u0627\u0642\u0647\u200C\u0645\u0646\u062F\u0627\u0646\u060C \u067E\u0698\u0648\u0647\u0634\u06AF\u0631\u0627\u0646\u060C \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0648 \u062F\u0648\u0633\u062A\u062F\u0627\u0631\u0627\u0646 \u0641\u0631\u0647\u0646\u06AF \u0648 \u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0631\u0627\u0646 \u0628\u0631\u0627\u06CC \u0647\u0645\u0631\u0627\u0647\u06CC \u0628\u0627 \u06AF\u0648\u0633\u0627\u0646 \u0627\u0633\u062A.")), /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-structure",
    num: "\u06F0\u06F2",
    en: "STRUCTURE",
    title: "\u0633\u0627\u062E\u062A\u0627\u0631 \u0645\u062D\u062A\u0648\u0627"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sv-p"
  }, "\u062F\u0631 \u06AF\u0648\u0633\u0627\u0646 \u0645\u0637\u0627\u0644\u0628\u06CC \u0628\u0631\u0627\u06CC \u0639\u0645\u0648\u0645 \u062F\u0648\u0633\u062A\u062F\u0627\u0631\u0627\u0646 \u0645\u0648\u0636\u0648\u0639\u0627\u062A \u0641\u0631\u0647\u0646\u06AF\u06CC\u060C \u0647\u0646\u0631\u06CC \u0648 \u062A\u0627\u0631\u06CC\u062E\u06CC \u0645\u0646\u062A\u0634\u0631 \u0645\u06CC\u200C\u0634\u0648\u062F\u060C \u0627\u0632 \u062C\u0645\u0644\u0647:"), /*#__PURE__*/React.createElement(ShivenamehList, {
    cols: true,
    items: ['جستارهای پژوهشی و تحلیلی', 'یادداشت‌های کوتاه', 'گفت‌وگو با اندیشمندان و هنرمندان', 'پرونده‌های ویژه و رویکردهای میان‌رشته‌ای', 'یادبود چهره‌های برجستهٔ فرهنگی و علمی', 'نقد و معرفی کتاب', 'گزارش رویدادها و کارگاه‌های فرهنگی']
  })), /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-submission",
    num: "\u06F0\u06F3",
    en: "SUBMISSION",
    title: "\u0631\u0648\u0646\u062F \u0627\u0646\u062A\u0634\u0627\u0631 \u0645\u0642\u0627\u0644\u0647"
  }, /*#__PURE__*/React.createElement(ShivenamehList, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, "\u0645\u0642\u0627\u0644\u0647 \u0628\u0647 \u0635\u0648\u0631\u062A \u0641\u0627\u06CC\u0644 ", /*#__PURE__*/React.createElement("span", {
      className: "sv-mono"
    }, "docx."), " \u0628\u0647 \u0646\u0634\u0627\u0646\u06CC ", /*#__PURE__*/React.createElement("a", {
      className: "sv-mail",
      href: "mailto:info@gosan.org"
    }, "info@gosan.org"), " \u0641\u0631\u0633\u062A\u0627\u062F\u0647 \u0634\u0648\u062F."), 'متن مقاله با یک قلم (فونت) سادهٔ متعارف و اندازهٔ ۱۲ تنظیم شود.', 'پذیرش مقاله برای انتشار در گوسان، پس از بررسی و ارزیابی محتوا و به تصمیم نهایی گروه نویسندگان گاهنامهٔ گوسان انجام می‌شود.', 'گوسان از پذیرش مقاله‌ای که پیش‌تر در جای دیگری منتشر شده باشد، پرهیز می‌کند.', 'نسخهٔ ویراسته و تأییدشدهٔ مقاله، پیش از انتشار برای نویسنده فرستاده می‌شود.', 'مسئولیت محتوای مقاله بر عهدهٔ نویسنده است.']
  }), /*#__PURE__*/React.createElement("div", {
    className: "sv-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sv-note-tag"
  }, "\u0633\u06CC\u0627\u0633\u062A \u0639\u062F\u0645 \u062A\u062D\u0645\u0644 \u0633\u0631\u0642\u062A \u0627\u062F\u0628\u06CC"), /*#__PURE__*/React.createElement("p", null, "\u0631\u0639\u0627\u06CC\u062A \u062D\u0642\u0648\u0642 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u0648 \u0647\u0646\u0631\u0645\u0646\u062F\u0627\u0646 \u0628\u0631\u0627\u06CC \u06AF\u0648\u0633\u0627\u0646 \u0627\u0644\u0632\u0627\u0645\u06CC \u0627\u0633\u062A. \u0633\u0631\u0642\u062A \u0627\u062F\u0628\u06CC\u060C \u0646\u0642\u0644 \u0645\u0637\u0644\u0628 \u0628\u062F\u0648\u0646 \u0630\u06A9\u0631 \u0645\u0646\u0628\u0639\u060C \u0648 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062A\u0635\u0648\u06CC\u0631 \u0628\u062F\u0648\u0646 \u0630\u06A9\u0631 \u0645\u0646\u0628\u0639 \u0648 \u0631\u0639\u0627\u06CC\u062A \u062D\u0642\u0648\u0642 \u067E\u062F\u06CC\u062F\u0622\u0648\u0631\u0646\u062F\u0647\u060C \u0628\u0647 \u0647\u06CC\u0686 \u0648\u062C\u0647 \u067E\u0630\u06CC\u0631\u0641\u062A\u0647 \u0646\u06CC\u0633\u062A."))), /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-language",
    num: "\u06F0\u06F4",
    en: "LANGUAGE",
    title: "\u0632\u0628\u0627\u0646 \u0648 \u0634\u06CC\u0648\u0647\u0654 \u0646\u06AF\u0627\u0631\u0634"
  }, /*#__PURE__*/React.createElement("p", {
    className: "sv-p"
  }, "\u0646\u0638\u0627\u0645 \u0646\u0648\u0634\u062A\u0627\u0631\u06CC \u06AF\u0648\u0633\u0627\u0646 \u0628\u0631 \u067E\u0627\u06CC\u0647\u0654 ", /*#__PURE__*/React.createElement("em", null, "\u062F\u0633\u062A\u0648\u0631 \u062E\u0637 \u0641\u0627\u0631\u0633\u06CC"), " \u0648 ", /*#__PURE__*/React.createElement("em", null, "\u0641\u0631\u0647\u0646\u06AF \u0627\u0645\u0644\u0627\u06CC \u062E\u0637 \u0641\u0627\u0631\u0633\u06CC\u0650"), " \u0641\u0631\u0647\u0646\u06AF\u0633\u062A\u0627\u0646 \u0632\u0628\u0627\u0646 \u0648 \u0627\u062F\u0628 \u0641\u0627\u0631\u0633\u06CC \u0627\u0633\u062A. \u0631\u0639\u0627\u06CC\u062A \u0646\u0634\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0633\u062C\u0627\u0648\u0646\u062F\u06CC\u060C \u0627\u0635\u0648\u0644 \u062F\u0633\u062A\u0648\u0631\u06CC \u0648 \u067E\u0631\u0647\u06CC\u0632 \u0627\u0632 \u0646\u06CC\u0645\u200C\u0641\u0627\u0635\u0644\u0647\u0654 \u0646\u0627\u0628\u0647\u200C\u062C\u0627 \u0636\u0631\u0648\u0631\u06CC \u0627\u0633\u062A."), /*#__PURE__*/React.createElement(ShivenamehList, {
    items: ['اصل بر پرهیز از کاربرد واژه‌های بیگانه است؛ در موارد لازم، معادل فارسی یا توضیح مناسب در کمانک (پرانتز) آورده می‌شود.', 'برای نام‌های خاص کهن، تلفظ رایج در زبان فارسی مبناست؛ مثلاً «ارسطو» به جای «اریستوتلس».', 'برای نام‌های خاص بیگانهٔ ناآشنا، صورت اصلی نام به خط لاتین در کمانک آورده می‌شود.', 'نقل‌قول‌های کوتاه درون «گیومه» می‌آیند؛ نقل‌قول‌های بلند در یک بند مستقل و با تورفتگی از هر دو سو.']
  })), /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-citations",
    num: "\u06F0\u06F5",
    en: "CITATIONS",
    title: "\u0627\u0631\u062C\u0627\u0639\u0627\u062A \u0648 \u0645\u0646\u0627\u0628\u0639"
  }, /*#__PURE__*/React.createElement(ShivenamehList, {
    items: ['همهٔ ارجاعات، حواشی و نکات تکمیلی در پی‌نوشت آورده می‌شوند.', 'شمارهٔ پی‌نوشت‌ها در هر جستار از ۱ آغاز می‌شود و تا پایان همان جستار ادامه می‌یابد.', 'در مشخصات منابع، نام کتاب‌ها و مجله‌ها به صورت ایتالیک و نام مقاله‌ها در «گیومه» نوشته می‌شود.']
  }), /*#__PURE__*/React.createElement("span", {
    className: "sv-subhead"
  }, "\u0646\u0645\u0648\u0646\u0647\u0654 \u0645\u0646\u0627\u0628\u0639"), /*#__PURE__*/React.createElement("ol", {
    className: "sv-cite"
  }, /*#__PURE__*/React.createElement("li", null, "\u0622\u0645\u0648\u0632\u06AF\u0627\u0631 \u0648 \u062A\u0641\u0636\u0651\u0644\u06CC \u06F1\u06F3\u06F7\u06F0: \u0698\u0627\u0644\u0647 \u0622\u0645\u0648\u0632\u06AF\u0627\u0631 \u0648 \u0627\u062D\u0645\u062F \u062A\u0641\u0636\u0651\u0644\u06CC\u060C ", /*#__PURE__*/React.createElement("em", null, "\u0627\u0633\u0637\u0648\u0631\u0647\u0654 \u0632\u0646\u062F\u06AF\u06CC \u0632\u0631\u062F\u0634\u062A"), "\u060C \u062A\u0647\u0631\u0627\u0646: \u06A9\u062A\u0627\u0628\u0633\u0631\u0627\u06CC \u0628\u0627\u0628\u0644\u060C \u06F1\u06F3\u06F7\u06F0."), /*#__PURE__*/React.createElement("li", null, "\u0641\u0627\u0631\u0627\u0628\u06CC: \u0627\u0628\u0648\u0646\u0635\u0631 \u0641\u0627\u0631\u0627\u0628\u06CC\u060C ", /*#__PURE__*/React.createElement("em", null, "\u06A9\u062A\u0627\u0628 \u0645\u0648\u0633\u06CC\u0642\u06CC \u06A9\u0628\u06CC\u0631"), "\u060C \u062A\u0631\u062C\u0645\u0647\u0654 \u0622\u0630\u0631\u062A\u0627\u0634 \u0622\u0630\u0631\u0646\u0648\u0634\u060C \u062A\u0647\u0631\u0627\u0646: \u067E\u0698\u0648\u0647\u0634\u06AF\u0627\u0647 \u0639\u0644\u0648\u0645 \u0627\u0646\u0633\u0627\u0646\u06CC \u0648 \u0645\u0637\u0627\u0644\u0639\u0627\u062A \u0641\u0631\u0647\u0646\u06AF\u06CC\u060C \u06F1\u06F3\u06F7\u06F6."), /*#__PURE__*/React.createElement("li", null, "\u062E\u0627\u0644\u0642\u06CC \u06F1\u06F3\u06F4\u06F1: \u0631\u0648\u062D\u200C\u0627\u0644\u0644\u0647 \u062E\u0627\u0644\u0642\u06CC\u060C \xAB\u0647\u0645\u0646\u0648\u0627\u0632\u06CC \u062F\u0631 \u0645\u0648\u0633\u06CC\u0642\u06CC \u0627\u06CC\u0631\u0627\u0646\xBB\u060C ", /*#__PURE__*/React.createElement("em", null, "\u0645\u062C\u0644\u0647\u0654 \u0645\u0648\u0633\u06CC\u0642\u06CC"), "\u060C \u0634\u0645\u0627\u0631\u0647\u0654 \u06F7\u06F3\u2013\u06F7\u06F4\u060C \u0628\u0647\u0645\u0646 \u0648 \u0627\u0633\u0641\u0646\u062F \u06F1\u06F3\u06F4\u06F1\u060C \u0635 \u06F1\u06F0\u2013\u06F1\u06F8."), /*#__PURE__*/React.createElement("li", null, "\u06CC\u0627\u0631\u0634\u0627\u0637\u0631 \u06F1\u06F3\u06F7\u06F0: \u0627\u062D\u0633\u0627\u0646 \u06CC\u0627\u0631\u0634\u0627\u0637\u0631\u060C \xAB\u067E\u06CC\u0648\u0633\u062A\u06AF\u06CC \u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0631\u0627\u0646\xBB\u060C ", /*#__PURE__*/React.createElement("em", null, "\u0627\u06CC\u0631\u0627\u0646\u200C\u0634\u0646\u0627\u0633\u06CC"), "\u060C \u0633\u0627\u0644 \u0647\u0641\u062A\u0645\u060C \u0634\u0645\u0627\u0631\u0647\u0654 \u06F9\u060C \u0628\u0647\u0627\u0631 \u06F1\u06F3\u06F7\u06F0\u060C \u0635 \u06F1\u06F4\u2013\u06F2\u06F0."), /*#__PURE__*/React.createElement("li", {
    dir: "ltr",
    className: "sv-cite-ltr"
  }, "Schmitt 2009: R\xFCdiger Schmitt, ", /*#__PURE__*/React.createElement("em", null, "Die altpersischen Inschriften der Achaimeniden"), ", Wiesbaden: Reichert Verlag, 2009."), /*#__PURE__*/React.createElement("li", {
    dir: "ltr",
    className: "sv-cite-ltr"
  }, "Boyce 1957: Mary Boyce, \u201CThe Parthian G\u014Ds\u0101n and Iranian Minstrel Tradition\u201D, ", /*#__PURE__*/React.createElement("em", null, "JRAS"), ", Vol. 89, No. 1/2, 1957, pp. 10\u201345."))), /*#__PURE__*/React.createElement(ShivenamehSection, {
    id: "sv-copyright",
    num: "\u06F0\u06F6",
    en: "COPYRIGHT & OPEN ACCESS",
    title: "\u062D\u0642 \u0646\u0634\u0631 \u0648 \u062F\u0633\u062A\u0631\u0633\u06CC \u0622\u0632\u0627\u062F"
  }, /*#__PURE__*/React.createElement(ShivenamehList, {
    items: ['نوشتارهای گوسان با ذکر دقیق منبع و نام پدیدآورنده، برای نقل و ارجاع پژوهشی آزاد است.', 'بازنشر کامل یک نوشتار تنها با اجازهٔ کتبی گوسان و نویسنده ممکن است.', 'استفاده از تصاویر تنها با ذکر منبع و رعایت حقوق پدیدآورنده مجاز است.', 'حق مالکیت معنوی هر اثر نزد پدیدآورندهٔ آن باقی می‌ماند.']
  }), /*#__PURE__*/React.createElement("div", {
    className: "sv-cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)'
    }
  }, "SUBMIT // info@gosan.org"), /*#__PURE__*/React.createElement("h3", {
    className: "gsn-display",
    style: {
      fontSize: '1.6rem',
      margin: '0.7rem 0 0.4rem'
    }
  }, "\u0646\u0648\u0634\u062A\u0627\u0631\u062A\u0627\u0646 \u0631\u0627 \u0628\u0631\u0627\u06CC \u0645\u0627 \u0628\u0641\u0631\u0633\u062A\u06CC\u062F"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: '0.95rem',
      margin: '0 0 1.6rem'
    }
  }, "\u0641\u0627\u06CC\u0644 ", /*#__PURE__*/React.createElement("span", {
    className: "sv-mono"
  }, "docx."), " \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u0646\u0634\u0627\u0646\u06CC \u0632\u06CC\u0631 \u0627\u0631\u0633\u0627\u0644 \u06A9\u0646\u06CC\u062F\u061B \u06AF\u0631\u0648\u0647 \u0646\u0648\u06CC\u0633\u0646\u062F\u06AF\u0627\u0646 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \u06AF\u0648\u0633\u0627\u0646 \u0622\u0646 \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u0645\u06CC\u200C\u06A9\u0646\u062F."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    href: "mailto:info@gosan.org"
  }, "\u0627\u0631\u0633\u0627\u0644 \u0646\u0648\u0634\u062A\u0627\u0631")))), /*#__PURE__*/React.createElement(ShivenamehTOC, {
    active: active
  })));
}
Object.assign(window, {
  ShivenamehPage: ShivenamehPage
});