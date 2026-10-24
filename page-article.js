"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
/* Gosan Weblog — article reading view: two-column feature + listen bar + footnotes */

/* article category → home section key (matches NcCatSection ids on the home page) */
var TAG_TO_SECTION = {
  'جستار': 'essay',
  'دیدگاه': 'viewpoint',
  'یادمان': 'memoriam',
  'گفتگو': 'interview',
  'نقد و بررسی': 'review',
  'پیشنهاد': 'proposal',
  'پروندهٔ سیاست‌گذاری فرهنگی': 'dossier-policy',
  'پروندهٔ اقتصاد خلاق': 'dossier-economy',
  'پروندهٔ آموزش': 'dossier-education'
};
function goToHomeSection(tag) {
  var key = TAG_TO_SECTION[tag];
  if (key) {
    try {
      sessionStorage.setItem('gosan-scroll', 'cat-' + key);
    } catch (e) {}
    window.gosanGo('/');
  } else {
    window.gosanGo('/archive/' + encodeURIComponent(tag));
  }
}

/* Author avatars: the five board members use the SAME photo file as the About
   page board (assets/board-*.png), so replacing one file updates both the byline
   circle and the About page. Contributing writers use assets/author-*.png, which
   the About page never reads. Writers with no file here show no circle at all. */
var AUTHOR_PHOTOS = {
  "حافظ باباشاهی": "assets/board-hafez.png",
  "یلدا زمانی": "assets/board-yalda.png",
  "احسان شواربی": "assets/board-ehsan.png",
  "سهراب لبیب": "assets/board-sohrab.png",
  "امین نایب‌پور": "assets/board-amin.png",
  "مصطفی بوشهری": "assets/author-mostafa-bushehri.png",
  "مهرداد غلامی": "assets/author-mehrdad-gholami.png?v=2",
  "حامد امان‌پور قرایی": "assets/author-hamed-amanpour-gharaei.png",
  "فرزانه گشتاسب": "assets/author-farzaneh-goshtasb.png?v=2",
  "سام گیوراد": "assets/author-sam-givrad.png",
  "سهیل دلشاد": "assets/author-soheil-delshad.png",
  "فرناز مدرسی‌فر": "assets/author-farnaz-modarresifar.png"
};

/* interview guests — the bio block shows the interviewee, not the interviewer */
var GUEST_BY_SLUG = {
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر"
};
var AUTHOR_BIOS = {
  "حامد امان‌پور قرایی": "حامد امان‌پور قرایی، پژوهشگر، نمایشنامه‌نویس، طراح و کارگردان تئاتر است و مدیریت و بنیان‌گذاری «کمپانی تئاتر نیمکت» را بر عهده دارد. وی طراحی و کارگردانی آثاری همچون خانهٔ برناردا آلبا، سه خواهر، اپراهای دیدو و آئنیاس، (زال + ایولف)، ایولف کوچک، طوفان، هملت، باخانت‌ها، سونات اشباح، خوک/زن/آتش، پارسیان، کپی برابر اصل و... را در کارنامهٔ هنری خود دارد.",
  "مصطفی بوشهری": "پژوهشگر حوزهٔ اقتصاد، مالی و انرژی است. او پیش‌تر به‌عنوان پژوهشگر انرژی جهانی در مرکز سیاست‌گذاری انرژی جهانی دانشگاه کلمبیا فعالیت داشته و دارای مدرک کارشناسی ارشد مدیریت و امور مالی از دانشگاه کلمبیا است.",
  "یلدا زمانی": "رهبر ارکستر و آهنگساز؛ سردبیر گاهنامهٔ گوسان و مدیرمسئول اندیشکدهٔ فرهنگ و هنر گوسان. مدرس پیشین دانشگاه موسیقی و تئاتر هامبورگ، بنیان‌گذار و مدیر هنری ارکستر مجلسی معاصر البه و دستیار پیشین رهبر آنسامبل اینترکنتمپورن در فیلارمونی پاریس (۲۰۲۴–۲۰۲۶) است. در میان ارکسترها و آنسامبل‌های متعددی که رهبری کرده است، می‌توان از ارکستر سمفونیک رادیو وین، ارکستر سمفونیک WDR، ارکستر ملی ایل‌دوفرانس، ارکستر سمفونیک رادیو و تلویزیون کرواسی، ارکستر فیلارمونیک زاگرب، ارکستر سمفونیک بیلبائو، ارکستر سمفونیک دولتی تسالونیکی، ارکستر سمفونیک ورشو، کلانگ‌فروم وین و آنسامبل اینترکنتمپورن نام برد. در تالارهایی چون موزیک‌فراین وین، کنسرت‌هاوس وین، الب‌فیلارمونی هامبورگ، فیلارمونی پاریس و تئاتر شاتله، و در جشنواره‌هایی چون وین مدرن، پاییز ورشو، دارمشتات، روهرترینال و بینال موسیقی زاگرب روی صحنه رفته است. در کنار کار هنری، پژوهشگر سیاست‌گذاری فرهنگی است.",
  "حافظ باباشاهی": "موسیقیدان و دانش‌آموختهٔ دانشگاه موسیقی وین، بنیان‌گذار جشنوارهٔ آواز کلاسیک «وینر لیدر هربست»، مدیر هنری مسابقهٔ پیانوی ماکان، مدرس پیانو در کنسرواتوار ریشارد واگنر وین است. به عنوان تک‌نواز، پیانیست لید و نوازندهٔ موسیقی مجلسی در تالارهایی چون موزیک‌فراین و کنسرت‌هاوس وین، گاستایگ مونیخ، دویچه اوپر برلین، ویگمور هال لندن و تالار کنسرت شانگهای روی صحنه رفته است. جشنوارهٔ آواز او بیش از یک دهه است که به پرورش و عرضهٔ آواز کلاسیک می‌پردازد، و جشنوارهٔ پیانوی ماکان، با مسابقهٔ برخط برای کودکان و آموزش از راه دور، به پرورش پیانیست‌های جوان در ایران اختصاص دارد.",
  "احسان شواربی": "باستان‌شناس و سکه‌شناس؛ متصدی سکه‌های سدهٔ میانه و شرق در گنجینهٔ سکهٔ موزهٔ تاریخ هنر وین و مدیر بخش پژوهش گوسان است. باستان‌شناسی، شرق‌شناسی و سکه‌شناسی را در تهران، بامبرگ و وین خوانده و پیش از این در موزهٔ تاریخ هنر و دانشگاه وین پژوهشگر بوده است. پژوهش‌های او بر سکه و تاریخ پولی جهان ایرانی باستان، آسیای میانه و شمال هند متمرکز است؛ به‌ویژه بر سکه‌شناسی و شمایل‌نگاری ساسانی، جغرافیای تاریخی ایران پیش از اسلام، و زبان‌ها و کتیبه‌های ایران باستان. در سال ۲۰۲۲ برای پژوهش دربارهٔ سکه‌های به‌دست‌آمده از کاوش‌های بریکوت در سوات پاکستان، جایزهٔ والتر هورنیک (Walter-Hävernick-Preis) کمیسیون سکه‌شناسی آلمان را دریافت کرد؛ حاصل این پژوهش در سال ۲۰۲۵ با عنوان A Numismatic History of Barikot در انتشارات فرهنگستان علوم اتریش منتشر شد. پیش‌تر سکه‌های ساسانی موزهٔ ملک تهران را فهرست کرده و سروده‌های بازماندهٔ منجیک ترمذی، شاعر سدهٔ چهارم هجری، را تصحیح کرده است. خوشنویسی نشان گوسان نیز کار اوست.",
  "امین نایب‌پور": "تحصیلات خود را در رشتۀ ریاضیات در دانشگاه صنعتی آریامهر (شریف) آغاز کرد و سپس برای ادامۀ تحصیل در فلسفه راهی آمریکا و آلمان شد. کارشناسی فلسفه و الهیات مسیحی را در دانشگاه سنت لوئیس در ایالت میزوری به پایان رساند و در ادامه در دانشگاه New School for Social Research در نیویورک به تحصیل در مقطع کارشناسی ارشد پرداخت. او مدرک دکتری خود در فلسفه را در سال ۲۰۲۳ از دانشگاه فرایبورگ آلمان دریافت کرد و پس از آن یک دورۀ پژوهشی پست‌دکترا را در دانشگاه شیکاگو گذراند. او اکنون خارج از دانشگاه مشغول مشاورۀ ریسک‌های حقوقی و سیاسی برای شرکت‌های بخش خصوصی است.",
  "سهراب لبیب": "سهراب لبیب، متولد ۱۳۶۶، فراگیری موسیقی را از کودکی آغاز کرد و پس از اتمام تحصیلات در هنرستان موسیقی تهران، عازم فرانسه و «مدرسه عالی آلفرد کورتو» در پاریس شد. پس از طی چند سال هنرآموزی نزد اساتید تراز اول در این مدرسه عالی، با اخذ بالاترین درجه در نوازندگی پیانو از آن فارغ‌التحصیل شد و فعالیت خود را در دو عرصه نوازندگی و آموزش موسیقی ادامه داد. همکاری و اجراهای متعدد با پیانیست شهیر فرانسوی «فیلیپ آنترومون» در کارنامه او ثبت است.\nدغدغه‌مند مسائل ایران، سهراب فعالیت‌های اجتماعی و فرهنگی خود در ارتباط با ایران را از ۱۳۸۸ تا به امروز حفظ کرده است.",
  "مهرداد غلامی": "فلوتیست، پژوهشگر و استاد فلوت در دانشگاه واشنگتن غربی (Western Washington University) است. وی آموزش موسیقی را در تهران آغاز کرد و با کسب رتبهٔ نخست کنکور سراسری هنر و بورس بنیاد ملی نخبگان به دانشگاه تهران راه یافت؛ سپس کارشناسی ارشد و دکتری نوازندگی فلوت را در دانشگاه تگزاس کریستین و نزد شانا تامپسون به پایان رساند. رسالهٔ دکتری وی، دربارهٔ موسیقی معاصر ایرانی برای فلوت و تاریخ موسیقی کلاسیک غربی در ایران، در ۲۰۲۳ برگزیدهٔ مسابقهٔ پژوهش تحصیلات تکمیلی انجمن ملی فلوت آمریکا شد. مهرداد غلامی با ارکستر سمفونیک تهران (در ۲۰۱۵ به عنوان فلوت اول میهمان و به رهبری علی رهبری) و با ارکسترهای سمفونیک فورت‌ورث، دالاس و نیووُرلد همکاری داشته و در ۲۰۱۷ تا ۲۰۱۹ فلوتیست آنسامبل معاصر آسپن بوده است. بیش از یک دهه است که در چارچوب «پروژهٔ فلوت ایران» به سفارش، نخستین اجرا، ضبط، تنظیم و انتشار آثار ایرانی برای فلوت می‌پردازد؛ از جمله آلبوم‌های Iranity و This Vast Sky و مجموعهٔ ۱۴ ترانهٔ فولکلور ایرانی (ALRY، ۲۰۲۴). از وی همچنین مقالاتی در زمینهٔ آموزش فلوت، رپرتوار معاصر و موسیقی ایرانی در The Flutist Quarterly منتشر شده است.",
  "سام گیوراد": "معمار، مرمت‌گر بناهای تاریخی، پژوهشگر و شاعر؛ زادهٔ ۱۳۵۴ در تهران و دانش‌آموختهٔ کارشناسی ارشد معماری است. کار او پژوهش، مرمت و حفاظت بافت‌ها و بناهای تاریخی است و شعرهایی از او، از جمله در مجموعهٔ خط خاموش و در وزن دنیا، منتشر شده است. سخنرانی‌ها و نوشته‌هایش بر حافظهٔ شهری، معماری معاصر ایران (از جمله آثار هوشنگ سیحون و جهانگیر درویش) و نقد دگرگونی‌های شهری متمرکز است.",
  "سهیل دلشاد": "تاریخ‌پژوه و کتیبه‌شناس؛ پژوهشگر خط میخی و فرهنگ و زبان‌های باستانی ایران است. کارشناسی ارشد فرهنگ و زبان‌های باستانی ایران را در ۱۳۹۱ از دانشگاه تهران با پایان‌نامهٔ «سنت شفاهی در ایران باستان و مسئله کتابت» گذراند و دکتری خود را در مؤسسهٔ ایران‌شناسی دانشگاه آزاد برلین (Freie Universität Berlin) گرفت. پژوهش او بر تاریخ خط و کتابت در میان‌رودان و ایران باستان و بر کتیبه‌های هخامنشی متمرکز است؛ در کنار انتشار مقاله و سخنرانی در مجامع دانشگاهی، از حفاظت میراث فرهنگی و خطر ساخت‌وساز در حریم آثاری چون تخت جمشید دفاع می‌کند.",
  "فرناز مدرسی‌فر": "آهنگساز، نوازندهٔ سنتور و شاعر ایرانی-فرانسوی، متولد ۱۳۶۸ (۱۹۸۹) در تهران است. او پس از تحصیل در هنرستان موسیقی دختران و دانشکدهٔ هنرهای زیبای دانشگاه تهران، در رشتهٔ نوازندگی سنتور و کارشناسی موسیقی فارغ‌التحصیل شد و رتبهٔ نخست نوازندگی را کسب کرد.\nاو پس از اقامت در پاریس، تحصیلات خود را ادامه داد و موفق به دریافت چندین دیپلم و مدرک کارشناسی ارشد در رشته‌های آهنگسازی، بداهه‌نوازی و موسیقی‌شناسی شد.\nمدرسی‌فر به‌عنوان آهنگساز، پژوهشگر و هنرمند مقیم (پانسیونر) آکادمی فرانسه در رم (ویلا مدیچی)، برای سال‌های ۲۰۲۵ و ۲۰۲۶ برگزیده شده است. او همچنین از برگزیدگان کارگاه آهنگسازی ژرژ آپرگیس و برندهٔ چندین جایزهٔ ملی و بین‌المللی از جمله جایزهٔ آهنگسازی آلان لوویه، بیست‌وچهارمین جایزهٔ سوپرفونیک (۲۰۲۳)، جایزهٔ آهنگسازی کلود آریو از ساسم (SACEM) (۲۰۲۴) و جایزهٔ بنیاد سینیاتور (Fondation Signature) و انجمن آهنگسازان و نویسندگان هنرهای دراماتیک فرانسه (SACD) در سال ۲۰۲۶ است.\nاو به‌عنوان آهنگساز، نوازنده و هنرمند مدعو با آنسامبل‌ها، مجموعه‌ها و جشنواره‌های معتبر متعددی همکاری داشته است؛ از جمله آنسامبل اینترکنتمپورن، کور-سیرکویی، آرس نوا، رشرش، سیاژ و خانهٔ موسیقی معاصر پاریس.\nاو همچنین به‌عنوان مدرس آهنگسازی، مدعو بنیاد روایومون در آکادمی «صداهای نو» (۲۰۲۶) است و به‌عنوان آهنگساز و نوازنده با هنرمندان برجسته‌ای چون بارتاباس، لارس وگت، ونسان اووگِه و همایون شجریان همکاری کرده است. آثار و اجراهای او از رادیو France Musique پخش شده و در تئاتر شهر پاریس و بسیاری از جشنواره‌های معتبر اروپایی به روی صحنه رفته‌اند.\nفرناز مدرسی‌فر همچنین از برگزیدگان آکادمی آهنگسازان جوان ارکستر مجلسی پاریس است. آثار او در مراکز و سالن‌های مهمی همچون فیلارمونی پاریس، تئاتر شاتله، اپرای رنس، بوزار بروکسل، اپرای نانت و آنژه، اودیتوریوم پواتیه و بنیاد گولبنکیان لیسبون به اجرا درآمده‌اند."
};

