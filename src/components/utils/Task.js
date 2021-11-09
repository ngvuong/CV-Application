import React from "react";

function Task(props) {
  return (
    <div>
      <input
        type="text"
        className="Task"
        placeholder={`Task ${props.number}`}
      />

      <span className="DeleteTaskBtn" onClick={props.onDelete}>
        {"\u232B"}
      </span>
    </div>
  );
}

export default Task;
