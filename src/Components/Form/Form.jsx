import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label>Enter task</label>
        <input type="text" name="toDo" id="toDo" placeholder="enter task" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Form;
