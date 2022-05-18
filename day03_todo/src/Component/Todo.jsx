import React from 'react'


const Todo = ({addTodo,x}) => {

const[query,setQuery] = React.useState("");


  return (
    <>


    <div>
       <input type={`text`} placeholder={`Write Something...`} value={query} onChange={(e)=>{
         setQuery(e.target.value);
       }}/>
       <button style={{height:`20px`,fontSize:`15px`}} onClick={()=>{
         //console.log(query);
         addTodo(query);
        var x = setQuery("");
       }}>Add</button>
    </div>

    </>
  )
}

export default Todo