import React from 'react';

import {
  FeatureMessage,
  Testimonials,
  MainMessage,
  DemoMessage,
  Companies,
  LastMessage,
  Footer,
} from '../../../components';

import content from '../../../content.js';

const Overview = () => {
  document.title = 'Students | Robin';
  return (
    <div id='student-body'>
      {/* StudentOverview Main Message */}
      <MainMessage content={content.student} />
      {/* StudentOverview Feature Message */}
      <FeatureMessage content={content.student} />
      {/* StudentOverview Testimonials Message */}
      <Testimonials content={content.student} />
      {/* StudentOverview Demo Message */}
      <DemoMessage content={content.student} />
      {/* StudentOverview Companies Message */}
      <Companies content={content.student} />
      {/* StudentOverview Last Message */}
      <LastMessage content={content.student} />
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Overview;
