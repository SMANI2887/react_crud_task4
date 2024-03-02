import React, { useEffect } from "react";

import "../Style/style.css";

function CreateStud({
  addStud,
  newstudRef,
  newMarkRef,
  newstud,
  newMark,
  setNewstud,
  setNewMark,
  studs,
}) {
  return (
    <>
      <div className="center">
        <form onSubmit={addStud}>
          <h2>CREATE USER DETAILS</h2> <br />
          <label>Name :&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            name="filter"
            onChange={(e) => setNewstud(e.target.value)}
            ref={newstudRef}
            value={newstud}
            required
          ></input>
          <br />
          <br />
          <label>Marks :&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            name="filter"
            onChange={(e) => setNewMark(e.target.value)}
            ref={newMarkRef}
            value={newMark}
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
