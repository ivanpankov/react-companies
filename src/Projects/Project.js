import React, { useState } from 'react';
import { format } from 'date-fns';
import {
  companyProjectDefaultProps,
  companyProjectPropTypes
} from '../reducers/companyDetails';
import Input from '../Input';

const Project = ({ name, department, employees }) => {
  const [isEdit, setEdit] = useState(false);

  console.log(employees);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
  };

  return (
    <div className="project">
      <div className="card">
        <div className="card-header">
          <Input isEdit={isEdit} value={name} onChange={() => {}} />
          <div>
            <i className="fa fa-pencil" onClick={handleEdit} />
            <i className="fa fa-trash-o ml-3" />
          </div>
        </div>
        <div className="card-body">
          <div>
            <span className="font-weight-bold">Department:</span>
            <Input isEdit={isEdit} value={department} onChange={() => {}} />
          </div>
          <br />
          {employees.length ? (
            <div>
              <span className="font-weight-bold">Employees</span>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date of birth</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Job Area</th>
                    <th scope="col">Job Type</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => {
                    return (
                      <tr key={employee.id}>
                        <td>{`${employee.firstName} ${employee.lastName}`}</td>
                        <td>
                          {format(new Date(employee.dateOfBirth), 'dd/MM/yyyy')}
                        </td>
                        <td>{employee.jobTitle}</td>
                        <td>{employee.jobArea}</td>
                        <td>{employee.jobType}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Project.propTypes = companyProjectPropTypes;

Project.defaultProps = companyProjectDefaultProps;

export default Project;
