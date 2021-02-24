import React from 'react';
import { Formik, Form, Field } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';

//Account Creation Form

const validationSchema = yup.object({
    username: yup
      .string()
      .max(20)
      .required('Username is required'),
    password: yup
      .string()
      .max(20)
      .required('Password is required')
  });

const AccountForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      return (
        <>
          <div className="container">
              <h1 className="title">Create Account</h1>
              <Formik
              initialValues={formData}
              onSubmit={values => {
                  setFormData(values);
                  nextStep();
              }}
              validationSchema={validationSchema}
              >
              {({ errors, touched }) => (
                  <Form>
                  <h2 className="sub-title" >Username</h2>
                  <Field
                      name='username'
                      label='Username'
                      margin='normal' 
                      type="text"
                      error={touched.username && errors.username}
                      helperText={touched.username && errors.username}
                  />
                  <h2 className="sub-title" >Password</h2>
                  <Field
                      name='password'
                      label='Password'
                      margin='normal' 
                      type="text"
                      error={touched.password && errors.password}
                      helperText={touched.password && errors.password}
                  />
               
                  <div className='buttonBox'>
                    <button className='next-info' type='submit'>Log In</button>
                  </div>              
                  </Form>
              )}
              </Formik>
          </div>       
        </>
      );

}

export default LogInForm