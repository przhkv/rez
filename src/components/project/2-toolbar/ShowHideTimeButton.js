import React from 'react';
import PropTypes from 'prop-types';
import { TIME_RULER_HIDE, TIME_RULER_SHOW } from '../../../constants/sequencer/elements';
import TinyButton from './TinyButton';

const ShowHideTimeButton = ({ i18n, showTimeScale, setMouseOut, setMouseOver, theme,
                              updateProjectItem }) => {
  const onClick = () => {
    updateProjectItem(['view', 'timeScale'], showTimeScale ? 'false' : 'true');
    setMouseOver(showTimeScale ? TIME_RULER_SHOW : TIME_RULER_HIDE);
  };
  const mouseOver = () => setMouseOver(showTimeScale ? TIME_RULER_HIDE : TIME_RULER_SHOW);

  return (
    <div className="tc fr" style={{ width: '40px' }}>
      <TinyButton
        active={showTimeScale}
        text="τ"
        theme={theme}
        onClick={onClick}
        onMouseOut={setMouseOut}
        onMouseOver={mouseOver}
      />
    </div>
  );
};

ShowHideTimeButton.propTypes = {
  i18n: PropTypes.object.isRequired,
  showTimeScale: PropTypes.bool.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
};

export default ShowHideTimeButton;
