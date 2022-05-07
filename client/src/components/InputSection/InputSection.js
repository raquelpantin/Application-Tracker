import "./InputSection.scss";
import React from "react";

const InputSection = () => {
  return (
    <form className="input-container">
      <label>Company</label>
      <input type="text"></input>
      <label>Position Title</label>
      <input type="text"></input>
      <label>Job ID</label>
      <input type="text"></input>
      <label>Application Date</label>
      <input className="input-date" type="date"></input>
      <label>Location</label>
      <input type="text"></input>
      <label>Notes</label>
      <textarea type="number"></textarea>
      <button type="submit">Add</button>
    </form>
  );
};

export default InputSection;
