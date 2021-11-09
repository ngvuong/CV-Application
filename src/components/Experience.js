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
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="Title" />
        <div className="DateOfWork">
          <div>
            <label>
              From
              <input type="date" />
            </label>
          </div>
          <div>
            <label>
              To
              <input type="date" />
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
