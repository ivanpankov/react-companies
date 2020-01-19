import React, { useState } from 'react';
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
      <div className="menu-item-name">{name}</div>
      <ul className="mb-1 pl-3">
        {areaOpen
          ? employees.map(employee => (
              <div
                key={employee.id}
                className=" pl-3 menu-item-name"
              >{`${employee.firstName} ${employee.lastName}`}</div>
            ))
          : null}
      </ul>
    </li>
  );
};

JobArea.propTypes = menuAreaPropTypes;
JobArea.defaultProps = menuAreaDefaultProps;

export default JobArea;
