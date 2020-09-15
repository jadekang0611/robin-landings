import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
} from 'react-router-dom';
import './Projects.css';
import { Footer } from '../../components';
import { ProjectHowTo, ProjectResource, ProjectSignUp } from '../../components/Projects';
import { Row, Col, Card } from 'react-bootstrap';


const Projects = () => {
    let {path, url} = useRouteMatch();

    return (
        <>
            <Router>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">User Authentication Project</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Description</h6>
                        <p class="card-text">User Authentication might sound intimidating, but may be easier than you think. It's always the first page we see when we want to log into our favorite sites. Our challenge this week is to recreate your favorite site login page with full CRUD operations. Don't forget to add a bit of your personality to it!</p>
                    </div>
                    <hr></hr>
                    <ul class="nav" >
                        <li class="nav-item" >
                            <Link to={`${url}/sign-up`}>Sign Up</Link>
                        </li>
                        <li class="nav-item" >
                            <Link to={`${url}/how-to-enter`}>How To Enter</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={`${url}/resources`}>Resources</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path={path}>
                            <ProjectSignUp />
                        </Route>
                        <Route path={`${path}/sign-up`}>
                            <ProjectSignUp />
                        </Route>
                        <Route path={`${path}/how-to-enter`}>
                            <ProjectHowTo />
                        </Route>
                        <Route path={`${path}/resources`}>
                            <ProjectResource />
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    );
};

export default Projects;
