import React from "react";

class CVPreview extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>{this.props.data.firstName}</h1>
        <h2>{this.props.data.lastName}</h2>
        <button onClick={this.props.onEdit}>Edit</button>
      </div>
    );
  }
}

export default CVPreview;
