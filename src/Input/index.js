import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../utils';
import './styles.scss';

const Input = ({ isEdit, value, onChange }) => {
  return (
    <div className="input-edit">
      {isEdit ? (
        <input value={value} onChange={onChange} />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  isEdit: PropTypes.bool,
  valie: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  isEdit: false,
  valie: '',
  onChange: noop
};

export default Input;
