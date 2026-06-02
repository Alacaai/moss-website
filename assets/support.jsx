const { useState } = React;

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

function App() {
  const { t, href } = useLanguage();
  const faqs = t("support.faqs").map(([cat, items]) => ({
    cat,
    items: items.map(([q, a]) => ({ q, a })),
  }));

  return (
    <>
      <Nav active="support" />
      <main>
        <section className="page-hero">
          <span className="eyebrow">{t("support.eyebrow")}</span>
          <h1>{t("support.title")}</h1>
          <p>{t("support.body")}</p>
        </section>

        <section className="sup-quick">
          <div className="container sup-quick-grid">
            {t("support.quick").map(([icon, title, body, target]) => (
              <a href={href(target)} className="sup-quick-card" key={title}>
                <div className="sq-icon">{icon}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="sup-faq" id="faq">
          <div className="container">
            {faqs.map((group, groupIndex) => (
              <div className="faq-group" key={group.cat}>
                <h3>{group.cat}</h3>
                <div className="faq-list">
                  {group.items.map((it, i) => (
                    <FaqItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0 && groupIndex === 0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
