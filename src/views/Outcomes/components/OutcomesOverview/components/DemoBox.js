import React from 'react';
import { useHistory } from 'react-router';
import '../OutcomesOverview.css';
import { Jumbotron } from 'react-bootstrap';
import demoRectangle from '../../../../../assets/rectangle.png';


const DemoBox = () => {
    let history = useHistory()

    function handleClick() {
        history.push('/outcomes/request-demo')
    }

    return (
        <Jumbotron className="demoMessage">
            <h1>Ready to improve your skills and get the opportunity to be hired in top companies?</h1>
            <button onClick={handleClick} className="demo-button">Request for Demo</button>
        </Jumbotron>
    );
};

export default DemoBox;