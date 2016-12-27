import { Map } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';
import { initAudioContext } from '../../utils/audio/inits';
import FooterInfoBar from './footer/FooterInfoBar';
import HeaderControls from './header/HeaderControls';
import ChannelControls from './controls-channel/ChannelControls';
import MainControls from './controls-project/MainControls';
import Sequencer from './sequencer/Sequencer';
import Toolbar from './toolbar/Toolbar';
import Wrapping from '../common/Wrapping';
import { PROJECTS } from '../../constants/pages';

class ProjectPage extends Component {
  constructor(props) {
    super();
    this.state = {
      modified: false,
      mouseOver: '',
      playing: false,
      project: props.project
    };
    this.audioCtx = initAudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.connect(this.audioCtx.destination);
    this.gainNode.gain.value =
      (props.project.getIn(['common', 'muted']) === 'true') ? 0 : props.project.getIn(['common', 'gain']);
  }

  render() {
    const {mouseOver, playing, project} = this.state;
    const {close, purge, i18n, loading, navigate, router, save, settings, theme} = this.props;

    const redirectToProjects = () => {
      router.push('/');
      navigate(PROJECTS);
    };

    const closeProject = () => {
      const payload = {projectId: project.get('id')};
      const meta = {redirect: redirectToProjects};
      close(payload, meta);
    };

    const clickPlay = () => this.setState({playing: !playing});

    const setMouseOut = () => setMouseOver('');
    const setMouseOver = mouseOver => this.setState({mouseOver});

    const updateProjectState = (field, val) =>
      this.setState({
        modified: true,
        project: project.updateIn(field, () => val)
      });

    return (
      <Wrapping fixedHeight={Boolean(true)}>
        <HeaderControls
          closeProject={closeProject}
          i18n={i18n}
          loading={loading}
          navigate={navigate}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectState}
        />
        <Toolbar
          channels={project.get('channels')}
          editedChannelId={project.get('editedChannelId')}
          i18n={i18n}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectState}
        />
        <Sequencer
          audioCtx={this.audioCtx}
          gainNode={this.gainNode}
          i18n={i18n}
          project={project}
          save={save}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectState}
        />
        <ChannelControls
          editedChannelId={project.get('editedChannelId')}
          i18n={i18n}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectState}
        />
        <MainControls
          clickPlay={clickPlay}
          gainNode={this.gainNode}
          i18n={i18n}
          playing={playing}
          project={project}
          save={save}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectState}
        />
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
  project: PropTypes.instanceOf(Map).isRequired,
  router: PropTypes.shape({push: PropTypes.func.isRequired}).isRequired,
  save: PropTypes.func.isRequired,
  settings: PropTypes.instanceOf(Map).isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(ProjectPage);
