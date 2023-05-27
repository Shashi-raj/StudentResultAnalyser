import React from "react";
import "./uploadMarks.css"
import TeachersDashBoard from "./teachersDashboard";


function UploadMarks() {
    return (
        <>
        <TeachersDashBoard />
        <div className="body1">
           
            <form className="form1">
                <label className="label1">Session:
                    <input className="input1" type="text" /></label>
                <br />
                <label className="label1">Semester          :
                    <input className="input1" type="text" /></label>
                <br />
                <label className="label1">Department        :
                    <input className="input1" type="text" /></label>
                <br />
                <label className="label1">Course Code       :
                    <input className="input1" type="text" /></label>
                <br />
                <label className="label1">Test Type         :
                    <input className="input1" type="text" /></label>
                <br />
                <label className="label1">Number of Question:
                    <input className="input1" type="number" /></label>
                <br />
                <label className="label1">Upload File:
                    <input className="input1"  type="file" name="uploadMarks"/></label>
                <br/>
                 <label className="label1"><input className="input1" type="submit" value="Submit"/></label>
            </form>
        

        </div>
        </>
    )
}

export default UploadMarks;
