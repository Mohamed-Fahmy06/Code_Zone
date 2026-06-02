import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { t } = useAppContext();

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.glow-effect');
      if (glow) {
        const x = e.clientX;
        const y = e.clientY;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden px-lg">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="max-w-container-max mx-auto w-full grid md:grid-cols-2 gap-lg md:gap-xl items-center relative z-10">
            <div className="text-right space-y-md md:space-y-lg">
              <div className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-primary/10 border border-primary/20 text-primary font-code-label text-code-label">
                <span className="pulse-animation w-2 h-2 rounded-full bg-primary"></span>
                {t('hero.badge')}
              </div>
              <h1 className="font-display-lg text-[36px] md:text-[52px] cyber-gradient-text leading-tight">
                {t('hero.title')}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                {t('hero.desc')}
              </p>
              <div className="flex flex-row-reverse items-center justify-start gap-md pt-md">
                <Link to="/contact" className="primary-btn-gradient px-lg py-3 rounded-xl font-title-md text-white active:scale-95 duration-200">
                  {t('hero.startBtn')}
                </Link>
                <Link to="/work" className="secondary-btn-border px-lg py-3 rounded-xl font-title-md text-secondary active:scale-95 duration-200">
                  {t('hero.workBtn')}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="floating relative w-full aspect-square max-w-md">
                <div className="absolute inset-0 glass-panel rounded-3xl rotate-6 scale-95 opacity-50"></div>
                <div className="absolute inset-0 glass-panel rounded-3xl -rotate-3 scale-100 flex items-center justify-center p-lg overflow-hidden border border-white/5">
                  <img 
                    className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-screen" 
                    alt="Futuristic visualization" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4XSXyoaIM_HS1GuyAQ58fztR5-NogblnSHpnfAqBNMu5TLhouvh4b1mk1JmUeMfC0lVGfPS9zrc7UfY_LejbS1hvQlrjEp4kDEmj4afUWMynOVHmiVg-7eRPsTurTD9gb8IVK3gLFtZqxl2WJlfMAdHBB-BY4ycL2SqEruujxoQfYK55ls64h0uvQHfygLCoW7nlpPgvcDi4dftOjsHDl4nZwMPf__MzX9vuOAf-XuDP7DtCLS2KNkPMIYJxGLPTmL0ig0uTFtor"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  <div className="absolute bottom-md right-md text-left font-code-label text-primary/80">
                    <div className="text-xs">SYSTEM_STATUS: ACTIVE</div>
                    <div className="text-xs">PROTOCOL: CYBER_01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 px-lg bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">{t('services.title')}</h2>
              <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-lg">
              {/* Service 1 */}
              <div className="glass-panel p-lg md:p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-lg group-hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(207,189,255,0.1)] ml-auto">
                  <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>language</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-md text-right">{t('services.web.title')}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-right">
                  {t('services.web.desc')}
                </p>
                <div className="mt-lg border-t border-white/5 pt-md text-right">
                  <Link to="/work" className="font-code-label text-code-label text-secondary flex items-center justify-end gap-xs cursor-pointer">
                    {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_back</span>
                  </Link>
                </div>
              </div>
              {/* Service 2 */}
              <div className="glass-panel p-lg md:p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group border-t-2 border-t-secondary/30">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-lg group-hover:bg-secondary/20 transition-colors shadow-[0_0_15px_rgba(70,245,224,0.1)] ml-auto">
                  <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>settings_suggest</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-md text-right">{t('services.systems.title')}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-right">
                  {t('services.systems.desc')}
                </p>
                <div className="mt-lg border-t border-white/5 pt-md text-right">
                  <Link to="/work" className="font-code-label text-code-label text-secondary flex items-center justify-end gap-xs cursor-pointer">
                    {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_back</span>
                  </Link>
                </div>
              </div>
              {/* Service 3 */}
              <div className="glass-panel p-lg md:p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-tertiary/10 flex items-center justify-center mb-lg group-hover:bg-tertiary/20 transition-colors shadow-[0_0_15px_rgba(255,177,196,0.1)] ml-auto">
                  <span className="material-symbols-outlined text-tertiary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>draw</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface mb-md text-right">{t('services.ux.title')}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-right">
                  {t('services.ux.desc')}
                </p>
                <div className="mt-lg border-t border-white/5 pt-md text-right">
                  <Link to="/work" className="font-code-label text-code-label text-secondary flex items-center justify-end gap-xs cursor-pointer">
                    {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_back</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 md:py-20 px-lg">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-row-reverse justify-between items-end mb-12">
              <div className="text-right">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm text-right">{t('work.title')}</h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-right">{t('work.subtitle')}</p>
              </div>
              <Link to="/work" className="text-secondary font-code-label hover:underline">{t('work.viewAll')}</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="FinTech Solution" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlh6h6UiQYR6Lm5jIZx2ZMwroZ584AYNodeyetgubKeTCxNQKRaOGWzRfSLfIlSvyY9rcP0YnHHB2YsJDQfCJTYv3xjwY3UGMDdeLsL8o6_Zwkg96nsRwROixtmuwZWyJkv5p8RqsjLMRigGQcKVqVkoTFXeoNNFfgbkQwo4bc3rTF8PcoCjxk6iZJhc30Ge6cXVgMSx4UaZn6tS60Ibsx_U0GKzOISX-Eg2N4qhoOkPJBEPGjTlzKIsMmYM6GeDzhrnSXpIs79bDP"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-4 group-hover:translate-y-0 transition-transform text-right">
                  <span className="text-secondary font-code-label text-xs uppercase tracking-widest mb-2 block">FinTech Solution</span>
                  <h4 className="font-title-md text-title-md text-white">{t('work.projects.sadeem')}</h4>
                </div>
              </div>
              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="Logistics App" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukkHQmNJBwWrCLMrXyoZWmza_xCanFERnX3YyZ8JueT3apa6cP4vg30i-e6-rXulpaf5gGFaWN3rxGS0g9ADeRTcK_iQmstkTg0GRrvjRGQOs8zJRd_cvZJr3E2gD9b_dIHjA4e3MSgozzebvwOsG0vI9y61JCZ7h_id7j5tEU337k9WiwMxEXwrsWElL0M63HWnPrayv1YL7V5yuOVy799B31Q_8EYVJRPDqS78_lUOrInKaFYZdODIyImKee-Nna61SQ8LpWntM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-4 group-hover:translate-y-0 transition-transform text-right">
                  <span className="text-secondary font-code-label text-xs uppercase tracking-widest mb-2 block">Logistics App</span>
                  <h4 className="font-title-md text-title-md text-white">{t('work.projects.masar')}</h4>
                </div>
              </div>
              {/* Project 3 */}
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="E-commerce" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-XgGUIeLfK7JdT_IgZGrf1jb2i4V9_Q30pBv34rQlmVE-3XX_S05ywUudaPl9vFNpmsvdtdC7L6jtkmbhFETfjKYPseTvS0QIYlosQYbrMuSfFTof7MHTzlrApIBjtfu618EX1FxbwmrYAZeBvoEZz3XCgXe8TWTRtuJk4TsJr5sGmXVf3AbW-RqsOqK16fsdWvquYXuhAqBvN0kKXqaUvul5WlUUjBE27f-nCXfX97I1VUA3dqIeEjgulB9yVDBgxDQDWZpgr-G"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-4 group-hover:translate-y-0 transition-transform text-right">
                  <span className="text-secondary font-code-label text-xs uppercase tracking-widest mb-2 block">E-commerce</span>
                  <h4 className="font-title-md text-title-md text-white">{t('work.projects.ofoq')}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 bg-surface-container-lowest text-right">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">{t('testimonials.title')}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{t('testimonials.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-lg max-w-4xl mx-auto">
              {/* Quote 1 */}
              <div className="glass-panel p-lg md:p-xl rounded-3xl relative">
                <span className="material-symbols-outlined text-primary/20 text-5xl md:text-6xl absolute top-4 left-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-body-lg text-body-lg text-on-surface mb-8 md:mb-xl relative z-10 italic">
                  "{t('testimonials.q1.text')}"
                </p>
                <div className="flex flex-row-reverse items-center justify-start gap-md">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-high border border-primary/30 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <div className="text-right">
                    <div className="font-title-md text-white">{t('testimonials.q1.author')}</div>
                    <div className="font-code-label text-xs text-secondary">{t('testimonials.q1.role')}</div>
                  </div>
                </div>
              </div>
              {/* Quote 2 */}
              <div className="glass-panel p-lg md:p-xl rounded-3xl relative">
                <span className="material-symbols-outlined text-secondary/20 text-5xl md:text-6xl absolute top-4 left-4" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <p className="font-body-lg text-body-lg text-on-surface mb-8 md:mb-xl relative z-10 italic">
                  "{t('testimonials.q2.text')}"
                </p>
                <div className="flex flex-row-reverse items-center justify-start gap-md">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-high border border-secondary/30 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div className="text-right">
                    <div className="font-title-md text-white">{t('testimonials.q2.author')}</div>
                    <div className="font-code-label text-xs text-secondary">{t('testimonials.q2.role')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-lg">
          <div className="max-w-4xl mx-auto glass-panel p-lg md:p-xl rounded-[2rem] text-center border-2 border-primary/20 glow-border">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 md:mb-6">{t('cta.title')}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              {t('cta.desc')}
            </p>
            <Link to="/contact" className="primary-btn-gradient px-lg py-3 rounded-xl font-title-md text-white active:scale-95 duration-200">
              {t('cta.btn')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
