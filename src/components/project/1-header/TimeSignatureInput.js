import React from 'react';
import PropTypes from 'prop-types';

const TimeSignatureInput = ({ i18n, timeSigMeasure, timeSigNotes, theme, updateProject }) => {
  const changeTimeSigNotes = () => false; // todo updateProject(
  const changeTimeSigMeasure = () => false; // todo updateProject(

  return (
    <div>
      <select
        className={`bn outline-0 bg-white ${theme.commonText}`}
        onChange={changeTimeSigNotes}
        value={timeSigNotes}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24].map(k => (
            <option
              key={k}
              className="tc bn"
              value={k}
            >
              {k}
            </option>
          ))
        }
      </select>
      <span className={`mh3 ${theme.commonText}`}>/</span>
      <select
        className={`bn outline-0 bg-white ${theme.commonText}`}
        onChange={changeTimeSigMeasure}
        value={timeSigMeasure}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24].map(k => (
            <option
              key={k}
              className="tc bn"
            >
              {k}
            </option>
          ))
        }
      </select>
    </div>
  );
};


TimeSignatureInput.propTypes = {
  i18n: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  timeSigMeasure: PropTypes.number.isRequired,
  timeSigNotes: PropTypes.number.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default TimeSignatureInput;
