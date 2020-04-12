import React from 'react';
import Note from '../Note/Note.jsx'

import Masonry from 'masonry-layout'

import './notes-grid.css';


export default class NoteGrid extends React.Component{


    componentDidMount(){

        let grid = this.refs.grid;

         this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.notes.length !== prevProps.notes.length ){
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    getTagId(idNote, idTag){
        this.props.onTag(idNote, idTag)
    }


    render(){
        return (
            <div className="notes-grid" ref='grid'>
                {this.props.notes.map(el=>{
                    return (
                        <Note
                            key={el.id}
                            id={el.id}
                            color={el.color}
                            text={el.text}
                            tags={el.tag}
                            deleteNote={()=>this.props.onDelete(el.id)}
                            onTag={this.getTagId.bind(this)}
                        />
                    )
                })}
            </div>
        )
    }
}
