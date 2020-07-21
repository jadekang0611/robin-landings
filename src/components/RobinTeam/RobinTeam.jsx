import React from 'react';
import './RobinTeam.css';
import { Container, Row, Col } from 'react-bootstrap';
import Team from '../../assets/robin-team.png';



const RobinTeam = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="demo-img">
                        <img src={Team} alt="team" className="team-img" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Taylor Kang</h4>
                    <p>Co-founder</p>
                </Col>
                <Col>
                    <h4>Jade Kang</h4>
                    <p>Co-founder</p>
                </Col>
            </Row>
        </Container>
    );
};

export default RobinTeam;