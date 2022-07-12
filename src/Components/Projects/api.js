export const getProjectsApi = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const addNewProjectApi = async (body) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    alert(data.message);
    return data;
  } catch (error) {
    return error;
  }
};

export const updateProjectApi = async (body, id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    alert(data.message);
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteProjectApi = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`, {
      method: 'delete'
    });
    const data = await response.json();
    alert(data.message);
    return data;
  } catch (error) {
    return error;
  }
};

export const getProjectApi = async (id) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/time-sheets/project?id=${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
