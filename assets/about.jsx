function App() {
  const { t, href } = useLanguage();
  return (
    <>
      <Nav active="about" />
      <main>
        <section className="ab-hero">
          <div className="container">
            <span className="eyebrow">{t("about.eyebrow")}</span>
            <h1>{t("about.title")}</h1>
          </div>
        </section>

        <section className="ab-story">
          <div className="container ab-story-grid">
            <div>
              <h3>{t("about.storyTitle")}</h3>
              {t("about.story").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="ab-figures">
              {t("about.stats").map(([value, label]) => (
                <div className="ab-stat" key={label}>
                  <span className="n">{value}</span>
                  <span className="l">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ab-values">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">{t("about.valuesEyebrow")}</span>
              <h2>{t("about.valuesTitle")}</h2>
            </div>
            <div className="ab-value-grid">
              {t("about.values").map(([number, title, body]) => (
                <div className="ab-value" key={number}>
                  <div className="ab-v-n">{number}</div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="final-card">
              <h2>{t("about.finalTitle")}</h2>
              <p>{t("about.finalBody")}</p>
              <a href={href("download.html")} className="btn btn-app" style={{padding:"16px 24px", fontSize:15}}>{t("about.finalCta")}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
