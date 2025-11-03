import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import About from '../components/About';
import Clients from '../components/Clients';

interface HomePageProps {
    onNavigate: (page: 'services' | 'about', sectionId?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    return (
        <>
            <Hero onNavigate={() => onNavigate('services')} />
            <Clients />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <Technologies />
            <Process />
            <About onNavigate={() => onNavigate('about')} />
        </>
    );
};

export default HomePage;
