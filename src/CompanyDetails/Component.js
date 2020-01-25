import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import {
  companyDetailsPropTypes,
  companyDetailsDefaultProps
} from '../reducers/companyDetails';
import Address from '../Address';
import Projects from '../Projects';
import Spinner from '../Spinner';
import './styles.scss';

const CompanyDetails = ({ fetchCompanyDetails, companyDetails }) => {
  const { companyId } = useParams();
  const { data, loading } = companyDetails;
  const { company, address, projects } = data;
  const { city, country, street, state } = address;

  console.log(companyDetails);

  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId]);

  return (
    <div className="company-details">
      <div className=" details-head">
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
            {projects.length ? <Projects projects={projects} /> : null}
          </>
        )}
      </div>
    </div>
  );
};

CompanyDetails.propTypes = companyDetailsPropTypes;
CompanyDetails.defaultProps = companyDetailsDefaultProps;

export default CompanyDetails;
