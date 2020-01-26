import { connect } from 'react-redux';
import EditProjectDialog from './Component';
import {
  setShowDialog,
  updateProjectData,
  updateProjectAction
} from '../actions/editProject';

const mapStateToProps = ({ editProject }) => {
  return { ...editProject };
};

const mapDispatchToProps = dispatch => ({
  updateProjectData: data => {
    dispatch(updateProjectData(data));
  },
  closeDialog: () => {
    dispatch(setShowDialog(false, {}));
  },
  saveProject: data => {
    dispatch(updateProjectAction(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectDialog);
