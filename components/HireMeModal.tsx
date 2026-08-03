'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, DollarSign, Calendar, Briefcase } from 'lucide-react';
import { SERVICES } from '@/data/portfolio-data';

interface HireMeModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({
  isOpen,
  initialService = '',
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [prevService, setPrevService] = useState(initialService);
  const [selectedService, setSelectedService] = useState(initialService || SERVICES[0].title);
  const [budget, setBudget] = useState('$5k - $10k');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (initialService !== prevService) {
    setPrevService(initialService);
    if (initialService) {
      setSelectedService(initialService);
    }
  }

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Gửi dữ liệu form Hire Me đến API /api/contact với tham số type: 'hire'
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'hire',
          fullName,
          email,
          company,
          selectedService,
          budget,
          timeline,
          details,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send proposal request');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send proposal request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2 transition-colors"
        >
          <X size={24} />
        </button>

        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-label-caps block mb-1">
            PROJECT INQUIRY
          </span>
          <h3 className="text-3xl font-bold text-on-surface">Hire Me</h3>
          <p className="text-on-surface-variant text-sm mt-1">
            Fill out the project scope details below to receive a custom proposal within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-surface-container-low border border-primary/30 p-8 space-y-4 text-center">
            <div className="inline-flex p-3 bg-primary/20 text-primary rounded-full">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-2xl font-bold text-on-surface">Proposal Request Sent!</h4>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-primary font-bold">{fullName}</span>. I have received your request for <span className="text-primary font-bold">{selectedService}</span> and will review your specifications shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-primary text-on-primary px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black"
            >
              Return To Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  Your Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  placeholder="sarah@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="Optional (e.g. Apex Ventures)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
              />
            </div>

            {/* Service Selector */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                Primary Service Required
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedService(s.title)}
                    className={`p-3 text-xs font-bold uppercase tracking-wider text-left border transition-all ${
                      selectedService === s.title
                        ? 'bg-primary text-on-primary border-primary'
                        : 'bg-surface-container-low text-on-surface-variant border-white/10 hover:border-white/30'
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  Estimated Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
                >
                  <option value="< $5k">&lt; $5,000 USD</option>
                  <option value="$5k - $10k">$5,000 - $10,000 USD</option>
                  <option value="$10k - $25k">$10,000 - $25,000 USD</option>
                  <option value="$25k+">$25,000+ USD</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                  Desired Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none"
                >
                  <option value="Immediate">Urgent (&lt; 2 Weeks)</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="1 - 3 Months">1 - 3 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                Project Overview &amp; Goals
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your objectives, target audience, and any specific technical requirements..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-surface-container-low border border-white/10 p-3 text-sm text-on-surface focus:border-primary focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary font-bold py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
