// ------ Moss phone mockup (used across variations) ------
function PhoneMock({ variant = "scan" }) {
  // Three little screen styles
  const screen =
    variant === "scan" ? <ScanScreen /> :
    variant === "library" ? <LibraryScreen /> :
    <CareScreen />;

  return (
    <div className="phone">
      <div className="phone-notch"><div /></div>
      <div className="phone-screen">{screen}</div>
    </div>
  );
}

function ScanScreen() {
  return (
    <div className="pm pm-scan">
      <div className="pm-cam">
        <div className="pm-bracket tl" />
        <div className="pm-bracket tr" />
        <div className="pm-bracket bl" />
        <div className="pm-bracket br" />
        <div className="pm-leaf" aria-hidden="true">
          <svg viewBox="0 0 160 200" width="100%" height="100%">
            <defs>
              <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#8fb085"/>
                <stop offset="1" stopColor="#486b45"/>
              </linearGradient>
            </defs>
            <path d="M80 10 C30 40 20 120 70 180 C120 140 140 60 80 10 Z" fill="url(#lg1)"/>
            <path d="M80 20 L80 175" stroke="#dfe9d8" strokeWidth="2" opacity=".5"/>
            <path d="M80 50 C60 65 50 80 45 100" stroke="#dfe9d8" strokeWidth="1.5" fill="none" opacity=".5"/>
            <path d="M80 50 C100 65 110 80 115 100" stroke="#dfe9d8" strokeWidth="1.5" fill="none" opacity=".5"/>
            <path d="M80 90 C65 105 58 120 55 140" stroke="#dfe9d8" strokeWidth="1.5" fill="none" opacity=".5"/>
            <path d="M80 90 C95 105 102 120 105 140" stroke="#dfe9d8" strokeWidth="1.5" fill="none" opacity=".5"/>
          </svg>
        </div>
        <div className="pm-scanline" />
        <div className="pm-hint">Hold steady — identifying…</div>
      </div>
      <div className="pm-result">
        <div className="pm-result-head">
          <div>
            <div className="pm-name">Monstera deliciosa</div>
            <div className="pm-sub">Swiss cheese plant · 98% match</div>
          </div>
          <div className="pm-badge">✓</div>
        </div>
        <div className="pm-stats">
          <div><span>☀︎</span> Bright indirect</div>
          <div><span>💧</span> Weekly</div>
          <div><span>◐</span> 65–80°F</div>
        </div>
      </div>
    </div>
  );
}

function LibraryScreen() {
  const plants = [
    { name: "Fiona", sp: "Monstera deliciosa", next: "Water in 2 days", hue: "#6f9167" },
    { name: "Basil", sp: "Ficus lyrata", next: "Misting today", hue: "#486b45" },
    { name: "Pepper", sp: "Pilea peperomioides", next: "Rotate pot", hue: "#8fb085" },
    { name: "Sage", sp: "Sansevieria trifasciata", next: "All good", hue: "#5f8c5a" },
  ];
  return (
    <div className="pm pm-lib">
      <div className="pm-head">
        <div className="pm-hello"><span>Good morning,</span><br/>Your garden</div>
        <div className="pm-dot">4</div>
      </div>
      <div className="pm-tabs">
        <span className="on">All</span><span>Needs care</span><span>Happy</span>
      </div>
      <div className="pm-plants">
        {plants.map(p => (
          <div className="pm-plant" key={p.name}>
            <div className="pm-plant-img" style={{background: `radial-gradient(circle at 30% 30%, ${p.hue}, #2d442d)`}}>
              <svg viewBox="0 0 40 50" width="60%" height="60%">
                <path d="M20 5 C8 15 6 35 18 48 C30 38 32 18 20 5 Z" fill="rgba(255,255,255,0.25)"/>
              </svg>
            </div>
            <div className="pm-plant-body">
              <div className="pm-plant-name">{p.name}</div>
              <div className="pm-plant-sp">{p.sp}</div>
              <div className="pm-plant-next">{p.next}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CareScreen() {
  return (
    <div className="pm pm-care">
      <div className="pm-care-top">
        <div className="pm-avatar" style={{background:"radial-gradient(circle at 30% 30%, #8fb085, #2d442d)"}}>
          <svg viewBox="0 0 40 50" width="60%" height="60%"><path d="M20 5 C8 15 6 35 18 48 C30 38 32 18 20 5 Z" fill="rgba(255,255,255,0.3)"/></svg>
        </div>
        <div className="pm-care-name">Fiona</div>
        <div className="pm-care-sp">Monstera deliciosa</div>
      </div>
      <div className="pm-care-ring">
        <svg viewBox="0 0 120 120" width="140" height="140">
          <circle cx="60" cy="60" r="50" fill="none" stroke="#e6efe3" strokeWidth="10"/>
          <circle cx="60" cy="60" r="50" fill="none" stroke="#5f8c5a" strokeWidth="10" strokeLinecap="round" strokeDasharray="220 314" transform="rotate(-90 60 60)"/>
        </svg>
        <div className="pm-care-ring-text">
          <div className="n">3</div>
          <div className="l">days until water</div>
        </div>
      </div>
      <div className="pm-tasks">
        <div className="pm-task">
          <div className="pm-task-dot done" />
          <div><b>Rotate pot</b><span>Today</span></div>
        </div>
        <div className="pm-task">
          <div className="pm-task-dot" />
          <div><b>Water (250 ml)</b><span>Friday</span></div>
        </div>
        <div className="pm-task">
          <div className="pm-task-dot" />
          <div><b>Check for pests</b><span>Next week</span></div>
        </div>
      </div>
    </div>
  );
}

window.PhoneMock = PhoneMock;
