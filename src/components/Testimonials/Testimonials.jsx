import React, { useState } from 'react';
import John from '../../assets/avatars/John.png';
import REVIEW from '../../assets/Review.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonials.css';
import { css, cx } from 'emotion';

const Feedback = [
  {
    id: 1,
    img: { John },
    name: 'John Doe',
    message:
      'Thanks to Robin, their challenges and tasks, I increased my level of coding, replenished the portfolio, pumped up interviewing skills and got a job in Google.',
  },
  {
    id: 2,
    img: '../../assets/avatars/John.png',
    name: 'Jade Kang',
    message: 'I have lots of fun with Robin!',
  },
  {
    id: 3,
    img: '../../assets/avatars/John.png',
    name: 'James Oh',
    message:
      'Thanks to Robin, their challenges and tasks, I increased my level of coding, replenished the portfolio, pumped up interviewing skills and got a job in Google.',
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
    <Row className="testimonial-row">
      <Col className="testimonial-col1" lg={6}>
        <h3>TESTIMONIALS</h3>
        <h2>What people say about us</h2>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: left;
          `}
        >
          <p>{current.message}</p>
          <div className="testimonial-user">
            <img src={John} alt={current.name} />
            <p>{current.name}</p>
          </div>
          <div
            className={css`
              display: flex;

              span {
                  
                  height: 40px;
                  width: 40px;
                  margin: 16px 3px;
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
      </Col>
      <Col lg={6} className="tesgimonials-bg">
        <img src={REVIEW} alt="testimonials" />
      </Col>
    </Row>
  );
};

export default Testimonials;
