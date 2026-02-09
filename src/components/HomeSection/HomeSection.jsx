import React from 'react';
import Hero from './Hero/Hero';
import ServiceStats from './ServiceStats/ServiceStats';
import AboutUs from './AboutUs/AboutUs';
import ScienceLab from './ScienceLab/ScienceLab';
import VideoBanner from './VideoBanner/VideoBanner';
 

const HomeSection = () => {
    return (
        <section className="main-sec5">
            <Hero />
            <ServiceStats />
            <AboutUs />
            <ScienceLab />
            <VideoBanner />
        </section>
    );
};

export default HomeSection;