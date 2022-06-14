import * as api from '../../Components/Projects/api';
import * as actions from './actions';

export const getProjects = () => {
  return (dispatch) => {
    dispatch(actions.getProjectsPending());
    api
      .getProjectsApi()
      .then((response) => {
        dispatch(actions.getProjectsFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getProjectsFailed(error));
      });
  };
};

export const addNewProject = (body) => {
  return (dispatch) => {
    dispatch(actions.addNewProjectPending());
    api
      .addNewProjectApi(body)
      .then((response) => {
        dispatch(actions.addNewProjectFulfilled(response.data));
        if (!response.error) {
          dispatch(actions.closeAllModals());
        }
      })
      .catch((error) => {
        dispatch(actions.addNewProjectFailed(error));
      });
  };
};

export const updateProject = (body, id) => {
  return (dispatch) => {
    dispatch(actions.updateProjectPending());
    api
      .updateProjectApi(body, id)
      .then((response) => {
        dispatch(actions.updateProjectFulfilled(response.data));
        if (!response.error) {
          dispatch(actions.closeAllModals());
        }
      })
      .catch((error) => {
        dispatch(actions.updateProjectFailed(error));
      });
  };
};

export const deleteProject = (id) => {
  return (dispatch) => {
    dispatch(actions.deleteProjectPending());
    api
      .deleteProjectApi(id)
      .then((response) => {
        dispatch(actions.deleteProjectFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.deleteProjectFailed(error));
      });
  };
};

// DELETE AFTER MERGING WITH OTHER IMPLEMENTATIONS
export const getTasks = () => {
  return (dispatch) => {
    dispatch(actions.getTasksPending());
    api
      .getTasksApi()
      .then((response) => {
        dispatch(actions.getTasksFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getTasksFailed(error));
      });
  };
};

export const getEmployees = () => {
  return (dispatch) => {
    dispatch(actions.getEmployeesPending());
    api
      .getEmployeesApi()
      .then((response) => {
        dispatch(actions.getEmployeesFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getEmployeesFailed(error));
      });
  };
};