/* Honorifics a writer asked us to carry. They appear where the biography names
   the writer — the essay-end block and the avatar popover — and never in the
   byline, which stays as the writer signed the proof. */
var BIO_NAMES = {
  'فرزانه گشتاسب': 'دکتر فرزانه گشتاسب',
  'امین نایب‌پور': 'دکتر امین نایب‌پور',
  'سهیل دلشاد': 'دکتر سهیل دلشاد',
  'مهرداد غلامی': 'دکتر مهرداد غلامی'
};
var bioName = function bioName(n) {
  return BIO_NAMES[n] || n;
};

/* render a bio string: newlines become paragraph breaks, bare URLs become links */
/* a biography the desk returned with bold or italic renders as HTML; these strings are written by the
   house, nothing else reaches them (EIC, 9 Oct 2026) */
var BIO_RICH = /<\/?(i|b|em|strong|br)\b/i;
function bioWithLinks(text) {
  if (BIO_RICH.test(String(text || ''))) {
    var h = String(text).split('\n').filter(function (p) {
      return p.trim();
    }).join('<br><br>').replace(/(^|[\s(])(https?:\/\/[^\s—<]+)/g, function (m, pre, u) {
      return pre + '<a href="' + u + '" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">' + u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') + '</a>';
    });
    return /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: h
      }
    });
  }
  var paras = String(text || '').split('\n').filter(function (p) {
    return p.trim();
  });
  return paras.map(function (para, pi) {
    var inner = para.split(/(https?:\/\/[^\s—]+)/g).map(function (p, i) {
      return /^https?:\/\//.test(p) ? /*#__PURE__*/React.createElement("a", {
        key: i,
        href: p,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
          color: 'var(--accent)'
        }
      }, p.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')) : /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, p);
    });
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: pi
    }, pi > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)) : null, inner);
  });
}
function toFa(n) {
  return String(n).replace(/[0-9]/g, function (d) {
    return '۰۱۲۳۴۵۶۷۸۹'[d];
  });
}

/* two-part titles: the part after «:» or «؛» drops to the next line */
var ART_TITLE_BREAKS = {
  "تأویلی آذرکیوانی از اسطورۀ آفرینش زردشتی در کتاب دبستان مذاهب": ["تأویلی آذرکیوانی", "از اسطورۀ آفرینش زردشتی", "در کتاب دبستان مذاهب"],
  "گوسان کیست؟ سنت گوسانان در ایران باستان": ["گوسان کیست؟", "سنت گوسانان در ایران باستان"]
};
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
function TitleLines(_ref) {
  var text = _ref.text;
  /* long one-part titles wrap at a fixed point — same size, same colour.
     A trailing «(بخش …)» label loses its parentheses and drops to its own,
     smaller line. */
  var raw = String(text == null ? '' : text);
  var pm = raw.match(/^(.*?)\s*(?:\((بخش\s[^)]+)\)|[—–-]\s*(بخش\s.+?))\s*$/);
  var base = pm ? pm[1] : raw;
  var partEl = pm ? /*#__PURE__*/React.createElement("span", {
    className: "title-part"
  }, pm[2] || pm[3]) : null;
  var br = ART_TITLE_BREAKS[base];
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

/* footnote contents for the featured essay (referenced by Footnote n=…) */
var ESSAY_FOOTNOTES = ['واژهٔ «گوسان» ریشه در زبان پارتی دارد. مری بویس در مقالهٔ کلاسیک خود، «گوسان پارتی و سنت رامشگری ایرانی» (۱۹۵۷)، این واژه را با نقش خنیاگرانِ راوی پیوند داده است.', 'خداینامه، متن گمشدهٔ تاریخ‌نگاری دورهٔ ساسانی، یکی از سرچشمه‌های اصلی روایت‌های ملی ایران و از منابع دور شاهنامهٔ فردوسی به شمار می‌رود.', 'ابونصر فارابی در «کتاب موسیقی کبیر» به پیوند ژرف شعر و نغمه در فرهنگ ایرانی و یونانی پرداخته و جای‌گاه موسیقی را در تربیت جان آدمی برجسته کرده است.', 'اشاره به بیت فردوسی در شرح روزگار چیرگی ضحاک: «هنر خوار شد جادویی ارجمند / نهان راستی، آشکارا گزند».'];
function AuthorAvatar(_ref2) {
  var name = _ref2.name,
    bioHtml = _ref2.bioHtml;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var ref = React.useRef(null);
  var src = AUTHOR_PHOTOS[name];
  /* only board members (those with a photo) get an avatar circle; others none */
  if (!src) return null;
  /* bioHtml = the essay-end biography (content-override); the popover always
     mirrors it when present, AUTHOR_BIOS is only the fallback */
  var bio = AUTHOR_BIOS[name] || 'از نویسندگان و پژوهشگران همکار گاهنامهٔ گوسان.';
  React.useEffect(function () {
    if (!open) return;
    var onDoc = function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    className: "author-avatar-wrap",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "author-avatar-btn",
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    "aria-expanded": open,
    "aria-label": "\u062F\u0631\u0628\u0627\u0631\u0647\u0654 ".concat(name),
    title: "\u062F\u0631\u0628\u0627\u0631\u0647\u0654 ".concat(name)
  }, src ? /*#__PURE__*/React.createElement("img", {
    className: "author-avatar",
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    className: "author-avatar author-avatar--mono"
  }, (name || '؟').trim().charAt(0))), open ? /*#__PURE__*/React.createElement("div", {
    className: "author-bio-card",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("span", {
    className: "author-bio-name"
  }, bioName(name)), bioHtml ? /*#__PURE__*/React.createElement("p", {
    className: "author-bio-text",
    dangerouslySetInnerHTML: {
      __html: bioHtml
    }
  }) : /*#__PURE__*/React.createElement("p", {
    className: "author-bio-text"
  }, BIO_RICH.test(bio) ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: bio
    }
  }) : bio)) : null);
}

