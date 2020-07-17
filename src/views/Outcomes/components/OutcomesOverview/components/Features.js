import React from 'react';
import '../OutcomesOverview.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import featureImage from '../../../../../assets/feature_dot.png';


const Feature = () => {

    return (
        <div>
        <Container className="featuresContainer" >
            <h3>Our Features</h3>
            <Row className="row row1" >
                <Col className="col col1" md={4}>
                    <Card className="featureCard">
                        <img className="featureImage" src={featureImage} alt="feature"/>
                        <Card.Body className="featureBody">
                            <Card.Title className="featureTitle">Box 1</Card.Title>
                            <Card.Text className="featureText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col col2" md={{ span: 6, offset: 1}}><p>Lorum Ipsum dolor sit amet, consectetur adipiscing elit. Varius vitae enim vestibulum tincidunt.</p></Col>
                <Col className="col col3" md={{ span: 4, offset: 7 }}>
                    <Card className="featureCard">
                        <img className="featureImage" src={featureImage} alt="feature"/>
                        <Card.Body className="featureBody">
                            <Card.Title className="featureTitle">Box 2</Card.Title>
                            <Card.Text className="featureText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col col4" md={{ span: 4, offset: 2 }}>
                    <Card className="featureCard">
                        <img className="featureImage" src={featureImage} alt="feature"/>
                        <Card.Body className="featureBody">
                            <Card.Title className="featureTitle">Box 3</Card.Title>
                            <Card.Text className="featureText">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Feature;