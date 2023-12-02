import React from 'react'
import { Formik } from 'formik';
import { bedTypes } from '../../constants';
function AddHospital() {
  return (
    <div className='border border-2 border-info m-2 p-2'>
        <h2>AddHospital</h2>
        
    <Formik
      initialValues={
                         { 
                            hospitalName: '', 
                            image: '',
                            area:'',
                            reviews:[],
                            bedTypes:[],
                            beds:[]
                         }
                    }
      
      onSubmit={(values)=>{
        console.log("new hospital")
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="hospitalName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hospitalName}
            placeholder='Enter Hospital Name'
          />
          
          <input
            type="text"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
            placeholder='Enter Hospital image url'
          />
           <input
            type="text"
            name="area"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.area}
            placeholder='Enter Hospital Name'
          />
        <button>Add Bed Type to Hospital</button>
        <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);


   
}

export default AddHospital