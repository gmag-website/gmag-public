/* Gosan Weblog — bilingual (FA/EN) New Criterion–style home.
   3-up featured strip + dense two-column body + sticky sidebar.
   All article images are fill-later <image-slot> placeholders. */

/* English mirror of GOSAN_POSTS (same slugs, translated) */
const GOSAN_POSTS_EN = {};

const HOME_T = {
  fa: {
    mastName: 'گاهنامهٔ فرهنگی و هنری گوسان',
    issueR: 'سال یکم · شمارهٔ یکم', season: 'پاییز ۲۵۸۵ (۱۴۰۵)',
    tagline: 'گاهنامه‌ای در فرهنگ، هنر و میراث کهن ایران',
    subSmall: 'ده شماره در سال · دسترسی به بایگانی', sub: 'دریافت این شماره',
    issueLine: 'شمارهٔ یکم — پاییز ۲۵۸۵',
    notes: 'یادداشت‌ها و درنگ‌ها', features: 'جستارهای این شماره', featuresMore: 'همهٔ جستارها ←',
    interviews: 'گفتگو', interviewsMore: 'همهٔ گفتگوها ←', poetry: 'شعر',
    memoriam: 'یادمان', memoriamMore: 'همهٔ یادمان‌ها ←', popular: 'پرخواننده‌ترین‌ها',
    coverH: 'انتشار نخستین شمارهٔ گوسان در مهرگان ۲۵۸۵ (۱۴۰۵)', coverBtn: 'دریافت اشتراک گاهنامهٔ گوسان',
    newsK: 'خبرنامه', newsH: 'خبرنامهٔ گوسان', newsP: 'نوشتارهای تازه، خبرها و رویدادهای گوسان', newsBtn: 'پیوستن', newsOk: 'سپاس؛ نشانی شما ثبت شد.',
    edK: 'پیامی از سردبیران', edH: 'در پاسداشتِ فرهنگ و هنرِ ایران با ما همراه شوید.', edP: 'یاریِ شما، روایتگریِ گوسان را پایدار نگاه می‌دارد.', edBtn: 'حمایت می‌کنم',
    slotPh: 'تصویر را اینجا رها کنید',
    latestK: 'تازه‌ترین‌ها',
    manK: 'بیانیهٔ گوسان',
    manLead: 'گوسان ریشه در روزگاران کهن دارد.',
    manBody: [
      'در ایران باستان، گوسان به رامشگران و نغمه‌خوانانی گفته می‌شد که حافظ تاریخ و افسانه‌های کهن بودند. گوسان‌ها روایتگر بودند؛ روایتگر شادی و اندوه مردمان، روایتگر رزم و بزم شاهان، روایتگر پیروزی و شکست قهرمانان. و این همه را به دیبای وزن و قافیه می‌آراستند تا سینه به سینه بازگفته و بازخوانده شود. گوسان‌ها می‌سرودند و می‌نواختند تا تاریخ و افسانه را در جامهٔ زربفتِ چامه و موسیقی از گزند فراموشی در امان بدارند. از پس آنان خدای‌نامه‌نویسانِ ساسانی آمدند و پسان‌تر سرایندگانِ پارسی‌گوی، از توس و بخارا تا تبریز و گنجه، از شیراز و کرمان تا غزنه و دهلی.',
      'امروز نیز ما در گاهنامهٔ «گوسان» گردآمده‌ایم تا روایتگر باشیم؛ روایتگرِ فرهنگ و هنر و میراثِ کهنِ ایران، در روزگاری که فرهنگ و هنر به کنج انزوا گرفتار آمده و ستیز با تاریخ و میراثِ کهنِ ایران فزونی گرفته است؛ چنان‌که حکیم توس در شرح روزگارِ چیرگی ضحاکِ تازی گفته است:',
    ],
    manVerse: { a: 'هنر خوار شد جادویی ارجمند', b: 'نهان راستی، آشکارا گزند' },
    manClose: 'گاهنامهٔ «گوسان» در پی آن است که غبار فراموشی را از صفحهٔ فرهنگ و هنر و میراثِ ایران بزداید؛ گوشه‌های ناشناختهٔ تاریخ و فرهنگ و هنرِ ایران را به ابزارِ پژوهش و نقد بکاود، بشناسد و روایت کند.',
    topics: [['جستار', '#/archive/جستار'], ['گفتگو', '#/archive/گفتگو'], ['یادمان', '#/archive/یادمان'], ['یادداشت آزاد', '#/archive/یادداشت آزاد'], ['شیوه‌نامه', '#/shivenameh'], ['اندیشکده', '#/thinktank']],
    verses: [
      { hemistichs: ['هنر خوار شد جادویی ارجمند', 'نهان راستی، آشکارا گزند'], poet: 'فردوسی — شاهنامه' },
      { hemistichs: ['بسی رنج بردم در این سال سی', 'عجم زنده کردم بدین پارسی'], poet: 'فردوسی — شاهنامه' },
    ],
  },
  en: {
    mastName: 'Gōsān — a magazine of culture and art',
    issueR: 'Vol. I · No. 1', season: 'Summer 2585',
    tagline: 'A review of the arts, culture & heritage of Iran',
    subSmall: 'Ten issues a year · archive access', sub: 'Get this issue',
    issueLine: 'No. 1 — Summer 2585',
    notes: 'Notes & Comments', features: 'Features', featuresMore: 'All essays →',
    interviews: 'Interviews', interviewsMore: 'All interviews →', poetry: 'Poetry',
    memoriam: 'Memoriam', memoriamMore: 'All memorials →', popular: 'Most Popular',
    coverH: 'The first issue of Gōsān comes out at Mehregān 2585', coverBtn: 'Subscribe to Gōsān',
    newsK: 'NEWSLETTER', newsH: 'The Gōsān Newsletter', newsP: 'New essays, news and what is happening at Gōsān — straight to your inbox.', newsBtn: 'Join', newsOk: 'Thank you — your address is registered.',
    edK: 'A MESSAGE FROM THE EDITORS', edH: 'Join us in preserving the culture & art of Iran.', edP: 'Your support keeps Gōsān’s storytelling alive.', edBtn: 'Support us',
    slotPh: 'Drop an image',
    latestK: 'Latest',
    manK: 'The Gōsān Manifesto',
    manLead: 'Gōsān is the name of those ancient minstrels and narrators who kept the history and legend of this land safe from oblivion, in the brocade of verse and song.',
    manBody: [
      'We took this name to carry the same charge: to tell the story of Iran’s culture, art, and heritage as it deserves to be told — not with a blind nostalgia for the past, but with a clear eye on the present.',
      'Gōsān is not a museum, nor a mourner of bygone days. It is a living review that bridges tradition and now — from the miniature to the new poetry, from the musical radif to the architecture of old alleys.',
      'Our belief is simple: a culture that is not narrated is forgotten. And we have come to narrate it.',
    ],
    topics: [['Essays', '#/archive/جستار'], ['Interviews', '#/archive/گفتگو'], ['Memoriam', '#/archive/یادمان'], ['Notes', '#/archive/یادداشت آزاد'], ['Style', '#/shivenameh'], ['Think Tank', '#/thinktank']],
    verses: [
      { hemistichs: ['Art was scorned, and sorcery prized,', 'truth lay hidden, and harm ran rife.'], poet: 'Ferdowsi — Shāhnāmeh' },
      { hemistichs: ['Much have I toiled across these thirty years —', 'I revived the Persians with this Persian tongue.'], poet: 'Ferdowsi — Shāhnāmeh' },
    ],
  },
};

