import { notification } from './notification';
import { deleteProjectDefaultProps } from '../reducers/deleteProject';
import { deleteProject as deleteProjectRequest } from '../api/projects';
import { fetchCompanyDetails } from './companyDetails';

export const DELETE_PROJECT = 'DELETE_PROJECT';
export const deleteProject = () => ({
  type: DELETE_PROJECT,
  ...deleteProjectDefaultProps,
  loading: true
});

export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const deleteProjectSuccess = () => ({
  type: DELETE_PROJECT_SUCCESS,
  ...deleteProjectDefaultProps
});

export const DELETE_PROJECT_FAIL = 'DELETE_PROJECT_FAIL';
export const deleteProjectFail = error => ({
  type: DELETE_PROJECT_FAIL,
  ...deleteProjectDefaultProps,
  error
});

export const deleteProjectAction = (projectId, companyId) => dispatch => {
  dispatch(deleteProject());

  return deleteProjectRequest(projectId)
    .then(data => {
      dispatch(deleteProjectSuccess(data));
      dispatch(fetchCompanyDetails(companyId));
    })
    .catch(error => {
      dispatch(deleteProjectFail(error));
      dispatch(notification.error(error.toString()));
    });
};

export const SET_SHOW_DELETE_PROJECT_DIALOG = 'SET_SHOW_DELETE_PROJECT_DIALOG';
export const setShowDialog = (show = false, projectData = {}) => ({
  type: SET_SHOW_DELETE_PROJECT_DIALOG,
  show,
  projectId: projectData.id,
  projectName: projectData.name,
  companyId: projectData.companyId
});
