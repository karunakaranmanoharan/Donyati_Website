import React from 'react';
import { Logoipsum1, Logoipsum2, Logoipsum3, Logoipsum4, Logoipsum5, Logoipsum6 } from './icons';

const clientLogos = [
    { name: 'Logoipsum 1', component: <Logoipsum1 className="h-8 text-[var(--text-muted)]" /> },
    { name: 'Logoipsum 2', component: <Logoipsum2 className="h-8 text-[var(--text-muted)]" /> },
    { name: 'Logoipsum 3', component: <Logoipsum3 className="h-8 text-[var(--text-muted)]" /> },
    { name: 'Logoipsum 4', component: <Logoipsum4 className="h-8 text-[var(--text-muted)]" /> },
    { name: 'Logoipsum 5', component: <Logoipsum5 className="h-8 text-[var(--text-muted)]" /> },
    { name: 'Logoipsum 6', component: <Logoipsum6 className="h-8 text-[var(--text-muted)]" /> },
];

const Clients: React.FC = () => {
    const extendedLogos = [...clientLogos, ...clientLogos];

    return (
        <section id="clients" className="py-16 bg-[var(--bg-deep-color)]">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-sm font-bold uppercase text-[var(--text-muted)] tracking-widest mb-10 animate-on-scroll fade-up">
                    Trusted by industry leaders
                </h2>
                <div 
                    className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
                >
                    <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
                        {extendedLogos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center" aria-label={logo.name}>
                               {logo.component}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;