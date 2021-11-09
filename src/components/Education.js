import React from "react";

function Education(props) {
  return (
    <div className="EducationDetails">
      {props.heading ? (
        <h2 id="education" className="GroupHeading">
          {props.heading}
        </h2>
      ) : null}
      <input
        type="text"
        name={`schoolName${props.index}`}
        value={props.data.schoolName0}
        placeholder="School Name"
      />
      <input type="text" placeholder="Field of Study" />
      <div className="DateOfStudy">
        <div>
          <label htmlFor="study-from">From</label>
          <input type="date" id="study-from" />
        </div>
        <div>
          <label htmlFor="study-to">To</label>
          <input type="date" id="study-to" />
        </div>
      </div>
      {props.onRemove ? (
        <button
          type="button"
          className="RemoveFieldBtn"
          onClick={props.onRemove}
        >
          {"\u2796"}
        </button>
      ) : null}
    </div>
  );
}

export default Education;
