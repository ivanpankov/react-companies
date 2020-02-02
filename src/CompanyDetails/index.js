import { connect } from 'react-redux';
import CompanyDetails from './Component';
import { fetchCompanyDetails } from '../actions/companyDetails';

const mapStateToProps = ({ companyDetails }) => {
  console.log(companyDetails)
  return { ...companyDetails };
};

const mapDispatchToProps = dispatch => ({
    fetchCompanyDetails: (id) => {
    dispatch(fetchCompanyDetails(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
