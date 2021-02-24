import React from 'react';
import { Formik, Form, Field } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import AnnotationLabels from '../../components/AnnotationLabels';


/*
const validationSchema = yup.object({
    taskName: yup
      .string()
      .required('Task Name is required')
      .max(20),
    labelQuantity: yup
      .number()
      .required('Number of labels is required')
      .max(3),
    labels: yup
      .string()
      .required('Labels are required')
  });
*/

export const TaskInfoForm = ({ formData, setFormData, nextStep }) => {
    //const classes = useStyles();
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
            //validationSchema={validationSchema}
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

                <h2 className="sub-title" >Create Labels</h2>                
                <Field
                    name='userLabels'
                    label='Create Labels'
                    margin='normal'
                    component={AnnotationLabels}
                />
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