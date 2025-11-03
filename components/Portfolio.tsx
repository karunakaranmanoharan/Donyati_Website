import React from 'react';
import { ArrowRightIcon } from './icons';

const portfolioItems = [
    {
        title: "Predictive Maintenance for Industrial IoT",
        category: "Machine Learning",
        imageUrl: "https://images.unsplash.com/photo-1593106434442-50a80153831b?auto=format&fit=crop&q=80&w=800",
        description: "Developed an ML model to predict equipment failure, reducing downtime by 30% for a major manufacturing client.",
    },
    {
        title: "Real-time Customer Segmentation Platform",
        category: "Data Analytics",
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
        description: "Built a scalable data pipeline and dashboard to segment millions of users in real-time, boosting marketing campaign ROI.",
    },
    {
        title: "Serverless Cloud Architecture Migration",
        category: "Cloud Engineering",
        imageUrl: "https://images.unsplash.com/photo-1544890225-2f3faec4446f?auto=format&fit=crop&q=80&w=800",
        description: "Migrated a monolithic application to a serverless architecture on AWS, cutting infrastructure costs by 60%.",
    },
    {
        title: "AI-Powered Logistics Optimization Engine",
        category: "AI & Optimization",
        imageUrl: "https://images.unsplash.com/photo-1577562433989-53e3ed451e22?auto=format&fit=crop&q=80&w=800",
        description: "Created a custom optimization engine to solve complex vehicle routing problems, improving delivery efficiency.",
    },
     {
        title: "Natural Language Search for Enterprise",
        category: "Natural Language Processing",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        description: "Implemented a state-of-the-art search system, allowing employees to find internal documents using natural language queries.",
    },
     {
        title: "Automated Financial Fraud Detection",
        category: "FinTech",
        imageUrl: "https://images.unsplash.com/photo-1600020452936-5418182469e3?auto=format&fit=crop&q=80&w=800",
        description: "Deployed a real-time fraud detection system that analyzes transaction patterns, saving a financial client millions.",
    }
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div 
                            key={item.title} 
                            className="group glowing-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 animate-on-scroll fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="overflow-hidden">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-semibold text-indigo-400 mb-2">{item.category}</p>
                                <h3 className="text-xl font-bold text-[var(--text-color)] mb-3 h-14">{item.title}</h3>
                                <p className="text-[var(--text-muted)] mb-4 h-24">{item.description}</p>
                                <a href="#" className="inline-flex items-center font-semibold text-indigo-400 group-hover:text-indigo-500 transition-colors">
                                    Read Case Study
                                    <ArrowRightIcon className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;