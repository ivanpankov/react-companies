import { connect } from 'react-redux';
import Project from './Component';
import { setShowDialog } from '../../actions/deleteProject';

const mapDispatchToProps = dispatch => ({
  showShowDialog: (show, projectData) => {
    dispatch(setShowDialog(show, projectData));
  }
});

export default connect(null, mapDispatchToProps)(Project);
