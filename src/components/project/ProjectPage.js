import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import history from '../../history';
import { initAudioContext } from '../../utils/audio/inits';
import { PROJECTS } from '../../constants/pages';
import PlaybackControl from '../../utils/sequencer/PlaybackControl';
import Wrapping from '../common/Wrapping';
import HeaderControls from './1-header/HeaderControls';
import Toolbar from './2-toolbar/Toolbar';
import ChannelsGrid from './3-channels-grid/ChannelsGrid';
import ChannelDeck from './4-channel-deck/ChannelDeck';
import MasterDeck from './5-master-deck/MasterDeck';
import FooterInfoBar from './6-footer/FooterInfoBar';

class ProjectPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modified: false,
      mouseOver: '',
      playing: false,
      project: props.project,
      moment: Number(props.project.getIn(['common', 'moment'])),
      zoom: Number(props.project.getIn(['common', 'zoom'])),
    };

    this.playback = new PlaybackControl(moment => this.setState({ moment }), this.state.moment);
    this.audioCtx = initAudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.connect(this.audioCtx.destination);
    this.gainNode.gain.value =
      (props.project.getIn(['common', 'muted']) === 'true') ? 0 : props.project.getIn(['common', 'gain']);

    this.clickPlay = this.clickPlay.bind(this);
    this.updateProjectItem = this.updateProjectItem.bind(this);
    this.updateProjectMerge = this.updateProjectMerge.bind(this);
    this.updZoom = this.updZoom.bind(this);
  }

  componentWillUnmount() {
    const { playing } = this.state;
    if (playing) {
      this.playback.stop();
    }
  }

  clickPlay() {
    const { playing } = this.state;
    if (playing) {
      this.playback.stop();
    } else {
      this.playback.start();
    }
    this.setState({ playing: !playing });
  }

  updateProjectItem(accessor, value) {
    this.setState({
      modified: true,
      project: this.state.project.updateIn(accessor, () => value),
    });
  }

  updateProjectMerge(project) {
    this.setState({
      modified: true,
      project: this.state.project.merge(project),
    });
  }

  updZoom(zoom) {
    this.setState({ zoom });
  }

  render() {
    const { moment, mouseOver, playing, project, zoom } = this.state;
    const { close, purge, i18n, loading, navigate, save, settings, theme } = this.props;

    const redirectToProjects = () => {
      history.push('/');
      navigate(PROJECTS);
    };

    const closeProject = () => {
      const payload = {projectId: project.get('id')};
      const meta = {redirect: redirectToProjects};
      close(payload, meta);
    };

    const setMouseOver = mouseOver => this.setState({ mouseOver }); // eslint-disable-line no-shadow
    const setMouseOut = () => setMouseOver('');

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
          updateProject={this.updateProjectItem}
        />
        <Toolbar
          i18n={i18n}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProjectItem={this.updateProjectItem}
          updateProjectMerge={this.updateProjectMerge}
          zoom={zoom}
        />
        <ChannelsGrid
          audioCtx={this.audioCtx}
          gainNode={this.gainNode}
          i18n={i18n}
          moment={moment}
          project={project}
          save={save}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={this.updateProjectItem}
          zoom={zoom}
        />
        <ChannelDeck
          audioCtx={this.audioCtx}
          gainNode={this.gainNode}
          editedChannelId={project.get('editedChannelId')}
          i18n={i18n}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={this.updateProjectItem}
        />
        <MasterDeck
          clickPlay={this.clickPlay}
          gainNode={this.gainNode}
          i18n={i18n}
          playing={playing}
          project={project}
          save={save}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProjectItem={this.updateProjectItem}
          updZoom={this.updZoom}
          zoom={zoom}
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
  save: PropTypes.func.isRequired,
  settings: PropTypes.instanceOf(Map).isRequired,
  theme: PropTypes.object.isRequired,
};

export default ProjectPage;
