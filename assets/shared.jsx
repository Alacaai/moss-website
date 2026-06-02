// Shared chrome: Nav + Footer. Requires React and i18n globals.

function Nav({ active }) {
  const { t, href } = useLanguage();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href={href("index.html")} className="nav-logo">
          <img src="uploads/mossIcon.png" alt="Moss" />
          <span>Moss</span>
        </a>
        <div className="nav-links">
          <a href={href("features.html")} className={active === "features" ? "active" : ""}>{t("nav.features")}</a>
          <a href={href("about.html")} className={active === "about" ? "active" : ""}>{t("nav.about")}</a>
          <a href={href("support.html")} className={active === "support" ? "active" : ""}>{t("nav.support")}</a>
          <a href={href("contact.html")} className={active === "contact" ? "active" : ""}>{t("nav.contact")}</a>
        </div>
        <LanguageSwitcher compact />
        <a href={href("download.html")} className="btn btn-primary nav-cta">
          {t("nav.download")}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8m0 0L7.5 3.5M11 7 7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  const { t, href } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="mark">
            <img src="uploads/mossIcon.png" alt="" />
            <span>Moss</span>
          </div>
          <p>{t("footer.description")}</p>
          <div style={{display:"flex", gap:10, marginTop:6}}>
            <a href={href("download.html")} className="btn btn-app" style={{padding:"10px 16px", fontSize:13}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.94 2.4-4.36 2.51-4.43-1.37-2-3.5-2.28-4.26-2.31-1.82-.18-3.55 1.07-4.47 1.07-.93 0-2.35-1.04-3.87-1.01-1.99.03-3.82 1.16-4.84 2.94-2.07 3.58-.53 8.88 1.49 11.8.98 1.43 2.15 3.03 3.68 2.97 1.48-.06 2.04-.96 3.83-.96 1.78 0 2.29.96 3.85.93 1.59-.03 2.59-1.45 3.56-2.89 1.12-1.66 1.58-3.27 1.61-3.35-.04-.02-3.08-1.18-3.11-4.68zM14.2 3.5c.81-1 1.36-2.37 1.21-3.75-1.17.05-2.6.79-3.44 1.77-.75.86-1.41 2.26-1.24 3.6 1.31.1 2.64-.66 3.47-1.62z"/></svg>
              {t("footer.appStore")}
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>{t("footer.product")}</h5>
          <ul>
            <li><a href={href("features.html")}>{t("nav.features")}</a></li>
            <li><a href={href("download.html")}>{t("nav.download")}</a></li>
            <li><a href={href("about.html")}>{t("nav.about")}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t("footer.support")}</h5>
          <ul>
            <li><a href={href("support.html")}>{t("footer.helpCenter")}</a></li>
            <li><a href={href("contact.html")}>{t("nav.contact")}</a></li>
            <li><a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t("footer.legal")}</h5>
          <ul>
            <li><a href={href("privacy.html")}>{t("footer.privacy")}</a></li>
            <li><a href={href("terms.html")}>{t("footer.terms")}</a></li>
            <li><a href={href("eula.html")}>{t("footer.eula")}</a></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t("footer.copyright")}</span>
        <span>{t("footer.made")}</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
