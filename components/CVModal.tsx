'use client';

import React, { useState } from 'react';
import { X, Download, Briefcase, GraduationCap, Award, CheckCircle2, FileText } from 'lucide-react';
import { WORK_EXPERIENCE, EDUCATION, DEVELOPER_INFO } from '@/data/portfolio-data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenHireMe: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, onOpenHireMe }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl space-y-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2"
        >
          <X size={24} />
        </button>

        {/* CV Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-1">
              <FileText size={14} />
              <span>CURRICULUM VITAE</span>
            </div>
            <h3 className="text-3xl font-bold text-on-surface">{DEVELOPER_INFO.name}</h3>
            <p className="text-on-surface-variant text-sm mt-0.5">{DEVELOPER_INFO.role} • {DEVELOPER_INFO.location}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              download={`${DEVELOPER_INFO.name.replace(/\s+/g, '_')}_CV.pdf`}
              className="bg-primary text-on-primary px-4 py-2.5 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenHireMe();
              }}
              className="border border-white/10 text-on-surface px-4 py-2.5 font-bold text-xs uppercase tracking-widest hover:border-primary transition-colors"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary font-label-caps text-xs uppercase tracking-widest border-b border-white/5 pb-2">
            <Briefcase size={16} />
            <span>Work Experience</span>
          </div>

          <div className="space-y-8">
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="relative pl-6 border-l border-white/10 space-y-2">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-on-surface">{exp.role}</h4>
                  <span className="text-xs font-mono text-primary bg-surface-container-low px-2 py-0.5 border border-white/5">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs text-on-surface-variant font-medium">
                  {exp.company} — {exp.location}
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                  {exp.description}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-primary font-bold block mb-1">
                    Key Accomplishments:
                  </span>
                  <ul className="space-y-1 text-xs text-on-surface-variant list-disc list-inside">
                    {exp.keyAchievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] bg-surface-container-high px-2 py-0.5 text-on-surface-variant font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-primary font-label-caps text-xs uppercase tracking-widest border-b border-white/5 pb-2">
            <GraduationCap size={16} />
            <span>Education &amp; Credentials</span>
          </div>

          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-surface-container-low p-4 border border-white/5 space-y-1">
              <div className="flex justify-between items-center text-sm font-bold text-on-surface">
                <span>{edu.degree}</span>
                <span className="text-xs font-mono text-primary">{edu.year}</span>
              </div>
              <div className="text-xs text-on-surface-variant">{edu.institution}</div>
              <p className="text-xs text-on-surface-variant opacity-80 pt-1">{edu.details}</p>
            </div>
          ))}
        </div>

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
