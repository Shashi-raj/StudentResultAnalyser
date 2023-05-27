import React from "react";
import { Routes, Route } from "react-router-dom";
import Addcourse from "./Components/teachers/AddCourse";
import CopoMapping from "./Components/teachers/Copo";
import UploadMarks from "./Components/teachers/UploadMarks";
import Home from "./Components/home";
import CourseRegistraion from "./Components/Students/CourseRegistration";
import RunningTS from "./Components/Students/runningTranscript";
import Result from "./Components/Students/viewResult";
import StudentDashBoard from "./Components/Students/studentDashBoard";
import StudentProfile from "./Components/Students/studentProfile";
import TeachersDashBoard from "./Components/teachers/teachersDashboard";
import Footer from "./Components/footer"
import AllRegisteredCourse from "./Components/Students/AllRegisteredCourse";
import CurEnrollCourse from "./Components/Students/CurSemEnrollCorse";
import GenerateCOPO from "./Components/teachers/ProgressChart";
import Analysis from "./Components/teachers/Analyasis";
import LoginStudent from "./Components/Home/Login/loginStudent";
import RegisterStudent from "./Components/Home/Register/registerStudent";


const App = () => {
  return (
    <div className="app_main">
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/addCourse" element={<Addcourse />}></Route>
      <Route path="/copoMapping" element={<CopoMapping />}></Route>
      <Route path="/upload" element={<UploadMarks />}></Route>
      <Route path="/courseregistration" element={<CourseRegistraion />}></Route>
      <Route path="/runningts" element={<RunningTS />} ></Route>
      <Route path="/result" element={<Result />}></Route>
      <Route path="/studentdashboard" element={<StudentDashBoard />}></Route>
      <Route path="/studentprofile" element={<StudentProfile />}></Route>
      <Route path="/teachersdashboard" element={<TeachersDashBoard />}></Route>
      <Route path="/allRegisteredCourse" element={<AllRegisteredCourse />}></Route>
      <Route path="/CurrentEnrolledCourse" element={<CurEnrollCourse />}></Route>
      <Route path="/generatecopo" element={<GenerateCOPO />}></Route>
      <Route path="/analysis" element={<Analysis />}></Route>
      <Route path= "/loginstudent" element={<LoginStudent />}></Route>
      <Route path="/registerstudent" element={<RegisterStudent />}></Route>
    </Routes>
    <Footer />
    </div>

  );
};

export default App;