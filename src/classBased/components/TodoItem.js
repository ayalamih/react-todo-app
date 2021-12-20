import React from 'react'

import styles from './TodoItem.module.scss'

// 需要注意的一个有用提示是，仅在render()方法中包含标记的类组件可以安全地转换为函数组件。

// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

class TodoItem extends React.Component {

    state = {
        editing: false,
    }
    
    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdateDone = event => {
        console.log(event.key)
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    render() {
        const {id, title, completed} = this.props.todo

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        };

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return(
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" className={styles.checkbox}
                        checked={completed} 
                        onChange={() => this.props.handleChangeProps(id)} 
                    /> 
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                    <button onClick={() => this.props.delTodoProps(id)}>Delete</button>
                </div>
                <input 
                    type="text" 
                    style={editMode} 
                    className={styles.textInput} 
                    value={title}
                    name="title"
                    onChange={e => {
                        this.props.setUpdateProps(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}

export default TodoItem