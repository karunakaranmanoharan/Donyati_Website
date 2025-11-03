import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon, Logo } from './icons';

type Page = 'home' | 'services' | 'portfolio' | 'insights' | 'about' | 'team';

interface HeaderProps {
    onContactClick: () => void;
    onNavigate: (page: Page, sectionId?: string) => void;
}

const navLinks: { page: Page, title: string }[] = [
    { page: 'services', title: 'Services' },
    { page: 'portfolio', title: 'Work' },
    { page: 'insights', title: 'Insights' },
    { page: 'about', title: 'About' },
    { page: 'team', title: 'Team' },
];

const Header: React.FC<HeaderProps> = ({ onContactClick, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (page: Page) => {
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-color)]/80 backdrop-blur-lg border-b border-[var(--border-color)]' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <button onClick={() => handleNav('home')} className="flex items-center gap-2" aria-label="Navigate to homepage">
                        <Logo className="h-8 w-8 text-indigo-500" />
                        <span className="text-xl font-bold text-[var(--text-color)]">Stellar Solutions</span>
                    </button>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <button key={link.page} onClick={() => handleNav(link.page)} className="text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                                {link.title}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <button onClick={onContactClick} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                            Contact Us
                        </button>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                         <ThemeToggle />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[var(--text-muted)]" aria-label="Open menu">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-[var(--bg-color)] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border-color)]">
                    <span className="text-xl font-bold text-[var(--text-color)]">Menu</span>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2" aria-label="Close menu">
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
                    {navLinks.map(link => (
                        <button key={link.page} onClick={() => handleNav(link.page)} className="text-2xl text-[var(--text-muted)] hover:text-[var(--text-color)] transition-colors">
                            {link.title}
                        </button>
                    ))}
                     <button onClick={() => { onContactClick(); setIsMenuOpen(false); }} className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-colors">
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
