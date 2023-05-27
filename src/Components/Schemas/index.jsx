import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  gender: Yup.string().required("Please select options"),
  dob: Yup.string().required("Please enter Date of birth"),
  department: Yup.string().min(2).max(40).required("Please enter your department"),
  stream: Yup.string().min(2).max(25).required("Please enter your stream"),
  rollno: Yup.string().required("Please enter your enrollment id"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string().required("Please confirm password").oneOf([Yup.ref("password"), null], "Password must match"),
});
