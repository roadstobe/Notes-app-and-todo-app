import React, {Component} from 'react';

import AppHeader from '../app-header/index.jsx';
import SearchPanel from '../search-panel/index.jsx';
import TodoList from '../todo-list/index.jsx';
import ItemStatusFilter from '../item-status-filter/index.jsx';
import ItemAddForm from "../item-add-form/index.jsx";

import './app.css';


export default class App extends Component {



    constructor() {
        super();

        this.maxId = 100;
        this.state = {
            todoData : [
                // this.createTodoItem('Drink Coffee'),
                // this.createTodoItem('Make Awesome App'),
                // this.createTodoItem('Have a lunch'),
            ],
            term:'',
            filter: 'active'
        };
    }

    createTodoItem(label){
        return {label, done:false, important: false, id:Date.now() }
    }

    deleteItem(id){
        this.setState(({todoData})=>{
            const idx = todoData.findIndex(el=>el.id === id)
            return {
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx+1)]
            }
        })
    };

    addItem(text){

        this.setState(({todoData})=>{
            const newArray = [...todoData, this.createTodoItem(text)];

            return {todoData: newArray}
        })
    };

    toggleProperty(arr, id, propName){

        const idx = arr.findIndex(el=>el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];


    }

    onToggleImportant(id){
        this.setState(({todoData})=>{
            return {todoData:this.toggleProperty(todoData, id, 'important')}
        })
    };

    onToggleDone(id){
        this.setState(({todoData})=>{

            return {todoData:this.toggleProperty(todoData, id, 'done')}
        })
    };



    onSearchChange(term){
        this.setState({term})
    };

    search  (items, term) {
       if(!term.trim()){
            return items
       }

       return items.filter(el=>{return el.label.toLowerCase().indexOf(term.toLocaleString()) > -1})
    };

    filter(items, filter){
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return  items.filter(el=>!el.done);
            case 'done':
                return  items.filter(el=>el.done);
            default:
                return  items
        }
    }

    onFilterChange(filter){
      this.setState({filter})
    };

  render() {

      const {todoData, term, filter} = this.state;

      const visibleItems = this.filter(this.search(todoData, term), filter);


      const doneCount = todoData.filter(el=>el.done).length;
      const todoCount = todoData.length - doneCount;

      return (
          <div className="todo-app">
              <AppHeader toDo={todoCount} done={doneCount} />
              <div className="top-panel d-flex">
                  <SearchPanel onSearchChange={this.onSearchChange.bind(this)}/>
                  <ItemStatusFilter
                      filter={filter}
                      onFilterChange={this.onFilterChange.bind(this)}
                  />
              </div>

              <TodoList
                  todos={visibleItems}
                  onDeleted={this.deleteItem.bind(this)}
                  onToggleImportant={this.onToggleImportant.bind(this)}
                  onToggleDone={this.onToggleDone.bind(this)}
              />
              <ItemAddForm
                  onItemAdded={this.addItem.bind(this)}
              />
          </div>
      );
  }


    _updateLocalStorage(){
        let todo = JSON.stringify(this.state.todoData);
        localStorage.setItem('todoList', todo)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this._updateLocalStorage();
    }

    componentDidMount() {
        let localTodo = JSON.parse(localStorage.getItem('todoList'));
        if(localTodo){
            this.setState({todoData:localTodo});
        }
    }

};

