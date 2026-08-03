'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/portfolio-data';
import { Service } from '@/types/portfolio';
import { Layout, Code2, Building2, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenHireMeWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenHireMeWithService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-primary" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-primary" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-primary" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-primary" />;
      default:
        return <Code2 className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section className="py-24 md:py-32 border-t border-white/5" id="services">
      <div className="mb-16">
        <h2 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-4">
          CAPABILITIES
        </h2>
        <h3 className="font-headline-md text-[32px] md:text-[40px] text-on-surface">
          Services Offered
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="group cursor-pointer flex flex-col justify-between p-2 rounded-none transition-all hover:translate-y-[-2px]"
          >
            <div>
              <div className="h-px w-12 bg-primary mb-10 group-hover:w-full transition-all duration-500"></div>
              <div className="mb-6 flex items-center justify-between">
                {getServiceIcon(service.iconName)}
                <span className="text-xs uppercase tracking-widest text-primary font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  Inspect →
                </span>
              </div>
              <h4 className="font-headline-md text-[22px] lg:text-[24px] text-on-surface mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-on-surface-variant text-body-md leading-relaxed opacity-80 text-sm">
                {service.description}
              </p>
            </div>

            <div className="pt-8 flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-wider">
              <span>View Deliverables</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Service Breakdown Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-surface-container border border-white/10 p-8 max-w-xl w-full space-y-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface text-lg font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="p-3 bg-surface-container-high border border-white/10">
                {getServiceIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-label-caps">
                  Est. Delivery: {selectedService.duration}
                </span>
                <h3 className="text-2xl font-bold text-on-surface uppercase">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-on-surface-variant text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-primary font-label-caps">
                Included Deliverables
              </h4>
              <ul className="space-y-3">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-on-surface">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/5 flex gap-4">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenHireMeWithService(title);
                }}
                className="flex-1 bg-primary text-on-primary py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Inquire About {selectedService.title}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 border border-white/10 text-on-surface text-xs font-bold uppercase tracking-widest hover:border-white/30"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
