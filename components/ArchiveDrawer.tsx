'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolio-data';
import { Project } from '@/types/portfolio';
import { X, ArrowUpRight, Search, Filter } from 'lucide-react';

interface ArchiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ArchiveDrawer: React.FC<ArchiveDrawerProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const categories = ['All', 'Web App', 'E-commerce', 'Web Design', 'Mobile / Crypto'];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container border border-white/10 max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl space-y-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-label-caps block mb-1">
            COMPLETE ARCHIVE
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-on-surface font-display-lg uppercase">
            Project Index
          </h3>
          <p className="text-on-surface-variant text-sm mt-1">
            An overview of client engineering engagements, web applications, and experimental prototypes built over {PROJECTS.length}+ years.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch border-t border-b border-white/5 py-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Filter by title, framework, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-surface-container-low border border-white/10 pl-9 pr-4 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all border ${
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

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[10px] font-label-caps uppercase text-primary tracking-widest">
                <th className="py-3 px-3">Year</th>
                <th className="py-3 px-3">Project Title</th>
                <th className="py-3 px-3 hidden md:table-cell">Client</th>
                <th className="py-3 px-3 hidden sm:table-cell">Built With</th>
                <th className="py-3 px-3 text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredProjects.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="hover:bg-surface-container-high transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-3 font-mono text-xs text-primary">{p.year}</td>
                  <td className="py-4 px-3 font-bold text-on-surface group-hover:text-primary transition-colors">
                    <div>{p.title}</div>
                    <div className="text-[10px] font-mono text-on-surface-variant uppercase sm:hidden pt-0.5">
                      {p.subtitle}
                    </div>
                  </td>
                  <td className="py-4 px-3 hidden md:table-cell text-xs text-on-surface-variant">
                    {p.client || 'Internal Product'}
                  </td>
                  <td className="py-4 px-3 hidden sm:table-cell text-xs font-mono text-on-surface-variant">
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="bg-surface-container-low px-2 py-0.5 text-[10px] border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-3 text-right">
                    <button className="text-on-surface-variant group-hover:text-primary p-1">
                      <ArrowUpRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProjects.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant text-xs">
                    No archive projects found matching your search filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-on-surface-variant">
          <span>Showing {filteredProjects.length} of {PROJECTS.length} portfolio entries</span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-surface-container-high text-on-surface font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-on-primary transition-colors"
          >
            Close Archive
          </button>
        </div>
      </div>
    </div>
  );
};
