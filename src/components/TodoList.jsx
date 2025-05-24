import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, handleDelete, handleComplete }) {
  return (
    <div className=" lg:w-3/5 w-11/12 lg:px-20 py-5 ">
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={i}
            todo={todo}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        );
      })}
    </div>
  );
}
