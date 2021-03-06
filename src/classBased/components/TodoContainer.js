import React from 'react'

import {v4 as uuidv4} from 'uuid'

import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

class TodoContainer extends React.Component {
    state = {
     todos: [],
    };
    
    handleChange = (id) => {
        console.log("super clicked: ", id);
        this.setState((prevState) =>({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        }))
    };

    delTodo = (id) => {
        console.log("deleted", id);
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id != id;
                })
            ]

        })
    };

    addTodoItem = title => {
        console.log(title);
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo] // 使用扩展运算符 (...) 获取该列表
        });
    };

    setUpdate = (updateTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateTitle
                }
                return todo
            })
        })
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        //     .then(response => response.json())
        //     .then(data => this.setState({ todos: data }));
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({ todos: loadedTodos })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    componentWillUnmount() {
        console.log("resources cleaning up...")
    }

    render() {
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange} 
                        delTodoProps={this.delTodo}
                        setUpdateProps={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer