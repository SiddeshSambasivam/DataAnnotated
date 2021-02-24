import React from 'react';
import { Formik, Form, Field } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';

//Account Creation Form

const validationSchema = yup.object({
    fullName: yup
      .string()
      .required('Full Name is required')
      .max(20),
    email: yup
      .email('Invalid email')
      .required('Email is required'),
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
        fullName: '',
        email: '',
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
                  <h2 className="sub-title" >Full Name</h2>
                  <Field
                      name='fullName'
                      label='Full Name'
                      margin='normal' 
                      type="text"
                      error={touched.fullName && errors.fullName}
                      helperText={touched.fullName && errors.fullName}
                  />
                  <h2 className="sub-title" >Email</h2>
                  <Field
                      name='email'
                      label='Email'
                      margin='normal' 
                      type="email"
                      error={touched.email && errors.email}
                      helperText={touched.email && errors.email}
                  />
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
                    <button className='next-info' type='submit'>Create Account</button>
                  </div>              
                  </Form>
              )}
              </Formik>
          </div>       
        </>
      );

}

export default AccountForm