import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  companiesTreeDefaultProps,
  companiesTreePropTypes
} from '../reducers/companiesTree';
import Company from './Company';
import { noop } from '../utils';
import './styles.scss';

const TreeView = ({ companiesTree, fetchCompaniesTree }) => {
  useEffect(() => {
    fetchCompaniesTree();
  }, [fetchCompaniesTree]);

  const { data } = companiesTree;

  return (
    <div className="treeview border">
      <h6 className="pt-3 pl-3 treeview-head">Companies</h6>
      <div className="treeview-wrapper">
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
    </div>
  );
};

TreeView.propTypes = {
  companiesTree: PropTypes.shape(companiesTreePropTypes),
  fetchCompaniesTree: PropTypes.func
};
TreeView.defaultProps = {
  companiesTree: companiesTreeDefaultProps,
  fetchCompaniesTree: noop
};

export default TreeView;
