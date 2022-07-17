import React from "react";
import "./task.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import { GiTrashCan } from "react-icons/gi";

const Task = ({
  task,
  index,
  deleteTask,
  completedTask,
  setUpdateData,
  day,
}) => {
  return (
    <li>
      <div className="taskBg">
        <div className={task.status ? "done" : ""}>
          {/* <span className="taskNumber">{index + 1}</span> */}
          <div className="taskText">{task.title}</div>
        </div>
        <div className="iconsWrap">
          <div onClick={() => completedTask(task.id)}>
            <AiOutlineCheckCircle title="Done/Undone" />
          </div>

          {task.status ? null : (
            <div
              onClick={
                ////// refactoring
                () => setUpdateData(task)

                // setUpdateData({
                //   id: task.id,
                //   title: task.title,
                //   status: task.status ? true : false,
                // })
              }
            >
              <TiPencil title="Edit" />
            </div>
          )}

          <div onClick={() => deleteTask(task.id)}>
            <GiTrashCan title="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Task;
