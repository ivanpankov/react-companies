import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { ProjectPropTypes, EmployeePropTypes } from '../models';
import './styles.scss';

const Projects = ({ projects, employees }) => {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={project.id}>
                <Project {...project} employees={employees} index={index} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(ProjectPropTypes)),
  employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes))
};

Projects.defaultProps = {
  projects: [],
  employees: []
};

export default Projects;
