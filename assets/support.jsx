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
  const faqs = [
    { cat: "Getting started", items: [
      { q: "How accurate is plant identification?", a: "Moss correctly identifies house plants 98% of the time and garden plants about 95% of the time. When we're unsure, we show a confidence score and a list of similar species so you can pick the right one." },
      { q: "Does Moss work without an internet connection?", a: "Yes. After the first launch, identification and care reminders work entirely on-device. A connection is only needed for rare plants, community help, and syncing across devices." },
      { q: "Is Moss free?", a: "Moss is free to download and try. Moss Pro unlocks unlimited identifications, advanced diagnostics, and multi-household sharing for $3.99/month (or $29.99/year)." },
    ]},
    { cat: "Care & reminders", items: [
      { q: "Why isn't Moss reminding me to water?", a: "Open Settings → Notifications and make sure Moss is allowed to send alerts. If reminders still don't arrive, tell the plant its current pot size and soil — Moss uses those to schedule accurately." },
      { q: "Can I pause reminders while I'm away?", a: "Yes. From the plant detail screen, tap the menu and choose 'Pause care' with an end date. Moss will gently resume your schedule when you return." },
      { q: "My plant looks sick. Can Moss help?", a: "Open the plant, tap 'Diagnose', and take a clear photo of the affected area. Moss compares it against our visual library of 120+ common issues and suggests next steps." },
    ]},
    { cat: "Privacy & data", items: [
      { q: "What does Moss do with my photos?", a: "Photos stay on your device unless you explicitly send one for community help. Identification runs locally using an on-device model." },
      { q: "Can I export my plant history?", a: "Yes. Settings → Data → Export creates a JSON file with every plant, photo, and log entry you've saved." },
      { q: "How do I delete my account?", a: "Settings → Account → Delete account. This permanently removes all data from our servers within 30 days. You can also email support@mossplant.com." },
    ]},
    { cat: "Billing", items: [
      { q: "How do I cancel Moss Pro?", a: "Open the iOS Settings app → tap your name → Subscriptions → Moss → Cancel. Your Pro features remain active until the end of the billing period." },
      { q: "Can I share Pro with my family?", a: "Yes. Moss Pro is included in Apple Family Sharing at no extra cost — up to six people." },
    ]},
  ];

  return (
    <>
      <Nav active="support" />
      <main>
        <section className="page-hero">
          <span className="eyebrow">Support</span>
          <h1>How can we help?</h1>
          <p>Answers to the questions we hear most. Can't find what you're looking for? Write us at <a href="mailto:support@mossplant.com">support@mossplant.com</a>.</p>
        </section>

        <section className="sup-quick">
          <div className="container sup-quick-grid">
            <a href="mailto:support@mossplant.com" className="sup-quick-card">
              <div className="sq-icon">✉</div>
              <h4>Email us</h4>
              <p>Typical reply within one business day.</p>
            </a>
            <a href="contact.html" className="sup-quick-card">
              <div className="sq-icon">💬</div>
              <h4>Contact form</h4>
              <p>Share screenshots and device info easily.</p>
            </a>
            <a href="support.html#faq" className="sup-quick-card">
              <div className="sq-icon">📖</div>
              <h4>User guide</h4>
              <p>Deep-dive tutorials and pro tips.</p>
            </a>
          </div>
        </section>

        <section className="sup-faq" id="faq">
          <div className="container">
            {faqs.map(group => (
              <div className="faq-group" key={group.cat}>
                <h3>{group.cat}</h3>
                <div className="faq-list">
                  {group.items.map((it, i) => (
                    <FaqItem key={it.q} q={it.q} a={it.a} defaultOpen={i === 0 && group.cat === "Getting started"} />
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
