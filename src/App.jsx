import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task-1", status: false },
    { id: 1, title: "Task-2", status: false },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        Here will be To Do List...
        <Form />
      </header>
    </div>
  );
}

export default App;
