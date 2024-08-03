import React from "react";
const TodoList = ({ todos, onComplete })=>{
    console.log('Rendering TodoList with todos:', todos);
    return (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span >
                {todo.text}
              </span>
              {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
            </li>
          ))}
        </ul>
      );
}
export default TodoList;