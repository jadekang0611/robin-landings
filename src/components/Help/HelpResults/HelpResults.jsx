import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../Help.css';
import data from '../data';
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
      Help results
      {searchQuestion &&
        searchQuestion.map((search, index) => <div>{search.question} {search.answer}</div>)}
      <Footer />
    </div>
  );
};

export default HelpResults;
