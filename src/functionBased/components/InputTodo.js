import React, {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import { FaPlusCircle } from 'react-icons/fa'

const InputTodo = (props) => {
    const hello = useState("hello")

    const [inputText, setInputText] = useState({
        title: ""
    })

    const user = {
        name: 'ayalamih',
        age: 18,
        gender: 0,
        id: 0
    }

    const onChange = e => {
        // console.log(hello)
        // console.log(updateUser())

        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    function updateUser() {
        return {
            ...user,
            id: uuidv4()
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: ""
            })
        } else {
            alert("Please write item")
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add todo..."
            value={inputText.title}
            name="title"
            onChange={onChange}
          />
          <button className="input-submit">
              <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
          </button>
        </form>
    )
}

export default InputTodo