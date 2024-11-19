import './App.css';
// src/App.js
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;