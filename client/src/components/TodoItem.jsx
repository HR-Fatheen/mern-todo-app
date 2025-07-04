import React from "react";
import axios from "axios";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
      onDelete(todo._id);
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const handleToggle = async () => {
    try {
      const updated = await axios.put(`http://localhost:5000/api/todos/${todo._id}`, {
        done: !todo.done,
      });
      onToggle(updated.data);
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        backgroundColor: todo.done ? "#d4edda" : "#fff",
        textDecoration: todo.done ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
        margin: "0 auto",
      }}
    >
      <span>{todo.task}</span>
      <div>
        <button onClick={handleToggle} style={{ marginRight: "10px" }}>
          {todo.done ? "Undo" : "Done"}
        </button>
        <button onClick={handleDelete} style={{ color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
