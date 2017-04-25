import React from 'react';
import PropTypes from 'prop-types';
import TinyButton from './TinyButton';

const ShowHideTimeButton = ({ i18n, showTimeScale, theme, updateProjectItem }) => {
  const onClick = () => updateProjectItem(['view', 'timeScale'], showTimeScale ? 'false' : 'true');
  return (
    <div className="tc fr" style={{ width: '40px' }}>
      <TinyButton
        text="τ"
        theme={theme}
        onClick={onClick}
      />
    </div>
  );
};

ShowHideTimeButton.propTypes = {
  i18n: PropTypes.object.isRequired,
  showTimeScale: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
};

export default ShowHideTimeButton;
