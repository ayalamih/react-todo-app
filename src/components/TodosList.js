import React from 'react'
import TodoItem from './TodoItem'

class TodosList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.todos.map(todo => (
                    //React want each child in the list to have a unique key prop.
                    // <li key={todo.id} {todo.title}</li>
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        handleChangeProps={this.props.handleChangeProps}
                        delTodoProps={this.props.delTodoProps}
                    />
                ))}
            </ul>
        )
    }
}

export default TodosList