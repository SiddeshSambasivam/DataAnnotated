import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import AnnotationLabels from '../../components/AnnotationLabels';



const validationSchema = yup.object({
    taskName: yup
      .string()
      .required("* Task Name is required"),  
    userLabels: yup
      .mixed()
      .required('* Labels are required')
    
  });


export const TaskInfoForm = ({ formData, setFormData, nextStep }) => {
    return (
      <>
        <div className="container">
            <h1 className="title">Basic Info</h1>
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
                <h2 className="sub-title" >Task Name</h2>
                <Field
                    name='taskName'
                    label='Task Name'
                    margin='normal' 
                    type="text"
                    error={touched.taskName && errors.taskName}
                    helperText={touched.taskName && errors.taskName}
                />
                <ErrorMessage name="taskName" component="span" className="error"/>

                <h2 className="sub-title" >Create Labels</h2>                
                <Field
                    name='userLabels'
                    label='Create Labels'
                    margin='normal'
                    component={AnnotationLabels}
                />
                <ErrorMessage name="userLabels" component="span" className="error"/>
                <div className='buttonBox'>
                  <button className='next-info' type='submit'>Next Step</button>
                </div>              
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };