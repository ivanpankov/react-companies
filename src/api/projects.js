import request from './request';

export const deleteProject = projectId => {
  return request(`/api/project/${projectId}`, {
    method: 'DELETE'
  });
};
