import React, { useState } from "react";
import EditStud from "./EditStud";
import "../Style/style.css";

function UpdateStud({ studs, setStud }) {
  console.log(studs);

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
            Select Student ID :&nbsp;&nbsp;&nbsp;
            <select onChange={handleFunc} value={options}>
              <option disabled>{"Select ID"}</option>
              {studs.map((stud) => (
                <option key={stud.id}> {stud.id}</option>
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
              studs={studs}
              setStud={setStud}
              setOptions={setOptions}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default UpdateStud;
