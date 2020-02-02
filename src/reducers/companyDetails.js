import { CompanyDetailsDefaultProps, ProjectDefaultProps } from '../models';

export function employee(state = [], action = {}) {
  const { type, data } = action;

  switch (type) {
    case 'EDIT_EMPLOYEE':
      return { ...state, ...data };

    default:
      return state;
  }
}

export function employees(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'EDIT_EMPLOYEE':
      const employeeIndex = state.findIndex(item => item.id === action.id);

      return [
        ...state.slice(0, employeeIndex),
        employee(state[employeeIndex], action),
        ...state.slice(employeeIndex + 1)
      ];

    case 'ADD_EMPLOYEE':
      return [...state, action.data];

    default:
      return state;
  }
}

export function employeesId(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'DELETE_EMPLOYEE':
      return [
        ...state.slice(0, action.employeeIndex),
        ...state.slice(action.employeeIndex + 1)
      ];

    case 'ADD_EMPLOYEE':
      return [action.data.id, ...state];

    default:
      return state;
  }
}

export function project(state = ProjectDefaultProps, action = {}) {
  const { type } = action;

  switch (type) {
    case 'EDIT_PROJECT':
      return { ...state, ...action.data };

    case 'DELETE_EMPLOYEE':
    case 'ADD_EMPLOYEE':
      return { ...state, employeesId: employeesId(state.employeesId, action) };

    default:
      return state;
  }
}

export function projects(state = [], action = {}) {
  const { type } = action;

  switch (type) {
    case 'DELETE_PROJECT':
      return [
        ...state.slice(0, action.projectIndex),
        ...state.slice(action.projectIndex + 1)
      ];

    case 'EDIT_PROJECT':
    case 'DELETE_EMPLOYEE':
    case 'ADD_EMPLOYEE':
      return [
        ...state.slice(0, action.projectIndex),
        project(state[action.projectIndex], action),
        ...state.slice(action.projectIndex + 1)
      ];

    case 'ADD_PROJECT':
      return [action.data, ...state];

    default:
      return state;
  }
}

export function data(state = CompanyDetailsDefaultProps.data, action = {}) {
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
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: employees(state.employees, action),
        projects: projects(state.projects, action)
      };

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
    case 'ADD_EMPLOYEE':
      return { ...state, data: data(state.data, action) };

    default:
      return state;
  }
}
