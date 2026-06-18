import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Contact() {
  const { t, language } = useAppContext();
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 px-margin_mobile max-w-container_max_width mx-auto">
        {/* Hero Section */}
        <section className="mb-12 md:mb-20 text-center relative">
          <span className="font-label-caps text-secondary uppercase tracking-widest">{t('contact.title')}</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mt-2 mb-4 leading-tight">
            {language === 'ar' ? 'نحول فكرتك إلى واقع' : 'Transforming Vision Into Reality'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('contact.desc')}
          </p>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl overflow-hidden relative group p-8 border border-white/5 text-start">
            <div className="mb-8 text-start">
              <h2 className="font-headline-md text-on-surface">
                {t('contact.formTitle')}
              </h2>
              <div className="w-12 h-1 bg-secondary mt-2 rounded-full"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 text-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-secondary uppercase block">
                    {t('contact.name')}
                  </label>
                  <input className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none transition-all text-start" placeholder={t('contact.placeholders.name')} type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-secondary uppercase block">
                    {t('contact.email')}
                  </label>
                  <input className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none transition-all text-left" dir="ltr" placeholder="hello@example.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-xs text-secondary uppercase block">
                  {t('contact.projectType')}
                </label>
                <select className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none transition-all appearance-none cursor-pointer text-start">
                  <option>{t('contact.types.mobile')}</option>
                  <option>{t('contact.types.web')}</option>
                  <option>{t('contact.types.ecommerce')}</option>
                  <option>{t('contact.types.ai')}</option>
                  <option>{t('contact.types.other')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-xs text-secondary uppercase block">
                  {t('contact.message')}
                </label>
                <textarea className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none transition-all text-start" placeholder={t('contact.placeholders.message')} rows="4" required></textarea>
              </div>
              <button 
                className={`bg-primary text-on-primary font-bold px-12 py-4 rounded-xl active:scale-95 transition-all shadow-lg primary-glow ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'idle' && t('contact.sendBtn')}
                {status === 'sending' && t('contact.sending')}
                {status === 'success' && t('contact.success')}
              </button>
            </form>
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-start">
            {/* Details Card */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-white/5">
              <h3 className="font-headline-md text-on-surface mb-8">
                {t('contact.infoTitle')}
              </h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-xs text-secondary">{t('contact.phone')}</p>
                    <p className="font-body-lg text-on-surface" dir="ltr">+966 50 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-xs text-secondary">{t('contact.email')}</p>
                    <p className="font-body-lg text-on-surface" dir="ltr">hello@codezone.sa</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-xs text-secondary">{t('contact.location')}</p>
                    <p className="font-body-lg text-on-surface">{t('contact.locationVal')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="font-label-caps text-xs text-on-surface-variant mb-4">{t('contact.follow')}</p>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5">
                    <span className="material-symbols-outlined text-xl">data_object</span>
                  </button>
                  <button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </button>
                  <button className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5">
                    <span className="material-symbols-outlined text-xl">language</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden aspect-video lg:flex-grow relative group border border-white/5">
              <div className="absolute inset-0 z-0 bg-cover bg-center grayscale invert contrast-[1.2] brightness-[0.6] group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-MwBD0XCMoCzKLnYOfO4aerTZ9ynk9End_Dz4XxWKEFLmquX1K0gyU9Bjk5iamZJj6TuftFtq9HOswqqDOEsewSayasXzmgp3qsLgIpeV7zDwG692Bp7tSLXiIkzI0yURthT7CshJmpggzarebJATe8BccvRBio-NRXRev2LpkdsBBflm2HUQlHUOcBko0RF8MXUyAO2NG7qugoKjhpzHtd1aDa86_Hr739QjcbRxGRlIgIl_fgN8u6vz0zf5Ez-AKLX8qKT2uocl')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-secondary/20 p-4 rounded-full border border-secondary/40 animate-pulse shadow-[0_0_30px_rgba(99,3,48,0.3)]">
                  <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Social Proof */}
        <div className="mt-16 md:mt-24 glass-card rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-surface-container-high/50 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <span className="text-xs font-label-caps text-on-surface-variant ml-4" dir="ltr">code_zone_v2.0.0 --contact</span>
          </div>
          <div className="p-6 font-label-caps text-xs md:text-sm space-y-2 opacity-80 text-start" dir="ltr">
            <p><span className="text-secondary">$</span> codezone contact --init</p>
            <p className="text-on-surface-variant">&gt;&gt; Connecting to global innovation network...</p>
            <p className="text-on-surface-variant">&gt;&gt; Encryption: AES-256 Active</p>
            <p className="text-secondary">&gt;&gt; Status: Connection Established. Ready for transmission.</p>
            <p><span className="text-secondary">$</span> <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
