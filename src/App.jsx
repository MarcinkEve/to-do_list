import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Task from "./Components/Task";

const when = ["When?", "Today", "Tomorrow", "Upcoming", "Someday"];

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState(""); //holds temporary data that will be added as new task
  const [newWhen, setNewWhen] = useState("");
  const [updateData, setUpdateData] = useState(""); //holds data that is being edited as new task

  const addTask = (event) => {
    event.preventDefault();
    if (newTask && newWhen) {
      let idNumber = toDo.length + 1;
      let newEntry = {
        id: idNumber,
        title: newTask,
        status: false,
        when: newWhen,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
      setNewWhen("");
    }
    console.log(newTask, newWhen);
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

    ////// refactored code
    setToDo(
      toDo.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const cancelUpdate = () => {
    setUpdateData("");
    // setUpdateWhen("");
  };

  const changeHolderWhen = (event) => {
    event.preventDefault();
    setUpdateData({ ...updateData, when: event.target.value });
  };
  //this is not update, this is object prepared to push as update data in state
  const changeHolder = (event) => {
    event.preventDefault();
    // let newEntry = {
    //   id: updateData.id,
    //   title: event.target.value,
    //   status: updateData.status ? true : false,
    //   when: event.target.value,
    // };
    // setUpdateData(newEntry);
    // console.log("updateData", updateData.when);

    ////// refactored code
    setUpdateData({
      ...updateData,
      title: event.target.value,
    });
  };
  /////////
  const updateTask = (event, id) => {
    event.preventDefault();
    let removeOldRecords = [...toDo].filter(
      (task) => task.id !== updateData.id
    );
    let updatedObject = [...removeOldRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
  };

  const [simpleForm, setSimpleForm] = useState(true);
  ////////
  return (
    <div className="App">
      <header className="App-header">
        Here will be To Do List...
        <div>
          <button onClick={() => setSimpleForm(false)}>General list</button>
          <button onClick={() => setSimpleForm(true)}>Day list</button>
        </div>
        <Form
          simpleForm={simpleForm}
          newTask={newTask}
          newWhen={newWhen}
          setNewWhen={setNewWhen}
          setNewTask={setNewTask}
          addTask={addTask}
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          changeHolder={changeHolder}
          changeHolderWhen={changeHolderWhen}
          updateTask={updateTask}
          when={when}
        />
      </header>
      {toDo.length ? "" : "No Tasks..."}
      {simpleForm ? (
        when.map((day) => (
          <>
            <div className={toDo.find((el) => el.when === day) ? "" : "dayOff"}>
              {day}
            </div>
            <ol>
              {toDo
                .sort((a, b) => (a.id < b.id ? -1 : 1))
                .sort((a, b) => (a.status < b.status ? -1 : 1))
                .map((task, index) =>
                  task.when === day ? (
                    <Task
                      key={index + 1}
                      task={task}
                      index={index}
                      deleteTask={deleteTask}
                      completedTask={completedTask}
                      setUpdateData={setUpdateData}
                    ></Task>
                  ) : null
                )}
            </ol>
          </>
        ))
      ) : (
        <ol>
          {toDo
            .sort((a, b) => (a.id < b.id ? -1 : 1))
            .sort((a, b) => (a.status < b.status ? -1 : 1))
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
        </ol>
      )}
    </div>
  );
}

export default App;
