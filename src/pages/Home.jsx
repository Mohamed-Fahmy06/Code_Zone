import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { t, language } = useAppContext();
  const threeContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isRTL = language === 'ar';

  const projects = [
    {
      id: 1,
      title: t('work.projects.sadeem'),
      badge: 'FinTech',
      tech: 'React',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlh6h6UiQYR6Lm5jIZx2ZMwroZ584AYNodeyetgubKeTCxNQKRaOGWzRfSLfIlSvyY9rcP0YnHHB2YsJDQfCJTYv3xjwY3UGMDdeLsL8o6_Zwkg96nsRwROixtmuwZWyJkv5p8RqsjLMRigGQcKVqVkoTFXeoNNFfgbkQwo4bc3rTF8PcoCjxk6iZJhc30Ge6cXVgMSx4UaZn6tS60Ibsx_U0GKzOISX-Eg2N4qhoOkPJBEPGjTlzKIsMmYM6GeDzhrnSXpIs79bDP',
      desc: t('services.web.desc')
    },
    {
      id: 2,
      title: t('work.projects.masar'),
      badge: 'Logistics',
      tech: 'Vue 3',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCukkHQmNJBwWrCLMrXyoZWmza_xCanFERnX3YyZ8JueT3apa6cP4vg30i-e6-rXulpaf5gGFaWN3rxGS0g9ADeRTcK_iQmstkTg0GRrvjRGQOs8zJRd_cvZJr3E2gD9b_dIHjA4e3MSgozzebvwOsG0vI9y61JCZ7h_id7j5tEU337k9WiwMxEXwrsWElL0M63HWnPrayv1YL7V5yuOVy799B31Q_8EYVJRPDqS78_lUOrInKaFYZdODIyImKee-Nna61SQ8LpWntM',
      desc: t('services.web.desc')
    },
    {
      id: 3,
      title: t('work.projects.ofoq'),
      badge: 'E-Commerce',
      tech: 'Python',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI-XgGUIeLfK7JdT_IgZGrf1jb2i4V9_Q30pBv34rQlmVE-3XX_S05ywUudaPl9vFNpmsvdtdC7L6jtkmbhFETfjKYPseTvS0QIYlosQYbrMuSfFTof7MHTzlrApIBjtfu618EX1FxbwmrYAZeBvoEZz3XCgXe8TWTRtuJk4TsJr5sGmXVf3AbW-RqsOqK16fsdWvquYXuhAqBvN0kKXqaUvul5WlUUjBE27f-nCXfX97I1VUA3dqIeEjgulB9yVDBgxDQDWZpgr-G',
      desc: t('services.systems.desc')
    },
  ];

  const cardCount = projects.length;

  // Cover-flow positions (matching reference design)
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

  useEffect(() => {
    if (!threeContainerRef.current) return;
    const container = threeContainerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geo1 = new THREE.TorusGeometry(3.5, 0.02, 16, 120);
    const mat1 = new THREE.PointsMaterial({ color: 0x00d1ff, size: 0.04, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending });
    group.add(new THREE.Points(geo1, mat1));

    const geo2 = new THREE.TorusGeometry(3.5, 0.4, 32, 200);
    const mat2 = new THREE.PointsMaterial({ color: 0xF2E3D2, size: 0.02, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending });
    group.add(new THREE.Points(geo2, mat2));

    camera.position.z = 8;

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      group.rotation.x += 0.003;
      group.rotation.y += 0.007;
      group.rotation.z += 0.002;
      const s = 1 + Math.sin(Date.now() * 0.001) * 0.05;
      group.scale.set(s, s, s);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const heroCard = document.querySelector('.hero-3d-container');
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768 || !heroCard) return;
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      heroCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="font-body-md text-body-md bg-background min-h-screen text-on-surface">
      <Header />

      <main className="pt-20">
        {/* ── Hero Section ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-margin_mobile">
          <div id="threejs-container" ref={threeContainerRef}></div>

          <div className="hero-3d-container relative z-10 w-full max-w-2xl transition-transform duration-200 ease-out">
            <div className="glass-card p-8 md:p-12 rounded-xl text-center floating-ui relative backdrop-blur-2xl">
              <div className="inline-flex items-center bg-surface-container-high/50 px-4 py-1 rounded-full mb-6 border border-white/10">
                <span className="text-secondary font-label-caps text-label-caps uppercase tracking-widest flex items-center gap-2">
                  <span className="pulse-animation w-2 h-2 rounded-full bg-secondary"></span>
                  {t('hero.badge')}
                </span>
                <span className="terminal-cursor"></span>
              </div>

              <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4 leading-tight">
                {t('hero.title')}
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
                {t('hero.desc')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-lg primary-glow hover:bg-secondary hover:text-white transition-all active:scale-95 text-center">
                  {t('hero.startBtn')}
                </Link>
                <Link to="/work" className="bg-transparent border border-secondary/30 text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/10 transition-colors text-center">
                  {t('hero.workBtn')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Bento Grid ── */}
        <section className="py-stack_xl px-margin_mobile max-w-container_max_width mx-auto relative z-10">
          <div className="flex items-end justify-between mb-stack_lg">
            <div className="space-y-2 text-start">
              <span className="font-label-caps text-label-caps text-secondary tracking-tighter uppercase">{t('services.title')}</span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{language === 'ar' ? 'ماذا نقدم لك' : 'What We Offer'}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'language', titleKey: 'services.web.title', descKey: 'services.web.desc' },
              { icon: 'settings_suggest', titleKey: 'services.systems.title', descKey: 'services.systems.desc' },
              { icon: 'draw', titleKey: 'services.ux.title', descKey: 'services.ux.desc' },
            ].map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} className="glass-card p-6 rounded-xl group hover:border-secondary/50 transition-all cursor-pointer text-start flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-3xl">{icon}</span>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{t(titleKey)}</h3>
                    <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link to="/work" className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
                    {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Exhibition Gallery / Portfolio Carousel ── */}
        <section className="exhibition-gallery" id="gallery">
          {/* Section Header */}
          <div className="max-w-container_max_width mx-auto px-margin_mobile text-center mb-6 relative z-10">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase block mb-2">
              {t('work.title')}
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              {language === 'ar' ? 'معرض أعمالنا' : 'Curated Showcase'}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl mx-auto text-sm">
              {t('work.subtitle')}
            </p>
            <div className="w-16 h-0.5 bg-secondary mx-auto mt-3 rounded-full opacity-50"></div>
          </div>

          {/* Cover Flow Scene */}
          <div className="carousel-scene">
            <div className="carousel-container">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                  style={getCardStyle(index)}
                >
                  {/* Card inner glass */}
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
          <div className="flex justify-center gap-8 mt-10 relative z-30">
            <button
              id="prevBtn"
              onClick={isRTL ? nextSlide : prevSlide}
              aria-label={language === 'ar' ? 'التالي' : 'Previous'}
              className="p-5 bg-surface-container/60 backdrop-blur-md rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20 group"
            >
              <span className="material-symbols-outlined text-3xl group-hover:-translate-x-1 transition-transform">
                {isRTL ? 'arrow_forward' : 'arrow_back'}
              </span>
            </button>
            <button
              id="nextBtn"
              onClick={isRTL ? prevSlide : nextSlide}
              aria-label={language === 'ar' ? 'السابق' : 'Next'}
              className="p-5 bg-surface-container/60 backdrop-blur-md rounded-full text-secondary hover:bg-secondary hover:text-white transition-all primary-glow active:scale-90 border border-secondary/20 group"
            >
              <span className="material-symbols-outlined text-3xl group-hover:translate-x-1 transition-transform">
                {isRTL ? 'arrow_back' : 'arrow_forward'}
              </span>
            </button>
          </div>

          {/* View all link */}
          <div className="text-center mt-4 relative z-10">
            <Link to="/work" className="text-secondary font-label-caps hover:underline">
              {t('work.viewAll')} →
            </Link>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-stack_xl bg-surface-container-lowest/50 relative overflow-hidden text-start">
          <div className="max-w-container_max_width mx-auto px-margin_mobile">
            <div className="text-center mb-stack_lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-2">{t('testimonials.title')}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('testimonials.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { textKey: 'testimonials.q1.text', authorKey: 'testimonials.q1.author', roleKey: 'testimonials.q1.role' },
                { textKey: 'testimonials.q2.text', authorKey: 'testimonials.q2.author', roleKey: 'testimonials.q2.role' },
              ].map(({ textKey, authorKey, roleKey }) => (
                <div key={textKey} className="glass-card p-6 md:p-8 rounded-xl relative">
                  <span className="material-symbols-outlined text-secondary/10 text-6xl absolute top-4 right-4 pointer-events-none">format_quote</span>
                  <p className="font-body-lg text-body-lg text-on-surface mb-6 relative z-10 italic">
                    &quot;{t(textKey)}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-secondary/20">
                      <span className="material-symbols-outlined text-secondary">person</span>
                    </div>
                    <div>
                      <div className="font-headline-md text-base text-white">{t(authorKey)}</div>
                      <div className="font-label-caps text-xs text-secondary">{t(roleKey)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-stack_xl px-margin_mobile">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/5 pointer-events-none"></div>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-4 relative z-10">{t('cta.title')}</h2>
            <p className="text-on-surface-variant mb-8 relative z-10 max-w-xl mx-auto">{t('cta.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 items-center">
              <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold primary-glow active:scale-95 transition-all text-center min-w-[200px]">
                {t('cta.btn')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