/* compact writer / interviewee biography, shown at the end of the article */
var AUTHOR_SITES = {
  "فرناز مدرسی‌فر": "https://www.farnazmodarresifar.com",
  "مهرداد غلامی": "https://www.mehrdadgholami.com"
};
function AuthorBioBlock(_ref3) {
  var post = _ref3.post,
    ov = _ref3.ov;
  var isInterview = !!GUEST_BY_SLUG[post.slug];
  var person = isInterview ? GUEST_BY_SLUG[post.slug] : post.author;
  var bio = AUTHOR_BIOS[person];
  var photo = AUTHOR_PHOTOS[person];
  var kind = isInterview ? 'مهمان' : 'نویسنده';
  var site = AUTHOR_SITES[person];
  var nameStyle = {
    color: 'var(--accent)',
    fontWeight: 700
  };
  var nameEl = site ? /*#__PURE__*/React.createElement("a", {
    href: site,
    target: "_blank",
    rel: "noopener noreferrer",
    style: _objectSpread(_objectSpread({}, nameStyle), {}, {
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    })
  }, bioName(person)) : /*#__PURE__*/React.createElement("span", {
    style: nameStyle
  }, bioName(person));
  var bioEl = ov && ov.bio ? /*#__PURE__*/React.createElement("span", {
    className: "article-bio-editable",
    dangerouslySetInnerHTML: {
      __html: ov.bio
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "article-bio-editable"
  }, bio ? bioWithLinks(bio) : 'معرفی کوتاه ' + kind + ' در دست تکمیل است.');
  return /*#__PURE__*/React.createElement("div", {
    className: "article-bio"
  }, photo ? /*#__PURE__*/React.createElement("span", {
    className: "article-bio-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: person
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "article-bio-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "article-bio-text"
  }, nameEl, " ", bioEl)));
}
function ReadingIndicator() {
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    progress = _React$useState4[0],
    setProgress = _React$useState4[1];
  React.useEffect(function () {
    var onScroll = function onScroll() {
      var el = document.documentElement;
      var max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "reading-rail",
    style: {
      position: 'fixed',
      top: '90px',
      left: '2.2rem',
      bottom: '2.2rem',
      width: '3px',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '1px',
      right: 'auto',
      background: 'var(--line-draft)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      width: '3px',
      height: "".concat(progress * 100, "%"),
      background: 'var(--ink)',
      transition: 'height 0.1s linear'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      position: 'absolute',
      bottom: '-1.4rem',
      left: '-0.4rem',
      fontSize: '0.6rem'
    }
  }, Math.round(progress * 100), "%"));
}

/* ---------- footnotes ---------- */
function Footnote(_ref4) {
  var n = _ref4.n;
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    open = _React$useState6[0],
    setOpen = _React$useState6[1];
  var ref = React.useRef(null);
  var content = ESSAY_FOOTNOTES[n - 1];
  React.useEffect(function () {
    if (!open) return;
    var onDoc = function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    className: "fn",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fn-ref".concat(open ? ' is-open' : ''),
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    onMouseEnter: function onMouseEnter() {
      return setOpen(true);
    },
    "aria-label": "\u067E\u06CC\u200C\u0646\u0648\u0634\u062A ".concat(toFa(n))
  }, toFa(n)), /*#__PURE__*/React.createElement("span", {
    className: "fn-card".concat(open ? ' is-open' : ''),
    dir: acNoteIsLatin(content) ? 'ltr' : undefined,
    role: "note",
    onMouseLeave: function onMouseLeave() {
      return setOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fn-card-num"
  }, acNoteIsLatin(content) ? n : toFa(n)), /*#__PURE__*/React.createElement("span", {
    className: "fn-card-text"
  }, content)));
}
function FootnotesList() {
  return /*#__PURE__*/React.createElement("section", {
    className: "fn-list-sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gsn-technical",
    style: {
      color: 'var(--gold-deep)',
      display: 'block',
      marginBottom: '0.5rem',
      textAlign: 'right'
    }
  }, "NOTES // \u067E\u06CC\u200C\u0646\u0648\u0634\u062A"), /*#__PURE__*/React.createElement("ol", {
    className: "fn-list"
  }, ESSAY_FOOTNOTES.map(function (t, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      id: "fn-".concat(i + 1),
      dir: acNoteIsLatin(t) ? 'ltr' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "fn-list-num"
    }, acNoteIsLatin(t) ? i + 1 : toFa(i + 1)), t);
  })));
}

/* ---------- listen bar — placeholder only for now (editor-in-chief, 2 Aug 2026):
   browser TTS reads Persian as gibberish, so playback is disabled until real
   narration files are ready. The bar stays as a visual placeholder. ---------- */
function ListenBar(_ref5) {
  var getText = _ref5.getText;
  return /*#__PURE__*/React.createElement("div", {
    className: "listen-bar is-disabled"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "listen-play",
    disabled: true,
    "aria-label": "\u067E\u062E\u0634 (\u0628\u0647\u200C\u0632\u0648\u062F\u06CC)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "listen-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "listen-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "listen-label"
  }, "\u0646\u0633\u062E\u0647\u0654 \u0635\u0648\u062A\u06CC")), /*#__PURE__*/React.createElement("div", {
    className: "listen-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "listen-fill",
    style: {
      width: '0%'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "listen-tag"
  }, "AUDIO"));
}

/* ---------- article meta chips (reading time + word count) ---------- */
function ArticleMeta(_ref6) {
  var articleRef = _ref6.articleRef,
    slug = _ref6.slug;
  var _React$useState7 = React.useState(null),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    stats = _React$useState8[0],
    setStats = _React$useState8[1];
  /* Counts what is actually on screen. The body arrives in stages — the JSX
     placeholder first, then the approved web-edit from content-overrides, then
     the table of contents — so a plain effect measured whichever stage happened
     to be mounted when it ran and kept that number. An observer re-counts on
     every change, which is why a پاره no longer reports the whole essay. */
  React.useEffect(function () {
    var el = articleRef.current;
    if (!el) return;
    var t = null;
    var count = function count() {
      var text = (el.textContent || '').trim();
      var words = (text.match(/[^\s]+/g) || []).length;
      if (!words) return;
      setStats({
        words: words,
        minutes: Math.max(1, Math.round(words / 200))
      });
    };
    var schedule = function schedule() {
      clearTimeout(t);
      t = setTimeout(count, 120);
    };
    count();
    var mo = new MutationObserver(schedule);
    mo.observe(el, {
      childList: true,
      subtree: true,
      characterData: true
    });
    return function () {
      clearTimeout(t);
      mo.disconnect();
    };
  }, [articleRef, slug]);
  if (!stats) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "article-chips"
  }, /*#__PURE__*/React.createElement("span", {
    className: "article-chip"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })), toFa(stats.minutes), " \u062F\u0642\u06CC\u0642\u0647 \u0645\u0637\u0627\u0644\u0639\u0647"), /*#__PURE__*/React.createElement("span", {
    className: "article-chip-sep"
  }), /*#__PURE__*/React.createElement("span", {
    className: "article-chip"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7V5h16v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 19h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })), stats.words.toLocaleString('fa-IR'), " \u0648\u0627\u0698\u0647"));
}

/* ---------- article table of contents (only when > 3 headings) ---------- */
/* an essay may ask for its contents box with fewer headings (EIC, 8 Oct 2026: Labib's three sections) */
var TOC_MIN = {
  'ethos-of-survival': 3
};
/* a contents entry worded differently from its heading (EIC, 8 Oct 2026): the title already says «بخش نخست» */
var TOC_LABEL = {
  'herzfeld-german-archives': {
    0: 'درآمد'
  }
};
function TableOfContents(_ref7) {
  var articleRef = _ref7.articleRef,
    slug = _ref7.slug,
    labels = _ref7.labels;
  var _React$useState9 = React.useState([]),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    items = _React$useState0[0],
    setItems = _React$useState0[1];
  var min = TOC_MIN[String(slug).replace(/-ov$/, '')] || 4; /* the slug carries «-ov» once the desk override has loaded */
  React.useEffect(function () {
    if (!articleRef.current) return;
    var hs = Array.prototype.slice.call(articleRef.current.querySelectorAll('h2.gsn-display'));
    if (hs.length < min) {
      setItems([]);
      return;
    }
    var base = String(slug).replace(/-ov$/, '');
    var list = hs.map(function (h, i) {
      if (!h.id) h.id = 'sec-' + slug + '-' + i;
      /* the heading's words only: a footnote marker and its hidden card are not part of the title */
      var c = h.cloneNode(true);
      c.querySelectorAll('.fn, .fn-ref, .fn-card, sup, .part-jump').forEach(function (n) {
        return n.remove();
      });
      var text = (c.textContent || '').replace(/\s+/g, ' ').trim();
      /* the desk's own wording of an entry (override «toc», EIC 9 Oct 2026) wins over the fixed one */
      var lab = labels || TOC_LABEL[base];
      /* a part marker (<h2 class="essay-part">, EIC 19 Oct 2026: «بخش دوم»، «بخش سوم» so a long essay
         reads in several sittings) heads the sections that follow it in the list */
      return {
        id: h.id,
        text: lab && lab[i] || text,
        part: h.classList.contains('essay-part')
      };
    });
    /* An essay whose sections are numbered rather than titled («۱», «۲», «۳»)
       gives a contents list of bare numerals, which tells the reader nothing.
       A contents list is worth having only when the headings are words. */
    var worded = list.filter(function (it) {
      return !it.part && /[^\s\d\u06F0-\u06F9\u0660-\u0669.\u060C،-]/.test(it.text);
    });
    if (worded.length < min) {
      setItems([]);
      return;
    }
    setItems(list);
  }, [articleRef, slug, min, labels]);
  if (items.length < min) return null;
  var jump = function jump(e, id) {
    e.preventDefault();
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "article-toc",
    "aria-label": "\u0641\u0647\u0631\u0633\u062A \u0645\u0637\u0627\u0644\u0628"
  }, /*#__PURE__*/React.createElement("span", {
    className: "article-toc-head"
  }, "\u0641\u0647\u0631\u0633\u062A"), /*#__PURE__*/React.createElement("ol", null, items.map(function (it) {
    return /*#__PURE__*/React.createElement("li", {
      key: it.id,
      className: it.part ? 'is-part' : undefined
    }, /*#__PURE__*/React.createElement("a", {
      href: '#' + it.id,
      onClick: function onClick(e) {
        return jump(e, it.id);
      }
    }, it.text));
  })));
}

