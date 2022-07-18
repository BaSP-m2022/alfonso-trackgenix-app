import {
  getTimesheetApi,
  deleteTimesheetApi,
  addTimesheetApi,
  editTimesheetApi,
  getEmployeeTimesheetApi,
  getTimesheetFromProjectApi
} from 'Components/TimeSheets/api';
import * as actions from './actions';

export const getTimesheets = () => {
  return (dispatch) => {
    dispatch(actions.getTimesheetPending());
    getTimesheetApi()
      .then((response) => {
        dispatch(actions.getTimesheetFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getTimesheetFailed(error));
      });
  };
};

export const deleteTimesheets = (id) => {
  return (dispatch) => {
    dispatch(actions.deleteTimeSheetPending());
    deleteTimesheetApi(id)
      .then((response) => {
        dispatch(actions.deleteTimeSheetFulfilled(response.data._id));
      })
      .catch((error) => {
        dispatch(actions.deleteTimeSheetFailed(error));
      });
  };
};

export const addTimesheets = (timeSheet) => {
  return (dispatch) => {
    dispatch(actions.addTimeSheetPending());
    addTimesheetApi(timeSheet)
      .then((response) => {
        dispatch(actions.addTimeSheetFulfilled(response.data));
        if (!response.error) {
          dispatch(actions.closeModals());
        }
      })
      .catch((error) => {
        dispatch(actions.addTimeSheetFailed(error));
      });
  };
};

export const editTimesheet = (newBody, id) => {
  return (dispatch) => {
    dispatch(actions.updateTimeSheetPending());
    editTimesheetApi(newBody, id)
      .then((response) => {
        dispatch(actions.updateTimeSheetFulfilled(response.data));
        if (!response.error) {
          dispatch(actions.closeModals());
        }
      })
      .catch((error) => {
        dispatch(actions.updateTimeSheetFailed(error));
      });
  };
};

export const getEmployeeTimesheets = (id) => {
  return (dispatch) => {
    dispatch(actions.getEmployeTimesheetPending());
    getEmployeeTimesheetApi(id)
      .then((response) => {
        dispatch(actions.getEmployeeTimesheetFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getEmployeTimesheetFailed(error));
      });
  };
};

export const getTimesheetsFromProject = (id) => {
  return (dispatch) => {
    dispatch(actions.getTimesheetsFromProjectPending());
    getTimesheetFromProjectApi(id)
      .then((response) => {
        dispatch(actions.getTimesheetsFromProjectFulfilled(response.data));
      })
      .catch((error) => {
        dispatch(actions.getTimesheetsFromProjectFailed(error));
      });
  };
};
