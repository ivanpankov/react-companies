import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import {
  companyDetailsPropTypes,
  companyDetailsDefaultProps
} from '../reducers/companyDetails';
import Address from '../Address';
import Spinner from '../Spinner';
import './styles.scss';

const CompanyDetails = ({ fetchCompanyDetails, companyDetails }) => {
  const { companyId } = useParams();
  const { data, loading } = companyDetails;
  const { company, address } = data;
  const { city, country, street, state } = address;

  console.log(address);
  useEffect(() => {
    fetchCompanyDetails(companyId);
  }, [companyId]);

  return (
    <div>
      <h6 className="pt-3 pl-3 details-head">{company.name}</h6>
      {loading ? (
        <Spinner size="5rem"/>
      ) : (
        <Address city={city} country={country} street={street} state={state} />
      )}
    </div>
  );
};

CompanyDetails.propTypes = companyDetailsPropTypes;
CompanyDetails.defaultProps = companyDetailsDefaultProps;

export default CompanyDetails;
