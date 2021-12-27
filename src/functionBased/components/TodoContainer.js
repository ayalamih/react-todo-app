import React, { useEffect, Fragment } from 'react'
import { Routes, Route } from "react-router-dom"


import Navbar from "./Navbar"
import TodoContainers from "./TodoContainers"

import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"
import SinglePage from "../../pages/SinglePage"

const TodoContainer = () => {
  
  return (
    <>
    <Navbar />
    <Fragment>
    <Routes>
      <Route exact path="/" element={<TodoContainers />} >
      </Route>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/about/about-app" element={<SinglePage />} />
      <Route exact path="/about/about-author" element={<SinglePage />} />
      <Route exact path="*" element={<NotMatch />} />
    </Routes>
    </Fragment>
    </>
  )
}

export default TodoContainer