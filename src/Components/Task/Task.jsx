import React from "react";
import "./task.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { TiPencil } from "react-icons/ti";
import { GiTrashCan } from "react-icons/gi";

const Task = ({
  task,
  newTask,
  index,
  deleteTask,
  completedTask,
  setUpdateData,
  day,
}) => {
  return (
    <li className="task">
      <div className="task__container">
        <div className={task.status ? "taskDone" : "taskUnDone"}>

          <div className="checkbox__container">
            <input
              onChange={() => completedTask(task.id)}
              type="checkbox"
              checked={task.status}
              id={task.id}
            >
              {/* <div onClick={() => completedTask(task.id)}> */}
              {/* </div> */}
            </input>
            <label htmlFor={task.id}>
              {/* {task.status ? (
                <AiOutlineCheckCircle title="Done" className="taskDone-icon" />
              ) : (
                <MdRadioButtonUnchecked
                  title="Undone"
                  className="taskUnDone-icon"
                />
              )} */}
            </label>
          </div>

          {/* <span className="taskNumber">{index + 1}</span> */}
          <div className="task__title">{task.title}</div>
        </div>
        <div className="task__container__iconsWrapper">
          {task.status ? null : (
            <div
              onClick={
                ////// refactoring
                // () => setUpdateData(task.id)
                () => setUpdateData(task)

                // setUpdateData({
                //   id: task.id,
                //   title: task.title,
                //   status: task.status ? true : false,
                // })
              }
            >
              <TiPencil title="Edit" className="edit-icon" />
            </div>
          )}

          <div onClick={() => deleteTask(task.id)}>
            <GiTrashCan title="Delete" className="delete-icon" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;
