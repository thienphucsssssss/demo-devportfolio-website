'use client';

import React from 'react';
import { X, ShieldCheck, FileCheck } from 'lucide-react';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface-container border border-white/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-10 relative shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface p-2"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="p-2 bg-primary/20 text-primary">
            {isPrivacy ? <ShieldCheck size={20} /> : <FileCheck size={20} />}
          </div>
          <h3 className="text-2xl font-bold text-on-surface">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Engagement'}
          </h3>
        </div>

        <div className="space-y-4 text-xs text-on-surface-variant leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>Data Collection Notice:</strong> DevPortfolio values your privacy. Contact information submitted through this website is strictly used for direct project communication and client onboarding.
              </p>
              <p>
                <strong>No Third-Party Sharing:</strong> Your email address, company name, and project specifications will never be sold, rented, or distributed to third-party marketing brokers.
              </p>
              <p>
                <strong>Security:</strong> All inquiry form transmissions use HTTPS SSL transport encryption to protect sensitive data during transit.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Contractual Scope:</strong> All freelance engineering services, architectural deliverables, and project timelines are finalized under mutual Master Services Agreements (MSA).
              </p>
              <p>
                <strong>Intellectual Property:</strong> Upon full settlement of agreed project invoices, 100% of custom application code, design files, and repository assets transfer directly to the client.
              </p>
              <p>
                <strong>Warranty &amp; Maintenance:</strong> All delivered web platforms include a standard 30-day post-launch warranty covering bug remediation and Core Web Vitals stability.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
