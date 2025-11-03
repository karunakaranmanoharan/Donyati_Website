import React from 'react';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
            <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        Our Services
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We provide end-to-end consulting and technology services to help you unlock the power of your data and transform your business.
                    </p>
                </div>
            </header>
            <Services />
        </div>
    );
};

export default ServicesPage;