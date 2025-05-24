import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, handleDelete, handleComplete }) {
  return (
    <div className="  flex justify-between lg:px-10 lg:py-2 p-2 items-center   my-2">
      <div className=" flex gap-4 items-center">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => handleComplete(todo.id)}
          className="w-4 h-4 accent-green-500 rounded-2xl focus:ring-green-700"
        />
        <h1
          className={`${
            todo.complete ? " line-through text-gray-500" : " text-gray-200"
          } text-xl`}
        >
          {todo.todo}
        </h1>
      </div>
      <button
        className="  text-red-500 cursor-pointer hover:text-red-600 text-xl"
        onClick={() => handleDelete(todo.id)}
      >
        <FaTrash />
      </button>
    </div>
  );
}
