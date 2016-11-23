import React, { PropTypes } from 'react';

const InformativeProjectLink = ({i18n, loadedProjectsIds, openProject, projectListItem, theme}) => {
  const click = e => {
    e.preventDefault();
    const {id, title} = e.currentTarget;
    openProject(id, title);
  };

  return (
    <a
      className="link dt w-100 bb b--black-10 mt2 dim"
      href="#"
      id={projectListItem.id}
      title={projectListItem.idTitle}
      onClick={click}
    >
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black-70 mv0">{projectListItem.title}</h1>
        <dd className="f6 lh-title black-60 ml0">{i18n.project.created + ': ' + projectListItem.created}</dd>
        <dl className="mt0 f6">
          <dt className="clip">{i18n.home.status}</dt>
          <dd className="dark-green ml0 fw6">
            {loadedProjectsIds.find(id => id === projectListItem.id) && i18n.controls.opened}
          </dd>
        </dl>
      </div>
    </a>
  );
};

InformativeProjectLink.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  openProject: PropTypes.func.isRequired,
  projectListItem: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default InformativeProjectLink;
