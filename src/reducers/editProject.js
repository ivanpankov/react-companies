import PropTypes from 'prop-types';
import { ProjectDefaultProps, ProjectPropTypes } from '../models';

export const editProjectPropTypes = {
  data: PropTypes.shape(ProjectPropTypes),
  loading: PropTypes.bool,
  error: PropTypes.object,
  show: PropTypes.bool
};
export const editProjectDefaultProps = {
  data: ProjectDefaultProps,
  loading: false,
  error: null,
  show: false
};

export default function(state = editProjectDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'EDIT_PROJECT':
    case 'EDIT_PROJECT_SUCCESS':
    case 'EDIT_PROJECT_FAIL':
      return rest;

    case 'SET_SHOW_EDIT_PROJECT_DIALOG':
      return { ...state, ...rest };

    case 'UPDATE_PROJECT_DATA':
      return {
        ...state,
        data: { ...state.data, ...action.data }
      };

    default:
      return state;
  }
}
