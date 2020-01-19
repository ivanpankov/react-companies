import { notification } from './notification';
import { companyDetailsDefaultProps } from '../reducers/companyDetails';
import { getCompanyDetails } from '../api/companies';

export const REQUEST_COMPANY_DETAILS = 'REQUEST_COMPANY_DETAILS';
export const requestCompanyDetails = () => ({
  type: REQUEST_COMPANY_DETAILS,
  ...companyDetailsDefaultProps,
  loading: true
});

export const RECEIVE_COMPANY_DETAILS_SUCCESS =
  'RECEIVE_COMPANY_DETAILS_SUCCESS';
export const receiveCompanyDetailsSuccess = data => ({
  type: RECEIVE_COMPANY_DETAILS_SUCCESS,
  ...companyDetailsDefaultProps,
  data
});

export const RECEIVE_COMPANY_DETAILS_FAIL = 'RECEIVE_COMPANY_DETAILS_FAIL';
export const receiveCompanyDetailsFail = error => ({
  type: RECEIVE_COMPANY_DETAILS_FAIL,
  ...companyDetailsDefaultProps,
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
