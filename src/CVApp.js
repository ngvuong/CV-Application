import React from "react";
import CVForm from "./components/CVForm";
import "./styles/App.css";

class CVApp extends React.Component {
  render() {
    return (
      <div className="App">
        <CVForm />
      </div>
    );
  }
}

export default CVApp;
