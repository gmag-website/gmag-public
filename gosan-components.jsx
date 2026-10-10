/* Gosan DS components — composed from the bound design-system bundle.
   Classes live in the DS css (gsn-*) — do not restyle them here. */

const {
  Button, Tag, SectionHead, ArticleCard, Verse, PullQuote, GoldDots, DraftFrame, FormField,
} = window.GosanMagazineDesignSystem_8ee353;

/* ---------- drafting lines ---------- */
/* the negative insets are inline, so the phone rules that pull them back inside
   the screen have to be !important — see «PHONE COMPOSITION» in site.css */
function DraftLineH({ top, right = '-4rem', left = '-4rem' }) {
  return <div className="gsn-draft-h" style={{ position: 'absolute', top: top, right: right, left: left, height: '1px', background: 'var(--line-draft)', pointerEvents: 'none' }}></div>;
}
function DraftLineV({ side, offset, top = '-3rem', bottom = '-3rem' }) {
  const st = { position: 'absolute', top: top, bottom: bottom, width: '1px', background: 'var(--line-draft)', pointerEvents: 'none' };
  st[side] = offset;
  return <div className="gsn-draft-v" style={st}></div>;
}

/* ---------- motion: scroll reveal + parallax ---------- */
function Reveal({ children, delay = 0, style, className = '' }) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let fired = false;
    const show = () => { if (!fired) { fired = true; setInView(true); cleanup(); } };
    let io = null;
    try {
      io = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) show(); },
        { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
      );
      io.observe(el);
    } catch (e) { /* IO unavailable */ }
    /* fallback: IO can be inert during the bundler splash / embedded frames —
       re-check from scroll position over the first few seconds until layout settles */
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) show();
    };
    const timers = [120, 400, 900, 1600, 2600].map((t) => setTimeout(check, t));
    window.addEventListener('load', check);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    function cleanup() {
      if (io) io.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener('load', check);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    return cleanup;
  }, []);
  return (
    <div ref={ref} className={`rv${inView ? ' rv-in' : ''}${className ? ' ' + className : ''}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

function useParallax(speed = 0.06) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('plx');
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (document.body.dataset.motion === 'off') { el.style.transform = ''; return; }
        const r = el.getBoundingClientRect();
        const d = (r.top + r.height / 2) - window.innerHeight / 2;
        el.style.transform = `translateY(${(-d * speed).toFixed(1)}px)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);
  return ref;
}

/* ---------- content (placeholder copy — replace with real pieces) ---------- */
/* Issue 1 is published with one essay still to come («گوسان کیست؟», due ۲۳ مهر ۲۵۸۵ (۱۴۰۵) / 15 Oct 2026).
   The note stands beside «نگاهی به این شماره» on the home page and beside the page count on the
   issue page. Set it to '' when the essay is in. (EIC, 8 Oct 2026) */
const GOSAN_ISSUE_PENDING = '(در دست تکمیل)';

