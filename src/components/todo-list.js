import React from "react";
import TodoListItem from "./todo-list-item";

/* React Component */
/* JSX type with arrow function*/
const ToDoList = () => {
    return (
        <ul>
            <li><TodoListItem /></li>
            <li><TodoListItem /></li>
        </ul>
    );
};

export default ToDoList;