import React, { useEffect } from "react";

function ReadStud({ studs, addStud }) {
  // useEffect(() => {
  //   newstudRef.current.focus();
  //   newMarkRef.current.focus();
  // }, []);

  return (
    <div>
      <h2>USER READ DETAILS</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {studs.map((stud, index) => {
            return (
              <tr key={index}>
                <td>{stud.id}</td>
                <td>{stud.userName}</td>
                <td>{stud.userEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ReadStud;
