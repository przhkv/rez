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
      moment: 0, // todo migrate to project property
    };

    this.playback = new PlaybackControl(moment => this.setState({ moment }), this.state.moment);
    this.audioCtx = initAudioContext();
    this.gainNode = this.audioCtx.createGain();
    this.gainNode.connect(this.audioCtx.destination);
    this.gainNode.gain.value =
      (props.project.getIn(['common', 'muted']) === 'true') ? 0 : props.project.getIn(['common', 'gain']);

    this.clickPlay = this.clickPlay.bind(this);
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

  render() {
    const {mouseOver, playing, project} = this.state;
    const {close, purge, i18n, loading, navigate, save, settings, theme} = this.props;

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

    const updateProjectField = (field, val) =>
      this.setState({
        modified: true,
        project: project.updateIn(field, () => val)
      });

    const updateProjectFields = map =>
      this.setState({
        modified: true,
        project: project.merge(map)
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
          updateProject={updateProjectField}
        />
        <Toolbar
          i18n={i18n}
          project={project}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProjectItem={updateProjectField}
          updateProjectMerge={updateProjectFields}
        />
        <ChannelsGrid
          audioCtx={this.audioCtx}
          gainNode={this.gainNode}
          i18n={i18n}
          moment={this.state.moment}
          project={project}
          save={save}
          setMouseOut={setMouseOut}
          setMouseOver={setMouseOver}
          theme={theme}
          updateProject={updateProjectField}
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
          updateProject={updateProjectField}
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
          updateProject={updateProjectField}
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
  theme: PropTypes.object.isRequired
};

export default ProjectPage;
