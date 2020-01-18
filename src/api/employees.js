import request from './request';

export const getEmployees = () => {
  return request('/api/employees');
};
