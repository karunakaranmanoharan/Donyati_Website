import React from 'react';
import { DataAnalyticsIcon, MachineLearningIcon, CloudSolutionsIcon,AISolutionsIcon, ConsultingIcon, DevIcon } from './icons';

const servicesData = [
    {
        icon: <AISolutionsIcon className="h-10 w-10 text-indigo-400" />,
        title: "AI & Machine Learning",
        description: "Develop custom AI models to automate processes, gain predictive insights, and create intelligent products.",
    },
    {
        icon: <DataAnalyticsIcon className="h-10 w-10 text-indigo-400" />,
        title: "Data Analytics & BI",
        description: "Transform raw data into actionable intelligence with advanced analytics, dashboards, and reporting.",
    },
    {
        icon: <CloudSolutionsIcon className="h-10 w-10 text-indigo-400" />,
        title: "Cloud Engineering",
        description: "Build scalable, secure, and resilient cloud infrastructure on AWS, GCP, and Azure to power your applications.",
    },
    {
        icon: <DevIcon className="h-10 w-10 text-indigo-400" />,
        title: "Custom Software Development",
        description: "Design and engineer bespoke software solutions tailored to your unique business requirements.",
    },
    {
        icon: <ConsultingIcon className="h-10 w-10 text-indigo-400" />,
        title: "Technology Consulting",
        description: "Get strategic guidance on technology roadmaps, architecture, and digital transformation initiatives.",
    },
    {
        icon: <MachineLearningIcon className="h-10 w-10 text-indigo-400" />,
        title: "MLOps & Automation",
        description: "Streamline your machine learning lifecycle with robust MLOps practices for efficient deployment and monitoring."
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">What We Do</h2>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We offer a comprehensive suite of services designed to accelerate your journey from data to decision.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="glowing-card p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 animate-on-scroll fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-[var(--accent-bg-subtle)] mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-3">{service.title}</h3>
                            <p className="text-[var(--text-muted)]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;