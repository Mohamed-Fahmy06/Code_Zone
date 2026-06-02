import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function OurWork() {
  const { t, language } = useAppContext();
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: t('work.projects.sadeem'), category: 'ecommerce', tech: 'REACT • NODE.JS • STRIPE', desc: t('services.web.desc'), icon: 'shopping_cart', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQegCMx2g9YkgyS2cZIx6iZtXJZoAeOfL15l_toBXPnhOjmPE1ca7GuQzn22vAwtxeMq2Xw-RuIgF2foNxWG-f7lJ0oftsC0l8kLt0CcgbA4C2B45ZzkRoiKbxgeeT8OktgHWnFhF-BSFi8JoiAWIjOc7wGh2UtNKKl17BYQgP80MUJvxRN9r10CthLiAo7sZpsoCm2DJOmhi4kd8yD2wluloIeoGghmF23s0i_-kgoZKo2GVmBTsUJv_nNSO87RurVqdmS987Ddod' },
    { id: 2, title: t('work.projects.masar'), category: 'web', tech: 'VUE 3 • FIREBASE • D3.JS', desc: t('services.web.desc'), icon: 'analytics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZK7vvD55XmZrtswd1-1TgIpc5AQPfgRG2VzQ_V9yT7e3qT5Iu_dpIwKgYGCAB4EF3HeiTKbdyOKsDhQbvqE6cQKdRnaTnYKDlp4_XrpD_yI68RnNrYHq_1iWkSXUdQThm7TH6XEBriEi6G8cNfjp78GN9tfYzodjHMyWL0_qOOAGUKbDMCCaV9kKgNQipt2PUymiQNvhgXzV4erHR-Ze2_ZJ1Fl6lfYJ_bewDwjxXCqvGQvaJP_whwNG_OBjybGhBMW2X6Kv5fFi' },
    { id: 3, title: t('work.projects.ofoq'), category: 'systems', tech: 'PYTHON • DJANGO • POSTGRES', desc: t('services.systems.desc'), icon: 'settings_applications', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxRznAEo-0KCiVRFAQGRcG-oi7W1oymKjPGFfkMqyBN--IsvUvBngZN1n_wgH6dnWG4HQW3K75a55EKsx-BScQWlivOGdFhdSd7lblyUMHdigIojpINs9wVyznqjmITi3BQRYLbBbTYRNO4NHs9n4npjYZFrTKoJN7O6pv0KcoYUu1qen7Hw-80KAo0pyFgZZDZuVi6cOPrrlh8mNExs9ihh2vHvb1Md114I4L8eYTvv4RIuE9BAbP23mh6jpvIvHcv4rJTfdTJUrd' }
  ];

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-primary/10 blur-[120px] rounded-full floating"></div>
          <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-secondary/5 blur-[100px] rounded-full floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section - Always Centered for both languages */}
        <section className="px-lg max-w-container-max mx-auto mb-16 md:mb-20 relative z-10 text-center">
          <h1 className="font-display-lg text-[32px] md:text-[48px] cyber-gradient-text leading-tight mb-4">
            {t('work.title')}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t('work.subtitle')}
          </p>
          {/* View All Button on a separate line below the text, centered */}
          <div className="mt-10">
            <Link to="/work" className="secondary-btn-border px-8 py-2.5 rounded-full font-title-md text-secondary hover:bg-secondary/10 active:scale-95 transition-all inline-block">
              {t('work.viewAll')}
            </Link>
          </div>
        </section>

        {/* Filter System - respecting document direction */}
        <section className="px-lg max-w-container-max mx-auto mb-10 md:mb-12 relative z-10">
          <div className="flex flex-wrap flex-row-reverse justify-center gap-3 md:gap-4 border-b border-white/10 pb-6">
            <button onClick={() => setFilter('all')} className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'all' ? 'bg-secondary/10 border-secondary text-secondary border' : 'bg-white/5 text-on-surface-variant hover:text-secondary'}`}>{t('work.filters.all')}</button>
            <button onClick={() => setFilter('web')} className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'web' ? 'bg-secondary/10 border-secondary text-secondary border' : 'bg-white/5 text-on-surface-variant hover:text-secondary'}`}>{t('work.filters.web')}</button>
            <button onClick={() => setFilter('ecommerce')} className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'ecommerce' ? 'bg-secondary/10 border-secondary text-secondary border' : 'bg-white/5 text-on-surface-variant hover:text-secondary'}`}>{t('work.filters.ecommerce')}</button>
            <button onClick={() => setFilter('systems')} className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'systems' ? 'bg-secondary/10 border-secondary text-secondary border' : 'bg-white/5 text-on-surface-variant hover:text-secondary'}`}>{t('work.filters.systems')}</button>
          </div>
        </section>

        <section className="px-lg max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card rounded-2xl overflow-hidden group text-start">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.img} />
                  <div className="absolute inset-0 bg-surface-container-lowest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <div>
                      <p className="text-primary font-code-label text-[10px] md:text-code-label mb-2 tracking-widest uppercase">{project.tech}</p>
                      <p className="font-body-sm text-on-surface">{project.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-title-md text-title-md text-white">{project.title}</h3>
                    <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">{project.icon}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
