import request from './request';

export const editEmployee = (id, data) => {
  return request(`/api/employee/${id}`, {
    method: 'PUT',
    body: data
  });
};

export const addEmployee = (projectId, data) => {
  return request(`/api/employee/${projectId}`, {
    method: 'POST',
    body: data
  });
};
