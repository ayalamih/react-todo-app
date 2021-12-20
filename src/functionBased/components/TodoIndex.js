import React, { useState, useEffect, Fragment } from 'react'
import { Routes, Route } from "react-router-dom"

import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"
import TodoContainer from "../../pages/TodoContainer"
import Navbar from "./Navbar"

const TodoIndex = () => {
  return (
    <Fragment>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<TodoContainer />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="*" element={<NotMatch />} />
    </Routes>
    </Fragment>
  )
}

export default TodoIndex