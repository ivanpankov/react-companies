import PropTypes from 'prop-types';

export const deleteProjectDefaultProps = {
  show: false,
  projectId: '',
  projectName: '',
  companyId: '',
  loading: false,
  error: null
};

export const deleteProjectPropTypes = {
  show: PropTypes.bool,
  projectId: PropTypes.string,
  projectName: PropTypes.string,
  companyId: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.object
};

export default function(state = deleteProjectDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'DELETE_PROJECT':
    case 'DELETE_PROJECT_SUCCESS':
    case 'DELETE_PROJECT_FAIL':
      return rest;

    case 'SET_SHOW_DELETE_PROJECT_DIALOG':
      return { ...state, ...rest };

    default:
      return state;
  }
}
