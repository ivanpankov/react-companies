import PropTypes from 'prop-types';

export const menuEmplyeePropTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string
};

export const menuEmplyeeDefaultProps = {
  id: '',
  firstName: '',
  lastName: ''
};

export const menuAreaPropTypes = {
  name: PropTypes.string,
  employees: PropTypes.arrayOf(PropTypes.shape(menuEmplyeePropTypes))
};

export const menuAreaDefaultProps = {
  name: '',
  employees: ''
};

export const menuCompanyPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  jobAreas: PropTypes.arrayOf(PropTypes.shape(menuAreaPropTypes))
};

export const menuCompanyDefaultProps = {
  id: '',
  name: '',
  jobAreas: []
};

export const companiesTreePropTypes = {
  loading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape(menuCompanyPropTypes)),
  error: PropTypes.object
};

export const companiesTreeDefaultProps = {
  loading: false,
  data: [],
  error: null
};

export default function(state = companiesTreeDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'REQUEST_COMPANIES_TREE':
    case 'RECEIVE_COMPANIES_TREE_SUCCESS':
    case 'RECEIVE_COMPANIES_TREE_FAIL':
      return rest;

    default:
      return state;
  }
}
