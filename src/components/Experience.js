import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div className="ExperienceDetails">
        {this.props.heading ? (
          <h2 id="experience" className="GroupHeading">
            Experience
          </h2>
        ) : null}
        <input
          type="text"
          name={`company${this.props.index}`}
          value={this.props.data[`company${this.props.index}`] || ""}
          placeholder="Company"
          onChange={this.props.onChange}
        />
        <input
          type="text"
          name={`title${this.props.index}`}
          value={this.props.data[`title${this.props.index}`] || ""}
          placeholder="Title"
          onChange={this.props.onChange}
        />
        <div className="DateOfWork">
          <div>
            <label>
              From
              <input
                type="date"
                name={`workFrom${this.props.index}`}
                value={this.props.data[`workFrom${this.props.index}`] || ""}
                onChange={this.props.onChange}
              />
            </label>
          </div>
          <div>
            <label>
              To
              <input
                type="date"
                name={`workTo${this.props.index}`}
                value={this.props.data[`workTo${this.props.index}`] || ""}
                onChange={this.props.onChange}
              />
            </label>
          </div>
        </div>
        {this.props.onRemove ? (
          <button
            type="button"
            className="RemoveFieldBtn"
            onClick={this.props.onRemove}
          >
            {"\u2796"}
          </button>
        ) : null}
      </div>
    );
  }
}

export default Experience;
