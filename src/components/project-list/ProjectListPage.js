import React, { Component, PropTypes } from 'react';

const ProjectListPage = (props, context) => {

  const reload = e => {
    e.preventDefault();
    props.loadProjectList();
  };

  const open = e => {
    e.preventDefault();

    const innerId = e.currentTarget.id;
    console.log(innerId);
    const payload = {projectId: innerId};
    //todo titleID
    const meta = {redirect: () => context.router.push('/seq/' + innerId)};
    props.openProject(payload, meta);
  };

  return (
    <div>
      <a href="#" onClick={reload}>Reload</a>
      {props.projectList.map(p => (
        <h5 key={p.id}><a href="#" id={p.id} onClick={open}>{p.title}</a></h5>
      ))}
    </div>
  );
};

ProjectListPage.contextTypes = {
  router: PropTypes.object
};

ProjectListPage.propTypes = {
  loadProjectList: PropTypes.func.isRequired,
  openProject: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

export default ProjectListPage;
