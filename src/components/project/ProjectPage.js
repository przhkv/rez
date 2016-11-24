import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import * as pages from '../../constants/pages';
import Footer from '../common/Footer';
import MainSection from '../common/MainSection';
import Wrapping from '../common/Wrapping';
import HeaderControls from './header/HeaderControls';

class ProjectPage extends Component {
  constructor() {
    super();
  }
  render() {
    const {context, props} = this;
    const closeProject = e => {
      e.preventDefault();

      const payload = {projectId: props.project.get('id')};
      const meta = {redirect: () => {
        context.router.push('/');
        props.navigate(pages.PROJECTS);
      }};
      props.close(payload, meta);
    };

    return (
      <Wrapping>
        <HeaderControls
          i18n={props.i18n}
          loading={props.loading}
          navigate={props.navigate}
          project={props.project}
          theme={props.theme}
        />
        <MainSection theme={props.theme}>
          <div>
            <h5>{'project ' + props.project.get('title')}</h5>
            <h5>{'bpm ' + props.project.get('bpm')}</h5>
            <input
              type="button"
              value={props.i18n.controls.close}
              onClick={closeProject}
            />
          </div>
        </MainSection>
        <Footer i18n={props.i18n} theme={props.theme} />
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
