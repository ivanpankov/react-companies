import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CompanyDetailsPropTypes, CompanyDetailsDefaultProps } from '../models';
import Address from '../Address';
import Projects from '../Projects';
import Spinner from '../Spinner';
import { noop } from '../utils';
import './styles.scss';

const CompanyDetails = ({ fetchCompanyDetails, data, loading, companyId }) => {
  const company = data.company || {};
  const address = data.address || {};
  const projects = data.projects || [];
  const employees = data.employees || [];
  const { city, country, street, state } = address;

  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId, fetchCompanyDetails]);

  return (
    <div className="company-details">
      <div className="details-head">
        <h6 className="p-3">{company.name}</h6>
      </div>
      <div className="company-details-content">
        {loading ? (
          <Spinner size="5rem" />
        ) : (
          <>
            <Address
              city={city}
              country={country}
              street={street}
              state={state}
            />
            <Projects
              projects={projects}
              employees={employees}
              companyId={companyId}
            />
          </>
        )}
      </div>
    </div>
  );
};

CompanyDetails.propTypes = {
  ...CompanyDetailsPropTypes,
  fetchCompanyDetails: PropTypes.func,
  companyId: PropTypes.string
};
CompanyDetails.defaultProps = {
  ...CompanyDetailsDefaultProps,
  fetchCompanyDetails: noop,
  companyId: ''
};

export default CompanyDetails;
