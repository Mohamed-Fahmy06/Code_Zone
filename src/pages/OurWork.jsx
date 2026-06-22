import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function OurWork() {
  const { t, language } = useAppContext();
  const isRTL = language === 'ar';
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProjects = [
    { id: 1, title: t('work.projects.supermarket.title'), category: 'systems', badge: 'Systems', tech: 'React', desc: t('work.projects.supermarket.desc'), img: '/projects/supermarket.png', github: 'https://github.com/Mohamed-Fahmy06/Supermarket-system', demo: 'https://supermarket-system-delta.vercel.app/' },
    { id: 2, title: t('work.projects.shadow.title'), category: 'systems', badge: 'Systems', tech: 'React', desc: t('work.projects.shadow.desc'), img: '/projects/shadow.png', github: 'https://github.com/Mohamed-Fahmy06/Shadow-stalkers', demo: 'https://shadow-stalkers.vercel.app/' },
    { id: 3, title: t('work.projects.noxe.title'), category: 'web', badge: 'Web', tech: 'React', desc: t('work.projects.noxe.desc'), img: '/projects/noxe.png', github: 'https://github.com/Mohamed-Fahmy06/Noxe', demo: 'https://noxe-dun.vercel.app/' },
    { id: 4, title: t('work.projects.decode1.title'), category: 'web', badge: 'Web', tech: 'React', desc: t('work.projects.decode1.desc'), img: '/projects/decode1.png', github: 'https://github.com/Mohamed-Fahmy06/Decodelabs-Project1', demo: 'https://decodelabs-project1.vercel.app/' },
    { id: 5, title: t('work.projects.codezone_about.title'), category: 'web', badge: 'Web', tech: 'React', desc: t('work.projects.codezone_about.desc'), img: '/projects/codezone_about.png', github: 'https://github.com/Mohamed-Fahmy06/Code-zone-about-page-', demo: 'https://code-zone-about-page-bqyc.vercel.app/' },
    { id: 6, title: t('work.projects.decode2.title'), category: 'ecommerce', badge: 'E-Commerce', tech: 'React', desc: t('work.projects.decode2.desc'), img: '/projects/decode2.png', github: 'https://github.com/Mohamed-Fahmy06/Decodelabs-Project2', demo: 'https://decodelabs-project2.vercel.app/' },
    { id: 7, title: t('work.projects.decode3.title'), category: 'web', badge: 'Web', tech: 'React', desc: t('work.projects.decode3.desc'), img: '/projects/decode3.png', github: 'https://github.com/Mohamed-Fahmy06/Decodelabs_Project3', demo: 'https://decodelabs-project3.vercel.app/' },
    { id: 8, title: t('work.projects.decode4.title'), category: 'systems', badge: 'Systems', tech: 'React', desc: t('work.projects.decode4.desc'), img: '/projects/decode4.png', github: 'https://github.com/Mohamed-Fahmy06/Decodelabs_Project4', demo: 'https://decodelabs-project4.vercel.app/' },
  ];

  const projects = allProjects.filter(p => filter === 'all' || p.category === filter);
  const cardCount = projects.length;

  const getCardStyle = (index) => {
    const total = projects.length;
    let diff = index - currentIndex;
    
    // Adjust diff for infinite loop wrapping
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    
    const absDiff = Math.abs(diff);
    let x, z, rotateY, scale, opacity;

    const cardSpacing = 220; 
    const rotationAngle = 60;
    const scaleFactor = 0.7;
    const depthSpacing = -400;

    if (diff === 0) {
      x = 0;
      z = 150;
      rotateY = 0;
      scale = 1.15;
      opacity = 1;
    } else {
      const dir = diff > 0 ? 1 : -1;
      x = (diff * cardSpacing) + (dir * 80);
      z = depthSpacing - (absDiff * 150);
      rotateY = -dir * rotationAngle;
      scale = Math.pow(scaleFactor, absDiff);
      opacity = Math.max(0, 1 - (absDiff * 0.4));
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: Math.round(100 - absDiff),
      pointerEvents: diff === 0 ? 'auto' : 'none',
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
          <div className="max-w-container_max_width mx-auto px-margin_mobile text-center mb-6 relative z-10">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              {language === 'ar' ? 'معرض المشاريع' : 'Project Exhibition'}
            </h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mt-3 rounded-full opacity-50"></div>
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
                    <div className="carousel-card-content text-start flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-label-caps text-[10px] px-2 py-0.5 bg-secondary/20 rounded text-secondary border border-secondary/30 uppercase">
                          {project.badge}
                        </span>
                        <span className="font-label-caps text-[10px] px-2 py-0.5 bg-surface-container rounded text-on-surface-variant uppercase">
                          {project.tech}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-lg text-on-surface mb-1 leading-tight line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-on-surface-variant font-body-md text-sm leading-relaxed opacity-80 line-clamp-2 mt-1 mb-3">
                        {project.desc}
                      </p>

                      <div className="flex gap-3 mt-auto pt-3 border-t border-white/5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] text-on-surface-variant hover:text-white"
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-secondary text-white rounded-lg text-xs font-semibold transition-all primary-glow hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <span className="material-symbols-outlined text-sm">open_in_new</span>
                          <span>Demo</span>
                        </a>
                      </div>
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
          <div className="flex justify-center gap-8 mt-10 relative z-30">
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
