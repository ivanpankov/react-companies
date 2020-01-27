import { connect } from 'react-redux';
import Employee from './Component';
import { deleteEmployee } from '../../../../api/projects';

const mapStateToProps = () => {
  return { deleteEmployee };
};

const mapDispatchToProps = dispatch => ({
  //   deleteProjectAction: index => {
  //     dispatch(deleteProjectAction(index));
  //   },
  //   editProjectAction: (index, data) => {
  //     dispatch(editProjectAction(index, data));
  //   }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
