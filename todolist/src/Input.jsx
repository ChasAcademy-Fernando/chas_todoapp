import React, { useRef } from "react";

let idCounter = 0;
function Input({SetInput, SetTodos, todos, input}){
        const inputRef = useRef();

function handleClick(e){
        e.preventDefault()
    idCounter = idCounter + 1;
    
 SetTodos([...todos,{
        task: input, 
        completed: false,
        id: idCounter
}])
SetInput("");
 }
function inputHandler(){
        SetInput(inputRef.current.value)
}


return(
<div >
        <form action="submit" onSubmit={handleClick} className=" space-x-2">
        <input value={input} ref={inputRef} type="text" onChange={inputHandler} className=" outline outline-1"/>
        <button onClick={handleClick}>Click me</button>
        </form>
    
</div>    
)
}
export default Input