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
    lede: 'نشانی ایمیل خود را بنویسید تا با اشتراک گوسان، همهٔ شماره‌های آینده به‌محض انتشار دیجیتال به دست شما برسد.',
  },
  /* the masthead, beside the cover of issue one — that issue itself */
  print: {
    title: 'دریافت شمارهٔ یکم',
    lede: 'نشانی ایمیل خود را بنویسید تا نخستین شماره به‌محض انتشار دیجیتال در مهرگان ۲۵۸۵ (۱۴۰۵) برای شما فرستاده شود و از چگونگی دریافت نسخهٔ چاپی آگاه شوید.',
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