function postFor(slug, lang) {
  if (lang === 'en') return { slug, ...GOSAN_POSTS_EN[slug] };
  return GOSAN_POSTS.find((p) => p.slug === slug);
}

/* real cover photos for articles that ship with imagery; the rest fall back
   to fillable <image-slot> placeholders. */
/* Home-page cover photos use a black-and-white halftone treatment (separate
   files); the same photos appear inside the articles in their original form. */
const GOSAN_COVERS = {
  "manichaean-music-terms": "uploads/covers/manichaean-music-terms.jpg",
  "oil-to-narrative": "uploads/covers/oil-to-narrative.jpg",
  "interview-farnaz-modarresifar": "uploads/covers/interview-farnaz-modarresifar.jpg",
  "music-totalitarian-regimes": "uploads/covers/music-totalitarian-regimes.jpg",
  "beyzaie-myth-symbolic-action": "uploads/covers/beyzaie-myth-symbolic-action.jpg",
  "between-two-defeats": "uploads/covers/between-two-defeats.jpg",
  "between-two-defeats-2": "uploads/covers/between-two-defeats-2.jpg",
  "between-two-defeats-3": "uploads/covers/between-two-defeats-3.jpg",
  "azarkeyvani-creation-myth": "uploads/covers/azarkeyvani-creation-myth.jpg",
  "note-for-gosan": "uploads/covers/note-for-gosan.jpg",
  "crossroads-ahead": "uploads/covers/crossroads-ahead.jpg"
};

