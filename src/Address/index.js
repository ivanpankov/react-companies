import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

const Address = ({ city, country, street, state }) => {
  return (
    <div className="address">
      <h2>Company address</h2>
      <dl className="dl-horizontal">
        <dt>City </dt>
        <dd>{city}</dd>
        <dt>Country </dt>
        <dd>{country}</dd>
        <dt>Street</dt>
        <dd>{street}</dd>
        <dt>State</dt>
        <dd>{state}</dd>
      </dl>
    </div>
  );
};

Address.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  street: PropTypes.string,
  state: PropTypes.string
};

Address.defaultProps = {
  city: '',
  country: '',
  street: '',
  state: ''
};

export default Address;
