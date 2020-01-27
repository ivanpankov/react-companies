import { connect } from 'react-redux';
import Employees from './Component';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  //   deleteProjectAction: index => {
  //     dispatch(deleteProjectAction(index));
  //   },
  //   editProjectAction: (index, data) => {
  //     dispatch(editProjectAction(index, data));
  //   }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
