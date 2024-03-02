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
  const [users, setUsers] = useState([]);

  //Create New Student records
  const [newUser, setNewUser] = useState("");
  const [newEmail, setNewEmail] = useState("");

  //null record requried
  const newUserRef = useRef(null);
  const newEmailRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Failed to fetch notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addUser = (e) => {
    e.preventDefault();
    // console.log('button click');
    // new record create
    const userObj = {
      id: users.length + 1,
      userName: newUser,
      userEmail: newEmail,
    };

    // setStud(studs.concat(studObject));
    axios
      .post("https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/", userObj)
      .then((response) => {
        console.log("note added successfully...");
        location.reload();
      });

    //clear stud record
    setNewUser("");
    setNewEmail("");

    newUserRef.current.focus();
    newEmailRef.current.focus();

    fetchNotes();
  };

  // const changeStud = (e) => {
  //   setStud(e.target.value);
  // };

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
        <Link to="/create-user" className="Lstyle">
          Create_User
        </Link>
        <Link to="/read" className="Lstyle">
          Read_User
        </Link>

        <Link to="/edit-user/:id" className="Lstyle">
          Edit_User
        </Link>

        <Link to="/profile/:id" className="Lstyle">
          Profile_Read
        </Link>
        <Link to="/edit-profile/:id" className="Lstyle">
          Profile_Edit
        </Link>
        <hr></hr>
        <Routes>
          <Route
            path="/create-user"
            element={
              <CreateStud
                addUser={addUser}
                newUserRef={newUserRef}
                newEmailRef={newEmailRef}
                newUser={newUser}
                newEmail={newEmail}
                setNewUser={setNewUser}
                setNewEmail={setNewEmail}
                users={users}
              />
            }
          />

          <Route path="/read" element={<ReadStud users={users} />} />

          <Route
            path="/edit-user/:id"
            element={
              <UpdateStud users={users} addUser={addUser} setUsers={setUsers} />
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProfileRead
                users={users}
                addUser={addUser}
                setUsers={setUsers}
              />
            }
          />
          <Route
            path="/edit-profile/:id"
            element={
              <ProfileEdit
                users={users}
                addUser={addUser}
                setUsers={setUsers}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