/* ---------- social / share icons ---------- */
var GOSAN_SITE_BASE = 'https://www.gosan.org/';
function ShareIcon(_ref8) {
  var kind = _ref8.kind;
  if (kind === 'x') {
    /* official X (formerly Twitter) logo — solid glyph */
    return /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    }));
  }
  var common = {
    width: 17,
    height: 17,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  var paths = {
    link: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "4",
      width: "20",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "2 6 12 13 22 6"
    })),
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }),
    telegram: /*#__PURE__*/React.createElement("polygon", {
      points: "22 2 15 22 11 13 2 9 22 2"
    }),
    whatsapp: /*#__PURE__*/React.createElement("path", {
      d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
    }),
    print: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 9V3h12v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "6",
      y: "14",
      width: "12",
      height: "7"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", common, paths[kind]);
}
function ShareRow(_ref9) {
  var post = _ref9.post,
    url = _ref9.url;
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    copied = _React$useState10[0],
    setCopied = _React$useState10[1];
  var slug = post ? post.slug : '';
  /* social buttons point at a lightweight per-article share page that carries the
     Open Graph cover image, then redirects real visitors to the article. A گاه‌نوشت
     passes its own address as `url`: its folder on the public site carries its card. */
  var shareUrl = url || GOSAN_SITE_BASE + 'share/' + slug + '.html';
  var articleUrl = url || GOSAN_SITE_BASE + 'article/' + slug;
  var text = (post ? post.title : 'گوسان') + ' — گوسان';
  var enc = encodeURIComponent;
  var pop = function pop(url) {
    return function (e) {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer,width=620,height=560');
    };
  };
  var copy = function copy(e) {
    e.preventDefault();
    try {
      navigator.clipboard.writeText(articleUrl);
    } catch (err) {}
    setCopied(true);
    setTimeout(function () {
      return setCopied(false);
    }, 1600);
  };
  var xUrl = 'https://twitter.com/intent/tweet?text=' + enc(text) + '&url=' + enc(shareUrl);
  var fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + enc(shareUrl);
  var tgUrl = 'https://t.me/share/url?url=' + enc(shareUrl) + '&text=' + enc(text);
  var waUrl = 'https://wa.me/?text=' + enc(text + ' ' + shareUrl);
  var mailUrl = 'mailto:?subject=' + enc(text) + '&body=' + enc(text + '\n\n' + shareUrl);
  return /*#__PURE__*/React.createElement("div", {
    className: "share-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "share-label"
  }, copied ? 'نشانی رونوشت شد ✓' : 'این متن را به اشتراک بگذارید'), /*#__PURE__*/React.createElement("div", {
    className: "share-icons"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: copy,
    "aria-label": "\u0631\u0648\u0646\u0648\u0634\u062A \u067E\u06CC\u0648\u0646\u062F",
    title: "\u0631\u0648\u0646\u0648\u0634\u062A \u067E\u06CC\u0648\u0646\u062F"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "link"
  })), /*#__PURE__*/React.createElement("a", {
    href: mailUrl,
    "aria-label": "\u0627\u0631\u0633\u0627\u0644 \u0628\u0627 \u0631\u0627\u06CC\u0627\u0646\u0627\u0645\u0647",
    title: "\u0631\u0627\u06CC\u0627\u0646\u0627\u0645\u0647"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "mail"
  })), /*#__PURE__*/React.createElement("a", {
    href: xUrl,
    onClick: pop(xUrl),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u0627\u06CC\u06A9\u0633",
    title: "\u0627\u06CC\u06A9\u0633 (X)"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "x"
  })), /*#__PURE__*/React.createElement("a", {
    href: fbUrl,
    onClick: pop(fbUrl),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u0641\u06CC\u0633\u0628\u0648\u06A9",
    title: "\u0641\u06CC\u0633\u0628\u0648\u06A9"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "facebook"
  })), /*#__PURE__*/React.createElement("a", {
    href: tgUrl,
    onClick: pop(tgUrl),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u062A\u0644\u06AF\u0631\u0627\u0645",
    title: "\u062A\u0644\u06AF\u0631\u0627\u0645"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "telegram"
  })), /*#__PURE__*/React.createElement("a", {
    href: waUrl,
    onClick: pop(waUrl),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "\u0627\u0634\u062A\u0631\u0627\u06A9 \u062F\u0631 \u0648\u0627\u062A\u0633\u0627\u067E",
    title: "\u0648\u0627\u062A\u0633\u0627\u067E"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "whatsapp"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      window.print();
    },
    "aria-label": "\u0686\u0627\u067E \u06CC\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0628\u0647 PDF",
    title: "\u0686\u0627\u067E / \u0630\u062E\u06CC\u0631\u0647 \u0628\u0647 PDF"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    kind: "print"
  }))));
}

/* ---------- summary aside (چکیده) — always visible ---------- */
/* ---------- desk injection ----------
   The edit desk stages a payload in sessionStorage before loading this page in
   its iframe, so an essay that is NOT on the public site can still be rendered
   for editing from private data. Completely inert when no payload is staged. */
function deskPayload(slug) {
  try {
    var raw = window.sessionStorage.getItem('gosan-desk-payload');
    if (!raw) return null;
    var p = JSON.parse(raw);
    return p && p.slug === slug ? p : null;
  } catch (e) {
    return null;
  }
}

/* ---------- approved web-edits override the JSX content (content-overrides/<slug>.json) ---------- */
function useContentOverride(slug) {
  var _React$useState11 = React.useState(null),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    ov = _React$useState12[0],
    setOv = _React$useState12[1];
  React.useEffect(function () {
    var on = true;
    var staged = deskPayload(slug);
    if (staged && staged.override) {
      setOv(staged.override);
      return function () {
        on = false;
      };
    }
    setOv(null);
    fetch('content-overrides/' + slug + '.json', {
      cache: 'no-cache'
    }).then(function (r) {
      return r.ok ? r.json() : null;
    }).then(function (j) {
      if (on && j && (j.body || j.summary || j.date || j.bio)) setOv(j);
    })["catch"](function () {});
    return function () {
      on = false;
    };
  }, [slug]);
  return ov;
}

/* ---------- interview layout (گفتگو) — website only (EIC, 24 Oct 2026) ----------
   The desk edit's HTML is kept verbatim; this only regroups its blocks into a
   magazine sequence: standfirst → hero plate → display quote → a two-column
   passage → the dialogue with speaker labels → a quote band → the portrait plate
   beside a sentence of the guest → the closing question in a box. The print issue
   and the PDF keep their own layout. Inert on the edit desk (the desk saves the
   DOM it edits) and for any other section. */
function interviewLayout(html, post, ov) {
  if (!html || typeof DOMParser === 'undefined') return html;
  var doc = new DOMParser().parseFromString('<div id="r">' + html + '</div>', 'text/html');
  var root = doc.getElementById('r');
  var top = root.firstElementChild && root.children.length === 1 && root.firstElementChild.tagName === 'DIV' ? root.firstElementChild : root;
  var kind = function kind(el) {
    if (el.tagName === 'P' && el.classList.contains('essay-lede')) return 'lede';
    if (el.tagName === 'FIGURE') return 'figure';
    if (el.tagName === 'BLOCKQUOTE') return 'quote';
    if (el.tagName === 'SECTION' || el.classList.contains('fn-list-sec')) return 'notes';
    if (el.tagName === 'P') {
      var st = el.getAttribute('style') || '';
      var b = el.firstElementChild;
      var bold = /font-weight:\s*700/.test(st) || b && b.tagName === 'B' && el.textContent.trim() === b.textContent.trim();
      return bold ? 'q' : 'a';
    }
    return 'other';
  };
  var items = Array.from(top.children).map(function (el) {
    return {
      el: el,
      k: kind(el)
    };
  });
  if (items.filter(function (i) {
    return i.k === 'q';
  }).length < 3) return html; // not a Q&A piece: leave it
  // the web's inline dress goes; the layout's own type takes over
  items.forEach(function (_ref0) {
    var el = _ref0.el,
      k = _ref0.k;
    if (k === 'q' || k === 'a' || k === 'quote' || k === 'lede') el.removeAttribute('style');
    if (k === 'q') el.querySelectorAll('b').forEach(function (b) {
      if (b.textContent.trim() === el.textContent.trim()) b.replaceWith.apply(b, _toConsumableArray(b.childNodes));
    });
  });
  var guest = post && post.title && post.title.split('با ').pop().trim() || '';
  var mk = function mk(cls, inner) {
    var d = doc.createElement('div');
    d.className = cls;
    d.innerHTML = inner || '';
    return d;
  };
  var out = [];
  var i = 0;
  // 0 · the guest, presented before the interview begins: name, portrait and the
  //     biography the article end used to carry (EIC, 24 Oct 2026)
  if (ov && ov.bio && post && GUEST_BY_SLUG[post.slug]) {
    var person = GUEST_BY_SLUG[post.slug];
    var site = AUTHOR_SITES[person];
    var name = site ? '<a href="' + site + '" target="_blank" rel="noopener noreferrer">' + bioName(person) + '</a>' : bioName(person);
    // not a card: the interviewer introduces her guest in the text itself — the hedcut
    // set into the first lines, the name as a turquoise line, the biography in the text
    // face, then the lede under its gold rule and the questions (EIC, 24 Oct 2026)
    var panel = mk('iv-intro iv-reveal',
    // the bio's six paragraphs set as three: each pair joined into one, words untouched (EIC, 24 Oct 2026)
    function () {
      var paras = ov.bio.split(/(?:\s*<br\s*\/?>\s*){2,}/).map(function (x) {
        return x.trim();
      }).filter(Boolean);
      var pairs = [];
      for (var n = 0; n < paras.length; n += 2) pairs.push(paras.slice(n, n + 2).join(' '));
      return pairs.map(function (x, n) {
        return '<p class="iv-guest-bio">' + (n === 0 ? '<span class="iv-guest-name">' + name + '</span> ' : '') + x + '</p>';
      }).join('')
      // the site's gold motif divider after the biography (EIC, 24 Oct 2026); mounted by useInterviewMotif
      + '<div class="iv-motif" aria-hidden="true"></div>';
    }());
    out.push(panel);
  }
  // 1 · standfirst + hero + display quote
  var lede = items.find(function (x) {
    return x.k === 'lede';
  });
  var intro = out.length && out[0].classList.contains('iv-intro') ? out[0] : null;
  if (lede) {
    lede.el.classList.add('iv-standfirst');
    if (intro) intro.appendChild(lede.el);else out.push(lede.el);
  }
  i = items.indexOf(lede) + 1;
  // the opening plate: the first picture with the display quote beside it (a tall
  // portrait at full measure would dwarf the page); a quote alone stands on its own
  var hero = null,
    display = null;
  if (items[i] && items[i].k === 'figure') {
    hero = items[i].el;
    i++;
  }
  if (items[i] && items[i].k === 'quote') {
    display = items[i].el;
    display.classList.add('iv-display');
    i++;
  }
  if (hero && display) {
    var w = mk('iv-open iv-reveal');
    var f = mk('iv-hero');
    f.appendChild(hero);
    w.appendChild(f);
    w.appendChild(display);
    out.push(w);
  } else if (hero) {
    var _w = mk('iv-hero iv-reveal');
    _w.appendChild(hero);
    out.push(_w);
  } else if (display) {
    var _w2 = mk('iv-reveal');
    _w2.appendChild(display);
    out.push(_w2);
  }
  // the Q&A run, up to the next quote / figure / notes
  var run = [];
  while (i < items.length && (items[i].k === 'q' || items[i].k === 'a')) run.push(items[i++]);
  // 2 · no side-by-side columns: a question and its answers always follow one
  //     another down the page, in the order the EIC wrote them (EIC, 24 Oct 2026)
  var colsEnd = 0;
  // 3 · the dialogue, with speaker labels — a question and its answers make one exchange
  // who speaks: the interviewer and the guest, full names on the first exchange and
  // initials after it, as a magazine sets an interview (EIC, 24 Oct 2026)
  var asker = post && post.author || '';
  var initials = function initials(n) {
    return n.split(/\s+/).filter(Boolean).map(function (w) {
      return w[0] + '.';
    }).join(' ');
  };
  var first = true;
  var who = function who(name) {
    return mk('iv-who', first ? name : initials(name));
  };
  var dialogue = mk('iv-dialogue');
  // a question the EIC sets as a lead-in paragraph plus the question itself is two
  // consecutive question paragraphs: they share one exchange, and the answer follows
  var ex = null,
    open = false;
  run.slice(colsEnd).forEach(function (_ref1) {
    var el = _ref1.el,
      k = _ref1.k;
    if (k === 'q') {
      el.classList.add('iv-q');
      if (ex && open) {
        ex.querySelector('.iv-ask').appendChild(el);
        return;
      }
      ex = mk('iv-exchange iv-reveal');
      open = true;
      var qw = mk('iv-ask');
      qw.appendChild(who(asker));
      qw.appendChild(el);
      ex.appendChild(qw);
      dialogue.appendChild(ex);
    } else {
      if (!ex) {
        ex = mk('iv-exchange iv-reveal');
        dialogue.appendChild(ex);
      }
      var ans = ex.querySelector('.iv-answer');
      if (!ans) {
        ans = mk('iv-answer');
        ans.appendChild(who(guest));
        ex.appendChild(ans);
        first = false;
      }
      open = false;
      el.classList.add('iv-a');
      ans.appendChild(el);
    }
  });
  if (dialogue.children.length) out.push(dialogue);
  // 4 · what follows: a quote becomes a band; the last question and its answers a box;
  //     a figure a plate beside a sentence of the guest
  var finalBox = null,
    plate = null,
    notes = null;
  var tail = [];
  while (i < items.length) {
    var it = items[i++];
    // every quote inside the piece takes the opener's design: gold brackets, gold text (EIC, 24 Oct 2026)
    if (it.k === 'quote') {
      it.el.classList.add('iv-display');
      var _w3 = mk('iv-quote iv-reveal');
      _w3.appendChild(it.el);
      tail.push(_w3);
    } else if (it.k === 'q') {
      finalBox = mk('iv-final iv-reveal');
      finalBox.appendChild(who(asker));
      it.el.classList.add('iv-q');
      finalBox.appendChild(it.el);
      tail.push(finalBox);
    } else if (it.k === 'a') {
      it.el.classList.add('iv-a');
      if (finalBox && !finalBox.querySelector('.iv-a')) finalBox.appendChild(who(guest));
      (finalBox || tail[tail.length - 1] || dialogue).appendChild(it.el);
    } else if (it.k === 'figure') {
      plate = mk('iv-plate iv-reveal');
      plate.appendChild(it.el);
      tail.push(plate);
    } else if (it.k === 'notes') notes = it.el;else tail.push(it.el);
  }
  tail.forEach(function (n) {
    return out.push(n);
  });
  if (notes) out.push(notes);
  var wrap = doc.createElement('div');
  wrap.className = 'iv-layout';
  out.forEach(function (n) {
    return wrap.appendChild(n);
  });
  return wrap.outerHTML;
}
function useInterviewMotif(articleRef, on) {
  React.useEffect(function () {
    if (!on || !articleRef.current || !window.MotifDivider) return;
    var roots = Array.from(articleRef.current.querySelectorAll('.iv-motif:empty')).map(function (el) {
      var r = ReactDOM.createRoot(el);
      r.render(/*#__PURE__*/React.createElement(MotifDivider, {
        size: 26,
        style: {
          margin: 0
        }
      }));
      return r;
    });
    return function () {
      return roots.forEach(function (r) {
        return setTimeout(function () {
          return r.unmount();
        }, 0);
      });
    };
  }, [on]);
}
function useInterviewReveal(articleRef, on) {
  React.useEffect(function () {
    if (!on || !articleRef.current || typeof IntersectionObserver === 'undefined') return;
    if (document.body.getAttribute('data-motion') === 'off') {
      articleRef.current.querySelectorAll('.iv-reveal').forEach(function (el) {
        return el.classList.add('is-in');
      });
      return;
    }
    var els = Array.from(articleRef.current.querySelectorAll('.iv-reveal'));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });
    els.forEach(function (el) {
      return io.observe(el);
    });
    // a hidden tab or a browser that never fires the observer still shows the piece
    var safety = setTimeout(function () {
      return els.forEach(function (el) {
        return el.classList.add('is-in');
      });
    }, 1800);
    return function () {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [on]); // once per body: a re-render (reading-time ticks) must not restart the reveal
}
function SummaryAside(_ref10) {
  var post = _ref10.post,
    getText = _ref10.getText,
    ov = _ref10.ov;
  return /*#__PURE__*/React.createElement("aside", {
    className: "article-aside"
  }, /*#__PURE__*/React.createElement(ListenBar, {
    getText: getText
  }), post.tag !== 'گفتگو' && /*#__PURE__*/React.createElement("div", {
    className: "summary-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-head"
  }, "\u0686\u06A9\u06CC\u062F\u0647"), /*#__PURE__*/React.createElement("hr", {
    className: "summary-rule"
  }), ov && ov.summary ? /*#__PURE__*/React.createElement("p", {
    className: "summary-text",
    dangerouslySetInnerHTML: {
      __html: ov.summary
    }
  }) : /*#__PURE__*/React.createElement("p", {
    className: "summary-text"
  }, window.GOSAN_SUMMARIES && window.GOSAN_SUMMARIES[post.slug] || post.summary || post.excerpt)), /*#__PURE__*/React.createElement("div", {
    className: "share-card"
  }, /*#__PURE__*/React.createElement(ShareRow, {
    post: post
  })));
}

