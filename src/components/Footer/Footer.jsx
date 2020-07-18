import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import RobinLogo from '../../assets/robin-logo.png';
import linkedIn from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.svg';


const Footer = () => {
      return (
        <div className='footerContainer'>
          <Container>
            <Row>
              <Col sm={12} md={3} className='footerLogo'>
                <img className='robinLogo' src={RobinLogo} alt='Robin Logo' />
              </Col>
              <Col xs={6} sm={6} md={2} className='footerCol'>
                <h6>Student</h6>
                <ul>
                  <li>
                    <a href='/'>Overview</a>
                  </li>
                  <li>
                    <a href='/how-it-works'>How it works</a>
                  </li>
                  <li>
                    <a href='/help-center'>Help Center</a>
                  </li>
                  <li>
                    <a href='/signup'>Sign Up</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} sm={6} md={2} className='footerCol'>
                <h6>Outcome Team</h6>
                <ul>
                  <li>
                    <a href='/outcomes'>Overview</a>
                  </li>
                  <li>
                    <a href='/help-center'>Help Center</a>
                  </li>
                  <li>
                    <a href='/request-demo'>Request for Demo</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} sm={6} md={2} className='footerCol'>
                <h6>Employers</h6>
                <ul>
                  <li>
                    <a href='/'>Overview</a>
                  </li>
                  <li>
                    <a href='/'>Search Candidates</a>
                  </li>
                </ul>
              </Col>
              <Col xs={6} sm={6} md={2} className='footerCol'>
                <h6>Company</h6>
                <ul>
                  <li>
                    <a href='/'>About Us</a>
                  </li>
                  <li>
                    <a href='/'>Blog</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <hr></hr>
            <Row className='footerTerms'>
              <Col md={3} id='copyright'>
                ©2020 Robin. All rights reserved
              </Col>
              <Col md={2} id='privacy'>
                Privacy policy
              </Col>
              <Col md={2} id='terms'>
                Terms of service
              </Col>
              <Col md={5} id='social'>
                <a
                  href='https://www.linkedin.com/company/joinrobin'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={linkedIn} alt='linkedin' />
                </a>
                <a
                  href='https://twitter.com/MyRobinTeam'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={twitter} alt='twitter' />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCZYNPt1qBnx8BrPytLc8E7w/featured'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img src={youtube} alt='youtube' />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      );
};

export default Footer;
