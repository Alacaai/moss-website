const { useState } = React;

function App() {
  const [form, setForm] = useState({ name: "", email: "", topic: "General question", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent(`[Moss Website] ${form.topic}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:support@mossplant.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Nav active="contact" />
      <main>
        <section className="page-hero">
          <span className="eyebrow">Contact</span>
          <h1>Say hello.</h1>
          <p>Questions, feedback, bug reports, or just plant pictures — we read every message.</p>
        </section>

        <section className="ct-sec">
          <div className="container ct-grid">
            <div className="ct-info">
              <div className="ct-card">
                <h4>Email</h4>
                <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>
                <p>We reply within one business day.</p>
              </div>
              <div className="ct-card">
                <h4>Press</h4>
                <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>
                <p>For interviews, review copies, and media kits.</p>
              </div>
              <div className="ct-card">
                <h4>Mailing address</h4>
                <p>Istanbul / Turkiye</p>
              </div>
            </div>

            <form className="ct-form" onSubmit={onSubmit}>
              {sent ? (
                <div className="ct-sent">
                  <div className="ct-sent-icon">✓</div>
                  <h3>Thanks — we got it.</h3>
                  <p>You'll hear back from us at <b>{form.email || "your email"}</b> shortly.</p>
                </div>
              ) : (
                <>
                  <div className="ct-field">
                    <label>Your name</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="ct-field">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="ct-field">
                    <label>Topic</label>
                    <select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })}>
                      <option>General question</option>
                      <option>Bug report</option>
                      <option>Billing & subscriptions</option>
                      <option>Feature request</option>
                      <option>Press & partnerships</option>
                    </select>
                  </div>
                  <div className="ct-field">
                    <label>Message</label>
                    <textarea rows="6" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary">Send message</button>
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
