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
    const meta = {redirect: () => {
      context.router.push('/seq/' + title);
      props.navigate(title);
    }};
    props.openProject(payload, meta);
  };

  const create = e => {
    e.preventDefault();
  };

  return (
    <article className="pa3 pv5-ns ph6-ns">
      <h3 className="f5 ttu fw6 mt0 mb3 bb b--black-70 pb2 black-70">{props.i18n.home.demo}</h3>
      {props.projectList.map(p => (
      <article key={p.id}>
        <a
          className="link dt w-100 bb b--black-10 mt2 dim"
          href="#"
          id={p.id}
          title={p.idTitle}
          onClick={open}
        >
          <div className="dtc v-top pl2">
            <h1 className="f6 f5-ns fw6 lh-title black-70 mv0">{p.title}</h1>
            <dd className="f6 lh-title black-60 ml0">{props.i18n.project.created + ': ' + p.created}</dd>
            <dl className="mt0 f6">
              <dt className="clip">Status</dt>
              <dd className="dark-green ml0">
                {props.loadedProjectsIds.find(id => id === p.id) && props.i18n.controls.opened}
              </dd>
            </dl>
          </div>
        </a>
      </article>
      ))}
      <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green mt3" href="#0" onClick={create}>{props.i18n.controls.create}</a>
    </article>
  );
};

ProjectListPage.contextTypes = {
  router: PropTypes.object
};

ProjectListPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsIds: PropTypes.array.isRequired,
  loadProjectList: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  openProject: PropTypes.func.isRequired,
  projectList: PropTypes.array.isRequired
};

export default ProjectListPage;
