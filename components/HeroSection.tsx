'use client';

import React from 'react';
import Image from 'next/image';
import { DEVELOPER_INFO } from '@/data/portfolio-data';
import { ArrowUpRight, FileText, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenCV: () => void;
  onOpenHireMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV, onOpenHireMe }) => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetEl = document.querySelector('#work');
    if (targetEl) {
      const navHeight = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 pt-32 pb-24 md:py-32" id="home">
      {/* Left Column: Hero Text Content */}
      <div className="flex-1 space-y-8 md:space-y-10">
        <div className="inline-flex items-center gap-3 bg-surface-container-low px-4 py-2 border border-white/5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-label-caps font-label-caps text-primary uppercase tracking-widest text-[11px]">
            {DEVELOPER_INFO.availability}
          </span>
        </div>

        <h1 className="font-display-lg text-display-lg leading-[1.05] text-on-surface">
          Building <span className="text-primary italic font-serif">refined</span> digital experiences.
        </h1>

        <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed opacity-90">
          {DEVELOPER_INFO.bio}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href="#work"
            onClick={handleScrollToWork}
            className="bg-primary text-on-primary px-9 py-4 font-bold uppercase text-[14px] tracking-widest transition-all hover:bg-white hover:text-black inline-flex items-center gap-2 group shadow-xl hover:shadow-primary/20"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenCV}
            className="text-on-surface font-bold uppercase text-[14px] tracking-widest border-b-2 border-white/10 hover:border-primary transition-all pb-1.5 inline-flex items-center gap-2 group hover:text-primary"
          >
            <FileText className="w-4 h-4 text-primary" />
            <span>View CV</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="pt-6 border-t border-white/5 flex items-center gap-8 text-on-surface-variant text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">01</span> Next.js & React Expert
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">02</span> Clean Code Architecture
          </div>
        </div>
      </div>

      {/* Right Column: Profile Image & Floating Badge */}
      <div className="flex-1 relative w-full max-w-lg">
        <div className="relative w-full aspect-[4/5] bg-surface-container-low border border-white/10 overflow-hidden shadow-2xl group">
          <Image
            src={DEVELOPER_INFO.heroImage}
            alt="DevPortfolio Full-Stack Developer Studio Portrait"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Floating Years Experience Box */}
        <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 p-8 md:p-10 bg-background border border-white/10 shadow-2xl z-10 backdrop-blur-md">
          <div className="text-[48px] md:text-[56px] font-bold text-primary leading-none font-display-lg">
            {DEVELOPER_INFO.yearsExperience}
          </div>
          <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-2 tracking-widest">
            Years Experience
          </div>
        </div>
      </div>
    </section>
  );
};
