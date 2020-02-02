import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { menuEmplyeePropTypes, menuEmplyeeDefaultProps } from '../../models';

const Employee = ({ firstName, lastName, id, companyId }) => {
  return (
    <Link
      to={{
        pathname: `/employee-details/${id}`,
        search: `?companyId=${companyId}`
      }}
    >{`${firstName} ${lastName}`}</Link>
  );
};

Employee.propTypes = { ...menuEmplyeePropTypes, companyId: PropTypes.string };
Employee.defaultProps = { ...menuEmplyeeDefaultProps, companyId: '' };

export default Employee;
