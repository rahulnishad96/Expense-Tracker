import React from 'react'
import './NewTodo.css';
import TodoForm from './TodoForm';
function NewTodo(props) {
    
    const saveTodoItemHandler = (addTodoItem) => {
        const todoItem ={
            ...addTodoItem,
            id:Math.random().toString()
        }
        props.onAddItem(todoItem);
    }
    return (
        <div className='new-expense'>
            <TodoForm onSaveTodoItem={saveTodoItemHandler}/>
        </div>
    )
}

export default NewTodo
