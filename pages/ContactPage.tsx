import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
            <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        Contact Us
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We'd love to hear from you. Let's discuss how we can help you achieve your goals.
                    </p>
                </div>
            </header>
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                 <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
