import React from 'react';
import PropTypes from 'prop-types';
import { extractInputData } from '../../../utils/mapUtils';

const AVAILABLE_VALIES_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 24];

const TimeSignatureInput = ({ i18n, timeSignatureMeasure, timeSignatureNotes, theme,
                              updateProject }) => {
  const changeNotes = e =>
    updateProject(['common', 'timeSignature', 'notes'], extractInputData(e).val);
  const changeMeasure = e =>
    updateProject(['common', 'timeSignature', 'measure'], extractInputData(e).val);

  // todo replace select with something good looking
  return (
    <div>
      <select
        className={`bn outline-0 bg-white ${theme.commonText}`}
        onChange={changeNotes}
        value={timeSignatureNotes}
      >
        {
          AVAILABLE_VALIES_LIST.map(k => (
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
        onChange={changeMeasure}
        value={timeSignatureMeasure}
      >
        {
          AVAILABLE_VALIES_LIST.map(k => (
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
    </div>
  );
};


TimeSignatureInput.propTypes = {
  i18n: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  timeSignatureMeasure: PropTypes.string.isRequired,
  timeSignatureNotes: PropTypes.string.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default TimeSignatureInput;
