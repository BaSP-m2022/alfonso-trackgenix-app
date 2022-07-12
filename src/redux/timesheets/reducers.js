import * as types from './constants';

const initialState = {
  list: [],
  isFetching: false,
  error: '',
  showCreateModal: false,
  showEditModal: false
};

export const timesheetReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET
    case types.GET_TIMESHEET_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_TIMESHEET_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };
    case types.GET_TIMESHEET_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    //ADD
    case types.ADD_TIMESHEET_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case types.ADD_TIMESHEET_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
        isFetching: false
      };
    case types.ADD_TIMESHEET_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // //UPDATE
    case types.UPDATE_TIMESHEET_PENDING:
      return {
        ...state
      };
    case types.UPDATE_TIMESHEET_FULFILLED:
      return {
        ...state,
        list: state.list.map((newField) =>
          newField._id === action.payload._id ? action.payload : newField
        )
      };
    case types.UPDATE_TIMESHEET_FAILED:
      return {
        ...state,
        error: action.payload
      };
    //DELETE
    case types.DELETE_TIMESHEET_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case types.DELETE_TIMESHEET_FULFILLED:
      return {
        ...state,
        list: state.list.filter((timeSheet) => timeSheet._id !== action.payload),
        isFetching: false
      };
    case types.DELETE_TIMESHEET_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    // MODALS
    case types.SHOW_CREATE_MODAL:
      return {
        ...state,
        showCreateModal: true
      };
    case types.SHOW_EDIT_MODAL:
      return {
        ...state,
        showEditModal: true
      };
    case types.CLOSE_MODALS:
      return {
        ...state,
        showCreateModal: false,
        showEditModal: false
      };
    // EMPLOYEE TIMESHEET
    case types.GET_EMPLOYEE_TIMSHEET_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_EMPLOYEE_TIMSHEET_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isFetching: false
      };
    case types.GET_EMPLOYEE_TIMSHEET_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
