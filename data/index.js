const companies = require('./companies.json');
const addresses = require('./company-addresses.json');
let employees = require('./employees.json');
let projects = require('./projects.json');
const uuidv1 = require('uuid/v1');

function log(msg) {
  console.log(msg);
}

function getIndexById(scope, id) {
  return scope.findIndex(item => item.id === id);
}

// returns arrey of values matched
function getAllByCompanyId(scope, companyId) {
  return scope.filter(item => item.companyId === companyId);
}

// returns first found value
function findByCompanyId(scope, companyId) {
  return scope.find(item => item.companyId === companyId);
}

function getEmployeeProjects(id) {
  return projects.filter(project => project.employeesId.includes(id));
}

function removeEmployeeFromProject(project, employeeId) {
  project.employeesId = project.employeesId.filter(id => id !== employeeId);
}

function removeEmployee(id) {
  const employeeIndex = getIndexById(employees, id);
  employees.splice(employeeIndex, 1); // remove employee

  // remove employee from projects
  const employeeProjects = getEmployeeProjects(id);
  employeeProjects.forEach(project => {
    removeEmployeeFromProject(project, id);
  });

  log(`Employee with id: '${id}' has been removed.`);
}

function addEmployee(employee) {
  // TODO: check if employee exists
  employee.id = uuidv1();
  employees.push(employee);
}

function editEmployee(id, data) {
  const employeeIndex = getIndexById(employees, id);
  Object.assign(employees[employeeIndex], data);
}

function removeProject(id) {
  const projectIndex = getIndexById(projects, id);
  projects.splice(projectIndex, 1); // remove project
}

function addProject(project) {
  // TODO: check if employee exists
  project.id = uuidv1();
  projects.push(employee);
}

function editProject(id, data) {
  const projectIndex = getIndexById(projects, id);
  Object.assign(projects[projectIndex], data);
  return projects[projectIndex];
}

function addEmployeeToProject(project, employeeId) {
  if (!Array.isArray(project.employeesId)) {
    project.employeesId = [];
  }
  project.employeesId.push(employeeId);
}

function separateEmployeesByJobArea(employees = []) {
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
}

function separateEmployeesByCompanyId(employees = []) {
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
}

function jobAreasToArray(jobAreas = {}) {
  return Object.keys(jobAreas).map(jobAreaName => {
    return { name: jobAreaName, employees: jobAreas[jobAreaName] };
  });
}

function getCompaniesTree() {
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
}

function getCompanyDetails(id) {
  const companyIndex = getIndexById(companies, id);
  const company = companies[companyIndex];
  const companyAddress = findByCompanyId(addresses, id);
  const companyProjects = getAllByCompanyId(projects, id);
  const companyEmployees = getAllByCompanyId(employees, id);

  return {
    company,
    address: companyAddress,
    projects: companyProjects,
    employees: companyEmployees
  };
}

module.exports = {
  getCompaniesTree,
  getCompanyDetails,
  removeProject,
  editProject
};
