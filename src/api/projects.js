import request from './request';

export const deleteProject = projectId => {
  return request(`/api/project/${projectId}`, {
    method: 'DELETE'
  });
};

export const editProject = (id, data) => {
  return request(`/api/project/${id}`, {
    method: 'PUT',
    body: data
  });
};
