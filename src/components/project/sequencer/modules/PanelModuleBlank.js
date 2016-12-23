import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const PanelModuleBlank = ({channel, i18n, setMouseOut, setMouseOver, theme, updateProject}) => {
  return (
    <div className="bb b--light-gray bg-black-05">
      <div className="w-100">
        <div className="ph2 pv1 tc">
          <span className={`i f6 tl ${theme.commonText}`}>{channel.get('name')}</span>
        </div>
      </div>
    </div>
  );
};

PanelModuleBlank.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default PanelModuleBlank;