/* ---------- reader comments ---------- */
/* `post` only titles the mail — the desk should see which essay a note is about
   without opening it */
function CommentsSection(_ref11) {
  var post = _ref11.post;
  var _React$useState13 = React.useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    sent = _React$useState14[0],
    setSent = _React$useState14[1]; // false · 'ok' · 'mail'
  var _React$useState15 = React.useState(''),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    err = _React$useState16[0],
    setErr = _React$useState16[1];
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    busy = _React$useState18[0],
    setBusy = _React$useState18[1];
  return /*#__PURE__*/React.createElement("section", {
    className: "comments-section"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "gsn-rule-gold",
    style: {
      margin: '0 0 2.4rem'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "gsn-display",
    style: {
      fontSize: '1.7rem',
      color: 'var(--gold-deep)',
      margin: '0 0 1.8rem'
    }
  }, "\u062F\u06CC\u062F\u06AF\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0627 \u0645\u0627 \u0628\u0647 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u06AF\u0630\u0627\u0631\u06CC\u062F"), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--accent-strong)',
      fontWeight: 500,
      margin: 0
    }
  }, sent === 'mail' ? 'فرستادن از وب‌سایت ممکن نشد؛ یادداشت شما در برنامهٔ ایمیلتان باز شده است. لطفاً آن را از همان‌جا بفرستید.' : 'سپاس؛ یادداشت شما به دست تحریریهٔ گوسان رسید.') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "comments-note"
  }, "\u06CC\u0627\u062F\u062F\u0627\u0634\u062A \u0634\u0645\u0627 \u062A\u0646\u0647\u0627 \u0628\u0647 \u062F\u0633\u062A \u062A\u062D\u0631\u06CC\u0631\u06CC\u0647 \u0645\u06CC\u200C\u0631\u0633\u062F \u0648 \u0628\u0631 \u0648\u0628\u200C\u0633\u0627\u06CC\u062A \u0645\u0646\u062A\u0634\u0631 \u0646\u0645\u06CC\u200C\u0634\u0648\u062F."), /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      var v = function v(id) {
        return (document.getElementById(id) || {}).value || '';
      };
      var fields = {
        name: v('cm-name'),
        email: v('cm-mail'),
        message: v('cm-msg'),
        website: v('cm-hp'),
        /* honeypot */
        subject: 'دیدگاه تازه — ' + (post && post.title || 'گوسان'),
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "comments-row"
  }, /*#__PURE__*/React.createElement(FormField, {
    id: "cm-name",
    placeholder: "\u0646\u0627\u0645 \u0634\u0645\u0627"
  }), /*#__PURE__*/React.createElement(FormField, {
    id: "cm-mail",
    type: "email",
    placeholder: "\u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627"
  })), /*#__PURE__*/React.createElement(FormField, {
    id: "cm-msg",
    multiline: true,
    placeholder: "\u067E\u06CC\u0627\u0645 \u062E\u0648\u062F \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F\u2026"
  }), /*#__PURE__*/React.createElement("input", {
    id: "cm-hp",
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
  }, busy ? 'در حال فرستادن…' : 'ارسال پیام'))));
}
function FullEssayBody() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "essay-lede"
  }, "\u0627\u0632 \u0631\u0648\u0632\u06AF\u0627\u0631\u0627\u0646 \u06A9\u0647\u0646 \u062F\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0633\u062A\u0627\u0646\u060C \u0631\u0627\u0645\u0634\u06AF\u0631\u0627\u0646 \u0648 \u0646\u063A\u0645\u0647\u200C\u062E\u0648\u0627\u0646\u0627\u0646\u06CC \u062F\u0631 \u06A9\u0627\u0631 \u067E\u0627\u0633\u062F\u0627\u0631\u06CC \u0627\u0632 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0627\u0641\u0633\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u0633\u0631\u0632\u0645\u06CC\u0646 \u0628\u0648\u062F\u0646\u062F. \xAB\u06AF\u0648\u0633\u0627\u0646\xBB\u0647\u0627\u060C \u0622\u0646\u200C\u0637\u0648\u0631 \u06A9\u0647 \u062F\u0631 \u0632\u0628\u0627\u0646 \u067E\u0647\u0644\u0648\u06CC \u062E\u0648\u0627\u0646\u062F\u0647 \u0645\u06CC\u200C\u0634\u062F\u0646\u062F", /*#__PURE__*/React.createElement(Footnote, {
    n: 1
  }), "\u060C \u0631\u0648\u0627\u06CC\u062A\u06AF\u0631 \u0628\u0648\u062F\u0646\u062F\u061B \u0631\u0648\u0627\u06CC\u062A\u06AF\u0631 \u0634\u0627\u062F\u06CC \u0648 \u0627\u0646\u062F\u0648\u0647 \u0645\u0631\u062F\u0645\u0627\u0646\u060C \u0631\u0648\u0627\u06CC\u062A\u06AF\u0631 \u0631\u0632\u0645 \u0648 \u0628\u0632\u0645 \u0634\u0627\u0647\u0627\u0646\u060C \u0631\u0648\u0627\u06CC\u062A\u06AF\u0631 \u067E\u06CC\u0631\u0648\u0632\u06CC \u0648 \u0634\u06A9\u0633\u062A \u0642\u0647\u0631\u0645\u0627\u0646\u0627\u0646."), /*#__PURE__*/React.createElement("div", {
    className: "essay-cols"
  }, /*#__PURE__*/React.createElement("p", null, "\u0622\u0646\u0647\u0627 \u0627\u06CC\u0646 \u0647\u0645\u0647 \u0631\u0627 \u0628\u0647 \u062F\u06CC\u0628\u0627\u06CC \u0648\u0632\u0646 \u0648 \u0642\u0627\u0641\u06CC\u0647 \u0645\u06CC\u200C\u0622\u0631\u0627\u0633\u062A\u0646\u062F \u0648 \u0628\u0647 \u0646\u0648\u0627\u06CC \u0633\u0627\u0632\u0647\u0627\u06CC \u062E\u0648\u0634\u200C\u0622\u0647\u0646\u06AF \u062E\u0648\u06CC\u0634 \u0645\u06CC\u200C\u0622\u0645\u06CC\u062E\u062A\u0646\u062F \u062A\u0627 \u0628\u0647 \u062F\u0644\u200C\u0647\u0627 \u0628\u0646\u0634\u06CC\u0646\u062F \u0648 \u062F\u0631 \u06CC\u0627\u062F\u0647\u0627 \u0628\u0645\u0627\u0646\u062F\u060C \u062A\u0627 \u0633\u06CC\u0646\u0647 \u0628\u0647 \u0633\u06CC\u0646\u0647 \u0628\u0627\u0632 \u06AF\u0641\u062A\u0647 \u0648 \u0628\u0627\u0632 \u062E\u0648\u0627\u0646\u062F\u0647 \u0634\u0648\u062F. \u06AF\u0648\u0633\u0627\u0646\u200C\u0647\u0627 \u0645\u06CC\u200C\u0633\u0631\u0648\u062F\u0646\u062F \u0648 \u0645\u06CC\u200C\u0646\u0648\u0627\u062E\u062A\u0646\u062F \u062A\u0627 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0627\u0641\u0633\u0627\u0646\u0647 \u0631\u0627 \u062F\u0631 \u062C\u0627\u0645\u0647\u0654 \u0632\u0631\u0628\u0641\u062A \u0686\u0627\u0645\u0647 \u0648 \u0645\u0648\u0633\u06CC\u0642\u06CC \u0627\u0632 \u06AF\u0632\u0646\u062F \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u062F\u0631 \u0627\u0645\u0627\u0646 \u0628\u062F\u0627\u0631\u0646\u062F. \u0627\u0632 \u067E\u0633 \u0622\u0646\u0627\u0646 \u062E\u062F\u0627\u06CC\u0646\u0627\u0645\u0647\u200C\u0646\u0648\u06CC\u0633\u0627\u0646 \u0633\u0627\u0633\u0627\u0646\u06CC \u0622\u0645\u062F\u0646\u062F", /*#__PURE__*/React.createElement(Footnote, {
    n: 2
  }), "\u0648 \u067E\u0633\u0627\u0646\u200C\u062A\u0631 \u0633\u0631\u0627\u06CC\u0646\u062F\u06AF\u0627\u0646 \u067E\u0627\u0631\u0633\u06CC\u200C\u06AF\u0648\u06CC \u0627\u0632 \u062A\u0648\u0633 \u0648 \u0628\u062E\u0627\u0631\u0627 \u062A\u0627 \u062A\u0628\u0631\u06CC\u0632 \u0648 \u06AF\u0646\u062C\u0647."), /*#__PURE__*/React.createElement("p", null, "\u0627\u0645\u0631\u0648\u0632 \u06A9\u0647 \u063A\u0628\u0627\u0631 \xAB\u0648\u062D\u0634\u062A\u06CC \u0628\u0632\u0631\u06AF\xBB \u0628\u0631 \u0634\u0626\u0648\u0646 \u0632\u0646\u062F\u06AF\u0627\u0646\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC\u0627\u0646 \u0633\u0627\u06CC\u0647 \u0627\u0641\u06A9\u0646\u062F\u0647\u060C \u0648 \u0646\u0634\u0627\u0646\u0647\u200C\u0647\u0627\u06CC \u0628\u062D\u0631\u0627\u0646 \u0627\u0632 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u062A\u0627 \u0627\u0642\u062A\u0635\u0627\u062F \u0648 \u0627\u0642\u0644\u06CC\u0645 \u0627\u06CC\u0646 \u06A9\u0647\u0646\u200C\u062F\u06CC\u0627\u0631 \u0631\u0627 \u0641\u0631\u0627 \u06AF\u0631\u0641\u062A\u0647\u200C\u0627\u0646\u062F\u060C \u0645\u0627 \u0641\u0631\u0632\u0646\u062F\u0627\u0646 \u0627\u06CC\u0646 \u0628\u0648\u0645 \u0648 \u0628\u0631 \u0628\u06CC\u0634 \u0627\u0632 \u0647\u0631 \u0632\u0645\u0627\u0646 \u062F\u06CC\u06AF\u0631\u06CC \u0627\u0632 \u062E\u0648\u062F \u0645\u06CC\u200C\u067E\u0631\u0633\u06CC\u0645 \u062F\u0631 \u06A9\u062C\u0627\u06CC \u0627\u06CC\u0646 \u0634\u0628 \u062A\u0627\u0631\u06CC\u06A9 \u0627\u06CC\u0633\u062A\u0627\u062F\u0647\u200C\u0627\u06CC\u0645. \u0628\u06CC\u0634 \u0627\u0632 \u0647\u0631 \u0632\u0645\u0627\u0646 \u062F\u06CC\u06AF\u0631\u06CC \u0646\u0634\u0627\u0646 \u0641\u0631\u0647\u0646\u06AF \u0648 \u062A\u0627\u0631\u06CC\u062E \u062E\u0648\u06CC\u0634 \u0631\u0627 \u0645\u06CC\u200C\u062C\u0648\u06CC\u06CC\u0645 \u062A\u0627 \u062F\u0631 \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0622\u0646 \u0686\u0646\u06AF \u0632\u0646\u06CC\u0645.")), /*#__PURE__*/React.createElement(PullQuote, {
    cite: "\u0627\u0632 \u0647\u0645\u06CC\u0646 \u062C\u0633\u062A\u0627\u0631",
    style: {
      margin: '2.8rem 0'
    }
  }, "\u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631\u060C \u0646\u0647 \u06A9\u0627\u0644\u0627\u0647\u0627\u06CC \u062A\u0641\u0646\u0646\u06CC\u060C \u06A9\u0647 \u0633\u062A\u0648\u0646\u200C\u0647\u0627\u06CC \u062A\u0627\u0628\u200C\u0622\u0648\u0631\u06CC\u060C \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0648 \u0628\u0627\u0632\u0634\u0646\u0627\u0633\u06CC \u0647\u0648\u06CC\u062A \u06CC\u06A9 \u0645\u0644\u062A\u200C\u0627\u0646\u062F"), /*#__PURE__*/React.createElement("figure", {
    className: "essay-figure"
  }, /*#__PURE__*/React.createElement(DraftFrame, {
    label: "FIG. 03 \u2014 CYPRESS LANDSCAPE"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/cypress-landscape.png",
    alt: "",
    style: {
      display: 'block',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement("figcaption", null, "\u0633\u0631\u0648\u0647\u0627\u06CC \u06A9\u0647\u0646 \u062F\u0631 \u0646\u06AF\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646\u06CC\u061B \u0646\u0634\u0627\u0646\u06CC \u0627\u0632 \u0627\u06CC\u0633\u062A\u0627\u062F\u06AF\u06CC \u0648 \u067E\u0627\u06CC\u062F\u0627\u0631\u06CC \u062F\u0631 \u0628\u0631\u0627\u0628\u0631 \u062A\u0646\u062F\u0628\u0627\u062F \u0631\u0648\u0632\u06AF\u0627\u0631.")), /*#__PURE__*/React.createElement("div", {
    className: "essay-cols"
  }, /*#__PURE__*/React.createElement("p", null, "\u0645\u06CC\u0631\u0627\u062B \u0646\u06CC\u0627\u06A9\u0627\u0646\u060C \u0646\u0647 \u06CC\u0627\u062F\u06AF\u0627\u0631\u06CC\u200C\u0647\u0627\u06CC \u062E\u0627\u0645\u0648\u0634\u060C \u06A9\u0647 \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC\u06CC \u062F\u0631 \u0647\u0645 \u067E\u06CC\u0648\u0633\u062A\u0647\u200C\u0627\u0646\u062F \u0628\u0631\u0627\u06CC \u0627\u06CC\u0633\u062A\u0627\u062F\u06AF\u06CC \u062F\u0631 \u062A\u0646\u062F\u0628\u0627\u062F\u0647\u0627\u06CC \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0648 \u0633\u0631\u06AF\u0631\u062F\u0627\u0646\u06CC\u061B \u0631\u06CC\u0633\u0645\u0627\u0646\u200C\u0647\u0627\u06CC \u0627\u06CC\u0631\u0627\u0646. \u0645\u0627 \u0628\u0631 \u0627\u06CC\u0646 \u0628\u0627\u0648\u0631\u06CC\u0645 \u06A9\u0647 \u06AF\u0630\u0627\u0631 \u0627\u0632 \u0628\u062D\u0631\u0627\u0646 \u0639\u0645\u06CC\u0642 \u06A9\u0646\u0648\u0646\u06CC\u060C \u0646\u0647 \u0628\u0627 \u0642\u0631\u0627\u0631 \u062F\u0627\u062F\u0646 \u062E\u0648\u062F \u062F\u0631 \u062C\u0627\u06CC\u06AF\u0627\u0647 \u0642\u0631\u0628\u0627\u0646\u06CC\u060C \u06A9\u0647 \u062A\u0646\u0647\u0627 \u0628\u0627 \u0628\u0627\u0632\u0634\u0646\u0627\u0633\u06CC \u0646\u0642\u0634 \u062E\u0648\u06CC\u0634 \u0645\u0645\u06A9\u0646 \u0627\u0633\u062A."), /*#__PURE__*/React.createElement("p", null, "\u062F\u0631 \u0633\u0631\u0632\u0645\u06CC\u0646\u06CC \u063A\u0627\u0631\u062A\u200C\u0634\u062F\u0647 \u0648 \u062C\u0627\u0645\u0639\u0647\u200C\u0627\u06CC \u0628\u062D\u0631\u0627\u0646\u200C\u0632\u062F\u0647 \u06A9\u0647 \u0646\u0647\u0627\u062F\u0647\u0627\u06CC \u0622\u0646 \u0631\u0648 \u0628\u0647 \u0641\u0631\u0633\u0627\u06CC\u0634\u200C\u0627\u0646\u062F\u060C \u0622\u06CC\u0627 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0641\u0631\u0647\u0646\u06AF \u0648 \u0647\u0646\u0631 \u0631\u0627 \u0628\u0647 \u0646\u06CC\u0631\u0648\u06CC\u06CC \u0628\u0631\u0627\u06CC \u0628\u0627\u0632\u0633\u0627\u0632\u06CC \u0628\u062F\u0644 \u06A9\u0631\u062F\u061F", /*#__PURE__*/React.createElement(Footnote, {
    n: 3
  }), " \u0622\u06CC\u0627 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646 \u0648 \u0646\u0628\u0627\u06CC\u062F \u0647\u0646\u0631 \u0648 \u0641\u0631\u0647\u0646\u06AF \u0631\u0627 \u0627\u0632 \u062D\u0627\u0634\u06CC\u0647\u0654 \u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0628\u0647 \u0645\u062A\u0646 \u0627\u062D\u06CC\u0627\u0621 \u06CC\u06A9 \u0645\u0644\u062A \u0622\u0648\u0631\u062F \u0648 \u0628\u0627 \u0622\u0646 \u067E\u0644\u06CC \u0628\u0647 \u0633\u0648\u06CC \u0641\u0631\u062F\u0627\u06CC\u06CC \u0631\u0648\u0634\u0646\u200C\u062A\u0631 \u0633\u0627\u062E\u062A\u061F")), /*#__PURE__*/React.createElement("div", {
    className: "essay-verse"
  }, /*#__PURE__*/React.createElement(Verse, {
    hemistichs: ['هنر خوار شد جادویی ارجمند', 'نهان راستی، آشکارا گزند'],
    poet: "\u062D\u06A9\u06CC\u0645 \u0627\u0628\u0648\u0627\u0644\u0642\u0627\u0633\u0645 \u0641\u0631\u062F\u0648\u0633\u06CC"
  }), /*#__PURE__*/React.createElement(Footnote, {
    n: 4
  })), /*#__PURE__*/React.createElement("p", {
    className: "essay-close"
  }, "\u0645\u0627 \u0641\u0631\u0632\u0646\u062F\u0627\u0646 \u0627\u06CC\u0631\u0627\u0646 \u062F\u0631 \u06AF\u0627\u0647\u0646\u0627\u0645\u0647\u0654 \xAB\u06AF\u0648\u0633\u0627\u0646\xBB \u0645\u06CC\u200C\u06A9\u0648\u0634\u06CC\u0645 \u062F\u0631 \u0645\u0633\u06CC\u0631 \u0627\u06CC\u0646 \u0647\u062F\u0641 \u06AF\u0627\u0645 \u0628\u0631\u062F\u0627\u0634\u062A\u0647\u060C \u067E\u0644\u06CC \u0628\u0627\u0634\u06CC\u0645 \u0645\u06CC\u0627\u0646 \u0645\u06CC\u0631\u0627\u062B \u06A9\u0647\u0646 \u067E\u062F\u0631\u0627\u0646 \u0648 \u0686\u0634\u0645\u200C\u0627\u0646\u062F\u0627\u0632 \u0641\u0631\u062F\u0627\u060C \u0648 \u0646\u06CC\u0632 \u0647\u0645\u0631\u0627\u0647\u06CC \u0628\u0631\u0627\u06CC \u0647\u0645\u0647\u0654 \u0622\u0646\u0627\u0646 \u06A9\u0647 \u062F\u0631 \u06AF\u0631\u06AF \u0648 \u0645\u06CC\u0634 \u0634\u0628\u060C \u0646\u0648\u0631 \u0645\u0647\u0631 \u0627\u06CC\u0631\u0627\u0646 \u0631\u0627 \u062F\u0631 \u062F\u0644 \u062F\u0627\u0631\u0646\u062F."), /*#__PURE__*/React.createElement(FootnotesList, null));
}

/* default template for every article that doesn't yet have hand-set full content.
   Same format as the lead essay — lede + two-column body + pull quote + a fillable
   image figure + closing — using the article's own data and editable placeholders. */
function TemplateEssayBody(_ref12) {
  var post = _ref12.post;
  var ph = 'متنِ کاملِ این نوشتار در این بخش جای می‌گیرد. این قالب آمادهٔ ویرایش است؛ پاراگراف‌های اصلی مقاله را اینجا بگذارید تا در همین نظم و آرایش، یک‌دست با دیگر نوشتارهای گوسان، منتشر شوند.';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "essay-cols"
  }, /*#__PURE__*/React.createElement("p", null, ph), /*#__PURE__*/React.createElement("p", null, ph)), /*#__PURE__*/React.createElement(PullQuote, {
    cite: post.author,
    style: {
      margin: '2.8rem 0'
    }
  }, "\u062C\u0645\u0644\u0647\u0654 \u0634\u0627\u062E\u0635\u0650 \u0627\u06CC\u0646 \u0646\u0648\u0634\u062A\u0627\u0631 \u0631\u0627 \u062F\u0631 \u0627\u06CC\u0646\u062C\u0627 \u0628\u0631\u062C\u0633\u062A\u0647 \u06A9\u0646\u06CC\u062F."), /*#__PURE__*/React.createElement("figure", {
    className: "essay-figure"
  }, /*#__PURE__*/React.createElement(DraftFrame, {
    label: "FIG. 01"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nc-img-wrap",
    style: {
      aspectRatio: '16 / 9'
    }
  }, React.createElement('image-slot', {
    id: "slot-article-".concat(post.slug),
    placeholder: 'تصویر مقاله را اینجا رها کنید',
    shape: 'rect'
  }))), /*#__PURE__*/React.createElement("figcaption", null, "\u062A\u0648\u0636\u06CC\u062D \u062A\u0635\u0648\u06CC\u0631 \u0645\u0642\u0627\u0644\u0647 \u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0642\u0631\u0627\u0631 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u062F.")), /*#__PURE__*/React.createElement("div", {
    className: "essay-cols"
  }, /*#__PURE__*/React.createElement("p", null, ph), /*#__PURE__*/React.createElement("p", null, ph)), /*#__PURE__*/React.createElement("p", {
    className: "essay-close"
  }, ph));
}

