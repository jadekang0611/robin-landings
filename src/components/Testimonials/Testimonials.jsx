import React, { useState } from 'react';
import John from '../../assets/avatars/John.png';
import REVIEW from '../../assets/Review.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from 'react-bootstrap';
import './Testimonials.css';
import { css } from 'emotion';

const Type3 = '/images/background/SectionBackground3.svg';

const bgStyle3 = {
  backgroundImage: 'url(' + Type3 + ')',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundSize: 'cover',
  height: 'auto',
};

const Feedback = [
  {
    id: 1,
    img: '/images/avatar/Myshawne.png',
    name: 'MyShawne S.',
    message:
      'I love how personal Robin is. Robin backs up my confidence as a new engineer and keeps motivating me to be on top of everything during my outcome after bootcamp at General Assembly.',
  },
  {
    id: 2,
    img: '/images/avatar/Daphne.png',
    name: 'Daphne M.',
    message:
      'Robin is frustration-free, unlike other similar platoforms where I would practice coding. I feel more confident every time I do a challenge.',
  },
  {
    id: 3,
    img: '/images/avatar/John.png',
    name: 'John C.',
    message:
      'I have been really enjoying Robin for about a month now, and It really helps me grow confidence in interview questions. I am excited to see updates on new features.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(Feedback[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(current);

  const handleSetClick = (e) => {
    setCurrent(Feedback[e.target.getAttribute('data-message')]);
    setActiveIndex(e.target.getAttribute('data-message'));
  };

  return (
    <Jumbotron id="screen-three" style={bgStyle3}>
      <div className="testimonial-section">
        <h3>Testimonials</h3>
        <h2>What people say about us</h2>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: left;
          `}
        >
          <p>"{current.message}"</p>
          <div className="testimonial-user">
            <img src={current.img} alt={current.name} />
            <p>{current.name}</p>
          </div>
        </div>
        <div
          className={css`
              display: flex;

              span {
                  
                  height: 40px;
                  width: 40px;
                  margin: 40px 3px;
                  display: flex;
                  align-items: center;
                  justify-content: left;
                  cursor: pointer;
              }

              span::before {
                  content: "";
                  height: 20px;
                  width: 20px;
                  background-color: #ffffff;
                  border-radius: 50%;
                  transition: background-color 0.3s ease;
              }

              span:hover::before {
                  background-color: #2e384e;
              }

              span[data-message="${activeIndex}"]::before{
                background-color: #2e384e;
              }
            `}
        >
          {Object.keys(Feedback).map((index) => (
            <span
              onClick={(e) => handleSetClick(e)}
              data-message={index}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </Jumbotron>
  );
};

export default Testimonials;