const GOSAN_COVER_ALTS = {
  "manichaean-music-terms": "برگ مصور مانوی-اویغوری، تورفان (MIK III 4959) — موزهٔ هنر آسیایی برلین، CC0",
  "oil-to-narrative": "چاه نفت در ایران، حدود دههٔ ۱۹۱۰ — عکس A. P. Godber",
  "interview-farnaz-modarresifar": "فرناز مدرسی‌فر در ویلای مدیچی، ۲۰۲۵ — عکس: فرید مدرسی‌فر",
  "music-totalitarian-regimes": "ویلهلم فورتونگلر در کنسرت کارخانهٔ آ.ا.گ، برلین — Bundesarchiv Bild 183-L0607-504, CC BY-SA 3.0 DE",
  "beyzaie-myth-symbolic-action": "پوستر چریکه تارا (۱۳۵۸)، ساختهٔ بهرام بیضایی",
  "between-two-defeats": "خیابان چراغ‌گاز، تهران، حدود ۱۲۶۰ خورشیدی — عکس آنتوان سوریوگین",
  "between-two-defeats-2": "برش عرضی تالار اپرای پاریس (پاله گارنیه) — از نقشه‌های شارل گارنیه، ۱۸۸۰؛ مالکیت عمومی",
  "between-two-defeats-3": "گراند هتل تهران در لاله‌زار، حدود دههٔ ۱۹۰۰ میلادی — تالاری که کنسرت قمرالملوک وزیری به سود ساخت آرامگاه فردوسی در آن برگزار شد؛ مالکیت عمومی",
  "azarkeyvani-creation-myth": "برگ نخست دست‌نویس وندیداد — CC0",
  "note-for-gosan": "سرلوحهٔ شمارهٔ نخست مجلهٔ کاوه، برلین، ۱۹۱۶",
  "crossroads-ahead": "دستهٔ موسیقی در اصفهان، دورهٔ قاجار — عکس آنتوان سوریوگین، موزهٔ ریتبرگ"
};

/* split a two-part title at «:» or «؛» and drop the second part to a new line.
   Some titles have no separator but still need a fixed break point. */
const TITLE_BREAKS = {};
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
  const br = TITLE_BREAKS[base];
  if (br) return <React.Fragment>{br.map((l, i) => <React.Fragment key={i}>{i > 0 ? <br /> : null}{l}</React.Fragment>)}{partEl}</React.Fragment>;
  const [main, sub] = splitTitle(base);
  return sub ? <React.Fragment>{smartTitleBreaks(main)}<span className="title-sub">{smartTitleBreaks(sub)}</span>{partEl}</React.Fragment> : <React.Fragment>{smartTitleBreaks(base)}{partEl}</React.Fragment>;
}


function CoverCredit({ slug }) {
  const text = GOSAN_COVER_ALTS[slug];
  if (!text) return null;
  return (
    <span className="cover-credit">
      <button type="button" className="cover-credit-btn" aria-label={'اعتبار تصویر: ' + text}>i</button>
      <span className="cover-credit-tip" role="tooltip">{text}</span>
    </span>
  );
}

function Slot({ slug, lang, ph }) {
  const cover = GOSAN_COVERS[slug];
  return (
    <div className="nc-img-wrap">
      {cover
        ? <React.Fragment><img className="nc-cover-img" src={cover} alt={GOSAN_COVER_ALTS[slug] || ''} /><CoverCredit slug={slug} /></React.Fragment>
        : React.createElement('image-slot', { id: `slot-${lang}-${slug}`, placeholder: ph, shape: 'rect' })}
    </div>
  );
}

function ByLine({ post }) {
  return <p className="nc-by"><span className="nc-by-name">{post.author}</span></p>;
}

