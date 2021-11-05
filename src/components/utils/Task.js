import React from "react";

function Task(props) {
  return (
    <div>
      <input
        type="text"
        className="Task"
        placeholder={`Task ${props.number}`}
      />
    </div>
  );
}

export default Task;
