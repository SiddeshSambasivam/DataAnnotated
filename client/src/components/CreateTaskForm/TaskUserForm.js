import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import './style.css'
// import PropTypes from 'prop-types';
// import * as yup from 'yup';

import SearchBar from '../../components/SearchBar';

export const TaskUserForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [direction, setDirection] = useState('back');
    return (
      <>
        <div className="container">
            <h1 className="title">Add Users</h1>
            <Formik
            initialValues={formData}
            onSubmit={values => {
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep();
            }}
            >
            {({ errors, touched }) => (
                <Form>
                <h2 className="sub-title" >Search for user</h2>
                <Field
                    name='userSearchQuery'
                    label='Add Users'
                    component={SearchBar}
                    
                />
                <div className='buttonBox'>
                  <button className='back' type='submit' onClick={() => setDirection('back')}>Previous Step</button>
                  <button className='next' type='submit' onClick={() => setDirection('forward')}>Create Task</button>
                </div>
              
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };

  

