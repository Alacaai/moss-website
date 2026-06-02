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
  const { t } = useLanguage();
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
        <div className="pm-hint">{t("phone.scanHint")}</div>
      </div>
      <div className="pm-result">
        <div className="pm-result-head">
          <div>
            <div className="pm-name">{t("phone.plantName")}</div>
            <div className="pm-sub">{t("phone.plantSub")}</div>
          </div>
          <div className="pm-badge">✓</div>
        </div>
        <div className="pm-stats">
          <div><span>☀︎</span> {t("phone.bright")}</div>
          <div><span>💧</span> {t("phone.weekly")}</div>
          <div><span>◐</span> {t("phone.temp")}</div>
        </div>
      </div>
    </div>
  );
}

function LibraryScreen() {
  const { t } = useLanguage();
  const hues = ["#6f9167", "#486b45", "#8fb085", "#5f8c5a"];
  const plants = t("phone.plants").map(([name, sp, next], index) => ({ name, sp, next, hue: hues[index] }));
  const tabs = t("phone.tabs");
  return (
    <div className="pm pm-lib">
      <div className="pm-head">
        <div className="pm-hello">{t("phone.greeting")}</div>
        <div className="pm-dot">4</div>
      </div>
      <div className="pm-tabs">
        <span className="on">{tabs[0]}</span><span>{tabs[1]}</span><span>{tabs[2]}</span>
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
  const { t } = useLanguage();
  const tasks = t("phone.tasks");
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
          <div className="l">{t("phone.daysUntilWater")}</div>
        </div>
      </div>
      <div className="pm-tasks">
        <div className="pm-task">
          <div className="pm-task-dot done" />
          <div><b>{tasks[0][0]}</b><span>{tasks[0][1]}</span></div>
        </div>
        <div className="pm-task">
          <div className="pm-task-dot" />
          <div><b>{tasks[1][0]}</b><span>{tasks[1][1]}</span></div>
        </div>
        <div className="pm-task">
          <div className="pm-task-dot" />
          <div><b>{tasks[2][0]}</b><span>{tasks[2][1]}</span></div>
        </div>
      </div>
    </div>
  );
}

window.PhoneMock = PhoneMock;
