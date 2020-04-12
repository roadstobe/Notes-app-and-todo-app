import React from 'react'

import './note-search.css'

export default class NoteSearch extends React.Component{

    searchText(e){
        // console.log(e.target.value)
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className={'search-note'}>
                <input type="text"
                   className='input'
                   placeholder="enter to search"
                       value={this.props.setTag}
                   onChange={this.searchText.bind(this)}
                />
            </div>
        )
    }
}
