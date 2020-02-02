import React, { ueseEffect } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { noop } from '../utils';

const JobAreaDetails = ({
  name,
  companyId,
  employeesCountInArea,
  countOfprojectsEmployeesParticipateIn,
  fetchCompanyDetails,
  companyName
}) => {
  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId, name]);

  return (
    <div className="jobArea-details">
      <div className="details-head">
  <h6 className="p-3">{companyName} | {name}</h6>
      </div>
      <div className="jobArea-details-content">
        <p className="p-3">
          <strong>{employeesCountInArea}</strong> employees work in
          <strong> {name}</strong> Job Area and participate in
          <strong> {countOfprojectsEmployeesParticipateIn}</strong> Projects.
        </p>
      </div>
    </div>
  );
};

JobAreaDetails.propTypes = {
  name: PropTypes.string,
  companyId: PropTypes.string,
  companyName: PropTypes.string,
  employeesCountInArea: PropTypes.number,
  countOfprojectsEmployeesParticipateIn: PropTypes.number,
  fetchCompanyDetails: PropTypes.func
};

JobAreaDetails.defaultProps = {
  name: '',
  companyId: '',
  companyName: '',
  employeesCountInArea: 0,
  countOfprojectsEmployeesParticipateIn: 0,
  fetchCompanyDetails: noop
};

export default JobAreaDetails;
