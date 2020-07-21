import React from 'react';
import './About.css';
import { AboutUs, LastMessage, NewsBlog, RobinTeam, Footer } from '../../../components';


const About = () => {
    return (
        <>
            <AboutUs />
            <LastMessage />
            <RobinTeam />
            <NewsBlog/>
            <Footer />
        </>
    );
};

export default About;
