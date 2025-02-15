import React from 'react';
import './NewsBlog.css';
// import { NewsCard } from '../../components';
import { Row, Col } from 'react-bootstrap';

const NewsBlog = () => {
  return (
    <div className="newsContainer">
      <h1>Latest News</h1>
      <Row className="newsRow">
        <Col xs={12} md={6} lg={4} className="news-content">
          <div className="news-card1">
            <h2 className="news-title">New Robin is coming!</h2>
            <p className="news-description">
              We heard needs and feedbacks from current and graduate bootcamp
              students and outcomes. Stay tuned for a new Robin!
            </p>
            <div>
            <img src="/images/blogs/NewLook.png" alt="article-img"></img>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="news-content">
          <div className="news-card2">
            <h2 className="news-title">Live Event</h2>
            <p className="news-description">
                Are you considering bootcamp or concerned about your plan after
                bootcamp? Hear from Jade Kang our co-founder at the live AMA
                event hosted by CareerKarma.
            </p>
            <a
                href="https://calendly.com/melvinsalvador/ck-ama-jade-kang/?month=2020-07"
                target="_blank"
                rel="noopener noreferrer"
                alt="example title"
            >
              Read More <i class="fas fa-long-arrow-alt-right"></i>
            </a>
            <img src="/images/blogs/AMA_Event.png" alt="article-img"></img>
          </div>
        </Col>
        <Col xs={12} md={6} lg={4} className="news-content">
          <div className="news-card3">
            <h2 className="news-title">Welcome onboard</h2>
            <p className="news-description">
              Robin team is welcoming our team member no. 3! We are excited to
              work with our new Front-end Engineer, Daisy Yau.
              </p>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6673225475286011904/"
              target="_blank"
              rel="noopener noreferrer"
              alt="example title"
            >
              Read More <i class="fas fa-long-arrow-alt-right"></i>
            </a>
              <img
                src="/images/blogs/Welcome_Daisy.png"
                alt="article-img"
              ></img>
          </div>
        </Col>


      </Row>
    </div>
  );
};

export default NewsBlog;
