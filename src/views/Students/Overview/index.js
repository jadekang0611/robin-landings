import React from 'react';

import {
  FeatureMessage,
  Testimonials,
  MainMessage,
  DemoMessage,
  Companies,
  LastMessage,
} from '../../../components';

const Overview = () => {
  return (
    <div id="student-body">
      {/* StudentOverview Main Message */}
      <MainMessage />
      {/* StudentOverview Feature Message */}
      <FeatureMessage />
      {/* StudentOverview Testimonials Message */}
      <Testimonials />
      {/* StudentOverview Demo Message */}
      <DemoMessage />
      {/* StudentOverview Companies Message */}
      <Companies />
      {/* StudentOverview Last Message */}
      <LastMessage />
    </div>
  );
};

export default Overview;
