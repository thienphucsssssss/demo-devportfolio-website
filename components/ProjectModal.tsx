'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, Github, Check, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenHireMe: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenHireMe,
}) => {
  const [demoActive, setDemoActive] = useState(false);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container border border-white/10 max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl space-y-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2 transition-colors z-10"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs uppercase tracking-widest text-primary font-mono bg-surface-container-low px-3 py-1 border border-white/5">
              {project.category} • {project.year}
            </span>
            {project.client && (
              <span className="text-xs text-on-surface-variant font-medium">
                Client: {project.client}
              </span>
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tight font-display-lg pt-1">
            {project.title}
          </h2>
          <p className="text-primary text-xs font-mono tracking-widest uppercase">
            {project.subtitle}
          </p>
        </div>

        {/* Media Preview Container */}
        <div className="relative aspect-[16/9] w-full bg-surface-container-low border border-white/10 overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {demoActive && (
            <div className="absolute inset-0 bg-background/95 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center space-y-4 animate-in fade-in duration-200">
              <Sparkles className="w-10 h-10 text-primary animate-spin" />
              <h4 className="text-xl font-bold text-on-surface">Interactive Prototype Sandbox</h4>
              <p className="text-xs text-on-surface-variant max-w-md">
                Simulating live runtime response for {project.title}. Connecting to staging environment...
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-on-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white hover:text-black"
                >
                  <span>Launch Live Instance</span>
                  <ExternalLink size={14} />
                </a>
                <button
                  onClick={() => setDemoActive(false)}
                  className="border border-white/20 text-on-surface px-4 py-2.5 text-xs font-bold uppercase tracking-widest"
                >
                  Back To Overview
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setDemoActive(true)}
            className="bg-primary text-on-primary px-6 py-3 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            <span>Live Prototype Preview</span>
            <ArrowUpRight size={14} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 text-on-surface px-6 py-3 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:border-primary transition-colors"
            >
              <Github size={14} />
              <span>Repository</span>
            </a>
          )}

          <button
            onClick={() => {
              onClose();
              onOpenHireMe();
            }}
            className="border border-white/10 text-on-surface px-6 py-3 font-bold text-xs uppercase tracking-widest hover:border-primary transition-colors ml-auto"
          >
            Build Similar Project
          </button>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-surface-container-low p-6 border border-white/5">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary font-display-lg">{m.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label-caps mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Description & Problem / Solution Breakdown */}
        <div className="space-y-6 text-sm text-on-surface-variant">
          <div>
            <h4 className="text-xs font-label-caps uppercase tracking-widest text-primary mb-2">
              Project Overview
            </h4>
            <p className="leading-relaxed">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-surface-container-low p-5 border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                Technical Challenge
              </h5>
              <p className="text-xs leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-surface-container-low p-5 border border-white/5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Engineering Solution
              </h5>
              <p className="text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-label-caps uppercase tracking-widest text-primary mb-3">
              Key Features &amp; Technical Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-on-surface">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-label-caps uppercase tracking-widest text-primary mb-3">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-container-high border border-white/10 text-xs font-mono text-on-surface"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer close */}
        <div className="pt-4 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-surface-container-high text-on-surface text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
