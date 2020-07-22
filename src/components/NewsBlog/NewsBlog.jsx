import React from 'react';
import './NewsBlog.css';
// import { NewsCard } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';

const articles = [
  {
    title: 'New Robin is coming!',
    description:
      'We heard needs and feedback from current and graduate bootcamp students and outcomes. Stay tuned for a new Robin!',
    url: '',
    image: '/images/blogs/NewLook.png',
  },
  {
    title: 'Live Event',
    description:
      'Are you considering bootcamp or concerned about your plan after bootcamp? Hear from Jade Kang our co-founder at the live AMA event hosted by CareerKarma.',
    url: 'https://calendly.com/melvinsalvador/ck-ama-jade-kang/?month=2020-07',
    image: '/images/blogs/AMA_Event.png',
  },
  {
    title: 'Welcome onboard',
    description:
      'Robin team is welcoming our team member no.3! We are excited to work with our new front-end engineer, Daisy Yau.',
    url:
      'https://www.linkedin.com/feed/update/urn:li:activity:6673225475286011904/',
    image: '/images/blogs/Welcome_Daisy.png',
  },
];

const NewsBlog = () => {
    return (
      <div className='newsContainer'>
        <h1>Latest News</h1>
        <Row className='newsRow'>
          {/* {articles.map((article, index) => (
            <div id={`content${index}`}>
              <NewsCard data={article} key={index}/>
            </div>
          ))} */}
          <Col md={4} className='news-content'>
            <div className='news-card1'>
              <h2 className='news-title'>New Robin is coming!</h2>
              <p className='news-description'>
                We heard needs and feedback from current and graduate bootcamp
                students and outcomes. Stay tuned for a new Robin!
              </p>
              <img src='/images/blogs/NewLook.png' alt='article-img'></img>
            </div>
          </Col>
          <Col md={5}>
            <div className='news-card2'>
              <Col md={6} className='news-content'>
                <h2 className='news-title'>Live Event</h2>
                <p className='news-description'>
                  Are you considering bootcamp or concerned about your plan
                  after bootcamp? Hear from Jade Kang our co-founder at the live
                  AMA event hosted by CareerKarma.
                </p>
                <a
                  href='https://calendly.com/melvinsalvador/ck-ama-jade-kang/?month=2020-07'
                  target='_blank'
                  rel='noopener noreferrer'
                  alt='example title'>
                  Read More <i class='fas fa-long-arrow-alt-right'></i>
                </a>
              </Col>
              <Col className='news-image-col'>
                <img src='/images/blogs/AMA_Event.png' alt='article-img'></img>
              </Col>
            </div>

            <div className='news-card3'>
              <Col md={6} className='news-content'>
                <h2 className='news-title'>Welcome onboard</h2>
                <p className='news-description'>
                  Robin team is welcoming our team member no. 3! We are excited
                  to work with our new Front-end eEgineer, Daisy Yau.
                </p>
                <a
                  href='https://www.linkedin.com/feed/update/urn:li:activity:6673225475286011904/'
                  target='_blank'
                  rel='noopener noreferrer' alt='example title'>
                  Read More <i class='fas fa-long-arrow-alt-right'></i>
                </a>
              </Col>
              <Col className='news-image-col'>
                <img
                  src='/images/blogs/Welcome_Daisy.png'
                  alt='article-img'></img>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default NewsBlog;