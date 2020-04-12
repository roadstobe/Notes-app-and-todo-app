import React from 'react';

import App from "../app/index.jsx";

import './todo-page.css';

export default class TodoPage extends React.Component{
    render(){
        return (
            <div className='todo-page'>
                <h2 className='todo-header'>Todo</h2>
                <App />
            </div>
        )
    }
}
