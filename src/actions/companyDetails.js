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
export const deleteProject = index => ({
  type: DELETE_PROJECT,
  index
});

export const EDIT_PROJECT = 'EDIT_PROJECT';
export const editProject = (index, data) => ({
  type: EDIT_PROJECT,
  index,
  data
});

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = data => ({
  type: ADD_PROJECT,
  data
});
