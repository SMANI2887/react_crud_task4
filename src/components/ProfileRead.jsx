import React from "react";

function ProfileRead({ users, setUsers }) {
  return (
    <>
      <h2>PROFILE READ</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile_ID</th>
            <th>Profile_Roll</th>
          </tr>
        </thead>
        <tbody>
          {users.map((stud, index) => {
            return (
              <tr key={index}>
                <td>{stud.id}</td>
                <td>{stud.p_id}</td>
                <td>{stud.pro_roll}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProfileRead;
