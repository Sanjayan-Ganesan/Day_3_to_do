import React from 'react'
import Todo from './Todo'
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
const TodoList = () => {

const[todos,setTodos] = React.useState([]);

const addTodo = (newtodo)=>{

  
    setTodos([...todos,{
      id:uuidv4 (),
      value:newtodo,
    }]);
    //console.log(12345)
    
    
}


const delete_to_do = (index)=>{
  var new_list = todos;
  new_list.splice(index,1);
  setTodos([...new_list])

 
}
    

  return (
    <>
    <div>
        <Todo addTodo={addTodo}/>
        <TodoItem>
        {todos.map((todo,index)=>{
      return (
      <div key={todo.id}>
      <h3>{todo.value}</h3>
       <button onClick={()=>delete_to_do(index)}>Delete</button>
      </div>
      );
      
    
    })}
        </TodoItem>
    </div>


   
    </>
  )
}

export default TodoList