import React from "react";

class CVPreview extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.firstName}</h1>
        <h2>{this.props.data.lastName}</h2>
      </div>
    );
  }
}

export default CVPreview;
