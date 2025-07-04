import React, { useState } from "react";
import axios from "axios";

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const res = await axios.post("http://localhost:5000/api/todos", { task });
      onAdd(res.data); // Pass the new todo to parent
      setTask(""); // Clear input
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "60%" }}
      />
      <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
