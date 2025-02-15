import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as ROUTES from '../../../Routes';
import { useHistory } from 'react-router';
import '../Help.css';
import helpImage from '../../../assets/help-center.png';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Footer } from '../..';
import { questions } from '../data';
import { HelpResults } from '../../Help';

const Help = (props) => {
  document.title = 'Help Center | Robin';

  const [searchQuestion, setSearchQuestion] = useState(questions);
  const [question, setQuestion] = useState([true]);

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
      setSearchQuestion(questions);
    }
  };

  const handleSubmit = () => {
    setQuestion(false);
  };

  let history = useHistory();

  const handleClick = function (e) {
    let currIndex = e.target.getAttribute('data');
    let path = '/outcomes/help-results';
    history.push({
      pathname: path,
      props: searchQuestion[currIndex],
    });
  };

  return (
    <div className='helpRoot'>
      <Router>
        <div className='helpContainer'>
          <Row className='helpRow'>
            {searchQuestion.length >= 0 && question && (
              <Col xl={6} lg={12}>
                <h5>Help Center</h5>
                <h1>How can we help you?</h1>
                <InputGroup className='searchInput'>
                  <FormControl
                    className='searchForm'
                    placeholder='Describe your issue'
                    aria-label='issue'
                    aria-describedby='basic-addon2'
                    onChange={handleChange}
                  />
                  <InputGroup.Append>
                    <Button
                      className='searchButton'
                      type='button'
                      onClick={handleSubmit}
                    >
                      <i class='fas fa-search'></i>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
                <ul className='questionList'>
                  {searchQuestion &&
                    searchQuestion.map((search, index) => (
                      <li key={index} onClick={handleClick}>
                        <Link to='/outcomes/help-results' data={index}>
                          {search.question}
                        </Link>
                      </li>
                    ))}
                </ul>
              </Col>
            )}

            <ul className='questionList'>
              {searchQuestion.length >= 0 &&
                !question &&
                searchQuestion.map((search, index) => (
                  <li key={index} onClick={handleClick}>
                    <Link to='/outcomes/help-results' data={index}>
                      {search.question}
                    </Link>
                  </li>
                ))}
            </ul>

            {searchQuestion.length === 0 && !question && (
              <h4 className='noResults'>
                No results were found for your search, please try changing the
                search request
              </h4>
            )}

            <Col xl={6} lg={12}>
              <img className='helpImage' src={helpImage} alt='Help Center' />
            </Col>
          </Row>
        </div>
        <Switch>
          <Route exact path={ROUTES.HELP_RESULTS} component={HelpResults} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Help;
