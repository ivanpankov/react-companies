import PropTypes from 'prop-types';

export const companiesTreePropTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.object
};

export const defaultCompaniesTree = {
  loading: false,
  data: [],
  error: null
};

export default function(state = defaultCompaniesTree, action = {}) {
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
