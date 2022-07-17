import React from "react";

const Form = ({
  newTask,
  newWhen,
  setNewWhen,
  setNewTask,
  addTask,
  updateData,
  cancelUpdate,
  changeHolder,
  changeHolderWhen,
  updateTask,
  when,
}) => {
  return (
    <div>
      {updateData ? (
        <>
          {/* Update record */}
          <form>
            <input
              value={updateData && updateData.title}
              onChange={(event) => changeHolder(event)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="enter task"
            />
            <select
              value={updateData.when}
              onChange={(event) => changeHolderWhen(event)}
            >
              {when.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            <button onClick={updateTask} type="update">
              Update
            </button>
            <button onClick={cancelUpdate} type="submit">
              Cancel
            </button>
          </form>
        </>
      ) : (
        <>
          {/* New record */}
          <form>
            <input
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="enter task"
            />
            <select
              value={newWhen}
              onChange={(event) => setNewWhen(event.target.value)}
            >
              {when.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            <button onClick={addTask} type="submit">
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
