'use client';

import React from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types/portfolio';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenArchive: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenArchive,
}) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="work">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-24">
        <div>
          <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
            PORTFOLIO
          </h2>
          <h3 className="font-headline-md text-[42px] md:text-[56px] text-on-surface leading-none">
            Selected Works
          </h3>
        </div>

        <button
          onClick={onOpenArchive}
          className="text-on-surface-variant hover:text-on-surface flex items-center gap-3 group transition-colors font-bold uppercase text-[14px] tracking-widest border-b border-white/10 hover:border-primary pb-1"
        >
          <span>View Archive</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-primary" />
        </button>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-surface-container-low border border-white/5 group-hover:border-white/20 transition-all">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-primary border border-white/10 uppercase">
                {project.year}
              </div>
            </div>

            {/* Info Row */}
            <div className="flex justify-between items-start pt-2">
              <div>
                <h5 className="font-headline-md text-[24px] md:text-[28px] text-on-surface mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h5>
                <p className="text-label-caps font-label-caps text-primary uppercase text-[12px] tracking-widest">
                  {project.subtitle}
                </p>
              </div>

              <div className="p-2 text-on-surface-variant group-hover:text-primary transition-colors">
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
