import React, { useState, useEffect, Fragment } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"

import {v4 as uuidv4} from 'uuid'

import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

const TodoContainers = () => {
  const [todos, setTodos] = useState(getInitialTodos())
  const [ppi, setPpi] = useState({
    p1:0,
    p2:0
  })

  const newPpi = {p1: 1, p2: 1}

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
    setPpi(newPpi)
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

  function test() {
    console.log("test test")
  }

  //useEffect(() => {
  //  console.log("useEffect run")
  //}, test(), [1212])

  useEffect(() => {
    console.log("Time ", new Date())
  }, [])

  useEffect(() => {
    console.log("执行useEffect run", new Date())
  }, [ppi])

  useEffect(() => {
    function discount() {
      console.log("discount")
    }
    return discount()
  }, [])

  return (
    <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={handleChange}
              delTodoProps={delTodo}
              setUpdate={setUpdate}
            />
          </div>
        </div>
  )
}

export default TodoContainers