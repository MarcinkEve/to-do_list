import React from "react";
import "./task.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiPencil } from "react-icons/ti";
import { GiTrashCan } from "react-icons/gi";

const List = ({ task, index }) => {
  return (
    <div className="taskBg">
      <div className={task.status ? "done" : ""}>
        <span className="taskNumber">{index + 1}</span>
        <div className="taskText">{task.title}</div>
      </div>
      <div className="iconsWrap">
        <AiOutlineCheckCircle title="Done/Undone" />
        <TiPencil title="Edit" />
        <GiTrashCan title="Delete" />
      </div>
    </div>
  );
};

export default List;
