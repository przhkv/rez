import React, { PropTypes } from 'react';
import NavigationLink from '../../common/links/NavigationLink';
import SubmitButton from '../../common/buttons/SubmitButton';
import { NEUTRAL_LIGHT } from '../../../constants/components/buttonStyles';
import { PROJECTS } from '../../../constants/pages';
import { BACK, CLOSE, DECREASE_BPM, INCREASE_BPM } from '../../../constants/sequencer/elements';
import { MAX_BPM, MIN_BPM } from '../../../constants/sequencer/limits';

const HeaderControls = ({ closeProject, i18n, loading, navigate, project, setMouseOut,
                          setMouseOver, theme, updateProject}) => {
  const
    navigateToProjects = () => navigate(PROJECTS),
    setOnMouseOverBack = () => setMouseOver(BACK),
    setOnMouseOverClose = () => setMouseOver(CLOSE),
    setOnMouseOverDecreaseBPM = () => setMouseOver(DECREASE_BPM),
    setOnMouseOverIncreaseBPM = () => setMouseOver(INCREASE_BPM);

  const bpm = project.getIn(['common', 'bpm']);

  const decreaseBPM = () => {
    if (Number(bpm) > MIN_BPM)
      updateProject(['common', 'bpm'], (Number(bpm) - 1));
  };
  const increaseBPM = () => {
    if (Number(bpm) < MAX_BPM)
      updateProject(['common', 'bpm'], (Number(bpm) + 1));
  };

  return (
    <header className={`flex-none order-1 w-100 bb db ${theme.sectionBorder} ${theme.bg}`}>
      <nav className="w-100 db dt-ns border-box pa2 ph4-ns" role="navigation">
        <div className="w-100 w-25-ns db dtc-ns v-mid tc tl-ns">
          <NavigationLink
            onMouseOver={setOnMouseOverBack}
            onMouseOut={setMouseOut}
            navigate={navigateToProjects}
            text="&#10550;"
            theme={theme}
            title={i18n.headNav.projects}
            url="/"
          />
        </div>
        <div className="w-100 w-50-ns db dtc-ns v-mid tc">
          <SubmitButton
            buttonStyle={NEUTRAL_LIGHT}
            disabled={bpm <= MIN_BPM}
            inline={Boolean(true)}
            onClick={decreaseBPM}
            onMouseOut={setMouseOut}
            onMouseOver={setOnMouseOverDecreaseBPM}
            text="-"
            theme={theme}
          />
          <span className={`mh3 ${theme.commonText}`}>{bpm}</span>
          <SubmitButton
            buttonStyle={NEUTRAL_LIGHT}
            disabled={bpm >= MAX_BPM}
            inline={Boolean(true)}
            onClick={increaseBPM}
            onMouseOut={setMouseOut}
            onMouseOver={setOnMouseOverIncreaseBPM}
            text="+"
            theme={theme}
          />
        </div>
        <div className="w-100 w-25-ns db dtc-ns v-mid tc tr-ns">
          <SubmitButton
            buttonStyle={NEUTRAL_LIGHT}
            inline={Boolean(true)}
            onClick={closeProject}
            onMouseOut={setMouseOut}
            onMouseOver={setOnMouseOverClose}
            text={i18n.controls.close}
            theme={theme}
          />
        </div>
      </nav>
    </header>
  );
};

HeaderControls.propTypes = {
  closeProject: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default HeaderControls;
