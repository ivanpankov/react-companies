import { connect } from 'react-redux';
import TreeView from './Component';
import { fetchCompaniesTree } from '../actions/companiesTree';

const mapStateToProps = ({ companiesTree }) => {
  return { companiesTree };
};

const mapDispatchToProps = dispatch => ({
  fetchCompaniesTree: () => {
    dispatch(fetchCompaniesTree());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TreeView);
