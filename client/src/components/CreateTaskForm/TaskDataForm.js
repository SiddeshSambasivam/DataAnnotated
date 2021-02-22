import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import FileUpload from '../../components/FileUpload'

/*
const validationSchema = yup.object({
    fileUpload: yup
      .string()
      .required('File upload is required')
      .max(20),
    dataFormat: yup
      .string()
      .required('Data format is required')
      .max(3),
  });
*/


export const TaskDataForm = ({ formData, setFormData, nextStep, prevStep }) => {
    //const classes = useStyles();
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
            //validationSchema={validationSchema}
            >
            {({ errors, touched }) => (
                <Form>
                <h2 className="sub-title" >Upload File</h2>
                {/*}
                <Field
                  name='fileUpload'
                  label='Upload File'
                  margin='normal' 
                  type="text"
                  error={touched.fileUpload && errors.fileUpload}
                  helperText={touched.fileUpload && errors.fileUpload}
                />
                */}

                <Field 
                  name="file" 
                  label="Upload File"
                  type="file" 
                  component={FileUpload}
                />

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
                <button type='submit' onClick={() => setDirection('back')}>Previous Step</button>
                <button type='submit' onClick={() => setDirection('forward')}>Next Step</button>
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };

  

