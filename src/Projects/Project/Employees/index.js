import { connect } from 'react-redux';
import Employees from './Component';
import { addEmployee } from '../../../api/employees';
import { addEmployee as addEmployeeAction } from '../../../actions/companyDetails';
import { fetchCompaniesTree } from '../../../actions/companiesTree';
import { notify } from '../../../actions/notification';

const mapStateToProps = () => {
  return { addEmployee };
};

const mapDispatchToProps = dispatch => ({
  addEmployeeAction: (projectIndex, data) => {
    dispatch(addEmployeeAction(projectIndex, data));
  },
  fetchCompaniesTree: () => {
    dispatch(fetchCompaniesTree());
  },
  notify: (type, text) => {
    dispatch(notify(type, text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
