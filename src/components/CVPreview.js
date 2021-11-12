import React from "react";
import { format, parseISO } from "date-fns";

function CVPreview(props) {
  return (
    <main>
      <div className="CvPage">
        <div className="PageHeader">
          <div>
            <h2 className="FullName">
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
          {props.data.eduFields.map((field, i) => (
            <div key={i}>
              <h4>{field.schoolName}</h4>
              {field.study} <br />
              {field.studyFrom
                ? format(parseISO(field.studyFrom), "MMM yyyy")
                : null}{" "}
              -{" "}
              {field.studyTo
                ? format(parseISO(field.studyTo), "MMM yyyy")
                : null}
            </div>
          ))}
        </div>
        <div className="Experience">
          <h3>Experience:</h3>
          {props.data.expFields.map((field, i) => (
            <div key={i}>
              <h4>{field.company}</h4>
              {field.title} <br />
              {field.workFrom
                ? format(parseISO(field.workFrom), "MMM yyyy")
                : null}{" "}
              -{" "}
              {field.workTo ? format(parseISO(field.workTo), "MMM yyyy") : null}{" "}
              <br />
              <div className="Duties"></div>
            </div>
          ))}
        </div>
      </div>
      <button className="Btn EditBtn" onClick={props.onEdit}>
        Edit
      </button>
    </main>
  );
}

export default CVPreview;
