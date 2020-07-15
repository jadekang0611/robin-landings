import React from 'react';
import './OutcomesOverview.css';
import outcomeImage from '../../../assets/outcome-overview.png';
import Media from 'react-bootstrap/Media'

const OutcomesOverview = () => {
    return (
        <Media className="messageContainer">
            <Media.Body className="message">
                <h5>Lorem Ipsum Dolor Site Amet</h5>
                <h1>The main message will go here with three lines 65 symbol</h1>
                <h4>Lorem ipsum dolor site amet, consectetur adipiscing elit. Sed duis mi est id non ornare vestibulum orci.</h4>
                <button className="demo-button">Request for Demo</button>
            </Media.Body>
            <img className="messageImage" src={outcomeImage} alt="Outcome Overview" />
        </Media>
    );
};

export default OutcomesOverview;