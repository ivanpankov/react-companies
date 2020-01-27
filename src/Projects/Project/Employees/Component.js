import React from 'react';
import PropTypes from 'prop-types';
import { EmployeePropTypes } from '../../../models';
import Employee from './Employee';

const Employees = ({ employees, projectId, projectIndex, companyId }) => {
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
          {employees.map((employee, index) => {
            return (
              <Employee
                key={employee.id}
                {...employee}
                projectIndex={projectIndex}
                projectId={projectId}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Employees.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({ ...EmployeePropTypes })),
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
