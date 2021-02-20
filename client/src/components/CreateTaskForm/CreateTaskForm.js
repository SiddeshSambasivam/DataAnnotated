import React, {useState} from 'react';
import './style.css';
import {Formik} from 'formik';



import {TaskInfoForm} from './TaskInfoForm';

const CreateTaskForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    taskName: '',
    labelQuantity: 0,
    labels: '',
  });
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  switch (step) {
    case 1:
      return (
        <TaskInfoForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    /*  
    case 2:
      return (
        <TaskDataForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <TaskUserForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    
    default:
      return <Success />;
    */
  }
}

export default CreateTaskForm;