import React from 'react';
import { PythonIcon, TensorFlowIcon, PyTorchIcon, KubernetesIcon, DockerIcon, AWSIcon, GCPIcon, AzureIcon, ReactIcon, NextJSIcon, NodeJSIcon, TypescriptIcon } from './icons';

const technologies = [
    { name: 'Python', icon: <PythonIcon className="h-12 w-12" /> },
    { name: 'TypeScript', icon: <TypescriptIcon className="h-12 w-12" /> },
    { name: 'React', icon: <ReactIcon className="h-12 w-12" /> },
    { name: 'Next.js', icon: <NextJSIcon className="h-12 w-12" /> },
    { name: 'Node.js', icon: <NodeJSIcon className="h-12 w-12" /> },
    { name: 'TensorFlow', icon: <TensorFlowIcon className="h-12 w-12" /> },
    { name: 'PyTorch', icon: <PyTorchIcon className="h-12 w-12" /> },
    { name: 'Kubernetes', icon: <KubernetesIcon className="h-12 w-12" /> },
    { name: 'Docker', icon: <DockerIcon className="h-12 w-12" /> },
    { name: 'AWS', icon: <AWSIcon className="h-12 w-12" /> },
    { name: 'GCP', icon: <GCPIcon className="h-12 w-12" /> },
    { name: 'Azure', icon: <AzureIcon className="h-12 w-12" /> },
];

const Technologies: React.FC = () => {
    return (
        <section id="technologies" className="py-24 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        Our Technology Stack
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We use a modern, battle-tested stack to build high-performance, scalable, and reliable solutions.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center justify-center p-6 bg-[var(--card-color)] rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] transition-all duration-300 hover:text-[var(--text-color)] hover:border-indigo-500/50 hover:bg-[var(--accent-bg-subtle)] animate-on-scroll fade-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {tech.icon}
                            <span className="mt-4 font-semibold text-sm">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
