import React, { PropTypes } from 'react';

const InformativeProjectLink = ({i18n, loadedProjectsIds, openProject, projectListItem, theme}) => {
  const click = () => openProject(projectListItem.id, projectListItem.idTitle);
  return (
    <div
      className={`link dt w-100 bb mt2 dim pointer ${theme.sectionBorder}`}
      onClick={click}
    >
      <div className="dtc v-top pl2">
        <h1 className={`f6 f5-ns fw6 lh-title mv0 ${theme.commonText}`}>
          {projectListItem.title}
        </h1>
        <dd className={`f6 lh-title ml0 ${theme.informativeProjectLinkInfo}`}>
          {`${i18n.project.created}: ${projectListItem.created}`}
        </dd>
        <dl className="mt0 f6">
          <dt className="clip">{i18n.home.status}</dt>
          <dd className={`ml0 fw6 ${theme.informativeProjectLinkStatus}`}>
            {loadedProjectsIds.find(id => id === projectListItem.id) && i18n.controls.opened}
          </dd>
        </dl>
      </div>
    </div>
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
