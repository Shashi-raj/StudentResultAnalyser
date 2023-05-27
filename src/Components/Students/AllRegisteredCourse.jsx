import React, { useState } from "react";
import "../../App.css"
import { Center } from "@chakra-ui/react";
import StudentDashBoard from "./studentDashBoard";

const ch = [
    {
        code: "Co12",
        title: "cmputer",
        credit: '1'
    },
    {
        code: "Co12",
        title: "cmputer",
        credit: '1'
    },
    {
        code: "Co155",
        title: "aahhah",
        credit: '1'
    },
    {
        code: "Co12",
        title: "cmputer",
        credit: '1'
    }
]

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
      defaultValue || {
        page: "",
        description: "",
        status: "live",
      }
    );
    const [errors, setErrors] = useState("");
  
    const validateForm = () => {
      if (formState.page && formState.description && formState.status) {
        setErrors("");
        return true;
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    };
  
    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      onSubmit(formState);
  
      closeModal();
    };
  
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal">
          <form>
            <div className="form-group">
              <label htmlFor="couse_code">Course Code</label>
              <input name="course_code" onChange={handleChange} value={formState.page} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formState.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Credit</label>
              <select
                name="status"
                onChange={handleChange}
                value={formState.status}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>
            {errors && <div className="error">{`Please include: ${errors}`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}

function AllRegisteredCourse(){
  const [data, setData] = useState(ch);
    
    return (
      <>
      <StudentDashBoard />
       <Center>
         <div className="table_body">
           <table className="main-table">
            <thead className="table_head">
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Credit</th>
            </thead>
                  {data.map((curElm)=>{
                    const {code, title, credit} = curElm;
                    return (
                        <tbody className="table_cell">
                            <td>{code}</td>
                            <td>{title}</td>
                            <td>{credit}</td>
                        </tbody>                   
                    )
                  })}
                
           </table>
        </div>
       </Center>
       </>
    );
}

export default AllRegisteredCourse;