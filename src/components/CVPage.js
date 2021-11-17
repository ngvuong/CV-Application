import React from "react";
import { format, parseISO } from "date-fns";

function CVPage(props) {
  return (
    <div className="CvPage" ref={props.reference}>
      <div className="PageHeader">
        <div>
          <h1 className="FullName">
            {props.data.personalFields.firstName}{" "}
            {props.data.personalFields.lastName}
          </h1>
          {props.data.personalFields.jobTitle}
        </div>
        <div className="OtherInfo">
          {props.data.personalFields.phone} <br />
          {props.data.personalFields.email} <br />
          {props.data.personalFields.website}
        </div>
      </div>
      <div className="Description">
        <h2>Description:</h2>
        <p>{props.data.personalFields.description}</p>
      </div>
      <div className="Education">
        <h2>Education:</h2>
        {props.data.eduFields.map((field, i) => (
          <div key={i}>
            <h3>{field.schoolName}</h3>
            {field.study} <br />
            {field.studyFrom
              ? format(parseISO(field.studyFrom), "MMM yyyy")
              : null}{" "}
            -{" "}
            {field.studyTo ? format(parseISO(field.studyTo), "MMM yyyy") : null}
          </div>
        ))}
      </div>
      <div className="Experience">
        <h2>Experience:</h2>
        {props.data.expFields.map((field, i) => (
          <div key={i}>
            <h3>{field.company}</h3>
            {field.title} <br />
            {field.workFrom
              ? format(parseISO(field.workFrom), "MMM yyyy")
              : null}{" "}
            - {field.workTo ? format(parseISO(field.workTo), "MMM yyyy") : null}{" "}
            <br />
            <p>{field.jobDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVPage;
