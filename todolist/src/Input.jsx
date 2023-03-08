import React from "react";

let idCounter = 0;
function Input({SetInput, SetTodos, todos, input}){

function handleClick(){
    idCounter = idCounter + 1;
    
 SetTodos([...todos,{
        task: input, 
        completed: false,
        id: idCounter
}])
SetInput("");
 }
function inputHandler(e){
        SetInput(e.target.value)
}


return(
<div>
    <input value={input} type="text" onChange={inputHandler}/>
     <button onClick={handleClick}>Click me</button>
</div>    
)
}
export default Input