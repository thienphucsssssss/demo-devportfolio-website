'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

import { ProjectModal } from '@/components/ProjectModal';
import { HireMeModal } from '@/components/HireMeModal';
import { CVModal } from '@/components/CVModal';
import { ArchiveDrawer } from '@/components/ArchiveDrawer';
import { PrivacyTermsModal } from '@/components/PrivacyTermsModal';

import { Project } from '@/types/portfolio';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [hireMeService, setHireMeService] = useState('');
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenHireMeWithService = (serviceTitle: string) => {
    setHireMeService(serviceTitle);
    setIsHireMeOpen(true);
  };

  const handleOpenHireMeGeneral = () => {
    setHireMeService('');
    setIsHireMeOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-background relative selection:bg-primary selection:text-on-primary-container">
      {/* Top Navbar */}
      <Navbar
        onOpenHireMe={handleOpenHireMeGeneral}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-[1200px] mx-auto px-5 md:px-8">
        <HeroSection
          onOpenCV={() => setIsCVOpen(true)}
          onOpenHireMe={handleOpenHireMeGeneral}
        />

        <AboutSection />

        <SkillsSection />

        <ServicesSection
          onOpenHireMeWithService={handleOpenHireMeWithService}
        />

        <PortfolioSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenArchive={() => setIsArchiveOpen(true)}
        />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenPrivacyTerms={(type) => setPrivacyTermsType(type)}
      />

      {/* Interactive Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenHireMe={handleOpenHireMeGeneral}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        initialService={hireMeService}
        onClose={() => setIsHireMeOpen(false)}
      />

      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        onOpenHireMe={handleOpenHireMeGeneral}
      />

      <ArchiveDrawer
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <PrivacyTermsModal
        isOpen={privacyTermsType !== null}
        type={privacyTermsType}
        onClose={() => setPrivacyTermsType(null)}
      />
    </div>
  );
}
