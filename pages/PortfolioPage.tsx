import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
             <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        Case Studies
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        Discover how we've helped leading companies overcome their most complex data and technology challenges to achieve remarkable results.
                    </p>
                </div>
            </header>
            <Portfolio />
        </div>
    );
};

export default PortfolioPage;