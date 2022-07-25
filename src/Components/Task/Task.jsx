import React from "react";
import "./task.scss";
import { TbUrgent } from "react-icons/tb";
import { TiPencil } from "react-icons/ti";
import { GiTrashCan } from "react-icons/gi";

const Task = ({
  task,
  deleteTask,
  completedTask,
  setUpdateData,
  markImportant,
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
            ></input>
            <label htmlFor={task.id}></label>
          </div>

          <div
            className={
              task.status
                ? "checkbox__container-important--disabled"
                : "checkbox__container-important"
            }
          >
            <input
              onChange={() => markImportant(task.id)}
              type="checkbox"
              checked={task.important}
              id={"marked" + task.id}
            ></input>
            <label htmlFor={"marked" + task.id}>
              <TbUrgent />
            </label>
          </div>

          <div className="task__content">
            <div className="task__content-title">{task.title}</div>
          </div>
        </div>
        <div className="task__container__iconsWrapper">
          <div className="task__content-when">{task.when}</div>

          <div
            onClick={() => setUpdateData(task)}
            className={task.status ? "hideIcon" : ""}
          >
            <TiPencil title="Edit" className="edit-icon" />
          </div>

          <div onClick={() => deleteTask(task.id)}>
            <GiTrashCan title="Delete" className="delete-icon" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;
