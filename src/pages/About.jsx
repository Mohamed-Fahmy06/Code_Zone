import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const panels = document.querySelectorAll('.glass-panel');
      panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const px = x - rect.left;
        const py = y - rect.top;
        panel.style.setProperty('--x', `${px}px`);
        panel.style.setProperty('--y', `${py}px`);
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <header className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-container-max mx-auto px-lg relative z-10 text-center">
          <div className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-primary/10 border border-primary/20 text-primary font-code-label text-code-label mb-8">
            <span className="pulse-animation w-2 h-2 rounded-full bg-primary"></span>
            <span>نحن نصنع المستقبل الرقمي</span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-[64px] cyber-gradient-text leading-tight mb-6">من نحن - خبراء الحلول الرقمية</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            نحن وكالة تقنية متخصصة في هندسة البرمجيات وبناء التجارب الرقمية التي تدفع الشركات نحو النمو والابتكار.
          </p>
          <div className="flex flex-wrap justify-center gap-md">
            <button className="primary-btn-gradient px-xl py-md rounded-xl font-title-md text-white active:scale-95 duration-200">اكتشف خدماتنا</button>
            <button className="secondary-btn-border px-xl py-md rounded-xl font-title-md text-secondary active:scale-95 duration-200">تواصل معنا</button>
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-24 bg-surface-container-low relative text-right">
        <div className="max-w-container-max mx-auto px-lg grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden glass-panel">
              <img 
                alt="Our Story" 
                className="w-full aspect-video object-cover mix-blend-screen opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLUUb2n5F_lxbo86I9D8WRxMQ8Pv58KxP2WIJpEfD3-AaYKwvfCLtnD7qMDhAU6-6FJZ7J_cTuEKbt5OhCvoX0r0tenUQ2wOCYLcPA1UgFXh6OTMZ1hQ9nDvL6wPfMNlrnJ6zsgAyNIHYSHlMPeyPSO3hIgCMSzVIJ1dV7VqCfiY_XJq5PU-xuvWOJkpdhnVI9E_224QeDcV50lNg364Ao4x5gT3wpqjhgQapmWJy3lu9ENTWGZRddt7CB_wq3sA0dhLE2fFfrDDv2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">قصتنا في تمكين الأعمال</h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
              <p>
                بدأت "كود زون" كفكرة بسيطة: كيف يمكننا تحويل التعقيد البرمجي إلى أدوات نمو بسيطة وفعالة؟ اليوم، نحن نفتخر بكوننا الشريك التقني المفضل للعديد من الشركات الرائدة.
              </p>
              <p>
                نحن لا نقوم فقط بكتابة الأكواد؛ بل نقوم بدراسة استراتيجية عملك، وتحديد الفجوات التقنية، وبناء حلول مخصصة تضمن لك ميزة تنافسية في السوق الرقمي المتسارع.
              </p>
              <div className="flex flex-row-reverse items-center justify-start gap-6 pt-4">
                <div className="flex flex-col items-end">
                  <span className="text-primary font-headline-lg font-bold tracking-tight">+١٥٠</span>
                  <span className="text-code-label text-on-surface-variant">مشروع ناجح</span>
                </div>
                <div className="w-px h-12 bg-outline-variant/30"></div>
                <div className="flex flex-col items-end">
                  <span className="text-secondary font-headline-lg font-bold tracking-tight">+٥٠</span>
                  <span className="text-code-label text-on-surface-variant">عميل سعيد</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">قيمنا الجوهرية</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-on-surface-variant font-body-md text-body-md">الأسس التي نبني عليها كل سطر برمجي</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg text-right">
            {/* Value 1 */}
            <div className="glass-panel p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-lg group-hover:bg-primary/20 transition-colors shadow-[0_0_15px_rgba(207,189,255,0.1)] ml-auto">
                <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-md">الابتكار</h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                لا نكتفي بالحلول التقليدية، بل نسعى دائماً لتبني أحدث التقنيات وابتكار أساليب برمجية تسبق عصرها.
              </p>
            </div>
            {/* Value 2 */}
            <div className="glass-panel p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group border-t-2 border-t-secondary/30">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-lg group-hover:bg-secondary/20 transition-colors shadow-[0_0_15px_rgba(70,245,224,0.1)] ml-auto">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-md">الدقة</h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                نؤمن بأن التفاصيل الصغيرة هي ما يصنع الفرق الكبير، لذا نلتزم بأعلى معايير الجودة في هندسة الأنظمة.
              </p>
            </div>
            {/* Value 3 */}
            <div className="glass-panel p-xl rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-tertiary/10 flex items-center justify-center mb-lg group-hover:bg-tertiary/20 transition-colors shadow-[0_0_15px_rgba(255,177,196,0.1)] ml-auto">
                <span className="material-symbols-outlined text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-md">الدعم المستمر</h3>
              <p className="text-on-surface-variant font-body-sm text-body-sm leading-relaxed">
                شراكتنا لا تنتهي بإطلاق المشروع؛ نحن معك خطوة بخطوة لضمان استقرار ونمو أعمالك الرقمية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">فريق الخبراء</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-on-surface-variant font-body-md text-body-md">العقول المبدعة خلف حلولنا الرقمية</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {/* Team Members... I'll include the ones from the snippet */}
            {[
              { name: "أحمد محمد", role: "كبير المهندسين التقنيين", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIojCTgtEfx9xFhAIciItXMA2c74WOEXF83pjrTwfAdhmihTv6G4TjMKBiPCkzAo5-8iUBwxUVOr1myLcW5GJyoUwqezjbDskj_rAXQD7Ydio2y6RNUb_wWP2hn-K82c-dYMvwnDoCZ4aRRkhLxLJwYfAkUk3VlCE8R9o8GNgXfZq_odhR6gs9a5hrkw9tswwes1_aQITF8cLX_TDa9hPy22DidMZOvQRtruX6Uz-fR3U8bdhvx3koILlntFjp1l7hg5M25K4Dw4Eg" },
              { name: "سارة خالد", role: "مديرة التصميم الرقمي", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwq70Z_BFwZC4LK82KVAjVVagEd7mBDW60kSTVC9EVjjWOQpJ-m3UHTcGi1q__p_zwvi8jFg7_5OwxQ0WhYMOAG8ZqR5RajDFEIGkROy4-gKalh9kFTHC_3UJ-n8erkSWu48h-jQXrtTTvrLQ53fZYwX4mlqs8f4inoDxiEph8P4TQ03bbpKUHppLEJyxfftZCHm8v-AlsGov8dvUL3kfVh4WDWvOmEMmqdKZ7UgcfsXaX7PVOfJNAhjrFgw3LCwObmBQgJ3QyKhd8" },
              { name: "ياسين علي", role: "مطور تطبيقات سحابية", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjHNi_A9fwVjp2nYzNUexV3AKXwXyPWBkMcZosELmYSjnNTEOHqcxo7uYVyGX2sdjrIP0v2acGnsPbCPhGuyil8-UKS6hpHdxwEY0LogmLa7Hv7iuvmPDFzsLThvMCRerHoSzCOjDt2WELfxBnlAfqOGirSjO6QmsdBgqV19qmUHKz8o820zqSxSvs3P2fR6SHWZrpaUy7b3Jh54UVYQekvaB7UlVrRRj6pxeDadn11T4IrKTwA-U-Xfv6GNqobZU-nwd7lwanwKMT" },
              { name: "ليلى حسن", role: "استشارية استراتيجية تقنية", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwqEwuUNTpe0o99Kb5Ufcw2AbXhTkVIcCrajZS6CSCqDPysIS_fhsxivytsLkVjGqvH3aBjQzulIqp5EHWcOHbUBH73fqr7LhipWTOWtpaXliBGWwwcioMCMkS-9ak6mk-CZ8J4gOfRzX7zICFwuwXQDYYCvVqL0S7Q0mymQD_kCvQkIqtgPTdvCS7a8M4bbt-zmOHT0liDCmo2PFQKIUS7vWN9ZjaQBFbSq05UGyoR-CpPuSvznntYq6LjYuyWXbVbZJWixx0YD6" }
            ].map((member, i) => (
              <div key={i} className="glass-panel p-md rounded-2xl hover:translate-y-[-8px] transition-all duration-300 group text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <img alt={member.name} className="w-full aspect-[4/5] object-cover" src={member.img} />
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 transition-all duration-500 rounded-xl"></div>
                </div>
                <h4 className="font-title-md text-title-md text-on-surface mb-1">{member.name}</h4>
                <p className="text-primary font-code-label text-code-label uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-lg">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-surface-dim">
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-highest border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
              <div className="mx-auto font-code-label text-code-label text-on-surface-variant">code_zone_mission.sh</div>
            </div>
            <div className="p-8 font-code-label text-code-label leading-relaxed overflow-x-auto text-left" dir="ltr">
              <p className="text-primary mb-2">$ cat mission.txt</p>
              <p className="text-on-surface mb-4">"لتمكين كل شركة من امتلاك بنية تحتية رقمية قوية تتيح لها التوسع بلا حدود."</p>
              <p className="text-primary mb-2">$ run diagnostics</p>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-on-surface-variant">[SUCCESS] Strategic Analysis complete</p>
                <p className="text-on-surface-variant">[SUCCESS] Scalable Architecture ready</p>
                <p className="text-on-surface-variant">[SUCCESS] Performance Optimization active</p>
                <p className="text-on-surface-variant">[SUCCESS] Security Protocols verified</p>
              </div>
              <p className="text-primary mt-4">_</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
