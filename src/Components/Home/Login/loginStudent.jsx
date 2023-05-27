import React from "react";
import Home from "../../home";
import "./login.css"
import { useFormik } from "formik";
import { signUpSchema } from "../../Schemas/index";

function LoginStudent(){

    const initialValues = {
        email:"",
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

    return (
        <>
            <Home />
            <div className="login_container">
            
                <form onSubmit={handleSubmit}>
                <div className="login_row">
                    <label>Email</label>
                    <input id="email" name="email" type="email"
                     placeholder="Enter yor email id" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                     />
                     {touched.email && errors.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                </div>
                <div className="login_row">
                    <label>Password</label>
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
                <div className="login_row">
                    <button className="login_btn" type="submit" name="register">Login</button>
                </div>
                </form>

            </div>
        </>
    )
}

export default LoginStudent;