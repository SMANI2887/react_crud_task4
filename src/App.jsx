import React, { useEffect, useRef, useState } from "react";
import "./Style/style.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateStud from "./components/CreateStud";
import ReadStud from "./components/ReadStud";

import UpdateStud from "./components/UpdateStud";
import ProfileRead from "./components/ProfileRead";
import ProfileEdit from "./components/ProfileEdit";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // define state
  const [studs, setStud] = useState([]);

  //Create New Student records
  const [newstud, setNewstud] = useState("");
  const [newMark, setNewMark] = useState("");

  //null record requried
  const newstudRef = useRef(null);
  const newMarkRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/"
      );
      setStud(response.data);
    } catch (error) {
      console.log("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addStud = (e) => {
    e.preventDefault();
    // console.log('button click');
    // new record create
    const studObject = {
      id: studs.length + 1,
      userName: newstud,
      userEmail: newMark,
    };

    // setStud(studs.concat(studObject));
    axios
      .post("https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/", studObject)
      .then((response) => {
        console.log("note added successfully...");
        location.reload();
      });

    //clear stud record
    setNewstud("");
    setNewMark("");

    newstudRef.current.focus();
    newMarkRef.current.focus();

    fetchNotes();
  };

  const changeStud = (e) => {
    setStud(e.target.value);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary backclr">
          <div className="container-fluid backclr">
            <a className="navbar-brand" href="#">
              <b>CRUD OPERATION</b>
            </a>
          </div>
        </nav>
      </div>

      <Router>
        <Link to="/createStud" className="Lstyle">
          CreateStud
        </Link>
        <Link to="/readStud" className="Lstyle">
          ReadStud
        </Link>

        <Link to="/UpdateStud" className="Lstyle">
          UpdateStud
        </Link>

        <Link to="/ProfileRead" className="Lstyle">
          Profile
        </Link>
        <Link to="/ProfileEdit" className="Lstyle">
          Profile-edit
        </Link>
        <hr></hr>
        <Routes>
          <Route
            path="/createStud"
            element={
              <CreateStud
                addStud={addStud}
                newstudRef={newstudRef}
                newMardRef={newMarkRef}
                newstud={newstud}
                newMark={newMark}
                setNewstud={setNewstud}
                setNewMark={setNewMark}
                studs={studs}
              />
            }
          />

          <Route
            path="/readStud"
            element={<ReadStud addStud={addStud} studs={studs} />}
          />

          <Route
            path="/UpdateStud"
            element={<UpdateStud studs={studs} setStud={setStud} />}
          />
          <Route
            path="/ProfileRead"
            element={<ProfileRead studs={studs} setStud={setStud} />}
          />
          <Route
            path="/ProfileEdit"
            element={<ProfileEdit studs={studs} setStud={setStud} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
