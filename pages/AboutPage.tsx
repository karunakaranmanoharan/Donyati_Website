import React from 'react';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-24 bg-[var(--bg-deep-color)]">
            <header className="py-16 text-center bg-gradient-to-b from-[var(--bg-color)] to-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        About Stellar Solutions
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We are a team of technologists and strategists dedicated to helping businesses harness the power of data and AI to innovate and grow.
                    </p>
                </div>
            </header>

            <section className="py-24 bg-[var(--bg-deep-color)]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-on-scroll fade-right">
                            <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4">Our Mission</h2>
                            <p className="text-[var(--text-muted)] text-lg mb-6">
                                Our mission is to empower organizations with intelligent, data-driven solutions that solve their most critical challenges. We believe in building technology with a purpose—to drive efficiency, unlock new opportunities, and create lasting value.
                            </p>
                             <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4 mt-10">Our Vision</h2>
                            <p className="text-[var(--text-muted)] text-lg">
                                We envision a future where every business can leverage the full potential of their data to make smarter decisions and build better products. We strive to be the strategic partner that helps make that future a reality.
                            </p>
                        </div>
                         <div className="animate-on-scroll fade-left">
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1170" 
                                alt="Team working on a strategy"
                                className="rounded-2xl shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <WhyChooseUs />
            <Team />
            <Clients />
        </div>
    );
};

export default AboutPage;
