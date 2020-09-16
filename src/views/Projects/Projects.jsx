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

    const handleClick = (e) => {
        console.log(e.target.id)
        setSelectedTab(e.target.id)
    }

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
            <ul class='nav'>
              <li class='nav-item' id='signUp' onClick={handleClick}>
                Sign Up
              </li>
              <li class='nav-item' id='howTo' onClick={handleClick}>
                How To Enter
              </li>
              <li class='nav-item' id='resource' onClick={handleClick}>
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
