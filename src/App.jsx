import React, { useEffect, useState, useRef } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [lastDeletedTodo, setLastDeletedTodo] = useState(null);
  const [showUndo, setShowUndo] = useState(false);

  const undoTimeoutRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    // const updatedTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);
    const index = todos.findIndex((todo) => todo.id === id);
    const deleted = todos[index];
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // storing last deleted and show undo
    setLastDeletedTodo({ todo: deleted, index });
    setShowUndo(true);

    // 🧼 Clear any previous timeout
    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
    }

    // Hide undo after 5 seconds
    undoTimeoutRef.current = setTimeout(() => {
      setShowUndo(false);
      setLastDeletedTodo(null);
      undoTimeoutRef.current = null;
    }, 5000);
  };

  const handleUndo = () => {
    if (undoTimeoutRef.current) {
      clearTimeout(undoTimeoutRef.current);
      undoTimeoutRef.current = null;
    }
    if (lastDeletedTodo) {
      const { todo, index } = lastDeletedTodo;
      const restoredTodos = [...todos];
      restoredTodos.splice(index, 0, todo); // Insert at original index
      setTodos(restoredTodos);
    }
    setShowUndo(false);
    setLastDeletedTodo(null);
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
        showUndo={showUndo}
        lastDeletedTodo={lastDeletedTodo}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleUndo={handleUndo}
      />
    </div>
  );
}
