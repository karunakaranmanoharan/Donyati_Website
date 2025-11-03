import React, { useEffect, useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingAIButton from './components/FloatingAIButton';
import Modal from './components/Modal';
import Contact from './components/Contact';

// Import Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import InsightsPage from './pages/InsightsPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'services' | 'portfolio' | 'insights' | 'about' | 'team' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavClick = useCallback((page: Page, sectionId?: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `#${page}`);
    
    // Scroll to top of the page on navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80; // Header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
        }
      }, 100); // Delay to allow page to render
    }
  }, []);

  useEffect(() => {
    // Mouse follower glow effect
    const glowFollower = document.getElementById('glow-follower');
    if (glowFollower) {
      const handleMouseMove = (e: MouseEvent) => {
        glowFollower.style.left = `${e.clientX}px`;
        glowFollower.style.top = `${e.clientY}px`;
      };
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  useEffect(() => {
    // Glowing card hover effect
    const cards = document.querySelectorAll('.glowing-card');
    cards.forEach(card => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = (card as HTMLElement).getBoundingClientRect();
            (card as HTMLElement).style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            (card as HTMLElement).style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        };
        card.addEventListener('mousemove', handleMouseMove as EventListener);
        
        return () => {
            card.removeEventListener('mousemove', handleMouseMove as EventListener);
        };
    });
  }, [currentPage]);

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'services', 'portfolio', 'insights', 'about', 'team', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange(); // Initial check
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  useEffect(() => {
    // Centralized scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]); // Re-run observer setup when the page changes

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'insights':
        return <InsightsPage />;
      case 'about':
        return <AboutPage />;
       case 'team':
        return <TeamPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="bg-[var(--bg-color)] font-sans text-[var(--text-color)] relative z-10">
      <Header onContactClick={() => setIsContactModalOpen(true)} onNavigate={handleNavClick} />
      <main>
        {renderPage()}
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} onNavigate={handleNavClick} />
      <FloatingAIButton />
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        title="Get In Touch"
      >
        <Contact />
      </Modal>
    </div>
  );
};

export default App;