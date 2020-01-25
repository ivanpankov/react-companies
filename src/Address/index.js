import React from 'react';
import {
  companyAddressDefaultProps,
  companyAddressPropTypes
} from '../reducers/companyDetails';
import './styles.scss';

const Address = ({ city, country, street, state }) => {
  return (
    <div className="address">
      <h2>Address</h2>
      <dl className="dl-horizontal">
        <dt>City: </dt>
        <dd>{city}</dd>
        <dt>Country: </dt>
        <dd>{country}</dd>
        <dt>Street:</dt>
        <dd>{street}</dd>
        <dt>State:</dt>
        <dd>{state}</dd>
      </dl>
    </div>
  );
};

Address.propTypes = companyAddressPropTypes;

Address.defaultProps = companyAddressDefaultProps;

export default Address;
