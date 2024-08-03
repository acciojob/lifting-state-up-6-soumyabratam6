import React,{useState} from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Share it with the world', completed: false },
  ]);
  const handleComplete = (id) => {
    console.log(`Marking todo with id ${id} as completed`);
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };
  return (
    <div key={Math.random()}>
       <h1>Todo List</h1>
       <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default App;