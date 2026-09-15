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
  {
    slug: 'on-being-the-first',
    title: 'در باب «نخستین» بودن',
    author: 'یلدا زمانی',
    date: '۲۶ آبان ۲۵۸۵',
    excerpt: 'ظهور دوبارهٔ نخستین رهبر ارکستر زن در ایران',
    body: [
      {
        image: 'uploads/blog-first-01.jpeg',
        alt: 'نازنین آقاخانی در حال رهبری ارکستر سمفونیک تهران',
        caption: 'تصویر ۱. اجرای نازنین آقاخانی با ارکستر سمفونیک تهران، مرداد ۱۳۸۹، تالار بزرگ رودکی.',
      },
      'در مسیری ناپیموده در کوه‌پیمایی، نفر اول خطر را به جان می‌خرد تا جای پایی امن برای پشت‌سری‌ها بسازد و راه را برای آنها هموار کند. نخستین بودن نشانه‌ای از اراده، شجاعت و اعتمادبه‌نفس یک فرد است؛ اما این قدم‌های نفر دوم و سوم و اعتماد بعدی‌ها به مسیر و پیشروان است که حرکت گروه به جلو را تضمین می‌کند. در عرصهٔ هنر و فرهنگ یک مملکت نیز «اولین‌ها» همان سنگرشکنانی‌اند که در برابر رخوت و مقاومت جامعه در پذیرش نگاه یا تصویری تازه که شاید بتواند موجب پیشرفت آن جامعه شود می‌ایستند و سختی و بی‌مهری را به جان می‌خرند تا امکانی نو نخست در ذهن و سپس در بطن جامعه ترسیم شود. اما این بعدی‌ها هستند که آن امکان تازه را در میدان عمل می‌آزمایند، آن را تدریجاً شکل می‌دهند، تثبیت می‌کنند و بهبود می‌بخشند. جامعهٔ ما بیش از «اولین‌ها»، به دومین‌ها، سومین‌ها و ادامه‌دهندگان مسیر نیاز دارد، بنابراین شاید در کنار پاسداشت شجاعت پیشگامان و ثبت نامشان در حافظهٔ جمعی، لازم باشد در قداست‌بخشی بی‌حساب به «سر صف» و امتیاز دادن به کسانی که بنا به مصلحت خود بر نخستین‌سازی و افتخار اعطای مجوز ظهور آنها در جامعه تأکید می‌کنند، محتاط‌تر باشیم. بهتر است نگاه‌مان را از فرد به مسیر آغازشده و کیفیت آن معطوف کنیم تا گفتمان پیشرفت را بر پایهٔ کیفیت عمل و اندیشه و نتیجهٔ آنها بنا کنیم، و نه با بالا و پایین بردن ارزش افراد.',
      'اجرای پانیذ فریوسفی با ارکستر سمفونیک تهران[۱] موجب خوشحالی است، زیرا ما به موسیقی‌دانان جدی و توانمندی نیاز داریم که مسئولیت‌های بیشتری بر عهده بگیرند و خود را به‌تدریج در نقش‌هایی تازه، از جمله رهبری ارکستر بیازمایند. رشد و پیشرفت موسیقی در ایران، بدون درک این احساس مسئولیت و پاسخ درست به آن تصورپذیر نیست. بااین‌حال، رهبری مهم‌ترین ارکستر سمفونیک یک کشور فضای خودآزمایی نیست، و قرار گرفتن در آن جایگاه، بیش از آنکه نشان از به عهده گرفتن مسئولیتی خطیر توسط یک موسیقی‌دان باشد، نشانهٔ اعتماد و اعتباربخشی نوازندگان و مدیریت ارکستر به آن موسیقی‌دان است و تنها نتیجهٔ کار و کیفیت صدادهی ارکستر و رضایت نوازندگان از دانش، تجربه، تکنیک، الهام‌بخشی و هنرورزی، دقت، شفافیت در انتقال ایده‌ها، وقت‌شناسی و منش یک رهبر هست که معیارهای صحیحی برای سنجش صلاحیت یک موسیقی‌دان برای قرار گرفتن در آن جایگاه هستند. سؤال اینجاست: با توجه به خفقان و فضای ایدئولوژیک تحمیل‌شده به جامعه توسط حکومتی در لبهٔ پرتگاه، آیا مدیریت و نوازندگان ارکستر، به ترتیب، از صلاحیت و یا استقلال لازم برای اعتمادپذیر بودن چنین تصمیم‌هایی برخوردارند؟',
      {
        image: 'uploads/blog-first-02.jpeg',
        width: '520px',
        alt: 'پست پایگاه اطلاع‌رسانی دولت در ایکس دربارهٔ اجرای ارکستر سمفونیک تهران',
        caption: 'تصویر ۲. پست پایگاه اطلاع‌رسانی دولت (PadDolat@) در ایکس دربارهٔ اجرای ارکستر سمفونیک تهران به رهبری پانیذ فریوسفی، آبان ۱۴۰۴ خورشیدی. منبع: ایکس، PadDolat@.',
      },
      'در رد ادعای مطرح شده در مورد ظهور ناگهانی نخستین رهبر زن ایرانی، آن‌هم درست در زمانی که جمهوری اسلامی در ضعیف‌ترین موقعیت خود، هم از نظر مشروعیت داخلی و هم در عرصهٔ دیپلماسی بین‌المللی قرار دارد و نیاز به کاتالیزوری دارد که این موقعیت را ترمیم کند، همین بس که در سال ۱۳۹۷ و در دولت روحانی، نزهت امیری ناگهان به عنوان «نخستین بانوی ایرانی در زمینهٔ رهبری ارکستر» سر از رسانه‌های حکومتی برآورد[۲] و رسانه‌های غربی نیز این روایت را به‌سرعت بازتاب دادند[۳] تا امتیازی دیگر برای دولت اصلاحات رقم بزنند. این در حالی بود که هشت سال پیش‌تر، در دورهٔ احمدی‌نژاد، نازنین آقاخانی برای رهبری ارکستر سمفونیک تهران دعوت شده بود.[۴] عده‌ای به دلایلی روشن اصرار دارند این اتفاق را از اذهان عمومی پاک کنند و افتخار ایجاد امکان یک نخستین ساختگی دیگر را از آن خود کنند، اما تاریخ را نمی‌توان به سلیقهٔ خود دستکاری کرد. در سال ۱۳۸۹ سه اجرا با ارکستر سمفونیک تهران به رهبری نازنین آقاخانی برنامه‌ریزی شده بود. تمرینات پایان یافته بودند اما درست پیش از اولین اجرا، اعلام شد که تنها با کارت دعوت امکان شرکت در این کنسرت وجود دارد. اجرای اول با تعداد مخاطب محدود برگزار شد و اجراهای بعدی لغو و رسانه‌ها از پوشش خبر این اجرا منع شدند. در طول دوران منحوس جمهوری اسلامی این خانم آقاخانی بود که به عنوان اولین رهبر ارکستر زن در ایران نامش در کنار ارکستر سمفونیک تهران ثبت شد، با این حال نمی‌توان با قطعیت گفت او اولین زنی بود که مسئولیت رهبری ارکستر سمفونیک تهران را که در سال ۱۳۱۲ با نام «ارکستر بلدیه» تأسیس شد[۵] به عهده گرفت، چه برسد که ادعا کنیم اولین رهبر ارکستر زن ایرانی است که تاکنون در ایران رهبری کرده است.',
      'در یک قرن اخیر در ایران، زنان و مردان بسیاری از حافظهٔ جمعی ما پاک شده‌اند یا هرگز نامشان شنیده نشده است، زیرا بسیاری از اسناد گذشته یا در دسترس عموم نیستند یا از میان رفته‌اند. از همین رو ما ایرانی‌ها باید در به کار بردن واژهٔ «نخستین» همیشه احتیاط به خرج دهیم. در دوران پادشاهی پهلوی اول و دوم، زنان شایسته و درخشانی مسئولیت‌هایی کلیدی مانند وزارت، سرپرستی و مدیریت یا رهبری کر و ارکستر را بر عهده داشتند. گلنوش خالقی[۶] و اِولین باغچه‌بان[۷] تنها دو نمونهٔ شناخته‌شده در حوزهٔ موسیقی هستند، اما آیا می‌توان ادعا کرد این هنرمندان نخستین‌ها بودند؟ با نبود اسناد کافی نمی‌توان چنین ادعایی کرد، و نباید این را هم فراموش کرد که در فضایی که زنان پابه‌پای مردان و با حقوقی برابر در پیشگاه قانون در جامعه فعال بودند، طبیعی‌ست که «اولین بودن»ها دیرپا یا حتی مطرح نباشد و به‌سرعت جای خود را به جریان طبیعی مشارکت حرفه‌ای دهد؛ جایی که شایستگی و نه جنسیت معیار و موضوع بحث باشد.',
      {
        image: 'uploads/blog-first-03.jpeg',
        alt: 'گلنوش خالقی در حال رهبری گروه همسرایان رادیوتلویزیون ملی ایران',
        caption: 'تصویر ۳. جلد صفحهٔ گروه همسرایان رادیوتلویزیون ملی ایران با همراهی ارکستر مجلسی رادیوتلویزیون ملی ایران؛ رهبر: گلنوش خالقی. منبع: مجموعهٔ پژمان اکبرزاده.',
      },
      {
        lines: [
          'برای من پرسش مهم دیگر اما این است: «نخستین بودن» امتیاز است یا مسئولیت؟',
          'اگر امتیاز است، باید پرسید این امتیاز را دقیقاً چه کسی اعطا می‌کند و چه کسی از آن بهره می‌برد؟',
          'و اگر مسئولیت است، باید منفعت جمعی ناشی از پذیرش بار این مسئولیت و نتایج آن را مورد بحث قرار داد و نه فردی که این مسئولیت را به عهده گرفته. جالب اینکه، همین پرسش را می‌توان در مورد ماهیت نقش یک رهبر ارکستر نیز مطرح کرد:',
        ],
      },
      'آیا رهبری یک ارکستر یک امتیاز است یا یک مسئولیت؟',
      'یلدا زمانی — آبان ۱۴۰۴، برلین',
    ],
    notes: [
      '[۱] ذکایی، ن. (۱۴۰۴، ۲۰ آبان). «خط‌شکنی رهبری یک زن در ارکستر تهران + ویدئو». *خبرگزاری دانشجویان ایران (ایسنا)*. https://www.isna.ir/amp/1404081912150/',
      '[۲] مسجدی، ش. (۱۳۹۷، ۵ شهریور). «تمرین ارکستر ملی ایران به رهبری نزهت امیری». *خبرگزاری دانشجویان ایران (ایسنا)*. https://www.isna.ir/photo/97060502341/تمرین-ارکستر-ملی-ایران-به-رهبری-نزهت-امیری',
      '[۳] Kamali Dehghan, Saeed. 2018. «The Conductor Smashing Iranian Taboos over Women, and Music». *The Guardian*, February 20, 2018. https://www.theguardian.com/world/2018/feb/20/the-conductor-smashing-iranian-taboos-over-women-and-music',
      '[۴] فردانیوز. (۱۳۸۹، ۲ مرداد). «انتخاب اولین رهبر ارکستر زن در ایران + عکس». *فردانیوز*. https://www.fardanews.com/fa/tiny/news-116362',
      '[۵] جمشیدنژاد، ن. (۱۴۰۰، ۳۰ تیر). «شکل‌گیری نخستین ارکستر سمفونیک تهران». *امرداد نیوز*. https://amordadnews.com/87419/',
      '[۶] اکبرزاده، پ. (۱۳۹۹، ۲۶ بهمن). «هرگز فقط برای زنان اجرا نمی‌کنم: گفتگو با گلنوش خالقی». *بی‌بی‌سی فارسی*. https://www.bbc.com/persian/arts-56067150.amp',
      '[۷] اکبرزاده، پ. (۱۳۹۹، ۱۰ آبان). «دهمین سالگرد خاموشی اِولین باغچه‌بان؛ روزهایی که تهران اپرا داشت». *بی‌بی‌سی فارسی*. https://www.bbc.com/persian/iran-features-54761081.amp',
    ],
  },
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
