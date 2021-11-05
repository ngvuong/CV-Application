import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

class CVApp extends React.Component {
  constructor() {
    super();
    this.handleAddEducationField = this.handleAddEducationField.bind(this);
    this.handleRemoveEducationField =
      this.handleRemoveEducationField.bind(this);
    this.state = { educationFieldNum: 1, experienceFieldNum: 1 };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleAddEducationField() {
    this.setState({ educationFieldNum: this.state.educationFieldNum + 1 });
  }

  handleRemoveEducationField() {
    this.setState({ educationFieldNum: this.state.educationFieldNum - 1 });
  }

  render() {
    const additionalEducationFields = [];

    for (let i = 1; i < this.state.educationFieldNum; i++) {
      additionalEducationFields.push(
        <Education key={i} onRemove={this.handleRemoveEducationField} />
      );
    }

    return (
      <div className="App">
        <form className="CvForm" onSubmit={this.handleSubmit}>
          <Personal />
          <Education heading="Education" />
          {additionalEducationFields}
          <button
            className="Btn AddFieldsBtn"
            onClick={this.handleAddEducationField}
          >
            {"\u2795"}
          </button>
          <Experience />
          <button className="Btn AddFieldsBtn">{"\u2795"}</button>
          <button className="Btn SaveBtn">Save</button>
        </form>
      </div>
    );
  }
}

export default CVApp;
