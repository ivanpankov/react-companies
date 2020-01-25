import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Spinner = ({ size }) => {
  return (
    <div className="spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string
};

export default Spinner;
