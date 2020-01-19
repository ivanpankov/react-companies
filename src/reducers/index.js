import { combineReducers } from 'redux';
import companiesTree from './companiesTree';
import notifications from './notifications';
import companyDetails from './companyDetails';

export default combineReducers({
  companiesTree,
  notifications,
  companyDetails
});
