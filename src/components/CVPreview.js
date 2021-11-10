import React from "react";
import { format, parseISO } from "date-fns";

function CVPreview(props) {
  const eduIndecies = [];
  for (let i = 0; i < props.data.eduNum; i++) {
    eduIndecies.push(i);
  }
  return (
    <div className="CvPage">
      <div className="PageHeader">
        <div>
          <h2>
            {props.data.firstName} {props.data.lastName}
          </h2>
          {props.data.jobTitle}
        </div>

        <div className="OtherInfo">
          {props.data.phone} <br />
          {props.data.email} <br />
          {props.data.website}
        </div>
      </div>
      <div className="Summary">
        <h3>Summary:</h3>
        <p>{props.data.description}</p>
      </div>
      <div className="Education">
        <h3>Education:</h3>
        {eduIndecies.map((i) => (
          <p key={i}>
            {props.data[`schoolName${i}`]} <br />
            {format(parseISO(props.data[`studyFrom${i}`]), "MMM yyyy")} -{" "}
            {format(parseISO(props.data[`studyTo${i}`]), "MMM yyyy")} <br />
            {props.data[`study${i}`]}
          </p>
        ))}

        {props.data.schoolName}
      </div>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}

export default CVPreview;
