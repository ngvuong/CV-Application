import React from "react";
import Task from "./utils/Task";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state = {
      taskNum: 0,
    };
  }

  handleAddTask() {
    this.setState({ taskNum: this.state.taskNum + 1 });
  }

  handleDeleteTask() {
    this.setState({ taskNum: this.state.taskNum - 1 });
  }

  render() {
    const tasks = [];

    for (let i = 0; i < this.state.taskNum; i++) {
      tasks.push(
        <Task key={i} number={i + 1} onDelete={this.handleDeleteTask} />
      );
    }
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
        <div className="TaskList">{tasks}</div>
        <button
          type="button"
          className="Btn AddTaskBtn"
          onClick={this.handleAddTask}
        >
          Add Task
        </button>
        {this.props.onRemove ? (
          <button className="RemoveFieldBtn" onClick={this.props.onRemove}>
            {"\u2796"}
          </button>
        ) : null}
      </div>
    );
  }
}

export default Experience;
