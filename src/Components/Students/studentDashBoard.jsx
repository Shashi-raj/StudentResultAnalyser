import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../App.css"
import { NavLink } from "react-router-dom";

const StudentDashBoard = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
          <h2>
            <span>S</span>tudent
            <span>R</span>esult
            <span>A</span>nalyser
          </h2>
          </a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/courseregistration">CourseRegistraion</NavLink>
            </li>
            <li>
              <NavLink to="/runningts">RunningTS</NavLink>
            </li>
            <li>
              <NavLink to="/result">Result</NavLink>
            </li>
            <li>
              <NavLink to="/allRegisteredCourse">AllRegisteredCourse</NavLink>
            </li>
            <li>
              <NavLink to={"/CurrentEnrolledCourse"}>CurrentSemCourse</NavLink>
            </li>
          </ul>
        </div>

       

          {/* hamburget menu start  */}
          <div className="hamburger-menu" >
            <a className="menu_a" href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </nav>

    </>
  );
};

export default StudentDashBoard;