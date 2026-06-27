// ------ Moss phone mockup: a real app screenshot inside a device frame ------
const PHONE_SHOTS = {
  scan: "uploads/screens/home.jpg",
  library: "uploads/screens/dashboard.jpg",
  care: "uploads/screens/plant-detail.jpg",
  info: "uploads/screens/plant-info.jpg",
  guide: "uploads/screens/care-guide.jpg",
  chat: "uploads/screens/assistant.jpg",
};

function PhoneMock({ variant = "scan" }) {
  const { t } = useLanguage();
  const src = PHONE_SHOTS[variant] || PHONE_SHOTS.scan;
  return (
    <div className="phone">
      <div className="phone-screen">
        <img
          src={src}
          alt={t("phone.alts." + variant, "Moss app screenshot")}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

window.PhoneMock = PhoneMock;
