import React from "react";

const Form = ({ newTask, setNewTask, addTask, updateData, changeTask }) => {
  return (
    <div>
      <form>
        <input
          value={updateData && updateData.title}
          onChange={changeTask}
          type="text"
          name="toDo"
          id="toDo"
          placeholder="enter task"
        />
        <button type="update">Update</button>
        <button type="submit">Cancel</button>
      </form>
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
    </div>
  );
};

export default Form;
