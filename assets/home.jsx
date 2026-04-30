// ----- Moss home page ------
const { useEffect, useState } = React;

/*EDITMODE-BEGIN*/
const TWEAK_DEFAULTS_JSON = {
  "heroVariant": "calm",
  "accent": "sage"
};
/*EDITMODE-END*/

// --- Hero variations ---------------------------------------------------------
function HeroCalm() {
  return (
    <section className="hero hero-calm">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Plant identifier &amp; care · iOS</span>
          <h1>Any plant, <em>understood</em>.<br/>Every leaf, <em>thriving</em>.</h1>
          <p>Point your camera at a plant to identify it in seconds. Moss learns your home and sends gentle reminders so your greenery never misses a drink.</p>
          <div className="hero-cta">
            <a href="download.html" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.51-4.43-1.37-2-3.5-2.28-4.26-2.31-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.87-1.01-1.99.03-3.82 1.16-4.84 2.94-2.07 3.58-.53 8.88 1.49 11.8.98 1.43 2.15 3.03 3.68 2.97 1.48-.06 2.04-.96 3.83-.96 1.78 0 2.29.96 3.85.93 1.59-.03 2.59-1.45 3.56-2.89 1.12-1.66 1.58-3.27 1.61-3.35-.04-.02-3.08-1.18-3.11-4.68zM14.2 3.5c.81-1 1.36-2.37 1.21-3.75-1.17.05-2.6.79-3.44 1.77-.75.86-1.41 2.26-1.24 3.6 1.31.1 2.64-.66 3.47-1.62z"/></svg>
              Download for iOS
            </a>
            <a href="features.html" className="btn btn-ghost">See features →</a>
          </div>
          <div className="hero-meta">
            <div><strong>14,000+</strong><span>plant species</span></div>
            <div><strong>4.8 ★</strong><span>App Store rating</span></div>
            <div><strong>Free</strong><span>to try</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <PhoneMock variant="scan" />
        </div>
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="hero hero-editorial">
      <div className="container">
        <div className="edi-top">
          <span className="edi-label">№01 — Spring issue · Moss for iOS</span>
        </div>
        <div className="edi-grid">
          <div className="edi-left">
            <h1>A quieter way to keep plants <em>happy</em>.</h1>
          </div>
          <div className="edi-right">
            <p>Moss is a pocket-sized plant keeper — identification, watering, light and humidity, all in one kind app. Built for people who love their plants more than their spreadsheets.</p>
            <div className="hero-cta">
              <a href="download.html" className="btn btn-primary">Download for iOS</a>
              <a href="features.html" className="btn btn-ghost">Read features</a>
            </div>
          </div>
        </div>
        <div className="edi-figure">
          <div className="edi-figure-leaves" aria-hidden="true">
            <svg viewBox="0 0 800 300" width="100%" height="100%" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edi-g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#8fb085"/>
                  <stop offset="1" stopColor="#2d442d"/>
                </linearGradient>
              </defs>
              <path d="M50 260 C 120 120 220 100 300 200 C 330 240 360 260 400 260 Z" fill="url(#edi-g)" opacity=".25"/>
              <path d="M180 280 C 260 120 380 120 460 220 Z" fill="url(#edi-g)" opacity=".45"/>
              <path d="M360 290 C 420 140 560 140 640 250 Z" fill="url(#edi-g)" opacity=".7"/>
              <path d="M540 290 C 600 170 740 190 790 270 Z" fill="url(#edi-g)"/>
            </svg>
          </div>
          <div className="edi-phone"><PhoneMock variant="library" /></div>
          <figcaption>Fig. 1 — Your garden, always close at hand.</figcaption>
        </div>
      </div>
    </section>
  );
}

function HeroPlayful() {
  return (
    <section className="hero hero-playful">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="play-sticker">
            <span>🌱</span> New · Smart care coach
          </div>
          <h1>Meet <span className="underline-wavy">Moss</span> — the friendliest way to <em>parent a plant</em>.</h1>
          <p>Identify 14,000+ species in a snap. Get reminders that actually fit your plant's mood. Build a little indoor jungle you're proud of.</p>
          <div className="hero-cta">
            <a href="download.html" className="btn btn-primary">Get Moss — free</a>
            <a href="features.html" className="btn btn-ghost">How it works</a>
          </div>
        </div>
        <div className="hero-visual play-visual">
          <div className="play-ring play-ring-1" />
          <div className="play-ring play-ring-2" />
          <div className="play-chip play-chip-water">💧 Water Friday</div>
          <div className="play-chip play-chip-light">☀︎ Bright indirect</div>
          <div className="play-chip play-chip-match">✓ 98% match</div>
          <PhoneMock variant="care" />
        </div>
      </div>
    </section>
  );
}

