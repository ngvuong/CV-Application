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
      // eduNum: 1,
      // expNum: 1,
      eduFields: [{ schoolName: "", study: "", studyFrom: "", studyTo: "" }],
      expFields: [{ company: "", title: "", workFrom: "", workTo: "" }],
    };
  }

  handleAddEducationField() {
    // this.setState({ eduNum: this.state.eduNum + 1 });
    const fields = [
      ...this.state.eduFields,
      { schoolName: "", study: "", studyFrom: "", studyTo: "" },
    ];
    this.setState({ eduFields: fields });
  }

  handleRemoveEducationField(index) {
    // this.setState({ eduNum: this.state.eduNum - 1 });
    this.setState({
      eduFields: this.state.eduFields.filter((field, i) => i !== index),
    });
  }

  handleAddExperienceField() {
    // this.setState({ expNum: this.state.expNum + 1 });
    const fields = [
      ...this.state.expFields,
      { company: "", title: "", workFrom: "", workTo: "" },
    ];
    this.setState({ expFields: fields });
  }

  handleRemoveExperienceField(index) {
    // this.setState({ expNum: this.state.expNum - 1 });
    this.setState({
      expFields: this.state.expFields.filter((field, i) => i !== index),
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitted: true });
  };

  handleInputChange = (e, index, fieldName) => {
    const target = e.target;
    const targetName = target.name;
    const value = target.value;
    if (fieldName === "personalField") {
      this.setState({ [targetName]: value });
    } else {
      const fields = [...this.state[fieldName]];
      fields[index][targetName] = value;
      this.setState({ [fieldName]: fields });
    }
  };

  handleEdit = (e) => {
    this.setState({ isSubmitted: false });
  };

  render() {
    const additionalEduFields = this.state.eduFields
      .slice(1)
      .map((field, i) => {
        return (
          <Education
            key={i + 1}
            index={i + 1}
            data={this.state.eduFields}
            onRemove={(e) => this.handleRemoveEducationField(i + 1)}
            onChange={(e) => this.handleInputChange(e, i + 1, "eduFields")}
          />
        );
      });

    const additionalExpFields = this.state.expFields
      .slice(1)
      .map((field, i) => {
        return (
          <Experience
            key={i + 1}
            index={i + 1}
            data={this.state.expFields}
            onRemove={(e) => this.handleRemoveExperienceField(i + 1)}
            onChange={(e) => this.handleInputChange(e, i + 1, "expFields")}
          />
        );
      });

    return (
      <div className="App">
        <header className="Header">
          <h1 className="title">CV Craft</h1>
        </header>
        {!this.state.isSubmitted && (
          <CVForm
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
            onAddEdu={this.handleAddEducationField}
            eduFields={additionalEduFields}
            onAddExp={this.handleAddExperienceField}
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
