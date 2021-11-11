import React from "react";
import { format, parseISO } from "date-fns";

function CVPreview(props) {
  const eduIndecies = [];
  for (let i = 0; i < props.data.eduNum; i++) {
    eduIndecies.push(i);
  }

  const expIndecies = [];
  for (let i = 0; i < props.data.expNum; i++) {
    expIndecies.push(i);
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
      <div className="Description">
        <h3>Description:</h3>
        <p>{props.data.description}</p>
      </div>
      <div className="Education">
        <h3>Education:</h3>
        {eduIndecies.map((i) => (
          <div key={i}>
            <h4>{props.data.eduFields[i][`schoolName`]}</h4>
            {props.data[`study${i}`]} <br />
            {props.data[`studyFrom${i}`]
              ? format(parseISO(props.data[`studyFrom${i}`]), "MMMM yyyy")
              : null}{" "}
            -{" "}
            {props.data[`studyTo${i}`]
              ? format(parseISO(props.data[`studyTo${i}`]), "MMMM yyyy")
              : null}
          </div>
        ))}
      </div>
      <div className="Experience">
        <h3>Experience:</h3>
        {expIndecies.map((i) => (
          <div key={i}>
            <h4>{props.data[`company${i}`]}</h4>
            {props.data[`title${i}`]} <br />
            {props.data[`workFrom${i}`]
              ? format(parseISO(props.data[`workFrom${i}`]), "MMMM yyyy")
              : null}{" "}
            -{" "}
            {props.data[`workTo${i}`]
              ? format(parseISO(props.data[`workTo${i}`]), "MMMM yyyy")
              : null}{" "}
            <br />
            <div className="Duties"></div>
          </div>
        ))}
      </div>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}

export default CVPreview;
