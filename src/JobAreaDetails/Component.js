import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { noop } from '../utils';

const JobAreaDetails = ({
  name,
  companyId,
  employeesCountInArea,
  countOfprojectsEmployeesParticipateIn,
  fetchCompanyDetails,
  companyName,
  loading
}) => {
  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId, name, fetchCompanyDetails]);

  return (
    <div className="jobArea-details">
      <div className="details-head">
        <h6 className="p-3">
          {companyName} | {name}
        </h6>
      </div>
      {loading ? (
        <Spinner size="5rem" />
      ) : (
        <div className="jobArea-details-content">
          <p className="p-3">
            <strong>{employeesCountInArea}</strong> employees work in
            <strong> {name}</strong> Job Area and participate in
            <strong> {countOfprojectsEmployeesParticipateIn}</strong> Projects.
          </p>
        </div>
      )}
    </div>
  );
};

JobAreaDetails.propTypes = {
  name: PropTypes.string,
  companyId: PropTypes.string,
  companyName: PropTypes.string,
  employeesCountInArea: PropTypes.number,
  countOfprojectsEmployeesParticipateIn: PropTypes.number,
  fetchCompanyDetails: PropTypes.func,
  loading: PropTypes.bool
};

JobAreaDetails.defaultProps = {
  name: '',
  companyId: '',
  companyName: '',
  employeesCountInArea: 0,
  countOfprojectsEmployeesParticipateIn: 0,
  fetchCompanyDetails: noop,
  loading: false
};

export default JobAreaDetails;
