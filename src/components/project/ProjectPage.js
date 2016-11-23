import React, { Component, PropTypes } from 'react';
import * as pages from '../../constants/pages';

class ProjectPage extends Component {
  constructor() {
    super();
  }
  render() {
    const {context, props} = this;
    const closeProject = e => {
      e.preventDefault();

      const payload = {projectId: props.project.id};
      const meta = {redirect: () => {
        context.router.push('/');
        props.navigate(pages.PROJECTS);
      }};
      props.closeProject(payload, meta);
    };

    return (
      <div>

        <h5>{'project ' + props.project.title}</h5>
        <input
          type="button"
          value={props.i18n.controls.close}
          onClick={closeProject}
        />
      </div>
    );
  }
}

ProjectPage.contextTypes = {
  router: PropTypes.object
};

ProjectPage.propTypes = {
  closeProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  saveProject: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default ProjectPage;
