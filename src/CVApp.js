import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVForm from "./CVForm";
import "./styles/App.css";

class CVApp extends React.Component {
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
      <div className="App">
        <CVForm />
      </div>
    );
  }
}

export default CVApp;
