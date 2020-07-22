import React from 'react';
import './About.css';
import {
  AboutUs,
  NewsBlog,
  RobinTeam,
  Footer,
} from '../../../components';

const Type5 = '/images/background/SectionBackground5.svg';

const bgStyle5 = {
  backgroundImage: 'url(' + Type5 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
  backgroundColor: 'black',
};

const About = () => {
  return (
    <div className='about-us-body'>
      <AboutUs />
      <div className="about-us-feature" style={bgStyle5}>
        <h2>
          What will Robin become?
        </h2>
        <h4>In the near future we will make Robin become the #1 way bootcamp students, career services, and employers collaborate to create successful outcome experiences with efficiency and confidence.</h4>
      </div>
      <RobinTeam />
      <NewsBlog />
      <Footer />
    </div>
  );
};

export default About;
