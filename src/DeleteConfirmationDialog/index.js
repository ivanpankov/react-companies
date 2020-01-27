import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../utils';

const DeleteConfirmationDialog = ({ show, onDelete, onClose, header, children }) => {
  return show ? (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{header}</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

DeleteConfirmationDialog.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  header: PropTypes.string,
  children: PropTypes.node
};

DeleteConfirmationDialog.defaultProps = {
  show: false,
  onClose: noop,
  onDelete: noop,
  header: '',
  children: null
};

export default DeleteConfirmationDialog;
