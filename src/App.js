import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

handleChange = (event) => {
  this.setState({item: event.target.value});
};

handleSubmit = (event) => {
  event.preventDefault();

if (this.state.item.length) {

const newItem = {
  id: this.state.id,
  name: this.state.item
}

const updatedItems = [...this.state.items, newItem]

this.setState({
  items: updatedItems,
  item: '',
  id: uuid(),
  editItem: false
  });
};
}

clearList = () => {
  this.setState({
    items: []
  })
}

handleDelete = (id) => {
  const filteredItems = this.state.items.filter(item =>
    item.id !== id)
    this.setState({
      items: filteredItems
    })
}

handleEdit = (id) => {
    // const filteredItem = this.state.items.find(item =>
    // item.id === id)
    const filteredItem = this.state.items.filter(item =>
    item.id === id)
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
    this.setState({
      id: filteredItem[0].id,
      item: filteredItem[0].name,
      items: filteredItems,
      editItem: true
    })
 }

  render() {
    return (
      <div className='container'>
        <div className="row">
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>
              todo input
            </h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              clearList={this.clearList} 
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
     
    );
  }
}
