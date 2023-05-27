import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../App.css"
import { NavLink } from "react-router-dom";

const TeachersDashBoard = () => {
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
              <NavLink to="/addCourse">AddCourse</NavLink>
            </li>
            <li>
              <NavLink to="/copoMapping">CopoMapping</NavLink>
            </li>
            <li>
              <NavLink to="/upload">UploadMarks</NavLink>
            </li>
            <li>
              <NavLink to="/generatecopo">GenerateCOPO</NavLink>
            </li>
            <li>
              <NavLink to="/analysis">Analysis</NavLink>
            </li>
          </ul>
        </div>

       

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href=" " className="menu_card" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu size={20} />
            </a>
          </div>
        
      </nav>

    </>
  );
};

export default TeachersDashBoard;