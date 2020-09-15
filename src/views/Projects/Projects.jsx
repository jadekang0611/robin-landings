import React from 'react';
import './Projects.css';
import { Footer } from '../../components';
import { Row, Col, Card } from 'react-bootstrap';


const Projects = () => {
    return (
        <>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">User Authentication Project</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Description</h6>
                    <p class="card-text">User Authentication might sound intimidating, but may be easier than you think. It's always the first page we see when we want to log into our favorite sites. Our challenge this week is to recreate your favorite site login page with full CRUD operations. Don't forget to add a bit of your personality to it!</p>
                </div>
                <hr></hr>
            </div>
            <Footer />
        </>
    );
};

export default Projects;
