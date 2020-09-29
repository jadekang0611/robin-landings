import React, { useState } from 'react';
import '../Projects.css';
import API from '../../../api';
import Spinner from 'react-bootstrap/Spinner';

import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

const initialFormData = {
  name: '',
  email: '',
  firstProject: '',
};

const ProjectSignUp = () => {
  const [yesButton, setYesButton] = useState('inactiveButton');
  const [noButton, setNoButton] = useState('inactiveButton');
  const [submit, setSubmit] = useState(false);
  const [firstProject, setFirstProject] = useState('n/a');
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const loader = () => {
    if (loading) {
      return (
        <Spinner className='spinner' animation='border' variant='primary' />
      );
    }
  };

  const handleYesClick = (e) => {
    e.preventDefault();
    if (yesButton === 'inactiveButton') {
      setNoButton('inactiveButton');
      setYesButton('activeButton');
      setFirstProject('yes');
    } else {
      setNoButton('inactiveButton');
      setYesButton('inactiveButton');
      setFirstProject('n/a');
    }
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    if (noButton === 'inactiveButton') {
      setYesButton('inactiveButton');
      setNoButton('activeButton');
      setFirstProject('no');
    } else {
      setYesButton('inactiveButton');
      setNoButton('inactiveButton');
      setFirstProject('n/a');
    }
  };

  document.title = 'Project Challenge Sign Up | Robin';

  const handleChange = (e) => {
    setShow(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const isEmpty = (str) => {
    return !str || 0 === str.length;
  };

  function AlertDismissibleExample() {
    if (show) {
      return (
        <Alert variant='danger' onClose={() => setShow(false)} dismissible>
          Please fill out every field and choice on the form.
        </Alert>
      );
    }
  }

  const handleSubmit = async (e) => {
    // setNotLoading(false);
    e.preventDefault();
    setLoading(true);
    setShow(false);
    if (
      !isEmpty(formData.name) &&
      !isEmpty(formData.email) &&
      firstProject !== 'n/a'
    ) {
      const msg = {
        subject: `${formData.name}, you signed up for Robin's Project Challenge!`,
        sender: 'Robin <team@myrobin.io>',
        to: formData.email,
        text: `${formData.name}, you signed up for Robin's Project Challenge. \n First Project: ${firstProject}`,
        template_id: 'd-fe19ace7aeb44457a1f5f053d109e28d',
        name: formData.name,
        email: formData.email,
        new: firstProject,
      };

      let res = await API.post('sendMail/api/welcome', msg);
      let res2 = await API.post('sendMail/api/admin', msg);
      console.log(res);
      console.log(res2);
      setSubmit(true);
      console.log(submit);
      setLoading(false);
    } else {
      setShow(true);
      setLoading(false);
    }
    // turn on/off loading
  };

  return (
    <div className='projectFormContainer'>
      {!submit && (
        <Form className='projectForm'>
          <Form.Group controlId='formName'>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              size='sm'
              type='text'
              name='name'
              placeholder='e.g. John Doe'
              className='projectFormInput'
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
              className='projectFormInput'
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId='formFirstProject'>
            <Form.Label>Is this your first Robin Project Challenge?</Form.Label>
            <Button
              variant='outlined'
              className={yesButton}
              onClick={handleYesClick}
            >
              Yes
            </Button>
            <Button
              variant='outlined'
              className={noButton}
              onClick={handleNoClick}
            >
              No
            </Button>
          </Form.Group>
          {AlertDismissibleExample()}
          <div className='projectSubmitContainer'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='submit-button'
            >
              Submit {loader()}
            </button>
          </div>
        </Form>
      )}
      {submit && (
        <div className='submittedMessage'>
          <h5>
            Thanks for signing up. Don't forget to save the date on your
            calendar!
          </h5>
        </div>
      )}
    </div>
  );
};

export default ProjectSignUp;
