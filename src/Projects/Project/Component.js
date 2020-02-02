import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import DeleteConfirmationDialog from '../../DeleteConfirmationDialog';
import EditProjectDialog from '../../EditProjectDialog';
import Empliyees from './Employees';
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
  index,
  deleteProject,
  deleteProjectAction,
  editProject,
  editProjectAction,
  companyId,
  notify
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
        notify('error', 'Project has been removed.');
      })
      .catch(err => {
        notify('error', err.message);
      });
  };

  const handleSave = data => {
    editProject(id, data)
      .then(data => {
        editProjectAction(index, data);
        handleCloseDialog();
        notify('info', 'Project has been updated.');
      })
      .catch(err => {
        notify('error', err.message);
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
            <Empliyees
              employees={projectEmployees}
              projectId={id}
              projectIndex={index}
              companyId={companyId}
            />
          </div>
        </div>
      </div>
      <DeleteConfirmationDialog
        header="Delete Project"
        show={showDialog.delete}
        onClose={handleCloseDialog}
        onDelete={handleDelete}
      >
        <p>
          Are you sure you want to delete <strong>{name} </strong>
          project?
        </p>
      </DeleteConfirmationDialog>
      <EditProjectDialog
        header="Edit Project"
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
  editProjectAction: PropTypes.func,
  companyId: PropTypes.string,
  notify: PropTypes.func
};

Project.defaultProps = {
  ...ProjectDefaultProps,
  employees: [],
  index: 0,
  deleteProject: noop,
  editProject: noop,
  editProjectAction: noop,
  companyId: '',
  notify: noop
};

export default Project;
