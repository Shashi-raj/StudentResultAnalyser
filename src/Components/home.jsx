import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../App.css"


function Home(){

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <Box>
            <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>S</span>tudent
            <span>R</span>esult
            <span>A</span>nalyser
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to={'/teachersdashboard'}>TeachersDashboard</NavLink>
            </li>
            <li>
            <NavLink to={'/studentdashboard'}>StudentDashBoard</NavLink>
            </li>
            <li>
              <NavLink to="/loginstudent">LoginStudent</NavLink>
            </li>
            <li>
              <NavLink to={"/registerstudent"}>RegisterStudent</NavLink>
            </li>
          </ul>
        </div>

       

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </nav>
        </Box>
    )
}

export default Home;