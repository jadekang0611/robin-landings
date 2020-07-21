import React from 'react';
import './OutcomesOverview.css';
import { MainMessage, FeatureMessage, Benefits, LastMessage, Footer } from '../../../../components';

const OutcomesOverview = () => {
    return (
        <div className="outcomes-body">
        <MainMessage/>
        <FeatureMessage />
        <Benefits />
        <LastMessage />
        <Footer />
        </div>
    );
};

export default OutcomesOverview;