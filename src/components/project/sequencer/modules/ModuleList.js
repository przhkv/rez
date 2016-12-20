import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import ChannelModule from './ChannelModule';

const ModuleList = ({i18n, project, setMouseOut, setMouseOver, theme, updateProject}) => (
  <div className="w5 fl br b--light-gray">
    {project.get('channels').map((c, i) => (
      <ChannelModule
        key={i}
        channel={c}
        i18n={i18n}
        theme={theme}
        setMouseOut={setMouseOut}
        setMouseOver={setMouseOver}
        updateProject={updateProject}
      />
    ))}
  </div>
);

ModuleList.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ModuleList;
