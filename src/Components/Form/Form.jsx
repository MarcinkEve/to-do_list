import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
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
          <form className="form">
            <input
              value={updateData && updateData.title}
              onChange={(event) => changeHolder(event)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="Add updated task"
              className="form-input"
            />
            <select
              value={updateData.when}
              onChange={(event) => changeHolderWhen(event)}
              className="form-select"
            >
              {when.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            <button onClick={updateTask} type="update" className="form-button">
              <AiOutlineCheck  className="form-button--icon-edit"/>
            </button>
            <button
              onClick={cancelUpdate}
              type="submit"
              className="form-button"
            >
              <AiOutlineClose  className="form-button--icon-cancel"/>
            </button>
          </form>
        </>
      ) : (
        <>
          {/* New record */}
          <form className="form">
            <input
              value={newTask}
              onChange={(event) => setNewTask(event.target.value)}
              type="text"
              name="toDo"
              id="toDo"
              placeholder="Add a task"
              className="form-input"
            />
            <select
              value={newWhen}
              onChange={(event) => setNewWhen(event.target.value)}
              className="form-select"
            >
              {when.map((el) => (
                <option>{el}</option>
              ))}
            </select>
            <button onClick={addTask} type="submit" className="form-button">
              <BsArrowUpCircle className="form-button--icon-submit" />
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
