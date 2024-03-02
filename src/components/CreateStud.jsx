import React, { useEffect } from "react";

import "../Style/style.css";

function CreateStud({
  addUser,
  newUserRef,
  newEmailRef,
  newUser,
  newEmail,
  setNewUser,
  setNewEmail
}) {
  return (
    <>
      <div className="center">
        <form onSubmit={addUser}>
          <h2>CREATE USER DETAILS</h2> <br />
          <label>Name :&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            name="filter"
            onChange={(e) => setNewUser(e.target.value)}
            ref={newUserRef}
            value={newUser}
            required
          ></input>
          <br />
          <br />
          <label>Email :&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            name="filter"
            onChange={(e) => setNewEmail(e.target.value)}
            ref={newEmailRef}
            value={newEmail}
            required
          ></input>
          <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateStud;
