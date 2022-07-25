import React, { useState, useEffect } from "react";
import "./App.scss";
import FormsContainer from "./Components/FormsContainer";
import Task from "./Components/Task";
import { when } from "./utils/data";

function App() {
  const [toDo, setToDo] = useState([]);

  const [newTask, setNewTask] = useState(""); //holds temporary data that will be added as new task
  const [newWhen, setNewWhen] = useState("");

  const [updateData, setUpdateData] = useState(""); //holds data that is being edited as new task

  const [generalList, setGeneralList] = useState(true);

  ////////////////////////////////////////

  //puslapiui uzsikrovus useEffect uzkrauna duomenis is LS
  // const getTasksFromLS = JSON.parse(localStorage.getItem("AddedTasks"));
  // useEffect(() => {
  //   if (getTasksFromLS === null) {
  //     setToDo([]);
  //   } else {
  //     setToDo(getTasksFromLS);
  //   }
  // }, []);

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
  // ======================== ADD ========================
  let idNumber = "";
  const addTask = (event) => {
    event.preventDefault();

    if (newTask && newWhen) {
      if (toDo.length <= 0) {
        idNumber = 1;
      } else {
        idNumber = toDo[toDo.length - 1].id + 1;
      }

      let newEntry = {
        id: idNumber,
        title: newTask,
        when: newWhen,
        status: false,
        important: false,
      };
      setToDo([...toDo, newEntry]);
      // localStorage.setItem("AddedTasks", JSON.stringify([...toDo, newEntry]));
      setNewTask("");
      setNewWhen("");
    }
  };

  // ======================== DELETE ========================
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    // localStorage.setItem("AddedTasks", JSON.stringify(newTasks));
    setToDo(newTasks);
  };

  // ======================== DONE ========================
  // useEffect(() => {
  // if (taskStatus) {
  // setTaskStatus(!taskStatus);
  //   console.log("taskStatusAGAIN", !taskStatus);
  // } else {
  //   setTaskStatus(taskStatus);
  // }
  // }, []);

  //mark task as completed
  const completedTask = (id, event) => {
    // let newTask = toDo.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, status: !task.status };
    //   }
    //   return task;
    // });
    // setToDo(newTask);

    // setTaskStatus(!taskStatus);
    // console.log("taskStatusAGAIN", !taskStatus);
    ////// refactored code
    // setToDo(
    //   [...toDo].map((task) =>
    //     task.id === id ? { ...task, status: !taskStatus } : task
    //   )
    // );
    console.log("toDoooooooooooo", toDo);

    const checked = [...toDo].map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setToDo(checked);

    // localStorage.setItem("AddedTasks", JSON.stringify(checked));

    // setUpdateData({ ...updateData, status: taskStatus });

    // setUpdateData(
    //   [...toDo].find((task) => (task.id === id ? { ...task, status: true } : { ...task, status: false }))
    // );
    // setUpdateData(
    //   [...toDo].find((task) =>
    //     task.id === id ? console.log("true", taskStatus) : console.log("falsas")
    //   )
    // );

    // setTaskStatus(!taskStatus);
  };

  // const completedTask = (id) => {
  //   let done = [...toDo].map((task) => {
  //     if (task.id === id) {
  //       ...task,
  //       task.status = !task.status
  //     }
  //     return task;
  //   });
  //   setToDo(done);
  // }

  // ======================== IMPORTANT ========================

  const markImportant = (id, event) => {
    const marked = [...toDo].map((task) => {
      if (task.id === id) {
        task.important = !task.important;
      }
      return task;
    });
    setToDo(marked);
    console.log("marked");
  };

  // ======================== CANCEL ========================
  const cancelUpdate = () => {
    setUpdateData("");
  };
  // ======================== SELECT ONCHANGE ========================
  const changeHolderWhen = (event) => {
    event.preventDefault();
    setUpdateData({ ...updateData, when: event.target.value });
  };

  // ======================== INPUT ONCHANGE ========================
  // this is not update, this is object prepared to push as update data in state
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

    ////// refactored code  COMMENTED
    setUpdateData({
      ...updateData,
      title: event.target.value,
    });
  };

  // ======================== UPDATE ========================
  // const updateTask = (id) => {
  //   let idNumber = toDo.length + 1;
  //   let data = JSON.parse(localStorage.getItem("AddedTasks"));
  //   const myData = data.map((task) => {
  //     if (task.id === id) {
  //       return {
  //         ...task,
  //         id: idNumber,
  //         title: newTask,
  //         status: taskStatus,
  //         when: newWhen,
  //       };
  //     }
  //     return task;
  //   });

  //   setToDo(myData);
  //   setUpdateData("");
  //   localStorage.setItem("AddedTasks", JSON.stringify(myData));
  //   window.location.reload();
  // };

  const updateTask = (event, id) => {
    event.preventDefault();
    // let data = JSON.parse(localStorage.getItem("AddedTasks"));

    //=======gaunamas sarasa BE editinamo tasko
    let removeOldRecords = [...toDo].filter(
      (task) => task.id !== updateData.id
    );

    //=======sarasas BE editinamo tasko + paeditintas taskas
    let updatedObject = [...removeOldRecords, updateData];

    //=======setinamas (keiciamas) pagrindinis listas
    setToDo(updatedObject);

    console.log("settodo", updatedObject);
    console.log("updateData", updateData);

    setUpdateData("");
    // localStorage.setItem("AddedTasks", JSON.stringify(updatedObject));
  };

  const removeAll = () => {
    // localStorage.removeItem("AddedTasks");
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
          {toDo.length ? "" : "No Tasks..."}
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
