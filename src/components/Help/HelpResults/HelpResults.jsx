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
    history.goBack();
  };


  return (
    <div>
      {searchQuestion &&
          <div>
            <h1>{searchQuestion.question}</h1> 
            <h6>{searchQuestion.answer}</h6>
          </div>}
      <Footer />
    </div>
  );
};

export default HelpResults;
