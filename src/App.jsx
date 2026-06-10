import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import LoadingIntro from './components/LoadingIntro';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start showing main content as the jump transition begins
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4200);

    // Completely remove intro from DOM after the jump finishes
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <>
      {showIntro && <LoadingIntro />}
      {showContent && (
        <div className="main-content-fade">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<OurWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
