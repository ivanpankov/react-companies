const companies = require('./companies.json');
const companyAddresses = require('./company-addresses.json');
const employees = require('./employees.json');
const companyProjects = require('./projects.json');

const separateEmployeesByJobArea = (employees = []) => {
  const jobAreas = {};

  employees.forEach(employee => {
    const area = employee.jobArea;
    const employeeData = {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName
    };

    if (Array.isArray(jobAreas[area])) {
      jobAreas[area].push(employeeData);
    } else {
      jobAreas[area] = [employeeData];
    }
  });

  return jobAreas;
};

const separateEmployeesByCompanyId = (employees = []) => {
  const companyIds = {};

  employees.forEach(employee => {
    const id = employee.companyId;
    const employeeData = {
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      jobArea: employee.jobArea
    };

    if (Array.isArray(companyIds[id])) {
      companyIds[id].push(employeeData);
    } else {
      companyIds[id] = [employeeData];
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
    return {
      id: company.id,
      name: company.name,
      jobAreas: jobAreasToArray(companyEmployeesByJobArea)
    };
  });
};

const getCompanyDetails = companyId => {
  const company = companies.find(company => company.id === companyId);
  const address = companyAddresses.find(
    address => address.companyId === companyId
  );
  const projects = companyProjects.filter(
    project => project.companyId === companyId
  );

  console.log(companyId)

  return {
    company,
    address,
    projects
  };
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
  getCompaniesTree,
  getCompanyDetails
};
