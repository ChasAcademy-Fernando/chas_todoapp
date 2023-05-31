import React from "react";
import Todo from "./Todo"
export default function TodoList({todos, SetTodos}){


    return(
        <div>
            <ul>
                {todos.map((todo)=>(

                    <Todo key={todo.id} todo={todo} todos={todos} SetTodos={SetTodos}/>
                ))}
                

            </ul>

        </div>

    )
}