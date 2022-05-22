const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "rootroot",
  database: "applicationTracker",
});

app.post("/add", (req, res) => {
  const company = req.body.company;
  const position = req.body.position;
  const jobID = req.body.jobID;
  const link = req.body.link;
  const date = req.body.date;
  const location = req.body.location;
  const notes = req.body.notes;

  db.query(
    "INSERT INTO applications (company, position, jobID, link, date, location, notes) VALUES (?,?,?,?,?,?,?)",
    [company, position, jobID, link, date, location, notes],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/applications", (req, res) => {
  db.query("SELECT * FROM applications", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const notes = req.body.notes;
  db.query(
    "UPDATE applications SET notes = ? WHERE id = ?",
    [notes, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// app.delete()
// app.delete("/delte", (req, res) => {

// })

app.listen(7070, () => {
  console.log("Server listening on port 7070");
});
