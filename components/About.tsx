import React from 'react';
import { ArrowRightIcon } from './icons';

interface AboutProps {
    onNavigate: (page: 'about') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
    return (
        <section id="about-summary" className="py-24 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-on-scroll fade-right">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                                alt="Our team collaborating"
                                className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-square" 
                            />
                             <div className="absolute -bottom-4 -right-4 w-full h-full bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
                        </div>
                    </div>
                    <div className="animate-on-scroll fade-left">
                        <span className="text-indigo-400 font-semibold">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mt-3 mb-6">
                            Driving Innovation Through Expertise
                        </h2>
                        <p className="text-lg text-[var(--text-muted)] mb-8">
                            Stellar Solutions was founded on the principle that technology, when applied strategically, can be a transformative force for any business. Our team of passionate engineers, data scientists, and strategists works collaboratively with clients to build robust, scalable, and intelligent solutions that deliver measurable impact.
                        </p>
                        <button
                            onClick={() => onNavigate('about')}
                            className="inline-flex items-center text-lg text-indigo-400 font-semibold hover:text-indigo-500 transition-colors"
                        >
                            Learn More About Our Mission
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
