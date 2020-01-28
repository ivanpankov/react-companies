import { connect } from 'react-redux';
import Employee from './Component';
import { deleteEmployee } from '../../../../api/projects';
import { editEmployee } from '../../../../api/employees';
import { deleteEmployee as deleteEmployeeAction } from '../../../../actions/companyDetails';

const mapStateToProps = () => {
  return { deleteEmployee, editEmployee };
};

const mapDispatchToProps = dispatch => ({
  deleteEmployeeAction: (projectIndex, employeeIndex) => {
    dispatch(deleteEmployeeAction(projectIndex, employeeIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
