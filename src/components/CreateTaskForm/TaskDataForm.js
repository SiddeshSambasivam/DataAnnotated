import React, {useState, useCallback} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './style.css';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import FileDrop from '../../components/FileDrop';
import FileUpload from '../../components/FileUpload';


const validationSchema = yup.object({
    fileUpload: yup
      .mixed()
      .required('* File upload is required'),
    dataFormat: yup
      .string()
      .required('* Data format is required')
  });


export const TaskDataForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [direction, setDirection] = useState('back');

    const onDrop = useCallback(acceptedFiles => {
      // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
      console.log(acceptedFiles);
    }, []);


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
                  onDrop={onDrop}
                />

                <ErrorMessage name="fileUpload" component="span" className="error"/>

                <h2 className="sub-title" >Data Format</h2>               
                <Field
                  as="textarea"
                  id="dataFormat"
                  name='dataFormat'
                  label='Data Format'
                  margin='normal'
                  error={touched.dataFormat && errors.dataFormat}
                  helperText={touched.dataFormat && errors.dataFormat}
                />
                <ErrorMessage name="dataFormat" component="span" className="error"/>
                <div className='buttonBox'>
                  <button className='back' type='submit' onClick={() => setDirection('back')}>Previous Step</button>
                  <button className='next-data' type='submit' onClick={() => setDirection('forward')}>Next Step</button>
                </div>
                
                </Form>
            )}
            </Formik>
        </div>       
      </>
    );
  };

  

