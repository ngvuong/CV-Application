import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

class CVApp extends React.Component {
  constructor() {
    super();
    this.state = { educationFieldNum: 1, experienceFieldNum: 1 };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const additionalEducationFields = [];

    for (let i = 1; i < this.state.educationFieldNum; i++) {}

    return (
      <div className="App">
        <form className="CvForm" onSubmit={this.handleSubmit}>
          <Personal />
          <Education />
          {additionalEducationFields}
          <button className="Btn AddFieldsBtn">{"\u2795"}</button>
          <Experience />
          <button className="Btn AddFieldsBtn">{"\u2795"}</button>
          <button className="Btn SaveBtn">Save</button>
        </form>
      </div>
    );
  }
}

export default CVApp;
