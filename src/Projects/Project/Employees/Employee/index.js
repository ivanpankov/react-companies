import { connect } from 'react-redux';
import Employee from './Component';
import { deleteEmployee } from '../../../../api/projects';
import { deleteEmployee as deleteEmployeeAction } from '../../../../actions/companyDetails';

const mapStateToProps = () => {
  return { deleteEmployee };
};

const mapDispatchToProps = dispatch => ({
  deleteEmployeeAction: (projectIndex, employeeIndex) => {
    dispatch(deleteEmployeeAction(projectIndex, employeeIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
