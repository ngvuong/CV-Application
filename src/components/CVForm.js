import React from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";

class CVForm extends React.Component {
  render() {
    console.log(this.props.eduFields);
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
