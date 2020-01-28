import request from './request';

export const editEmployee = (id, data) => {
  return request(`/api/employee/${id}`, {
    method: 'PUT',
    body: data
  });
};
