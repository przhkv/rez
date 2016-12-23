import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { EDIT, EXPAND, MUTE, SOLO } from '../../../../constants/sequencer/panelButtonTypes';
import PanelButton from '../../../common/buttons/PanelButton';

const PanelModule = ({channel, i18n, setMouseOut, setMouseOver, theme, updateProject}) => {
  const type = channel.get('type');
  const f = () => false;
  const {expanded, edited, muted, solo} = channel.getIn(['payload', 'state']).toJS();

  return (
    <div className="bb b--light-gray bg-black-05">
      <div className="w-100">
        <div className="ph2 pv1 tc">
          <span className={`i f6 tl ${theme.commonText}`}>{channel.get('name')}</span>
        </div>
      </div>
      <div className="w-100 flex mv1">
        <div className="w-10 tc">
          <PanelButton
            active={solo === 'true'}
            onClick={f}
            onMouseOut={f}
            onMouseOver={f}
            theme={theme}
            type={SOLO}
          />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={muted === 'true'}
            onClick={f}
            onMouseOut={f}
            onMouseOver={f}
            theme={theme}
            type={MUTE}
          />
        </div>
        <div className="w-60 ph1">
          <input className="module-vol v-mid" type="range" />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={edited === 'true'}
            onClick={f}
            onMouseOut={f}
            onMouseOver={f}
            theme={theme}
            type={EDIT}
          />
        </div>
        <div className="w-10 tc">
          <PanelButton
            active={expanded === 'true'}
            onClick={f}
            onMouseOut={f}
            onMouseOver={f}
            theme={theme}
            type={EXPAND}
          />
        </div>
      </div>
    </div>
  );
};

PanelModule.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default PanelModule;
