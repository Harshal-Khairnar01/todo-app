import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  handleDelete,
  handleComplete,
  showUndo,
  lastDeletedTodo,
  handleUndo,
}) {
  return (
    <div className=" relative lg:w-3/5 w-11/12 lg:px-20 py-5 ">
      <div className=" mt-10">
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

      {showUndo && lastDeletedTodo && (
        <div className=" absolute w-11/12  top-0  right-0  px-4 py-2  rounded shadow-md flex items-center gap-4 justify-center bg-transparent text-white ">
          <span className=" text-2xl">Task deleted:</span>
          <button
            onClick={() => {
              handleUndo();
            }}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}