function HomePage({ lang = 'fa', onToggleLang }) {
  const en = lang === 'en';
  const T = HOME_T[lang] || HOME_T.fa;
  const P = (slug) => postFor(slug, lang);

  /* elegant scroll-reveals — sections, manifesto, sidebar, dividers.
     No wrapper divs (keeps grid/flex layouts intact); fully gated on motion prefs.
     IO can be inert inside embedded frames, so we also re-check on scroll/resize
     + a few settle timers (same proven pattern as the Reveal component). */
  React.useEffect(() => {
    const sel = '.nc-home .nc-section, .nc-home .nc-manifesto, .nc-home .nc-aside-block, .nc-home .nc-issue-divider, .nc-home .nc-feat';
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let els = Array.from(document.querySelectorAll(sel));
    if (reduce || document.body.dataset.motion === 'off') {
      els.forEach((e) => e.classList.add('is-in'));
      return;
    }
    const reveal = (e) => { e.classList.add('is-in'); };
    const check = () => {
      const vh = window.innerHeight;
      els = els.filter((e) => {
        const r = e.getBoundingClientRect();
        if (r.top < vh * 0.92) { reveal(e); return false; }
        return true;
      });
      if (!els.length) cleanup();
    };
    let io = null;
    try {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); els = els.filter((x) => x !== en.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      els.forEach((e) => io.observe(e));
    } catch (err) { /* IO unavailable */ }
    const timers = [120, 450, 1000, 1800, 2800].map((t) => setTimeout(check, t));
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    window.addEventListener('load', check);
    function cleanup() {
      if (io) io.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      window.removeEventListener('load', check);
    }
    check();
    return cleanup;
  }, []);

  /* scroll to a section when arriving from an article's category link */
  React.useEffect(() => {
    let target;
    try { target = sessionStorage.getItem('gosan-scroll'); } catch (e) {}
    if (!target) return;
    try { sessionStorage.removeItem('gosan-scroll'); } catch (e) {}
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(target);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (tries++ < 12) {
        setTimeout(tryScroll, 130);
      }
    };
    setTimeout(tryScroll, 150);
  }, []);

  /* The wall carries SEVEN essays, always — the seven the editor-in-chief picks,
     in this order. Add or drop a slug here and the wall follows; the slice is the
     guarantee that an eighth never quietly appears. */
  const WALL_SEVEN = [
    'between-two-defeats', 'azarkeyvani-creation-myth', 'music-totalitarian-regimes', 'crossroads-ahead',
    'beyzaie-myth-symbolic-action',
  ];
  const latest = WALL_SEVEN.map(P).filter(Boolean).slice(0, 7);
  /* پیشخوان — every essay in the issue, so a new one needs no second decision to
     be seen: the pieces that are not on the wall stand at the front, the seven
     follow. Three are on the counter; the arrow glides the rest into view. */
  const onWall = new Set(WALL_SEVEN);
  /* Slugs the editor-in-chief wants opening the پیشخوان, in this order. Anything
     not pinned keeps the old behaviour: off-wall essays first, then the seven. */
  const FEATURED_LEAD = [];
  const rank = (s) => (FEATURED_LEAD.indexOf(s) !== -1 ? FEATURED_LEAD.indexOf(s) - FEATURED_LEAD.length : (onWall.has(s) ? 1 : 0));
  const featured = GOSAN_POSTS
    .map((p) => p.slug)
    .sort((a, b) => rank(a) - rank(b))
    .map(P)
    .filter(Boolean);
  const notes = [].map(P).filter(Boolean);
  const features = ['azarkeyvani-creation-myth', 'manichaean-music-terms', 'music-totalitarian-regimes'].map(P).filter(Boolean);
  const viewpoints = ['note-for-gosan', 'crossroads-ahead'].map(P).filter(Boolean);
  const interviews = ['interview-farnaz-modarresifar'].map(P).filter(Boolean);
  const reviews = [].map(P).filter(Boolean);
  const policyDossier = ['between-two-defeats', 'between-two-defeats-2', 'between-two-defeats-3'].map(P).filter(Boolean);
  const economyDossier = ['oil-to-narrative'].map(P).filter(Boolean);
  const reflections = ['beyzaie-myth-symbolic-action'].map(P).filter(Boolean);
  const popular = ['music-totalitarian-regimes', 'interview-farnaz-modarresifar', 'note-for-gosan', 'between-two-defeats', 'crossroads-ahead'].map(P).filter(Boolean);

  /* the magazine's section taxonomy. populated categories reuse the sample
     articles; the rest are fillable placeholder structures (image-slots). */
  const categories = [
    { key: 'dossier-policy', label: 'پروندهٔ سیاست‌گذاری فرهنگی', posts: policyDossier, layout: 'grid' },
    { key: 'essay', label: 'جستار', posts: features, layout: 'grid' },
    { key: 'dossier-economy', label: 'پروندهٔ اقتصاد خلاق', posts: economyDossier, layout: 'grid' },
    { key: 'viewpoint', label: 'دیدگاه', posts: viewpoints, layout: 'grid' },
    { key: 'memoriam', label: 'یادمان', posts: reflections, layout: 'rows' },
    { key: 'interview', label: 'گفتگو', posts: interviews, layout: 'rows' },
    { key: 'review', label: 'نقد و بررسی', posts: reviews, layout: 'grid' },
  ];

  return (
    <main className="nc-home" data-screen-label={en ? 'Home' : 'خانه'}>

      {/* masthead */}
      <div className="nc-masthead">
        <div className="nc-masthead-grid">
          <div className="nc-mast-side is-start">
            <a href="#/archive"><img className="nc-mast-cover" src="assets/issue-cover.jpg" alt={en ? 'Issue No. 1 cover' : 'جلد شمارهٔ یکم'} /></a>
            <div className="nc-mast-meta">
              <span className="nc-mast-name">{T.mastName}</span>
              <span className="nc-issueline">{T.issueR} · {T.season}</span>
              <button
                type="button"
                className="nc-mast-sub"
                onClick={() => window.dispatchEvent(new CustomEvent('gosan:subscribe', { detail: 'print' }))}
              >{T.sub}</button>
            </div>
          </div>
          <div className="nc-mast-center">
            <a href="#/" className="nc-logo" role="img" aria-label="گوسان"></a>
          </div>
          <div className="nc-mast-side is-end"></div>
        </div>
      </div>

      {/* floating nav bar */}
      <NcFloatingNav en={en} />

      {/* latest-articles wall */}
      <NcLatestWall slides={latest} lang={lang} T={T} />

      {/* featured 3-up strip */}
      <div className="nc-feat-head">
        <div className="nc-sectionhead">
          <span className="nc-sh-label">پیشخوان</span>
          <span className="nc-sh-mark">◆</span>
        </div>
      </div>
      <NcFeatStrip items={featured} lang={lang} T={T} />

      {/* body */}
      <div className="nc-body">
        <div className="nc-main">
          {categories.map((c) => <NcCatSection key={c.key} cat={c} lang={lang} T={T} />)}
        </div>

        {/* sidebar */}
        <aside className="nc-aside">
          <div className="nc-aside-block">
            <h4 className="nc-aside-head"><span className="nc-sh-mark">◆</span> {T.popular}</h4>
            <ol className="nc-popular">
              {popular.map((p) => (
                <li key={p.slug}>
                  <a href={`#/article/${p.slug}`}>{p.title}<span className="nc-pop-by">{p.author}</span></a>
                </li>
              ))}
            </ol>
          </div>

          <div className="nc-aside-block nc-cover-card">
            <img src="assets/issue-cover.jpg" alt={en ? 'Gōsān, Issue No. 1' : 'جلد شمارهٔ یکم گوسان'} />
            <h4>{T.coverH}</h4>
            <Button onClick={() => window.dispatchEvent(new CustomEvent('gosan:subscribe', { detail: 'issues' }))}>{T.coverBtn}</Button>
          </div>

          <NcNewsletter T={T} />

          <div className="nc-aside-block nc-editors">
            <span className="nc-kicker">{T.edK}</span>
            <h4>{T.edH}</h4>
            <p>{T.edP}</p>
            <Button variant="gold" size="sm" href="#/support">{T.edBtn}</Button>
          </div>
        </aside>
      </div>

      {/* گاه‌نوشت — website-only writing, outside the printed issue */}
      <section className="nc-blog-band"><div className="wrap">
        <h2 className="gsn-display nc-blog-head">گاه‌نوشت</h2>
        <p className="nc-blog-lede">تأملات روز</p>
        <p className="nc-blog-desc">آنچه میان دو شماره می‌گذرد.</p>
        {GOSAN_BLOG.length === 0 ? (
          <p className="nc-blog-empty">هنوز گاه‌نوشتی منتشر نشده است.</p>
        ) : (
          <div className="nc-blog-grid">
            {GOSAN_BLOG.slice(0, 3).map((b) => (
              <article key={b.slug} className="nc-blog-card">
                <span className="nc-blog-date">{b.date}</span>
                <h3><a href={`#/blog/${b.slug}`}>{b.title}</a></h3>
                {b.excerpt ? <p>{b.excerpt}</p> : null}
              </article>
            ))}
          </div>
        )}
        <p style={{ textAlign: 'center', marginTop: '1.6rem' }}>
          <a className="blog-more" href="#/blog">همهٔ گاه‌نوشت‌ها</a>
        </p>
        </div>
      </section>

    </main>
  );
}

