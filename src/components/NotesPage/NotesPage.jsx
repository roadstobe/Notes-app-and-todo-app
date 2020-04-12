import React from 'react';

import './note-page.css';
import NoteApp from "../NoteApp/NoteApp.jsx";

export default class NotesPage extends React.Component{
    render(){
        return (
            <div className='notes-page'>
                <h2 className='notes-header'>Notes</h2>
                <NoteApp />
            </div>
        )
    }
}
