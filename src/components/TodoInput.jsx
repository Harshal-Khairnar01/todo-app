import React, { useState } from "react";

export default function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: todo,
        complete: false,
      },
    ]);
    setTodo("");
  };
  return (
    <div className="   lg:w-3/5 flex justify-between items-center gap-5 lg:px-20 py-10 w-11/12">
      <input
        type="text"
        className=" text-white  w-[400px] p-2 outline-none  border-b-2 border-white text-lg"
        value={todo}
        placeholder="Enter Task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={addTodo}
        className={`  bg-sky-200 px-4 py-1 rounded-md  text-slate-900 ${
          todo.trim() === ""
            ? "cursor-not-allowed"
            : "cursor-pointer hover:bg-sky-400"
        }`}
        disabled={todo.trim() === ""}
      >
        Add
      </button>
    </div>
  );
}
