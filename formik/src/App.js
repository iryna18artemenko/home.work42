import React from 'react';
import { useFormik } from 'formik';
import './App.css';
import * as Yup from "yup"



function App() {

  const formik = useFormik({
    initialValues: {
      firstName: "" ,
      email: "",
      phoneNumber: ""
    }, 

    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
      phoneNumber: Yup.number()
      .max(15, "Must be 12 characters or less")
      .required("Required"),
    }),
     
    onSubmit: (values) => {
        console.log(values)
    }
  });

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName" className="label">First Name</label>
          <input
            id = "firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />  
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}   
      
        <label htmlFor="email" className="label">Email</label>
          <input
            id = "email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null} 
      
        <label htmlFor="phoneNumber" className="label">Phone Number</label>
          <input
            id = "phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p> : null}
      
      <button type='submit' className='btn'>Submit</button>
    </form>
  );
}

export default App;
