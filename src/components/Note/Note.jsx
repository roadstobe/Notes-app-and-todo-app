import React from 'react';

import './note.css';


export default class Note extends React.Component{


    constructor() {
        super();

        this.getIdTag = this.getIdTag.bind(this);
    }

    getIdTag(idNote,idTag){
        this.props.onTag(idNote, idTag)
    }

    render(){
        console.log(this.props.tags[0])
        if(!this.props.tags[0]){
            return (
                <div>
                    <div
                        className="note"
                        style={{backgroundColor:this.props.color}}>
                        <button
                            className='delete-btn'
                            onClick={this.props.deleteNote}
                        >x</button>
                        <p> {this.props.text}</p>
                        <br/>

                    </div>

                </div>
            )
        }
        return (
            <div>
                <div
                    className="note"
                     style={{backgroundColor:this.props.color}}>
                    <button
                        className='delete-btn'
                        onClick={this.props.deleteNote}
                    >x</button>
                    {this.props.tags.map((el, i) => {
                        return (
                            <span key={i}
                               className={'tag-item'}
                               onClick={()=>this.getIdTag(this.props.id, i)}

                            >#{el}</span>)}
                    )}
                    <p> {this.props.text}</p>
                    <br/>

                </div>

            </div>

        )
    }
}
