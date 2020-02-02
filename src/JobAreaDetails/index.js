import { connect } from 'react-redux';
import JobAreaDetails from './Component';
import { fetchCompanyDetails } from '../actions/companyDetails';

const mapStateToProps = ({ companyDetails }, ownProps) => {
  const { match, location } = ownProps;
  const { name } = match.params;
  const { search } = location;
  const urlVars = new URLSearchParams(search);
  const companyId = urlVars.get('companyId');
  const companyName = urlVars.get('companyName');

  const { data } = companyDetails;
  const { employees, projects } = data;
  const employeesInArea = employees.filter(
    employee => employee.jobArea === name
  );

  const projectsEmployeesParticipateIn = {};

  employeesInArea.forEach(employee => {
    projects.forEach(project => {
      if (project.employeesId.includes(employee.id)) {
        projectsEmployeesParticipateIn[project.name] = employee.firstName;
      }
    });
  });

  const countOfprojectsEmployeesParticipateIn = Object.keys(
    projectsEmployeesParticipateIn
  ).length;

  return {
    companyDetails,
    name,
    companyId,
    companyName,
    employeesCountInArea: employeesInArea.length,
    countOfprojectsEmployeesParticipateIn
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanyDetails: id => {
    dispatch(fetchCompanyDetails(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JobAreaDetails);
