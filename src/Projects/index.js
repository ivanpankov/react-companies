import { connect } from 'react-redux';
import Projects from './Component';
import { addProject } from '../api/projects';
import { addProject as addProjectAction } from '../actions/companyDetails';
import { notify } from '../actions/notification';

const mapStateToProps = () => {
  return { addProject };
};

const mapDispatchToProps = dispatch => ({
  addProjectAction: data => {
    dispatch(addProjectAction(data));
  },
  notify: (type, text) => {
    dispatch(notify(type, text));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
