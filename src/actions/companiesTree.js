import { notification } from './notification';
import { companiesTreeDefaultProps } from '../reducers/companiesTree';
import { getCompaniesTree } from '../api/companies';

export const REQUEST_COMPANIES_TREE = 'REQUEST_COMPANIES_TREE';
export const requestCompaniesTree = () => ({
  type: REQUEST_COMPANIES_TREE,
  ...companiesTreeDefaultProps,
  loading: true
});

export const RECEIVE_COMPANIES_TREE_SUCCESS = 'RECEIVE_COMPANIES_TREE_SUCCESS';
export const receiveCompaniesTreeSuccess = data => ({
  type: RECEIVE_COMPANIES_TREE_SUCCESS,
  ...companiesTreeDefaultProps,
  data
});

export const RECEIVE_COMPANIES_TREE_FAIL = 'RECEIVE_COMPANIES_TREE_FAIL';
export const receiveCompaniesTreeFail = error => ({
  type: RECEIVE_COMPANIES_TREE_FAIL,
  ...companiesTreeDefaultProps,
  error
});

export const fetchCompaniesTree = () => dispatch => {
  dispatch(requestCompaniesTree());

  return getCompaniesTree()
    .then(data => {
      dispatch(receiveCompaniesTreeSuccess(data));
    })
    .catch(error => {
      dispatch(receiveCompaniesTreeFail(error));
      dispatch(notification.error(error.toString()));
    });
};