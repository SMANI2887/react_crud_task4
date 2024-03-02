import React, { useEffect, useState } from "react";
import axios from "axios";

function ProfileUpdate({ options2, studs, setStud }) {
  const [selectedId2, setSelectedId2] = useState(null);
  const [editedName2, setEditedName2] = useState("");
  const [editedMark2, setEditedMark2] = useState("");

  const fetchNote = async () => {
    try {
      if (options2 != "Select ID") {
        const response = await axios.get(
          `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${options2}`
        );
        // console.log(response.data);
        if (response.data) {
          setSelectedId2(response.data);
          setEditedName2(response.data.p_id);
          setEditedMark2(response.data.pro_roll);
        }
      }
    } catch (error) {
      console.error("Error fetching the note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [options2]);

  const updateNote = (event) => {
    event.preventDefault();

    console.log("updating the note...");

    // prepare the object to update
    let student = {
      id: selectedId2.id,
      p_id: editedName2,
      pro_roll: editedMark2,
    };

    axios
      .put(
        `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${selectedId2.id}`,
        student
      )
      .then((response) => {
        console.log(response);
        console.log("Note updated successfully");

        // update the state
        let updatedNotes = studs.filter((n) => n.id !== student.id);
        updatedNotes.concat(student);
        setStud(updatedNotes);
        location.reload();
      })
      .catch((error) => {
        console.log("Error updating note:", error);
      });
  };

  return (
    <>
      <div>
        {!selectedId2 ? (
          <p>Loading Data...</p>
        ) : (
          <form onSubmit={updateNote}>
            <label>
              Profile ID: &nbsp;&nbsp;
              <input
                value={editedName2}
                onChange={(e) => setEditedName2(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Profile_Roll: &nbsp;&nbsp;
              <input
                value={editedMark2}
                onChange={(e) => setEditedMark2(e.target.value)}
              />
            </label>

            <br />
            <br />
            <button type="submit">Update Note</button>
          </form>
        )}
      </div>
    </>
  );
}

function ProfileEdit({ studs, setStud }) {
  const [options2, setOptions2] = useState("Select ID");

  const handleFunc2 = (e) => {
    setOptions2(e.target.value);
  };

  return (
    <>
      <div className="center">
        <h2>PROFILE EDIT From &nbsp;&nbsp;&nbsp;</h2>
        <br></br>
        <label>
          Select Student ID :&nbsp;&nbsp;&nbsp;
          <select onChange={handleFunc2} value={options2}>
            <option disabled>{"Select ID"}</option>
            {studs.map((stud) => (
              <option key={stud.id}> {stud.id}</option>
            ))}
          </select>
        </label>
        <br />

        <hr />
        <div>
          <br />

          {options2 !== "Select ID" && (
            <ProfileUpdate
              options2={options2}
              studs={studs}
              setStud={setStud}
              setOptions2={setOptions2}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
