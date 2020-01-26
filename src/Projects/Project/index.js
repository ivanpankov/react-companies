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
  deleteProjectAction: index => {
    dispatch(deleteProjectAction(index));
  },
  editProjectAction: (index, data) => {
    dispatch(editProjectAction(index, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
