/* Gosan Weblog — گاه‌نوشت (the journal / blog).

   These pieces live ONLY on the website: they are never printed in the
   گاهنامه, so they are deliberately kept OUT of GOSAN_POSTS. Nothing here
   reaches the issue pages, the archive, or the «شمارهٔ یکم» menu.

   To add an entry, put a new object at the TOP of GOSAN_BLOG:

     {
       slug: 'a-url-safe-slug',
       title: 'عنوان گاه‌نوشت',
       author: 'نام نویسنده',
       date: '۳ شهریور ۱۴۰۵',            // written as it should read
       excerpt: 'یکی دو جمله برای فهرست.',
       body: [                            // one entry per block, in reading order:
         'بند …',                         //   a string is a paragraph
         { lines: ['سطر…', 'سطر…'] },     //   a paragraph the author set as separate lines
         { image: 'uploads/x.jpeg', alt: '…', caption: 'تصویر ۱. … منبع: … .' },
       ],
       notes: ['[۱] …'],                  // the author's own apparatus, reproduced as
                                          // written; *…* is italic, bare URLs are linked
     }

   شیوه‌نامه: every image needs a numbered caption (تصویر ۱.) carrying a short
   description and the source or the name of the rights holder.
*/

const GOSAN_BLOG = [
];

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

/* A گاه‌نوشت runs in a single 780px column, so a figure fills the measure
   instead of the narrower essay-column width; a tall portrait can ask for
   less with `width`. */
function BlogFigure({ block }) {
  return (
    <figure
      className="essay-figure essay-figure-block"
      style={{ width: block.width || '100%', maxWidth: '100%', margin: '2.4rem auto' }}
    >
      <img src={block.image} alt={block.alt || ''} style={{ display: 'block', width: '100%' }} />
      {block.caption ? <figcaption>{block.caption}</figcaption> : null}
    </figure>
  );
}

function BlogBlock({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block && block.image) return <BlogFigure block={block} />;
  if (block && block.lines) {
    return (
      <p>
        {block.lines.map((line, i) => (
          <React.Fragment key={i}>{i > 0 ? <br /> : null}{line}</React.Fragment>
        ))}
      </p>
    );
  }
  return null;
}

function BlogNotes({ notes }) {
  if (!notes || notes.length === 0) return null;
  return (
    <section className="blog-notes" style={{ marginTop: '2.6rem', paddingTop: '1.6rem', borderTop: '1px solid rgba(0, 0, 0, 0.10)' }}>
      <h2 className="gsn-display" style={{ fontSize: '1rem', margin: '0 0 1.1rem' }}>یادداشت‌ها و منابع</h2>
      {notes.map((note, i) => (
        <p key={i} style={{ fontSize: '0.82rem', lineHeight: 1.95, margin: '0 0 0.75rem', color: 'var(--text-muted)', textAlign: 'start', overflowWrap: 'anywhere' }}>
          <BlogNoteText text={note} />
        </p>
      ))}
    </section>
  );
}

function blogBySlug(slug) {
  return GOSAN_BLOG.find((p) => p.slug === slug) || null;
}

function BlogEmpty() {
  return (
    <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '1rem 0 5rem' }}>
      هنوز گاه‌نوشتی منتشر نشده است.
    </p>
  );
}

function BlogPage() {
  return (
    <main data-screen-label="گاه‌نوشت">
      <PageTitle
        technical="JOURNAL // GŌSĀN"
        title="گاه‌نوشت"
        lede="تأملات روز — آنچه میان دو شماره می‌گذرد"
      />
      <div className="wrap blog-wrap" style={{ paddingBottom: '5rem' }}>
        {GOSAN_BLOG.length === 0 ? <BlogEmpty /> : (
          <div className="blog-list">
            {GOSAN_BLOG.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 110}>
                <article className="blog-item">
                  <div className="blog-meta">
                    <span className="blog-date">{p.date}</span>
                    {p.author ? <span className="blog-author">{p.author}</span> : null}
                  </div>
                  <h2 className="gsn-display blog-title">
                    <a href={`#/blog/${p.slug}`}>{p.title}</a>
                  </h2>
                  {p.excerpt ? <p className="blog-excerpt">{p.excerpt}</p> : null}
                  <a className="blog-more" href={`#/blog/${p.slug}`}>ادامه</a>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function BlogPostView({ slug }) {
  const post = blogBySlug(slug);
  if (!post) {
    return (
      <main data-screen-label="گاه‌نوشت">
        <PageTitle technical="JOURNAL // GŌSĀN" title="گاه‌نوشت" />
        <div className="wrap" style={{ paddingBottom: '5rem' }}>
          <BlogEmpty />
          <p style={{ textAlign: 'center' }}>
            <a className="blog-more" href="#/blog">بازگشت به گاه‌نوشت</a>
          </p>
        </div>
      </main>
    );
  }
  return (
    <main data-screen-label="گاه‌نوشت">
      <PageTitle technical="JOURNAL // GŌSĀN" title={post.title} lede={post.excerpt} />
      <div className="wrap blog-wrap" style={{ paddingBottom: '5rem' }}>
        <div className="blog-meta blog-meta-post">
          <span className="blog-date">{post.date}</span>
          {post.author ? <span className="blog-author">{post.author}</span> : null}
        </div>
        <article className="blog-body">
          {(post.body || []).map((block, i) => <BlogBlock key={i} block={block} />)}
        </article>
        <BlogNotes notes={post.notes} />
        <p style={{ marginTop: '2.5rem' }}>
          <a className="blog-more" href="#/blog">بازگشت به گاه‌نوشت</a>
        </p>
      </div>
    </main>
  );
}
