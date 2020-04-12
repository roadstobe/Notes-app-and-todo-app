import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import AboutPage from "./components/aboutPage/AboutPage.jsx";
import NotesPage from "./components/NotesPage/NotesPage.jsx";
import TodoPage from "./components/TodoPage/TodoPage.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Menu from "./components/Menu/Menu.jsx";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <Menu/>
                    <div id="appContainer">
                        <Switch>
                            <Route exact path='/' component={AboutPage}/>
                            <Route  path='/about' component={AboutPage}/>
                            <Route  path='/notes' component={NotesPage}/>
                            <Route  path='/todo' component={TodoPage}/>
                            <Route  component={NotFound}/>
                        </Switch>
                    </div>
                </Router>

            </div>
        )
    }
}
