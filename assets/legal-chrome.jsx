// Simple nav/footer mount so policy pages don't need their own JSX
const mount = document.getElementById("chrome-top");
if (mount) ReactDOM.createRoot(mount).render(<Nav active="legal" />);
const footMount = document.getElementById("chrome-bottom");
if (footMount) ReactDOM.createRoot(footMount).render(<Footer />);
