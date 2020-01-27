import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from '../utils';

const EditProjectDialog = ({
  name,
  onClose,
  onSave,
  show,
  department,
  header
}) => {
  const [state, setState] = useState({ name, department });

  const handleChange = ev => {
    const { target } = ev;
    const { value, dataset } = target;
    const key = dataset.key;
    setState({ ...state, [key]: value });
  };

  const handleSave = () => {
    onSave(state);
  };

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
          <div className="modal-body">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="projectName"
                  className="col-sm-3 col-form-label"
                >
                  Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    value={state.name}
                    onChange={handleChange}
                    data-key="name"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="projectDepartment"
                  className="col-sm-3 col-form-label"
                >
                  Department
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="projectDepartment"
                    value={state.department}
                    onChange={handleChange}
                    data-key="department"
                  />
                </div>
              </div>
            </form>
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
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

EditProjectDialog.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  show: PropTypes.bool,
  department: PropTypes.string,
  header: PropTypes.string
};

EditProjectDialog.defaultProps = {
  name: '',
  onClose: noop,
  onSave: noop,
  show: false,
  department: '',
  header: ''
};

export default EditProjectDialog;
