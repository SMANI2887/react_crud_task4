import React, { useEffect, useState } from "react";
import axios from "axios";

function EditStud({ options, studs, setStud }) {
  const [selectedId, setSelectedId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedMark, setEditedMark] = useState("");

  const fetchNote = async () => {
    try {
      if (options != "Select ID") {
        const response = await axios.get(
          `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${options}`
        );
        // console.log(response.data);
        if (response.data) {
          setSelectedId(response.data);
          setEditedName(response.data.userName);
          setEditedMark(response.data.userEmail);
        }
      }
    } catch (error) {
      console.error("Error fetching the note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [options]);

  const updateNote = (event) => {
    event.preventDefault();

    console.log("updating the note...");

    // prepare the object to update
    let student = {
      id: selectedId.id,
      userName: editedName,
      userEmail: editedMark,
    };

    axios
      .put(
        `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${selectedId.id}`,
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
    <div>
      {!selectedId ? (
        <p>Loading Data...</p>
      ) : (
        <form onSubmit={updateNote}>
          <label>
            Name: &nbsp;&nbsp;
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Mark: &nbsp;&nbsp;
            <input
              value={editedMark}
              onChange={(e) => setEditedMark(e.target.value)}
            />
          </label>

          <br />
          <br />
          <button type="submit">Update Note</button>
        </form>
      )}
    </div>
  );
}

export default EditStud;
