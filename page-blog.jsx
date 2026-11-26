/* Gosan Weblog — گاه‌نوشت (the journal / blog).

   These pieces live ONLY on the website: they are never printed in the
   گاهنامه, so they are deliberately kept OUT of GOSAN_POSTS. Nothing here
   reaches the issue pages, the archive, or the «دفتر نخست» menu.

   A گاه‌نوشت has its own look, unlike an essay: a card on the list, a journal
   page with a cover photograph, one «like» with its count, and readers' comments
   (EIC, 20 Oct 2026). No sign-off at the end: the byline under the title already
   carries the writer's name and the date (EIC, 20 Oct 2026).

   To add an entry, put a new object at the TOP of GOSAN_BLOG:

     {
       slug: 'a-url-safe-slug',
       title: 'عنوان گاه‌نوشت',
       author: 'نام نویسنده',
       date: '۲۸ مهر ۲۵۸۵ (۱۴۰۵)',        // imperial year always with its solar year
       excerpt: 'یکی دو جمله برای فهرست.',     // one of the writer's own sentences, verbatim
       tags: ['باستان‌شناسی'],             // fields: shown on the card and the page, filter the
                                          // list (/blog?tag=…) and feed the site search;
                                          // an in-memoriam post also carries 'یادمان'
       cover: { image: 'uploads/blog/x.jpg', credit: '…' },   // caption and alt follow the title
                                          // (its name, without the years) — the page, the
                                          // photograph and the share thumbnail always name
                                          // him or her alike; give caption only for a picture
                                          // that is not of the post's subject
       body: [                            // one entry per block, in reading order:
         'بند …',                         //   a string is a paragraph
         { lines: ['سطر…', 'سطر…'] },     //   a paragraph the author set as separate lines
         { image: 'uploads/x.jpeg', alt: '…', caption: 'تصویر ۱. … منبع: … .' },
       ],
       notes: ['[۱] …'],                  // the author's own apparatus, reproduced as
                                          // written; *…* is italic, bare URLs are linked
     }

   شیوه‌نامه: every image needs a caption carrying a short description and the
   source or the name of the rights holder.

   Likes and comments live in the analytics Worker's database
   (tools/analytics-worker/journal.js). No comment is shown before the editorial
   desk approves it at https://gosan-analytics.gosan.workers.dev/moderate.
*/

