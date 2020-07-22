import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';

const Facebook = '/images/logos/Facebook.png';
const Twitter = '/images/logos/Twitter.png';
const LinkedIn = '/images/logos/LinkedIn.png';

const Footer = () => {
  return (
    <div id="footer-section">
      <Row className="footer-row">
        <Col className="footerLogo" xs={6} sm={6} md={3} lg={3}>
          <img
            className="robinLogo"
            src="/images/logos/Robin.png"
            alt="Robin Logo"
          />
        </Col>
        <Col className="footerCol" xs={6} sm={6} md={3} lg={3}>
          <ul>
            <h6>Student</h6>
            <li>
              <a href="/students">Overview</a>
            </li>
            <li>
              <a href="/students/how-it-works">How it works</a>
            </li>
            <li>
              <a href="/students/help-center">Help Center</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </Col>
        <Col className="footerCol" xs={6} sm={6} md={3} lg={3}>
          <ul>
            <h6>Outcome Team</h6>
            <li>
              <a href="/outcomes">Overview</a>
            </li>
            <li>
              <a href="/outcomes/help-center">Help Center</a>
            </li>
            <li>
              <a href="/outcomes/request-demo">Request for Demo</a>
            </li>
          </ul>
        </Col>
        {/* <Col xs={6} sm={6} md={2} className='footerCol'>
                <h6>Employers</h6>
                <ul>
                  <li>
                    <a href='/employers'>Overview</a>
                  </li>
                  <li>
                    <a href='/'>Search Candidates</a>
                  </li>
                </ul>
              </Col> */}
        <Col className="footerCol" xs={6} sm={6} md={3} lg={3}>
          <ul>
            <h6>Company</h6>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            {/* <li>
                    <a href='/'>Blog</a>
                  </li> */}
          </ul>
        </Col>
      </Row>
      <hr></hr>
      <Row className="footerTerms">
        <Col sm={6} md={4} id="copyright">
          ©2020 Robin. All rights reserved
        </Col>
        <Col sm={6} md={3} id="privacy">
          Privacy policy
        </Col>
        <Col sm={6} md={3} id="terms">
          Terms of service
        </Col>
        <Col xs={12} sm={6} md={2} id="social">
          <a
            href="https://www.facebook.com/getmyrobin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" width="24px" height="24px" />
          </a>
          <a
            href="https://www.linkedin.com/company/joinrobin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" width="24px" height="24px" />
          </a>
          <a
            href="https://twitter.com/MyRobinTeam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="twitter" width="24px" height="24px" />
          </a>
          {/* <a
                  href='https://www.youtube.com/channel/UCZYNPt1qBnx8BrPytLc8E7w/featured'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={youtube} alt='youtube' />
                </a> */}
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
