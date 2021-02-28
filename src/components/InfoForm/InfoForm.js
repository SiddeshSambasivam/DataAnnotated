import React from 'react';
import './style.css';
import {Formik} from 'formik';

const InfoForm = () => (
  <Formik 
    initialValues={{ name: '' }}  
    onSubmit={values => {
      console.log('submitting', values);
    }}>
    {({ handleSubmit, handleChange, values }) => (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange}   
            value={values.name}  
            name="name"  
            type="text" 
            placeholder="Name">
      </input>
      <button>Submit</button>
    </form>
    )}
</Formik>
  )
  
  export default InfoForm;