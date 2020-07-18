import React from 'react';
import './LastMessage.css';
import Button from 'react-bootstrap/Button';

const Type5 = '/images/background/SectionBackground5.svg';

const bgStyle5 = {
  backgroundImage: 'url(' + Type5 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
};

const LastMessage = () => {
  return (
    <div id="screen-six" style={bgStyle5}>
      <section className="screen-six-section">
        <h2>
          Ready to improve your skills and get the opportunity to be hired in
          top companies
        </h2>
        <Button className="action-button">Get started</Button>
      </section>
    </div>
  );
};

export default LastMessage;