const GOSAN_BLOG = [
  {
    slug: 'yousef-majidzadeh',
    title: 'دکتر یوسف مجیدزاده (۱۳۱۵–۱۴۰۵)',
    author: 'احسان شواربی',
    date: '۲۸ مهر ۲۵۸۵ (۱۴۰۵)',
    kicker: 'در یاد',
    /* the subtitle is one of the writer's own sentences, verbatim (EIC, 20 Oct 2026) */
    excerpt: 'این یادداشت در سوگ زنده‌یاد دکتر یوسف مجیدزاده، باستان‌شناس برجستۀ ایرانی، نوشته شده است.',
    tags: ['یادمان', 'باستان‌شناسی', 'مردم‌شناسی'],
    /* CREDIT PENDING — the photograph came without a source and circulates uncredited in the
       Iranian press reports of his death (20 Oct 2026); the EIC supplies it before publishing */
    cover: { image: 'uploads/blog/majidzadeh.jpg', credit: '' },
    body: [
      'امروز یکی دیگر از چهره‌های برجستۀ باستان‌شناسی ایران از میان ما رفت. زنده‌یاد دکتر یوسف مجیدزاده را بسیاری با کاوش‌هایش در کُنارصندل جیرفت، تپۀ ازبکی هشتگرد و تپۀ قبرستان در دشت قزوین می‌شناسند. اما دامنۀ علایق پژوهشی او بسیار فراتر از اینها بود.',
      'مجیدزاده فعالیت پژوهشی خود را در اواخر دهۀ ۱۳۳۰ در ادارۀ کل موزه‌ها و فرهنگ عامۀ وزارت فرهنگ، زیر نظر دکتر صادق کیا، آغاز کرد. در همان سال‌ها، برای انجام پژوهش‌های مردم‌شناختی به نواحی گوناگون غرب ایران اعزام شد تا آداب و رسوم مردمان آن مناطق را ثبت و مستندسازی کند؛ از جمله ایل زرزا در اطراف اشنویه و نیز شماری از طوایف لرستان. نتایج این پژوهش‌ها در چند مقاله در مجلۀ <i>هنر و مردم</i> منتشر شد.',
      'همین آشنایی با فرهنگ‌های بومی مردمان ایران و شیوه‌های زندگی آنان بود که علاقۀ او را به شناخت فرهنگ مردمان در گذشته‌های دور برانگیخت و او را به سوی باستان‌شناسی کشاند. مجیدزاده تحصیل در رشتۀ باستان‌شناسی را در دانشگاه تهران آغاز کرد و شاگرد اول دورۀ خود شد. سپس با بورس دولتی به امریکا رفت و در سال ۱۳۵۵ تحصیلات خود را در دانشگاه شیکاگو به پایان رساند. رسالۀ دکتری او به فرهنگ‌های پیشاتاریخی در مرکز فلات ایران می‌پردازد. او در همان سال به ایران بازگشت و استادیار دانشگاه تهران شد.',
      'پس از فاجعۀ ۱۳۵۷، جماعت انقلابی در پی آن بودند که رشتۀ باستان‌شناسی را، که از نظر آنان مروج طاغوت، امپریالیسم و اسلام‌ستیزی بود، به‌کلی از برنامۀ دانشگاه‌ها حذف کنند. مجیدزاده یکی از کسانی بود که ایستادگی کرد و برای پیشگیری از این کار بسیار کوشید. به یاد دارم یکی از استادان نقل می‌کرد که مجیدزاده حتی به دیدار خمینی رفت و تلاش کرد با آیه و حدیث به او بفهماند که میراث گذشتگان باید حفظ و مطالعه شود. سرانجام، تلاش‌های او مؤثر افتاد و رشتۀ باستان‌شناسی نجات یافت. اما خودِ او چند سال بعد قربانی پرونده‌سازی و پاکسازی‌های انقلابی شد. به او اتهام ضدانقلاب زدند و از دانشگاه تهران اخراجش کردند.',
      'مجیدزاده باقی عمر خود را در فرانسه گذراند، ولی پیوندش با باستان‌شناسی ایران گسسته نشد. در مقاطعی به ایران بازگشت و کاوش‌های تپۀ ازبکی و کُنارصندل جیرفت را سرپرستی کرد؛ کاوش‌هایی که دستاوردهای پژوهشی بسیار داشت. میراث علمی مجیدزاده حدود بیست جلد کتاب و ده‌ها مقالۀ پژوهشی ارزشمند به زبان‌های فارسی، انگلیسی و فرانسوی در زمینه‌های گوناگون باستان‌شناسی ایران است. از میان آثار ماندگار او می‌توان به این کتاب‌ها اشاره کرد: <i>آغاز شهرنشینی در ایران</i> (۱۳۶۸)، <i>تاریخ و تمدن ایلام</i> (۱۳۷۰)، <i>تاریخ و تمدن بین‌النهرین</i> (در سه جلد، ۱۳۷۶–۱۳۷۹)، <i>جیرفت: کهنترین تمدن شرق</i> (۱۳۸۲)، <i>کاوش‌های محوطۀ باستانی ازبکی</i> (در دو جلد، ۱۳۸۹)، <i>کاوش‌های تپه قبرستان</i> (۱۳۹۶) و <i>باستان‌شناسی حوضۀ هلیل‌رود: جیرفت</i> (در سه جلد، ۱۳۹۸).',
      'یادش گرامی.',
    ],
  },
];

/* likes and comments: the analytics Worker (tools/analytics-worker/journal.js) */
const GOSAN_JOURNAL_ENDPOINT = 'https://gosan-analytics.gosan.workers.dev';

