import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EmployeePropTypes } from '../../../models';
import Employee from './Employee';
import EditEmployeeDialog from '../../../EditEmployeeDialog';
import { noop } from '../../../utils';

const Employees = ({
  employees,
  projectId,
  projectIndex,
  addEmployee,
  addEmployeeAction,
  companyId,
  fetchCompaniesTree
}) => {
  const [showDialog, setShowDialog] = useState(false);

  const openAddDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSave = data => {
    data.companyId = companyId;

    addEmployee(projectId, data)
      .then(response => {
        addEmployeeAction(projectIndex, response);
        fetchCompaniesTree();
        handleCloseDialog();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <div className="font-weight-bold pb-1 d-flex justify-content-between align-items-center">
          <div>Employees</div>
          <button className="btn btn-primary btn-sm" onClick={openAddDialog}>
            Add Employee
          </button>
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
            {employees.map((employee, index) => {
              return employee ? (
                <Employee
                  key={employee.id}
                  {...employee}
                  projectIndex={projectIndex}
                  projectId={projectId}
                  index={index}
                />
              ) : null;
            })}
          </tbody>
        </table>
      </div>
      <EditEmployeeDialog
        header="Edit Employee"
        show={showDialog}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes)),
  projectId: PropTypes.string,
  projectIndex: PropTypes.number,
  companyId: PropTypes.string,
  addEmployee: PropTypes.func,
  fetchCompaniesTree: PropTypes.func
};

Employees.defaultProps = {
  employees: [],
  projectId: '',
  projectIndex: 0,
  companyId: '',
  addEmployee: noop,
  fetchCompaniesTree: noop
};

export default Employees;
