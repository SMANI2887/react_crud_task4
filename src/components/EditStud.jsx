import React, { useEffect, useState } from "react";
import axios from "axios";

function EditStud({ options, users, setUsers }) {
  const [selectedId, setSelectedId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

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
          setEditedEmail(response.data.userEmail);
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
    let member = {
      id: selectedId.id,
      userName: editedName,
      userEmail: editedEmail,
    };

    axios
      .put(
        `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${selectedId.id}`,
        member
      )
      .then((response) => {
        console.log(response);
        console.log("Note updated successfully");

        // update the state
        let updatedNotes = users.filter((n) => n.id !== member.id);
        updatedNotes.concat(member);
        setUsers(updatedNotes);
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
            Email: &nbsp;&nbsp;
            <input
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
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