const faNum = (n) => Number(n || 0).toLocaleString('fa-IR');

/* a comment's date in the house form: imperial year with its solar year, «۲۸ مهر ۲۵۸۵ (۱۴۰۵)» */
function blogDateOf(ts) {
  try {
    const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' })
      .formatToParts(new Date(ts * 1000));
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
    const solar = parseInt(get('year').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)), 10);
    return `${get('day')} ${get('month')} ${faNum(solar + 1180).replace(/٬/g, '')} (${get('year')})`;
  } catch (e) { return ''; }
}

function blogReadMinutes(post) {
  const words = (post.body || []).map((b) => (typeof b === 'string' ? b : (b.lines || []).join(' ')))
    .join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function blogStore(key, value) {
  try {
    if (value === undefined) return window.localStorage.getItem(key);
    if (value === null) window.localStorage.removeItem(key); else window.localStorage.setItem(key, value);
  } catch (e) { /* private window or blocked storage: the page still works */ }
  return null;
}

/* one fetch per post, shared by the card and the page */
const blogStatsCache = {};
function useBlogStats(slug) {
  const [stats, setStats] = React.useState(blogStatsCache[slug] || null);
  const reload = React.useCallback(() => {
    fetch(`${GOSAN_JOURNAL_ENDPOINT}/j/post?s=${encodeURIComponent(slug)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d) { blogStatsCache[slug] = d; setStats(d); } })
      .catch(() => {});
  }, [slug]);
  React.useEffect(() => { reload(); }, [reload]);
  return [stats, setStats, reload];
}

/* ---------- icons (line, 1.6 stroke, currentColor) ---------- */
function IconHeart({ filled }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M12 20.3s-7.6-4.6-7.6-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.6 2.5c0 5.6-7.6 10.2-7.6 10.2z"
        fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconComment() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
      <path d="M4.5 5.5h15v10h-8.2L7 19.2v-3.7H4.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M2.8 12s3.4-6.2 9.2-6.2 9.2 6.2 9.2 6.2-3.4 6.2-9.2 6.2S2.8 12 2.8 12z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* The author's notes are reproduced exactly as written; the only thing added
   is a link around a bare URL so the reader can follow it. */
const BLOG_URL_RE = /(https?:\/\/[^\s]+)/g;
const BLOG_ITALIC_RE = /\*([^*]+)\*/g;

/* «نام کتاب‌ها و مجله‌ها به صورت ایتالیک» — the *…* in a note marks the title
   of the publication; a bare URL becomes a link. Nothing else is touched. */
function BlogNoteText({ text }) {
  const out = [];
  String(text).split(BLOG_URL_RE).forEach((chunk, ci) => {
    if (ci % 2 === 1) {
      out.push(<a key={`u${ci}`} href={chunk} target="_blank" rel="noopener noreferrer" dir="ltr">{chunk}</a>);
      return;
    }
    chunk.split(BLOG_ITALIC_RE).forEach((piece, pi) => {
      if (!piece) return;
      out.push(pi % 2 === 1
        ? <em key={`i${ci}-${pi}`}>{piece}</em>
        : <React.Fragment key={`t${ci}-${pi}`}>{piece}</React.Fragment>);
    });
  });
  return <React.Fragment>{out}</React.Fragment>;
}

function BlogFigure({ block }) {
  return (
    <figure className="bj-figure" style={block.width ? { width: block.width } : null}>
      <img src={block.image} alt={block.alt || ''} />
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
    </figure>
  );
}

/* a paragraph may carry the desk's bold/italic (<i>, <b>, <em>, <strong>); nothing else is markup */
const BLOG_EMPH_RE = /<(\/?)(i|b|em|strong)>/g;
function BlogInline({ text }) {
  const s = String(text);
  if (!BLOG_EMPH_RE.test(s)) return s;
  BLOG_EMPH_RE.lastIndex = 0;
  const root = { kids: [] }, stack = [root];
  let last = 0, m, k = 0;
  while ((m = BLOG_EMPH_RE.exec(s))) {
    if (m.index > last) stack[stack.length - 1].kids.push(s.slice(last, m.index));
    last = BLOG_EMPH_RE.lastIndex;
    if (!m[1]) { const n = { tag: m[2] === 'b' || m[2] === 'strong' ? 'strong' : 'em', kids: [] }; stack[stack.length - 1].kids.push(n); stack.push(n); }
    else if (stack.length > 1) stack.pop();
  }
  if (last < s.length) stack[stack.length - 1].kids.push(s.slice(last));
  const draw = (n) => n.kids.map((c) => (typeof c === 'string' ? c : React.createElement(c.tag, { key: k++ }, draw(c))));
  return <React.Fragment>{draw(root)}</React.Fragment>;
}

function BlogBlock({ block }) {
  if (typeof block === 'string') return <p><BlogInline text={block} /></p>;
  if (block && block.image) return <BlogFigure block={block} />;
  if (block && block.lines) {
    return (
      <p>
        {block.lines.map((line, i) => (
          <React.Fragment key={i}>{i > 0 ? <br /> : null}<BlogInline text={line} /></React.Fragment>
        ))}
      </p>
    );
  }
  return null;
}

function BlogNotes({ notes }) {
  if (!notes || notes.length === 0) return null;
  return (
    <section className="bj-notes">
      <h2 className="gsn-display">یادداشت‌ها و منابع</h2>
      {notes.map((note, i) => <p key={i}><BlogNoteText text={note} /></p>)}
    </section>
  );
}

/* the name a post's title gives, without its years: «دکتر یوسف مجیدزاده (۱۳۱۵–۱۴۰۵)» → «دکتر یوسف مجیدزاده».
   The cover's caption and alt default to it (tools/publish-to-public.py blog_card does the same). */
function blogTitleName(post) {
  return String(post.title || '').replace(/\s*\([^()]*\)\s*$/, '').trim();
}

function blogBySlug(slug) {
  return GOSAN_BLOG.find((p) => p.slug === slug) || null;
}

/* every field in use, in the order of first appearance, with its count */
function blogAllTags() {
  const seen = new Map();
  GOSAN_BLOG.forEach((p) => (p.tags || []).forEach((t) => seen.set(t, (seen.get(t) || 0) + 1)));
  return [...seen.entries()];
}
function blogTagHref(tag) { return `/blog?tag=${encodeURIComponent(tag)}`; }
function blogCurrentTag() {
  try { return new URLSearchParams(window.location.search).get('tag') || ''; } catch (e) { return ''; }
}

function BlogTags({ tags, className = '' }) {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className={`bj-tags ${className}`} aria-label="زمینه‌ها">
      {tags.map((t) => <li key={t}><a className="bj-tag" href={blogTagHref(t)}>{t}</a></li>)}
    </ul>
  );
}

function BlogEmpty() {
  return <p className="bj-empty">هنوز گاه‌نوشتی منتشر نشده است.</p>;
}

/* ---------- the list: one card per گاه‌نوشت; the newest one lies across the row ---------- */
function BlogCard({ post, wide }) {
  const [stats] = useBlogStats(post.slug);
  const href = `/blog/${post.slug}`;
  return (
    <article className={`bj-card${wide ? ' bj-card--wide' : ''}`}>
      {post.cover ? (
        <a className="bj-card-media" href={href} tabIndex={-1} aria-hidden="true">
          <img src={post.cover.image} alt="" loading="lazy" />
        </a>
      ) : null}
      <div className="bj-card-body">
        <div className="bj-card-kicker">
          {post.kicker ? <span className="bj-chip">{post.kicker}</span> : null}
          <span>{post.date}</span>
        </div>
        <h2 className="gsn-display bj-card-title"><a href={href}>{post.title}</a></h2>
        {post.excerpt ? <p className="bj-card-excerpt"><BlogInline text={post.excerpt} /></p> : null}
        <BlogTags tags={post.tags} className="bj-tags--card" />
        <div className="bj-card-foot">
          <span className="bj-card-author">{post.author}</span>
          <span className="bj-card-counts">
            <span title="بازدید"><IconEye />{faNum(stats ? stats.views : 0)}</span>
            <span title="پسند"><IconHeart filled={false} />{faNum(stats ? stats.likes : 0)}</span>
            <span title="دیدگاه"><IconComment />{faNum(stats ? stats.comments.length : 0)}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

/* the router only re-renders when the PATH changes; /blog → /blog?tag=… keeps the path,
   so the list listens for the move itself */
function useBlogTag() {
  const [tag, setTag] = React.useState(blogCurrentTag);
  React.useEffect(() => {
    const on = () => setTag(blogCurrentTag());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return tag;
}

function BlogPage() {
  const tag = useBlogTag();
  const all = blogAllTags();
  const posts = tag ? GOSAN_BLOG.filter((p) => (p.tags || []).includes(tag)) : GOSAN_BLOG;
  return (
    <main data-screen-label="گاه‌نوشت" className="bj">
      <PageTitle
        technical="JOURNAL // GŌSĀN"
        title="گاه‌نوشت"
        lede="تأملات روز — آنچه میان دو شماره می‌گذرد"
      />
      <div className="wrap bj-list-wrap">
        {all.length ? (
          <nav className="bj-filter" aria-label="زمینه‌ها">
            <a className={`bj-filter-item${tag ? '' : ' is-on'}`} href="/blog">همه <span>{faNum(GOSAN_BLOG.length)}</span></a>
            {all.map(([t, n]) => (
              <a key={t} className={`bj-filter-item${t === tag ? ' is-on' : ''}`} href={blogTagHref(t)}>
                {t} <span>{faNum(n)}</span>
              </a>
            ))}
          </nav>
        ) : null}
        {posts.length === 0 ? (tag ? <p className="bj-empty">در این زمینه هنوز گاه‌نوشتی نیست.</p> : <BlogEmpty />) : (
          <div className="bj-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 110} className={i === 0 ? 'bj-grid-wide' : ''}>
                <BlogCard post={p} wide={i === 0} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

/* ---------- the like ---------- */
function BlogLike({ slug, stats, setStats }) {
  const key = `gosan-like:${slug}`;
  const [liked, setLiked] = React.useState(blogStore(key) === '1');
  const [pulse, setPulse] = React.useState(false);
  const count = stats ? stats.likes : 0;
  const toggle = () => {
    const on = !liked;
    setLiked(on);
    blogStore(key, on ? '1' : null);
    if (on) { setPulse(true); setTimeout(() => setPulse(false), 600); }
    setStats({ ...(stats || { comments: [] }), likes: Math.max(0, count + (on ? 1 : -1)) });
    fetch(`${GOSAN_JOURNAL_ENDPOINT}/j/like`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ s: slug, on }),
    }).then((r) => (r.ok ? r.json() : null)).then((d) => {
      if (d && typeof d.likes === 'number') {
        blogStatsCache[slug] = { ...(blogStatsCache[slug] || { comments: [] }), likes: d.likes };
        setStats((s) => ({ ...(s || { comments: [] }), likes: d.likes }));
      }
    }).catch(() => {});
  };
  return (
    <button type="button" className={`bj-like${liked ? ' is-on' : ''}${pulse ? ' is-pulse' : ''}`}
      onClick={toggle} aria-pressed={liked} aria-label={liked ? 'پس گرفتن پسند' : 'پسندیدن'}>
      <IconHeart filled={liked} />
      <span className="bj-like-n">{faNum(count)}</span>
      <span className="bj-like-label">{liked ? 'پسندیدید' : 'پسندیدن'}</span>
    </button>
  );
}

function BlogCopyLink() {
  const [done, setDone] = React.useState(false);
  const copy = () => {
    const url = window.location.href.split('#')[0];
    const ok = () => { setDone(true); setTimeout(() => setDone(false), 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(ok).catch(() => {});
  };
  return (
    <button type="button" className="bj-act" onClick={copy} aria-label="رونوشت پیوند">
      <IconLink /><span className="bj-act-word">{done ? 'پیوند رونوشت شد' : 'رونوشت پیوند'}</span>
    </button>
  );
}

/* ---------- comments ---------- */
function BlogComment({ c }) {
  return (
    <li className={`bj-comment${c.mine ? ' bj-comment--mine' : ''}`}>
      <span className="bj-comment-mono" aria-hidden="true">{(c.name || '؟').trim().charAt(0)}</span>
      <div className="bj-comment-main">
        <div className="bj-comment-head">
          <span className="bj-comment-name">{c.name}</span>
          <span className="bj-comment-date">{blogDateOf(c.ts)}</span>
          {c.mine ? <span className="bj-comment-pending">در انتظار تأیید · تنها شما آن را می‌بینید</span> : null}
        </div>
        <p className="bj-comment-text">{c.text}</p>
        {c.reply ? (
          <div className="bj-reply">
            <span className="bj-reply-head">پاسخ گوسان</span>
            <p>{c.reply}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
}

const BJ_FORM_MSG = {
  sending: 'در حال فرستادن…',
  ok: 'سپاس. دیدگاه شما رسید و پس از بازبینی تحریریه منتشر می‌شود.',
  limit: 'امروز بیش از این نمی‌توان دیدگاه فرستاد. لطفاً فردا دوباره بکوشید.',
  fail: 'فرستادن دیدگاه ممکن نشد. لطفاً دوباره بکوشید یا به info@gosan.org بنویسید.',
};

function BlogCommentForm({ post, onSent }) {
  const [name, setName] = React.useState(blogStore('gosan-comment-name') || '');
  const [text, setText] = React.useState('');
  const [state, setState] = React.useState('');
  const hp = React.useRef(null);
  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim() || state === 'sending') return;
    setState('sending');
    blogStore('gosan-comment-name', name.trim());
    fetch(`${GOSAN_JOURNAL_ENDPOINT}/j/comment`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ s: post.slug, name, text, website: hp.current ? hp.current.value : '' }),
    }).then((r) => {
      if (r.status === 429) { setState('limit'); return; }
      if (!r.ok) { setState('fail'); return; }
      setState('ok');
      setText('');
      if (onSent) onSent({ name: name.trim(), text: text.trim(), ts: Math.floor(Date.now() / 1000) });
      /* a note to the editorial inbox, so the desk knows a comment is waiting */
      if (typeof GOSAN_SUBSCRIBE_ENDPOINT !== 'undefined' && GOSAN_SUBSCRIBE_ENDPOINT) {
        fetch(GOSAN_SUBSCRIBE_ENDPOINT, {
          method: 'POST', headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            kind: 'comment', name, page: window.location.href,
            subject: `دیدگاه تازه در گاه‌نوشت — ${post.title}`,
            message: `${text}\n\n— برای انتشار یا پنهان کردن: ${GOSAN_JOURNAL_ENDPOINT}/moderate`,
          }),
        }).catch(() => {});
      }
    }).catch(() => setState('fail'));
  };
  return (
    <form className="bj-form" onSubmit={submit}>
      <h3 className="gsn-display bj-form-title">دیدگاه خود را بنویسید</h3>
      <label className="bj-field">
        <span>نام</span>
        <input type="text" value={name} maxLength={80} required autoComplete="name"
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="bj-field">
        <span>دیدگاه</span>
        <textarea rows={5} value={text} maxLength={3000} required
          onChange={(e) => setText(e.target.value)} />
      </label>
      {/* a field no person sees; a bot that fills it is quietly ignored */}
      <input ref={hp} type="text" name="website" tabIndex={-1} autoComplete="off" className="bj-hp" aria-hidden="true" />
      <div className="bj-form-foot">
        <p className="bj-form-note">دیدگاه‌ها پس از بازبینی تحریریه، همراه با نامی که می‌نویسید، منتشر می‌شوند؛ نام مستعار نیز پذیرفته است. نشانی ایمیل درخواست نمی‌شود. شرح بیشتر در <a href="/datenschutz">حفاظت از داده‌ها</a>.</p>
        <button type="submit" className="bj-submit" disabled={state === 'sending'}>فرستادن دیدگاه</button>
      </div>
      {state ? <p className={`bj-form-msg is-${state}`} role="status">{BJ_FORM_MSG[state]}</p> : null}
    </form>
  );
}

/* A reader's own comments, kept in their browser until the desk approves them: they see what they
   sent, under the form, marked as waiting. Nobody else sees it before approval. */
function blogMine(slug, list) {
  const key = `gosan-mine:${slug}`;
  if (list === undefined) {
    try { return JSON.parse(blogStore(key) || '[]'); } catch (e) { return []; }
  }
  blogStore(key, list.length ? JSON.stringify(list.slice(-10)) : null);
  return list;
}

/* ---------- the edit desk ----------
   The desk (editor.html) opens a گاه‌نوشت as «blog-<slug>» on this page, after staging its payload
   (desk/blog-<slug>.json) in sessionStorage. The page then renders from the payload alone — the
   entry need not be on the public site the desk is served from — with the desk's current body as
   the <article> it edits and the subtitle as its چکیده. Inert when nothing is staged. */
function blogEsc(t) {
  return String(t || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function blogDeskPayload(slug) {
  /* only inside the desk's frame: the staged copy lingers in the tab's sessionStorage afterwards */
  if (window.self === window.top) return null;
  return typeof deskPayload === 'function' ? deskPayload('blog-' + slug) : null;
}

/* ---------- the post page ---------- */
function BlogPostView({ slug }) {
  const staged = blogDeskPayload(slug);
  const post = staged ? { ...(blogBySlug(slug) || {}), ...staged.post, slug } : blogBySlug(slug);
  const deskBody = staged && staged.override ? staged.override.body : null;
  /* the desk saves title + subtitle as one field (its «summary»): <h1 class="bj-title"> + <p class="bj-dek">.
     An older draft may hold the subtitle alone; the title then comes from the post. */
  const deskHead = staged && staged.override && staged.override.summary
    ? (/bj-title/.test(staged.override.summary) ? staged.override.summary
      : '<h1 class="gsn-display bj-title">' + blogEsc(post.title) + '</h1><p class="bj-dek">' + staged.override.summary + '</p>')
    : null;
  const [stats, setStats] = useBlogStats(slug || '');
  const [mine, setMine] = React.useState(() => blogMine(slug || ''));
  if (!post) {
    return (
      <main data-screen-label="گاه‌نوشت" className="bj">
        <PageTitle technical="JOURNAL // GŌSĀN" title="گاه‌نوشت" />
        <div className="wrap" style={{ paddingBottom: '5rem' }}>
          <BlogEmpty />
          <p style={{ textAlign: 'center' }}>
            <a className="blog-more" href="/blog">بازگشت به گاه‌نوشت</a>
          </p>
        </div>
      </main>
    );
  }
  const comments = stats ? stats.comments : [];
  /* once the desk approves one, the published copy takes its place */
  const waiting = mine.filter((m) => !comments.some((c) => c.name === m.name && c.text === m.text));
  const shown = [...waiting.map((m, i) => ({ ...m, id: `mine-${i}`, mine: true })).reverse(), ...comments.slice().reverse()];
  const addMine = (c) => setMine(blogMine(post.slug, [...waiting, c]));
  const photo = typeof AUTHOR_PHOTOS !== 'undefined' ? AUTHOR_PHOTOS[post.author] : null;
  return (
    <main data-screen-label="گاه‌نوشت" className={`bj bj-post${staged ? ' bj-desk' : ''}`}>
      {/* a div, not <header>: the edit desk hides every header of the page it frames */}
      {/* only the category chip above the title, no «گاه‌نوشت» link (EIC, 20 Oct 2026) */}
      <div className="bj-head">
        {post.kicker ? <span className="bj-chip">{post.kicker}</span> : null}
        {deskHead ? <div className="bj-headline" dangerouslySetInnerHTML={{ __html: deskHead }} /> : (
          <div className="bj-headline">
            <h1 className="gsn-display bj-title">{post.title}</h1>
            {post.excerpt ? <p className="bj-dek"><BlogInline text={post.excerpt} /></p> : null}
          </div>
        )}
        <div className="bj-byline">
          {/* the writer's circle opens the biography card, as on an essay (AuthorAvatar, page-article.jsx) */}
          {photo ? <AuthorAvatar name={post.author} /> : null}
          <div>
            <span className="bj-byline-name">{post.author}</span>
            <span className="bj-byline-meta">
              {post.date} · {faNum(blogReadMinutes(post))} دقیقه خواندن
              {stats && stats.views ? <React.Fragment> · {faNum(stats.views)} بازدید</React.Fragment> : null}
            </span>
          </div>
        </div>
      </div>

      {post.cover ? (
        <figure className="bj-cover">
          <img src={post.cover.image} alt={post.cover.alt || blogTitleName(post)} />
          {(post.cover.caption || blogTitleName(post)) || post.cover.credit ? (
            <figcaption>
              {post.cover.caption || blogTitleName(post)}
              {post.cover.credit ? <span className="bj-credit">عکس: {post.cover.credit}</span> : null}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="bj-column">
        {deskBody ? <article className="bj-body" dangerouslySetInnerHTML={{ __html: deskBody }} /> : (
        <article className="bj-body">
          {(post.body || []).map((block, i) => <BlogBlock key={i} block={block} />)}
        </article>
        )}
        <BlogNotes notes={post.notes} />
        <BlogTags tags={post.tags} className="bj-tags--post" />

        <div className="bj-bar">
          <BlogLike slug={post.slug} stats={stats} setStats={setStats} />
          <span className="bj-act bj-act--static" title="شمار خوانندگان این گاه‌نوشت">
            <IconEye /><span>{faNum(stats ? stats.views : 0)}</span><span className="bj-act-word">بازدید</span>
          </span>
          <a className="bj-act" href="#bj-comments">
            <IconComment /><span>{faNum(comments.length)}</span><span className="bj-act-word">دیدگاه</span>
          </a>
          <BlogCopyLink />
        </div>

        {/* the essays' share row; the post's own address previews with its title, subtitle and
            cover (tools/publish-to-public.py gives every post a folder with that card) */}
        <div className="bj-share">
          <ShareRow post={post} url={GOSAN_SITE_BASE + 'blog/' + post.slug + '/'} />
        </div>

        {/* the way back, where the reader finishes the text — the top keeps only the chip (EIC, 20 Oct 2026) */}
        <p className="bj-back bj-back--after"><a className="blog-more" href="/blog">بازگشت به گاه‌نوشت</a></p>

        <section className="bj-comments" id="bj-comments">
          <h2 className="gsn-display bj-comments-title">
            دیدگاه‌ها {comments.length ? <span>{faNum(comments.length)}</span> : null}
          </h2>
          <BlogCommentForm post={post} onSent={addMine} />
          {shown.length ? (
            <ul className="bj-comment-list">
              {shown.map((c) => <BlogComment key={c.id} c={c} />)}
            </ul>
          ) : <p className="bj-comments-empty">هنوز دیدگاهی نوشته نشده است. نخستین دیدگاه را شما بنویسید.</p>}
        </section>

        <p className="bj-back"><a className="blog-more" href="/blog">همهٔ گاه‌نوشت‌ها</a></p>
      </div>
    </main>
  );
}
