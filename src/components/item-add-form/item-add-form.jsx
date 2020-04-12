import React, {Component} from "react";


import './item-add-form.css'

export default class ItemAddForm extends Component{

    constructor() {
        super();


        this.state= {
            label: ''
        };

    }



    onLabelChange(e){
        this.setState({
            label: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {


        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit.bind(this)}>
                <input type="text"
                       className='form-control'
                       onChange={this.onLabelChange.bind(this)}
                       placeholder="what needs to be done"
                       value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>

        )
    }
}
