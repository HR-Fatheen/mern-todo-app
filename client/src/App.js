import './index.css';

import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/todos`);
    setTodos(res.data);
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
};


  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleToggle = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo._id === updatedTodo._id ? updatedTodo : todo
      )
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Todo List Web App</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
