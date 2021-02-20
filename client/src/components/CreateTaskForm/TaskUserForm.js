import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

/*
const validationSchema = yup.object({
    userSearchQuery: yup
      .string()
      .required('File upload is required')
      .max(20),
  });
*/


export const TaskUserForm = ({ formData, setFormData, nextStep, prevStep }) => {
    //const classes = useStyles();
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
            //validationSchema={validationSchema}
            >
            {({ errors, touched }) => (
                <Form>
                <h2 className="sub-title" >Search for user</h2>
                <Field
                    name='userSearchQuery'
                    label='Search Users'
                    margin='normal' 
                    type="text"
                    error={touched.userSearchQuery && errors.userSearchQuery}
                    helperText={touched.userSearchQuery && errors.userSearchQuery}
                />
                <button type='submit'>Add</button>
                <h2 className="sub-title" >User List</h2>
                <Field
                    name='userList'
                    label='User Kist'
                    margin='normal'
                    type="text"
                    error={touched.userList && errors.userList}
                    helperText={touched.userList && errors.userList}
                />
                <button type='submit' onClick={() => setDirection('back')}>Previous Step</button>
                <button type='submit' onClick={() => setDirection('forward')}>Save as Draft</button>
                <button type='submit' onClick={() => setDirection('forward')}>Create Task</button>
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };

  

