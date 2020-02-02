import { connect } from 'react-redux';
import JobAreaDetails from './Component';
import { fetchCompanyDetails } from '../actions/companyDetails';
import { getProjectsEmployeesParticipateIn } from '../utils';

const mapStateToProps = ({ companyDetails }, ownProps) => {
  const { match, location } = ownProps;
  const { name } = match.params;
  const { search } = location;
  const urlVars = new URLSearchParams(search);
  const companyId = urlVars.get('companyId');
  const companyName = urlVars.get('companyName');

  const { data, loading } = companyDetails;
  const { employees, projects } = data;
  const employeesInArea = employees.filter(
    employee => employee.jobArea === name
  );

  const projectsEmployeesParticipateIn = getProjectsEmployeesParticipateIn(
    employeesInArea,
    projects
  );

  return {
    name,
    companyId,
    companyName,
    employeesCountInArea: employeesInArea.length,
    countOfprojectsEmployeesParticipateIn:
      projectsEmployeesParticipateIn.length,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCompanyDetails: id => {
    dispatch(fetchCompanyDetails(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(JobAreaDetails);
