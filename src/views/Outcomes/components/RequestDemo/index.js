import React, { useState } from 'react';
import './RequestDemo.css';
import requestImage from '../../../../assets/outcome-request.png';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Footer } from '../../../../components';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
};

const RequestDemo = () => {
  document.title = 'Request Demo | Robin';

  const [formData, updateFormData] = useState(initialFormData);
  const [submit, setSubmit] = useState(false);
  const [notLoading, setNotLoading] = useState(true);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    setNotLoading(false);
    e.preventDefault();

    const msg = {
      email: formData.email,
      subject: `${formData.name} is requesting a demo.`,
      sender: 'Robin <team@myrobin.io>',
      to: 'Robin <team@myrobin.io>',
      text: `${formData.name} is requesting a demo. \n
      Email: ${formData.email}. \n
      Phone: ${formData.phone}. \n`,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(msg),
      method: 'POST',
    };
    fetch(
      'https://us-central1-myrobin-io.cloudfunctions.net/sendMail/api/newUser',
      options
    ).then((res) => {
      //TODO: if res === true continue, else then throw an error
      setNotLoading(true);
      setSubmit(true);
      console.log(res);
      console.log(formData);
      console.log(submit);
    });
  };

  return (
    <div className='requestRoot'>
      <Container className='requestContainer'>
        <Row xs={1} md={2} className='requestForm'>
          <Col className='requestLeft'>
            {!submit && (
              <div>
                <h1>Let's connect</h1>
                <Form>
                  <Form.Group controlId='formName'>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      name='name'
                      placeholder='e.g. John Doe'
                      className='formInput'
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      size='sm'
                      type='email'
                      name='email'
                      placeholder='e.g. example@mail.com'
                      className='formInput'
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formPhone'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                      size='sm'
                      type='text'
                      name='phone'
                      placeholder='e.g. (777) 777-7777'
                      className='formInput'
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className='loader' hidden={notLoading}>
                    <div className='lds-grid'>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <button
                    type='submit'
                    onClick={handleSubmit}
                    className='submit-button'
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
            {submit && (
              <div>
                <h2>
                  Thank you for requesting our demo. We will be in touch
                  shortly!
                </h2>
              </div>
            )}
          </Col>
          <Col className='requestRight'>
            <img
              className='requestImage'
              src={requestImage}
              alt='Outcome Request'
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default RequestDemo;
