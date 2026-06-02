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
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 px-lg max-w-container-max mx-auto">
        <section className="mb-12 md:mb-16 text-center md:text-right relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
          <h1 className="font-display-lg text-[32px] md:text-[48px] mb-4 cyber-gradient-text leading-tight">{t('support.title')}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl ml-auto">
            {t('support.subtitle')}
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          {/* Ticket Form */}
          <div className="lg:col-span-2 glass-panel p-8 rounded-2xl border border-white/5 text-right">
            <div className="mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">{t('support.ticketTitle')}</h2>
              <p className="text-on-surface-variant mt-2">{t('support.ticketDesc')}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-code-label text-secondary uppercase block">{t('support.subject')}</label>
                  <input className="glow-input w-full bg-surface-container-low border border-white/10 rounded-xl p-3 text-on-surface outline-none" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-code-label text-secondary uppercase block">{t('support.priority')}</label>
                  <select className="glow-input w-full bg-surface-container-low border border-white/10 rounded-xl p-3 text-on-surface outline-none appearance-none cursor-pointer">
                    <option>{t('support.pLow')}</option>
                    <option>{t('support.pMed')}</option>
                    <option>{t('support.pHigh')}</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-code-label text-secondary uppercase block">{t('contact.message')}</label>
                <textarea className="glow-input w-full bg-surface-container-low border border-white/10 rounded-xl p-3 text-on-surface outline-none" rows="6" required></textarea>
              </div>
              <button 
                className="primary-btn-gradient px-12 py-4 rounded-xl font-title-md text-white active:scale-95 duration-200 disabled:opacity-50"
                disabled={status === 'sending'}
              >
                {status === 'idle' ? t('support.submit') : status === 'sending' ? t('support.sending') : t('support.success')}
              </button>
            </form>
          </div>

          {/* Quick Help Channels */}
          <div className="space-y-lg">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 text-right">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 ml-auto">
                <span className="material-symbols-outlined text-3xl">headset_mic</span>
              </div>
              <h3 className="font-title-md text-white mb-2">{t('support.callTitle')}</h3>
              <p className="text-on-surface-variant text-sm mb-4" dir="ltr">+966 50 123 4567</p>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-code-label">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {t('support.status')}
              </span>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 text-right">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 ml-auto">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
              </div>
              <h3 className="font-title-md text-white mb-2">{t('support.chatTitle')}</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                {language === 'ar' ? 'تحدث مع أحد خبرائنا مباشرة للحصول على مساعدة فورية.' : 'Talk to one of our experts live for immediate assistance.'}
              </p>
              <button className="secondary-btn-border w-full py-3 rounded-xl font-title-md text-secondary hover:bg-secondary/10 active:scale-95 transition-all">
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
