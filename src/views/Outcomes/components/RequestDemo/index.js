import React, { useState } from 'react';
import './RequestDemo.css';
import requestImage from '../../../../assets/outcome-request.png';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Footer } from '../../../../components';

const initialFormData = {
    username: "",
    name: "",
    phone: "",
};

const RequestDemo = () => {
    const [formData, updateFormData] = useState(initialFormData);
    const [submit, setSubmit ] = useState(false);


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        console.log(formData);
        console.log(submit);
    };

    return (
        <div className="requestRoot">
            <Container className="requestContainer">
                <Row xs={1} md={2} className="requestForm">
                    <Col className="requestLeft">
                        {!submit && 
                        <div>
                            <h1>Let's connect</h1>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control size="sm" type="email" name="username" placeholder="e.g. example@mail.com" className="formInput" onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Label>Full name</Form.Label>
                                    <Form.Control size="sm" type="text" name="name" placeholder="e.g. John Doe" className="formInput" onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control size="sm" type="text" name="phone" placeholder="e.g. (777) 777-7777" className="formInput" onChange={handleChange}/>
                                </Form.Group>
                                <button type="submit" onClick={handleSubmit} className="submit-button">Submit</button>
                            </Form>
                        </div>
                        }
                        {submit && 
                        <div>
                            <h2>Thank you for requesting our demo. We will be in touch shortly!</h2>
                        </div>}
                    </Col>
                    <Col className="requestRight">
                        <img className="requestImage" src={requestImage} alt="Outcome Request" />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
};

export default RequestDemo;