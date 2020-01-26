import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../utils';

const DeleteProjectDialog = ({ show, projectName, onDelete, onClose }) => {
  return show ? (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Project</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete <strong>{projectName}</strong>{' '}
              project?
            </p>
          </div>
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

DeleteProjectDialog.propTypes = {
  show: PropTypes.bool,
  projectName: PropTypes.string,
  onClose: PropTypes.func,
  onDelete: PropTypes.func
};

DeleteProjectDialog.defaultProps = {
  show: false,
  projectName: '',
  onClose: noop,
  onDelete: noop
};

export default DeleteProjectDialog;
