import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const location = useLocation();
  const { language, toggleLanguage, t } = useAppContext();
  
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between px-margin_mobile md:px-margin_desktop max-w-container_max_width mx-auto h-20">
        <div className="flex items-center gap-stack_sm">
          <Link to="/" className="flex items-center gap-stack_sm">
            <span className="material-symbols-outlined text-secondary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
              {language === 'ar' ? 'كود زون' : 'Code Zone'}
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-stack_lg">
          <Link 
            className={`font-body-md transition-colors duration-300 ${isActive('/') ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/"
          >
            {t('nav.home')}
          </Link>
          <Link 
            className={`font-body-md transition-colors duration-300 ${isActive('/work') ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/work"
          >
            {t('nav.work')}
          </Link>
          <Link 
            className={`font-body-md transition-colors duration-300 ${isActive('/about') ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/about"
          >
            {t('nav.about')}
          </Link>
          <Link 
            className={`font-body-md transition-colors duration-300 ${isActive('/contact') ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'}`} 
            to="/contact"
          >
            {t('nav.contact')}
          </Link>
        </div>

        <div className="flex items-center gap-stack_md">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-white/10 text-xs font-bold hover:border-secondary transition-colors text-secondary uppercase"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
          <Link to="/contact" className="bg-secondary text-white px-6 py-2 rounded-full font-bold active:scale-95 transition-transform primary-glow hidden sm:block">
            {t('nav.startProject')}
          </Link>
        </div>
      </div>
    </header>
  );
}
