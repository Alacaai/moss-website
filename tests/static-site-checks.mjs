import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => readFileSync(path.join(root, file), "utf8");
const htmlFiles = readdirSync(root).filter((file) => file.endsWith(".html"));

assert.equal(htmlFiles.length, 9, "expected the current static HTML page set");

for (const file of htmlFiles) {
  const source = read(file);
  assert.match(source, /uploads\/mossIcon\.png/, `${file} should use mossIcon.png`);
  assert.match(source, /<link rel="apple-touch-icon"/, `${file} should define an Apple touch icon`);
  assert.match(source, /assets\/i18n\.jsx/, `${file} should load the i18n helper`);
  assert.match(source, /referrer/i, `${file} should define a referrer policy`);
  assert.match(source, /Content-Security-Policy/i, `${file} should define a CSP`);

  const externalScripts = [...source.matchAll(/<script[^>]+src="https:\/\/unpkg\.com[^"]+"[^>]*>/g)].map((match) => match[0]);
  assert.ok(externalScripts.length >= 3, `${file} should still load React, ReactDOM, and Babel`);
  for (const script of externalScripts) {
    assert.match(script, /integrity="sha384-[^"]+"/, `${file} external scripts should include SRI`);
    assert.match(script, /crossorigin="anonymous"/, `${file} external scripts should set anonymous CORS`);
  }
}

const allSources = [
  ...htmlFiles.map((file) => read(file)),
  ...readdirSync(path.join(root, "assets"))
    .filter((file) => file.endsWith(".jsx") || file.endsWith(".css"))
    .map((file) => read(path.join("assets", file))),
].join("\n");

assert.doesNotMatch(allSources, /assets\/moss-logo\.png/, "old moss-logo asset should not be referenced");
assert.doesNotMatch(read("index.html"), /tweaks-panel\.jsx/, "public home page should not load the edit tweaks panel");

const i18n = read("assets/i18n.jsx");
assert.match(i18n, /SUPPORTED_LANGUAGES/, "i18n helper should declare supported languages");
assert.match(i18n, /"tr"/, "i18n helper should support Turkish");
assert.match(i18n, /LanguageSwitcher/, "i18n helper should expose a language switcher");

for (const file of ["home.jsx", "features.jsx", "download.jsx", "about.jsx", "support.jsx", "contact.jsx", "phone-mock.jsx"]) {
  assert.match(read(path.join("assets", file)), /useLanguage|I18N|t\(/, `${file} should use shared i18n`);
}

const legal = read("assets/legal-content.jsx");
assert.match(legal, /mossplant@gmail\.com/, "legal content should use the selected support email");
assert.match(legal, /Istanbul|İstanbul/, "legal content should use the selected city");
assert.match(legal, /Turkiye|Türkiye/, "legal content should use the selected country");
assert.match(legal, /terms[\s\S]*privacy[\s\S]*eula/, "legal content should include all legal pages");

for (const file of ["terms.html", "privacy.html", "eula.html"]) {
  const source = read(file);
  assert.match(source, /id="root"/, `${file} should mount the legal renderer`);
  assert.match(source, /id="legal-static-fallback"/, `${file} should include readable legal fallback content`);
  assert.match(source, /mossplant@gmail\.com/, `${file} fallback should use the selected legal contact email`);
  assert.match(source, /assets\/legal-content\.jsx/, `${file} should load translated legal content`);
}

console.log(`Static checks passed for ${htmlFiles.length} HTML pages.`);
