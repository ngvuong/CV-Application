import React from "react";

function Task(props) {
  return (
    <div>
      <input
        type="text"
        className="Task"
        placeholder={`Task ${props.number}`}
      />
      {props.onDelete ? (
        <button className="Btn DeleteBtn" onClick={props.onDelete}>
          Remove
        </button>
      ) : null}
    </div>
  );
}

export default Task;
