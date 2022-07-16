import React from "react";
import "./task.css";

const List = ({ task, index }) => {
  return (
    <div>
      <div className="taskBg">
        <div className={task.status ? "done" : ""}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>
      </div>
    </div>
  );
};

export default List;
