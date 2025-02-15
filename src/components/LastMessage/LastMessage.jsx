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
  backgroundColor: 'black',
};

const LastMessage = (props) => {
  const buttonClick = () => {
    window.location.href = props.content.get_started;
  };

  return (
    <div id='screen-six' style={bgStyle5}>
      <div className='screen-six-section'>
        <h2>{props.content.cta}</h2>

        <Button onClick={buttonClick} className='action-button'>
          Get started
        </Button>
      </div>
    </div>
  );
};

export default LastMessage;
