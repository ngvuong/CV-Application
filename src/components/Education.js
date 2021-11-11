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
        name={`schoolName`}
        value={props.data.eduFields[props.index].schoolName || ""}
        placeholder="School Name"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="study"
        value={props.data.eduFields[props.index].study || ""}
        placeholder="Field of Study/Degree"
        onChange={props.onChange}
      />
      <div className="DateOfStudy">
        <div>
          <label>
            From
            <input
              type="date"
              name="studyFrom"
              value={props.data.eduFields[props.index].studyFrom || ""}
              onChange={props.onChange}
            />
          </label>
        </div>
        <div>
          <label>
            To
            <input
              type="date"
              name="studyTo"
              value={props.data.eduFields[props.index].studyTo || ""}
              onChange={props.onChange}
            />
          </label>
        </div>
      </div>
      {props.onRemove ? (
        <button
          type="button"
          className="Btn RemoveFieldBtn"
          onClick={props.onRemove}
        >
          {"\u2796"}
        </button>
      ) : null}
    </div>
  );
}

export default Education;
