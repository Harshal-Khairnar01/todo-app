import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  return (
    <div className=" w-full bg-slate-950 h-screen flex flex-col gap-10 lg:p-20 p-10  items-center">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      />
    </div>
  );
}
