import React, { Component } from 'react';
import TodoItem from './TodoItem';


export default class TodoList extends Component {
    render() {
      const { items, clearList, handleDelete, handleEdit } = this.props
        return (
          <ul className='list-group my-5'>
            <h3 className='text-capitalize text-center'>
                todo list
            </h3>
            {
              items.map(item => {
                  return(
                    <TodoItem 
                      handleDelete={() => handleDelete(item.id)} 
                      key={item.id} 
                      title={item.name}
                      handleEdit={() => handleEdit(item.id)}
                    />
                  )
              })
            }
           
            <button 
              type='button' 
              className='btn btn-block btn-5 btn-danger text-capitalize'
              onClick={clearList}
            >
              clear list
            </button>
          </ul>
        )
    }
}
