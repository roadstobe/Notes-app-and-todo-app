import React, {Component} from 'react';

import './search-panel.css';

class SearchPanel extends Component{

  constructor() {
    super();

    this.state={
      searchValue : ''
    };
  }


  onSearchChange (e){
    const term = e.target.value;
    this.setState({
      searchValue: term
    });
    this.props.onSearchChange(term);
  };

  render() {
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={this.state.searchValue}
               onChange={this.onSearchChange.bind(this)}
        />
    );
  }
}

export default SearchPanel;
