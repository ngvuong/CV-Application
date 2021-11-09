import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class CVForm extends React.Component {
  constructor() {
    super();
    this.handleAddEducationField = this.handleAddEducationField.bind(this);
    this.handleRemoveEducationField =
      this.handleRemoveEducationField.bind(this);
    this.handleAddExperienceField = this.handleAddExperienceField.bind(this);
    this.handleRemoveExperienceField =
      this.handleRemoveExperienceField.bind(this);
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

  handleAddExperienceField() {
    this.setState({ experienceFieldNum: this.state.experienceFieldNum + 1 });
  }

  handleRemoveExperienceField() {
    this.setState({ experienceFieldNum: this.state.experienceFieldNum - 1 });
  }

  render() {
    const additionalEducationFields = [];

    for (let i = 1; i < this.state.educationFieldNum; i++) {
      additionalEducationFields.push(
        <Education key={i} onRemove={this.handleRemoveEducationField} />
      );
    }

    const additionalExperienceFields = [];

    for (let i = 1; i < this.state.experienceFieldNum; i++) {
      additionalExperienceFields.push(
        <Experience key={i} onRemove={this.handleRemoveExperienceField} />
      );
    }
    return (
      <form className="CvForm" onSubmit={this.props.onSubmit}>
        <Personal />
        <Education heading="Education" />
        {additionalEducationFields}
        <button
          className="Btn AddFieldsBtn"
          onClick={this.handleAddEducationField}
        >
          {"\u2795"}
        </button>
        <Experience heading="Experience" />
        {additionalExperienceFields}
        <button
          className="Btn AddFieldsBtn"
          onClick={this.handleAddExperienceField}
        >
          {"\u2795"}
        </button>
        <button className="Btn SaveBtn">Save</button>
      </form>
    );
  }
}

export default CVForm;
