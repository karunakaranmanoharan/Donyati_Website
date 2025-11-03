import React from 'react';
import { LinkedInIcon, TwitterIcon } from './icons';

const teamMembers = [
    {
        name: "Dr. Evelyn Reed",
        role: "Founder & Chief Data Scientist",
        imageUrl: "https://i.pravatar.cc/300?img=4",
        bio: "Evelyn holds a Ph.D. in Machine Learning and has pioneered several novel algorithms in predictive analytics.",
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Marcus Chen",
        role: "Head of Engineering",
        imageUrl: "https://i.pravatar.cc/300?img=5",
        bio: "With over 15 years of experience, Marcus leads our engineering teams in building robust and scalable systems.",
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        name: "Aisha Khan",
        role: "Principal AI Consultant",
        imageUrl: "https://i.pravatar.cc/300?img=6",
        bio: "Aisha specializes in translating complex business problems into actionable AI strategies for our enterprise clients.",
        social: {
            linkedin: "#",
            twitter: "#"
        }
    },
     {
        name: "David Miller",
        role: "Lead Cloud Architect",
        imageUrl: "https://i.pravatar.cc/300?img=7",
        bio: "David is an expert in multi-cloud environments, ensuring our solutions are secure, scalable, and cost-effective.",
         social: {
            linkedin: "#",
            twitter: "#"
        }
    },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">Meet Our Leadership</h2>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        A dedicated team of innovators and experts passionate about technology and problem-solving.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className="bg-[var(--card-color)] rounded-2xl border border-[var(--border-color)] overflow-hidden text-center animate-on-scroll fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <img src={member.imageUrl} alt={member.name} className="w-full h-72 object-cover object-top" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[var(--text-color)]">{member.name}</h3>
                                <p className="text-indigo-400 font-semibold mb-3">{member.role}</p>
                                <p className="text-sm text-[var(--text-muted)] mb-4">{member.bio}</p>
                                <div className="flex justify-center gap-4">
                                    <a href={member.social.linkedin} className="text-[var(--text-muted)] hover:text-indigo-500 transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                                        <LinkedInIcon className="h-6 w-6" />
                                    </a>
                                    <a href={member.social.twitter} className="text-[var(--text-muted)] hover:text-indigo-500 transition-colors" aria-label={`${member.name}'s Twitter`}>
                                        <TwitterIcon className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
