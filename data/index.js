const companies = require('./companies.json');
const companyAddresses = require('./company-addresses.json');
const employees = require('./employees.json');
let companyProjects = require('./projects.json');

const employeesToObject = employees => {
  const result = {};

  employees.forEach(employee => {
    result[employee.id] = employee;
  });

  return result;
};

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

const getEmployeesById = employeesId => {
  const employeesObj = employeesToObject(employees);
  return employeesId.map(id => employeesObj[id]);
};

const getCompanyDetails = companyId => {
  const company = companies.find(company => company.id === companyId);
  const address = companyAddresses.find(
    address => address.companyId === companyId
  );
  const projects = companyProjects
    .filter(project => project.companyId === companyId)
    .map(project => {
      const { employeesId, ...rest } = project;
      const employees = getEmployeesById(employeesId);

      return { ...rest, employees };
    });

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

const deleteProject = id => {
  companyProjects = companyProjects.filter(project => project.id !== id);
};

module.exports = {
  getCompanies,
  getEmployees,
  getCompaniesTree,
  getCompanyDetails,
  deleteProject
};
