import { connect } from 'react-redux';
import Project from './Component';
import {
  deleteProject as deleteProjectAction,
  editProject as editProjectAction
} from '../../actions/companyDetails';
import { deleteProject, editProject } from '../../api/projects';
import { notify } from '../../actions/notification';

const mapStateToProps = () => {
  return { deleteProject, editProject };
};

const mapDispatchToProps = dispatch => ({
  deleteProjectAction: projectIndex => {
    dispatch(deleteProjectAction(projectIndex));
  },
  editProjectAction: (projectIndex, data) => {
    dispatch(editProjectAction(projectIndex, data));
  },
  notify: (type, text) => {
    dispatch(notify(type, text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