function NcFloatingNav({ en }) {
  const [navStuck, setNavStuck] = React.useState(false);
  /* the گوسان calligraphy docks into the bar once the manifesto logo has
     scrolled up past it, and leaves again when scrolling back up to it */
  const [logoDocked, setLogoDocked] = React.useState(false);
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      setNavStuck(window.scrollY > 24);
      const man = document.querySelector('.nc-man-logo');
      const nav = navRef.current;
      setLogoDocked(!!(man && nav) && man.getBoundingClientRect().bottom <= nav.getBoundingClientRect().bottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav ref={navRef} className={`nc-topics${navStuck ? ' is-stuck' : ''}${logoDocked ? ' has-logo' : ''}`}>
      <a href="#/" className={`nc-topics-logo${logoDocked ? ' is-docked' : ''}`} aria-hidden={!logoDocked} tabIndex={logoDocked ? 0 : -1}>
        <img src="assets/logo-gosan.png" alt="گوسان" />
      </a>
      <div className="nc-topics-main">
        {NAV_ITEMS.map((it) => (
          <React.Fragment key={it.href}>
            <a
              href={it.href}
              className={`nc-topic-link${it.href === '#/' ? ' is-active' : ''}`}
            >{en ? it.en : it.fa}</a>
            {it.href === '#/' ? (
              <NavIssueMenu en={en} as="div" isActive={(href) => (window.location.hash || '#/') === href} />
            ) : null}
          </React.Fragment>
        ))}
        <span className="nc-topics-sep"></span>
        <a href="#/thinktank" className="nav-think">{en ? 'The Gōsān Think Tank' : 'اندیشکدهٔ فرهنگ و هنر گوسان'}</a>
      </div>
      <div className="nc-topics-controls">
        <a className="nc-support-btn" href="#/support">یاران گوسان</a>
        <button
          className="nav-search"
          onClick={() => window.dispatchEvent(new Event('gosan:search'))}
          aria-label={en ? 'Search' : 'جستجو'}
          title={en ? 'Search ( / )' : 'جستجو ( / )'}
        ><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="20" y1="20" x2="16.05" y2="16.05"></line></svg></button>
      </div>
      {/* below 760px .nc-topics-main and -controls are retired and this takes over */}
      <MobileNav en={en} isActive={(href) => (window.location.hash || '#/') === href} />
    </nav>
  );
}

