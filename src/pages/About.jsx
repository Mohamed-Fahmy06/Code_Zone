import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function About() {
  const { t, language } = useAppContext();

  return (
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden px-margin_mobile">
        <div className="max-w-container_max_width mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-stack_sm px-4 py-1 rounded-full bg-surface-container-high/50 border border-white/10 text-secondary font-label-caps text-label-caps mb-6">
            <span className="pulse-animation w-2 h-2 rounded-full bg-secondary"></span>
            <span>{t('about.heroBadge')}</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface leading-tight mb-4">
            {t('about.heroTitle')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            {t('about.heroDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-lg primary-glow active:scale-95 transition-all">
              {t('nav.work')}
            </button>
            <button className="bg-transparent border border-secondary/30 text-secondary px-8 py-3 rounded-lg font-bold text-lg hover:bg-secondary/10 active:scale-95 transition-all">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-stack_xl bg-surface-container-low/30 relative text-start px-margin_mobile">
        <div className="max-w-container_max_width mx-auto grid md:grid-cols-2 gap-stack_xl items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-10 blur group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden glass-card">
              <img 
                alt="Our Story" 
                className="w-full aspect-video object-cover mix-blend-screen opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUUb2n5F_lxbo86I9D8WRxMQ8Pv58KxP2WIJpEfD3-AaYKwvfCLtnD7qMDhAU6-6FJZ7J_cTuEKbt5OhCvoX0r0tenUQ2wOCYLcPA1UgFXh6OTMZ1hQ9nDvL6wPfMNlrnJ6zsgAyNIHYSHlMPeyPSO3hIgCMSzVIJ1dV7VqCfiY_XJq5PU-xuvWOJkpdhnVI9E_224QeDcV50lNg364Ao4x5gT3wpqjhgQapmWJy3lu9ENTWGZRddt7CB_wq3sA0dhLE2fFfrDDv2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface">{t('about.storyTitle')}</h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
              <div className="flex flex-row items-center justify-start gap-8 pt-4">
                <div className="flex flex-col items-start">
                  <span className="text-secondary font-display-lg text-4xl font-bold tracking-tight">+150</span>
                  <span className="text-label-caps text-on-surface-variant mt-1">{t('about.successProjects')}</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col items-start">
                  <span className="text-secondary font-display-lg text-4xl font-bold tracking-tight">+50</span>
                  <span className="text-label-caps text-on-surface-variant mt-1">{t('about.happyClients')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-stack_xl bg-background px-margin_mobile">
        <div className="max-w-container_max_width mx-auto text-center">
          <div className="mb-stack_xl">
            <span className="font-label-caps text-secondary uppercase tracking-widest">{t('about.valuesTitle')}</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">{t('about.valuesSubtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            <div className="glass-card p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary">lightbulb</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-4">{t('about.v1Title')}</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{t('about.v1Desc')}</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group border-t-2 border-t-secondary/30">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary">architecture</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-4">{t('about.v2Title')}</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{t('about.v2Desc')}</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-secondary">support_agent</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-4">{t('about.v3Title')}</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">{t('about.v3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-stack_xl text-center px-margin_mobile">
        <div className="max-w-container_max_width mx-auto">
          <div className="mb-stack_xl text-center">
            <span className="font-label-caps text-secondary uppercase tracking-widest">{t('about.teamTitle')}</span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2">{t('about.teamSubtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed', role: t('about.roles.engineer'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIojCTgtEfx9xFhAIciItXMA2c74WOEXF83pjrTwfAdhmihTv6G4TjMKBiPCkzAo5-8iUBwxUVOr1myLcW5GJyoUwqezjbDskj_rAXQD7Ydio2y6RNUb_wWP2hn-K82c-dYMvwnDoCZ4aRRkhLxLJwYfAkUk3VlCE8R9o8GNgXfZq_odhR6gs9a5hrkw9tswwes1_aQITF8cLX_TDa9hPy22DidMZOvQRtruX6Uz-fR3U8bdhvx3koILlntFjp1l7hg5M25K4Dw4Eg" },
              { name: language === 'ar' ? 'سارة خالد' : 'Sarah Khaled', role: t('about.roles.designer'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwq70Z_BFwZC4LK82KVAjVVagEd7mBDW60kSTVC9EVjjWOQpJ-m3UHTcGi1q__p_zwvi8jFg7_5OwxQ0WhYMOAG8ZqR5RajDFEIGkROy4-gKalh9kFTHC_3UJ-n8erkSWu48h-jQXrtTTvrLQ53fZYwX4mlqs8f4inoDxiEph8P4TQ03bbpKUHppLEJyxfftZCHm8v-AlsGov8dvUL3kfVh4WDWvOmEMmqdKZ7UgcfsXaX7PVOfJNAhjrFgw3LCwObmBQgJ3QyKhd8" },
              { name: language === 'ar' ? 'ياسين علي' : 'Yassin Ali', role: t('about.roles.cloud'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjHNi_A9fwVjp2nYzNUexV3AKXwXyPWBkMcZosELmYSjnNTEOHqcxo7uYVyGX2sdjrIP0v2acGnsPbCPhGuyil8-UKS6hpHdxwEY0LogmLa7Hv7iuvmPDFzsLThvMCRerHoSzCOjDt2WELfxBnlAfqOGirSjO6QmsdBgqV19qmUHKz8o820zqSxSvs3P2fR6SHWZrpaUy7b3Jh54UVYQekvaB7UlVrRRj6pxeDadn11T4IrKTwA-U-Xfv6GNqobZU-nwd7lwanwKMT" },
              { name: language === 'ar' ? 'ليلى حسن' : 'Layla Hassan', role: t('about.roles.consultant'), img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwqEwuUNTpe0o99Kb5Ufcw2AbXhTkVIcCrajZS6CSCqDPysIS_fhsxivytsLkVjGqvH3aBjQzulIqp5EHWcOHbUBH73fqr7LhipWTOWtpaXliBGWwwcioMCMkS-9ak6mk-CZ8J4gOfRzX7zICFwuwXQDYYCvVqL0S7Q0mymQD_kCvQkIqtgPTdvCS7a8M4bbt-zmOHT0liDCmo2PFQKIUS7vWN9ZjaQBFbSq05UGyoR-CpPuSvznntYq6LjYuyWXbVbZJWixx0YD6" }
            ].map((member, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <img alt={member.name} className="w-full aspect-[4/5] object-cover" src={member.img} />
                  <div className="absolute inset-0 border-2 border-secondary/0 group-hover:border-secondary/40 transition-all duration-500 rounded-xl"></div>
                </div>
                <h4 className="font-headline-md text-on-surface mb-1">{member.name}</h4>
                <p className="text-secondary font-label-caps text-xs uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-stack_xl bg-surface-container-low/30 px-margin_mobile">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-surface-container-lowest">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high/50 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="mx-auto font-label-caps text-xs text-on-surface-variant">code_zone_mission.sh</div>
            </div>
            <div className="p-8 font-label-caps text-sm leading-relaxed overflow-x-auto text-left" dir="ltr">
              <p className="text-secondary mb-2">$ cat mission.txt</p>
              <p className="text-on-surface mb-6">"Empowering every company with a robust digital infrastructure for limitless scaling."</p>
              <p className="text-secondary mb-2">$ run diagnostics</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <p className="text-on-surface-variant">[SUCCESS] Strategic Analysis complete</p>
                <p className="text-on-surface-variant">[SUCCESS] Scalable Architecture ready</p>
                <p className="text-on-surface-variant">[SUCCESS] Performance Optimization active</p>
                <p className="text-on-surface-variant">[SUCCESS] Security Protocols verified</p>
              </div>
              <p className="text-secondary mt-6 animate-pulse">_</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
