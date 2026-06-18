import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

export default function OurWork() {
  const { t, language } = useAppContext();
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { id: 1, title: t('work.projects.sadeem'), category: 'ecommerce', tech: 'REACT • NODE.JS • STRIPE', desc: t('services.web.desc'), icon: 'shopping_cart', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQegCMx2g9YkgyS2cZIx6iZtXJZoAeOfL15l_toBXPnhOjmPE1ca7GuQzn22vAwtxeMq2Xw-RuIgF2foNxWG-f7lJ0oftsC0l8kLt0CcgbA4C2B45ZzkRoiKbxgeeT8OktgHWnFhF-BSFi8JoiAWIjOc7wGh2UtNKKl17BYQgP80MUJvxRN9r10CthLiAo7sZpsoCm2DJOmhi4kd8yD2wluloIeoGghmF23s0i_-kgoZKo2GVmBTsUJv_nNSO87RurVqdmS987Ddod' },
    { id: 2, title: t('work.projects.masar'), category: 'web', tech: 'VUE 3 • FIREBASE • D3.JS', desc: t('services.web.desc'), icon: 'analytics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZK7vvD55XmZrtswd1-1TgIpc5AQPfgRG2VzQ_V9yT7e3qT5Iu_dpIwKgYGCAB4EF3HeiTKbdyOKsDhQbvqE6cQKdRnaTnYKDlp4_XrpD_yI68RnNrYHq_1iWkSXUdQThm7TH6XEBriEi6G8cNfjp78GN9tfYzodjHMyWL0_qOOAGUKbDMCCaV9kKgNQipt2PUymiQNvhgXzV4erHR-Ze2_ZJ1Fl6lfYJ_bewDwjxXCqvGQvaJP_whwNG_OBjybGhBMW2X6Kv5fFi' },
    { id: 3, title: t('work.projects.ofoq'), category: 'systems', tech: 'PYTHON • DJANGO • POSTGRES', desc: t('services.systems.desc'), icon: 'settings_applications', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxRznAEo-0KCiVRFAQGRcG-oi7W1oymKjPGFfkMqyBN--IsvUvBngZN1n_wgH6dnWG4HQW3K75a55EKsx-BScQWlivOGdFhdSd7lblyUMHdigIojpINs9wVyznqjmITi3BQRYLbBbTYRNO4NHs9n4npjYZFrTKoJN7O6pv0KcoYUu1qen7Hw-80KAo0pyFgZZDZuVi6cOPrrlh8mNExs9ihh2vHvb1Md114I4L8eYTvv4RIuE9BAbP23mh6jpvIvHcv4rJTfdTJUrd' }
  ];

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);
  
  const radius = 400;
  const cardCount = filteredProjects.length;
  const angleStep = 360 / Math.max(cardCount, 1);

  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => setCurrentIndex(prev => prev - 1);

  return (
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 relative px-margin_mobile overflow-hidden">
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
                onClick={() => {
                  setFilter(cat);
                  setCurrentIndex(0);
                }} 
                className={`px-8 py-2 rounded-full font-label-caps text-sm transition-all border ${filter === cat ? 'bg-secondary text-white border-secondary primary-glow' : 'bg-white/5 text-on-surface-variant border-transparent hover:border-secondary/50'}`}
              >
                {t(`work.filters.${cat}`)}
              </button>
            ))}
          </div>
        </section>

        {/* 3D Carousel Section */}
        <section className="max-w-container_max_width mx-auto relative z-10">
          <div className="carousel-scene">
            <div className="carousel-container">
              {filteredProjects.map((project, index) => {
                const angle = (index - currentIndex) * angleStep;
                const rad = (angle * Math.PI) / 180;
                const x = Math.sin(rad) * radius;
                const z = Math.cos(rad) * radius - radius;
                const rotationY = angle;
                
                let opacity = 1;
                const normalizedAngle = Math.abs(angle % 360);
                if (normalizedAngle > 90 && normalizedAngle < 270) {
                  opacity = 0.2;
                }

                const isActive = (currentIndex % cardCount + cardCount) % cardCount === index;
                const techs = project.tech.split(' • ');

                return (
                  <article 
                    key={project.id} 
                    className={`carousel-card glass-card p-6 flex flex-col gap-4 ${isActive ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg)`,
                      opacity: opacity,
                      zIndex: isActive ? 10 : 1
                    }}
                  >
                    <h3 className="font-headline-md text-headline-md text-on-surface text-center leading-tight">
                      {project.title}
                    </h3>
                    
                    <img 
                      alt={project.title} 
                      className="carousel-card-img" 
                      src={project.img} 
                    />
                    
                    <p className="text-on-surface-variant font-body-md text-sm text-center line-clamp-3">
                      {project.desc}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 mt-auto">
                      <span className="font-label-caps text-[10px] px-2 py-1 bg-surface-container rounded text-secondary uppercase">
                        {techs[0]}
                      </span>
                      <span className="font-label-caps text-[10px] px-2 py-1 bg-surface-container rounded text-on-surface-variant uppercase">
                        {techs[1] || techs[0]}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="p-4 bg-surface-container rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 bg-surface-container rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
