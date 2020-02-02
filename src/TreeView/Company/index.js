import React, { useState } from 'react';
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

  const handleLinkClick = () => {
    if (!isAreaEmpty && !companyOpen) {
      setCompanyOpen(true);
    }
  };

  return (
    <li>
      <div
        className={`arrow-right${isAreaEmpty ? ' empty' : ''}${
          companyOpen ? ' open' : ''
        }`}
        onClick={handleArrowClick}
      ></div>

      <Link to={`/company-details/${id}`} onClick={handleLinkClick}>
        <div className="menu-item-name">{name}</div>
      </Link>
      <ul className="mb-1 pl-3">
        {companyOpen
          ? jobAreas.map(area => (
              <JobArea
                name={area.name}
                employees={area.employees}
                key={area.name}
                companyId={id}
                companyName={name}
              />
            ))
          : null}
      </ul>
    </li>
  );
};

Company.propTypes = companiesTreePropTypes;
Company.defaultProps = companiesTreeDefaultProps;

export default Company;
