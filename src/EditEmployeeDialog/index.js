import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, formatISO, parse } from 'date-fns';
import { noop, DATE_FORMAT } from '../utils';

const EditEmployeeDialog = ({
  firstName,
  onClose,
  onSave,
  show,
  lastName,
  header,
  dateOfBirth,
  jobTitle,
  jobArea,
  jobType
}) => {
  const [state, setState] = useState({
    firstName,
    lastName,
    dateOfBirth: format(new Date(dateOfBirth), 'dd/MM/yyyy'),
    jobTitle,
    jobArea,
    jobType
  });

  const handleChange = ev => {
    const { target } = ev;
    const { value, dataset } = target;
    const key = dataset.key;
    setState({ ...state, [key]: value });
  };

  const handleSave = () => {
    onSave({
      ...state,
      dateOfBirth: formatISO(parse(state.dateOfBirth, DATE_FORMAT, new Date()))
    });
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
                <label htmlFor="firstName" className="col-sm-3 col-form-label">
                  First Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={state.firstName}
                    onChange={handleChange}
                    data-key="firstName"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="lastName" className="col-sm-3 col-form-label">
                  Last Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                    data-key="lastName"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="dateOfBirth"
                  className="col-sm-3 col-form-label"
                >
                  Date of Birth
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfBirth"
                    value={state.dateOfBirth}
                    onChange={handleChange}
                    data-key="dateOfBirth"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="jobArea" className="col-sm-3 col-form-label">
                  Job Area
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="jobArea"
                    value={state.jobArea}
                    onChange={handleChange}
                    data-key="jobArea"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="jobTitle" className="col-sm-3 col-form-label">
                  Job Title
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    value={state.jobTitle}
                    onChange={handleChange}
                    data-key="jobTitle"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="jobType" className="col-sm-3 col-form-label">
                  Job Type
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="jobType"
                    value={state.jobType}
                    onChange={handleChange}
                    data-key="jobType"
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

EditEmployeeDialog.propTypes = {
  firstName: PropTypes.string,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  show: PropTypes.bool,
  lasstName: PropTypes.string,
  header: PropTypes.string,
  jobTitle: PropTypes.string,
  jobAria: PropTypes.string,
  jobType: PropTypes.string,
  dateOfBirth: PropTypes.string
};

EditEmployeeDialog.defaultProps = {
  firstName: '',
  onClose: noop,
  onSave: noop,
  show: false,
  lasstName: '',
  header: '',
  jobTitle: '',
  jobAria: '',
  jobType: '',
  dateOfBirth: ''
};

export default EditEmployeeDialog;
