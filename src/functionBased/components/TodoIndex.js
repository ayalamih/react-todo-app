import React, { useState, useEffect, Fragment } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"

import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"
import TodoContainer from "../../pages/TodoContainer"
import Navbar from "./Navbar"

import SinglePage from "../../pages/SinglePage"

const TodoIndex = () => {
  const location = useLocation();
  return (
    <Fragment>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/about/about-app" element={<SinglePage />} />
      <Route exact path="/about/about-author" element={<SinglePage />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
    </Fragment>
  )
}

export default TodoIndex