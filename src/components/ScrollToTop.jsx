import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[60] bg-secondary text-white rounded-[25%] shadow-[0_0_20px_rgba(99,3,48,0.4)] transition-all duration-500 hover:bg-white hover:text-secondary hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:-translate-y-1 active:scale-95 flex items-center justify-center w-14 h-14 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-3xl font-bold">arrow_upward</span>
    </button>
  );
}
