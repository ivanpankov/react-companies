import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails';
import './styles.scss';

const Details = () => {
  return (
    <div className="details">
      <Switch>
        <Route path="/company-details/:companyId" component={CompanyDetails} />
      </Switch>
    </div>
  );
};

Details.propTypes = {};

export default Details;
