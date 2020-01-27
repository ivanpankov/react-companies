import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DeleteConfirmationDialog from '../../../../DeleteConfirmationDialog';
import { EmployeePropTypes, EmployeeDefaultProps } from '../../../../models';
import { noop } from '../../../../utils';

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
  deleteEmployee
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
    console.log('delete');
    deleteEmployee(projectId, id)
      .then(data => {
        console.log(data);
        handleCloseDialog();
        // deleteEmployeeAction(index);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSave = data => {
    console.log('save');
    // editEmployee(id, data)
    //   .then(data => {
    //     editEmployeeAction(index, data);
    //     handleCloseDialog();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  return (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{format(new Date(dateOfBirth), 'dd/MM/yyyy')}</td>
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
        </div>
      </td>
    </tr>
  );
};

Employee.propTypes = {
  ...EmployeePropTypes,
  projectIndex: PropTypes.number,
  projectId: PropTypes.string,
  deleteEmployee: PropTypes.func
};
Employee.defaultProps = {
  ...EmployeeDefaultProps,
  projectIndex: 0,
  projectId: '',
  deleteEmployee: noop
};

export default Employee;
