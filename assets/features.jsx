const { useEffect, useState } = React;

function Hero() {
  return (
    <section className="page-hero">
      <span className="eyebrow">Features</span>
      <h1>A kind companion for every plant in your home.</h1>
      <p>Moss combines a state-of-the-art plant identifier with a care system that actually adapts — to your light, your pot, your schedule, and the seasons.</p>
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
  const items = [
    { t: "Works offline", d: "Identify plants anywhere — no signal required." },
    { t: "No ads, ever", d: "A calm experience, funded by its users." },
    { t: "Family sharing", d: "One subscription covers your whole household." },
    { t: "HomeKit friendly", d: "Sync reminders with your smart home routines." },
    { t: "Privacy first", d: "Your photos stay on-device unless you share them." },
    { t: "Seasonal tuning", d: "Care plans shift with daylight and humidity." },
  ];
  return (
    <section className="f-grid-sec">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">And a few small delights</span>
          <h2>Thoughtful, to the roots.</h2>
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
  return (
    <>
      <Nav active="features" />
      <main>
        <Hero />
        <FeatureRow
          eyebrow="Identify"
          title="Know the name of every plant you meet."
          desc="Moss identifies 14,000+ species from a single photo — house plants, garden plants, succulents, cacti, and trees. It works on leaves, flowers, bark, or whole plants."
          bullets={["Confidence score and similar species", "Toxicity flags for pets and children", "Local vs. invasive species notes"]}
          variant="scan"
        />
        <FeatureRow
          eyebrow="Organize"
          title="A garden that lives in your pocket."
          desc="Give every plant a name, a home, and a photo history. Moss remembers where each one lives so reminders stay tuned to its specific light and temperature."
          bullets={["Auto-grouped by room and light", "Photo timeline for every plant", "Quick-swipe to log water, food, and mist"]}
          variant="library"
          reverse
        />
        <FeatureRow
          eyebrow="Care"
          title="Reminders that listen before they nudge."
          desc="Moss adapts to your local weather and each plant's pot size. Skip a day? Moss re-plans. Going away? Schedule a pause — your plants will forgive you."
          bullets={["Weather-aware watering", "Gentle fertilizer & misting schedules", "Diagnose yellowing leaves with a photo"]}
          variant="care"
        />
        <Grid />
        <section className="final-cta">
          <div className="container">
            <div className="final-card">
              <h2>Ready to grow?</h2>
              <p>Free on iPhone. Pro features optional.</p>
              <a href="download.html" className="btn btn-app" style={{padding:"16px 24px", fontSize:15}}>Download on the App Store</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
