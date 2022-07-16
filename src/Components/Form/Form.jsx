import React from "react";

const Form = ({
  newTask,
  setNewTask,
  addTask,
  updateData,
  cancelUpdate,
  changeHolder,
  updateTask,
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