// --- Shared home sections ----------------------------------------------------
function Features() {
  const items = [
    { icon: <IconCamera />, title: "Instant identification", desc: "Snap a photo, get the species, common names, and toxicity in under two seconds." },
    { icon: <IconDrop />, title: "Smart watering", desc: "Reminders tuned to each plant's light, pot size, and your local weather." },
    { icon: <IconSun />, title: "Light checker", desc: "Point at a window to measure lux and find the happiest spot in your home." },
    { icon: <IconHeart />, title: "Health diagnosis", desc: "Upload a troubled leaf — Moss spots pests, nutrient gaps, and over-watering." },
    { icon: <IconBook />, title: "Care library", desc: "Friendly guides for 14,000+ species, written with scientists and growers." },
    { icon: <IconBell />, title: "Gentle nudges", desc: "No pushy notifications. Just the right reminder, at the right moment." },
  ];
  return (
    <section className="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What's inside</span>
          <h2>Everything your plants need, nothing they don't.</h2>
        </div>
        <div className="feat-grid">
          {items.map(f => (
            <div className="feat" key={f.title}>
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Scan", d: "Open the camera and frame any plant. Works on photos too." },
    { n: "02", t: "Identify", d: "Moss names the species and pulls its complete care profile." },
    { n: "03", t: "Care", d: "Build a routine that adapts to season, pot, and your schedule." },
  ];
  return (
    <section className="howto">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2>Three gentle steps from stranger to sprout-parent.</h2>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="step-n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote">
      <div className="container">
        <div className="quote-card">
          <svg className="quote-mark" width="60" height="48" viewBox="0 0 60 48" fill="none" aria-hidden="true">
            <path d="M0 48V28C0 12 9 2 24 0L26 8C16 11 10 17 10 24H24V48H0ZM34 48V28C34 12 43 2 58 0L60 8C50 11 44 17 44 24H58V48H34Z" fill="currentColor"/>
          </svg>
          <p>"I've killed more plants than I'd like to admit. Moss is the first app that actually <em>taught</em> me what my pothos needed — and it's been thriving for eight months."</p>
          <div className="quote-by">
            <div className="quote-avatar" aria-hidden="true">L</div>
            <div>
              <b>Leila K.</b>
              <span>Brooklyn, NY · 12 plants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-card">
          <div className="final-leaves" aria-hidden="true">
            <svg viewBox="0 0 400 200" width="100%" height="100%" preserveAspectRatio="none">
              <path d="M-10 180 C 100 60 250 60 410 180 Z" fill="rgba(255,255,255,0.08)"/>
              <path d="M-10 200 C 140 100 260 100 410 200 Z" fill="rgba(255,255,255,0.12)"/>
            </svg>
          </div>
          <h2>Plant confidence,<br/>delivered one leaf at a time.</h2>
          <p>Free on iPhone. Works offline. No account required to try.</p>
          <a href="download.html" className="btn btn-app" style={{padding:"16px 24px", fontSize:15}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.51-4.43-1.37-2-3.5-2.28-4.26-2.31-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.87-1.01-1.99.03-3.82 1.16-4.84 2.94-2.07 3.58-.53 8.88 1.49 11.8.98 1.43 2.15 3.03 3.68 2.97 1.48-.06 2.04-.96 3.83-.96 1.78 0 2.29.96 3.85.93 1.59-.03 2.59-1.45 3.56-2.89 1.12-1.66 1.58-3.27 1.61-3.35-.04-.02-3.08-1.18-3.11-4.68zM14.2 3.5c.81-1 1.36-2.37 1.21-3.75-1.17.05-2.6.79-3.44 1.77-.75.86-1.41 2.26-1.24 3.6 1.31.1 2.64-.66 3.47-1.62z"/></svg>
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Icons -------------------------------------------------------------------
function IconCamera() { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 8h3l2-3h6l2 3h3v10H4z"/><circle cx="12" cy="13" r="4"/></svg>); }
function IconDrop()   { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/></svg>); }
function IconSun()    { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17.1 17.1l2 2M19.1 4.9l-2 2M6.9 17.1l-2 2"/></svg>); }
function IconHeart()  { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>); }
function IconBook()   { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>); }
function IconBell()   { return (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>); }

// --- App ---------------------------------------------------------------------
function App() {
  const [tweaks, setTweaks] = useTweaks(TWEAK_DEFAULTS_JSON);

  const Hero =
    tweaks.heroVariant === "editorial" ? HeroEditorial :
    tweaks.heroVariant === "playful"   ? HeroPlayful :
    HeroCalm;

  return (
    <>
      <Nav active="home" />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Quote />
        <FinalCta />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Home hero style">
          <TweakRadio
            value={tweaks.heroVariant}
            onChange={v => setTweaks({ heroVariant: v })}
            options={[
              { value: "calm",      label: "Calm — split hero with phone" },
              { value: "editorial", label: "Editorial — magazine layout" },
              { value: "playful",   label: "Playful — stickers & chips" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
