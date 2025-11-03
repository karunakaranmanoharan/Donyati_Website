import React from 'react';
import { ArrowRightIcon } from './icons';

const insightsData = [
    {
        title: "The Future of Generative AI in Enterprise",
        category: "AI & ML",
        author: "Dr. Evelyn Reed",
        date: "October 26, 2023",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&q=80&w=800",
        readTime: "7 min read",
    },
    {
        title: "Scaling Securely: Best Practices for Cloud Infrastructure",
        category: "Cloud",
        author: "Marcus Chen",
        date: "October 22, 2023",
        imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800",
        readTime: "9 min read",
    },
    {
        title: "From Data Swamp to Data Lakehouse: A Modern Approach",
        category: "Data Engineering",
        author: "Aisha Khan",
        date: "October 15, 2023",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        readTime: "6 min read",
    },
];

const Insights: React.FC = () => {
    return (
        <section id="insights" className="py-24 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insightsData.map((post, index) => (
                        <div 
                            key={post.title} 
                            className="group glowing-card rounded-2xl overflow-hidden flex flex-col animate-on-scroll fade-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="overflow-hidden">
                                <img src={post.imageUrl} alt={post.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-indigo-400 mb-2">{post.category}</p>
                                <h3 className="text-xl font-bold text-[var(--text-color)] mb-3 flex-grow">{post.title}</h3>
                                <div className="text-sm text-[var(--text-muted)] flex justify-between items-center mb-4">
                                    <span>By {post.author}</span>
                                    <span>{post.date}</span>
                                </div>
                                <a href="#" className="inline-flex items-center font-semibold text-indigo-400 mt-auto group-hover:text-indigo-500 transition-colors">
                                    Read Full Article
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

export default Insights;