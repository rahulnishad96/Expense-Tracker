import React from 'react'
import TodoItems from './TodoItems';
import Card from './Card';
import './Todo.css'
import TodoFilter from './TodoFilter';
function Todo(props) {
    const [filterYear,setFilterYear]=React.useState('2021');

    const FilterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };
    const filteredItem = props.items.filter(item => {
        return item.date.getFullYear().toString() === filterYear;
      });
    return (
        <Card className="expenses">
            <TodoFilter selected={filterYear} onChangeFilter={FilterChangeHandler}/>

            {/*statically*/}
            {/* <TodoItems date={props.arr[0].date} title={props.arr[0].title} price={props.arr[0].price}/>
            <TodoItems date={props.arr[1].date} title={props.arr[1].title} price={props.arr[1].price}/>
            <TodoItems date={props.arr[2].date} title={props.arr[2].title} price={props.arr[2].price}/> */}
            {
                //ternery operator
               ( filteredItem.length>0 ) ? 
                filteredItem.map((item ,index)=> <TodoItems key={index} date={item.date} title={item.title} price={item.price}/>) : <
                   h3>No Items</h3>
            }
        </Card>
    )
}
export default Todo
