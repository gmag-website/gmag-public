/* Gosan Weblog — interactive features: scroll progress, search overlay, back-to-top */

/* thin gold reading-progress hairline pinned to the very top */
function ScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }}></div>;
}

/* minimal full-screen search — filters posts live; opens via window 'gosan:search' event or "/" key */
function SearchOverlay() {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      const tag = (document.activeElement && document.activeElement.tagName) || '';
      if (e.key === '/' && !/INPUT|TEXTAREA/.test(tag)) { e.preventDefault(); setOpen(true); }
    };
    window.addEventListener('gosan:search', onOpen);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('gosan:search', onOpen); window.removeEventListener('keydown', onKey); };
  }, []);

  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const query = q.trim();
  const results = query
    ? GOSAN_POSTS.filter((p) => (p.title + ' ' + p.excerpt + ' ' + p.tag + ' ' + p.author).includes(query))
    : GOSAN_POSTS.slice(0, 5);

  if (!open) return null;
  return (
    <div className="search-overlay" onClick={(e) => { if (e.target.classList.contains('search-overlay')) setOpen(false); }}>
      <div className="search-panel">
        <div className="search-head">
          <span className="gsn-technical">SEARCH // جستجو در گوسان</span>
          <button className="search-close" onClick={() => setOpen(false)} aria-label="بستن">×</button>
        </div>
        <input
          ref={inputRef}
          className="search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="عنوان، موضوع یا نویسنده…"
        />
        <div className="search-meta gsn-technical">
          {query ? `${results.length} نتیجه` : 'تازه‌ترین نوشتارها'}
        </div>
        <ul className="search-results">
          {results.map((p) => (
            <li key={p.slug}>
              <a href={`#/article/${p.slug}`} onClick={() => { setOpen(false); setQ(''); }}>
                <span className="search-r-tag">{p.tag}</span>
                <span className="search-r-title">{p.title}</span>
                <span className="search-r-arrow" aria-hidden="true">←</span>
              </a>
            </li>
          ))}
          {query && results.length === 0 ? <li className="search-empty">چیزی یافت نشد.</li> : null}
        </ul>
      </div>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <button
      className={`back-top${show ? ' is-show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="بازگشت به بالا"
    >↑</button>
  );
}


/* subscription — one destination for «دریافت اشتراک» and the issue card's button;
   both dispatch 'gosan:subscribe' and land here, where the reader leaves an address.
   NOTE: nothing is sent anywhere yet — the address is taken and confirmed in the
   page, exactly like the newsletter form, until a mail endpoint exists. */
/* The subscription endpoint — a Cloudflare Worker holding the Brevo key.
   Set this to the Worker's URL once deployed (tools/subscribe-worker/README.md).
   While it is empty nothing is sent, and the forms say so rather than pretending. */
const GOSAN_SUBSCRIBE_ENDPOINT = 'https://gosan-subscribe.gosan.workers.dev';

const SUB_MSG = {
  pending: 'در حال فرستادن…',
  ok: 'سپاس؛ پیوند تأیید به نشانی شما فرستاده شد. با کلیک بر آن، اشتراک شما کامل می‌شود.',
  fail: 'فرستادن نشانی ممکن نشد. لطفاً دوباره بکوشید یا به info@gosan.org بنویسید.',
  off: 'سامانهٔ اشتراک هنوز راه‌اندازی نشده است. لطفاً به info@gosan.org بنویسید.',
};

/* one path for every address the site collects; kind = issues | print | newsletter */
async function gosanSubscribe(email, kind) {
  if (!GOSAN_SUBSCRIBE_ENDPOINT) return { ok: false, msg: SUB_MSG.off };
  try {
    const res = await fetch(GOSAN_SUBSCRIBE_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, kind }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) return { ok: true, msg: SUB_MSG.ok };
  } catch (e) { /* offline, blocked, or the Worker is down */ }
  return { ok: false, msg: SUB_MSG.fail };
}

const SUBSCRIBE_COPY = {
  /* the issue card's button — the standing subscription, every issue to come */
  issues: {
    title: 'دریافت اشتراک گاهنامهٔ گوسان',
    lede: 'نشانی ایمیل خود را بنویسید تا با اشتراک گوسان، شماره‌های آینده به‌محض انتشار دیجیتال به دست شما برسد.',
  },
  /* the masthead, beside the cover of issue one — that issue itself */
  print: {
    title: 'دریافت این شماره',
    lede: 'نشانی ایمیل خود را بنویسید تا این شمارهٔ گاهنامهٔ گوسان به‌محض انتشار نسخهٔ دیجیتال آن برای شما فرستاده شود.',
  },
};

function SubscribeOverlay() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({ phase: 'idle', msg: '' });
  const [kind, setKind] = React.useState('issues');
  const [email, setEmail] = React.useState('');
  const inputRef = React.useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    if (state.phase === 'sending') return;
    setState({ phase: 'sending', msg: SUB_MSG.pending });
    const r = await gosanSubscribe(email.trim(), kind);
    setState({ phase: r.ok ? 'sent' : 'failed', msg: r.msg });
  };

  React.useEffect(() => {
    const onOpen = (e) => {
      setKind(e && e.detail && SUBSCRIBE_COPY[e.detail] ? e.detail : 'issues');
      setOpen(true); setState({ phase: 'idle', msg: '' });
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('gosan:subscribe', onOpen);
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('gosan:subscribe', onOpen); window.removeEventListener('keydown', onKey); };
  }, []);

  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;
  const copy = SUBSCRIBE_COPY[kind];
  return (
    <div className="search-overlay sub-overlay" onClick={(e) => { if (e.target.classList.contains('sub-overlay')) setOpen(false); }}>
      <div className="search-panel sub-panel">
        <div className="search-head">
          <span className="gsn-technical">SUBSCRIBE // اشتراک گوسان</span>
          <button className="search-close" onClick={() => setOpen(false)} aria-label="بستن">×</button>
        </div>
        <h2 className="gsn-display sub-title">{copy.title}</h2>
        <p className="sub-lede">{copy.lede}</p>
        {state.phase === 'sent' ? (
          <p className="sub-ok">{state.msg}</p>
        ) : (
          <React.Fragment>
            <form className="sub-form" onSubmit={submit}>
              <input
                ref={inputRef}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="نشانی رایانامه"
              />
              {/* the DS Button takes no disabled prop, and this one must lock
                  while the request is in flight — same classes, plain element */}
              <button type="submit" className="gsn-btn gsn-btn--primary" disabled={state.phase === 'sending'}>
                ثبت نشانی
              </button>
            </form>
            {state.msg ? <p className={`sub-note${state.phase === 'failed' ? ' is-fail' : ''}`}>{state.msg}</p> : null}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

/* the endpoint is read by name elsewhere (reader notes in gosan-components.jsx),
   so it goes on window rather than staying inside this script's scope */
Object.assign(window, {
  ScrollProgress, SearchOverlay, SubscribeOverlay, BackToTop,
  gosanSubscribe, SUB_MSG, GOSAN_SUBSCRIBE_ENDPOINT,
});


/* ============================================================
   یاد فرزندان ایران — the remembrance ribbon
   A fixed Lion-and-Sun ribbon in one bottom corner of the LANDING PAGE only.
   Click: a drawer slides out of the flag, the flag rises level with the name,
   and one person is drawn at random from the roll. Hover while open: another name.
   Draft — entries are unverified and the mark is not on the public site.
   ============================================================ */
const FARZANDAN = [
  {
    "n": "پویا فراگردی",
    "r": "نوازنده و مدرس ویولن — ۴۴ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "پاسداران، تهران"
  },
  {
    "n": "صنم پوربابایی",
    "r": "مدرس و نوازندهٔ ویولن — ۲۶ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "لاهیجان"
  },
  {
    "n": "ستاره رفیعی",
    "r": "موسیقی‌دان — ۱۹ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "آریا هنرمند",
    "r": "رپر و آهنگساز — ۲۵ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "نازی‌آباد، تهران"
  },
  {
    "n": "حسین تهرانچی",
    "r": "نوازندهٔ پیانو",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "نارمک، تهران"
  },
  {
    "n": "امیرحسین ملکشاهی",
    "r": "گیتاریست و خواننده — ۲۸ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "تهران"
  },
  {
    "n": "ملیکا دستیاب",
    "r": "نوازندهٔ تنبور و دانشجوی اقتصاد — ۲۱ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "کرمانشاه"
  },
  {
    "n": "شبنم فردوسی",
    "r": "عروسک‌ساز و طراح گرافیک — ۳۷ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "میدان انقلاب، تهران"
  },
  {
    "n": "شکوفه عبدی",
    "r": "عکاس — ۳۶ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "اراک"
  },
  {
    "n": "جواد گنجی",
    "r": "فیلمساز، دستیار کارگردان و دستیار برنامه‌ریز سینما و تلویزیون — ۳۹ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "فواد صفایی",
    "r": "خواننده و نوازندهٔ پیانو — ۲۴ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "کرج"
  },
  {
    "n": "امیرحسین احمدوند",
    "r": "بازیگر تئاتر، قهرمان موی‌تای و بوکس",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "احمد عباسی",
    "r": "بازیگر و طراح صحنهٔ تئاتر — ۲۷ ساله",
    "d": "۱۸ دی ۱۴۰۴",
    "pl": "تهران"
  },
  {
    "n": "سیما موسوی",
    "r": "فیلمساز و عکاس — ۳۷ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "پارکینگ منزلش، کرج"
  },
  {
    "n": "ندا محمدی",
    "r": "نقاش و هنرمند تجسمی",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "رضا کرمی",
    "r": "نقاش و طراح",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "ابوالفضل یغموری",
    "r": "خوانندهٔ رپ و ترانه‌سرا — ۱۷ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "فردیس، کرج"
  },
  {
    "n": "حمیدرضا مجیدی",
    "r": "هنرجوی بازیگری — ۳۰ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "نارمک، تهران"
  },
  {
    "n": "ستایش سوسن‌آبادی",
    "r": "طراح لباس — ۳۷ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "رشت"
  },
  {
    "n": "ریحانه یوسفی",
    "r": "بازیگر تئاتر — ۲۸ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "تهران"
  },
  {
    "n": "صهبا رشتیان",
    "r": "هنرمند انیمیشن و داور فوتسال — ۲۳ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "اصفهان"
  },
  {
    "n": "سورنا گلگون",
    "r": "نوازندهٔ پیانو — ۱۸ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "یاسر مدیرروستا",
    "r": "مدرس و نوازندهٔ تار و سه‌تار — ۴۲ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "کرج"
  },
  {
    "n": "مهدی سلحشور",
    "r": "مجسمه‌ساز — ۴۸ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "مشهد"
  },
  {
    "n": "زهره شماعی‌زاده",
    "r": "کارگردان، دوبلور و دستیار کارگردان — ۳۳ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "محمد شیرازی (شاهو)",
    "r": "خواننده و نوازنده — ۳۸ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "امیرعلی زارعی",
    "r": "نوازندهٔ هنگ‌درام و مربی موسیقی کودکان — ۳۵ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": "مجیدیه، تهران"
  },
  {
    "n": "مصطفی رابطی",
    "r": "فارغ‌التحصیل سینما و طراح ویدئوآرت",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "یعقوب دلیر",
    "r": "خواننده، نوازندهٔ گیتار و موسیقی‌دان",
    "d": "۲ بهمن ۱۴۰۴",
    "pl": "آستانهٔ اشرفیه، گیلان"
  },
  {
    "n": "داریوش انصاری بختیاروند",
    "r": "خواننده و موزیسین",
    "d": "۱۰ دی ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "مرتضی نعمت‌الهی",
    "r": "مجسمه‌ساز و هنرمند",
    "d": "۲۲ خرداد ۱۴۰۴",
    "pl": ""
  },
  {
    "n": "رضا سمیع‌پور",
    "r": "فیلمساز و دستیار کارگردان — ۵۰ ساله",
    "d": "۱۹ دی ۱۴۰۴",
    "pl": ""
  }
];

function RemembranceRibbon() {
  const [open, setOpen] = React.useState(false);
  const [person, setPerson] = React.useState(FARZANDAN[0]);
  const [swap, setSwap] = React.useState(false);
  const bag = React.useRef([]);
  const wrapRef = React.useRef(null);
  const ribRef = React.useRef(null);
  const cardRef = React.useRef(null);
  const nameRef = React.useRef(null);

  const draw = React.useCallback(() => {
    if (!bag.current.length) {
      const b = FARZANDAN.slice();
      for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
      }
      bag.current = b;
    }
    setPerson(bag.current.pop());
  }, []);

  /* the flag glides up until it stands level with the name */
  React.useLayoutEffect(() => {
    const rib = ribRef.current, card = cardRef.current, name = nameRef.current;
    if (!rib) return;
    if (!open || !card || !name) { rib.style.transform = ''; return; }
    const shift = card.offsetHeight - (name.offsetTop + name.offsetHeight / 2) - rib.offsetHeight / 2;
    rib.style.transform = 'translateY(' + (-Math.max(0, shift)) + 'px)';
  }, [open, person]);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  /* the name changes ONLY on a click of the flag; the drawer closes by
     clicking anywhere else, or with Escape. */
  const onRibbon = (e) => {
    e.stopPropagation();
    if (!open) { draw(); setOpen(true); return; }
    if (swap) return;
    setSwap(true);
    setTimeout(() => { draw(); setSwap(false); }, 300);
  };

  /* Rendered straight into <body> through a portal: nothing in the page tree
     can then create a containing block for it, so `position: fixed` always
     resolves against the viewport. */
  return ReactDOM.createPortal(
    <div className={`fz-wrap${open ? ' is-on' : ''}`} ref={wrapRef} data-fz="remembrance">
      <div className={`fz-card${swap ? ' is-swap' : ''}`} ref={cardRef} aria-hidden={!open}>
        <p className="fz-kicker">فرزند ایران و جان‌فدای میهن</p>
        <p className="fz-name" ref={nameRef}>{person.n}</p>
        <p className="fz-role">{person.r}</p>
        <p className="fz-when"><b>{person.d}</b>{person.pl ? <span>{person.pl}</span> : null}</p>
      </div>
      <button
        className="fz-rib"
        ref={ribRef}
        onClick={onRibbon}
        aria-expanded={open}
        aria-label="یاد فرزندان ایران"
      >
        <img src="assets/memorial/lion-and-sun-soft.svg" alt="" />
      </button>
    </div>,
    document.body
  );
}
