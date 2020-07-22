import React from 'react';
import './About.css';
import {
  AboutUs,
  LastMessage,
  NewsBlog,
  RobinTeam,
  Footer,
} from '../../../components';

const About = () => {
  return (
    <div className='about-us-body'>
      <AboutUs />
      <LastMessage />
      <RobinTeam />
      <NewsBlog />
      <Footer />
    </div>
  );
};

export default About;
