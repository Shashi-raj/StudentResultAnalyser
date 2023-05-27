import React from "react";
import Home from "../../home";
import "./registerStuudent.css"
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";

function RegisterStudent(){

    const initialValues = {
        name:"",
        email:"",
        gender:"",
        dob: "",
        department:"",
        stream:"",
        rollno:"",
        password:"",
        confirm_password:""

    }

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
          console.log(values);
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });

  console.log(errors);

    return (
        <>
        <Home />
        <div className="register_container">
            <form onSubmit={handleSubmit}>
            <div className="register_row">
                <label htmlFor="name">Name</label>
                <input id="name" type="name" name="name" 
                 placeholder="Enter Your Name"
                 value={values.name} 
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                {touched.name && errors.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email"
                 placeholder="Enter your email id"
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                />
                {touched.email && errors.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={values.gender} onChange={handleChange}>
                    <option>- -</option>
                    <option>M</option>
                    <option>F</option>
                    <option>O</option>
                </select>
                {touched.gender && errors.gender ? (
                      <p className="form-error">{errors.gender}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" name="dob" 
                value={values.dob} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.dob && errors.dob ? (
                      <p className="form-error">{errors.dob}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="department">Department</label>
                <input id="department" type="text" name="department"
                 placeholder="Enter your department"
                 value={values.department} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.department && errors.department ? (
                      <p className="form-error">{errors.department}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="stream">Course Steam</label>
                <input id="stream" type="text" name="stream"
                 placeholder="Enter yor stream"
                 value={values.stream} 
                onChange={handleChange}
                onBlur={handleBlur}  
                />
                {touched.stream && errors.stream ? (
                      <p className="form-error">{errors.stream}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="rollno">Enrollment Id</label>
                <input id="rollno" type="text" name="rollno" 
                placeholder="Enter your enrollment Id" 
                value={values.rollno} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.rollno && errors.rollno ? (
                      <p className="form-error">{errors.rollno}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" 
                placeholder="Enter your password" 
                value={values.password} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {touched.password && errors.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <label htmlFor="confirm_password">Confirm-Password</label>
                <input id="confirm_password" type="password" name="confirm_password"
                 placeholder="Re-enter your password" 
                 value={values.confirm_password} 
                onChange={handleChange}
                onBlur={handleBlur}
                 />
                {touched.confirm_password && errors.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
            </div>
            <div className="register_row">
                <button className="register_btn" type="submit" name="submit">Register</button>
            </div>
            </form>
        </div>
    </>
    )
}
export default RegisterStudent;
 