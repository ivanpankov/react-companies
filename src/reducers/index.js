import { combineReducers } from 'redux';
import companiesTree from './companiesTree';
import notifications from './notifications';

export default combineReducers({
  companiesTree,
  notifications
});
