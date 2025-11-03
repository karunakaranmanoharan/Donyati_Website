import React from 'react';
import { Logo, GithubIcon, TwitterIcon, LinkedInIcon } from './icons';

type Page = 'home' | 'services' | 'portfolio' | 'insights' | 'about' | 'team';

interface FooterProps {
    onContactClick: () => void;
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick, onNavigate }) => {
    const navLinks: { page: Page, title: string }[] = [
        { page: 'services', title: 'Services' },
        { page: 'portfolio', title: 'Work' },
        { page: 'insights', title: 'Insights' },
        { page: 'about', title: 'About' },
    ];
    
    const socialLinks = [
        { href: "#", icon: <TwitterIcon className="h-6 w-6" />, label: "Twitter" },
        { href: "#", icon: <GithubIcon className="h-6 w-6" />, label: "GitHub" },
        { href: "#", icon: <LinkedInIcon className="h-6 w-6" />, label: "LinkedIn" },
    ];

    return (
        <footer className="bg-[var(--card-color)] border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-4" aria-label="Navigate to homepage">
                            <Logo className="h-8 w-8 text-indigo-500" />
                            <span className="text-xl font-bold text-[var(--text-color)]">Stellar Solutions</span>
                        </button>
                        <p className="text-[var(--text-muted)] max-w-xs">
                            AI-Powered Solutions for Modern Enterprises.
                        </p>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-[var(--text-color)] mb-4">Navigation</h4>
                            <ul className="space-y-3">
                                {navLinks.map(link => (
                                    <li key={link.page}>
                                        <button onClick={() => onNavigate(link.page)} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                                            {link.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                             <h4 className="font-semibold text-[var(--text-color)] mb-4">Company</h4>
                            <ul className="space-y-3">
                                <li><button onClick={() => onNavigate('team')} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">Team</button></li>
                                <li><button onClick={onContactClick} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">Contact</button></li>
                                <li><button className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">Careers</button></li>
                            </ul>
                        </div>
                        <div>
                             <h4 className="font-semibold text-[var(--text-color)] mb-4">Legal</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[var(--text-muted)]">&copy; {new Date().getFullYear()} Stellar Solutions. All rights reserved.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        {socialLinks.map(social => (
                             <a key={social.label} href={social.href} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors" aria-label={social.label}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
