import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { ProjectPropTypes, EmployeePropTypes } from '../models';
import EditProjectDialog from '../EditProjectDialog';
import { noop } from '../utils';
import './styles.scss';

const Projects = ({
  projects,
  employees,
  companyId,
  addProject,
  addProjectAction,
  notify
}) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleSave = data => {
    addProject({ ...data, employeesId: [], companyId })
      .then(response => {
        addProjectAction(response);
        handleCloseDialog();
        notify('info', 'New project has been created.');
      })
      .catch(error => {
        notify('error', error.message);
      });
  };

  return (
    <>
      <div className="projects">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Projects</h2>
          <button
            type="button"
            aria-label="Add"
            onClick={handleShowDialog}
            className="btn btn-primary"
          >
            Add Project
          </button>
        </div>
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={project.id}>
                <Project
                  {...project}
                  employees={employees}
                  index={index}
                  companyId={companyId}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <EditProjectDialog
        header="Add Project"
        show={showDialog}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectPropTypes)),
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes)),
  companyId: PropTypes.string,
  addProject: PropTypes.func,
  addProjectAction: PropTypes.func,
  notify: PropTypes.func
};

Projects.defaultProps = {
  projects: [],
  employees: [],
  companyId: '',
  addProject: noop,
  addProjectAction: noop,
  notify: noop
};

export default Projects;
