import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { menuAreaPropTypes, menuAreaDefaultProps } from '../../models';
import Employee from '../Employee';

const JobArea = ({ name, employees, companyId, companyName }) => {
  const [areaOpen, setAreaOpen] = useState(false);
  const isEmployeesEmpty = employees.length === 0;

  const handleArrowClick = () => {
    if (!isEmployeesEmpty) {
      setAreaOpen(!areaOpen);
    }
  };

  const handleLinkClick = () => {
    if (!isEmployeesEmpty && !areaOpen) {
      setAreaOpen(true);
    }
  };

  return (
    <li>
      <div
        className={`arrow-right${isEmployeesEmpty ? ' empty' : ''}${
          areaOpen ? ' open' : ''
        }`}
        onClick={handleArrowClick}
      ></div>
      <div className="menu-item-name">
        <Link
          to={{
            pathname: `/jobArea-details/${name}`,
            search: `?companyId=${companyId}&companyName=${companyName}`
          }}
          onClick={handleLinkClick}
        >
          {name}
        </Link>
      </div>
      <ul className="mb-1 pl-3">
        {areaOpen
          ? employees.map(employee => (
              <li key={employee.id} className=" pl-3 menu-item-name d-block">
                <Employee
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  id={employee.id}
                  companyId={companyId}
                />
              </li>
            ))
          : null}
      </ul>
    </li>
  );
};

JobArea.propTypes = {
  ...menuAreaPropTypes,
  companyId: PropTypes.string,
  companyName: PropTypes.string
};
JobArea.defaultProps = {
  ...menuAreaDefaultProps,
  companyId: '',
  companyName: ''
};

export default JobArea;
