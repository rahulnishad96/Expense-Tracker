import logo from './logo.svg';
import './App.css';
import TodoItems from './components/TodoItems';
import Todo from './components/Todo';
import NewTodo from './components/Form/NewTodo';
import React from 'react';
const arr=[{
  date:new Date(2020,5,25),
  title:"car Assurence",
  price:2.25,
},
{
  date:new Date(2021,6,20),
  title:"bike Assurence",
  price:20.5,
},
{
  date:new Date(2020,5,25),
  title:"medical",
  price:12.5,
},
]
function App() { 
  
const [items,setItems]=React.useState(arr);

const addItemHandler = (item) => {
  setItems(prevItem => {
    return [item,...prevItem];
  })
}
  return (
    
    <div className="App">
      <NewTodo onAddItem={addItemHandler}/>
      <Todo items={items}/>
    </div>
  );
}

export default App;
