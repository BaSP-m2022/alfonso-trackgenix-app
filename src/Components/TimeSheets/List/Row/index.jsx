import React from 'react';

function Row(props) {
  const { _id: id, employeeId, project, date, task, hours, approved, role } = props.timeSheet;
  console.log(props.employeeId);
  return (
    <tr id={id} className={StyleSheet.row}>
      <td>{id}</td>
      <td>{employeeId ? employeeId._id : 'No id'}</td>
      <td>{project}</td>
      <td>{date}</td>
      <td>{task.taskName}</td>
      <td>{hours}</td>
      <td>{approved ? 'Approved' : 'No approved'}</td>
      <td>{role}</td>
      <td>
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            props.deleteTimeSheet(id);
          }}
        ></i>
      </td>
      <td>
        <a href={`time-sheets-edit?id=${id}`}>Edit</a>
      </td>
    </tr>
  );
}

export default Row;