function NcLatestWall({ slides, lang, T }) {
  /* Seven plates side by side; the open one carries the essay. The wall turns
     its own page every five seconds and stops the moment a reader is on it —
     the same courtesy the carousel's pause-on-hover gave before it. */
  const [open, setOpen] = React.useState(0);
  const [held, setHeld] = React.useState(false);
  const rowRef = React.useRef(null);
  React.useEffect(() => {
    if (held) return;
    if (document.body.dataset.motion === 'off') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!slides.length) return;
    const id = setInterval(() => setOpen((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [held, slides.length]);
  React.useEffect(() => {
    const onVis = () => setHeld(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);
  /* narrow screens turn the wall into a swipeable rail: keep the open plate in view */
  React.useEffect(() => {
    const row = rowRef.current;
    if (!row || row.scrollWidth <= row.clientWidth + 4) return;
    const plate = row.children[open];
    if (plate) plate.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' });
  }, [open]);
  if (!slides.length) return null;   /* nothing published in this rail yet */
  return (
    <section
      className="nc-wall"
      data-screen-label={lang === 'en' ? 'Latest wall' : T.latestK}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="nc-wall-row" ref={rowRef}>
        {slides.map((p, i) => (
          <div
            key={p.slug}
            className={`nc-plate${i === open ? ' is-open' : ''}`}
            onMouseEnter={() => setOpen(i)}
          >
            <a
              className="nc-plate-face"
              href={`#/article/${p.slug}`}
              aria-label={p.title}
              onFocus={() => setOpen(i)}
            >
              {GOSAN_COVERS[p.slug]
                ? <img className="nc-cover-img" src={GOSAN_COVERS[p.slug]} alt={GOSAN_COVER_ALTS[p.slug] || ''} />
                : React.createElement('image-slot', { id: `slot-wall-${lang}-${p.slug}`, placeholder: T.slotPh, shape: 'rect' })}
              <span className="nc-plate-copy" aria-hidden={i !== open}>
                <span className="nc-plate-title"><TitleLines text={p.title} /></span>
                <span className="nc-plate-by">{p.author}</span>
                <span className="nc-plate-dek">{p.excerpt}</span>
              </span>
            </a>
            <CoverCredit slug={p.slug} />
          </div>
        ))}
      </div>
    </section>
  );
}

function NcFeatStrip({ items, lang, T }) {
  /* three essays stand on the counter; the rest are one hover away. Resting on
     the arrow glides the strip open — the pointer asks, nothing jumps. */
  const railRef = React.useRef(null);
  const glide = React.useRef(0);
  const [edge, setEdge] = React.useState({ start: true, end: true });
  React.useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const read = () => {
      const max = rail.scrollWidth - rail.clientWidth;
      const pos = Math.abs(rail.scrollLeft);
      setEdge({ start: pos <= 2, end: max <= 2 || pos >= max - 2 });
    };
    read();
    const id = setTimeout(read, 400);   /* covers must land before the ends are known */
    rail.addEventListener('scroll', read, { passive: true });
    window.addEventListener('resize', read);
    return () => {
      clearTimeout(id);
      rail.removeEventListener('scroll', read);
      window.removeEventListener('resize', read);
    };
  }, [items.length]);
  /* RTL: the later essays lie to the left, where scrollLeft runs negative */
  const step = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.firstElementChild;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    const w = card ? card.getBoundingClientRect().width + gap : 340;
    rail.scrollBy({ left: dir * w, behavior: 'smooth' });
  };
  const hold = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return step(dir);
    if (document.body.dataset.motion === 'off') return step(dir);
    cancelAnimationFrame(glide.current);
    rail.classList.add('is-gliding');
    const travel = rail.scrollWidth - rail.clientWidth;
    const rtl = rail.scrollLeft <= 0;              /* RTL runs 0 → negative */
    const min = rtl ? -travel : 0;
    const max = rtl ? 0 : travel;
    let pos = rail.scrollLeft;                     /* float accumulator: the box itself rounds */
    const run = () => {
      pos = Math.min(max, Math.max(min, pos + dir * 2.4));
      rail.scrollLeft = pos;
      if (pos > min && pos < max) glide.current = requestAnimationFrame(run);
      else rail.classList.remove('is-gliding');
    };
    glide.current = requestAnimationFrame(run);
  };
  const release = () => {
    cancelAnimationFrame(glide.current);
    const rail = railRef.current;
    if (rail) rail.classList.remove('is-gliding');   /* snap back on, strip settles on a card */
  };
  const arrow = (dir, off, label) => (
    <button
      type="button"
      className={`nc-feat-arrow ${dir < 0 ? 'is-next' : 'is-prev'}${off ? ' is-off' : ''}`}
      aria-label={label}
      onMouseEnter={() => hold(dir)}
      onMouseLeave={release}
      onFocus={() => hold(dir)}
      onBlur={release}
      onClick={() => { release(); step(dir); }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points={dir < 0 ? '15 5 8 12 15 19' : '9 5 16 12 9 19'}></polyline>
      </svg>
    </button>
  );
  return (
    <div className="nc-feat-wrap">
      <section className="nc-feat" ref={railRef} data-screen-label={lang === 'en' ? 'Featured' : 'پیشخوان'}>
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 110}>
            <article>
              <Slot slug={p.slug} lang={lang} ph={T.slotPh} />
              <span className="nc-kicker">{p.tag}</span>
              <h2 className="nc-title" style={{ marginTop: '0.5rem' }}><a href={`#/article/${p.slug}`}><TitleLines text={p.title} /></a></h2>
              <ByLine post={p} />
              <p className="nc-dek">{p.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </section>
      {arrow(-1, edge.end, lang === 'en' ? 'More features' : 'نوشتارهای بیشتر')}
      {arrow(1, edge.start, lang === 'en' ? 'Previous features' : 'نوشتارهای پیشین')}
    </div>
  );
}

/* The manifesto moved to the About page on 2026-08-31 (AboutManifesto in
   page-misc.jsx). The bilingual copy stays in T.man* above, unused for now,
   so a future bilingual About needs no retranslation. */

function NcCatSection({ cat, lang, T }) {
  const { key, label, posts, layout } = cat;
  return (
    <section id={`cat-${key}`} className="nc-section" data-screen-label={label}>
      <div className="nc-sectionhead">
        <span className="nc-sh-label">{label}</span>
        <span className="nc-sh-mark">◆</span>
        <a className="nc-sh-more" href={`#/archive/${encodeURIComponent(label)}`}>همه ←</a>
      </div>

      {posts.length ? (
        layout === 'rows' ? (
          <div className="nc-rows">
            {posts.map((p) => (
              <article key={p.slug} className="nc-row">
                <Slot slug={p.slug} lang={lang} ph={T.slotPh} />
                <div>
                  <span className="nc-kicker">{p.tag}</span>
                  <h3 className="nc-title" style={{ marginTop: '0.35rem' }}><a href={`#/article/${p.slug}`}><TitleLines text={p.title} /></a></h3>
                  <ByLine post={p} />
                  <p className="nc-dek">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="nc-grid2">
            {posts.map((p) => (
              <article key={p.slug}>
                <Slot slug={p.slug} lang={lang} ph={T.slotPh} />
                <span className="nc-kicker">{p.tag}</span>
                <h3 className="nc-title" style={{ marginTop: '0.4rem' }}><a href={`#/article/${p.slug}`}><TitleLines text={p.title} /></a></h3>
                <ByLine post={p} />
                <p className="nc-dek">{p.excerpt}</p>
              </article>
            ))}
          </div>
        )
      ) : (
        <div className="nc-cat-invite">
          <p className="nc-cat-invite-lead">این بخش هنوز در آغاز راه است و چشم‌به‌راه نخستین نوشته‌هاست.</p>
          <p className="nc-cat-invite-body">اگر در زمینهٔ «{label}» پژوهش، نقد یا دیدگاهی دارید، گوسان از دریافت مقاله یا پیشنهاد شما برای همکاری استقبال می‌کند.</p>
          <a className="nc-cat-invite-cta" href="#/contact">ارسال مقاله یا پیشنهاد ←</a>
        </div>
      )}
    </section>
  );
}

function NcNewsletter({ T }) {
  /* same path as the two subscription controls — see tools/subscribe-worker */
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState({ phase: 'idle', msg: '' });
  const submit = async (e) => {
    e.preventDefault();
    if (state.phase === 'sending') return;
    setState({ phase: 'sending', msg: SUB_MSG.pending });
    const r = await gosanSubscribe(email.trim(), 'newsletter');
    setState({ phase: r.ok ? 'sent' : 'failed', msg: r.msg });
  };
  return (
    <div className="nc-aside-block nc-news-mini">
      <span className="nc-kicker">{T.newsK}</span>
      <h4>{T.newsH}</h4>
      <p>{T.newsP}</p>
      {state.phase === 'sent' ? (
        <p style={{ color: 'var(--accent-strong)', fontWeight: 500, fontSize: '0.85rem', margin: 0 }}>{state.msg}</p>
      ) : (
        <React.Fragment>
          <form onSubmit={submit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="email"
            />
            <button type="submit" className="gsn-btn gsn-btn--gold gsn-btn--sm" disabled={state.phase === 'sending'}>
              {T.newsBtn}
            </button>
          </form>
          {state.msg ? <p className={`sub-note${state.phase === 'failed' ? ' is-fail' : ''}`}>{state.msg}</p> : null}
        </React.Fragment>
      )}
    </div>
  );
}

Object.assign(window, { HomePage, GOSAN_COVERS, GOSAN_COVER_ALTS });
