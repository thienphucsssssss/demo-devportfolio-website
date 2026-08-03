'use client';

import React, { useState } from 'react';
import { SKILLS } from '@/data/portfolio-data';
import { Skill } from '@/types/portfolio';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'Design & CMS'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="skills">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
          CORE STACK
        </h2>
        <h3 className="font-headline-md text-[32px] md:text-[40px] text-on-surface">
          Technologies &amp; Frameworks
        </h3>
        <p className="text-on-surface-variant max-w-lg text-sm">
          A battle-tested tech stack chosen for performance, type safety, and developer velocity.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface-container-low text-on-surface-variant border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Stack Tags Cloud matching Design */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto px-4">
        {filteredSkills.map((skill) => {
          const isPrimary = skill.name === 'TypeScript' || skill.name === 'Next.js' || skill.name === 'React';
          return (
            <div
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              className="group cursor-pointer relative"
            >
              <span
                className={`text-[18px] md:text-[22px] font-medium transition-all duration-300 inline-block transform group-hover:scale-110 ${
                  isPrimary || skill.name === 'TypeScript' || skill.name === 'Next.js'
                    ? 'text-primary font-bold drop-shadow-md'
                    : 'text-on-surface hover:text-primary'
                }`}
              >
                {skill.name}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </div>
          );
        })}
      </div>

      {/* Skill Detail Modal */}
      {activeSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-container border border-white/10 p-8 max-w-md w-full space-y-6 relative shadow-2xl">
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2"
            >
              ✕
            </button>
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-label-caps mb-1">
                {activeSkill.category}
              </div>
              <h4 className="text-2xl font-bold text-on-surface">{activeSkill.name}</h4>
            </div>

            <div className="space-y-3 py-2 border-t border-b border-white/5">
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Proficiency Level:</span>
                <span className="text-primary font-bold">{activeSkill.level}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-on-surface-variant">Core Specialty:</span>
                <span className="text-on-surface">Production Ready</span>
              </div>
            </div>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              Extensive hands-on experience building mission-critical enterprise modules and scalable client interfaces using {activeSkill.name}.
            </p>

            <button
              onClick={() => setActiveSkill(null)}
              className="w-full bg-primary text-on-primary py-3 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
