import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import {
  EmployeeDefaultProps,
  EmployeePropTypes,
  ProjectPropTypes
} from '../models';
import { noop } from '../utils';
import './styles.scss';

const EmployeeDetails = ({
  firstName,
  lastName,
  dateOfBirth,
  companyName,
  jobArea,
  jobTitle,
  jobType,
  companyId,
  projects,
  loading,
  fetchCompanyDetails
}) => {
  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId, fetchCompanyDetails]);

  return (
    <div className="employee-details">
      <div className="details-head">
        <h6 className="p-3">{`${companyName} | ${jobArea} | ${firstName} ${lastName}`}</h6>
      </div>
      <div className="employee-details-content p-3">
        {loading ? (
          <Spinner size="5rem" />
        ) : (
          <dl>
            <dt>Name: </dt>
            <dd>
              {firstName} {lastName}
            </dd>
            <dt>Date of birth: </dt>
            <dd>{dateOfBirth}</dd>
            <dt>Job Area: </dt>
            <dd>{jobArea}</dd>
            <dt>Company: </dt>
            <dd>{companyName}</dd>
            <dt>Job Title: </dt>
            <dd>{jobTitle}</dd>
            <dt>Job Type: </dt>
            <dd>{jobType}</dd>
            <dt>Projects: </dt>
            <dd>
              <ul>
                {projects.map(project => (
                  <li key={project.id}>{project.name}</li>
                ))}
              </ul>
            </dd>
          </dl>
        )}
      </div>
    </div>
  );
};

EmployeeDetails.propTypes = {
  ...EmployeePropTypes,
  companyName: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectPropTypes)),
  fetchCompanyDetails: PropTypes.func,
  companyId: PropTypes.string,
  loading: PropTypes.bool
};
EmployeeDetails.defaultProps = {
  ...EmployeeDefaultProps,
  companyName: '',
  projects: [],
  fetchCompanyDetails: noop,
  companyId: '',
  loading: false
};

export default EmployeeDetails;
