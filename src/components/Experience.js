import React from "react";

function Experience(props) {
  return (
    <div className="ExperienceDetails">
      {props.heading ? (
        <h2 id="experience" className="GroupHeading">
          Experience
        </h2>
      ) : null}
      <input
        type="text"
        name="company"
        value={props.data.expFields[props.index].company || ""}
        placeholder="Company"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="title"
        value={props.data.expFields[props.index].title || ""}
        placeholder="Title"
        onChange={props.onChange}
      />
      <div className="DateOfWork">
        <div>
          <label>
            From
            <input
              type="date"
              name="workFrom"
              value={props.data.expFields[props.index].workFrom || ""}
              onChange={props.onChange}
            />
          </label>
        </div>
        <div>
          <label>
            To
            <input
              type="date"
              name="workTo"
              value={props.data.expFields[props.index].workTo || ""}
              onChange={props.onChange}
            />
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

export default Experience;
