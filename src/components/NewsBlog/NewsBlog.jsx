import React from 'react';
import './NewsBlog.css';
import { NewsCard } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';



const NewsBlog = () => {
    return (
        <div>
            <h2>Latest News</h2>
            <Container>
                <Row>
                    <Col md={6}>
                        <NewsCard />
                    </Col>
                    <Col md={6}>
                        <NewsCard />
                    </Col>
                    <Col md={6}>
                        <NewsCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsBlog;