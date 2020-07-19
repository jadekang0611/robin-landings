import React, { useState } from 'react';
import { useHistory } from 'react-router';
import '../Help.css';
import helpImage from '../../../assets/help-center.png';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Footer } from '../..';
import { questions } from '../data';


const Help = (props) => {
  

  const [searchQuestion, setSearchQuestion] = useState([]);
  const [question, setQuestion] = useState([]);

  const handleChange = (e) => {
    let arr = [];
    let val = e.target.value;

    if (val.length !== 0) {
      for (let question of questions) {
      if (question.question.toUpperCase().includes(val.toUpperCase())) {
        arr.push(question);
      }
    }
      setSearchQuestion(arr);
  } else {
      setSearchQuestion(questions)
  }
  }

  let history = useHistory();

  const handleClick = () => {
    // history.push('/help-results')
    let path = '/help-results';
    history.push({
      pathname: path,
      props: searchQuestion,
    });
  }


  return (
    <div className="helpContainer">
      <Container className="helpParent">
        <Row className="helpRow">
          <Col md={6}>
            <h5>Help Center</h5>
            <h1>How can we help you?</h1>
            <InputGroup className='searchInput'>
              <FormControl className="searchForm"
                placeholder='Describe your issue'
                aria-label='issue'
                aria-describedby='basic-addon2'
                onChange={handleChange}
              />
              <InputGroup.Append>
                <Button className="searchButton" type='button' onClick={handleClick}>
                  <i class='fas fa-search'></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={5}>
            <img className='helpImage' src={helpImage} alt='Help Center' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Help;

