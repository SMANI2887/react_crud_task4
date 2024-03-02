import React, { useEffect } from "react";

function ReadStud({ users }) {
 

  return (
    <div>
      <h2>USER READ DETAILS</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => {
            return (
              <tr key={index}>
                <td>{users.id}</td>
                <td>{users.userName}</td>
                <td>{users.userEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ReadStud;
