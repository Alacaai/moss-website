function Hero() {
  const { t } = useLanguage();
  return (
    <section className="page-hero">
      <span className="eyebrow">{t("featuresPage.eyebrow")}</span>
      <h1>{t("featuresPage.title")}</h1>
      <p>{t("featuresPage.body")}</p>
    </section>
  );
}

function FeatureRow({ eyebrow, title, desc, bullets, variant, reverse }) {
  return (
    <section className={`f-row ${reverse ? "reverse" : ""}`}>
      <div className="container f-row-inner">
        <div className="f-row-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{desc}</p>
          <ul className="f-bullets">
            {bullets.map(b => (<li key={b}><span>✓</span>{b}</li>))}
          </ul>
        </div>
        <div className="f-row-visual">
          <PhoneMock variant={variant} />
        </div>
      </div>
    </section>
  );
}

function Grid() {
  const { t } = useLanguage();
  const items = t("featuresPage.grid").map(([title, d]) => ({ t: title, d }));
  return (
    <section className="f-grid-sec">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{t("featuresPage.gridEyebrow")}</span>
          <h2>{t("featuresPage.gridTitle")}</h2>
        </div>
        <div className="f-small-grid">
          {items.map(i => (
            <div className="f-small" key={i.t}>
              <h4>{i.t}</h4>
              <p>{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const { t, href } = useLanguage();
  const rows = t("featuresPage.rows");
  return (
    <>
      <Nav active="features" />
      <main>
        <Hero />
        {rows.map((row) => <FeatureRow key={row.eyebrow} {...row} />)}
        <Grid />
        <section className="final-cta">
          <div className="container">
            <div className="final-card">
              <h2>{t("featuresPage.finalTitle")}</h2>
              <p>{t("featuresPage.finalBody")}</p>
              <a href={href("download.html")} className="btn btn-app" style={{padding:"16px 24px", fontSize:15}}>{t("featuresPage.finalCta")}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
