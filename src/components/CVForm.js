import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

function CVForm(props) {
  return (
    <form className="CvForm" onSubmit={props.onSubmit}>
      <Personal
        onChange={(e) => props.onChange(e, 0, "personalField")}
        data={props.data}
      />
      <Education
        heading="Education"
        index="0"
        data={props.data.eduFields}
        onChange={(e) => props.onChange(e, 0, "eduFields")}
      />
      {props.eduFields}
      <button
        type="button"
        className="Btn AddFieldBtn"
        onClick={props.onAddEdu}
      >
        {"\u2795"}
      </button>
      <Experience
        heading="Experience"
        index="0"
        data={props.data.expFields}
        onChange={(e) => props.onChange(e, 0, "expFields")}
      />
      {props.expFields}
      <button
        type="button"
        className="Btn AddFieldBtn"
        onClick={props.onAddExp}
      >
        {"\u2795"}
      </button>
      <button type="submit" className="Btn SaveBtn">
        Save
      </button>
    </form>
  );
}

export default CVForm;
