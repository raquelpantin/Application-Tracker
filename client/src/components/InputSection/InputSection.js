import "./InputSection.scss";
import { useState } from "react";
import React from "react";
import axios from "axios";

const InputSection = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [jobID, setJobID] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const [appList, setAppList] = useState([]);

  const [showList, setShowList] = useState(false);

  const addApp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7070/add", {
        company: company,
        position: position,
        jobID: jobID,
        link: link,
        date: date,
        location: location,
        notes: notes,
      })
      .then((res) => {
        console.log(res.data);
        setAppList([
          ...appList,
          {
            company: company,
            position: position,
            jobID: jobID,
            link: link,
            date: date,
            location: location,
            notes: notes,
          },
        ]);
      })
      .catch((err) => console.log(err));
  };

  const getApps = () => {
    axios
      .get("http://localhost:7070/applications")
      .then((res) => {
        console.log(res.data);
        setAppList(res.data);
      })
      .catch((err) => console.log(err));

    setShowList(true);
    console.log(showList);
  };

  const hideApps = (e) => {
    e.preventDefault();
    setShowList(false);
    console.log(showList);
  };

  return (
    <div>
      <form onSubmit={addApp} className="input-container">
        <label>Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          name="company"
        ></input>
        <label>Position Title</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
        ></input>
        <label>Job ID</label>
        <input
          type="text"
          value={jobID}
          onChange={(e) => setJobID(e.target.value)}
          name="jobID"
        ></input>
        <label>Job Link</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          name="link"
        ></input>
        <label>Application Date</label>
        <input
          className="input-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
        ></input>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          name="location"
        ></input>
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          name="notes"
        ></textarea>
        <button type="submit">Add</button>
      </form>
      <div>
        {!showList ? (
          <button onClick={getApps}>Show Applications</button>
        ) : (
          <button onClick={hideApps}>Hide Applications</button>
        )}
        {showList
          ? appList.map((apps) => {
              return (
                <div key={apps.id}>
                  <h2>{apps.company}</h2>
                  <p>
                    {apps.position} (ID: {apps.jobID})
                  </p>
                  <p>{apps.link}</p>
                  <p>
                    {new Date(apps.date)
                      .toISOString()
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </p>
                  <p>{apps.notes}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default InputSection;
