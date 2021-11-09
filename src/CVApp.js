import React from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";

class CVApp extends React.Component {
  state = { isSubmitted: false, data: { firstName: "", lastName: "" } };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ isSubmitted: true });
  };

  handleInputChange = (e) => {
    const target = e.target;
    const targetName = target.name;
    const value = target.value;
    this.setState({ data: { [targetName]: value } });
  };

  render() {
    return (
      <div className="App">
        {!this.state.isSubmitted && (
          <CVForm
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
          />
        )}
        {this.state.isSubmitted && <CVPreview data={this.state.data} />}
      </div>
    );
  }
}

export default CVApp;
