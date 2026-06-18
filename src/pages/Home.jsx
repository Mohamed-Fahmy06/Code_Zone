import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

export default function Home() {
  const { t, language } = useAppContext();
  const threeContainerRef = useRef(null);

  useEffect(() => {
    // --- 3D Code Ring Element (Hero) ---
    if (!threeContainerRef.current || !window.THREE) return;

    const container = threeContainerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new window.THREE.Group();
    scene.add(group);

    const geometry = new window.THREE.TorusGeometry(3.5, 0.02, 16, 120);
    const material = new window.THREE.PointsMaterial({
        color: 0x00d1ff,
        size: 0.04,
        transparent: true,
        opacity: 0.9,
        blending: window.THREE.AdditiveBlending
    });

    const points = new window.THREE.Points(geometry, material);
    group.add(points);

    const innerGeometry = new window.THREE.TorusGeometry(3.5, 0.4, 32, 200);
    const innerMaterial = new window.THREE.PointsMaterial({
        color: 0xF2E3D2,
        size: 0.02,
        transparent: true,
        opacity: 0.4,
        blending: window.THREE.AdditiveBlending
    });
    const innerPoints = new window.THREE.Points(innerGeometry, innerMaterial);
    group.add(innerPoints);

    camera.position.z = 8;

    let animationFrameId;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        group.rotation.x += 0.003;
        group.rotation.y += 0.007;
        group.rotation.z += 0.002;
        const scale = 1 + Math.sin(Date.now() * 0.001) * 0.05;
        group.scale.set(scale, scale, scale);
        renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || window.innerHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        if (container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
        }
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
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-margin_mobile">
          {/* 3D Element Container (Rotating Ring) */}
          <div id="threejs-container" ref={threeContainerRef}></div>
          
          {/* Hero Glass Card */}
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

        {/* Services Bento Grid */}
        <section className="py-stack_xl px-margin_mobile max-w-container_max_width mx-auto relative z-10">
          <div className="flex items-end justify-between mb-stack_lg">
            <div className="space-y-2 text-start">
              <span className="font-label-caps text-label-caps text-secondary tracking-tighter uppercase">{t('services.title')}</span>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">{language === 'ar' ? 'ماذا نقدم لك' : 'What We Offer'}</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1: Web */}
            <div className="glass-card p-6 rounded-xl group hover:border-secondary/50 transition-all cursor-pointer text-start flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">language</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{t('services.web.title')}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{t('services.web.desc')}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <Link to="/work" className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
                  {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 2: Systems */}
            <div className="glass-card p-6 rounded-xl group hover:border-secondary/50 transition-all cursor-pointer text-start flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">settings_suggest</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{t('services.systems.title')}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{t('services.systems.desc')}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <Link to="/work" className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
                  {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Service 3: UX */}
            <div className="glass-card p-6 rounded-xl group hover:border-secondary/50 transition-all cursor-pointer text-start flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-3xl">draw</span>
                </div>
                <div className="mb-4">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{t('services.ux.title')}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">{t('services.ux.desc')}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <Link to="/work" className="font-label-caps text-label-caps text-secondary flex items-center gap-1">
                  {t('services.more')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase Section */}
        <section className="py-stack_xl px-margin_mobile max-w-container_max_width mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack_lg gap-4">
            <div className="space-y-2 text-start">
              <span className="font-label-caps text-label-caps text-secondary tracking-tighter uppercase">{t('work.title')}</span>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">{t('work.subtitle')}</p>
            </div>
            <Link to="/work" className="text-secondary font-label-caps hover:underline shrink-0">{t('work.viewAll')}</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="glass-card rounded-xl overflow-hidden group hover:border-secondary/50 transition-all cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="FinTech Solution" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlh6h6UiQYR6Lm5jIZx2ZMwroZ584AYNodeyetgubKeTCxNQKRaOGWzRfSLfIlSvyY9rcP0YnHHB2YsJDQfCJTYv3xjwY3UGMDdeLsL8o6_Zwkg96nsRwROixtmuwZWyJkv5p8RqsjLMRigGQcKVqVkoTFXeoNNFfgbkQwo4bc3rTF8PcoCjxk6iZJhc30Ge6cXVgMSx4UaZn6tS60Ibsx_U0GKzOISX-Eg2N4qhoOkPJBEPGjTlzKIsMmYM6GeDzhrnSXpIs79bDP"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              </div>
              <div className="p-6 text-start">
                <span className="text-secondary font-label-caps text-xs uppercase tracking-widest mb-1 block">FinTech Solution</span>
                <h4 className="font-headline-md text-headline-md text-white">{t('work.projects.sadeem')}</h4>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card rounded-xl overflow-hidden group hover:border-secondary/50 transition-all cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="Logistics App" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCukkHQmNJBwWrCLMrXyoZWmza_xCanFERnX3YyZ8JueT3apa6cP4vg30i-e6-rXulpaf5gGFaWN3rxGS0g9ADeRTcK_iQmstkTg0GRrvjRGQOs8zJRd_cvZJr3E2gD9b_dIHjA4e3MSgozzebvwOsG0vI9y61JCZ7h_id7j5tEU337k9WiwMxEXwrsWElL0M63HWnPrayv1YL7V5yuOVy799B31Q_8EYVJRPDqS78_lUOrInKaFYZdODIyImKee-Nna61SQ8LpWntM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              </div>
              <div className="p-6 text-start">
                <span className="text-secondary font-label-caps text-xs uppercase tracking-widest mb-1 block">Logistics App</span>
                <h4 className="font-headline-md text-headline-md text-white">{t('work.projects.masar')}</h4>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-card rounded-xl overflow-hidden group hover:border-secondary/50 transition-all cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                  alt="E-commerce" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI-XgGUIeLfK7JdT_IgZGrf1jb2i4V9_Q30pBv34rQlmVE-3XX_S05ywUudaPl9vFNpmsvdtdC7L6jtkmbhFETfjKYPseTvS0QIYlosQYbrMuSfFTof7MHTzlrApIBjtfu618EX1FxbwmrYAZeBvoEZz3XCgXe8TWTRtuJk4TsJr5sGmXVf3AbW-RqsOqK16fsdWvquYXuhAqBvN0kKXqaUvul5WlUUjBE27f-nCXfX97I1VUA3dqIeEjgulB9yVDBgxDQDWZpgr-G"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              </div>
              <div className="p-6 text-start">
                <span className="text-secondary font-label-caps text-xs uppercase tracking-widest mb-1 block">E-commerce</span>
                <h4 className="font-headline-md text-headline-md text-white">{t('work.projects.ofoq')}</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-stack_xl bg-surface-container-lowest/50 relative overflow-hidden text-start">
          <div className="max-w-container_max_width mx-auto px-margin_mobile">
            <div className="text-center mb-stack_lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-2">{t('testimonials.title')}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{t('testimonials.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Quote 1 */}
              <div className="glass-card p-6 md:p-8 rounded-xl relative">
                <span className="material-symbols-outlined text-secondary/10 text-6xl absolute top-4 right-4 pointer-events-none">format_quote</span>
                <p className="font-body-lg text-body-lg text-on-surface mb-6 relative z-10 italic">
                  "{t('testimonials.q1.text')}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-base text-white">{t('testimonials.q1.author')}</div>
                    <div className="font-label-caps text-xs text-secondary">{t('testimonials.q1.role')}</div>
                  </div>
                </div>
              </div>

              {/* Quote 2 */}
              <div className="glass-card p-6 md:p-8 rounded-xl relative">
                <span className="material-symbols-outlined text-secondary/10 text-6xl absolute top-4 right-4 pointer-events-none">format_quote</span>
                <p className="font-body-lg text-body-lg text-on-surface mb-6 relative z-10 italic">
                  "{t('testimonials.q2.text')}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-secondary/20">
                    <span className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div>
                    <div className="font-headline-md text-base text-white">{t('testimonials.q2.author')}</div>
                    <div className="font-label-caps text-xs text-secondary">{t('testimonials.q2.role')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Newsletter Section */}
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
