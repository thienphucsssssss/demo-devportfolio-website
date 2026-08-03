'use client';

import React from 'react';
import { DEVELOPER_INFO } from '@/data/portfolio-data';
import { Code, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: 'High-Performance First',
      desc: 'Sub-second page loads, virtualized rendering, and optimized asset pipelines for effortless user experiences.'
    },
    {
      icon: <Code className="w-5 h-5 text-primary" />,
      title: 'Clean Architecture',
      desc: 'Maintainable, type-safe TypeScript codebases designed for effortless team collaboration and multi-year longevity.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-primary" />,
      title: 'Precision & Accessibility',
      desc: 'WCAG AA accessible UI components with high-contrast Swiss grid aesthetics and pixel-perfect responsiveness.'
    }
  ];

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Left Column */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            THE STORY
          </h2>
          <h3 className="font-headline-md text-[36px] md:text-[40px] leading-tight text-on-surface">
            Crafting excellence through code and strategy.
          </h3>
          <p className="text-on-surface-variant text-sm pt-2">
            Based in {DEVELOPER_INFO.location}. Partnering with global leaders and ambitious startups.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:col-span-7 space-y-12">
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            {DEVELOPER_INFO.story}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-10 pt-4 border-t border-b border-white/5 py-8">
            <div>
              <div className="text-[52px] md:text-[64px] font-bold text-on-surface leading-none font-display-lg">
                {DEVELOPER_INFO.projectsCompleted}
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-3 tracking-widest">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-[52px] md:text-[64px] font-bold text-on-surface leading-none font-display-lg">
                {DEVELOPER_INFO.countriesServed}
              </div>
              <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-3 tracking-widest">
                Countries Served
              </div>
            </div>
          </div>

          {/* Core Engineering Pillars */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-primary font-label-caps">
              Core Engineering Pillars
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="bg-surface-container-low p-6 border border-white/5 hover:border-white/20 transition-all">
                  <div className="mb-4">{pillar.icon}</div>
                  <h5 className="font-bold text-on-surface text-sm mb-2">{pillar.title}</h5>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
