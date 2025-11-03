import React from 'react';
import Insights from '../components/Insights';

const InsightsPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
            <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                       Our Insights
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        Explore our latest thinking on data, technology, and business transformation from our team of industry experts.
                    </p>
                </div>
            </header>
            <Insights />
        </div>
    );
};

export default InsightsPage;