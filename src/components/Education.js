import React from "react";

function Education() {
  return (
    <div className="EducationDetails">
      <h2 id="education" className="GroupHeading">
        Education
      </h2>
      <input type="text" placeholder="School Name" />
      <input type="text" placeholder="Field of Study" />
      <div className="DateOfStudy">
        <div>
          <label htmlFor="study-from">From:</label>
          <input type="date" id="study-from" placeholder="From" />
        </div>
        <div>
          <label htmlFor="study-to">To:</label>
          <input type="date" id="study-to" placeholder="From" />
        </div>
      </div>
    </div>
  );
}

export default Education;