/* Top-of-page marker for a پاره that continues an earlier one. Parts two and
   three open in the middle of an argument, so the page says so above the title
   and links back to the part before it. Part one has no predecessor and shows
   nothing, so nothing changes for a one-part essay. (EIC, 2026-09-19) */
function SeriesLead(_ref13) {
  var post = _ref13.post;
  var series = (window.GOSAN_SERIES || []).find(function (g) {
    return g.indexOf(post.slug) !== -1;
  });
  if (!series) return null;
  var i = series.indexOf(post.slug);
  if (i <= 0) return null;
  var prev = (window.GOSAN_POSTS || []).find(function (p) {
    return p.slug === series[i - 1];
  });
  if (!prev) return null;
  var part = function part(p) {
    var m = p.title.match(/\(([^)]+)\)\s*$/);
    return m ? m[1] : p.title;
  };
  return /*#__PURE__*/React.createElement("p", {
    className: "series-lead"
  }, /*#__PURE__*/React.createElement("span", {
    className: "series-lead-count"
  }, "\u067E\u0627\u0631\u0647\u0654 ", toFa(i + 1), " \u0627\u0632 ", toFa(series.length)), /*#__PURE__*/React.createElement("span", {
    className: "series-lead-sep",
    "aria-hidden": "true"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u062F\u0646\u0628\u0627\u0644\u0647\u0654 ", /*#__PURE__*/React.createElement("a", {
    className: "series-lead-link",
    href: '/article/' + prev.slug
  }, part(prev))));
}

