/* Gosan Weblog — article reading view: two-column feature + listen bar + footnotes */

/* article category → home section key (matches NcCatSection ids on the home page) */
const TAG_TO_SECTION = {
  'جستار': 'essay',
  'دیدگاه': 'viewpoint',
  'یادمان': 'memoriam',
  'گفتگو': 'interview',
  'نقد و بررسی': 'review',
  'پیشنهاد': 'proposal',
  'پروندهٔ سیاست‌گذاری فرهنگی': 'dossier-policy',
  'پروندهٔ اقتصاد خلاق': 'dossier-economy',
  'پروندهٔ آموزش': 'dossier-education',
};
function goToHomeSection(tag) {
  const key = TAG_TO_SECTION[tag];
  if (key) {
    try { sessionStorage.setItem('gosan-scroll', 'cat-' + key); } catch (e) {}
    window.gosanGo('/');
  } else {
    window.gosanGo('/archive/' + encodeURIComponent(tag));
  }
}

/* Author avatars: the five board members use the SAME photo file as the About
   page board (assets/board-*.png), so replacing one file updates both the byline
   circle and the About page. Contributing writers use assets/author-*.png, which
   the About page never reads. Writers with no file here show no circle at all. */
const AUTHOR_PHOTOS = {
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
const GUEST_BY_SLUG = {
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر"
};

const AUTHOR_BIOS = {
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
const BIO_NAMES = {
  'فرزانه گشتاسب': 'دکتر فرزانه گشتاسب',
  'امین نایب‌پور': 'دکتر امین نایب‌پور',
  'سهیل دلشاد': 'دکتر سهیل دلشاد',
  'مهرداد غلامی': 'دکتر مهرداد غلامی',
};
const bioName = (n) => BIO_NAMES[n] || n;

/* render a bio string: newlines become paragraph breaks, bare URLs become links */
/* a biography the desk returned with bold or italic renders as HTML; these strings are written by the
   house, nothing else reaches them (EIC, 9 Oct 2026) */
const BIO_RICH = /<\/?(i|b|em|strong|br)\b/i;
function bioWithLinks(text) {
  if (BIO_RICH.test(String(text || ''))) {
    const h = String(text).split('\n').filter((p) => p.trim()).join('<br><br>')
      .replace(/(^|[\s(])(https?:\/\/[^\s—<]+)/g, (m, pre, u) => pre + '<a href="' + u + '" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">'
        + u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') + '</a>');
    return <span dangerouslySetInnerHTML={{ __html: h }} />;
  }
  const paras = String(text || '').split('\n').filter(function (p) { return p.trim(); });
  return paras.map(function (para, pi) {
    const inner = para.split(/(https?:\/\/[^\s—]+)/g).map(function (p, i) {
      return /^https?:\/\//.test(p)
        ? <a key={i} href={p} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>{p.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</a>
        : <React.Fragment key={i}>{p}</React.Fragment>;
    });
    return <React.Fragment key={pi}>{pi > 0 ? <React.Fragment><br /><br /></React.Fragment> : null}{inner}</React.Fragment>;
  });
}

function toFa(n) {
  return String(n).replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

/* two-part titles: the part after «:» or «؛» drops to the next line */
const ART_TITLE_BREAKS = {
  "تأویلی آذرکیوانی از اسطورۀ آفرینش زردشتی در کتاب دبستان مذاهب": [
    "تأویلی آذرکیوانی",
    "از اسطورۀ آفرینش زردشتی",
    "در کتاب دبستان مذاهب"
  ],
  "گوسان کیست؟ سنت گوسانان در ایران باستان": [
    "گوسان کیست؟",
    "سنت گوسانان در ایران باستان"
  ]
};
function splitTitle(t) {
  const s = String(t == null ? '' : t);
  const m = s.match(/^(.+?)\s*[:؛—–]\s*(.+)$/);
  return m ? [m[1].trim(), m[2].trim()] : [s, null];
}

/* Persian title line-breaking: a wrapped line must START with a connector
   (از، در، و، به…). All other spaces become no-break spaces; segments that
   grow too long fall back to normal wrapping so nothing ever overflows. */
function smartTitleBreaks(t) {
  const CONN = new Set(['از', 'در', 'و', 'به', 'با', 'برای', 'میان', 'بر', 'تا', 'نزد', 'چون', 'همچون', 'دربارهٔ', 'دربارۀ']);
  const words = String(t == null ? '' : t).split(' ').filter(Boolean);
  if (words.length < 2) return String(t == null ? '' : t);
  const segs = [[words[0]]];
  for (let i = 1; i < words.length; i++) {
    if (CONN.has(words[i])) segs.push([words[i]]);
    else segs[segs.length - 1].push(words[i]);
  }
  return segs.map((seg) => {
    const joined = seg.join(' ');
    return joined.length > 30 ? joined : seg.join('\u00A0');
  }).join(' ');
}

function TitleLines({ text }) {
  /* long one-part titles wrap at a fixed point — same size, same colour.
     A trailing «(بخش …)» label loses its parentheses and drops to its own,
     smaller line. */
  const raw = String(text == null ? '' : text);
  const pm = raw.match(/^(.*?)\s*(?:\((بخش\s[^)]+)\)|[—–-]\s*(بخش\s.+?))\s*$/);
  const base = pm ? pm[1] : raw;
  const partEl = pm ? <span className="title-part">{pm[2] || pm[3]}</span> : null;
  const br = ART_TITLE_BREAKS[base];
  if (br) return <React.Fragment>{br.map((l, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{l}</React.Fragment>)}{partEl}</React.Fragment>;
  const [main, sub] = splitTitle(base);
  return sub ? <React.Fragment>{smartTitleBreaks(main)}<span className="title-sub">{smartTitleBreaks(sub)}</span>{partEl}</React.Fragment> : <React.Fragment>{smartTitleBreaks(base)}{partEl}</React.Fragment>;
}

/* footnote contents for the featured essay (referenced by Footnote n=…) */
const ESSAY_FOOTNOTES = [
  'واژهٔ «گوسان» ریشه در زبان پارتی دارد. مری بویس در مقالهٔ کلاسیک خود، «گوسان پارتی و سنت رامشگری ایرانی» (۱۹۵۷)، این واژه را با نقش خنیاگرانِ راوی پیوند داده است.',
  'خداینامه، متن گمشدهٔ تاریخ‌نگاری دورهٔ ساسانی، یکی از سرچشمه‌های اصلی روایت‌های ملی ایران و از منابع دور شاهنامهٔ فردوسی به شمار می‌رود.',
  'ابونصر فارابی در «کتاب موسیقی کبیر» به پیوند ژرف شعر و نغمه در فرهنگ ایرانی و یونانی پرداخته و جای‌گاه موسیقی را در تربیت جان آدمی برجسته کرده است.',
  'اشاره به بیت فردوسی در شرح روزگار چیرگی ضحاک: «هنر خوار شد جادویی ارجمند / نهان راستی، آشکارا گزند».',
];

function AuthorAvatar({ name, bioHtml }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const src = AUTHOR_PHOTOS[name];
  /* only board members (those with a photo) get an avatar circle; others none */
  if (!src) return null;
  /* bioHtml = the essay-end biography (content-override); the popover always
     mirrors it when present, AUTHOR_BIOS is only the fallback */
  const bio = AUTHOR_BIOS[name] || 'از نویسندگان و پژوهشگران همکار گاهنامهٔ گوسان.';
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  return (
    <span className="author-avatar-wrap" ref={ref}>
      <button
        type="button"
        className="author-avatar-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`دربارهٔ ${name}`}
        title={`دربارهٔ ${name}`}
      >
        {src
          ? <img className="author-avatar" src={src} alt={name} />
          : <span className="author-avatar author-avatar--mono">{(name || '؟').trim().charAt(0)}</span>}
      </button>
      {open ? (
        <div className="author-bio-card" role="dialog">
          <span className="author-bio-name">{bioName(name)}</span>
          {bioHtml
            ? <p className="author-bio-text" dangerouslySetInnerHTML={{ __html: bioHtml }} />
            : <p className="author-bio-text">{BIO_RICH.test(bio) ? <span dangerouslySetInnerHTML={{ __html: bio }} /> : bio}</p>}
        </div>
      ) : null}
    </span>
  );
}

/* compact writer / interviewee biography, shown at the end of the article */
const AUTHOR_SITES = {
  "فرناز مدرسی‌فر": "https://www.farnazmodarresifar.com",
  "مهرداد غلامی": "https://www.mehrdadgholami.com"
};

function AuthorBioBlock({ post, ov }) {
  const isInterview = !!GUEST_BY_SLUG[post.slug];
  const person = isInterview ? GUEST_BY_SLUG[post.slug] : post.author;
  const bio = AUTHOR_BIOS[person];
  const photo = AUTHOR_PHOTOS[person];
  const kind = isInterview ? 'مهمان' : 'نویسنده';
  const site = AUTHOR_SITES[person];
  const nameStyle = { color: 'var(--accent)', fontWeight: 700 };
  const nameEl = site
    ? <a href={site} target="_blank" rel="noopener noreferrer" style={{ ...nameStyle, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{bioName(person)}</a>
    : <span style={nameStyle}>{bioName(person)}</span>;
  const bioEl = ov && ov.bio
    ? <span className="article-bio-editable" dangerouslySetInnerHTML={{ __html: ov.bio }} />
    : <span className="article-bio-editable">{bio ? bioWithLinks(bio) : ('معرفی کوتاه ' + kind + ' در دست تکمیل است.')}</span>;
  return (
    <div className="article-bio">
      {photo ? <span className="article-bio-avatar"><img src={photo} alt={person} /></span> : null}
      <div className="article-bio-body">
        <p className="article-bio-text">{nameEl} {bioEl}</p>
      </div>
    </div>
  );
}

function ReadingIndicator() {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="reading-rail" style={{ position: 'fixed', top: '90px', left: '2.2rem', bottom: '2.2rem', width: '3px', zIndex: 40 }}>
      <div style={{ position: 'absolute', inset: 0, width: '1px', right: 'auto', background: 'var(--line-draft)' }}></div>
      <div style={{ position: 'absolute', top: 0, width: '3px', height: `${progress * 100}%`, background: 'var(--ink)', transition: 'height 0.1s linear' }}></div>
      <span className="gsn-technical" style={{ position: 'absolute', bottom: '-1.4rem', left: '-0.4rem', fontSize: '0.6rem' }}>
        {Math.round(progress * 100)}%
      </span>
    </div>
  );
}

/* ---------- footnotes ---------- */
function Footnote({ n }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const content = ESSAY_FOOTNOTES[n - 1];
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);
  return (
    <span className="fn" ref={ref}>
      <button
        type="button"
        className={`fn-ref${open ? ' is-open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-label={`پی‌نوشت ${toFa(n)}`}
      >{toFa(n)}</button>
      <span className={`fn-card${open ? ' is-open' : ''}`} dir={acNoteIsLatin(content) ? 'ltr' : undefined} role="note" onMouseLeave={() => setOpen(false)}>
        <span className="fn-card-num">{acNoteIsLatin(content) ? n : toFa(n)}</span>
        <span className="fn-card-text">{content}</span>
      </span>
    </span>
  );
}

function FootnotesList() {
  return (
    <section className="fn-list-sec">
      <span className="gsn-technical" style={{ color: 'var(--gold-deep)', display: 'block', marginBottom: '0.5rem', textAlign: 'right' }}>NOTES // پی‌نوشت</span>
      <ol className="fn-list">
        {ESSAY_FOOTNOTES.map((t, i) => (
          <li key={i} id={`fn-${i + 1}`} dir={acNoteIsLatin(t) ? 'ltr' : undefined}><span className="fn-list-num">{acNoteIsLatin(t) ? i + 1 : toFa(i + 1)}</span>{t}</li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- listen bar — placeholder only for now (editor-in-chief, 2 Aug 2026):
   browser TTS reads Persian as gibberish, so playback is disabled until real
   narration files are ready. The bar stays as a visual placeholder. ---------- */
function ListenBar({ getText }) {
  return (
    <div className="listen-bar is-disabled">
      <button type="button" className="listen-play" disabled aria-label="پخش (به‌زودی)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" /></svg>
      </button>
      <div className="listen-body">
        <div className="listen-top">
          <span className="listen-label">نسخهٔ صوتی</span>
        </div>
        <div className="listen-track">
          <span className="listen-fill" style={{ width: '0%' }}></span>
        </div>
      </div>
      <span className="listen-tag">AUDIO</span>
    </div>
  );
}

/* ---------- article meta chips (reading time + word count) ---------- */
function ArticleMeta({ articleRef, slug }) {
  const [stats, setStats] = React.useState(null);
  /* Counts what is actually on screen. The body arrives in stages — the JSX
     placeholder first, then the approved web-edit from content-overrides, then
     the table of contents — so a plain effect measured whichever stage happened
     to be mounted when it ran and kept that number. An observer re-counts on
     every change, which is why a پاره no longer reports the whole essay. */
  React.useEffect(() => {
    const el = articleRef.current;
    if (!el) return;
    let t = null;
    const count = () => {
      const text = (el.textContent || '').trim();
      const words = (text.match(/[^\s]+/g) || []).length;
      if (!words) return;
      setStats({ words, minutes: Math.max(1, Math.round(words / 200)) });
    };
    const schedule = () => { clearTimeout(t); t = setTimeout(count, 120); };
    count();
    const mo = new MutationObserver(schedule);
    mo.observe(el, { childList: true, subtree: true, characterData: true });
    return () => { clearTimeout(t); mo.disconnect(); };
  }, [articleRef, slug]);
  if (!stats) return null;
  return (
    <div className="article-chips">
      <span className="article-chip">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
        {toFa(stats.minutes)} دقیقه مطالعه
      </span>
      <span className="article-chip-sep"></span>
      <span className="article-chip">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V5h16v2" /><path d="M9 19h6" /><path d="M12 5v14" /></svg>
        {stats.words.toLocaleString('fa-IR')} واژه
      </span>
    </div>
  );
}

/* ---------- article table of contents (only when > 3 headings) ---------- */
/* an essay may ask for its contents box with fewer headings (EIC, 8 Oct 2026: Labib's three sections) */
const TOC_MIN = { 'ethos-of-survival': 3 };
/* a contents entry worded differently from its heading (EIC, 8 Oct 2026): the title already says «بخش نخست» */
const TOC_LABEL = { 'herzfeld-german-archives': { 0: 'درآمد' } };
function TableOfContents({ articleRef, slug, labels }) {
  const [items, setItems] = React.useState([]);
  const min = TOC_MIN[String(slug).replace(/-ov$/, '')] || 4;   /* the slug carries «-ov» once the desk override has loaded */
  React.useEffect(() => {
    if (!articleRef.current) return;
    const hs = Array.prototype.slice.call(articleRef.current.querySelectorAll('h2.gsn-display'));
    if (hs.length < min) { setItems([]); return; }
    const base = String(slug).replace(/-ov$/, '');
    const list = hs.map((h, i) => {
      if (!h.id) h.id = 'sec-' + slug + '-' + i;
      /* the heading's words only: a footnote marker and its hidden card are not part of the title */
      const c = h.cloneNode(true);
      c.querySelectorAll('.fn, .fn-ref, .fn-card, sup, .part-jump').forEach((n) => n.remove());
      const text = (c.textContent || '').replace(/\s+/g, ' ').trim();
      /* the desk's own wording of an entry (override «toc», EIC 9 Oct 2026) wins over the fixed one */
      const lab = labels || TOC_LABEL[base];
      /* a part marker (<h2 class="essay-part">, EIC 19 Oct 2026: «بخش دوم»، «بخش سوم» so a long essay
         reads in several sittings) heads the sections that follow it in the list */
      return { id: h.id, text: (lab && lab[i]) || text, part: h.classList.contains('essay-part') };
    });
    /* An essay whose sections are numbered rather than titled («۱», «۲», «۳»)
       gives a contents list of bare numerals, which tells the reader nothing.
       A contents list is worth having only when the headings are words. */
    const worded = list.filter((it) => !it.part && /[^\s\d\u06F0-\u06F9\u0660-\u0669.\u060C،-]/.test(it.text));
    if (worded.length < min) { setItems([]); return; }
    setItems(list);
  }, [articleRef, slug, min, labels]);
  if (items.length < min) return null;
  const jump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <nav className="article-toc" aria-label="فهرست مطالب">
      <span className="article-toc-head">فهرست</span>
      <ol>
        {items.map((it) => (
          <li key={it.id} className={it.part ? 'is-part' : undefined}><a href={'#' + it.id} onClick={(e) => jump(e, it.id)}>{it.text}</a></li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------- social / share icons ---------- */
const GOSAN_SITE_BASE = 'https://www.gosan.org/';

function ShareIcon({ kind }) {
  if (kind === 'x') {
    /* official X (formerly Twitter) logo — solid glyph */
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  const common = { width: 17, height: 17, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    link: <React.Fragment><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></React.Fragment>,
    mail: <React.Fragment><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2 6 12 13 22 6" /></React.Fragment>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    telegram: <polygon points="22 2 15 22 11 13 2 9 22 2" />,
    whatsapp: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
    print: <React.Fragment><path d="M6 9V3h12v6" /><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="7" /></React.Fragment>,
  };
  return <svg {...common}>{paths[kind]}</svg>;
}

function ShareRow({ post, url }) {
  const [copied, setCopied] = React.useState(false);
  const slug = post ? post.slug : '';
  /* social buttons point at a lightweight per-article share page that carries the
     Open Graph cover image, then redirects real visitors to the article. A گاه‌نوشت
     passes its own address as `url`: its folder on the public site carries its card. */
  const shareUrl = url || GOSAN_SITE_BASE + 'share/' + slug + '.html';
  const articleUrl = url || GOSAN_SITE_BASE + 'article/' + slug;
  const text = (post ? post.title : 'گوسان') + ' — گوسان';
  const enc = encodeURIComponent;
  const pop = (url) => (e) => { e.preventDefault(); window.open(url, '_blank', 'noopener,noreferrer,width=620,height=560'); };
  const copy = (e) => {
    e.preventDefault();
    try { navigator.clipboard.writeText(articleUrl); } catch (err) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const xUrl = 'https://twitter.com/intent/tweet?text=' + enc(text) + '&url=' + enc(shareUrl);
  const fbUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + enc(shareUrl);
  const tgUrl = 'https://t.me/share/url?url=' + enc(shareUrl) + '&text=' + enc(text);
  const waUrl = 'https://wa.me/?text=' + enc(text + ' ' + shareUrl);
  const mailUrl = 'mailto:?subject=' + enc(text) + '&body=' + enc(text + '\n\n' + shareUrl);
  return (
    <div className="share-row">
      <span className="share-label">{copied ? 'نشانی رونوشت شد ✓' : 'این متن را به اشتراک بگذارید'}</span>
      <div className="share-icons">
        <a href="#" onClick={copy} aria-label="رونوشت پیوند" title="رونوشت پیوند"><ShareIcon kind="link" /></a>
        <a href={mailUrl} aria-label="ارسال با رایانامه" title="رایانامه"><ShareIcon kind="mail" /></a>
        <a href={xUrl} onClick={pop(xUrl)} target="_blank" rel="noopener noreferrer" aria-label="اشتراک در ایکس" title="ایکس (X)"><ShareIcon kind="x" /></a>
        <a href={fbUrl} onClick={pop(fbUrl)} target="_blank" rel="noopener noreferrer" aria-label="اشتراک در فیسبوک" title="فیسبوک"><ShareIcon kind="facebook" /></a>
        <a href={tgUrl} onClick={pop(tgUrl)} target="_blank" rel="noopener noreferrer" aria-label="اشتراک در تلگرام" title="تلگرام"><ShareIcon kind="telegram" /></a>
        <a href={waUrl} onClick={pop(waUrl)} target="_blank" rel="noopener noreferrer" aria-label="اشتراک در واتساپ" title="واتساپ"><ShareIcon kind="whatsapp" /></a>
        <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} aria-label="چاپ یا ذخیره به PDF" title="چاپ / ذخیره به PDF"><ShareIcon kind="print" /></a>
      </div>
    </div>
  );
}

/* ---------- summary aside (چکیده) — always visible ---------- */
/* ---------- desk injection ----------
   The edit desk stages a payload in sessionStorage before loading this page in
   its iframe, so an essay that is NOT on the public site can still be rendered
   for editing from private data. Completely inert when no payload is staged. */
function deskPayload(slug) {
  try {
    const raw = window.sessionStorage.getItem('gosan-desk-payload');
    if (!raw) return null;
    const p = JSON.parse(raw);
    return p && p.slug === slug ? p : null;
  } catch (e) { return null; }
}

/* ---------- approved web-edits override the JSX content (content-overrides/<slug>.json) ---------- */
function useContentOverride(slug) {
  const [ov, setOv] = React.useState(null);
  React.useEffect(() => {
    let on = true;
    const staged = deskPayload(slug);
    if (staged && staged.override) { setOv(staged.override); return () => { on = false; }; }
    setOv(null);
    fetch('content-overrides/' + slug + '.json', { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => { if (on && j && (j.body || j.summary || j.date || j.bio)) setOv(j); })
      .catch(() => {});
    return () => { on = false; };
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
  const doc = new DOMParser().parseFromString('<div id="r">' + html + '</div>', 'text/html');
  const root = doc.getElementById('r');
  const top = root.firstElementChild && root.children.length === 1 && root.firstElementChild.tagName === 'DIV'
    ? root.firstElementChild : root;
  const kind = (el) => {
    if (el.tagName === 'P' && el.classList.contains('essay-lede')) return 'lede';
    if (el.tagName === 'FIGURE') return 'figure';
    if (el.tagName === 'BLOCKQUOTE') return 'quote';
    if (el.tagName === 'SECTION' || el.classList.contains('fn-list-sec')) return 'notes';
    if (el.tagName === 'P') {
      const st = el.getAttribute('style') || '';
      const b = el.firstElementChild;
      const bold = /font-weight:\s*700/.test(st) || (b && b.tagName === 'B' && el.textContent.trim() === b.textContent.trim());
      return bold ? 'q' : 'a';
    }
    return 'other';
  };
  const items = Array.from(top.children).map((el) => ({ el, k: kind(el) }));
  if (items.filter((i) => i.k === 'q').length < 3) return html;   // not a Q&A piece: leave it
  // the web's inline dress goes; the layout's own type takes over
  items.forEach(({ el, k }) => {
    if (k === 'q' || k === 'a' || k === 'quote' || k === 'lede') el.removeAttribute('style');
    if (k === 'q') el.querySelectorAll('b').forEach((b) => { if (b.textContent.trim() === el.textContent.trim()) b.replaceWith(...b.childNodes); });
  });
  const guest = (post && post.title && post.title.split('با ').pop().trim()) || '';
  const mk = (cls, inner) => { const d = doc.createElement('div'); d.className = cls; d.innerHTML = inner || ''; return d; };
  const out = [];
  let i = 0;
  // 0 · the guest, presented before the interview begins: name, portrait and the
  //     biography the article end used to carry (EIC, 24 Oct 2026)
  if (ov && ov.bio && post && GUEST_BY_SLUG[post.slug]) {
    const person = GUEST_BY_SLUG[post.slug];
    const site = AUTHOR_SITES[person];
    const name = site
      ? '<a href="' + site + '" target="_blank" rel="noopener noreferrer">' + bioName(person) + '</a>'
      : bioName(person);
    // not a card: the interviewer introduces her guest in the text itself — the hedcut
    // set into the first lines, the name as a turquoise line, the biography in the text
    // face, then the lede under its gold rule and the questions (EIC, 24 Oct 2026)
    const panel = mk('iv-intro iv-reveal',
      // the bio's six paragraphs set as three: each pair joined into one, words untouched (EIC, 24 Oct 2026)
      (() => {
        const paras = ov.bio.split(/(?:\s*<br\s*\/?>\s*){2,}/).map((x) => x.trim()).filter(Boolean);
        const pairs = [];
        for (let n = 0; n < paras.length; n += 2) pairs.push(paras.slice(n, n + 2).join(' '));
        return pairs.map((x, n) => '<p class="iv-guest-bio">'
          + (n === 0 ? '<span class="iv-guest-name">' + name + '</span> ' : '') + x + '</p>').join('')
          // the site's gold motif divider after the biography (EIC, 24 Oct 2026); mounted by useInterviewMotif
          + '<div class="iv-motif" aria-hidden="true"></div>';
      })());
    out.push(panel);
  }
  // 1 · standfirst + hero + display quote
  const lede = items.find((x) => x.k === 'lede');
  const intro = out.length && out[0].classList.contains('iv-intro') ? out[0] : null;
  if (lede) { lede.el.classList.add('iv-standfirst'); if (intro) intro.appendChild(lede.el); else out.push(lede.el); }
  i = items.indexOf(lede) + 1;
  // the opening plate: the first picture with the display quote beside it (a tall
  // portrait at full measure would dwarf the page); a quote alone stands on its own
  let hero = null, display = null;
  if (items[i] && items[i].k === 'figure') { hero = items[i].el; i++; }
  if (items[i] && items[i].k === 'quote') { display = items[i].el; display.classList.add('iv-display'); i++; }
  if (hero && display) { const w = mk('iv-open iv-reveal'); const f = mk('iv-hero'); f.appendChild(hero); w.appendChild(f); w.appendChild(display); out.push(w); }
  else if (hero) { const w = mk('iv-hero iv-reveal'); w.appendChild(hero); out.push(w); }
  else if (display) { const w = mk('iv-reveal'); w.appendChild(display); out.push(w); }
  // the Q&A run, up to the next quote / figure / notes
  const run = [];
  while (i < items.length && (items[i].k === 'q' || items[i].k === 'a')) run.push(items[i++]);
  // 2 · no side-by-side columns: a question and its answers always follow one
  //     another down the page, in the order the EIC wrote them (EIC, 24 Oct 2026)
  const colsEnd = 0;
  // 3 · the dialogue, with speaker labels — a question and its answers make one exchange
  // who speaks: the interviewer and the guest, full names on the first exchange and
  // initials after it, as a magazine sets an interview (EIC, 24 Oct 2026)
  const asker = (post && post.author) || '';
  const initials = (n) => n.split(/\s+/).filter(Boolean).map((w) => w[0] + '.').join(' ');
  let first = true;
  const who = (name) => mk('iv-who', first ? name : initials(name));
  const dialogue = mk('iv-dialogue');
  // a question the EIC sets as a lead-in paragraph plus the question itself is two
  // consecutive question paragraphs: they share one exchange, and the answer follows
  let ex = null, open = false;
  run.slice(colsEnd).forEach(({ el, k }) => {
    if (k === 'q') {
      el.classList.add('iv-q');
      if (ex && open) { ex.querySelector('.iv-ask').appendChild(el); return; }
      ex = mk('iv-exchange iv-reveal'); open = true;
      const qw = mk('iv-ask'); qw.appendChild(who(asker)); qw.appendChild(el);
      ex.appendChild(qw); dialogue.appendChild(ex);
    } else {
      if (!ex) { ex = mk('iv-exchange iv-reveal'); dialogue.appendChild(ex); }
      let ans = ex.querySelector('.iv-answer');
      if (!ans) { ans = mk('iv-answer'); ans.appendChild(who(guest)); ex.appendChild(ans); first = false; }
      open = false; el.classList.add('iv-a'); ans.appendChild(el);
    }
  });
  if (dialogue.children.length) out.push(dialogue);
  // 4 · what follows: a quote becomes a band; the last question and its answers a box;
  //     a figure a plate beside a sentence of the guest
  let finalBox = null, plate = null, notes = null;
  const tail = [];
  while (i < items.length) {
    const it = items[i++];
    // every quote inside the piece takes the opener's design: gold brackets, gold text (EIC, 24 Oct 2026)
    if (it.k === 'quote') { it.el.classList.add('iv-display'); const w = mk('iv-quote iv-reveal'); w.appendChild(it.el); tail.push(w); }
    else if (it.k === 'q') {
      finalBox = mk('iv-final iv-reveal');
      finalBox.appendChild(who(asker)); it.el.classList.add('iv-q'); finalBox.appendChild(it.el); tail.push(finalBox);
    }
    else if (it.k === 'a') {
      it.el.classList.add('iv-a');
      if (finalBox && !finalBox.querySelector('.iv-a')) finalBox.appendChild(who(guest));
      (finalBox || tail[tail.length - 1] || dialogue).appendChild(it.el);
    }
    else if (it.k === 'figure') {
      plate = mk('iv-plate iv-reveal'); plate.appendChild(it.el);
      tail.push(plate);
    }
    else if (it.k === 'notes') notes = it.el;
    else tail.push(it.el);
  }
  tail.forEach((n) => out.push(n));
  if (notes) out.push(notes);
  const wrap = doc.createElement('div'); wrap.className = 'iv-layout';
  out.forEach((n) => wrap.appendChild(n));
  return wrap.outerHTML;
}

function useInterviewMotif(articleRef, on) {
  React.useEffect(() => {
    if (!on || !articleRef.current || !window.MotifDivider) return;
    const roots = Array.from(articleRef.current.querySelectorAll('.iv-motif:empty')).map((el) => {
      const r = ReactDOM.createRoot(el); r.render(<MotifDivider size={26} style={{ margin: 0 }} />); return r;
    });
    return () => roots.forEach((r) => setTimeout(() => r.unmount(), 0));
  }, [on]);
}

function useInterviewReveal(articleRef, on) {
  React.useEffect(() => {
    if (!on || !articleRef.current || typeof IntersectionObserver === 'undefined') return;
    if (document.body.getAttribute('data-motion') === 'off') {
      articleRef.current.querySelectorAll('.iv-reveal').forEach((el) => el.classList.add('is-in'));
      return;
    }
    const els = Array.from(articleRef.current.querySelectorAll('.iv-reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    // a hidden tab or a browser that never fires the observer still shows the piece
    const safety = setTimeout(() => els.forEach((el) => el.classList.add('is-in')), 1800);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [on]);   // once per body: a re-render (reading-time ticks) must not restart the reveal
}

function SummaryAside({ post, getText, ov }) {
  return (
    <aside className="article-aside">
      <ListenBar getText={getText} />
      {/* an interview carries no چکیده: its lede introduces the guest (EIC, 24 Oct 2026) */}
      {post.tag !== 'گفتگو' && (
      <div className="summary-card">
        <span className="summary-head">چکیده</span>
        <hr className="summary-rule" />
        {ov && ov.summary
          ? <p className="summary-text" dangerouslySetInnerHTML={{ __html: ov.summary }} />
          : <p className="summary-text">{(window.GOSAN_SUMMARIES && window.GOSAN_SUMMARIES[post.slug]) || post.summary || post.excerpt}</p>}
      </div>
      )}
      <div className="share-card">
        <ShareRow post={post} />
      </div>
    </aside>
  );
}

/* ---------- reader comments ---------- */
/* `post` only titles the mail — the desk should see which essay a note is about
   without opening it */
function CommentsSection({ post }) {
  const [sent, setSent] = React.useState(false);   // false · 'ok' · 'mail'
  const [err, setErr] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  return (
    <section className="comments-section">
      <hr className="gsn-rule-gold" style={{ margin: '0 0 2.4rem' }} />
      <h2 className="gsn-display" style={{ fontSize: '1.7rem', color: 'var(--gold-deep)', margin: '0 0 1.8rem' }}>
        دیدگاه خود را با ما به اشتراک بگذارید
      </h2>
      {sent ? (
        <p style={{ color: 'var(--accent-strong)', fontWeight: 500, margin: 0 }}>
          {sent === 'mail'
            ? 'فرستادن از وب‌سایت ممکن نشد؛ یادداشت شما در برنامهٔ ایمیلتان باز شده است. لطفاً آن را از همان‌جا بفرستید.'
            : 'سپاس؛ یادداشت شما به دست تحریریهٔ گوسان رسید.'}
        </p>
      ) : (
        <React.Fragment>
          <p className="comments-note">یادداشت شما تنها به دست تحریریه می‌رسد و بر وب‌سایت منتشر نمی‌شود.</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const v = (id) => (document.getElementById(id) || {}).value || '';
            const fields = {
              name: v('cm-name'), email: v('cm-mail'), message: v('cm-msg'),
              website: v('cm-hp'),   /* honeypot */
              subject: 'دیدگاه تازه — ' + ((post && post.title) || 'گوسان'),
              page: (typeof location !== 'undefined' ? location.href : ''),
            };
            const problem = gosanNoteProblem(fields);
            if (problem) { setErr(problem); return; }
            if (busy) return;
            setErr(''); setBusy(true);
            gosanFormSubmit(fields).then(() => setSent('ok')).catch(() => { gosanMailtoFallback(fields); setSent('mail'); }).finally(() => setBusy(false));
          }}>
            <div className="comments-row">
              <FormField id="cm-name" placeholder="نام شما" />
              <FormField id="cm-mail" type="email" placeholder="ایمیل شما" />
            </div>
            <FormField id="cm-msg" multiline placeholder="پیام خود را بنویسید…" />
            {/* the honeypot: off-screen, skipped by tab and by screen readers —
                only a bot fills it, and the Worker drops what it fills */}
            <input id="cm-hp" className="hp-field" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            {err ? <p className="form-err" role="alert">{err}</p> : null}
            <Button variant="gold">{busy ? 'در حال فرستادن…' : 'ارسال پیام'}</Button>
          </form>
        </React.Fragment>
      )}
    </section>
  );
}

function FullEssayBody() {
  return (
    <React.Fragment>
      <p className="essay-lede">
        از روزگاران کهن در ایران باستان، رامشگران و نغمه‌خوانانی در کار پاسداری از تاریخ و افسانه‌های این سرزمین بودند.
        «گوسان»ها، آن‌طور که در زبان پهلوی خوانده می‌شدند<Footnote n={1} />، روایتگر بودند؛ روایتگر شادی و اندوه مردمان،
        روایتگر رزم و بزم شاهان، روایتگر پیروزی و شکست قهرمانان.
      </p>

      <div className="essay-cols">
        <p>
          آنها این همه را به دیبای وزن و قافیه می‌آراستند و به نوای سازهای خوش‌آهنگ خویش می‌آمیختند تا به دل‌ها بنشیند
          و در یادها بماند، تا سینه به سینه باز گفته و باز خوانده شود. گوسان‌ها می‌سرودند و می‌نواختند تا تاریخ و افسانه
          را در جامهٔ زربفت چامه و موسیقی از گزند فراموشی در امان بدارند. از پس آنان خداینامه‌نویسان ساسانی آمدند<Footnote n={2} />
          و پسان‌تر سرایندگان پارسی‌گوی از توس و بخارا تا تبریز و گنجه.
        </p>
        <p>
          امروز که غبار «وحشتی بزرگ» بر شئون زندگانی ایرانیان سایه افکنده، و نشانه‌های بحران از فرهنگ و هنر تا اقتصاد
          و اقلیم این کهن‌دیار را فرا گرفته‌اند، ما فرزندان این بوم و بر بیش از هر زمان دیگری از خود می‌پرسیم
          در کجای این شب تاریک ایستاده‌ایم. بیش از هر زمان دیگری نشان فرهنگ و تاریخ خویش را می‌جوییم تا در ریسمان‌های آن چنگ زنیم.
        </p>
      </div>

      <PullQuote cite="از همین جستار" style={{ margin: '2.8rem 0' }}>
        فرهنگ و هنر، نه کالاهای تفننی، که ستون‌های تاب‌آوری، بازسازی و بازشناسی هویت یک ملت‌اند
      </PullQuote>

      <figure className="essay-figure">
        <DraftFrame label="FIG. 03 — CYPRESS LANDSCAPE">
          <img src="assets/cypress-landscape.png" alt="" style={{ display: 'block', width: '100%' }} />
        </DraftFrame>
        <figcaption>سروهای کهن در نگاره‌های ایرانی؛ نشانی از ایستادگی و پایداری در برابر تندباد روزگار.</figcaption>
      </figure>

      <div className="essay-cols">
        <p>
          میراث نیاکان، نه یادگاری‌های خاموش، که ریسمان‌هایی در هم پیوسته‌اند برای ایستادگی در تندبادهای فراموشی و سرگردانی؛
          ریسمان‌های ایران. ما بر این باوریم که گذار از بحران عمیق کنونی، نه با قرار دادن خود در جایگاه قربانی،
          که تنها با بازشناسی نقش خویش ممکن است.
        </p>
        <p>
          در سرزمینی غارت‌شده و جامعه‌ای بحران‌زده که نهادهای آن رو به فرسایش‌اند، آیا نمی‌توان فرهنگ و هنر را
          به نیرویی برای بازسازی بدل کرد؟<Footnote n={3} /> آیا نمی‌توان و نباید هنر و فرهنگ را از حاشیهٔ فراموشی به متن احیاء
          یک ملت آورد و با آن پلی به سوی فردایی روشن‌تر ساخت؟
        </p>
      </div>

      <div className="essay-verse">
        <Verse hemistichs={['هنر خوار شد جادویی ارجمند', 'نهان راستی، آشکارا گزند']} poet="حکیم ابوالقاسم فردوسی" />
        <Footnote n={4} />
      </div>

      <p className="essay-close">
        ما فرزندان ایران در گاهنامهٔ «گوسان» می‌کوشیم در مسیر این هدف گام برداشته، پلی باشیم میان میراث کهن پدران
        و چشم‌انداز فردا، و نیز همراهی برای همهٔ آنان که در گرگ و میش شب، نور مهر ایران را در دل دارند.
      </p>

      <FootnotesList />
    </React.Fragment>
  );
}

/* default template for every article that doesn't yet have hand-set full content.
   Same format as the lead essay — lede + two-column body + pull quote + a fillable
   image figure + closing — using the article's own data and editable placeholders. */
function TemplateEssayBody({ post }) {
  const ph = 'متنِ کاملِ این نوشتار در این بخش جای می‌گیرد. این قالب آمادهٔ ویرایش است؛ پاراگراف‌های اصلی مقاله را اینجا بگذارید تا در همین نظم و آرایش، یک‌دست با دیگر نوشتارهای گوسان، منتشر شوند.';
  return (
    <React.Fragment>
      <div className="essay-cols">
        <p>{ph}</p>
        <p>{ph}</p>
      </div>

      <PullQuote cite={post.author} style={{ margin: '2.8rem 0' }}>
        جملهٔ شاخصِ این نوشتار را در اینجا برجسته کنید.
      </PullQuote>

      <figure className="essay-figure">
        <DraftFrame label="FIG. 01">
          <div className="nc-img-wrap" style={{ aspectRatio: '16 / 9' }}>
            {React.createElement('image-slot', { id: `slot-article-${post.slug}`, placeholder: 'تصویر مقاله را اینجا رها کنید', shape: 'rect' })}
          </div>
        </DraftFrame>
        <figcaption>توضیح تصویر مقاله در این بخش قرار می‌گیرد.</figcaption>
      </figure>

      <div className="essay-cols">
        <p>{ph}</p>
        <p>{ph}</p>
      </div>

      <p className="essay-close">{ph}</p>
    </React.Fragment>
  );
}

/* Top-of-page marker for a پاره that continues an earlier one. Parts two and
   three open in the middle of an argument, so the page says so above the title
   and links back to the part before it. Part one has no predecessor and shows
   nothing, so nothing changes for a one-part essay. (EIC, 2026-09-19) */
function SeriesLead({ post }) {
  const series = (window.GOSAN_SERIES || []).find((g) => g.indexOf(post.slug) !== -1);
  if (!series) return null;
  const i = series.indexOf(post.slug);
  if (i <= 0) return null;
  const prev = (window.GOSAN_POSTS || []).find((p) => p.slug === series[i - 1]);
  if (!prev) return null;
  const part = (p) => {
    const m = p.title.match(/\(([^)]+)\)\s*$/);
    return m ? m[1] : p.title;
  };
  return (
    <p className="series-lead">
      <span className="series-lead-count">پارهٔ {toFa(i + 1)} از {toFa(series.length)}</span>
      <span className="series-lead-sep" aria-hidden="true">·</span>
      <span>دنبالهٔ <a className="series-lead-link" href={'/article/' + prev.slug}>{part(prev)}</a></span>
    </p>
  );
}

/* Where the reference apparatus begins inside a rendered article body.
   The series nav belongs after the essay text but BEFORE the apparatus (EIC,
   2026-09-19), and the apparatus is not shaped the same way in every piece:
   some bodies end in a <section class="fn-list-sec">, others open their
   references with <h2>منابع</h2>, and some have both.
   So look for either, and take whichever comes first in document order. */
const REF_HEADINGS = /^(منابع|مآخذ|کتابنامه|کتاب‌نامه|پانویس‌ها|یادداشت‌ها)$/;
function referenceAnchor(root) {
  if (!root) return null;
  const notes = root.querySelector('.fn-list-sec');
  let heading = null;
  const hs = root.querySelectorAll('h2, h3');
  for (let i = 0; i < hs.length; i += 1) {
    if (REF_HEADINGS.test((hs[i].textContent || '').trim())) { heading = hs[i]; break; }
  }
  if (notes && heading) {
    /* DOCUMENT_POSITION_PRECEDING === 2 */
    return (notes.compareDocumentPosition(heading) & 2) ? heading : notes;
  }
  return notes || heading || null;
}

/* foot-of-article link to the next پاره of the same essay */
function SeriesNav({ post }) {
  const series = (window.GOSAN_SERIES || []).find((g) => g.indexOf(post.slug) !== -1);
  if (!series) return null;
  const i = series.indexOf(post.slug);
  const at = (n) => (window.GOSAN_POSTS || []).find((p) => p.slug === series[n]);
  const prev = i > 0 ? at(i - 1) : null;
  const next = i < series.length - 1 ? at(i + 1) : null;
  if (!prev && !next) return null;
  const part = (p) => {
    const m = p.title.match(/\(([^)]+)\)\s*$/);
    return m ? m[1] : p.title;
  };
  return (
    <nav className="series-nav" aria-label="پاره‌های این جستار">
      <span className="series-nav-count">پارهٔ {toFa(i + 1)} از {toFa(series.length)}</span>
      <div className="series-nav-links">
        {prev ? (
          <a className="series-nav-link is-prev" href={'/article/' + prev.slug}>
            <span className="series-nav-dir">→ پارهٔ پیشین</span>
            <span className="series-nav-title">{part(prev)}</span>
          </a>
        ) : <span />}
        {next ? (
          <a className="series-nav-link is-next" href={'/article/' + next.slug}>
            <span className="series-nav-dir">پارهٔ بعدی ←</span>
            <span className="series-nav-title">{part(next)}</span>
          </a>
        ) : <span />}
      </div>
    </nav>
  );
}

function ArticleView({ slug }) {
  const post = (deskPayload(slug) || {}).post || GOSAN_POSTS.find((p) => p.slug === slug) || GOSAN_POSTS[0];
  const articleRef = React.useRef(null);
  /* the magazine sequence for a گفتگو — never on the edit desk, which saves the DOM it edits */
  const isInterviewLayout = post.tag === 'گفتگو' && !deskPayload(post.slug) && window.top === window;
  const ov = useContentOverride(post.slug);
  useInterviewReveal(articleRef, isInterviewLayout && !!(ov && ov.body));
  useInterviewMotif(articleRef, isInterviewLayout && !!(ov && ov.body));
  /* override HTML has no React handlers — delegate the footnote-card behaviour */
  React.useEffect(() => {
    if (!(ov && ov.body) || !articleRef.current) return;
    const root = articleRef.current;
    const closeAll = () => root.querySelectorAll('.fn-card.is-open, .fn-ref.is-open')
      .forEach((n) => n.classList.remove('is-open'));
    const openFor = (btn) => {
      closeAll();
      btn.classList.add('is-open');
      const card = btn.parentElement && btn.parentElement.querySelector('.fn-card');
      if (card) card.classList.add('is-open');
    };
    const onOver = (e) => {
      const btn = e.target.closest && e.target.closest('.fn-ref');
      if (btn && root.contains(btn) && !btn.classList.contains('is-open')) openFor(btn);
    };
    const onOut = (e) => {
      const card = e.target.closest && e.target.closest('.fn-card');
      if (card && !(e.relatedTarget && card.contains(e.relatedTarget))) closeAll();
    };
    const onClick = (e) => {
      const btn = e.target.closest && e.target.closest('.fn-ref');
      if (btn && root.contains(btn)) { openFor(btn); return; }
      if (!(e.target.closest && e.target.closest('.fn'))) closeAll();
    };
    root.addEventListener('mouseover', onOver);
    root.addEventListener('mouseout', onOut);
    document.addEventListener('click', onClick);
    return () => {
      root.removeEventListener('mouseover', onOver);
      root.removeEventListener('mouseout', onOut);
      document.removeEventListener('click', onClick);
    };
  }, [ov]);
  /* a caption «description<br>(source)» sits on one line when the line has room and breaks before its
     source only when it has not (EIC, 8 Oct 2026): the source becomes one unit after a plain space */
  React.useEffect(() => {
    const root = articleRef.current; if (!root) return;
    root.querySelectorAll('figcaption:not(.gsn-technical)').forEach(gosanSoftCaption);
  }, [ov, slug]);
  /* an address with a section fragment (/article/<slug>#sec-…, e.g. from a social part's link):
     scroll there once the body that holds the section is in. The body arrives in stages, so try
     a few times; give up quietly if the id is not in this essay. */
  React.useEffect(() => {
    const id = decodeURIComponent((location.hash || '').slice(1));
    if (!id || id.charAt(0) === '/') return undefined;
    let tries = 0, timer = null;
    const go = () => {
      const el = document.getElementById(id);
      if (el && articleRef.current && articleRef.current.contains(el)) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'auto' });
      } else if (tries++ < 20) {
        timer = setTimeout(go, 150);
      }
    };
    timer = setTimeout(go, 150);
    return () => clearTimeout(timer);
  }, [slug, ov && ov.body]);
  /* «بخش دوم» / «بخش سوم» (h2.essay-part) carry two small arrows (EIC, 19 Oct 2026: «create a small arrow
     next to the second and third section for an option to jump to the next or previous section»): up to
     the start of the part before (part one starts at the top of the essay), down to the next part. A part
     starts at its picture when one stands just above its marker. This is page chrome, not essay text: it
     is added once the body is in, never on the edit desk, and the desk strips .part-jump when it saves. */
  React.useEffect(() => {
    const root = articleRef.current;
    let framed = false;
    try { framed = window.self !== window.top; } catch (e) { framed = true; }
    if (!root || framed || deskPayload(slug)) return undefined;
    const marks = Array.prototype.slice.call(root.querySelectorAll('h2.essay-part'));
    if (!marks.length) return undefined;
    const startOf = (m) => {
      const p = m.previousElementSibling;
      return p && p.matches && p.matches('figure.essay-figure') ? p : m;
    };
    const go = (el) => {
      const top = el === root ? root.getBoundingClientRect().top : el.getBoundingClientRect().top;
      /* an instant jump: a part is many screens away, and a long smooth scroll is slow and not run everywhere */
      window.scrollTo({ top: top + window.scrollY - 70, behavior: 'auto' });
      history.replaceState(null, '', location.pathname + location.search + (el === root || !el.id ? '' : '#' + el.id));
    };
    const ICON = {
      up: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
      down: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    };
    const made = [];
    marks.forEach((m, i) => {
      const box = document.createElement('span');
      box.className = 'part-jump';
      const add = (target, label, icon) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'part-jump-btn';
        b.setAttribute('aria-label', label);
        b.title = label;
        b.innerHTML = icon;
        b.addEventListener('click', (e) => { e.preventDefault(); go(target); });
        box.appendChild(b);
      };
      add(i === 0 ? root : startOf(marks[i - 1]), 'بخش پیشین', ICON.up);
      if (i < marks.length - 1) add(startOf(marks[i + 1]), 'بخش بعدی', ICON.down);
      m.appendChild(box);
      made.push(box);
    });
    return () => made.forEach((n) => n.remove());
  }, [slug, ov && ov.body]);
  const getText = React.useCallback(() => {
    const el = articleRef.current;
    if (!el) return '';
    const clone = el.cloneNode(true);
    clone.querySelectorAll('.fn-card, .fn-list-sec, .gsn-technical').forEach((n) => n.remove());
    return clone.textContent || '';
  }, []);

  /* Put the پاره navigation immediately after the essay text rather than at the
     very foot of the page, where it sat below the notes and the کتابنامه. The
     apparatus lives inside the body HTML, so the nav cannot simply be reordered
     in JSX — instead an empty host node is placed before the apparatus and the
     nav is rendered into it through a portal. React owns only the portal's
     contents, so the body HTML is never mutated.
     undefined = not measured yet · null = no apparatus, render in place. */
  const [navSlot, setNavSlot] = React.useState(undefined);
  /* and the same for the «دنبالهٔ …» line, which belongs at the very top of the
     essay text — above its first heading, not above the article title. */
  const [leadSlot, setLeadSlot] = React.useState(undefined);
  React.useEffect(() => {
    const root = articleRef.current;
    if (!root) { setNavSlot(null); setLeadSlot(null); return undefined; }
    const made = [];

    const ref = referenceAnchor(root);
    if (ref && ref.parentNode) {
      const s1 = document.createElement('div');
      s1.className = 'series-nav-slot';
      ref.parentNode.insertBefore(s1, ref);
      made.push(s1);
      setNavSlot(s1);
    } else { setNavSlot(null); }

    /* first element of the body — the table of contents is website chrome, so
       it is skipped and the slot lands just above the essay's opening block. */
    let first = root.firstElementChild;
    while (first && first.matches && first.matches('nav.article-toc')) first = first.nextElementSibling;
    if (first && first.classList && first.classList.contains('series-nav-slot')) first = first.nextElementSibling;
    /* an override body is wrapped in a plain <div>; step inside it */
    if (first && first.tagName === 'DIV' && !first.className && first.firstElementChild) first = first.firstElementChild;
    if (first && first.parentNode) {
      const s2 = document.createElement('div');
      s2.className = 'series-lead-slot';
      first.parentNode.insertBefore(s2, first);
      made.push(s2);
      setLeadSlot(s2);
    } else { setLeadSlot(null); }

    return () => {
      setNavSlot(undefined); setLeadSlot(undefined);
      made.forEach((n) => { if (n.parentNode) n.parentNode.removeChild(n); });
    };
  }, [post.slug, ov && ov.body]);
  return (
    <main data-screen-label={`نوشتار — ${post.title}`}>
      <ReadingIndicator />

      <div className="article-head">
        <DraftLineH top="2.4rem" right="-6rem" left="-6rem" />
        {leadSlot === null ? <SeriesLead post={post} /> : null}
        <h1 className="gsn-display" style={{ fontSize: '2.4rem', margin: '0.6rem 0 1rem' }}><TitleLines text={post.title} /></h1>
        <div className="article-byline">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
            <AuthorAvatar name={post.author} bioHtml={GUEST_BY_SLUG[post.slug] ? null : ((ov && ov.bio) || null)} />
            <span style={{ color: 'var(--text-body)', fontWeight: 500 }}>{post.author}</span>
          </span>
          {/* two dates: when the piece reached the تحریریه, and when it went out.
              GOSAN_ISSUE_PUBLISHED is the issue's own publication date — every
              essay in an issue is published on the same day. */}
          <span className="byline-date" style={{ color: 'var(--accent)' }}>
            {/* the value has its own span: the edit desk reads and writes the date
                through it, so the label never becomes part of the saved date */}
            دریافت: <span className="byline-date-value">{(ov && ov.date) || post.date}</span>
          </span>
          <span className="byline-date" style={{ color: 'var(--accent)' }}>
            انتشار: {(post.published || GOSAN_ISSUE_PUBLISHED)}
          </span>
        </div>
        <ArticleMeta articleRef={articleRef} slug={post.slug + (ov && ov.body ? '-ov' : '')} />
      </div>

      <div className="article-layout">
        <article ref={articleRef}>
          <TableOfContents articleRef={articleRef} slug={post.slug + (ov && ov.body ? '-ov' : '')}
            labels={ov && ov.toc && Object.keys(ov.toc).length ? ov.toc : null} />
          {ov && ov.body ? (
            <div dangerouslySetInnerHTML={{ __html: isInterviewLayout ? interviewLayout(ov.body, post, ov) : ov.body }} />
          ) : post.full ? (
            <FullEssayBody />
          ) : (window.GOSAN_ARTICLE_BODIES && window.GOSAN_ARTICLE_BODIES[post.slug]) ? (
            React.createElement(window.GOSAN_ARTICLE_BODIES[post.slug])
          ) : (
            <TemplateEssayBody post={post} />
          )}
        </article>
        <SummaryAside post={post} getText={getText} ov={ov} />
      </div>

      {leadSlot ? ReactDOM.createPortal(<SeriesLead post={post} />, leadSlot) : null}
      {navSlot === undefined
        ? null
        : navSlot
          ? ReactDOM.createPortal(<SeriesNav post={post} />, navSlot)
          : <SeriesNav post={post} />}

      {/* a گفتگو in the magazine sequence presents its guest at the top instead (EIC, 24 Oct 2026) */}
      {isInterviewLayout ? null : <AuthorBioBlock post={post} ov={ov} />}

      <CommentsSection post={post} />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem 3rem', display: 'flex', justifyContent: 'center', borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
        <Button variant="ghost" href="/">← بازگشت به خانه</Button>
      </div>
    </main>
  );
}

Object.assign(window, { ArticleView });
