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
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 relative px-margin_mobile">
        {/* Hero Section */}
        <section className="max-w-container_max_width mx-auto mb-16 md:mb-24 text-center">
          <span className="font-label-caps text-secondary uppercase tracking-widest">{t('work.title')}</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2 mb-6">
            {language === 'ar' ? 'نحن نبني المستقبل' : 'We Build The Future'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t('work.subtitle')}
          </p>
        </section>

        {/* Filter System */}
        <section className="max-w-container_max_width mx-auto mb-12 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-8">
            {['all', 'web', 'ecommerce', 'systems'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)} 
                className={`px-8 py-2 rounded-full font-label-caps text-sm transition-all border ${filter === cat ? 'bg-secondary text-white border-secondary primary-glow' : 'bg-white/5 text-on-surface-variant border-transparent hover:border-secondary/50'}`}
              >
                {t(`work.filters.${cat}`)}
              </button>
            ))}
          </div>
        </section>

        <section className="max-w-container_max_width mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card rounded-2xl overflow-hidden group text-start flex flex-col">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-surface-container-high/50 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <div className="relative h-64 overflow-hidden">
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.img} />
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                    <div>
                      <p className="text-secondary font-label-caps text-xs mb-3 tracking-widest uppercase">{project.tech}</p>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">{project.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex justify-between items-center">
                  <h3 className="font-headline-md text-on-surface">{project.title}</h3>
                  <span className="material-symbols-outlined text-secondary text-2xl">{project.icon}</span>
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
