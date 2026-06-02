const { useState } = React;

function App() {
  const { t } = useLanguage();
  const topics = t("contact.form.topics");
  const [form, setForm] = useState({ name: "", email: "", topicIndex: 0, message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const topic = topics[form.topicIndex] || topics[0];
    const subject = encodeURIComponent(`[Moss Website] ${topic}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${topic}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:mossplant@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Nav active="contact" />
      <main>
        <section className="page-hero">
          <span className="eyebrow">{t("contact.eyebrow")}</span>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.body")}</p>
        </section>

        <section className="ct-sec">
          <div className="container ct-grid">
            <div className="ct-info">
              {t("contact.cards").map(([title, value, body]) => (
                <div className="ct-card" key={title}>
                  <h4>{title}</h4>
                  {value.includes("@") ? <a href={`mailto:${value}`}>{value}</a> : <p>{value}</p>}
                  {body && <p>{body}</p>}
                </div>
              ))}
            </div>

            <form className="ct-form" onSubmit={onSubmit}>
              {sent ? (
                <div className="ct-sent">
                  <div className="ct-sent-icon">✓</div>
                  <h3>{t("contact.form.sentTitle")}</h3>
                  <p>{t("contact.form.sentBody")} <b>{form.email || t("contact.form.fallbackEmail")}</b>.</p>
                </div>
              ) : (
                <>
                  <div className="ct-field">
                    <label>{t("contact.form.name")}</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="ct-field">
                    <label>{t("contact.form.email")}</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="ct-field">
                    <label>{t("contact.form.topic")}</label>
                    <select value={form.topicIndex} onChange={e => setForm({ ...form, topicIndex: Number(e.target.value) })}>
                      {topics.map((topic, index) => <option key={topic} value={index}>{topic}</option>)}
                    </select>
                  </div>
                  <div className="ct-field">
                    <label>{t("contact.form.message")}</label>
                    <textarea rows="6" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary">{t("contact.form.send")}</button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
