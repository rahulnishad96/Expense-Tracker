import React,{useState} from 'react'
import TodoDate from './TodoDate';
import Card from './Card';
import './TodoItems.css'
function TodoItems(props) {
    return (
        <Card className="expense-item">
            <TodoDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2> 
                <div className="expense-item__price">${props.price}</div>
            </div>
            {/* <button onClick={EventHandler}>Change Title</button>   */}
        </Card>
    )
}

export default TodoItems
