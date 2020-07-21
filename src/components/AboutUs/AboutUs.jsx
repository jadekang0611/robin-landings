import React from 'react';
import './AboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import AboutusImage from '../../assets/aboutus.png';

const DEMO2 = '/images/application/StudentApp2.png';
const DEMO3 = '/images/application/StudentApp3.png';

const AboutUs = () => {
    return (
        <div>
            <Container>
                <Row className='aboutus1'>
                    <Col>
                    <h1>About Us</h1>
                    <h3>How Robin Began?</h3>
                    <p>Robin was born out of the current state of technology industries where the bootcamp industry is growing while competition among candidates is becoming more fierce due to employers requiring more technical skills from entry level positions</p>

                    <h3>Why was Robin born now?</h3>
                    <p>In this competitive job market, however, we noticed that while colleges and universities have been revamping their career service infrastructure by configuring career service software platforms like Handshake to streamline students' outcome experiences with career services and employers, bootcamps are still supporting thousands of students with spreadsheets without having any bootcamp-specific software to streamline this process.</p>
                    </Col>
                    <Col>
                        <div className="demo-img">
                            <img src={AboutusImage} alt="about-us" className="aboutus-img" />
                        </div>
                    </Col>
                </Row>
                <Row className='aboutus2'>
                    <Col>
                        <h3>What does Robin do?</h3>
                        <p>As of today, with Robin, bootcamp students demonstrate their technical skills by solving algorithm challenges, building applications, and communicating with their respective bootcamps about how they are doing with career preparation. With every activity the students put in, their shareable unique technical portfolios are created and updated.</p>

                    </Col>
                    <Col>
                        <div className="demo-img">
                            <img src={DEMO2} alt="about-us" className="aboutus-demo2" />
                        </div>
                    </Col>
                </Row>
                <Row className='aboutus3'>
                    <Col>
                        <p>On the other side, with Robin, bootcamps can easily track and manage each and every students' performance and tasks related to career preparations. Therefore, bootcamps now have the ability to truly provide a curated career service to each student based on real-time data.</p>
                    </Col>
                    <Col>
                        <div className="demo-img">
                            <img src={DEMO3} alt="about-us" className="aboutus-demo3" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;