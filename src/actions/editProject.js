import { notification } from './notification';
import { editProjectDefaultProps } from '../reducers/editProject';
import { updateProject as updateProjectRequest } from '../api/projects';
import { updateCompanyProject } from './companyDetails';

export const EDIT_PROJECT = 'EDIT_PROJECT';
export const editProject = () => ({
  type: EDIT_PROJECT,
  ...editProjectDefaultProps,
  loading: true
});

export const EDIT_PROJECT_SUCCESS = 'EDIT_PROJECT_SUCCESS';
export const editProjectSuccess = () => ({
  type: EDIT_PROJECT_SUCCESS,
  ...editProjectDefaultProps
});

export const EDIT_PROJECT_FAIL = 'EDIT_PROJECT_FAIL';
export const editProjectFail = error => ({
  type: EDIT_PROJECT_FAIL,
  ...editProjectDefaultProps,
  error
});

export const updateProjectAction = project => dispatch => {
  dispatch(editProject());

  return updateProjectRequest(project)
    .then(data => {
      dispatch(editProjectSuccess(data));
      dispatch(updateCompanyProject(project));
    })
    .catch(error => {
      dispatch(editProjectFail(error));
      dispatch(notification.error(error.toString()));
    });
};

export const SET_SHOW_EDIT_PROJECT_DIALOG = 'SET_SHOW_EDIT_PROJECT_DIALOG';
export const setShowDialog = (show = false, data = {}) => ({
  type: SET_SHOW_EDIT_PROJECT_DIALOG,
  show,
  data
});

export const UPDATE_PROJECT_DATA = 'UPDATE_PROJECT_DATA';
export const updateProjectData = data => ({
  type: UPDATE_PROJECT_DATA,
  data
});
