import * as types from './constants';

// GET
export const getTimesheetFulfilled = (timesheet) => ({
  type: types.GET_TIMESHEET_FULFILLED,
  payload: timesheet
});

export const getTimesheetPending = () => ({
  type: types.GET_TIMESHEET_PENDING
});

export const getTimesheetFailed = (error) => ({
  type: types.GET_TIMESHEET_FAILED,
  payload: error
});

// // ADD
export const addTimeSheetFulfilled = (timesheet) => ({
  type: types.ADD_TIMESHEET_FULFILLED,
  payload: {
    ...timesheet,
    employeeId: { _id: timesheet.employeeId },
    task: { _id: timesheet.task }
  }
});

export const addTimeSheetPending = () => ({
  type: types.ADD_TIMESHEET_PENDING
});

export const addTimeSheetFailed = (error) => ({
  type: types.ADD_TIMESHEET_FAILED,
  payload: error
});

// // UPDATE
export const updateTimeSheetFulfilled = (timesheet) => ({
  type: types.UPDATE_TIMESHEET_FULFILLED,
  payload: timesheet
});

export const updateTimeSheetPending = () => ({
  type: types.UPDATE_TIMESHEET_PENDING
});

export const updateTimeSheetFailed = () => ({
  type: types.UPDATE_TIMESHEET_FAILED
});

// DELETE
export const deleteTimeSheetFulfilled = (id) => ({
  type: types.DELETE_TIMESHEET_FULFILLED,
  payload: id
});

export const deleteTimeSheetPending = () => ({
  type: types.DELETE_TIMESHEET_PENDING
});

export const deleteTimeSheetFailed = (error) => ({
  type: types.DELETE_TIMESHEET_FAILED,
  payload: error
});

export const showCreateModal = () => ({
  type: types.SHOW_CREATE_MODAL
});

export const showEditModal = () => ({
  type: types.SHOW_EDIT_MODAL
});

export const closeModals = () => ({
  type: types.CLOSE_MODALS
});
// GET EMPLOYEE TIMESHEET
export const getEmployeeTimesheetFulfilled = (timesheet) => ({
  type: types.GET_EMPLOYEE_TIMSHEET_FULFILLED,
  payload: timesheet
});

export const getEmployeTimesheetPending = () => ({
  type: types.GET_EMPLOYEE_TIMSHEET_PENDING
});

export const getEmployeTimesheetFailed = (error) => ({
  type: types.GET_EMPLOYEE_TIMSHEET_FAILED,
  payload: error
});
