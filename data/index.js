const companies = require('./companies.json');
const companyAddresses = require('./company-addresses.json');
const employees = require('./employees.json');
const projects = require('./projects.json');

const separateEmployeesByJobArea = (employees = []) => {
  const jobAreas = {};

  employees.forEach(employee => {
    const area = employee.jobArea;

    if (Array.isArray(jobAreas[area])) {
      jobAreas[area].push(employee);
    } else {
      jobAreas[area] = [employee];
    }
  });

  return jobAreas;
};

const separateEmployeesByCompanyId = (employees = []) => {
  const companyIds = {};

  employees.forEach(employee => {
    const id = employee.companyId;

    if (Array.isArray(companyIds[id])) {
      companyIds[id].push(employee);
    } else {
      companyIds[id] = [employee];
    }
  });

  return companyIds;
};

const jobAreasToArray = (jobAreas = {}) => {
  return Object.keys(jobAreas).map(jobAreaName => {
    return { name: jobAreaName, employees: jobAreas[jobAreaName] };
  });
};

const getCompaniesTree = () => {
  const employeesByCompanyId = separateEmployeesByCompanyId(employees);

  return companies.map(company => {
    const companyEmployees = employeesByCompanyId[company.id];
    const companyEmployeesByJobArea = separateEmployeesByJobArea(
      companyEmployees
    );
    return { ...company, jobAreas: jobAreasToArray(companyEmployeesByJobArea) };
  });
};

const getCompanies = () => {
  return companies;
};

const getEmployees = () => {
  return employees;
};

module.exports = {
  getCompanies,
  getEmployees,
  getCompaniesTree
};
