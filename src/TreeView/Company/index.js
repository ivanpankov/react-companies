import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import JobArea from '../JobArea';
import {
  companiesTreePropTypes,
  companiesTreeDefaultProps
} from '../../reducers/companiesTree';

const Company = ({ name, jobAreas, id }) => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const isAreaEmpty = jobAreas.length === 0;

  const handleArrowClick = () => {
    if (!isAreaEmpty) {
      setCompanyOpen(!companyOpen);
    }
  };

  return (
    <li>
      <div onClick={handleArrowClick}>
        <div
          className={`arrow-right${isAreaEmpty ? ' empty' : ''}${
            companyOpen ? ' open' : ''
          }`}
        ></div>

        <Link to={`/company-details/${id}`}>
          <div className="menu-item-name">{name}</div>
        </Link>
      </div>
      <ul className="mb-1 pl-3">
        {companyOpen
          ? jobAreas.map(area => (
              <JobArea
                name={area.name}
                employees={area.employees}
                key={area.name}
              />
            ))
          : null}
      </ul>
    </li>
  );
};

Company.propTypes = companiesTreePropTypes;
Company.defaultProps = companiesTreeDefaultProps;

export default memo(Company);
