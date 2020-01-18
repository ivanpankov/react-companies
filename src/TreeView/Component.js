import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  defaultCompaniesTree,
  companiesTreePropTypes
} from '../reducers/companiesTree';
import './styles.scss';

const TreeView = ({ companiesTree, fetchCompaniesTree }) => {
  useEffect(() => {
    fetchCompaniesTree();
  }, []);

  console.log(companiesTree);

  return (
    <div className="treeview border">
      <h6 className="pt-3 pl-3">Companies </h6>
      <hr />
      <ul className="mb-1 pl-3 pb-2">
        <li>
          <div className="arrow-right"></div> asdfasfd
        </li>
      </ul>
    </div>
  );
};

TreeView.propTypes = companiesTreePropTypes;
TreeView.defaultProps = defaultCompaniesTree;

export default TreeView;
