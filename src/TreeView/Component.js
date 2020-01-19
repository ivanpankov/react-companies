import React, { useEffect } from 'react';
import {
  companiesTreeDefaultProps,
  companiesTreePropTypes
} from '../reducers/companiesTree';
import Company from './Company';
import './styles.scss';

const TreeView = ({ companiesTree, fetchCompaniesTree }) => {
  useEffect(() => {
    fetchCompaniesTree();
  }, []);

  const { data } = companiesTree;

  console.log(companiesTree);

  return (
    <div className="treeview border">
      <h6 className="pt-3 pl-3">Companies </h6>
      <hr />
      <ul className="mb-1 pl-3 pb-2">
        {data.map(company => (
          <Company
            id={company.id}
            key={company.id}
            name={company.name}
            jobAreas={company.jobAreas}
          />
        ))}
      </ul>
    </div>
  );
};

TreeView.propTypes = companiesTreePropTypes;
TreeView.defaultProps = companiesTreeDefaultProps;

export default TreeView;
