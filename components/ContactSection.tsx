'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { DEVELOPER_INFO } from '@/data/portfolio-data';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please complete all form fields.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Gọi API POST /api/contact để gửi email thực sự thay vì setTimeout giả lập
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          fullName,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        {/* Left Info Column */}
        <div className="space-y-8">
          <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            CONTACT
          </h2>
          <h3 className="font-headline-md text-[38px] md:text-[48px] text-on-surface leading-tight">
            Let&apos;s build something exceptional.
          </h3>
          <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed opacity-80">
            I am currently accepting new projects and consulting opportunities. Reach out to start a conversation.
          </p>

          <div className="space-y-8 pt-4">
            <a
              href={`mailto:${DEVELOPER_INFO.email}`}
              className="flex items-center gap-6 group text-on-surface hover:text-primary transition-colors"
            >
              <div className="p-3 bg-surface-container-low border border-white/10 group-hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[18px] md:text-[20px] font-medium border-b border-transparent group-hover:border-primary transition-all">
                {DEVELOPER_INFO.email}
              </span>
            </a>

            <div className="flex items-center gap-6 text-on-surface">
              <div className="p-3 bg-surface-container-low border border-white/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[18px] md:text-[20px] font-medium">
                {DEVELOPER_INFO.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div>
          {submitted ? (
            <div className="bg-surface-container border border-primary/40 p-8 space-y-4 animate-in fade-in duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 text-primary rounded-full mb-2">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="text-2xl font-bold text-on-surface">Message Received!</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Thank you for reaching out. I will review your inquiry and respond within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="pt-2 text-primary font-bold uppercase text-xs tracking-widest hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {errorMessage && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px] block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b border-white/10 py-3 px-0 text-on-surface focus:border-primary focus:ring-0 transition-colors placeholder:text-white/20 text-sm font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px] block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-0 border-b border-white/10 py-3 px-0 text-on-surface focus:border-primary focus:ring-0 transition-colors placeholder:text-white/20 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px] block">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-0 border-b border-white/10 py-3 px-0 text-on-surface focus:border-primary focus:ring-0 transition-colors placeholder:text-white/20 text-sm font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-on-surface text-background font-bold py-5 uppercase tracking-widest text-[14px] hover:bg-primary hover:text-on-primary-container transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
