/* Gosan Weblog — site chrome: header (bilingual + EN/FA switch) + footer */

const NAV_ITEMS = [
  { fa: 'خانه', en: 'Home', href: '#/' },
  { fa: 'گاه‌نوشت', en: 'Journal', href: '#/blog' },
  { fa: 'بایگانی', en: 'Archive', href: '#/archive' },
  { fa: 'دربارهٔ گوسان · تماس', en: 'About · Contact', href: '#/about' },
  /* شیوه‌نامه is hidden from the nav for now (editor-in-chief, 24 Aug 2026).
     The page, its route and its title are all still in place — uncomment this
     single line to bring it back. Direct link: #/shivenameh */
  // { fa: 'شیوه‌نامه', en: 'Style', href: '#/shivenameh' },
];

/* «شمارهٔ یکم» — the issue's sections, opened on hover (and on click for touch).
   پرونده‌ها carries a nested list that opens beside it. */
const ISSUE_MENU = {
  fa: 'شمارهٔ یکم', en: 'Issue No. 1', href: '#/archive',
  items: [
    { fa: 'جستار', en: 'Essays', href: '#/archive/جستار' },
    { fa: 'پرونده‌ها', en: 'Dossiers', children: [
      { fa: 'پروندهٔ سیاست‌گذاری فرهنگی', en: 'Cultural policy', href: '#/archive/پروندهٔ سیاست‌گذاری فرهنگی' },
      { fa: 'پروندهٔ اقتصاد خلاق', en: 'Creative economy', href: '#/archive/پروندهٔ اقتصاد خلاق' },
      { fa: 'پروندهٔ آموزش', en: 'Education', href: '#/archive/پروندهٔ آموزش' },
    ] },
    { fa: 'دیدگاه', en: 'Viewpoint', href: '#/archive/دیدگاه' },
    { fa: 'یادمان', en: 'Memoriam', href: '#/archive/یادمان' },
    { fa: 'گفتگو', en: 'Interviews', href: '#/archive/گفتگو' },
  ],
};

function NavIssueMenu({ en, isActive, as: Tag = 'li' }) {
  const [open, setOpen] = React.useState(false);
  const [subOpen, setSubOpen] = React.useState(false);
  const close = () => { setOpen(false); setSubOpen(false); };
  const anyActive = ISSUE_MENU.items.some(
    (it) => (it.href && isActive(it.href)) || (it.children || []).some((c) => isActive(c.href))
  );
  return (
    <Tag
      className={`nav-issue-li${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <a
        href={ISSUE_MENU.href}
        className={`nav-issue${anyActive ? ' is-active' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => { if (!open) { e.preventDefault(); setOpen(true); } }}
        style={{ fontWeight: anyActive ? 700 : 400, opacity: anyActive ? 1 : 0.92 }}
      >{en ? ISSUE_MENU.en : ISSUE_MENU.fa}</a>
      <ul className="nav-menu">
        {ISSUE_MENU.items.map((it) => (
          it.children ? (
            <li
              key={it.fa}
              className={`nav-has-sub${subOpen ? ' is-open' : ''}`}
              onMouseEnter={() => setSubOpen(true)}
              onMouseLeave={() => setSubOpen(false)}
            >
              <span
                className="nav-menu-link nav-sub-toggle"
                role="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={subOpen}
                onClick={() => setSubOpen((v) => !v)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSubOpen((v) => !v); } }}
              >{en ? it.en : it.fa}</span>
              <ul className="nav-submenu">
                {it.children.map((c) => (
                  <li key={c.href}>
                    <a className={`nav-menu-link${isActive(c.href) ? ' is-active' : ''}`} href={c.href} onClick={close}>
                      {en ? c.en : c.fa}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={it.href}>
              <a className={`nav-menu-link${isActive(it.href) ? ' is-active' : ''}`} href={it.href} onClick={close}>
                {en ? it.en : it.fa}
              </a>
            </li>
          )
        ))}
      </ul>
    </Tag>
  );
}

function SiteHeader({ active, lang = 'fa', onToggleLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [hash, setHash] = React.useState(() => window.location.hash || '#/');
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onHash = () => setHash(window.location.hash || '#/');
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', onHash);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('hashchange', onHash); };
  }, []);
  const en = lang === 'en';
  const isActive = (href) => href === '#/' ? (hash === '' || hash === '#/' || hash === '#') : hash.startsWith(href);
  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap">
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <button
            className="nav-search"
            onClick={() => window.dispatchEvent(new Event('gosan:search'))}
            aria-label="جستجو"
            title="جستجو ( / )"
          ><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="20" y1="20" x2="16.05" y2="16.05"></line></svg></button>
          <ul>
            {NAV_ITEMS.map((it) => (
              <React.Fragment key={it.href}>
                <li>
                  <a
                    href={it.href}
                    className={isActive(it.href) ? 'is-active' : ''}
                    style={{ fontWeight: isActive(it.href) ? 700 : 400, opacity: isActive(it.href) ? 1 : 0.92 }}
                  >{en ? it.en : it.fa}</a>
                </li>
                {it.href === '#/' ? <NavIssueMenu en={en} isActive={isActive} /> : null}
              </React.Fragment>
            ))}
            <li className="nav-think-li">
              <a
                href="#/thinktank"
                className={`nav-think${isActive('#/thinktank') ? ' is-active' : ''}`}
              >{en ? 'The Gōsān Think Tank' : 'اندیشکدهٔ فرهنگ و هنر گوسان'}</a>
            </li>
          </ul>
        </nav>
        <a href="#/" style={{ flexShrink: 0 }}>
          <img src="assets/logo-gosan.png" alt="گوسان" className="header-logo" style={{ height: '40px', display: 'block' }} />
        </a>
      </div>
    </header>
  );
}

