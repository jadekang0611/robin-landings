import React from 'react';
import './OutcomesOverview.css';
import MainMessage from './components/MainMessage';
import Features from './components/Features';
import Benefit from './components/Benefits';
import DemoBox from './components/DemoBox';
import Footer from './components/Footer';

const OutcomesOverview = () => {
    return (
        <div className="outcomes-body">
        <MainMessage/>
        <Features />
        <Benefit />
        <DemoBox />
        <Footer />
        </div>
    );
};

export default OutcomesOverview;