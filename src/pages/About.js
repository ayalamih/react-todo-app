import React, { Fragment } from "react"
import { Link, NavLink, useMatch, useLocation, Route, Routes } from "react-router-dom"


import SinglePage from "./SinglePage"


const About = (props) => {
    const location = useLocation();
    console.log(props)
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
            <Fragment>
                <Routes>
                    <Route path={`${location.pathname}/:slug`} element={<SinglePage />} />
                </Routes>
            </Fragment>
          </div>
        )
}

export default About