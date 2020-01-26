import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { companyProjectPropTypes } from '../reducers/companyDetails';
import DeleteProjectDialog from '../DeleteProjectDialog';
import { deleteProject } from '../api/projects';
import './styles.scss';

const Projects = ({ projects }) => {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          {projects.map(project => {
            return (
              <li key={project.id}>
                <Project
                  id={project.id}
                  name={project.name}
                  department={project.department}
                  employees={project.employees}
                  companyId={project.companyId}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <DeleteProjectDialog />
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(companyProjectPropTypes))
};

Projects.defaultProps = {
  projects: []
};

export default Projects;
