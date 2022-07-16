import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Task from "./Components/Task";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState(""); //holds temporary data that will be added as new task
  const [updateData, setUpdateData] = useState(""); //holds data that is being edited as new task

  const addTask = (event) => {
    event.preventDefault();
    if (newTask) {
      let idNumber = toDo.length + 1;
      let newEntry = { id: idNumber, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
    console.log(newTask);
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //mark task as completed
  const completedTask = (id) => {
    // let newTask = toDo.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    // setToDo(newTask);

    //refactored code
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  //is is not update, this is object prepared to push as update data in state
  const changeHolder = (event) => {
    event.preventDefault();
    // let newEntry = {
    //   id: updateData.id,
    //   title: event.target.value,
    //   status: updateData.status ? true : false,
    // };
    // setUpdateData(newEntry);

    //refactored code
    setUpdateData({ ...updateData, title: event.target.value });
  };

  const updateTask = (event, id) => {
    event.preventDefault();
    let removeOldRecords = [...toDo].filter(
      (task) => task.id !== updateData.id
    );
    let updatedObject = [...removeOldRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  return (
    <div className="App">
      <header className="App-header">
        Here will be To Do List...
        <Form
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          changeHolder={changeHolder}
          updateTask={updateTask}
        />
      </header>
      {toDo && toDo.length ? "" : "No Tasks..."}
      <ul>
        {toDo &&
          toDo
            .sort((a, b) => (a.id < b.id ? -1 : 1))
            .sort((a, b) => (a.status > b.status ? -1 : 1))
            .map((task, index) => (
              <Task
                key={index + 1}
                task={task}
                index={index}
                deleteTask={deleteTask}
                completedTask={completedTask}
                setUpdateData={setUpdateData}
              ></Task>
            ))}
      </ul>
    </div>
  );
}

export default App;
