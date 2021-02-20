import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';

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
                <h2 className="sub-title" >Number of Labels</h2>
                <Field
                    name='labelQuantity'
                    label='Number of Labels'
                    margin='normal'
                    type="number"
                    error={touched.labelQuantity && errors.labelQuantity}
                    helperText={touched.labelQuantity && errors.labelQuantity}
                />
                <h2 className="sub-title" >Labels</h2>
                <Field
                    name='labels'
                    label='Labels'
                    margin='normal'
                    type="text"
                    error={touched.labels && errors.labels}
                    helperText={touched.labels && errors.labels}
                    //validation: check that # of submitted labels == # of labels
                />
                <button type='submit'>Next Step</button>
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };