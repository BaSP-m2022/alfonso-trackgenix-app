export const getTimesheetApi = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const deleteTimesheetApi = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets/${id}`, {
      method: 'PATCH'
    });
    const data = await response.json();
    if (!data.error) {
      alert(data.message);
    }
    return data;
  } catch (err) {
    return err;
  }
};

export const addTimesheetApi = async (timeSheet) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(timeSheet)
    });
    const data = await response.json();
    alert('Time-sheet successfully created');
    return data;
  } catch (err) {
    alert('There has been an error creating time-sheet');
    return err;
  }
};

export const editTimesheetApi = async (newBody, id) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newBody)
    });
    const data = await res.json();
    alert('Time-sheet successfully updated');
    return data;
  } catch (err) {
    alert('There has been an error updating time-sheet');
    return err;
  }
};

export const getEmployeeTimesheetApi = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets/employee?id=${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