/* Where the reference apparatus begins inside a rendered article body.
   The series nav belongs after the essay text but BEFORE the apparatus (EIC,
   2026-09-19), and the apparatus is not shaped the same way in every piece:
   some bodies end in a <section class="fn-list-sec">, others open their
   references with <h2>منابع</h2>, and some have both.
   So look for either, and take whichever comes first in document order. */
var REF_HEADINGS = /^(منابع|مآخذ|کتابنامه|کتاب‌نامه|پانویس‌ها|یادداشت‌ها)$/;
function referenceAnchor(root) {
  if (!root) return null;
  var notes = root.querySelector('.fn-list-sec');
  var heading = null;
  var hs = root.querySelectorAll('h2, h3');
  for (var i = 0; i < hs.length; i += 1) {
    if (REF_HEADINGS.test((hs[i].textContent || '').trim())) {
      heading = hs[i];
      break;
    }
  }
  if (notes && heading) {
    /* DOCUMENT_POSITION_PRECEDING === 2 */
    return notes.compareDocumentPosition(heading) & 2 ? heading : notes;
  }
  return notes || heading || null;
}

/* foot-of-article link to the next پاره of the same essay */
function SeriesNav(_ref14) {
  var post = _ref14.post;
  var series = (window.GOSAN_SERIES || []).find(function (g) {
    return g.indexOf(post.slug) !== -1;
  });
  if (!series) return null;
  var i = series.indexOf(post.slug);
  var at = function at(n) {
    return (window.GOSAN_POSTS || []).find(function (p) {
      return p.slug === series[n];
    });
  };
  var prev = i > 0 ? at(i - 1) : null;
  var next = i < series.length - 1 ? at(i + 1) : null;
  if (!prev && !next) return null;
  var part = function part(p) {
    var m = p.title.match(/\(([^)]+)\)\s*$/);
    return m ? m[1] : p.title;
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "series-nav",
    "aria-label": "\u067E\u0627\u0631\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0646 \u062C\u0633\u062A\u0627\u0631"
  }, /*#__PURE__*/React.createElement("span", {
    className: "series-nav-count"
  }, "\u067E\u0627\u0631\u0647\u0654 ", toFa(i + 1), " \u0627\u0632 ", toFa(series.length)), /*#__PURE__*/React.createElement("div", {
    className: "series-nav-links"
  }, prev ? /*#__PURE__*/React.createElement("a", {
    className: "series-nav-link is-prev",
    href: '/article/' + prev.slug
  }, /*#__PURE__*/React.createElement("span", {
    className: "series-nav-dir"
  }, "\u2192 \u067E\u0627\u0631\u0647\u0654 \u067E\u06CC\u0634\u06CC\u0646"), /*#__PURE__*/React.createElement("span", {
    className: "series-nav-title"
  }, part(prev))) : /*#__PURE__*/React.createElement("span", null), next ? /*#__PURE__*/React.createElement("a", {
    className: "series-nav-link is-next",
    href: '/article/' + next.slug
  }, /*#__PURE__*/React.createElement("span", {
    className: "series-nav-dir"
  }, "\u067E\u0627\u0631\u0647\u0654 \u0628\u0639\u062F\u06CC \u2190"), /*#__PURE__*/React.createElement("span", {
    className: "series-nav-title"
  }, part(next))) : /*#__PURE__*/React.createElement("span", null)));
}
function ArticleView(_ref15) {
  var slug = _ref15.slug;
  var post = (deskPayload(slug) || {}).post || GOSAN_POSTS.find(function (p) {
    return p.slug === slug;
  }) || GOSAN_POSTS[0];
  var articleRef = React.useRef(null);
  /* the magazine sequence for a گفتگو — never on the edit desk, which saves the DOM it edits */
  var isInterviewLayout = post.tag === 'گفتگو' && !deskPayload(post.slug) && window.top === window;
  var ov = useContentOverride(post.slug);
  useInterviewReveal(articleRef, isInterviewLayout && !!(ov && ov.body));
  useInterviewMotif(articleRef, isInterviewLayout && !!(ov && ov.body));
  /* override HTML has no React handlers — delegate the footnote-card behaviour */
  React.useEffect(function () {
    if (!(ov && ov.body) || !articleRef.current) return;
    var root = articleRef.current;
    var closeAll = function closeAll() {
      return root.querySelectorAll('.fn-card.is-open, .fn-ref.is-open').forEach(function (n) {
        return n.classList.remove('is-open');
      });
    };
    var openFor = function openFor(btn) {
      closeAll();
      btn.classList.add('is-open');
      var card = btn.parentElement && btn.parentElement.querySelector('.fn-card');
      if (card) card.classList.add('is-open');
    };
    var onOver = function onOver(e) {
      var btn = e.target.closest && e.target.closest('.fn-ref');
      if (btn && root.contains(btn) && !btn.classList.contains('is-open')) openFor(btn);
    };
    var onOut = function onOut(e) {
      var card = e.target.closest && e.target.closest('.fn-card');
      if (card && !(e.relatedTarget && card.contains(e.relatedTarget))) closeAll();
    };
    var onClick = function onClick(e) {
      var btn = e.target.closest && e.target.closest('.fn-ref');
      if (btn && root.contains(btn)) {
        openFor(btn);
        return;
      }
      if (!(e.target.closest && e.target.closest('.fn'))) closeAll();
    };
    root.addEventListener('mouseover', onOver);
    root.addEventListener('mouseout', onOut);
    document.addEventListener('click', onClick);
    return function () {
      root.removeEventListener('mouseover', onOver);
      root.removeEventListener('mouseout', onOut);
      document.removeEventListener('click', onClick);
    };
  }, [ov]);
  /* a caption «description<br>(source)» sits on one line when the line has room and breaks before its
     source only when it has not (EIC, 8 Oct 2026): the source becomes one unit after a plain space */
  React.useEffect(function () {
    var root = articleRef.current;
    if (!root) return;
    root.querySelectorAll('figcaption:not(.gsn-technical)').forEach(gosanSoftCaption);
  }, [ov, slug]);
  /* an address with a section fragment (/article/<slug>#sec-…, e.g. from a social part's link):
     scroll there once the body that holds the section is in. The body arrives in stages, so try
     a few times; give up quietly if the id is not in this essay. */
  React.useEffect(function () {
    var id = decodeURIComponent((location.hash || '').slice(1));
    if (!id || id.charAt(0) === '/') return undefined;
    var tries = 0,
      timer = null;
    var _go = function go() {
      var el = document.getElementById(id);
      if (el && articleRef.current && articleRef.current.contains(el)) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 70,
          behavior: 'auto'
        });
      } else if (tries++ < 20) {
        timer = setTimeout(_go, 150);
      }
    };
    timer = setTimeout(_go, 150);
    return function () {
      return clearTimeout(timer);
    };
  }, [slug, ov && ov.body]);
  /* «بخش دوم» / «بخش سوم» (h2.essay-part) carry two small arrows (EIC, 19 Oct 2026: «create a small arrow
     next to the second and third section for an option to jump to the next or previous section»): up to
     the start of the part before (part one starts at the top of the essay), down to the next part. A part
     starts at its picture when one stands just above its marker. This is page chrome, not essay text: it
     is added once the body is in, never on the edit desk, and the desk strips .part-jump when it saves. */
  React.useEffect(function () {
    var root = articleRef.current;
    var framed = false;
    try {
      framed = window.self !== window.top;
    } catch (e) {
      framed = true;
    }
    if (!root || framed || deskPayload(slug)) return undefined;
    var marks = Array.prototype.slice.call(root.querySelectorAll('h2.essay-part'));
    if (!marks.length) return undefined;
    var startOf = function startOf(m) {
      var p = m.previousElementSibling;
      return p && p.matches && p.matches('figure.essay-figure') ? p : m;
    };
    var go = function go(el) {
      var top = el === root ? root.getBoundingClientRect().top : el.getBoundingClientRect().top;
      /* an instant jump: a part is many screens away, and a long smooth scroll is slow and not run everywhere */
      window.scrollTo({
        top: top + window.scrollY - 70,
        behavior: 'auto'
      });
      history.replaceState(null, '', location.pathname + location.search + (el === root || !el.id ? '' : '#' + el.id));
    };
    var ICON = {
      up: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
      down: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
    };
    var made = [];
    marks.forEach(function (m, i) {
      var box = document.createElement('span');
      box.className = 'part-jump';
      var add = function add(target, label, icon) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'part-jump-btn';
        b.setAttribute('aria-label', label);
        b.title = label;
        b.innerHTML = icon;
        b.addEventListener('click', function (e) {
          e.preventDefault();
          go(target);
        });
        box.appendChild(b);
      };
      add(i === 0 ? root : startOf(marks[i - 1]), 'بخش پیشین', ICON.up);
      if (i < marks.length - 1) add(startOf(marks[i + 1]), 'بخش بعدی', ICON.down);
      m.appendChild(box);
      made.push(box);
    });
    return function () {
      return made.forEach(function (n) {
        return n.remove();
      });
    };
  }, [slug, ov && ov.body]);
  var getText = React.useCallback(function () {
    var el = articleRef.current;
    if (!el) return '';
    var clone = el.cloneNode(true);
    clone.querySelectorAll('.fn-card, .fn-list-sec, .gsn-technical').forEach(function (n) {
      return n.remove();
    });
    return clone.textContent || '';
  }, []);

  /* Put the پاره navigation immediately after the essay text rather than at the
     very foot of the page, where it sat below the notes and the کتابنامه. The
     apparatus lives inside the body HTML, so the nav cannot simply be reordered
     in JSX — instead an empty host node is placed before the apparatus and the
     nav is rendered into it through a portal. React owns only the portal's
     contents, so the body HTML is never mutated.
     undefined = not measured yet · null = no apparatus, render in place. */
  var _React$useState19 = React.useState(undefined),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    navSlot = _React$useState20[0],
    setNavSlot = _React$useState20[1];
  /* and the same for the «دنبالهٔ …» line, which belongs at the very top of the
     essay text — above its first heading, not above the article title. */
  var _React$useState21 = React.useState(undefined),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    leadSlot = _React$useState22[0],
    setLeadSlot = _React$useState22[1];
  React.useEffect(function () {
    var root = articleRef.current;
    if (!root) {
      setNavSlot(null);
      setLeadSlot(null);
      return undefined;
    }
    var made = [];
    var ref = referenceAnchor(root);
    if (ref && ref.parentNode) {
      var s1 = document.createElement('div');
      s1.className = 'series-nav-slot';
      ref.parentNode.insertBefore(s1, ref);
      made.push(s1);
      setNavSlot(s1);
    } else {
      setNavSlot(null);
    }

    /* first element of the body — the table of contents is website chrome, so
       it is skipped and the slot lands just above the essay's opening block. */
    var first = root.firstElementChild;
    while (first && first.matches && first.matches('nav.article-toc')) first = first.nextElementSibling;
    if (first && first.classList && first.classList.contains('series-nav-slot')) first = first.nextElementSibling;
    /* an override body is wrapped in a plain <div>; step inside it */
    if (first && first.tagName === 'DIV' && !first.className && first.firstElementChild) first = first.firstElementChild;
    if (first && first.parentNode) {
      var s2 = document.createElement('div');
      s2.className = 'series-lead-slot';
      first.parentNode.insertBefore(s2, first);
      made.push(s2);
      setLeadSlot(s2);
    } else {
      setLeadSlot(null);
    }
    return function () {
      setNavSlot(undefined);
      setLeadSlot(undefined);
      made.forEach(function (n) {
        if (n.parentNode) n.parentNode.removeChild(n);
      });
    };
  }, [post.slug, ov && ov.body]);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "\u0646\u0648\u0634\u062A\u0627\u0631 \u2014 ".concat(post.title)
  }, /*#__PURE__*/React.createElement(ReadingIndicator, null), /*#__PURE__*/React.createElement("div", {
    className: "article-head"
  }, /*#__PURE__*/React.createElement(DraftLineH, {
    top: "2.4rem",
    right: "-6rem",
    left: "-6rem"
  }), leadSlot === null ? /*#__PURE__*/React.createElement(SeriesLead, {
    post: post
  }) : null, /*#__PURE__*/React.createElement("h1", {
    className: "gsn-display",
    style: {
      fontSize: '2.4rem',
      margin: '0.6rem 0 1rem'
    }
  }, /*#__PURE__*/React.createElement(TitleLines, {
    text: post.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "article-byline"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement(AuthorAvatar, {
    name: post.author,
    bioHtml: GUEST_BY_SLUG[post.slug] ? null : ov && ov.bio || null
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 500
    }
  }, post.author)), /*#__PURE__*/React.createElement("span", {
    className: "byline-date",
    style: {
      color: 'var(--accent)'
    }
  }, "\u062F\u0631\u06CC\u0627\u0641\u062A: ", /*#__PURE__*/React.createElement("span", {
    className: "byline-date-value"
  }, ov && ov.date || post.date)), /*#__PURE__*/React.createElement("span", {
    className: "byline-date",
    style: {
      color: 'var(--accent)'
    }
  }, "\u0627\u0646\u062A\u0634\u0627\u0631: ", post.published || GOSAN_ISSUE_PUBLISHED)), /*#__PURE__*/React.createElement(ArticleMeta, {
    articleRef: articleRef,
    slug: post.slug + (ov && ov.body ? '-ov' : '')
  })), /*#__PURE__*/React.createElement("div", {
    className: "article-layout"
  }, /*#__PURE__*/React.createElement("article", {
    ref: articleRef
  }, /*#__PURE__*/React.createElement(TableOfContents, {
    articleRef: articleRef,
    slug: post.slug + (ov && ov.body ? '-ov' : ''),
    labels: ov && ov.toc && Object.keys(ov.toc).length ? ov.toc : null
  }), ov && ov.body ? /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: isInterviewLayout ? interviewLayout(ov.body, post, ov) : ov.body
    }
  }) : post.full ? /*#__PURE__*/React.createElement(FullEssayBody, null) : window.GOSAN_ARTICLE_BODIES && window.GOSAN_ARTICLE_BODIES[post.slug] ? React.createElement(window.GOSAN_ARTICLE_BODIES[post.slug]) : /*#__PURE__*/React.createElement(TemplateEssayBody, {
    post: post
  })), /*#__PURE__*/React.createElement(SummaryAside, {
    post: post,
    getText: getText,
    ov: ov
  })), leadSlot ? ReactDOM.createPortal(/*#__PURE__*/React.createElement(SeriesLead, {
    post: post
  }), leadSlot) : null, navSlot === undefined ? null : navSlot ? ReactDOM.createPortal(/*#__PURE__*/React.createElement(SeriesNav, {
    post: post
  }), navSlot) : /*#__PURE__*/React.createElement(SeriesNav, {
    post: post
  }), isInterviewLayout ? null : /*#__PURE__*/React.createElement(AuthorBioBlock, {
    post: post,
    ov: ov
  }), /*#__PURE__*/React.createElement(CommentsSection, {
    post: post
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '860px',
      margin: '0 auto',
      padding: '0 2rem 3rem',
      display: 'flex',
      justifyContent: 'center',
      borderTop: '1px solid var(--line)',
      paddingTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "/"
  }, "\u2190 \u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u062E\u0627\u0646\u0647")));
}
Object.assign(window, {
  ArticleView: ArticleView
});