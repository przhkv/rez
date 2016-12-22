import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const PanelModuleBlank = ({channel, i18n, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="bb b--light-gray bg-black-05">
    <div className="w-100">
      <div className="ph2 pv1 tc">
        <span className={`i f6 tl ${theme.commonText}`}>{channel.get('name')}</span>
      </div>
    </div>
    <div className="w-100 flex">
      <div className="w-10 tc">
        <a className="f6 link dim br4 ph2 mb1 dib white bg-light-blue" href="#0">s</a>
      </div>
      <div className="w-10 tc">
        <a className="f6 link dim br4 ph2 mb1 dib white bg-washed-red" href="#0">m</a>
      </div>
      <div className="w-60 ph1">
        <input className="module-vol v-mid" type="range" />
      </div>
      <div className="w-10 tc">
        <a className=" f6 link dim br4 ph2 mb1 dib white bg-light-purple" href="#0">e</a>
      </div>
      <div className="w-10 tc">
        <a className="f6 link dim br4 ph2 mb1 dib white bg-orange" href="#0">+</a>
      </div>
    </div>
  </div>
);

PanelModuleBlank.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default PanelModuleBlank;
