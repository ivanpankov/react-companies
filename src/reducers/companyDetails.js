import { CompanyDetailsDefaultProps, ProjectDefaultProps } from '../models';

function employee(state = [], action = {}) {
  const { type, data } = action;

  switch (type) {
    case 'EDIT_EMPLOYEE':
      return { ...state, ...data };

    default:
      return state;
  }
}

function employees(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'EDIT_EMPLOYEE':
      const employeeIndex = state.findIndex(item => item.id === action.id);

      return [
        ...state.slice(0, employeeIndex),
        employee(state[employeeIndex], action),
        ...state.slice(employeeIndex + 1)
      ];

    default:
      return state;
  }
}

function employeesId(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'DELETE_EMPLOYEE':
      return [
        ...state.slice(0, action.employeeIndex),
        ...state.slice(action.employeeIndex + 1)
      ];

    default:
      return state;
  }
}

function project(state = ProjectDefaultProps, action = {}) {
  const { type } = action;

  switch (type) {
    case 'EDIT_PROJECT':
      return { ...state, ...action.data };

    case 'DELETE_EMPLOYEE':
      return { ...state, employeesId: employeesId(state.employeesId, action) };

    default:
      return state;
  }
}

function projects(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'DELETE_PROJECT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case 'EDIT_PROJECT':
    case 'DELETE_EMPLOYEE':
      return [
        ...state.slice(0, action.index),
        project(state[action.index], action),
        ...state.slice(action.index + 1)
      ];

    case 'ADD_PROJECT':
      return [action.data, ...state];

    default:
      return state;
  }
}

function data(state = CompanyDetailsDefaultProps.data, action = {}) {
  const { type } = action;

  switch (type) {
    case 'UPDATE_COMPANY_PROJECT':
      return state;

    case 'DELETE_PROJECT':
    case 'EDIT_PROJECT':
    case 'ADD_PROJECT':
    case 'DELETE_EMPLOYEE':
      return { ...state, projects: projects(state.projects, action) };

    case 'EDIT_EMPLOYEE':
      return { ...state, employees: employees(state.employees, action) };

    default:
      return state;
  }
}

export default function(state = CompanyDetailsDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'REQUEST_COMPANY_DETAILS':
    case 'RECEIVE_COMPANY_DETAILS_SUCCESS':
    case 'RECEIVE_COMPANY_DETAILS_FAIL':
      return rest;

    case 'EDIT_PROJECT':
    case 'DELETE_PROJECT':
    case 'ADD_PROJECT':
    case 'DELETE_EMPLOYEE':
    case 'EDIT_EMPLOYEE':
      return { ...state, data: data(state.data, action) };

    default:
      return state;
  }
}
