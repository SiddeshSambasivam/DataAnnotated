import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import FileUpload from '../../components/FileUpload'


const validationSchema = yup.object({
    fileUpload: yup
      .mixed()
      .required('* File upload is required')
  });

export const TaskDataForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [direction, setDirection] = useState('back');
    return (
      <>
        <div className="container">
            <h1 className="title">Data</h1>
            <Formik
            initialValues={formData}
            onSubmit={values => {
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep();
            }}
            
            validationSchema={validationSchema}
            >
            {({ errors, touched }) => (
                <Form>
                <h2 className="sub-title" >Upload File</h2>
                <Field 
                  name="fileUpload" 
                  label="Upload File"
                  type="file" 
                  component={FileUpload}
                />
                <ErrorMessage name="fileUpload" component="span" className="error"/>

                <h2 className="sub-title" >Data Format</h2>
                {/*
                <Field
                  name='dataFormat'
                  label='Data Format'
                  margin='normal'
                  type="text"
                  error={touched.dataFormat && errors.dataFormat}
                  helperText={touched.dataFormat && errors.dataFormat}
                />
                */}
                <Field 
                  name="dataFormat" 
                  as="select" 
                  className="format-select">
9                   <option value="Format 1">Format 1</option>
10                  <option value="Format 2">Format 2</option>
11                  <option value="Format 3">Format 3</option>
12              </Field>
                <div className='buttonBox'>
                  <button className='back' type='submit' onClick={() => setDirection('back')}>Previous Step</button>
                  <button className='next' type='submit' onClick={() => setDirection('forward')}>Next Step</button>
                </div>
                
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };

  

