import { companiesTreeDefaultProps } from '../models';

export default function(state = companiesTreeDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'REQUEST_COMPANIES_TREE':
    case 'RECEIVE_COMPANIES_TREE_SUCCESS':
    case 'RECEIVE_COMPANIES_TREE_FAIL':
      return { ...state, ...rest };

    default:
      return state;
  }
}
