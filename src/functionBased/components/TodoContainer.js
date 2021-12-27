import React, { useState, useEffect, Fragment } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"

import {v4 as uuidv4} from 'uuid'

import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
import Navbar from "./Navbar"
import TodoContainers from "./TodoContainers"

import About from "../../pages/About"
import NotMatch from "../../pages/NotMatch"
import SinglePage from "../../pages/SinglePage"

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  // useEffect(() => {
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //       setTodos(loadedTodos)
  //   }
  // }, [setTodos])

  function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

    useEffect(() => {
      // storing todos items
      const temp = JSON.stringify(todos)
      localStorage.setItem("todos", temp)
    }, [todos])

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