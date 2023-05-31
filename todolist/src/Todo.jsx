import React, { useState } from "react";

export default function Todo({todo, todos, SetTodos}){
    
    const [isComplete, SetIsComplete] = useState(false)
    function handleComplete(){
        console.log(todos)
    todo.completed = true
    SetIsComplete(true)

    }
    function handleNotComplete(){
        
    todo.completed = false
    SetIsComplete(false)

    }
    function handleDelete(){
        SetTodos(todos.filter(deleteTodo => deleteTodo.id !== todo.id ))
    }
    return(
    <div>
        <li key={todo.id} className=" flex space-x-3 space-y-4 items-center">
            <div className=" text-base">
            {todo.task}
            </div>
            {isComplete? (
                <button className=" p-2 rounded-2xl bg-gray-500" onClick={handleNotComplete}>Done</button>
            ):(
                <button className=" p-2 rounded-2xl bg-orange-500"onClick={handleComplete}>Done?</button>
            )}
            
            <button onClick={handleDelete}>Delete</button>
        </li>

    </div>

    )
}