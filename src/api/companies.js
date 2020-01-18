import request from './request';

export const getCompanies = () => {
  return request('/api/companies');
};

export const getCompaniesTree = () => {
  return request('/api/companies-tree');
};