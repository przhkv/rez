import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import FooterInfoBar from './footer/FooterInfoBar';
import HeaderControls from './header/HeaderControls';
import MainSection from '../common/MainSection';
import Project from './Project';
import Wrapping from '../common/Wrapping';
import { PROJECTS } from '../../constants/pages';

class ProjectPage extends Component {
  constructor() {
    super();
    this.state = {
      mouseOver: ''
    };
  }
  render() {
    const {mouseOver} = this.state;
    const {close, purge, i18n, loading, navigate, project, router, save, settings, theme} = this.props;

    const redirectToProjects = () => {
      router.push(`/`);
      navigate(PROJECTS);
    };

    const closeProject = () => {
      const payload = {projectId: project.get('id')};
      const meta = {redirect: redirectToProjects};
      close(payload, meta);
    };

    const setMouseOut = () => setMouseOver('');
    const setMouseOver = mouseOver => this.setState({mouseOver});


    return (
      <Wrapping>
        <HeaderControls
          i18n={i18n}
          loading={loading}
          navigate={navigate}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
        />
        <MainSection theme={theme}>
          <Project
            closeProject={closeProject}
            i18n={i18n}
            project={project}
            save={save}
            setMouseOut={setMouseOut}
            setMouseOver={setMouseOver}
            theme={theme}
          />
        </MainSection>
        <FooterInfoBar
          i18n={i18n}
          mouseOver={mouseOver}
          theme={theme}
        />
      </Wrapping>
    );
  }
}

ProjectPage.propTypes = {
  close: PropTypes.func.isRequired,
  purge: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Immutable.Map).isRequired,
  router: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired,
  save: PropTypes.func.isRequired,
  settings: PropTypes.instanceOf(Immutable.Map).isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(ProjectPage);
