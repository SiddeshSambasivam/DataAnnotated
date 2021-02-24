import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import Navbar from '../../components/Navbar';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {Route, Switch, Link } from "react-router-dom";
import AccountConfirmation from './AccountConfirmation.js'

//Account Creation Form

const validationSchema = yup.object({
    fullName: yup
      .string()
      .required('Full Name is required')
      .max(20),
    email: yup
      .string()
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
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
      });
      return (
        <>
          <Switch>
              <Route path = "/account-confirmation" component={AccountConfirmation}/>
          </Switch>
          <Navbar />
          <h1 className="title account-title">Create Account</h1>
          <div className="account-container">
              
              <Formik
              initialValues= {formData}
              onSubmit={values => {
                  setFormData(values);
              }}
              validationSchema={validationSchema}
              >
              {({ errors, touched }) => (
                  <Form>
                  <h2 className="sub-title account-sub-title" >Full Name</h2>
                  <Field
                      name='fullName'
                      label='Full Name'
                      margin='normal' 
                      type="text"
                      error={touched.fullName && errors.fullName}
                      helperText={touched.fullName && errors.fullName}
                  />
                  <h2 className="sub-title account-sub-title" >Email</h2>
                  <Field
                      name='email'
                      label='Email'
                      margin='normal' 
                      type="email"
                      error={touched.email && errors.email}
                      helperText={touched.email && errors.email}
                  />
                  <h2 className="sub-title account-sub-title" >Username</h2>
                  <Field
                      name='username'
                      label='Username'
                      margin='normal' 
                      type="text"
                      error={touched.username && errors.username}
                      helperText={touched.username && errors.username}
                  />
                  <h2 className="sub-title account-sub-title" >Password</h2>
                  <Field
                      name='password'
                      label='Password'
                      margin='normal' 
                      type="text"
                      error={touched.password && errors.password}
                      helperText={touched.password && errors.password}
                  />              
                  <div className='buttonBox'>
                    <Link to="/account-confirmation">
                        <button className="account-button" type='submit'>Create Account</button>
                    </Link>
                 </div>              
                  </Form>
              )}
              </Formik>
          </div>       
        </>
      );

}

export default AccountForm