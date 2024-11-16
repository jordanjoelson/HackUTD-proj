import React from 'react';
import Hero from '../components/hero'; // Import Hero component
import HowItWorks from '../components/howItWorks';
import FAQ from '../components/faq';

const Home = () => {
    return (
        <div className="home-container">
            <Hero /> 
            <HowItWorks />
            <FAQ />
        </div>
    );
};

export default Home;