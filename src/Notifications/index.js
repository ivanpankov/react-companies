import { connect } from 'react-redux';
import Notifications from './Component';

const mapStateToProps = ({ notifications }) => {
  return { notifications };
};

const mapDispatchToProps = dispatch => ({
 
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
