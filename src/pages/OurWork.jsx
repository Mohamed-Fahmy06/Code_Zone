import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function OurWork() {
  const { t, language } = useAppContext();
  const isRTL = language === 'ar';
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProjects = [
    { id: 1, title: t('work.projects.sadeem'), category: 'ecommerce', badge: 'FinTech', tech: 'React', desc: t('services.web.desc'), img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQegCMx2g9YkgyS2cZIx6iZtXJZoAeOfL15l_toBXPnhOjmPE1ca7GuQzn22vAwtxeMq2Xw-RuIgF2foNxWG-f7lJ0oftsC0l8kLt0CcgbA4C2B45ZzkRoiKbxgeeT8OktgHWnFhF-BSFi8JoiAWIjOc7wGh2UtNKKl17BYQgP80MUJvxRN9r10CthLiAo7sZpsoCm2DJOmhi4kd8yD2wluloIeoGghmF23s0i_-kgoZKo2GVmBTsUJv_nNSO87RurVqdmS987Ddod' },
    { id: 2, title: t('work.projects.masar'), category: 'web', badge: 'Logistics', tech: 'Vue 3', desc: t('services.web.desc'), img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZK7vvD55XmZrtswd1-1TgIpc5AQPfgRG2VzQ_V9yT7e3qT5Iu_dpIwKgYGCAB4EF3HeiTKbdyOKsDhQbvqE6cQKdRnaTnYKDlp4_XrpD_yI68RnNrYHq_1iWkSXUdQThm7TH6XEBriEi6G8cNfjp78GN9tfYzodjHMyWL0_qOOAGUKbDMCCaV9kKgNQipt2PUymiQNvhgXzV4erHR-Ze2_ZJ1Fl6lfYJ_bewDwjxXCqvGQvaJP_whwNG_OBjybGhBMW2X6Kv5fFi' },
    { id: 3, title: t('work.projects.ofoq'), category: 'systems', badge: 'E-Commerce', tech: 'Python', desc: t('services.systems.desc'), img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxRznAEo-0KCiVRFAQGRcG-oi7W1oymKjPGFfkMqyBN--IsvUvBngZN1n_wgH6dnWG4HQW3K75a55EKsx-BScQWlivOGdFhdSd7lblyUMHdigIojpINs9wVyznqjmITi3BQRYLbBbTYRNO4NHs9n4npjYZFrTKoJN7O6pv0KcoYUu1qen7Hw-80KAo0pyFgZZDZuVi6cOPrrlh8mNExs9ihh2vHvb1Md114I4L8eYTvv4RIuE9BAbP23mh6jpvIvHcv4rJTfdTJUrd' },
  ];

  const projects = allProjects.filter(p => filter === 'all' || p.category === filter);
  const cardCount = projects.length;

  const getCardStyle = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);
    let x = 0, z = 0, rotateY = 0, scale = 1, opacity = 1;

    if (offset === 0) {
      x = 0; z = 100; rotateY = 0; scale = 1.1; opacity = 1;
    } else {
      const dir = offset > 0 ? 1 : -1;
      x = (offset * 200) + (dir * 80);
      z = -250 - (absOffset * 100);
      rotateY = -dir * 50;
      scale = Math.pow(0.78, absOffset);
      opacity = Math.max(0.15, 1 - absOffset * 0.35);
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 100 - absOffset,
    };
  };

  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % cardCount);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + cardCount) % cardCount);

  const filterLabels = {
    all: language === 'ar' ? 'الكل' : 'All',
    web: language === 'ar' ? 'ويب' : 'Web',
    ecommerce: language === 'ar' ? 'تجارة إلكترونية' : 'E-Commerce',
    systems: language === 'ar' ? 'أنظمة' : 'Systems',
  };

  return (
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />

      <main className="pt-24 pb-16 md:pb-24 relative overflow-hidden">

        {/* ── Hero Section ── */}
        <section className="max-w-container_max_width mx-auto px-margin_mobile mb-16 md:mb-20 text-center">
          <span className="font-label-caps text-secondary uppercase tracking-widest">{t('work.title')}</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface mt-2 mb-4">
            {language === 'ar' ? 'نحن نبني المستقبل' : 'We Build The Future'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {t('work.subtitle')}
          </p>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="max-w-container_max_width mx-auto px-margin_mobile mb-12 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 border-b border-white/10 pb-8">
            {['all', 'web', 'ecommerce', 'systems'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setCurrentIndex(0); }}
                className={`px-8 py-2 rounded-full font-label-caps text-sm transition-all border ${
                  filter === cat
                    ? 'bg-secondary text-white border-secondary primary-glow'
                    : 'bg-white/5 text-on-surface-variant border-transparent hover:border-secondary/50'
                }`}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>
        </section>

        {/* ── Exhibition Gallery ── */}
        <section className="exhibition-gallery">
          {/* Section header */}
          <div className="max-w-container_max_width mx-auto px-margin_mobile text-center mb-16 relative z-10">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {language === 'ar' ? 'معرض المشاريع' : 'Project Exhibition'}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-5 rounded-full opacity-50"></div>
          </div>

          {/* Cover Flow */}
          <div className="carousel-scene">
            <div className="carousel-container">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                  style={getCardStyle(index)}
                >
                  <div className="carousel-card-inner">
                    <div className="carousel-card-img-wrapper">
                      <img alt={project.title} className="carousel-card-img" src={project.img} />
                    </div>
                    <div className="carousel-card-content text-start">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-label-caps text-[10px] px-2 py-0.5 bg-secondary/20 rounded text-secondary border border-secondary/30 uppercase">
                          {project.badge}
                        </span>
                        <span className="font-label-caps text-[10px] px-2 py-0.5 bg-surface-container rounded text-on-surface-variant uppercase">
                          {project.tech}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant font-body-md text-sm leading-relaxed opacity-80 line-clamp-3">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* Floor reflection */}
                  <div className="card-reflection">
                    <img alt="" className="reflection-img" src={project.img} />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Controls — RTL aware */}
          <div className="flex justify-center gap-8 mt-48 relative z-30">
            <button
              onClick={isRTL ? nextSlide : prevSlide}
              aria-label={language === 'ar' ? 'التالي' : 'Previous'}
              className="p-5 bg-surface-container/60 backdrop-blur-md rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20 group"
            >
              <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">
                {isRTL ? 'arrow_forward' : 'arrow_back'}
              </span>
            </button>
            <button
              onClick={isRTL ? prevSlide : nextSlide}
              aria-label={language === 'ar' ? 'السابق' : 'Next'}
              className="p-5 bg-surface-container/60 backdrop-blur-md rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20 group"
            >
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-1 transition-transform">
                {isRTL ? 'arrow_back' : 'arrow_forward'}
              </span>
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
