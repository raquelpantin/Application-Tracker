import "./InputSection.scss";
import { useState } from "react";
import React from "react";
import axios from "axios";
import editIcon from "../../assets/icons8-pencil-80.png";
import deleteIcon from "../../assets/icons8-delete-99.png";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

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

  const [openEditModal, setEditModal] = useState(false);
  const [openDeleteModal, setDeleteModal] = useState(false);

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

    setCompany("");
    setPosition("");
    setJobID("");
    setLink("");
    setDate("");
    setLocation("");
    setNotes("");
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
    <div className="input-all">
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
        {/* <label>Job ID</label>
        <input
          type="text"
          value={jobID}
          onChange={(e) => setJobID(e.target.value)}
          name="jobID"
        ></input> */}
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

      <div className="input-applications">
        <div className="input-buttons">
          {!showList ? (
            <button className="input-hideshowbtn" onClick={getApps}>
              Show Applications
            </button>
          ) : (
            <button className="input-hideshowbtn" onClick={hideApps}>
              Hide Applications
            </button>
          )}
          <p className="input-count">Total Applications: {appList.length}</p>
        </div>
        <div className="input-results">
          {showList
            ? appList.map((apps) => {
                return (
                  <div className="input-postit" key={apps.id}>
                    <h2 className="input-title">{apps.company}</h2>
                    <p className="input-dateresult">
                      {new Date(apps.date)
                        .toISOString()
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </p>
                    <p>{apps.position}</p>
                    <a className="input-link" href={apps.link}>
                      {apps.link}
                    </a>
                    <p>{apps.location}</p>
                    <p>{apps.notes}</p>
                    <div className="input-btncontainer">
                      <img
                        onClick={() => {
                          setEditModal(true);
                        }}
                        className="input-edit"
                        src={editIcon}
                      />
                      <img
                        onClick={() => {
                          setDeleteModal(true);
                        }}
                        className="input-delete"
                        src={deleteIcon}
                      />
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {openEditModal && <EditModal cancelModal={setEditModal} apps={appList} />}
      {openDeleteModal && <DeleteModal deleteModal={setDeleteModal} />}
    </div>
  );
};

export default InputSection;
