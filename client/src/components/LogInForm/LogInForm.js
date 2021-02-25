import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import '../AccountForm/style.css';
import Navbar from '../../components/Navbar';
import PasswordShowHide from '../../components/PasswordShowHide';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup
      .string()
      .max(20)
      .required('Username is required'),
    password: yup
      .string()
      .max(30)
      .required('Password is required')
  });

const LogInForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      return (
        <>
          <Navbar />
          <h1 className="title account-title">Log In</h1>
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
                      component={PasswordShowHide}
                      error={touched.password && errors.password}
                      helperText={touched.password && errors.password}
                  />              
                  <div className='buttonBox'>
                    <a href="/log-in">
                        <button className="account-button" type='submit'>Log In</button>
                    </a>
                 </div>              
                  </Form>
              )}
              </Formik>
          </div>       
        </>
      );


}

export default LogInForm