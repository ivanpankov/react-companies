import { connect } from 'react-redux';
import Project from './Component';
import {
  deleteProject as deleteProjectAction,
  editProject as editProjectAction
} from '../../actions/companyDetails';
import { deleteProject, editProject } from '../../api/projects';

const mapStateToProps = () => {
  return { deleteProject, editProject };
};

const mapDispatchToProps = dispatch => ({
  deleteProjectAction: projectIndex => {
    dispatch(deleteProjectAction(projectIndex));
  },
  editProjectAction: (projectIndex, data) => {
    dispatch(editProjectAction(projectIndex, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
