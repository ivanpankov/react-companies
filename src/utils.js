export const noop = () => {};

export const arrayToObj = arr => {
  const result = {};

  arr.forEach(item => {
    result[item.id] = item;
  });

  return result;
};

export const DATE_FORMAT = 'dd/MM/yyyy';

export const getProjectsEmployeesParticipateIn = (employees, projects) => {
  const projectsHash = {};

  employees.forEach(employee => {
    projects.forEach(project => {
      if (project.employeesId.includes(employee.id)) {
        projectsHash[project.id] = project;
      }
    });
  });

  return Object.values(projectsHash);
};
