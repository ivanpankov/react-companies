import { connect } from 'react-redux';
import EmployeeDetails from './Component';
import { fetchCompanyDetails } from '../actions/companyDetails';
import { EmployeeDefaultProps } from '../models';
import { getProjectsEmployeesParticipateIn } from '../utils';

const mapStateToProps = ({ companyDetails }, ownProps) => {
  const { match, location } = ownProps;
  const { search } = location;
  const { data, loading } = companyDetails;
  const company = data.company || {};
  const employees = data.employees || [];
  const projects = data.projects || [];
  const { id } = match.params;
  const urlVars = new URLSearchParams(search);
  const companyId = urlVars.get('companyId');
  const employee =
    employees.find(employee => employee.id === id) || EmployeeDefaultProps;
  const ProjectsEmployeeParticipateIn = getProjectsEmployeesParticipateIn(
    [employee],
    projects
  );

  return {
    companyName: company.name,
    ...employee,
    loading,
    companyId,
    projects: ProjectsEmployeeParticipateIn
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanyDetails: id => {
    dispatch(fetchCompanyDetails(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
