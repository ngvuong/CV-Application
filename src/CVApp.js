import React from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";

class CVApp extends React.Component {
  state = { isSubmitted: false };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  };

  render() {
    return (
      <div className="App">
        {!this.state.isSubmitted && <CVForm onSubmit={this.handleSubmit} />}
        {this.state.isSubmitted && <CVPreview />}
      </div>
    );
  }
}

export default CVApp;
