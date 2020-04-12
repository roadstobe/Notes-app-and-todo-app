import React from 'react';

import './notes-app.css';
import NoteEditor from "../NoteEditor/NoteEditor.jsx";
import NoteGrid from "../NoteGrid/NoteGrid.jsx";
import NoteSearch from "../NoteSearch/NoteSearch.jsx";


// const data = [
//     {id:1, text: 'Lorem ipsum dolor sit amet, d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'#55602d'},
//     {id:2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'#ffd700'},
//     {id:3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'gray'},
//     {id:4, text: 'Lorem ipsum dolor sit  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'#ffd700'},
//     {id:5, text: 'Lorem ipsum dolor sit amet, consor inis nostrud exercitation ullamco', color:'red'},
//     {id:6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'yellow'},
//     {id:7, text: 'sLorem ipsum ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco', color:'orange'},
// ];

export default class NoteApp extends React.Component{

    constructor() {
        super();

        this.state = {
            notes:[],
            searchLine:'',
            chooseTag: ''
        };

        this.handleNoteAdd = this.handleNoteAdd.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this._updateLocalStorage();
    }

    componentDidMount() {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes){
            this.setState({notes:localNotes});
        }
    }

    handleNoteAdd(newNote){
        let newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes:newNotes})
    }


    deleteNote(id){
        let idx = this.state.notes.findIndex(el => el.id === id);
        let newArr = [...this.state.notes.slice(0, idx), ...this.state.notes.slice(idx+1)];
        this.setState({
            notes:newArr,
        });

        this.filterByTag = this.filterByTag.bind(this)
    }


    setSearchLineByText(text){


        if(text[0] === '#'){
            this.setState({chooseTag:text.slice(1)})
            this.setState({searchLine : '#'})
        }else {
            this.setState({chooseTag:''})
            this.setState({searchLine : text})
        }

    }
    searchNoteByText(items, text){

        if(!text.trim() || text[0] === '#'){
            return items;
        }
        return items.filter(el => el.text.toLowerCase().indexOf(text.toLowerCase()) > -1)
    }


    getIdTag(idNote, idTag){
        let note = this.state.notes.filter(el => el.id === idNote)
        this.setState({
            chooseTag : note[0].tag[idTag]
        });
    }

    filterByTag(items){
        if(this.state.chooseTag === ''){
            return items;
        }
        return items.filter(el=> [...el.tag].indexOf(this.state.chooseTag) > -1);

    }


    render(){

        let arrNotes = this.filterByTag(this.searchNoteByText(this.state.notes, this.state.searchLine))
        // let newArrAfter = this.filterByTag(arrNotes);

        let tag = !this.state.chooseTag ? this.state.searchLine : '#' + this.state.chooseTag
        return (
            <div className="notes-app">
                <NoteEditor onNoteApp={this.handleNoteAdd}/>
                <NoteSearch
                    onSearch={this.setSearchLineByText.bind(this)}
                    setTag={tag}
                />
                <NoteGrid
                    notes={arrNotes}
                    onDelete={this.deleteNote.bind(this)}
                    onTag={this.getIdTag.bind(this)}
                />
            </div>
        )
    }


    _updateLocalStorage(){
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes)
    }
}
