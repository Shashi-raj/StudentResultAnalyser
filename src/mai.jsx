import React from "react";
import { Routes, Route } from "react-router-dom";
import Addcourse from "./Components/teachers/AddCourse";
import CopoMapping from "./Components/teachers/Copo";
import UploadMarks from "./Components/teachers/UploadMarks";
import Home  from "./Components/Home";



const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>

      <Route path="/addCourse" element={<Addcourse />}></Route>

      <Route path="/copoMapping" element={<CopoMapping />}></Route>

      <Route path="/upload" element={<UploadMarks />}></Route>

    </Routes>

  );
};

export default App;