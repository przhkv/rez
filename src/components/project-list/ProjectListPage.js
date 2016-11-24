import React, { Component, PropTypes } from 'react';
import SubmitButton from '../common/buttons/SubmitButton';
import InformativeProjectLink from './InformativeProjectLink';
import { NEUTRAL_LIGHT } from '../../constants/components/buttonStyles';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MainSection from '../common/MainSection';
import Wrapping from '../common/Wrapping';

const ProjectListPage = ({i18n, loadedProjectsIds, load, loading, navigate, open, page, projectList, theme}, context) => {
  const openProject = (id, idTitle) => {
    const payload = {
      projectId: id
    };
    const meta = {
      redirect: () => {
        context.router.push('/seq/' + idTitle);
        navigate(idTitle);
      }
    };
    open(payload, meta);
  };

  const create = () => {
    context.router.push('/seq/');
    navigate('default'); //fixme
  };

  return (
    <Wrapping>
      <Header theme={theme} i18n={i18n} loading={loading} navigate={navigate} page={page} />
      <MainSection theme={theme}>
        <article className="pa3 pv5-ns ph6-ns">
          <h3 className={'f5 ttu fw6 mt0 mb3 bb pb2 ' + theme.articleHeader}>{i18n.home.demo}</h3>
          {projectList.map(p => (
            <InformativeProjectLink
              key={p.id}
              i18n={i18n}
              loadedProjectsIds={loadedProjectsIds}
              openProject={openProject}
              projectListItem={p}
              theme={theme}
            />
          ))}
          <section className="db">
            <SubmitButton
              text={i18n.controls.create}
              onClick={create}
              theme={theme}
            />
          </section>
          <section className="db">
            <SubmitButton
              buttonStyle={NEUTRAL_LIGHT}
              onClick={load}
              text="&#8635;"
              theme={theme}
            />
          </section>
        </article>
      </MainSection>
      <Footer i18n={i18n} theme={theme} />
    </Wrapping>
  );
};

ProjectListPage.contextTypes = {
  router: PropTypes.object
};

ProjectListPage.propTypes = {
  i18n: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired,
  loadedProjectsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  projectList: PropTypes.arrayOf(PropTypes.object).isRequired,
  theme: PropTypes.object.isRequired
};

export default ProjectListPage;
