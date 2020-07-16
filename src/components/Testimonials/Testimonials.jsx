import React, { useState } from 'react';
import REVIEW from '../../assets/Review.svg';
import JOHN from '../../assets/avatars/John.png';
import GOLEFT from '../../assets/GoLeft.svg';
import GORIGHT from '../../assets/GoRight.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Testimonials.css';

const Feedback = [
  {
    id: 1,
    img: '../../assets/avatars/John.png',
    name: 'John Doe',
    message:
      'Thanks to Robin, their challenges and tasks, I increased my level of coding, replenished the portfolio, pumped up interviewing skills and got a job in Google.',
  },
  {
    id: 2,
    img: '../../assets/avatars/John.png',
    name: 'Jade Kang',
    message:
      'Thanks to Robin, their challenges and tasks, I increased my level of coding, replenished the portfolio, pumped up interviewing skills and got a job in Google.',
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

  const handleSetClick = () => {
    console.log('hello');
  };

  return (
    <Row className="testimonial-row">
      <Col className="testimonial-col1" lg={6}>
        <h3>TESTIMONIALS</h3>
        <h2>What people say about us</h2>
        <div>
          <p>{current.message}</p>
          <img src={current.img} alt={current.name} />
          <p>{current.name}</p>
          <div>
            {Object.keys(Feedback).map((index) => (
              <span
                onClick={(e) => handleSetClick(e)}
                data-message={index}
                key={index}
              ></span>
            ))}
          </div>
        </div>
        {/* {Feedback.map((item, index) => (
          <div key={index}>
            <p>{item.message}</p>
            <div className="testimonial-user">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        ))} */}

        <div className="testimonial-navigator">
          {/* <span className="arrow-span1" onClick={goToPrevSlide}>
            <img src={GOLEFT} alt="go-left" />
          </span>
          <span className="index">1 / {Feedback.length}</span>
          <span className="arrow-span2" onClick={goToNextSlide}>
            <img src={GORIGHT} alt="go-right" />
          </span> */}
        </div>
      </Col>
      <Col lg={6} className="tesgimonials-bg">
        <img src={REVIEW} alt="testimonials" />
      </Col>
    </Row>
  );
};

export default Testimonials;
