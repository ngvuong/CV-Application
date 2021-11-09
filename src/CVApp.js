import React from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

class CVApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddEducationField = this.handleAddEducationField.bind(this);
    this.handleRemoveEducationField =
      this.handleRemoveEducationField.bind(this);
    this.handleAddExperienceField = this.handleAddExperienceField.bind(this);
    this.handleRemoveExperienceField =
      this.handleRemoveExperienceField.bind(this);
    this.state = {
      isSubmitted: false,
      eduNum: 1,
      expNum: 1,
    };
  }

  handleAddEducationField() {
    this.setState({ eduNum: this.state.eduNum + 1 });
  }

  handleRemoveEducationField() {
    this.setState({ eduNum: this.state.eduNum - 1 });
  }

  handleAddExperienceField() {
    this.setState({ expNum: this.state.expNum + 1 });
  }

  handleRemoveExperienceField() {
    this.setState({ expNum: this.state.expNum - 1 });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitted: true });
  };

  handleInputChange = (e) => {
    const target = e.target;
    const targetName = target.name;
    const value = target.value;
    this.setState({ [targetName]: value });
  };

  handleEdit = (e) => {
    this.setState({ isSubmitted: false });
  };

  render() {
    const additionalEduFields = [];

    for (let i = 1; i < this.state.eduNum; i++) {
      additionalEduFields.push(
        <Education
          key={i}
          index={i}
          data={this.state}
          onRemove={this.handleRemoveEducationField}
          onChange={this.handleInputChange}
        />
      );
    }

    const additionalExpFields = [];

    for (let i = 1; i < this.state.expNum; i++) {
      additionalExpFields.push(
        <Experience
          key={i}
          index={i}
          data={this.state}
          onRemove={this.handleRemoveExperienceField}
          onChange={this.handleInputChange}
        />
      );
    }

    return (
      <div className="App">
        {!this.state.isSubmitted && (
          <CVForm
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
            onAddEdu={this.handleAddEducationField}
            onRemoveEdu={this.handleRemoveEducationField}
            eduFields={additionalEduFields}
            onAddExp={this.handleAddExperienceField}
            onRemoveExp={this.handleRemoveExperienceField}
            expFields={additionalExpFields}
            data={this.state}
          />
        )}
        {this.state.isSubmitted && (
          <CVPreview data={this.state} onEdit={this.handleEdit} />
        )}
      </div>
    );
  }
}

export default CVApp;
