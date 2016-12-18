import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import ChannelModule from './ChannelModule';

const Seq = ({audioCtx, gainNode, i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div>
    <div className="w5 br b--light-gray">
    {project.get('channels').map((c, i) => (
      <ChannelModule
        key={i}
        audioCtx={audioCtx}
        channel={c}
        gainNode={gainNode}
        i18n={i18n}
        theme={theme}
        setMouseOut={setMouseOut}
        setMouseOver={setMouseOver}
        updateProject={updateProject}
      />
    ))}
    </div>
  </div>
);

Seq.propTypes = {
  audioCtx: PropTypes.object.isRequired,
  gainNode: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default Seq;
