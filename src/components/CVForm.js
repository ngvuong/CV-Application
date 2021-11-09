import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class CVForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddEducationField = this.handleAddEducationField.bind(this);
    this.handleRemoveEducationField =
      this.handleRemoveEducationField.bind(this);
    this.handleAddExperienceField = this.handleAddExperienceField.bind(this);
    this.handleRemoveExperienceField =
      this.handleRemoveExperienceField.bind(this);
    this.state = {
      educationFieldNum: this.props.data.eduNum,
      experienceFieldNum: this.props.data.expNum,
    };
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
    // const additionalEducationFields = [];

    // for (let i = 1; i < this.state.educationFieldNum; i++) {
    //   additionalEducationFields.push(
    //     <Education key={i} onRemove={this.props.onRemove} />
    //   );
    // }

    // const additionalExperienceFields = [];

    // for (let i = 1; i < this.state.experienceFieldNum; i++) {
    //   additionalExperienceFields.push(
    //     <Experience key={i} onRemove={this.handleRemoveExperienceField} />
    //   );
    // }
    return (
      <form className="CvForm" onSubmit={this.props.onSubmit}>
        <Personal onChange={this.props.onChange} data={this.props.data} />
        <Education
          heading="Education"
          index="0"
          data={this.props.data}
          onChange={this.props.onChange}
        />
        {this.props.eduFields}
        <button
          type="button"
          className="Btn AddFieldBtn"
          onClick={this.props.onAddEdu}
        >
          {"\u2795"}
        </button>
        <Experience
          heading="Experience"
          index="0"
          data={this.props.data}
          onChange={this.props.onChange}
        />
        {this.props.expFields}
        <button
          type="button"
          className="Btn AddFieldBtn"
          onClick={this.props.onAddExp}
        >
          {"\u2795"}
        </button>
        <button type="submit" className="Btn SaveBtn">
          Save
        </button>
      </form>
    );
  }
}

export default CVForm;
