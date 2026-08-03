'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyTerms: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyTerms }) => {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background text-on-surface font-body-md text-body-md py-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[24px] font-bold text-on-surface tracking-tighter flex items-center gap-2">
          <span>DevPortfolio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        </div>

        <p className="text-on-surface-variant text-[14px] opacity-60">
          © {new Date().getFullYear()} DevPortfolio. Built with precision.
        </p>

        <div className="flex items-center gap-8">
          <a
            href="#home"
            onClick={handleBackToTop}
            className="text-on-surface-variant hover:text-on-surface transition-colors uppercase text-[12px] tracking-widest font-bold flex items-center gap-1.5 group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-primary" />
          </a>
          <button
            onClick={() => onOpenPrivacyTerms('privacy')}
            className="text-on-surface-variant hover:text-on-surface transition-colors uppercase text-[12px] tracking-widest font-bold"
          >
            Privacy
          </button>
          <button
            onClick={() => onOpenPrivacyTerms('terms')}
            className="text-on-surface-variant hover:text-on-surface transition-colors uppercase text-[12px] tracking-widest font-bold"
          >
            Terms
          </button>
        </div>
      </div>
    </footer>
  );
};
