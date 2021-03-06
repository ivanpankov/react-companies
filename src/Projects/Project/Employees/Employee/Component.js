import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DeleteConfirmationDialog from '../../../../DeleteConfirmationDialog';
import EditEmployeeDialog from '../../../../EditEmployeeDialog';
import { EmployeePropTypes, EmployeeDefaultProps } from '../../../../models';
import { noop, DATE_FORMAT } from '../../../../utils';

const Employee = ({
  id,
  firstName,
  lastName,
  jobTitle,
  jobArea,
  jobType,
  dateOfBirth,
  projectIndex,
  projectId,
  deleteEmployee,
  deleteEmployeeAction,
  editEmployeeAction,
  editEmployee,
  index,
  fetchCompaniesTree,
  notify
}) => {
  const [showDialog, setShowDialog] = useState({
    delete: false,
    edit: false,
    add: false
  });

  const openDeleteDialog = () => {
    setShowDialog({ ...showDialog, delete: true });
  };

  const openEditDialog = () => {
    setShowDialog({ ...showDialog, edit: true });
  };

  const handleCloseDialog = () => {
    setShowDialog({
      delete: false,
      edit: false,
      add: false
    });
  };

  const handleDelete = () => {
    deleteEmployee(projectId, id)
      .then(data => {
        handleCloseDialog();
        deleteEmployeeAction(projectIndex, index);
        notify('info', 'Employee has been removedf from project.');
      })
      .catch(err => {
        notify('error', err.message);
      });
  };

  const handleSave = data => {
    editEmployee(id, data)
      .then(data => {
        editEmployeeAction(id, data);
        handleCloseDialog();
        fetchCompaniesTree();
        notify('info', 'Employee has been updated.');
      })
      .catch(err => {
        notify('error', err.message);
      });
  };

  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{format(new Date(dateOfBirth), DATE_FORMAT)}</td>
      <td>{jobTitle}</td>
      <td>{jobArea}</td>
      <td>{jobType}</td>
      <td>
        <div>
          <i className="fa fa-pencil" onClick={openEditDialog} />
          <i className="fa fa-trash-o ml-3" onClick={openDeleteDialog} />
          <DeleteConfirmationDialog
            header="Delete Employee"
            show={showDialog.delete}
            onClose={handleCloseDialog}
            onDelete={handleDelete}
          >
            <p>
              Are you sure you want to remove{' '}
              <strong>{`${firstName} ${lastName}`} </strong>
              from project?
            </p>
          </DeleteConfirmationDialog>
          <EditEmployeeDialog
            header="Edit Employee"
            show={showDialog.edit}
            firstName={firstName}
            dateOfBirth={dateOfBirth}
            lastName={lastName}
            jobTitle={jobTitle}
            jobArea={jobArea}
            jobType={jobType}
            onClose={handleCloseDialog}
            onSave={handleSave}
          />
        </div>
      </td>
    </tr>
  );
};

Employee.propTypes = {
  ...EmployeePropTypes,
  projectIndex: PropTypes.number,
  projectId: PropTypes.string,
  deleteEmployee: PropTypes.func,
  deleteEmployeeAction: PropTypes.func,
  editEmployeeAction: PropTypes.func,
  index: PropTypes.number,
  fetchCompaniesTree: PropTypes.func,
  notify: PropTypes.func

};
Employee.defaultProps = {
  ...EmployeeDefaultProps,
  projectIndex: 0,
  projectId: '',
  deleteEmployee: noop,
  deleteEmployeeAction: noop,
  editEmployeeAction: noop,
  index: 0,
  fetchCompaniesTree: noop,
  notify: noop

};

export default Employee;
