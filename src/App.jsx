import React, { useState, useEffect } from "react";
import "./App.scss";
import FormsContainer from "./Components/FormsContainer";
import Task from "./Components/Task";
import { when } from "./utils/data";

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newWhen, setNewWhen] = useState("");

  const [updateData, setUpdateData] = useState("");
  const [generalList, setGeneralList] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(toDo));
  }, [toDo]);

  const getFromLS = JSON.parse(localStorage.getItem("tasks"));
  useEffect(() => {
    if (getFromLS) {
      setToDo(getFromLS);
    } else {
      setToDo([]);
    }
  }, []);

  const addTask = (event) => {
    event.preventDefault();

    if (newTask && newWhen) {
      let idNumber = new Date().getTime();
      let newEntry = {
        id: idNumber,
        title: newTask,
        when: newWhen,
        status: false,
        important: false,
      };

      setToDo([...toDo, newEntry]);
      setNewTask("");
      setNewWhen("");
    }
  };

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  const completedTask = (id) => {
    const checked = [...toDo].map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setToDo(checked);
  };

  const markImportant = (id) => {
    const marked = [...toDo].map((task) => {
      if (task.id === id) {
        task.important = !task.important;
      }
      return task;
    });
    setToDo(marked);
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  const changeHolderWhen = (event) => {
    event.preventDefault();
    setUpdateData({ ...updateData, when: event.target.value });
  };

  const changeHolder = (event) => {
    event.preventDefault();
    setUpdateData({
      ...updateData,
      title: event.target.value,
    });
  };

  const updateTask = (event) => {
    event.preventDefault();

    let removeOldRecords = [...toDo].filter(
      (task) => task.id !== updateData.id
    );
    let updatedObject = [...removeOldRecords, updateData];

    setToDo(updatedObject);
    setUpdateData("");
  };

  const removeAll = () => {
    setToDo([]);
  };

  return (
    <div className="App container">
      <header className="App__header">
        <h2>To Do List</h2>
        <div className="App__header-buttons">
          <button onClick={(list) => setGeneralList((list) => (list ? 0 : 1))}>
            List view
          </button>
          <button onClick={removeAll}>Clear list</button>
        </div>
      </header>
      <main className="App__main">
        <div className="App__main__listContainer">
          {toDo.length ? (
            ""
          ) : (
            <div className="App__main-empty">No Tasks...</div>
          )}
          {generalList ? (
            when.map((day, index) => (
              <div key={index}>
                <h3
                  className={
                    toDo.find((el) => el.when === day)
                      ? "App__main__listContainer-dayOn"
                      : "App__main__listContainer-dayOff"
                  }
                >
                  {day}
                </h3>
                <ol className="App__main__listContainer-list">
                  {toDo
                    .sort((a, b) => (a.id < b.id ? -1 : 1))
                    .sort((a, b) => (a.important > b.important ? -1 : 1))
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
                          markImportant={markImportant}
                        ></Task>
                      ) : null
                    )}
                </ol>
              </div>
            ))
          ) : (
            <ol className="App__main__listContainer-list">
              {toDo
                .sort((a, b) => (a.id < b.id ? -1 : 1))
                .sort((a, b) => (a.important > b.important ? -1 : 1))
                .sort((a, b) => (a.status < b.status ? -1 : 1))
                .map((task, index) => (
                  <Task
                    key={index + 1}
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    completedTask={completedTask}
                    setUpdateData={setUpdateData}
                    markImportant={markImportant}
                  ></Task>
                ))}
            </ol>
          )}
        </div>
      </main>
      <div className="App__form">
        <FormsContainer
          generalList={generalList}
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
      </div>
    </div>
  );
}

export default App;
