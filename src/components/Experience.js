import React from "react";

function Experience() {
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
      {/* <Task/> */}
    </div>
  );
}

export default Experience;
