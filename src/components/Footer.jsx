import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Footer() {
  const { t, language } = useAppContext();

  return (
    <footer className="w-full py-stack_xl bg-background border-t border-white/5">
      <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-margin_desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack_xl mb-stack_xl">
          <div className="flex flex-col gap-stack_md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-headline-md">terminal</span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">
                {language === 'ar' ? 'كود زون' : 'Code Zone'}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-headline-md text-on-surface mb-stack_md text-lg">{t('footer.links')}</h4>
            <ul className="space-y-stack_sm">
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/about">{t('footer.about')}</Link></li>
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/work">{t('footer.services')}</Link></li>
              <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{t('footer.privacy')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-md text-on-surface mb-stack_md text-lg">{t('footer.support')}</h4>
            <ul className="space-y-stack_sm">
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/faq">{t('footer.faq')}</Link></li>
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/support">{t('footer.tickets')}</Link></li>
              <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" to="/contact">{t('footer.direct')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline-md text-on-surface mb-stack_md text-lg">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">data_object</span></button>
              <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">code</span></button>
              <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">language</span></button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-stack_lg border-t border-white/5 gap-stack_md">
          <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">
            {t('footer.rights')}
          </p>
          <div className="flex gap-stack_md">
            <span className="text-on-surface-variant font-label-caps text-[10px]">LATENCY: 12ms</span>
            <span className="text-on-surface-variant font-label-caps text-[10px]">UPTIME: 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
