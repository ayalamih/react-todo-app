import React, { Fragment } from "react"
import { Link, Route, Routes, useLocation } from "react-router-dom"


import SinglePage from "./SinglePage"


const About = (props) => {
    const location = useLocation();
    console.log(location.pathname)
    return (
          <div className="about__content">
            <ul className="about__list">
              <li>
                <Link to={`${location.pathname}/about-app`}>About App</Link>
              </li>
              <li>
                <Link to={`${location.pathname}/about-author`}>About Author</Link>
              </li>
            </ul>
          </div>
        )
}

export default About