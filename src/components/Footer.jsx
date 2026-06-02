import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Footer() {
  const { t, language } = useAppContext();

  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest py-10 md:py-12 px-lg">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-xl">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">terminal</span>
            <span className="font-headline-lg-mobile text-xl md:text-2xl font-bold text-primary">
              {language === 'ar' ? 'كود زون' : 'Code Zone'}
            </span>
          </div>
          <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
            {t('footer.desc')}
          </p>
        </div>
        <div>
          <h4 className="font-title-md text-base md:text-title-md text-white mb-6">{t('footer.links')}</h4>
          <ul className="space-y-3">
            <li><Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" to="/about">{t('footer.about')}</Link></li>
            <li><Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" to="/work">{t('footer.services')}</Link></li>
            <li><a className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" href="#">{t('footer.privacy')}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-base md:text-title-md text-white mb-6">{t('footer.support')}</h4>
          <ul className="space-y-3">
            <li><Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" to="/faq">{t('footer.faq')}</Link></li>
            <li><Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" to="/support">{t('footer.tickets')}</Link></li>
            <li><Link className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-all inline-block" to="/contact">{t('footer.direct')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-base md:text-title-md text-white mb-6">{t('footer.follow')}</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </a>
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined text-xl">hub</span>
            </a>
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined text-xl">chat</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="font-body-sm text-xs text-on-surface-variant">{t('footer.rights')}</p>
        <div className="flex gap-lg">
          <span className="text-on-surface-variant font-code-label text-[10px]">LATENCY: 12ms</span>
          <span className="text-on-surface-variant font-code-label text-[10px]">UPTIME: 99.9%</span>
        </div>
      </div>
    </footer>
  );
}
