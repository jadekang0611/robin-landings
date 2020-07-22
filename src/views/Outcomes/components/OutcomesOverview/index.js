import React from 'react';
import './OutcomesOverview.css';
import {
  MainMessage,
  FeatureMessage,
  Benefits,
  LastMessage,
  Footer,
} from '../../../../components';

import content from '../../../../content.js';


const OutcomesOverview = () => {
  document.title = 'Outcomes | Robin';
  return (
    <div className='outcomes-body'>
      <MainMessage content={content.outcome} />
      <FeatureMessage content={content.outcome} />
      <Benefits content={content.outcome} />
      <LastMessage content={content.outcome} />
      <Footer />
    </div>
  );
};

export default OutcomesOverview;
