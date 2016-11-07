import React, { Component, PropTypes } from 'react';

const ProjectListPage = (props, context) => {

  const reload = e => {
    e.preventDefault();
    props.loadProjectList();
  };

  const open = e => {
    e.preventDefault();

    const {id, title} = e.currentTarget;
    const payload = {projectId: id};
    const meta = {redirect: () => context.router.push('/seq/' + title)};
    props.openProject(payload, meta);
  };

  return (
    <div>
      <a href="#" onClick={reload}>Reload</a>
      {props.projectList.map(p => (
        <h5 key={p.id}>
          <a href="#" id={p.id} title={p.idTitle} onClick={open}>{p.title}</a>
          {props.loadedProjectsIds.find(id => id === p.id) && <i>{' ' + props.i18n.controls.opened}</i>}
        </h5>
      ))}
    </div>
  );
};

ProjectListPage.contextTypes = {
  router: PropTypes.object
};

ProjectListPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsIds: PropTypes.array.isRequired,
  loadProjectList: PropTypes.func.isRequired,
  openProject: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

export default ProjectListPage;
