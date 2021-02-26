import React, {isValidElement, useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Navbar from '../../components/Navbar';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {Route, Switch, Link } from "react-router-dom";
import AccountConfirmation from './AccountConfirmation.js'
import PasswordShowHide from '../../components/PasswordShowHide'

//Account Creation Form

const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .max(20)
      .required('* First Name is required')
      .nullable(),
    lastName: yup
      .string()
      .max(20)
      .required('* Last Name is required')
      .nullable(),     
    email: yup
      .string()
      .email('Invalid email')
      .required('* Email is required'),
    username: yup
      .string()
      .max(20)
      .required('* Username is required'),
    password: yup
      .string()
      .max(30)
      .required('* Password is required'),
    passwordConfirm: yup
      .string()
      .max(30)    
      .required('* Password confirmation is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

const AccountForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
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
                validationSchema={validationSchema}
                onSubmit={values => {
                    setFormData(values);
                }}
                >
                {({ errors, touched }) => (
                  <Form>

                    <div className="account-grid">
                      <div>
                        <h2 className="sub-title account-sub-title" >First Name</h2>
                        <Field
                            name='firstName'
                            label='firstName'
                            margin='normal' 
                            type="text"
                            error={touched.firstName && errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                        />
                        <ErrorMessage name="firstName" component="span" className="error"/>
                      </div>
                      <div>
                        <h2 className="sub-title account-sub-title" >Last Name</h2>
                      <Field
                          name='lastName'
                          label='Last Name'
                          margin='normal' 
                          type="text"
                          error={touched.lastName && errors.lastName}
                          helperText={touched.lastName && errors.lastName}
                      />
                      <ErrorMessage name="lastName" component="span" className="error"/>
                      </div>
                      <div>
                        <h2 className="sub-title account-sub-title" >Email</h2>
                        <Field
                            name='email'
                            label='Email'
                            margin='normal' 
                            type="email"
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                        <ErrorMessage name="email" component="span" className="error"/>
                      </div>
                      <div>
                        <h2 className="sub-title account-sub-title" >Username</h2>
                        <Field
                            name='username'
                            label='Username'
                            margin='normal' 
                            type="text"
                            error={touched.username && errors.username}
                            helperText={touched.username && errors.username}
                        /> 
                        <ErrorMessage name="username" component="span" className="error"/>
                      </div>
                      <div>
                        <h2 className="sub-title account-sub-title" >Create Password</h2>
                        <Field
                            name='password'
                            label='Password'
                            margin='normal' 
                            type="text"
                            component={PasswordShowHide}
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password}
                        />
                        <ErrorMessage name="password" component="span" className="error"/>
                      </div>
                      <div>
                        <h2 className="sub-title account-sub-title pass" >Confirm Password</h2>
                        <Field
                            name='passwordConfirm'
                            label='Password Confirm'
                            margin='normal' 
                            type="text"
                            component={PasswordShowHide}
                            secureTextEntry={true}
                            error={touched.passwordConfirm && errors.passwordConfirm}
                            helperText={touched.passwordConfirm && errors.passwordConfirm}
                        />  
                        <ErrorMessage name="passwordConfirm" component="span" className="error"/>
                      </div>                        
                    </div>                               
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