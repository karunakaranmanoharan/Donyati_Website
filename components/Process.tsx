import React from 'react';
import { DiscoveryIcon, DesignIcon, DeployIcon, SupportIconContinuous } from './icons';

const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; description: string; step: number; className?: string }> = ({ icon, title, description, step, className }) => (
    <div className={`relative flex flex-col items-center text-center ${className}`}>
        <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full bg-[var(--accent-bg-subtle)] border-2 border-indigo-700 mb-6">
            <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">{step}</span>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-color)] mb-3">{title}</h3>
        <p className="text-[var(--text-muted)]">{description}</p>
    </div>
);


const Process: React.FC = () => {
    const processData = [
        {
            icon: <DiscoveryIcon className="h-10 w-10 text-indigo-400" aria-hidden="true" />,
            title: 'Discovery & Strategy',
            description: 'We start by understanding your business goals and challenges to define a clear project roadmap and strategy.',
        },
        {
            icon: <DesignIcon className="h-10 w-10 text-indigo-400" aria-hidden="true" />,
            title: 'Design & Development',
            description: 'Our team designs and develops robust solutions using agile methodologies for rapid and iterative progress.',
        },
        {
            icon: <DeployIcon className="h-10 w-10 text-indigo-400" aria-hidden="true" />,
            title: 'Testing & Deployment',
            description: 'Rigorous testing ensures a flawless product. We handle the deployment process for a seamless launch.',
        },
        {
            icon: <SupportIconContinuous className="h-10 w-10 text-indigo-400" aria-hidden="true" />,
            title: 'Support & Growth',
            description: 'We provide ongoing support and maintenance, helping you adapt and grow in the ever-changing digital landscape.',
        },
    ];

  return (
    <section id="process" className="py-24 bg-[var(--card-color)] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">Our Process</h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
            A streamlined approach to delivering exceptional results, every time.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5" aria-hidden="true">
                <div className="h-full w-full bg-gradient-to-r from-transparent via-indigo-800 to-transparent"></div>
            </div>
            {processData.map((step, index) => (
                <ProcessStep key={step.title} {...step} step={index + 1} className={`animate-on-scroll fade-up stagger-${index + 2}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;