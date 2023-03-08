import React from "react";

export default function Todo({todo}){
    function handleComplete(){

    }
    function handleDelete(){
        
    }
    return(
    <div>
        <li key={todo.id}>{todo.task}</li>
            <button>Complete</button>
            <button>Delete</button>
        

    </div>

    )
}