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

function removeEmployeeFromProject(projectId, employeeId) {
  const targetProject = projects.find(project => project.id === projectId);

  if (targetProject) {
    targetProject.employeesId = targetProject.employeesId.filter(
      id => id !== employeeId
    );
  } else {
    log('Project does not exist');
    // TODO: handle error
  }

  log(`Employee with id: '${employeeId}' has been removed.`);
}

function addEmployee(employee) {
  // TODO: check if employee exists
  employee.id = uuidv1();
  employees.push(employee);

  return employees;
}

function editEmployee(id, data) {
  const employeeIndex = getIndexById(employees, id);
  return Object.assign(employees[employeeIndex], data);
}

function removeProject(id) {
  const projectIndex = getIndexById(projects, id);
  projects.splice(projectIndex, 1); // remove project
}

function addProject(project) {
  // TODO: check if project exists
  project.id = uuidv1();
  projects.unshift(project);
  return project;
}

function editProject(id, data) {
  const projectIndex = getIndexById(projects, id);
  return Object.assign(projects[projectIndex], data);
}

function addEmployeeToProject(projectId, employee) {
  addEmployee(employee);

  const projectIndex = getIndexById(projects, projectId);
  const project = projects[projectIndex];

  if (!Array.isArray(project.employeesId)) {
    project.employeesId = [];
  }

  project.employeesId.push(employee.id);

  return employee;
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
  editProject,
  addProject,
  removeEmployeeFromProject,
  editEmployee,
  addEmployeeToProject
};
