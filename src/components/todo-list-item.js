import React from "react";

/* React Component */
/* JSX type with arrow function */

/* const TodoListItem = (props) => {
    return (
        <span>{ props.label }</span>
        )
} */

/* Destructure Principles in JS */
const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'tomato' : 'black'
    };

    return (
    <span style={style}> { label } </span>
    )
};

export default TodoListItem;