import React from 'react';
import Team from '../components/Team';

const TeamPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
            <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        Our Team
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        Meet the brilliant minds behind Stellar Solutions. Our diverse team of experts brings together a wealth of experience from various domains of technology and business.
                    </p>
                </div>
            </header>
            <Team />
            {/* You could add more sections here, like "Join Our Team" */}
        </div>
    );
};

export default TeamPage;
