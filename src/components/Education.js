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
        value={props.data[`schoolName${props.index}`] || ""}
        placeholder="School Name"
        onChange={props.onChange}
      />
      <input
        type="text"
        name={`study${props.index}`}
        value={props.data[`study${props.index}`] || ""}
        placeholder="Field of Study"
        onChange={props.onChange}
      />
      <div className="DateOfStudy">
        <div>
          <label>
            From
            <input type="date" />
          </label>
        </div>
        <div>
          <label>
            To
            <input type="date" />
          </label>
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
