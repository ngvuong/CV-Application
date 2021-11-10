import React from "react";

function Personal(props) {
  return (
    <div className="PersonalDetails">
      <h2 id="about" className="GroupHeading">
        About
      </h2>
      <div className="Name">
        <input
          type="text"
          id="first-name"
          name="firstName"
          placeholder="First Name"
          value={props.data.firstName || ""}
          onChange={props.onChange}
        />
        <input
          type="text"
          id="last-name"
          name="lastName"
          placeholder="Last Name"
          value={props.data.lastName || ""}
          onChange={props.onChange}
        />
      </div>
      <div className="Other">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={props.data.jobTitle || ""}
          onChange={props.onChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={props.data.website || ""}
          onChange={props.onChange}
        />
      </div>
      <div className="Misc">
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={props.data.phone || ""}
          onChange={props.onChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={props.data.email || ""}
          onChange={props.onChange}
        />
      </div>
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        value={props.data.description || ""}
        onChange={props.onChange}
        rows={5}
      />
    </div>
  );
}

export default Personal;
