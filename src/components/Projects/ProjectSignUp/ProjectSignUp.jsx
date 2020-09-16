import React, { useState } from 'react';
import '../Projects.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

const initialFormData = {
  name: '',
  email: '',
  firstProject: '',
};

const ProjectSignUp = () => {
    // document.title = 'Project Challenge Sign Up | Robin';

    // const [formData, updateFormData] = useState(initialFormData);
    // const [submit, setSubmit] = useState(false);
    // const [notLoading, setNotLoading] = useState(true);

    // const handleChange = (e) => {
    //   updateFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value.trim(),
    //   });
    // };

    // const handleSubmit = (e) => {
    //   setNotLoading(false);
    //   e.preventDefault();

    //   const msg = {
    //     email: formData.email,
    //     subject: `${formData.name} signed up for Project Challenge`,
    //     sender: 'Robin <team@myrobin.io>',
    //     to: 'Robin <team@myrobin.io>',
    //     text: `${formData.name} signed up for Project Challenge. \n
    //     Email: ${formData.email}. \n
    //     firstProject: ${formData.firstProject}. \n`,
    //   };

    //   const options = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(msg),
    //     method: 'POST',
    //   };
    //   fetch(
    //     //   NEED TAYLOR'S HELP //
    //     // 'https://us-central1-myrobin-io.cloudfunctions.net/sendMail/api/newUser',
    //     options
    //   ).then((res) => {
    //     //TODO: if res === true continue, else then throw an error
    //     setNotLoading(true);
    //     setSubmit(true);
    //     console.log(res);
    //     console.log(formData);
    //     console.log(submit);
    //   });
    // };


    return (
      <Form className='projectForm'>
        <Form.Group controlId='formName'>
          <Form.Control
            size='sm'
            type='text'
            name='name'
            placeholder='Full Name'
            className='projectFormInput'
            // onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Control
            size='sm'
            type='email'
            name='email'
            placeholder='Email'
            className='projectFormInput'
            // onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className='projectForm'>
          <Form.Label>Is this your first Robin Project Challenge?</Form.Label>
          <Col sm={10} className='projectRadio'>
            <Form.Check
              type='radio'
              label='Yes'
              inline
              name='formHorizontalRadios'
              id='formHorizontalRadios1'
              // onChange={handleChange}
            />
            <Form.Check
              type='radio'
              label='No'
              inline
              name='formHorizontalRadios'
              id='formHorizontalRadios2'
              // onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <button
          type='submit'
          // onClick={handleSubmit}
          className='submit-button'>
          Sign me up!
        </button>
      </Form>
    );
};

export default ProjectSignUp;
