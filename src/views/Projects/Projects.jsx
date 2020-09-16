import React, { useState } from 'react';
import './Projects.css';
import { Footer } from '../../components';
import { ProjectHowTo, ProjectResource, ProjectSignUp } from '../../components/Projects';
import { Row, Col, Card } from 'react-bootstrap';


const TABS = {
    'signUp': <ProjectSignUp />,
    'howTo': <ProjectHowTo />,
    'resource': <ProjectResource />,
}


const Projects = () => {
    const [ selectedTab, setSelectedTab ] = useState('signUp');
    const [ signStyle, setSignStyle ] = useState('nav-click');
    const [ enterStyle, setEnterStyle ] = useState ('nav-item');
    const [ resourceStyle, setResourceStyle ] = useState('nav-item');

    const handleSignClick = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        setSelectedTab(e.target.id);
        setSignStyle('nav-click');
        setEnterStyle('nav-item');
        setResourceStyle('nav-item');
    }

    const handleEnterClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setSelectedTab(e.target.id);
        setEnterStyle('nav-click');
        setSignStyle('nav-item');
        setResourceStyle('nav-item');
    };

    const handleResourceClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        setSelectedTab(e.target.id);
        setResourceStyle('nav-click');
        setSignStyle('nav-item');
        setEnterStyle('nav-item');

    };

    return (
      <>
        <div class='project-card'>
          <div class='project-card-body'>
            <h5 class='project-card-title'>User Authentication Project</h5>
            <h6 class='project-card-subtitle mb-2 text-muted'>Description</h6>
            <p class='project-card-text'>
              User Authentication might sound intimidating, but may be easier
              than you think. It's always the first page we see when we want to
              log into our favorite sites. Our challenge this week is to
              recreate your favorite site login page with full CRUD operations.
              Don't forget to add a bit of your personality to it!
            </p>

            <hr></hr>
            <ul class='nav' id='project-nav'>
              <li class={signStyle} id='signUp' onClick={handleSignClick}>
                Sign Up
              </li>
              <li class={enterStyle} id='howTo' onClick={handleEnterClick}>
                How To Enter
              </li>
              <li class={resourceStyle} id='resource' onClick={handleResourceClick}>
                Resources
              </li>
            </ul>
            {TABS[selectedTab]}
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Projects;
