import axios from "axios";
import React from "react";
import "./DeleteModal.scss";

const DeleteModal = ({ deleteModal }) => {
  //   const deleteApp = (id) => {
  //     axios.delete(`http://localhost:7070/delete/${id}`.then);
  //   };

  return (
    <div className="delete-all">
      <div className="delete-container">
        <p>Are you sure you want to delete this application?</p>
        <div className="delete-buttons">
          <button
            onClick={() => {
              deleteApp(val.id);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              deleteModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
