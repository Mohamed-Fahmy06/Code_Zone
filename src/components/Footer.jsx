import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest py-xl px-lg">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-xl">
        <div className="space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
            <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">كود زون</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            مركز متكامل للحلول البرمجية والتحول الرقمي، نبني المستقبل سطر تلو الآخر.
          </p>
        </div>
        <div>
          <h4 className="font-title-md text-white mb-lg">روابط سريعة</h4>
          <ul className="space-y-sm">
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" to="/about">عن الشركة</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" to="/work">خدماتنا التقنية</Link></li>
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" href="#">سياسة الخصوصية</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-white mb-lg">الدعم الفني</h4>
          <ul className="space-y-sm">
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" href="#">الأسئلة الشائعة</a></li>
            <li><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" href="#">فتح تذكرة دعم</a></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-all hover:translate-x-[-4px] inline-block" to="/contact">تواصل مباشرة</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-title-md text-white mb-lg">تابعنا</h4>
          <div className="flex gap-md">
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors duration-200" href="#">
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-xl pt-lg border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="font-body-sm text-body-sm text-on-surface-variant">© ٢٠٢٤ كود زون. جميع الحقوق محفوظة.</p>
        <div className="flex gap-lg">
          <span className="text-on-surface-variant font-code-label text-xs">LATENCY: 12ms</span>
          <span className="text-on-surface-variant font-code-label text-xs">UPTIME: 99.9%</span>
        </div>
      </div>
    </footer>
  );
}
