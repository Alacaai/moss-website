function App() {
  return (
    <>
      <Nav active="about" />
      <main>
        <section className="ab-hero">
          <div className="container">
            <span className="eyebrow">About</span>
            <h1>We build tools that make plant care feel like <em>a kindness</em>, not a chore.</h1>
          </div>
        </section>

        <section className="ab-story">
          <div className="container ab-story-grid">
            <div>
              <h3>Our story</h3>
              <p>Moss began in a sunlit Brooklyn apartment in 2023, when a wilting monstera convinced three friends that plant care software could be warmer, smarter, and far less nagging than what they'd tried.</p>
              <p>Today we're a small team of designers, botanists, and iOS engineers scattered across four cities. We obsess over two things: identification accuracy, and the tone of every single notification we send.</p>
              <p>Moss is independent, self-funded, and proud to charge a simple, honest price for Pro. We'll never sell your data, and we'll never interrupt you with ads.</p>
            </div>
            <div className="ab-figures">
              <div className="ab-stat">
                <span className="n">14k+</span>
                <span className="l">species identified</span>
              </div>
              <div className="ab-stat">
                <span className="n">230k</span>
                <span className="l">plants being cared for</span>
              </div>
              <div className="ab-stat">
                <span className="n">4.8 ★</span>
                <span className="l">average rating</span>
              </div>
              <div className="ab-stat">
                <span className="n">12</span>
                <span className="l">humans on the team</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ab-values">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">What we believe</span>
              <h2>Gentle software for living things.</h2>
            </div>
            <div className="ab-value-grid">
              <div className="ab-value">
                <div className="ab-v-n">01</div>
                <h4>Quiet by default</h4>
                <p>We count every notification. If it isn't useful, we don't send it.</p>
              </div>
              <div className="ab-value">
                <div className="ab-v-n">02</div>
                <h4>Accurate, with humility</h4>
                <p>We show confidence scores and surface alternatives. A plant is not a guess.</p>
              </div>
              <div className="ab-value">
                <div className="ab-v-n">03</div>
                <h4>Private, on purpose</h4>
                <p>Photos stay on-device unless you ask us to help identify a tricky one.</p>
              </div>
              <div className="ab-value">
                <div className="ab-v-n">04</div>
                <h4>Honest pricing</h4>
                <p>No dark patterns, no tricks. Cancel anytime in one tap.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="final-card">
              <h2>Join us on the journey.</h2>
              <p>Give Moss a try — your plants will thank you.</p>
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
