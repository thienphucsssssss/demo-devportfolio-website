'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenHireMe: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe, onOpenCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-background/95 border-white/10 backdrop-blur-md shadow-2xl py-0'
          : 'bg-background/80 border-white/5 backdrop-blur-md py-1'
      }`}
    >
      <div className="flex justify-between items-center h-20 w-full max-w-[1200px] mx-auto px-5 md:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-headline-md text-[24px] font-bold text-on-background tracking-tighter hover:text-primary transition-colors flex items-center gap-2 group"
        >
          <span>DevPortfolio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform"></span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-body-md transition-colors ${
                idx === 0
                  ? 'text-primary font-medium'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenCV}
            className="text-on-surface-variant hover:text-on-surface text-[13px] font-bold uppercase tracking-widest px-3 py-2 transition-colors"
          >
            CV
          </button>
          <button
            onClick={onOpenHireMe}
            className="bg-on-surface text-background px-7 py-2.5 font-bold text-[14px] uppercase tracking-widest hover:bg-primary hover:text-on-primary-container transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenHireMe}
            className="bg-primary text-on-primary px-4 py-2 font-bold text-[12px] uppercase tracking-wider"
          >
            Hire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-on-surface hover:text-primary text-lg font-medium py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full border border-white/10 text-on-surface py-3 font-bold uppercase text-[13px] tracking-widest hover:border-primary"
            >
              View Curriculum Vitae
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireMe();
              }}
              className="w-full bg-primary text-on-primary py-3 font-bold uppercase text-[14px] tracking-widest hover:bg-white hover:text-black"
            >
              Start Project Inquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
