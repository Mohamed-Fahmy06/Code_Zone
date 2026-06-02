import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OurWork() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, title: 'متجر نيكسس', category: 'ecommerce', tech: 'REACT • NODE.JS • STRIPE', desc: 'منصة تجارة إلكترونية متكاملة مع نظام دفع ذكي وإدارة مخزون متقدمة.', icon: 'shopping_cart', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQegCMx2g9YkgyS2cZIx6iZtXJZoAeOfL15l_toBXPnhOjmPE1ca7GuQzn22vAwtxeMq2Xw-RuIgF2foNxWG-f7lJ0oftsC0l8kLt0CcgbA4C2B45ZzkRoiKbxgeeT8OktgHWnFhF-BSFi8JoiAWIjOc7wGh2UtNKKl17BYQgP80MUJvxRN9r10CthLiAo7sZpsoCm2DJOmhi4kd8yD2wluloIeoGghmF23s0i_-kgoZKo2GVmBTsUJv_nNSO87RurVqdmS987Ddod' },
    { id: 2, title: 'داتا فلو', category: 'web', tech: 'VUE 3 • FIREBASE • D3.JS', desc: 'أداة تحليل بيانات لحظية للشركات الناشئة تعتمد على الذكاء الاصطناعي.', icon: 'analytics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyZK7vvD55XmZrtswd1-1TgIpc5AQPfgRG2VzQ_V9yT7e3qT5Iu_dpIwKgYGCAB4EF3HeiTKbdyOKsDhQbvqE6cQKdRnaTnYKDlp4_XrpD_yI68RnNrYHq_1iWkSXUdQThm7TH6XEBriEi6G8cNfjp78GN9tfYzodjHMyWL0_qOOAGUKbDMCCaV9kKgNQipt2PUymiQNvhgXzV4erHR-Ze2_ZJ1Fl6lfYJ_bewDwjxXCqvGQvaJP_whwNG_OBjybGhBMW2X6Kv5fFi' },
    { id: 3, title: 'لوجيكس ERP', category: 'systems', tech: 'PYTHON • DJANGO • POSTGRES', desc: 'نظام تخطيط موارد المؤسسات (ERP) مخصص لشركات الخدمات اللوجستية.', icon: 'settings_applications', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxRznAEo-0KCiVRFAQGRcG-oi7W1oymKjPGFfkMqyBN--IsvUvBngZN1n_wgH6dnWG4HQW3K75a55EKsx-BScQWlivOGdFhdSd7lblyUMHdigIojpINs9wVyznqjmITi3BQRYLbBbTYRNO4NHs9n4npjYZFrTKoJN7O6pv0KcoYUu1qen7Hw-80KAo0pyFgZZDZuVi6cOPrrlh8mNExs9ihh2vHvb1Md114I4L8eYTvv4RIuE9BAbP23mh6jpvIvHcv4rJTfdTJUrd' },
    { id: 4, title: 'ديف بورتال', category: 'web', tech: 'NEXT.JS • TYPESCRIPT • TAILWIND', desc: 'بوابة المطورين والوثائق البرمجية التفاعلية مع دعم تجربة الكود المباشر.', icon: 'integration_instructions', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATGXwRWLDpsUNK51SQG2uSkJWOXiV1CtIgeHX3jcOjwdYeDnBOQ0OpAxUxLhvRyc2wfMzBSNW0gqfenw8z2Vnj0P6YMGUdtlo4ZWiGddN4uRcRG_7K2Te7AlAXhTIfTSMA1RS86k28a0ABjUAIS1E5SNYU9vzd4plrAcKD7NG7EKV0eaz6bn4wCPBSdz0F5ze-X89YxnkPimlTFaZEH5PmV8up3LN8ivnKnuSJ0ArJr0YAg6zQf4M8V24UkGP3_QCWAR9Iugjsiunw' },
    { id: 5, title: 'متجر لوكس', category: 'ecommerce', tech: 'FLUTTER • GOLANG • AWS', desc: 'تطبيق تسوق فاخر للهواتف الذكية مع تجربة مستخدم سلسة وتقنيات AR.', icon: 'smartphone', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzXdIG731CgntAt2XwLYyjL7n2tK3TkoEs7epbftvuKyPSU86DFe37CY3nDYnq8eBvU_66y0IxKH7yhjrTv_aP3nuAQEVHgWg_UORopbTRmWm2eMyzzWpjoZpOGNc6KtGGUWj5C_7ZbEfkJ3HQwRaB3E0AmspuYsu4RxaQBLkX8FbLOvNDUXBXAMX3Sfb4J3Z05S_Dv2OLyRvoSvPkm39x1ngsRlEjNpz0LoGcXgQy7HOICrM1mGhgVnJmfgB7_5Cub6wsTOvnk0hw' },
    { id: 6, title: 'نت جارد', category: 'systems', tech: 'RUST • DOCKER • K8S', desc: 'نظام مراقبة أمنية للشبكات وتحليل المخاطر السيبرانية بشكل استباقي.', icon: 'security', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuerd9REni-iUsDpOJjKpwMyO_dYSjNyngKBsHRenJrU7YMYJRvOQKS1vXoqtEGXq4CvvGORx8TEd09yIZfhRVRz2YnwWrasAcbHz33VUyFvSR0AeAFSwmNP0kE6eQGLtvjVilCPPIsfs7HqEbsopoBhc_SuRqzkhWMPRW0G4v_V7PdhpWPr6H_WSTDD1PlfI3anevJFCf1mREVBCBQ5bwkYYzxpt8K7Ld0pEAitLu_GV8_87MvBKKWeczji2c6dIUTnTk9WqkatK4' }
  ];

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 relative">
        {/* Cyber Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] right-[5%] w-80 h-80 bg-primary/10 blur-[120px] rounded-full floating"></div>
          <div className="absolute bottom-[20%] left-[5%] w-64 h-64 bg-secondary/5 blur-[100px] rounded-full floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Hero Section */}
        <section className="px-lg max-w-container-max mx-auto mb-16 md:mb-20 relative z-10 text-right">
          <h1 className="font-display-lg text-[32px] md:text-[48px] cyber-gradient-text leading-tight mb-4">معرض أعمالنا</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl ml-auto leading-relaxed">
            نحن نؤمن بأن كل سطر برمجي هو قطعة فنية. استكشف مجموعة من مشاريعنا التقنية التي تجمع بين الكفاءة الهندسية والتصميم العصري المبتكر.
          </p>
        </section>

        {/* Filter System */}
        <section className="px-lg max-w-container-max mx-auto mb-10 md:mb-12 relative z-10">
          <div className="flex flex-wrap flex-row-reverse gap-3 md:gap-4 border-b border-white/10 pb-6">
            <button 
              className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'all' ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(70,245,224,0.2)] border' : 'bg-white/5 border border-white/5 text-on-surface-variant hover:text-secondary'}`}
              onClick={() => setFilter('all')}
            >الكل</button>
            <button 
              className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'web' ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(70,245,224,0.2)] border' : 'bg-white/5 border border-white/5 text-on-surface-variant hover:text-secondary'}`}
              onClick={() => setFilter('web')}
            >تطبيقات الويب</button>
            <button 
              className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'ecommerce' ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(70,245,224,0.2)] border' : 'bg-white/5 border border-white/5 text-on-surface-variant hover:text-secondary'}`}
              onClick={() => setFilter('ecommerce')}
            >المتاجر الإلكترونية</button>
            <button 
              className={`px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${filter === 'systems' ? 'bg-secondary/10 border-secondary text-secondary shadow-[0_0_15px_rgba(70,245,224,0.2)] border' : 'bg-white/5 border border-white/5 text-on-surface-variant hover:text-secondary'}`}
              onClick={() => setFilter('systems')}
            >أنظمة الإدارة</button>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-lg max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="glass-card rounded-2xl overflow-hidden group text-right">
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
                  <div className="flex flex-row-reverse gap-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-xs md:text-sm text-primary/60">terminal</span></div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-xs md:text-sm text-primary/60">database</span></div>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-white/5 flex items-center justify-center"><span className="material-symbols-outlined text-xs md:text-sm text-primary/60">cloud</span></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 md:mt-24 px-lg max-w-container-max mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-lg md:p-xl rounded-[2rem] text-center border-2 border-primary/20">
            <h2 className="font-headline-lg text-headline-lg text-white mb-4 md:mb-6">هل لديك فكرة لمشروعك القادم؟</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-10 max-w-2xl mx-auto">
              دعنا نحول رؤيتك إلى واقع رقمي ملموس باستخدام أحدث التقنيات العالمية.
            </p>
            <button className="primary-btn-gradient px-lg py-3 rounded-xl font-title-md text-white active:scale-95 duration-200">ابدأ مشروعك الآن</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