const GOSAN_POSTS = [
  
  
  { slug: 'ethos-of-survival', tag: 'جستار', title: 'گذار از خلقیات بقاء', excerpt: 'موسیقی دستگاهی ایران چگونه قرن‌ها در «خلقیات بقاء» زیست، از آن بیرون آمد، و پس از ۱۳۵۷ به آن بازگشت.', date: 'شهریور ۲۵۸۵ (۱۴۰۵)', author: 'سهراب لبیب' },
  { slug: 'herzfeld-german-archives', tag: 'جستار', title: 'ارنست هرتسفلد در آیینۀ اسناد وزارت خارجۀ آلمان — بخش نخست', excerpt: 'درآمدی بر سه پوشهٔ اسناد «پروفسور هرتسفلد» در بایگانی سیاسی وزارت خارجهٔ آلمان و نخستین سند از این مجموعه.', date: 'مهر ۲۵۸۵ (۱۴۰۵)', author: 'سهیل دلشاد' },
  { slug: 'note-for-gosan', tag: 'دیدگاه', title: 'یادداشتی برای گوسان', excerpt: 'یادداشتی به مناسبت آغاز به کار گوسان؛ از «روزنامهٔ کاوه» برلین تا رسالت روایتگری گوسانِ امروز.', date: 'دی ۲۵۸۴ (۱۴۰۴)', author: 'سام گیوراد' },
  { slug: 'crossroads-ahead', tag: 'دیدگاه', title: 'دوراهی پیشِ رو', excerpt: 'درنگی در مهاجرت گستردهٔ موسیقی‌دانان ایرانی و پیامدهای آن برای تداوم نهادی آهنگسازی، موسیقی‌شناسی و اجرا.', date: 'خرداد ۲۵۸۵ (۱۴۰۵)', author: 'مهرداد غلامی' },
  { slug: 'oil-to-narrative', tag: 'پروندهٔ اقتصاد خلاق', title: 'از نفت تا روایت: اهمیت ایجاد صندوق سرمایه‌گذاری ملی برای فرهنگ و هنر', excerpt: 'چرا ایجاد صندوق سرمایه‌گذاری ملی برای فرهنگ و هنر، نه یک انتخاب لوکس، که ضرورتی برای بازسازی جایگاه ایران است.', date: 'دی ۲۵۸۴ (۱۴۰۴)', author: 'مصطفی بوشهری' },
  { slug: 'interview-farnaz-modarresifar', tag: 'گفتگو', title: 'سنتور در کانون آوانگاردیسم: گفتگو با فرناز مدرسی‌فر', excerpt: 'گفت‌وگو با فرناز مدرسی‌فر، آهنگساز و نوازندهٔ سنتور، نخستین هنرمند ایرانی مقیم ویلا مدیچی؛ سنتور در کانون آوانگاردیسم.', date: 'مرداد ۲۵۸۵ (۱۴۰۵)', author: 'یلدا زمانی' },
  { slug: 'music-totalitarian-regimes', tag: 'جستار', title: 'نقش موسیقی در نظام‌های تمامیت‌خواه', excerpt: 'از سرودهای رایش سوم تا سمفونی بابی‌یار؛ جستاری در دو چهرهٔ موسیقی زیر سایهٔ قدرت: نوای فرمان و زمزمهٔ پنهان آزادی.', date: 'دی ۲۵۸۴ (۱۴۰۴)', author: 'حافظ باباشاهی' },
  { slug: 'beyzaie-myth-symbolic-action', tag: 'یادمان', title: 'حقیقتی که نمی‌رهاند؛ اسطوره‌سازی و کُنشِ نمادین در تئاتر بهرام بیضایی', excerpt: 'اسطوره در تئاتر بیضایی نه پناه‌بردن به گذشته، که راهبردی است برای برهم‌زدن قطعیت‌ها؛ درنگی بر کنش نمادین در «مرگ یزدگرد» و جهان نمایشی بیضایی.', date: 'بهمن ۲۵۸۴ (۱۴۰۴)', author: 'حامد امان‌پور قرایی' },
  { slug: 'between-two-defeats', tag: 'پروندهٔ سیاست‌گذاری فرهنگی', title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران (بخش نخست، پارهٔ یکم)', excerpt: 'این نخستین یادداشت از مجموعه‌ای از یادداشت‌ها است که با تکیه بر نظریه‌های اقتصادی و سیاست‌گذاری عمومی به مسائلِ سیاست‌گذاری فرهنگی در ایرانِ آزادِ آینده می‌پردازد.', date: 'مرداد ۲۵۸۵ (۱۴۰۵)', author: 'یلدا زمانی' },
  { slug: 'between-two-defeats-2', tag: 'پروندهٔ سیاست‌گذاری فرهنگی', title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران (بخش نخست، پارهٔ دوم)', excerpt: 'تجربهٔ غرب: تاریخ حمایت دولتی از فرهنگ و هنر، الگوهای کهنه و ناکارآمد، و جعبه‌ابزار متنوعی که سیاست فرهنگی امروز در اختیار دارد.', date: 'مرداد ۲۵۸۵ (۱۴۰۵)', author: 'یلدا زمانی' },
  { slug: 'between-two-defeats-3', tag: 'پروندهٔ سیاست‌گذاری فرهنگی', title: 'میانِ دو شکست: دولت، بازار و سیاست‌گذاری فرهنگی در ایران (بخش نخست، پارهٔ سوم)', excerpt: 'کاربست ایرانی: چرا اصلاح فنیِ یک ساختار تمامیت‌خواه توهم است، طنز تلخ بوروکراسی، و گذار به دولت ملی.', date: 'مرداد ۲۵۸۵ (۱۴۰۵)', author: 'یلدا زمانی' },
  { slug: 'azarkeyvani-creation-myth', tag: 'جستار', title: 'تأویلی آذرکیوانی از اسطورۀ آفرینش زردشتی در کتاب دبستان مذاهب', excerpt: 'بررسی روایت دبستان مذاهب از اسطورۀ آفرینش زردشتی و تأویل منسوب به جاماسب حکیم؛ روایتی که سرچشمهٔ آن نه متون زردشتی، که نوشته‌های ملل‌ونحل‌نویسان اسلامی است و تأویلش از اندیشه‌های آذرکیوانی برمی‌خیزد.', date: 'تیر ۲۵۸۵ (۱۴۰۵)', author: 'فرزانه گشتاسب' },
  { slug: 'who-is-the-gosan', tag: 'جستار', title: 'گوسان کیست؟ سنت گوسانان در ایران باستان', excerpt: 'انتشار در ۲۳ مهر ۲۵۸۵ (۱۴۰۵).', pending: true , date: 'مهر ۲۵۸۵ (۱۴۰۵)', author: 'احسان شواربی' },
  { slug: 'farabi-music-politics', tag: 'جستار', title: 'موسیقی، ریاضی، و سیاست در نزد فارابی', excerpt: 'فلسفه، سیاست و موسیقی نزد فارابی سه مشغلهٔ جداگانه نیستند؛ جستاری در اینکه چرا کتاب موسیقی کبیر هم‌زمان کتابی است در آکوستیک، در منطق، و در هنر حکومت‌داری.', date: 'شهریور ۲۵۸۵ (۱۴۰۵)', author: 'امین نایب‌پور' },
];

/* Essays published in ordered پاره. A reader reaching the foot of one is offered
   the next, so a long piece can be read straight through. Slugs in reading order;
   the article page derives «پیشین/بعدی» from the position. */
/* When شمارهٔ ۱ goes out. Every essay in an issue carries the same publication
   date; a post may override it with its own `published` field. The issue goes
   out in مهر ۱۴۰۵ = مهر ۲۵۸۵ (editor-in-chief, 3 Oct 2026). */
const GOSAN_ISSUE_PUBLISHED = 'مهر ۲۵۸۵ (۱۴۰۵)';

const GOSAN_SERIES = [
  ['between-two-defeats', 'between-two-defeats-2', 'between-two-defeats-3'],
];

/* ---------- provenance: pieces that come out of the think tank ----------
   The گاهنامه carries two kinds of writing. Most of it is commissioned or
   submitted to the magazine; some of it is the written output of the
   اندیشکده's own working teams. A reader is entitled to know which is which,
   so any slug listed here carries an origin mark on its card. Add a slug when
   the piece is the institute's own research output — not merely when its
   subject is policy. */
const GOSAN_THINKTANK_LABEL = 'اندیشکدهٔ فرهنگ و هنر گوسان';
const GOSAN_THINKTANK_NOTE = 'این نوشتار برآمده از کار پژوهشی اندیشکدهٔ فرهنگ و هنر گوسان است.';
const GOSAN_THINKTANK = new Set([
  'between-two-defeats',
  'between-two-defeats-2',
  'between-two-defeats-3',
]);
const isThinkTank = (slug) => GOSAN_THINKTANK.has(slug);

/* ---------- form delivery ---------- */
const GOSAN_FORM_INBOX = 'info@gosan.org';
/* Reader notes go the same way as subscriptions: to the Worker, which mails them
   on through Brevo (tools/subscribe-worker). One processor for both, one AVV, and
   nothing published — the note reaches the desk and stops there. If the endpoint
   is not set yet, or the request fails, callers fall back to a mailto: compose. */
async function gosanFormSubmit(fields) {
  const endpoint = (typeof window !== 'undefined' && window.GOSAN_SUBSCRIBE_ENDPOINT) || '';
  if (!endpoint) throw new Error('subscribe endpoint not configured');
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      kind: 'comment',
      name: fields.name || '',
      email: fields.email || '',
      message: fields.message || '',
      page: fields.page || '',
      subject: fields.subject || '',
      website: fields.website || '',   /* honeypot — a person leaves this empty */
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) throw new Error('relay status ' + res.status);
  return data;
}
/* what a reader's note must have before it is sent: words, and an address that can be answered (or none) */
function gosanNoteProblem(fields) {
  if (!String(fields.message || '').trim()) return 'لطفاً پیام خود را بنویسید.';
  const e = String(fields.email || '').trim();
  if (e && !/^[^@\s,;]+@[^@\s,;]+\.[^@\s,;]{2,}$/.test(e)) return 'نشانی ایمیل درست نیست؛ آن را بررسی کنید یا خالی بگذارید.';
  return '';
}
/* a caption's source, «(…)» after a line break, joins the description when the line has room (EIC, 8 Oct 2026) */
function gosanSoftCaption(c) {
  if (!c || c.dataset.soft) return;
  const br = c.querySelector('br'); if (!br) return;
  const rest = []; let n = br.nextSibling;
  while (n) { rest.push(n); n = n.nextSibling; }
  if (!rest.length || !/^\s*\(/.test(rest.map((x) => x.textContent).join(''))) return;
  const src = document.createElement('span'); src.className = 'cap-src';
  rest.forEach((x) => src.appendChild(x));
  br.replaceWith(document.createTextNode(' ')); c.appendChild(src);
  c.dataset.soft = '1';
}
/* the same for a plain-text credit written «description\n(source)» */
function gosanSoftCredit(text) {
  const t = String(text || ''); const i = t.indexOf('\n');
  if (i < 0) return t;
  return <React.Fragment>{t.slice(0, i)} <span className="cap-src">{t.slice(i + 1)}</span></React.Fragment>;
}
function gosanMailtoFallback(fields) {
  const subject = encodeURIComponent(fields.subject || 'پیام از وب‌سایت گوسان');
  const body = encodeURIComponent(
    'نام: ' + (fields.name || '') + '\nرایانامه: ' + (fields.email || '') +
    '\nصفحه: ' + (fields.page || '') + '\n\nپیام:\n' + (fields.message || '')
  );
  window.location.href = 'mailto:' + GOSAN_FORM_INBOX + '?subject=' + subject + '&body=' + body;
}

/* article-page چکیده: the author/editor abstract (چکیدهٔ پیشنهادی) where one
   exists; SummaryAside falls back to the teaser excerpt otherwise. */
const GOSAN_SUMMARIES = {
  "ethos-of-survival": "این جستار موسیقی دستگاهی ایران را هنری می‌خواند که قرن‌ها در «خلقیات بقاء» زیسته است: از سخت‌گیری عصر صفوی تا دورانی که اکوسیستم بقاء جای خود را به رشد و اشاعه داد، و بازگشت به همان خلقیات پس از ۱۳۵۷.",
  "farabi-music-politics": "این جستار فلسفه، سیاست و موسیقی را نزد فارابی حلقه‌های یک زنجیر واحد می‌خواند: موسیقی در کتاب موسیقی کبیر به علمی برهانی بدل می‌شود و غایت آن تربیت اخلاقی شهروند در مدینهٔ فاضله است.",
  "azarkeyvani-creation-myth": "این جستار روایت کتاب دبستان مذاهب از اسطورۀ آفرینش زردشتی و تأویل منسوب به جاماسب حکیم را بررسی می‌کند؛ تأویلی که گیتی را بدن انسان، یزدان را روح، اهریمن را طبیعت عنصری و «فکر ردیه» را میل نفس به امور مادی می‌داند. مقایسهٔ روایت دبستان مذاهب با گزارش‌های الملل و النحل شهرستانی نشان می‌دهد که این روایت بیش از همه به عقاید فرقهٔ کیومرثیه نزدیک است: «یزدان ازلی و قدیم و اهرمن محدث و مخلوق است». بنابراین، سرچشمهٔ این روایت نوشته‌های ملل‌ونحل‌نویسان اسلامی بوده است، نه باورهای زردشتی در متون اوستایی یا فارسی میانه.",
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر، نخستین آهنگساز ایرانیِ برگزیده برای آکادمی فرانسه در رم (ویلای مدیچی)، در این گفت‌وگو از کوشش خود برای بازتعریف سنتور سخن می‌گوید؛ از سازی وابسته به ردیف تا منبعی صوتی در کانون آهنگسازی آوانگارد معاصر. او پیوند میان منطق زمانیِ موسیقی کلاسیک ایرانی و زبان آهنگسازی امروز اروپا را می‌کاود و از مقاومت در برابر کلیشۀ «هنرمند شرقی» می‌گوید. در پایان، سه گام بنیادی برای اعتلای موسیقی در ایرانِ فردا و نقش اجتماعی موسیقی معاصر را برمی‌شمارد.",
  "herzfeld-german-archives": "این جستار، بخش نخست از مجموعه‌ای دنباله‌دار، به معرفی و بررسی اسناد مربوط به ارنست هرتسفلد، ایران‌شناس و باستان‌شناس نامدار آلمانی، در بایگانی سفارت آلمان در تهران می‌پردازد؛ اسنادی که اکنون در «بایگانی سیاسی ادارۀ فدرال خارجی» در برلین نگهداری می‌شوند.",
  "crossroads-ahead": "این جستار به موج دو دهه‌ای مهاجرت موسیقی‌دانان ایرانی به اروپا و آمریکای شمالی و پیامدهای نهادی آن برای موسیقی کلاسیک ایران می‌پردازد.",
  "between-two-defeats": "پارهٔ نخست از «میانِ دو شکست»: چارچوب نظری. نویسنده با دو مفهوم بنیادین اقتصاد سیاسی، «شکست بازار» و «شکست دولت»، نشان می‌دهد که چرا فرهنگ و هنر را نه می‌توان یکسره به سازوکار عرضه و تقاضا سپرد و نه به دولتی که آن را ابزار بازتولید ایدئولوژی می‌کند. از مرز مشروع مداخلهٔ دولت آغاز می‌کند، به «اصل فاصله از قدرت» می‌رسد، و با تنش همیشگی میان کارایی و برابری پایان می‌گیرد.",
  "between-two-defeats-2": "پارهٔ دوم از «میانِ دو شکست»: تجربهٔ غرب. مروری بر تاریخ حمایت دولتی از فرهنگ و هنر در غرب، نقد الگوهای کهنه و ناکارآمدِ این حمایت، و معرفی جعبه‌ابزار متنوعی که سیاست فرهنگی امروز در اختیار دارد: از یارانهٔ مستقیم تا معافیت مالیاتی و نهادهای واسط.",
  "between-two-defeats-3": "پارهٔ سوم از «میانِ دو شکست»: کاربست ایرانی. چرا اصلاح فنیِ یک ساختار تمامیت‌خواه توهم است و گسل اصلی مطالعات سیاست‌گذاری فرهنگی در ایران کجاست؛ از طنز تلخ بوروکراسی تا گذار به دولت ملی و بازگشت به حافظهٔ تاریخی. کتاب‌نامهٔ کامل جستار در پایان همین پاره آمده است.",
  "music-totalitarian-regimes": "این جستار با شنیدنِ فینال سمفونی نهم بتهوون در ویرانه‌های ساختمان صداوسیما آغاز می‌شود و از همین جا پرسش از نسبت هنرمند با زمانهٔ خویش را پیش می‌کشد. سپس کارکرد دوگانهٔ موسیقی در نظام‌های تمامیت‌خواه را می‌کاود: از یک سو ابزار تبلیغات، سانسور و تربیت ایدئولوژیک، و از سوی دیگر پناهگاه آزادگی و شرافت انسان. گونه‌گونیِ مواضع هنرمندان در دوران سرکوب، آینه‌ای از وضعیت اخلاقی یک دوران است.",
  "beyzaie-myth-symbolic-action": "این یادمان، تئاتر بهرام بیضایی را در برابر سلطهٔ رئالیسمِ توضیح‌محور و نگاه روان‌شناختی می‌نشاند؛ تئاتری که به‌جای افشاگری و وعدهٔ رهایی، با اسطوره و کنش نمادین نظمِ خوگرفته به فهم‌پذیری و تسکین را برهم می‌زند.",
  "note-for-gosan": "این یادداشت به مناسبت زایش گاهنامهٔ گوسان نوشته شده و نویسنده در آن، دعوتِ احسان شواربی و گروهی از ایران‌دوستانِ مقیم اروپا به همکاری با نشریه را دست‌مایهٔ یادآوریِ «روزنامهٔ کاوه» می‌کند؛ نشریه‌ای که سیدحسن تقی‌زاده در گیرودار جنگ جهانی اول در برلن بنیاد نهاد.",
  "oil-to-narrative": "این جستار از پروندهٔ اقتصاد خلاق استدلال می‌کند که فرهنگ و هنر در جهان امروز به عرصه‌ای برای رقابتِ قدرت و «قدرت نرم» بدل شده‌اند و دولت‌های خاورمیانه، از راه صندوق‌های ثروت ملی، آن را در خدمت سه هدف به کار گرفته‌اند: توانمندسازی هنر داخلی، برندسازی ملی، و رقابت منطقه‌ای و جهانی. نویسنده با نمونه‌هایی چون «چشم‌انداز سعودی ۲۰۳۰»، جشنواره‌های ریاض و موزهٔ لوور ابوظبی، این سرمایه‌گذاری‌ها را نه هزینه‌ای تزئینی بلکه راهبردی آگاهانه می‌خواند، و در برابرِ آن تجربهٔ ناتمام ایران را می‌نشاند: از سرمایه‌گذاری‌های فرامرزیِ دوران پهلوی تا فروکاسته‌شدنِ صندوق توسعهٔ ملیِ جمهوری اسلامی به ابزار جبران کسری بودجه. به باور او، ایجاد صندوق سرمایه‌گذاری ملیِ مستقل، شفاف و آینده‌نگر و تخصیص بخشی از آن به فرهنگ و هنر تنها از دولتی ملی برمی‌آید و برای بازسازی جایگاه منطقه‌ای و جهانی ایران نه انتخابی لوکس، بلکه ضرورتی است."
};

Object.assign(window, {
  Button, Tag, SectionHead, ArticleCard, Verse, PullQuote, GoldDots, DraftFrame, FormField,
  DraftLineH, DraftLineV, Reveal, useParallax, GOSAN_POSTS, GOSAN_SUMMARIES, GOSAN_SERIES,
  GOSAN_ISSUE_PUBLISHED, ClockIcon,
  gosanFormSubmit, gosanMailtoFallback, gosanSoftCaption, gosanSoftCredit, gosanNoteProblem,
});

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M12 7v5l3 2"></path>
    </svg>
  );
}

