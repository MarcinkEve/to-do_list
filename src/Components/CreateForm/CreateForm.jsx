import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import "../CreateForm/createForm.scss";

const CreateForm = ({
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
      {/* New record */}
      <form className="form" onSubmit={addTask} >
        <input
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          type="text"
          placeholder="Add a task"
          className="form-input"
        />
        <select
          value={newWhen}
          onChange={(event) => setNewWhen(event.target.value)}
          className="form-select"
        >
          {when.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <button type="submit" className="form-button">
          <BsArrowUpCircle className="form-button--icon-submit" />
        </button>
      </form>
    </>
  );
};

export default CreateForm;
