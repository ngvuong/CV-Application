import React from "react";

function CVPreview(props) {
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
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}

export default CVPreview;
