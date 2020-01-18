const companies = require('./companies.json');
const companyAddresses = require('./company-addresses.json');
const employees = require('./employees.json');
const projects = require('./projects.json');

const getCompanies = () => {
  return companies;
};

module.exports = {
  getCompanies: getCompanies
};
