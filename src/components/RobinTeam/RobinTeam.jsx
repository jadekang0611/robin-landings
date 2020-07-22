import React from 'react';
import './RobinTeam.css';
import { Container, Row, Col } from 'react-bootstrap';

const Team1 = '/images/team/Team-Taylor.png';
const Team2 = '/images/team/Team-Jade.png';
const Team3 = '/images/team/Team-Daisy.png';
const Team4 = '/images/team/JoinUs.png';

const RobinTeam = () => {
  return (
    <div className="teamContainer">
      <h1>Robin Team</h1>
      <Row className="teamRow">
        <Col md={3} sm={6} xs={6} className="teamCol">
          <img src={Team1} alt="team" className="team-img" />
          <div className="teamTitle">
            <h4>Taylor Kang</h4>
            <p>Co-founder</p>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6} className="teamCol">
          <img src={Team2} alt="team" className="team-img" />
          <div className="teamTitle">
            <h4>Jade Kang</h4>
            <p>Co-founder</p>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6} className="teamCol">
          <img src={Team3} alt="team" className="team-img" />
          <div className="teamTitle">
            <h4>Daisy Yau</h4>
            <p>Front-end Engineer</p>
          </div>
        </Col>
        <Col md={3} sm={6} xs={6} className="teamCol">
          <img src={Team4} alt="team" className="team-img" />
        </Col>
      </Row>
    </div>
  );
};

export default RobinTeam;
