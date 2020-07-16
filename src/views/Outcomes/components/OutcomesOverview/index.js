import React from 'react';
import './OutcomesOverview.css';
import MainMessage from './components/MainMessage';
import Feature from './components/Features';
import Benefit from './components/Benefits';
import DemoBox from './components/DemoBox';
import Footer from './components/Footer';

const OutcomesOverview = () => {
    return (
        <div>
        <MainMessage />
        <Feature />
        <Benefit />
        <DemoBox />
        <Footer />
        </div>
    );
};

export default OutcomesOverview;