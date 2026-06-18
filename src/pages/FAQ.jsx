import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden mb-4 transition-all border border-white/5">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center text-start hover:bg-white/5 transition-colors"
      >
        <span className="font-headline-md text-base md:text-lg text-on-surface">{question}</span>
        <span className={`material-symbols-outlined transition-transform duration-300 text-secondary ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed text-start border-t border-white/5">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const { t, language } = useAppContext();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
    { q: t('faq.q4.q'), a: t('faq.q4.a') },
  ];

  return (
    <div className="bg-background selection:bg-secondary/30 min-h-screen text-on-surface">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 px-margin_mobile max-w-4xl mx-auto">
        <section className="mb-12 md:mb-20 text-center relative">
          <span className="font-label-caps text-secondary uppercase tracking-widest">{t('faq.title')}</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mt-2 mb-6 leading-tight">
            {language === 'ar' ? 'كل ما تود معرفته' : 'Everything You Need To Know'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t('faq.subtitle')}
          </p>
        </section>

        <section className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </section>

        <section className="mt-16 md:mt-24 text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-secondary/20">
            <h3 className="font-headline-md text-on-surface mb-4">{t('cta.title')}</h3>
            <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">{t('cta.desc')}</p>
            <div className="flex justify-center">
              <button className="bg-primary text-on-primary px-10 py-3 rounded-lg font-bold text-lg primary-glow active:scale-95 transition-all">
                {t('contact.title')}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
