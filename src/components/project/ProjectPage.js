import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import * as pages from '../../constants/pages';
import Footer from '../common/Footer';
import HeaderControls from './header/HeaderControls';
import MainSection from '../common/MainSection';
import Project from './Project';
import Wrapping from '../common/Wrapping';

class ProjectPage extends Component {
  constructor() {
    super();
  }
  render() {
    const {close, purge, i18n, loading, navigate, project, save, settings, theme} = this.props;
    const {router} = this.context;

    const redirectToProjects = () => {
      router.push('/');
      navigate(pages.PROJECTS);
    };

    const closeProject = () => {
      const payload = {projectId: project.get('id')};
      const meta = {redirect: redirectToProjects};
      close(payload, meta);
    };

    return (
      <Wrapping>
        <HeaderControls
          i18n={i18n}
          loading={loading}
          navigate={navigate}
          project={project}
          theme={theme}
        />
        <MainSection theme={theme}>
          <Project
            closeProject={closeProject}
            i18n={i18n}
            project={project}
            theme={theme}
            save={save}
          />
        </MainSection>
        <Footer i18n={i18n} theme={theme} />
      </Wrapping>
    );
  }
}

ProjectPage.contextTypes = {
  router: PropTypes.object
};

ProjectPage.propTypes = {
  close: PropTypes.func.isRequired,
  purge: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  save: PropTypes.func.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired
};

export default ProjectPage;
