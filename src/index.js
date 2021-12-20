import React from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes } from "react-router-dom"
// components file
import TodoIndex from './functionBased/components/TodoIndex'

// stylesheet
import "./functionBased/App.css"


ReactDOM.render(<React.StrictMode>
    <Router>
        <TodoIndex />
    </Router>
    </React.StrictMode>, 
    document.getElementById("root"))