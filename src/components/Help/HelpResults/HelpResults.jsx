import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../Help.css';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Footer } from '../..';


const HelpResults = (props) => {
  const history = useHistory();
  const location = useLocation();
  const searchQuestion = location.props;

  const goBack = () => {
    history.push('/outcomes/help-center');
  };


  return (
    <div className="resultsRoot">
      <Container className="resultsContainer">
        <Row xs={12} className="resultsBack">
          <Button onClick={goBack} className="backButton" variant="link">
            <i class='fas fa-long-arrow-alt-left'></i>
            Back
          </Button>
        </Row>
        <Row className="resultsRow">
          <Col className="resultsCol">
            {searchQuestion && (
              <div>
                <h1>{searchQuestion.question}</h1>
                <h6>{searchQuestion.answer}</h6>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HelpResults;
