import React from 'react';
import './style.css'

function FileUpload(props) {
  const {field, form} = props

  const handleChange = (e) => {
    const file  =  e.currentTarget.files[0]
    const reader = new FileReader()
    //const imgTag = document.getElementById("myimage");
    //imgTag.title = file.name;
    const fileTag = document.getElementById("myFile")
    fileTag.title = file.name
    /*
    reader.onload = function(event) {
      fileTag.src = event.target.result
    };
    */
    reader.readAsDataURL(file)
    form.setFieldValue(field.name, file)
  };

  return (
    <div>
      <input type={'file'} onChange={(o) => handleChange(o)} className={'form-control'}/>
        <img src={''} alt="" id={'myFile'}/>
    </div>
  );
}

export default FileUpload;