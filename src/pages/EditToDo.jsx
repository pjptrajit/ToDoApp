import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToDoContext } from "../context/ToDoProvider";

function EditTodo() {
  const navigate = useNavigate();
  const { dispatch } = useContext(ToDoContext);
  const location = useLocation();
  const [todo, setTodo] = useState(location.state.title);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-5">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none border border-gray-300 p-2 w-full rounded text-sm sm:text-base"
          type="text"
          placeholder="Edit item..."
          required
        />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={() => {
              dispatch({
                type: "edit",
                payload: { id: location.state.id, title: todo },
              });
              setTodo("");
              navigate("/todo");
            }}
            className="bg-black text-white px-4 py-2 rounded-md w-full sm:w-1/2 text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/todo")}
            className="bg-black text-white px-4 py-2 rounded-md w-full sm:w-1/2 text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
