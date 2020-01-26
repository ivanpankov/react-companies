import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  companyProjectDefaultProps,
  companyProjectPropTypes
} from '../../reducers/companyDetails';
import Input from '../../Input';
import { noop } from '../../utils';

const Project = ({
  id,
  name,
  department,
  employees,
  showShowDialog,
  companyId
}) => {
  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    showShowDialog(true, { id, companyId, name });
  };

  return (
    <div className="project">
      <div className="card">
        <div className="card-header">
          <Input isEdit={isEdit} value={name} onChange={() => {}} />
          <div>
            <i className="fa fa-pencil" onClick={handleEdit} />
            <i className="fa fa-trash-o ml-3" onClick={handleDelete} />
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
              <table className="table">
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

Project.propTypes = {
  ...companyProjectPropTypes,
  showShowDialog: PropTypes.func
};

Project.defaultProps = { ...companyProjectDefaultProps, showShowDialog: noop };

export default Project;
