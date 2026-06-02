import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden mb-4 transition-all">
      <button 
        onClick={onClick}
        className="w-full px-6 py-4 flex justify-between items-center text-right hover:bg-white/5 transition-colors"
      >
        <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
        <span className="font-title-md text-base md:text-title-md text-white">{question}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-4 pt-2 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed text-right border-t border-white/5">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const { t } = useAppContext();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
    { q: t('faq.q4.q'), a: t('faq.q4.a') },
  ];

  return (
    <div className="bg-surface selection:bg-secondary/30 min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16 md:pb-24 px-lg max-w-4xl mx-auto">
        <section className="mb-12 md:mb-16 text-center md:text-right relative">
          <div className="absolute -top-10 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
          <h1 className="font-display-lg text-[32px] md:text-[48px] mb-4 cyber-gradient-text leading-tight">{t('faq.title')}</h1>
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
          <div className="glass-panel p-8 rounded-2xl border border-primary/20">
            <h3 className="font-title-md text-white mb-4">{t('cta.title')}</h3>
            <p className="text-on-surface-variant mb-8">{t('cta.desc')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="primary-btn-gradient px-8 py-3 rounded-xl font-title-md text-white active:scale-95 duration-200">
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
