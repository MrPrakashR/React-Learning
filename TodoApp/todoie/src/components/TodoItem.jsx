import React from "react";

const TodoItem = (prop) => {
    return (
        <li className="todo-item">
            <span>
            { prop.completed ? <></> :<input type="checkbox" />}
            <span className="todo-item-title">{prop.text}</span>
            </span>
            <p>...</p> 
        </li>
    )
}

export default TodoItem