function SiteFooter({ route }) {
  if (route === 'thinktank') return null;
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--text-on-dark)' }}>
      <div className="wrap foot-grid" style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
        <div>
          <img src="assets/logo-gosan.png" alt="گوسان" style={{ height: '54px', marginBottom: '0.8rem' }} />
          <p style={{ fontSize: '0.85rem', lineHeight: 2.1, color: 'var(--grey-faint)', margin: 0 }}>
            گاهنامهٔ «گوسان» در پی آن است که غبار فراموشی را از صفحهٔ فرهنگ و هنر و میراث ایران بزداید
            و گوشه‌های ناشناختهٔ تاریخ و فرهنگ و هنر ایران را به ابزار پژوهش و نقد بکاود، بشناسد و روایت کند.
          </p>
        </div>
        <div>
          <h5 style={{ color: 'var(--white)', fontSize: '1rem', margin: '0 0 1rem', fontWeight: 700 }}>بخش‌ها</h5>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.55rem', fontSize: '0.88rem' }}>
            <li><a href="#/archive/جستار">جستار</a></li>
            <li><a href="#/archive/گفتگو">گفتگو</a></li>
            <li><a href="#/archive/یادمان">یادمان</a></li>
            <li><a href="#/archive">بایگانی شماره‌ها</a></li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: 'var(--white)', fontSize: '1rem', margin: '0 0 1rem', fontWeight: 700 }}>پیوندها</h5>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.55rem', fontSize: '0.88rem' }}>
            <li><a href="#/about">دربارهٔ گوسان</a></li>
            <li><a href="#/thinktank">اندیشکدهٔ فرهنگ و هنر</a></li>
            <li><a href="#/contact">تماس</a></li>
            <li><a href="#/support">حمایت از گوسان</a></li>
            <li><a href="#/impressum">اطلاعات ناشر · Impressum</a></li>
            <li><a href="#/datenschutz">حفاظت از داده‌ها · Datenschutz</a></li>
            <li><a href="mailto:info@gosan.org" style={{ direction: 'ltr', display: 'inline-block', borderBottom: '1px solid var(--gold)', color: 'var(--white)' }}>info@gosan.org</a></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--line-dark)', textAlign: 'center', padding: '1.2rem', fontSize: '0.78rem', color: '#9A9A9A' }}>
        گاهنامهٔ گوسان <span style={{ color: 'var(--gold)' }}>●</span> سال یکم، شمارهٔ یکم، پاییز ۲۵۸۵ <span style={{ color: 'var(--gold)' }}>●</span> همهٔ حقوق محفوظ است
      </div>
    </footer>
  );
}

/* shared title block for inner pages */
function PageTitle({ technical, title, lede }) {
  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem 2.5rem', textAlign: 'center', position: 'relative' }}>
      <DraftLineH top="2.4rem" right="-6rem" left="-6rem" />
      <span className="gsn-technical" style={{ color: 'var(--gold-deep)' }}>{technical}</span>
      <h1 className="gsn-display" style={{ fontSize: 'var(--text-display)', margin: '1rem 0 0.6rem' }}>{title}</h1>
      {lede ? <p style={{ color: 'var(--text-muted)', fontWeight: 300, margin: 0 }}>{lede}</p> : null}
    </div>
  );
}

/* newsletter band — used on home */
function NewsletterBand() {
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ borderTop: '1px solid var(--line)', textAlign: 'center' }}>
      <div className="wrap" style={{ paddingTop: '4rem', paddingBottom: '4.5rem', maxWidth: '720px' }}>
        <Reveal>
          <span className="gsn-technical" style={{ color: 'var(--gold-deep)' }}>NEWSLETTER</span>
          <h2 className="gsn-display" style={{ fontSize: '1.9rem', margin: '0.8rem 0 0.5rem' }}>خبرنامهٔ گوسان</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0 0 2rem' }}>
            هر فصل یک نامه؛ گزیدهٔ جستارها و گفتگوهای شمارهٔ تازه، یک‌راست به صندوق شما.
          </p>
          {sent ? (
            <p style={{ color: 'var(--accent-strong)', fontWeight: 500, margin: 0 }}>سپاس؛ نشانی شما ثبت شد.</p>
          ) : (
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input type="email" required placeholder="you@example.com" aria-label="نشانی رایانامه" />
              <Button variant="gold">پیوستن</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { NAV_ITEMS, SiteHeader, SiteFooter, PageTitle, NewsletterBand });
