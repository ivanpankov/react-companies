import { connect } from 'react-redux';
import Employees from './Component';
import { addEmployee } from '../../../api/employees';
import { addEmployee as addEmployeeAction } from '../../../actions/companyDetails';
import { fetchCompaniesTree } from '../../../actions/companiesTree';

const mapStateToProps = () => {
  return { addEmployee };
};

const mapDispatchToProps = dispatch => ({
  addEmployeeAction: (projectIndex, data) => {
    dispatch(addEmployeeAction(projectIndex, data));
  },
  fetchCompaniesTree: () => {
    dispatch(fetchCompaniesTree());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
