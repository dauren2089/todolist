import React from 'react';
import ReactDOM from 'react-dom';

/* Importing React Components */
import ToDoList from './components/todo-list';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

/* React Components */

/* React code */
const element = (
    <div>
        <AppHeader />
        <SearchPanel />
        <ToDoList/>
    </div>
);

/* Clean JS code */
//const element = React.createElement('h1', null, 'HelloW!');

ReactDOM.render(element,
    document.getElementById('root'));