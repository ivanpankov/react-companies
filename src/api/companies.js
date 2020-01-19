import request from './request';

export const getCompanies = () => {
  return request('/api/companies');
};

export const getCompaniesTree = () => {
  return request('/api/companies-tree');
};

export const getCompanyDetails = id => {
  return request(`/api/company-details?companyId=${id}`);
};
