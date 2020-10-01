import React from 'react';
import './NewsBlog.css';
// import { NewsCard } from '../../components';
import { Row, Col } from 'react-bootstrap';

const NewsBlog = () => {
  return (
    <div className='newsContainer'>
      <h1>Latest News</h1>
      <Row className='newsRow'>
        <Col xs={12} md={6} lg={4} className='news-content'>
          <div className='news-card1'>
            <h2 className='news-title'>New Robin has arrived!</h2>
            <p className='news-description'>
              We heard needs and feedbacks from current and graduate bootcamp
              students and outcomes. Robin has a whole new look and we're
              excited to show you what we've been working on.{' '}
              <a
                href='https://app.myrobin.io/sign-up'
                target='_blank'
                rel='noopener noreferrer'
                alt='login'>
                Sign up
              </a>{' '}
              or{' '}
              <a
                href='https://app.myrobin.io/signin'
                target='_blank'
                rel='noopener noreferrer'
                alt='login'>
                log in
              </a>{' '}
              to see what's new!
            </p>
            <div>
              <img src='/images/blogs/NewLook.png' alt='article-img'></img>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className='news-content'>
          <div className='news-card2'>
            <h2 className='news-title'>Robin 1st Project Week</h2>
            <p className='news-description'>
              Looking for a new project to build? Then get ready to join us for
              our first project week 10/5 -10/9! During Robin project week, you
              will be focused on building a feature component that will be
              useful for your future projects.
            </p>
            <a
              href='/projects'
              target='_blank'
              rel='noopener noreferrer'
              alt='projects'>
              Read More <i class='fas fa-long-arrow-alt-right'></i>
            </a>
            <img src='/images/blogs/project-week-min.png' alt='article-img'></img>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className='news-content'>
          <div className='news-card3'>
            <h2 className='news-title'>Welcome onboard</h2>
            <p className='news-description'>
              Robin team is welcoming our team member no. 3! We are excited to
              work with our new Front-end Engineer, Daisy Yau.
            </p>
            <a
              href='https://www.linkedin.com/feed/update/urn:li:activity:6673225475286011904/'
              target='_blank'
              rel='noopener noreferrer'
              alt='example title'>
              Read More <i class='fas fa-long-arrow-alt-right'></i>
            </a>
            <img src='/images/blogs/Welcome_Daisy.png' alt='article-img'></img>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsBlog;
