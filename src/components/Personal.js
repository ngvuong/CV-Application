import React from "react";

function Personal() {
  return (
    <div className="PersonalDetails">
      <h2 id="about">About</h2>
      <div className="Name">
        <input type="text" id="first-name" placeholder="First Name" />
        <input type="text" id="last-name" placeholder="Last Name" />
      </div>
      <div className="Other">
        <input type="tel" id="phone" placeholder="Phone" />
        <input type="email" id="email" placeholder="Email" />
      </div>
      <textarea id="description" placeholder="Description" rows={5} />
    </div>
  );
}

export default Personal;
