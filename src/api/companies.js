import request from './request';

export const getCompanies = () => {
  return request('/api/companies');
};
