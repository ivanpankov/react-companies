import { connect } from 'react-redux';
import Projects from './Component';
import { addProject } from '../api/projects';
import { addProject as addProjectAction } from '../actions/companyDetails';

const mapStateToProps = () => {
  return { addProject };
};

const mapDispatchToProps = dispatch => ({
  addProjectAction: data => {
    dispatch(addProjectAction(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
