import React, { useState } from "react";
import EditStud from "./EditStud";
import "../Style/style.css";

function UpdateStud({ users, setUsers }) {
  

  const [options, setOptions] = useState("Select ID");

  const handleFunc = (event) => {
    // console.log(event.target.value);
    setOptions(event.target.value);
  };

  return (
    <>
      <div className="center">
        <h2>EDIT From &nbsp;&nbsp;&nbsp;</h2>
        <br />
        <div>
          <label>
            Select User ID :&nbsp;&nbsp;&nbsp;
            <select onChange={handleFunc} value={options}>
              <option disabled>{"Select ID"}</option>
              {users.map((users) => (
                <option key={users.id}> {users.id}</option>
              ))}
            </select>
          </label>
        </div>
        <br />

        <hr />
        <div>
          <br />

          {options !== "Select ID" && (
            <EditStud
              options={options}
              users={users}
              setUsers={setUsers}
              setOptions={setOptions}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default UpdateStud;
