import React from "react";
import CreateForm from "../CreateForm";
import EditForm from "../EditForm";

const FormsContainer = ({
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
        <EditForm
          updateData={updateData}
          cancelUpdate={cancelUpdate}
          changeHolder={changeHolder}
          changeHolderWhen={changeHolderWhen}
          updateTask={updateTask}
          when={when}
        />
      ) : (
        <CreateForm
          newTask={newTask}
          newWhen={newWhen}
          setNewWhen={setNewWhen}
          setNewTask={setNewTask}
          addTask={addTask}
          when={when}
        />
      )}
    </div>
  );
};

export default FormsContainer;
