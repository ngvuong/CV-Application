import React from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";
import Education from "./components/Education";

class CVApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddEducationField = this.handleAddEducationField.bind(this);
    this.handleRemoveEducationField =
      this.handleRemoveEducationField.bind(this);
    this.state = {
      isSubmitted: false,
      num: 1,
      // firstName: "",
      // lastName: "",
    };
  }

  handleAddEducationField() {
    this.setState({ num: this.state.num + 1 });
  }

  handleRemoveEducationField() {
    this.setState({ num: this.state.num - 1 });
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
    const additionalEducationFields = [];

    for (let i = 1; i < this.state.num; i++) {
      additionalEducationFields.push(
        <Education
          key={i}
          index={i}
          data={this.state}
          onRemove={this.handleRemoveEducationField}
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
            eduFields={additionalEducationFields}
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
