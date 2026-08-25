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
       body: ['بند نخست…', 'بند دوم…'],   // one string per paragraph
     }
*/

const GOSAN_BLOG = [];

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
          {(post.body || []).map((para, i) => <p key={i}>{para}</p>)}
        </article>
        <p style={{ marginTop: '2.5rem' }}>
          <a className="blog-more" href="#/blog">بازگشت به گاه‌نوشت</a>
        </p>
      </div>
    </main>
  );
}
