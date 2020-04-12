import React from 'react';

import './note-editor.css';


export default class NoteEditor extends React.Component{


    constructor() {
        super();
        this.state = {
            text: '',
            color: '#ff8000',
            tag: []
        }
    }

    handleTextChange(e){
        this.setState({text:e.target.value})
    }

    handleNoteAdd(){
        let newNote = {
            id: Date.now(),
            text: this.state.text,
            color:this.state.color,
            tag: this.state.tag.split(' ')
        };
        this.props.onNoteApp(newNote);
        this.setState({text:''});
    }

    getColorNote(e){
        this.setState({color:e.target.value})
    }

    setTagToNotes(e){
        this.setState({tag:e.target.value})
    }

    render(){
        return (
            <div className="note-editor">
                <textarea
                    className={'text-area'}
                    placeholder='enter note here'
                    rows={5}
                    onChange={this.handleTextChange.bind(this)}
                    value={this.state.text}
                >
                </textarea>
                <input type="text"
                    placeholder="Enter tag"
                    onChange={this.setTagToNotes.bind(this)}
                />
                <input type="color"
                       value={this.state.color}
                    onChange={this.getColorNote.bind(this)}
                />
                <button className='add-button'
                        onClick={this.handleNoteAdd.bind(this)}
                >
                    Add
                </button>
            </div>
        )
    }
}
