import React from "react";
import "./EditModal.scss";

const EditModal = ({ cancelModal, apps }) => {
  console.log(apps);
  return (
    <div className="edit-all">
      <div className="edit-container">
        <label>Company</label>
        <input
          type="text"
          //   value={company}
          //   onChange={(e) => setCompany(e.target.value)}
          name="company"
        ></input>
        <label>Position Title</label>
        <input
          type="text"
          //   value={position}
          //   onChange={(e) => setPosition(e.target.value)}
          name="position"
        ></input>
        <label>Job Link</label>
        <input
          type="text"
          //   value={link}
          //   onChange={(e) => setLink(e.target.value)}
          name="link"
        ></input>
        <label>Application Date</label>
        <input
          className="edit-date"
          type="date"
          //   value={date}
          //   onChange={(e) => setDate(e.target.value)}
          name="date"
        ></input>
        <label>Location</label>
        <input
          type="text"
          //   value={location}
          //   onChange={(e) => setLocation(e.target.value)}
          name="location"
        ></input>
        <label>Notes</label>
        <textarea
          //   value={notes}
          //   onChange={(e) => setNotes(e.target.value)}
          name="notes"
        ></textarea>
        <div className="edit-buttons">
          <button>Save</button>
          <button
            onClick={() => {
              cancelModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
