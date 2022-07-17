import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import "./form.scss";

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
    <div className="form__container">
      {updateData ? (
        <>
          {/* Update record */}
          <form className="form__edit">
            <input
              value={updateData && updateData.title}
              onChange={(event) => changeHolder(event)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="Add updated task"
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
          <form className="form__create">
            <input
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="Add a task"
              className="form__create-input"
            />
            <select
              value={newWhen}
              onChange={(event) => setNewWhen(event.target.value)}
              className="form__create-select"
            >
              {when.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            <button
              onClick={addTask}
              type="submit"
              className="form__create-button"
            >
              <BsArrowUpCircle className="form__create-button--icon" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
