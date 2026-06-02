// Mount translated legal pages from the page marker on the root element.
const legalMount = document.getElementById("root");
if (legalMount) {
  const fallback = document.getElementById("legal-static-fallback");
  if (fallback) fallback.remove();
  ReactDOM.createRoot(legalMount).render(<LegalApp page={legalMount.dataset.legalPage} />);
}
