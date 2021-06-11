import React,{useState} from 'react'
import './TodoForm.css'
function TodoForm(props) {
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');


    // const[userInput,setUserInput]=useState({
    //     title:"",
    //     amount:"",
    //     date:""
    // });

    const titleHandler = (event) =>{
        setTitle(event.target.value);

         //2nd method
        // setUserInput({
        //     ...userInput,
        //     title:event.target.value
        // });

         //3rd method
        // setUserInput((prevSate) => {
        //     return {...prevSate,title:event.target.value}
        // });
    }

    const amountHandler = (event) =>{
        setAmount(event.target.value);

        //2nd method
        // setUserInput({
        //     ...userInput,
        //     amount:event.target.value
        // })

         //3rd method
        // setUserInput((prevSate) => {
        //     return {...prevSate,amount:event.target.value}
        // });
    }

    const dateHandler = (event) =>{
        setDate(event.target.value);

        //2nd method
        // setUserInput({
        //     ...userInput,
        //     date:event.target.value
        // })

        //3rd method
        // setUserInput((prevSate) => {
        //     return {...prevSate,date:event.target.value}
        // });
    }
    
    const submitHandler=(event) => {
        event.preventDefault();
        const item={
            title:title,
            price:amount,
            date:new Date(date)
        };

        props.onSaveTodoItem(item);
        setTitle("");
        setAmount('');
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={amount} onChange={amountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={date} onChange={dateHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default TodoForm
