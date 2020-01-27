import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { EmployeePropTypes } from '../../../models';

const Employees = ({ employees, projectId, projectIndex, companyId }) => {
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
    // deleteEmployee(id)
    //   .then(data => {
    //     handleCloseDialog();
    //     deleteEmployeeAction(index);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const handleSave = data => {
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
    <div>
      <div className="font-weight-bold pb-1 d-flex justify-content-between align-items-center">
        <div>Employees</div>
        <button className="btn btn-primary btn-sm">Add Employee</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date of birth</th>
            <th scope="col">Job Title</th>
            <th scope="col">Job Area</th>
            <th scope="col">Job Type</th>
            <th scope="col">
              <span className="sr-only">actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (
              <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{format(new Date(employee.dateOfBirth), 'dd/MM/yyyy')}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.jobArea}</td>
                <td>{employee.jobType}</td>
                <td>
                  <div>
                    <i className="fa fa-pencil" onClick={openEditDialog} />
                    <i
                      className="fa fa-trash-o ml-3"
                      onClick={openDeleteDialog}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes)),
  projectId: PropTypes.string,
  projectIndex: PropTypes.number,
  companyId: PropTypes.string
};

EmployeePropTypes.defaultProps = {
  employees: [],
  projectId: '',
  projectIndex: 0,
  companyId: ''
};

export default Employees;
