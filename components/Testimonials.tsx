import React from 'react';

const testimonialsData = [
    {
        quote: "Stellar Solutions delivered a game-changing analytics platform that has revolutionized our decision-making process. Their expertise and dedication are second to none.",
        name: "Jane Doe",
        title: "CEO, Innovate Inc.",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        quote: "The custom AI model they built for us has increased our operational efficiency by over 40%. An incredible team and a fantastic result.",
        name: "John Smith",
        title: "COO, QuantumLeap",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        quote: "Working with them felt like a true partnership. They took the time to understand our complex needs and delivered a solution that exceeded our expectations.",
        name: "Emily White",
        title: "CTO, DataCorp",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 bg-[var(--bg-color)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-color)] mb-4 animate-on-scroll fade-up">
                        What Our Clients Say
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg text-[var(--text-muted)] animate-on-scroll fade-up stagger-1">
                        We're proud to have built lasting relationships with our partners.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="glowing-card p-8 rounded-2xl flex flex-col justify-between animate-on-scroll fade-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="mb-6">
                                <svg className="h-10 w-10 text-indigo-500 mb-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.5 10c-.22 0-.44.02-.66.06A5.5 5.5 0 001.5 15.5V17a1 1 0 001 1h3a1 1 0 001-1v-2.5a3.5 3.5 0 00-3.5-3.5zM17.5 10c-.22 0-.44.02-.66.06A5.5 5.5 0 0012.5 15.5V17a1 1 0 001 1h3a1 1 0 001-1v-2.5a3.5 3.5 0 00-3.5-3.5z" />
                                </svg>
                                <p className="text-lg text-[var(--text-muted)] italic">"{testimonial.quote}"</p>
                            </div>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                                <div className="ml-4">
                                    <p className="font-bold text-[var(--text-color)]">{testimonial.name}</p>
                                    <p className="text-sm text-[var(--text-muted)]">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;