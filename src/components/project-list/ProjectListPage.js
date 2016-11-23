import React, { Component, PropTypes } from 'react';
import { NEUTRAL_LIGHT_PILL } from '../../constants/components/buttonStyles';
import SubmitButton from '../common/buttons/SubmitButton';
import InformativeProjectLink from './InformativeProjectLink';

const ProjectListPage = ({i18n, loadedProjectsIds, loadProjectList, navigate, openProject, projectList}, context) => {
  const open = (id, idTitle) => {
    const payload = {
      projectId: id
    };
    const meta = {
      redirect: () => {
        context.router.push('/seq/' + idTitle);
        navigate(idTitle);
      }
    };
    openProject(payload, meta);
  };

  const create = () => {
    context.router.push('/seq/');
    navigate('default'); //fixme
  };

  return (
    <article className="pa3 pv5-ns ph6-ns">
      <h3 className="f5 ttu fw6 mt0 mb3 bb b--black-70 pb2 black-70">{i18n.home.demo}</h3>
      {projectList.map(p => (
        <InformativeProjectLink
          key={p.id}
          i18n={i18n}
          loadedProjectsIds={loadedProjectsIds}
          openProject={open}
          projectListItem={p} theme={{}}
        />
      ))}
      <section className="db">
        <SubmitButton
          text={i18n.controls.create}
          onClick={create}
        />
      </section>
      <section className="db">
        <SubmitButton
          buttonStyle={NEUTRAL_LIGHT_PILL}
          onClick={loadProjectList}
          text="&#8635;"
        />
      </section>
    </article>
  );
};

ProjectListPage.contextTypes = {
  router: PropTypes.object
};

ProjectListPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadProjectList: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  openProject: PropTypes.func.isRequired,
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProjectListPage;
