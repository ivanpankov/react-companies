import { combineReducers } from 'redux';
import companiesTree from './companiesTree';
import notifications from './notifications';
import companyDetails from './companyDetails';
import deleteProject from './deleteProject';

export default combineReducers({
  companiesTree,
  notifications,
  companyDetails,
  deleteProject
});
