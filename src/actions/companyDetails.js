import { notification } from './notification';
import { CompanyDetailsDefaultProps } from '../models';
import { getCompanyDetails } from '../api/companies';

export const REQUEST_COMPANY_DETAILS = 'REQUEST_COMPANY_DETAILS';
export const requestCompanyDetails = () => ({
  type: REQUEST_COMPANY_DETAILS,
  ...CompanyDetailsDefaultProps,
  loading: true
});

export const RECEIVE_COMPANY_DETAILS_SUCCESS =
  'RECEIVE_COMPANY_DETAILS_SUCCESS';
export const receiveCompanyDetailsSuccess = data => ({
  type: RECEIVE_COMPANY_DETAILS_SUCCESS,
  ...CompanyDetailsDefaultProps,
  data
});

export const RECEIVE_COMPANY_DETAILS_FAIL = 'RECEIVE_COMPANY_DETAILS_FAIL';
export const receiveCompanyDetailsFail = error => ({
  type: RECEIVE_COMPANY_DETAILS_FAIL,
  ...CompanyDetailsDefaultProps,
  error
});

export const fetchCompanyDetails = id => dispatch => {
  dispatch(requestCompanyDetails());

  return getCompanyDetails(id)
    .then(data => {
      dispatch(receiveCompanyDetailsSuccess(data));
    })
    .catch(error => {
      dispatch(receiveCompanyDetailsFail(error));
      dispatch(notification.error(error.toString()));
    });
};

export const UPDATE_COMPANY_PROJECT = 'UPDATE_COMPANY_PROJECT';
export const updateCompanyProject = data => ({
  type: UPDATE_COMPANY_PROJECT,
  data
});

export const DELETE_PROJECT = 'DELETE_PROJECT';
export const deleteProject = projectIndex => ({
  type: DELETE_PROJECT,
  projectIndex
});

export const EDIT_PROJECT = 'EDIT_PROJECT';
export const editProject = (projectIndex, data) => ({
  type: EDIT_PROJECT,
  projectIndex,
  data
});

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = data => ({
  type: ADD_PROJECT,
  data
});

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const deleteEmployee = (projectIndex, employeeIndex) => ({
  type: DELETE_EMPLOYEE,
  projectIndex,
  employeeIndex
});

export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const editEmployee = (id, data) => ({
  type: EDIT_EMPLOYEE,
  id,
  data
});

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const addEmployee = (projectIndex, data) => ({
  type: ADD_EMPLOYEE,
  data,
  projectIndex
});
