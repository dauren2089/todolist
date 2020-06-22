import React from "react";
import TodoListItem from "./todo-list-item";

/* React Component */
/* JSX type with arrow function */
const ToDoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Cofee"/></li>
            <li><TodoListItem
                label="Build Awesome App"
                important = {true} /></li>
        </ul>
    );
};

export default ToDoList;