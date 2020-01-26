import { connect } from 'react-redux';
import DeleteProjectDialog from './Component';
import { deleteProjectAction, setShowDialog } from '../actions/deleteProject';

const mapStateToProps = ({ deleteProject }) => {
  return { ...deleteProject };
};

const mapDispatchToProps = dispatch => ({
  onDelete: (projectId, companyId) => {
    dispatch(deleteProjectAction(projectId, companyId));
  },
  showDialog: (show, id) => {
    dispatch(setShowDialog(show, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteProjectDialog);
