import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const EditForm = ({
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
    <>
      {/* Update record */}
      <form className="form" onSubmit={updateTask} >
        <input
          value={updateData.title || ""}
          // onChange={(e) => setNewTask(e.target.value)}
          onChange={(event) => changeHolder(event)}
          type="text"
          name="toDo"
          id="toDo"
          placeholder="Add updated task"
          className="form-input"
        />
        <select
          value={updateData.when}
          // onChange={(e) => setNewWhen(e.target.value)}
          onChange={(event) => changeHolderWhen(event)}
          className="form-select"
        >
          {when.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <button type="submit" className="form-button">
          <AiOutlineCheck className="form-button--icon-edit" />
        </button>
        <button onClick={cancelUpdate} type="button" className="form-button">
          <AiOutlineClose className="form-button--icon-cancel" />
        </button>
      </form>
    </>
  );
};

export default EditForm;
