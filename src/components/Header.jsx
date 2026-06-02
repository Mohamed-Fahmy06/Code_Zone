import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(98,0,238,0.15)] h-16">
      <div className="flex flex-row-reverse justify-between items-center max-w-container-max mx-auto px-lg h-full">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          <span className="font-headline-lg text-xl md:text-2xl font-black tracking-tighter text-primary">كود زون</span>
        </div>
        <div className="hidden md:flex flex-row-reverse items-center gap-lg">
          <Link 
            className={`font-body-lg text-body-lg transition-colors duration-300 ${isActive('/') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/"
          >
            الرئيسية
          </Link>
          <Link 
            className={`font-body-lg text-body-lg transition-colors duration-300 ${isActive('/work') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/work"
          >
            أعمالنا
          </Link>
          <Link 
            className={`font-body-lg text-body-lg transition-colors duration-300 ${isActive('/about') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/about"
          >
            من نحن
          </Link>
          <Link 
            className={`font-body-lg text-body-lg transition-colors duration-300 ${isActive('/contact') ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/contact"
          >
            اتصل بنا
          </Link>
        </div>
        <Link to="/contact" className="primary-btn-gradient px-md py-1.5 rounded-lg font-title-md text-white active:scale-95 duration-200 text-sm">
          ابدأ مشروعك
        </Link>
      </div>
    </nav>
  );
}
