import React from 'react';
import { WhyChooseUsGraphic1, WhyChooseUsGraphic2 } from './icons';

const WhyChooseUs: React.FC = () => {

    return (
        <section id="why-us" className="py-24 bg-gradient-to-b from-[var(--card-color)] to-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">Our Advantage</h2>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We combine deep industry knowledge with technical excellence to deliver unparalleled value.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl p-8 flex flex-col justify-between animate-on-scroll fade-up stagger-1 overflow-hidden">
                        <div>
                            <h3 className="text-3xl font-bold text-[var(--text-color)] mb-4">Deep Expertise, Proven Results</h3>
                            <p className="text-[var(--text-muted)] mb-8">
                               Our team consists of seasoned consultants and data scientists who translate complex challenges into tangible business outcomes. We don't just build technology; we build solutions that drive your bottom line.
                            </p>
                        </div>
                        <div className="mt-auto flex justify-center items-center h-64">
                             <WhyChooseUsGraphic1 className="w-full h-auto max-w-xs" />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-2xl p-8 flex flex-col justify-between animate-on-scroll fade-up stagger-2 overflow-hidden">
                        <div>
                           <h3 className="text-3xl font-bold text-[var(--text-color)] mb-4">Your Strategic Partner</h3>
                            <p className="text-[var(--text-muted)] mb-8">
                               We believe in building lasting partnerships. We integrate with your team to understand your vision and deliver solutions that are not only powerful but also practical and aligned with your long-term goals.
                            </p>
                        </div>
                         <div className="mt-auto flex justify-center items-center h-64">
                            <WhyChooseUsGraphic2 className="w-full h-auto max-w-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
