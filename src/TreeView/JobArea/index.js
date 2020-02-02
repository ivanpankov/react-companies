import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  menuAreaPropTypes,
  menuAreaDefaultProps
} from '../../reducers/companiesTree';

const JobArea = ({ name, employees }) => {
  const [areaOpen, setAreaOpen] = useState(false);
  const isEmployeesEmpty = employees.length === 0;

  const handleArrowClick = () => {
    if (!isEmployeesEmpty) {
      setAreaOpen(!areaOpen);
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
        <Link to={`/jobArea-details/${name}`}>{name}</Link>
      </div>
      <ul className="mb-1 pl-3">
        {areaOpen
          ? employees.map(employee => (
              <li
                key={employee.id}
                className=" pl-3 menu-item-name d-block"
              >{`${employee.firstName} ${employee.lastName}`}</li>
            ))
          : null}
      </ul>
    </li>
  );
};

JobArea.propTypes = menuAreaPropTypes;
JobArea.defaultProps = menuAreaDefaultProps;

export default memo(JobArea);
