import React from 'react';
import ReactDOM from 'react-dom'

import App from './app.jsx';


export default class Main extends React.Component{
    render(){
        return (
            <div>
                <h2>App</h2>
            </div>
        )
    }
}


ReactDOM.render (<App />, document.getElementById('app'));