/* ---------- Persian motif — toranj medallion flanked by two fading gold lines ---------- */
function MotifMark({ size = 52 }) {
  return (
    <svg className="gsn-motif-mark" width={size * 86 / 117} height={size} viewBox="0 0 86 117" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* top trefoil finial */}
        <path d="M43 3 C41.3 6 41.3 8.6 43 11.2 C44.7 8.6 44.7 6 43 3 Z" />
        <path d="M37.5 9.5 C38 11.4 39.4 12 41 11.7 M48.5 9.5 C48 11.4 46.6 12 45 11.7" />
        {/* outer cartouche: onion-dome top, wide lower body, pointed base */}
        <path d="M43 11 C49 14 55 18 57 27 C58.4 31 55.5 33 57 37 C61 46 65 55 65 65 C65 77 56 88 43 103 C30 88 21 77 21 65 C21 55 25 46 29 37 C30.5 33 27.6 31 29 27 C31 18 37 14 43 11 Z" />
        {/* inner illuminated outline */}
        <path d="M43 18 C47.5 20.5 52 23.5 53.5 31 C54.5 35 52 37 53 40.5 C56 48 59 55 59 64 C59 74 51.5 83 43 95 C34.5 83 27 74 27 64 C27 55 30 48 33 40.5 C34 37 31.5 35 32.5 31 C34 23.5 38.5 20.5 43 18 Z" />
        {/* top inner pointed arch */}
        <path d="M43 23 C38.5 28 37.5 33 40 40 M43 23 C47.5 28 48.5 33 46 40" />
        {/* bottom pendant */}
        <path d="M43 103 L43 106" />
        <path d="M43 106 C41.2 108.5 41.2 111 43 113.5 C44.8 111 44.8 108.5 43 106 Z" />
        {/* central lotus bud */}
        <path d="M43 50 C39 58 39 66 43 74 C47 66 47 58 43 50 Z" />
      </g>
      <circle cx="43" cy="61" r="1.6" fill="currentColor" />
    </svg>
  );
}

function MotifDivider({ size = 26, style, className = '' }) {
  return (
    <div className={`gsn-motif-divider${className ? ' ' + className : ''}`} style={{ ...style, marginLeft: 'auto', marginRight: 'auto' }} aria-hidden="true">
      <span className="gsn-motif-line"></span>
      <MotifMark size={size} />
      <span className="gsn-motif-line"></span>
    </div>
  );
}

Object.assign(window, { MotifMark, MotifDivider });
