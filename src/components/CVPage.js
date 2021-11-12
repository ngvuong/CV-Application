import React from "react";
import { format, parseISO } from "date-fns";

class CVPage extends React.Component {
  render() {
    return (
      <div className="CvPage" ref={this.props.reference}>
        <div className="PageHeader">
          <div>
            <h2 className="FullName">
              {this.props.data.firstName} {this.props.data.lastName}
            </h2>
            {this.props.data.jobTitle}
          </div>
          <div className="OtherInfo">
            {this.props.data.phone} <br />
            {this.props.data.email} <br />
            {this.props.data.website}
          </div>
        </div>
        <div className="Description">
          <h3>Description:</h3>
          <p>{this.props.data.description}</p>
        </div>
        <div className="Education">
          <h3>Education:</h3>
          {this.props.data.eduFields.map((field, i) => (
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
          {this.props.data.expFields.map((field, i) => (
            <div key={i}>
              <h4>{field.company}</h4>
              {field.title} <br />
              {field.workFrom
                ? format(parseISO(field.workFrom), "MMM yyyy")
                : null}{" "}
              -{" "}
              {field.workTo ? format(parseISO(field.workTo), "MMM yyyy") : null}{" "}
              <br />
              <p>{field.jobDescription}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CVPage;
