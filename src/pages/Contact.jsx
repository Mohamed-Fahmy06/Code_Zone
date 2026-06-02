import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
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
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 px-lg max-w-container-max mx-auto">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16 text-center md:text-right relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
          <h1 className="font-display-lg text-[32px] md:text-[48px] mb-4 cyber-gradient-text leading-tight">تواصل معنا</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            نحن هنا لتحويل أفكارك التقنية إلى واقع ملموس. دعنا نبدأ رحلة الابتكار معاً.
          </p>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-lg">
          {/* Contact Form Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl overflow-hidden relative group p-lg border border-white/5 text-right">
            <div className="mb-6 md:mb-8 text-right">
              <h2 className="font-headline-lg text-headline-lg text-on-surface">أرسل لنا استفسارك</h2>
              <div className="w-12 h-1 bg-secondary mt-2 rounded-full ml-auto"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="font-code-label text-[10px] md:text-code-label text-secondary uppercase block">الاسم الكامل</label>
                  <input className="glow-input w-full bg-surface-container-low border border-white/10 focus:ring-0 rounded-xl p-3 md:p-4 text-on-surface outline-none transition-all text-right" placeholder="أحمد محمد" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="font-code-label text-[10px] md:text-code-label text-secondary uppercase block">البريد الإلكتروني</label>
                  <input className="glow-input w-full bg-surface-container-low border border-white/10 focus:ring-0 rounded-xl p-3 md:p-4 text-on-surface outline-none transition-all text-left" dir="ltr" placeholder="email@example.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-code-label text-[10px] md:text-code-label text-secondary uppercase block">نوع المشروع</label>
                <select className="glow-input w-full bg-surface-container-low border border-white/10 focus:ring-0 rounded-xl p-3 md:p-4 text-on-surface outline-none transition-all appearance-none cursor-pointer text-right">
                  <option>تطبيق جوال (iOS/Android)</option>
                  <option>تطبيق ويب متكامل</option>
                  <option>حلول التجارة الإلكترونية</option>
                  <option>خدمات الذكاء الاصطناعي</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-code-label text-[10px] md:text-code-label text-secondary uppercase block">رسالتك</label>
                <textarea className="glow-input w-full bg-surface-container-low border border-white/10 focus:ring-0 rounded-xl p-3 md:p-4 text-on-surface outline-none transition-all text-right" placeholder="أخبرنا المزيد عن رؤيتك..." rows="4" required></textarea>
              </div>
              <button 
                className={`primary-btn-gradient w-full md:w-auto text-white font-title-md px-10 py-3 md:px-12 md:py-4 rounded-xl active:scale-95 transition-all shadow-lg shadow-primary/10 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'idle' && 'إرسال الرسالة'}
                {status === 'sending' && 'جاري الإرسال...'}
                {status === 'success' && 'تم الإرسال بنجاح!'}
              </button>
            </form>
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-lg text-right">
            {/* Details Card */}
            <div className="glass-panel rounded-2xl p-lg relative overflow-hidden border border-white/5">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6 md:mb-8">معلومات التواصل</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-row-reverse items-center gap-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-xl md:text-2xl">call</span>
                  </div>
                  <div>
                    <p className="font-code-label text-[10px] md:text-code-label text-secondary">الهاتف</p>
                    <p className="font-title-md text-base md:text-title-md text-on-surface" dir="ltr">+966 50 123 4567</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center gap-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                    <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-code-label text-[10px] md:text-code-label text-secondary">البريد الإلكتروني</p>
                    <p className="font-title-md text-base md:text-title-md text-on-surface" dir="ltr">hello@codezone.sa</p>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center gap-4 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary/20 transition-colors">
                    <span className="material-symbols-outlined text-xl md:text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-code-label text-[10px] md:text-code-label text-secondary">الموقع</p>
                    <p className="font-title-md text-base md:text-title-md text-on-surface">الرياض، مجمع الابتكار التقني</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
                <p className="font-code-label text-[10px] md:text-code-label text-on-surface-variant mb-4">تابعنا على</p>
                <div className="flex flex-row-reverse gap-4">
                  <a className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-panel flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5" href="#">
                    <span className="material-symbols-outlined text-xl">alternate_email</span>
                  </a>
                  <a className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-panel flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5" href="#">
                    <span className="material-symbols-outlined text-xl">hub</span>
                  </a>
                  <a className="w-10 h-10 md:w-12 md:h-12 rounded-xl glass-panel flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 border border-white/5" href="#">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="glass-panel rounded-2xl overflow-hidden aspect-video lg:flex-grow relative group border border-white/5">
              <div className="absolute inset-0 z-0 bg-cover bg-center grayscale invert contrast-[1.2] brightness-[0.6] group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-MwBD0XCMoCzKLnYOfO4aerTZ9ynk9End_Dz4XxWKEFLmquX1K0gyU9Bjk5iamZJj6TuftFtq9HOswqqDOEsewSayasXzmgp3qsLgIpeV7zDwG692Bp7tSLXiIkzI0yURthT7CshJmpggzarebJATe8BccvRBio-NRXRev2LpkdsBBflm2HUQlHUOcBko0RF8MXUyAO2NG7qugoKjhpzHtd1aDa86_Hr739QjcbRxGRlIgIl_fgN8u6vz0zf5Ez-AKLX8qKT2uocl')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-primary/20 p-4 rounded-full border border-primary/40 animate-pulse shadow-[0_0_30px_rgba(98,0,238,0.3)]">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Social Proof */}
        <div className="mt-16 md:mt-20 glass-panel rounded-2xl overflow-hidden border border-white/10">
          <div className="bg-surface-container-highest px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-xs font-code-label text-on-surface-variant ml-4" dir="ltr">code_zone_v2.0.0 --contact</span>
          </div>
          <div className="p-5 md:p-6 font-code-label text-[10px] md:text-body-sm space-y-2 opacity-80" dir="ltr">
            <p><span className="text-secondary">$</span> codezone contact --init</p>
            <p className="text-primary-fixed-dim">&gt;&gt; Connecting to global innovation network...</p>
            <p className="text-primary-fixed-dim">&gt;&gt; Encryption: AES-256 Active</p>
            <p className="text-secondary">&gt;&gt; Status: Connection Established. Ready for transmission.</p>
            <p><span className="text-secondary">$</span> <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
