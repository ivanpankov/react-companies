import { connect } from 'react-redux';
import Employee from './Component';
import { deleteEmployee } from '../../../../api/projects';
import { editEmployee } from '../../../../api/employees';
import {
  deleteEmployee as deleteEmployeeAction,
  editEmployee as editEmployeeAction
} from '../../../../actions/companyDetails';
import { fetchCompaniesTree } from '../../../../actions/companiesTree';
import { notify } from '../../../../actions/notification';

const mapStateToProps = () => {
  return { deleteEmployee, editEmployee };
};

const mapDispatchToProps = dispatch => ({
  deleteEmployeeAction: (projectIndex, employeeIndex) => {
    dispatch(deleteEmployeeAction(projectIndex, employeeIndex));
  },
  editEmployeeAction: (id, data) => {
    dispatch(editEmployeeAction(id, data));
  },
  fetchCompaniesTree: () => {
    dispatch(fetchCompaniesTree());
  },
  notify: (type, text) => {
    dispatch(notify(type, text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
