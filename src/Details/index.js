import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import CompanyDetails from '../CompanyDetails';
import JobAreaDetails from '../JobAreaDetails';
import EmployeeDetails from '../EmployeeDetails';
import './styles.scss';

const Details = () => {
  return (
    <div className="details">
      <Switch>
        <Route path="/company-details/:companyId" component={CompanyDetails} />
        <Route path="/jobArea-details/:name" component={JobAreaDetails} />
        <Route path="/employee-details/:id" component={EmployeeDetails} />
      </Switch>
    </div>
  );
};

Details.propTypes = {};

export default Details;
