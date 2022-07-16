import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Task from "./Components/Task";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task-1", status: false },
    { id: 1, title: "Task-2", status: false },
  ]);

  const [newTask, setNewTask] = useState(""); //holds temporary data that will be added as new task
  const [updatedTask, setUpdatedTask] = useState(""); //holds data that is being edited as new task

  return (
    <div className="App">
      <header className="App-header">
        Here will be To Do List...
        {/* <Form /> */}
      </header>
      {
      toDo && toDo.length ? "" : "No Tasks..."
      }
      <ul>
        {toDo &&
          toDo.map((task, index) => (
            <Task key={task.id} task={task} index={index}></Task>
          ))}
      </ul>
    </div>
  );
}

export default App;
