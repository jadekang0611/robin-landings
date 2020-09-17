import React, { useState } from 'react';
import '../Projects.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    ToggleButton
} from 'react-bootstrap';

const initialFormData = {
  name: '',
  email: '',
  firstProject: '',
};

const ProjectSignUp = () => {
  const [yesButton, setYesButton] = useState('inactiveButton');
  const [noButton, setNoButton] = useState('inactiveButton');


  const handleYesClick = (e) => {
    e.preventDefault();
    if (yesButton === 'inactiveButton') {
      setNoButton('inactiveButton');
      setYesButton('activeButton');
    } else {
       setNoButton('inactiveButton');
       setYesButton('inactiveButton');     
    }
  }

  const handleNoClick = (e) => {
    e.preventDefault();
    if (noButton === 'inactiveButton') {
      setYesButton('inactiveButton');
      setNoButton('activeButton');
    } else {
      setYesButton('inactiveButton');
      setNoButton('inactiveButton');
    }
  };
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
      <div className='projectFormContainer'>
        <Form className='projectForm'>
          <Form.Group controlId='formName'>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              size='sm'
              type='text'
              name='name'
              placeholder='e.g. John Doe'
              className='projectFormInput'
              // onChange={handleChange}
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
              // onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId='formFirstProject'>
            <Form.Label>Is this your first Robin Project Challenge?</Form.Label>
            <Button
              variant='outlined'
              className={yesButton}
              onClick={handleYesClick}>
              Yes
            </Button>
            <Button
              variant='outlined'
              className={noButton}
              onClick={handleNoClick}>
              No
            </Button>
          </Form.Group>
          <div className='projectSubmitContainer'>
            <button
              type='submit'
              // onClick={handleSubmit}
              className='submit-button'>
              Submit
            </button>
          </div>
        </Form>
      </div>
    );
};

export default ProjectSignUp;
