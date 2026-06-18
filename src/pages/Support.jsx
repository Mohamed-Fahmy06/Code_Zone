import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Support() {
  const { t, language } = useAppContext();
  const [status, setStatus] = useState('idle');

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
        <section className="mb-12 md:mb-20 text-center relative">
          <span className="font-label-caps text-secondary uppercase tracking-widest">{t('support.title')}</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mt-2 mb-4 leading-tight">
            {language === 'ar' ? 'مركز المساعدة والخدمات' : 'Help & Support Hub'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t('support.subtitle')}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ticket Form */}
          <div className="lg:col-span-2 glass-card p-8 rounded-2xl border border-white/5 text-start">
            <div className="mb-8">
              <h2 className="font-headline-md text-on-surface">{t('support.ticketTitle')}</h2>
              <p className="text-on-surface-variant mt-2 font-body-md">{t('support.ticketDesc')}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-secondary uppercase block">{t('support.subject')}</label>
                  <input className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-xs text-secondary uppercase block">{t('support.priority')}</label>
                  <select className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none appearance-none cursor-pointer">
                    <option>{t('support.pLow')}</option>
                    <option>{t('support.pMed')}</option>
                    <option>{t('support.pHigh')}</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-xs text-secondary uppercase block">{t('contact.message')}</label>
                <textarea className="w-full bg-surface-container-low border border-white/10 focus:border-secondary rounded-xl p-4 text-on-surface outline-none" rows="6" required></textarea>
              </div>
              <button 
                className="bg-primary text-on-primary font-bold px-12 py-4 rounded-xl active:scale-95 transition-all shadow-lg primary-glow disabled:opacity-50"
                disabled={status === 'sending'}
              >
                {status === 'idle' ? t('support.submit') : status === 'sending' ? t('support.sending') : t('support.success')}
              </button>
            </form>
          </div>

          {/* Quick Help Channels */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl border border-white/5 text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">headset_mic</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-2">{t('support.callTitle')}</h3>
              <p className="font-body-md text-on-surface-variant mb-6" dir="ltr">+966 50 123 4567</p>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-label-caps">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {t('support.status')}
              </span>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/5 text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
              </div>
              <h3 className="font-headline-md text-on-surface mb-2">{t('support.chatTitle')}</h3>
              <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
                {language === 'ar' ? 'تحدث مع أحد خبرائنا مباشرة للحصول على مساعدة فورية وحل سريع لمشكلاتك.' : 'Talk to one of our experts live for immediate assistance and fast problem resolution.'}
              </p>
              <button className="bg-transparent border border-secondary/30 text-secondary w-full py-4 rounded-xl font-bold hover:bg-secondary/10 active:scale-95 transition-all">
                {language === 'ar' ? 'ابدأ المحادثة' : 'Start Chat'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
