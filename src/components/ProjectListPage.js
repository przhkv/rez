import React, { Component, PropTypes } from 'react';

const ProjectListPage = props => {

  const click = e => {
    e.preventDefault();
    props.loadProjectList();
  };

  return (
    <div>
      <a href="#" onClick={click}>Reload</a>
        {props.projectList.map(p => (
          <h5 key={p.id}>{p.title}</h5>
        ))}
    </div>
  );
};

ProjectListPage.propTypes = {
  loadProjectList: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

export default ProjectListPage;
