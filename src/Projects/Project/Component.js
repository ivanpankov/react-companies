import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DeleteProjectDialog from '../../DeleteProjectDialog';
import EditProjectDialog from '../../EditProjectDialog';
import {
  ProjectDefaultProps,
  ProjectPropTypes,
  EmployeePropTypes
} from '../../models';
import { arrayToObj, noop } from '../../utils';

const Project = ({
  id,
  name,
  department,
  employees,
  employeesId,
  companyId,
  index,
  deleteProject,
  deleteProjectAction,
  editProject,
  editProjectAction
}) => {
  const [showDialog, setShowDialog] = useState({
    delete: false,
    edit: false,
    add: false
  });

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

  const openDeleteDialog = () => {
    setShowDialog({ ...showDialog, delete: true });
  };

  const handleDelete = () => {
    deleteProject(id)
      .then(data => {
        handleCloseDialog();
        deleteProjectAction(index);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSave = data => {
    // console.log('save', date);
    editProject(id, data)
      .then(data => {
        editProjectAction(index, data);
        handleCloseDialog();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const projectEmployees = useMemo(() => {
    const employeesObj = arrayToObj(employees);
    return employeesId.map(id => employeesObj[id]);
  }, [employees, employeesId]);

  return (
    <>
      <div className="project">
        <div className="card">
          <div className="card-header">
            <span>{name}</span>
            <div>
              <i className="fa fa-pencil" onClick={openEditDialog} />
              <i className="fa fa-trash-o ml-3" onClick={openDeleteDialog} />
            </div>
          </div>
          <div className="card-body">
            <div>
              <span className="font-weight-bold">Department:</span>
              <span> {department}</span>
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
                    {projectEmployees.map(employee => {
                      return (
                        <tr key={employee.id}>
                          <td>{`${employee.firstName} ${employee.lastName}`}</td>
                          <td>
                            {format(
                              new Date(employee.dateOfBirth),
                              'dd/MM/yyyy'
                            )}
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
      <DeleteProjectDialog
        show={showDialog.delete}
        projectName={name}
        onClose={handleCloseDialog}
        onDelete={handleDelete}
      />
      <EditProjectDialog
        show={showDialog.edit}
        name={name}
        department={department}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </>
  );
};

Project.propTypes = {
  ...ProjectPropTypes,
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes)),
  index: PropTypes.number,
  deleteProject: PropTypes.func,
  editProject: PropTypes.func,
  editProjectAction: PropTypes.func
};

Project.defaultProps = {
  ...ProjectDefaultProps,
  employees: [],
  index: 0,
  deleteProject: noop,
  editProject: noop,
  editProjectAction: noop
};

export default Project;
