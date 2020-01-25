import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import { companyProjectPropTypes } from '../reducers/companyDetails';
import './styles.scss';

const Projects = ({ projects }) => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map(project => {
          return (
            <li key={project.id}>
              <Project
                name={project.name}
                department={project.department}
                employees={project.employees}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(companyProjectPropTypes))
};

Projects.defaultProps = {
  projects: []
};

export default Projects;
