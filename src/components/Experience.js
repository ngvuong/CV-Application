import React from "react";
import Task from "./utils/Task";

class Experience extends React.Component {
  state = {
    taskNum: 0,
  };

  handleAddTask() {
    this.setState({ taskNum: this.state.taskNum + 1 });
  }

  render() {
    const tasks = [];

    for (let i = 0; i < this.state.taskNum; i++) {
      tasks.push(<Task key={i} number={i + 2} />);
    }
    return (
      <div className="ExperienceDetails">
        <h2 id="experience" className="GroupHeading">
          Experience
        </h2>
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
        </div>
        <button className="Btn AddTaskBtn" onClick={this.handleAddTask}>
          Add Task
        </button>
      </div>
    );
  }
}

export default Experience;
