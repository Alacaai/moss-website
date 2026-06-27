function App() {
  const { t } = useLanguage();
  return (
    <>
      <Nav active="download" />
      <main>
        <section className="dl-hero">
          <div className="container dl-inner">
            <div className="dl-copy">
              <span className="eyebrow">{t("download.eyebrow")}</span>
              <h1>{t("download.title")}</h1>
              <p>{t("download.body")}</p>
              <div className="dl-ctas">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-app" style={{padding:"16px 22px", fontSize:15}}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.51-4.43-1.37-2-3.5-2.28-4.26-2.31-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.87-1.01-1.99.03-3.82 1.16-4.84 2.94-2.07 3.58-.53 8.88 1.49 11.8.98 1.43 2.15 3.03 3.68 2.97 1.48-.06 2.04-.96 3.83-.96 1.78 0 2.29.96 3.85.93 1.59-.03 2.59-1.45 3.56-2.89 1.12-1.66 1.58-3.27 1.61-3.35-.04-.02-3.08-1.18-3.11-4.68zM14.2 3.5c.81-1 1.36-2.37 1.21-3.75-1.17.05-2.6.79-3.44 1.77-.75.86-1.41 2.26-1.24 3.6 1.31.1 2.64-.66 3.47-1.62z"/></svg>
                  {t("download.cta")}
                </a>
              </div>
              <div className="dl-qr">
                <div className="dl-qr-box" aria-hidden="true">
                  <svg viewBox="0 0 64 64" width="100%" height="100%">
                    <rect width="64" height="64" fill="#fff"/>
                    {Array.from({length: 144}).map((_, i) => {
                      const x = (i % 12) * 5 + 2;
                      const y = Math.floor(i / 12) * 5 + 2;
                      const on = ((i * 13 + 7) % 3) !== 0;
                      return on ? <rect key={i} x={x} y={y} width="4" height="4" fill="#1b2a1d"/> : null;
                    })}
                    <rect x="2" y="2" width="16" height="16" fill="#fff" stroke="#1b2a1d" strokeWidth="3"/>
                    <rect x="46" y="2" width="16" height="16" fill="#fff" stroke="#1b2a1d" strokeWidth="3"/>
                    <rect x="2" y="46" width="16" height="16" fill="#fff" stroke="#1b2a1d" strokeWidth="3"/>
                    <rect x="7" y="7" width="6" height="6" fill="#1b2a1d"/>
                    <rect x="51" y="7" width="6" height="6" fill="#1b2a1d"/>
                    <rect x="7" y="51" width="6" height="6" fill="#1b2a1d"/>
                  </svg>
                </div>
                <div>
                  <b>{t("download.qrTitle")}</b>
                  <span>{t("download.qrBody")}</span>
                </div>
              </div>
            </div>
            <div className="dl-visual">
              <div className="dl-phone-stack">
                <div className="dl-phone dl-p1"><PhoneMock variant="info" /></div>
                <div className="dl-phone dl-p2"><PhoneMock variant="chat" /></div>
                <div className="dl-phone dl-p3"><PhoneMock variant="guide" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="dl-req">
          <div className="container">
            <div className="dl-req-grid">
              {t("download.requirements").map(([title, body]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
