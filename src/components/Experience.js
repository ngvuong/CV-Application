import React from "react";
import Task from "./utils/Task";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.state = {
      taskNum: 1,
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

    for (let i = 1; i < this.state.taskNum; i++) {
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
        <input type="text" id="company" placeholder="Company" />
        <input type="text" id="job-title" placeholder="Title" />
        <div className="DateOfWork">
          <div>
            <label htmlFor="work-from">From</label>
            <input type="date" id="work-from" />
          </div>
          <div>
            <label htmlFor="work-to">To</label>
            <input type="date" id="work-to" />
          </div>
        </div>
        <div className="TaskList">
          <Task number={1} />
          {tasks}
        </div>
        <button className="Btn AddTaskBtn" onClick={this.handleAddTask}>
          Add Task
        </button>
        {this.props.onRemove ? (
          <button className="Btn RemoveFieldBtn" onClick={this.props.onRemove}>
            Remove
          </button>
        ) : null}
      </div>
    );
  }
}

export default Experience;
