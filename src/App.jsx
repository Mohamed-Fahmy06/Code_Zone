import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import LoadingIntro from './components/LoadingIntro';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start crystallizing main content slightly before intro fully dissolves
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    // Completely remove intro after it finishes the 800ms dissolve (4.2s + 0.8s)
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 5200);

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
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
