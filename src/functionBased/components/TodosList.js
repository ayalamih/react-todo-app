import React from 'react'
import TodoItem from './TodoItem'

const TodosList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                    //React want each child in the list to have a unique key prop.
                    // <li key={todo.id} {todo.title}</li>
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.delTodoProps}
                        setUpdateProps={props.setUpdateProps}
                    />
                ))}
        </ul>
    )
}

export default TodosList