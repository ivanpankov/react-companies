import React from 'react';
import PropTypes from 'prop-types';
import {
  deleteProjectDefaultProps,
  deleteProjectPropTypes
} from '../reducers/deleteProject';
import { noop } from '../utils';

const DeleteProjectDialog = ({
  show,
  projectId,
  showDialog,
  onDelete,
  companyId
}) => {
  const handleDeleteProject = () => {
    onDelete(projectId, companyId);
  };

  const handleClose = () => {
    showDialog(false, '');
  };

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
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete project with id:
              <strong> {projectId}</strong>?
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDeleteProject}
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
  ...deleteProjectPropTypes,
  showDialog: PropTypes.func,
  onDelete: PropTypes.func
};

DeleteProjectDialog.defaultProps = {
  ...deleteProjectDefaultProps,
  showDialog: noop,
  onDelete: noop
};

export default DeleteProjectDialog;
