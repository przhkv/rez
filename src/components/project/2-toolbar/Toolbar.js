import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import AddRemoveChannel from './AddRemoveChannel';
import RulerGrid from './RulerGrid';
import RulerTime from './RulerTime';
import ShowHideTimeButton from './ShowHideTimeButton';
import { isTrue } from '../../../utils/stringBoolUtils';

const Toolbar = ({ i18n, project, setMouseOut, setMouseOver, theme, updateProjectItem,
                   updateProjectMerge }) =>
(
  <div className={`flex-none order-2 w-100 bg-near-white ${theme.bg}`}>
    {
      isTrue(project.getIn(['view', 'timeScale'])) &&
      <RulerTime />
    }
    <AddRemoveChannel
      channels={project.get('channels')}
      editedChannelId={project.get('editedChannelId')}
      i18n={i18n}
      setMouseOut={setMouseOut}
      setMouseOver={setMouseOver}
      theme={theme}
      updateProjectItem={updateProjectItem}
      updateProjectMerge={updateProjectMerge}
    />
    <RulerGrid />
    <ShowHideTimeButton
      i18n={i18n}
      showTimeScale={isTrue(project.getIn(['view', 'timeScale']))}
      setMouseOut={setMouseOut}
      setMouseOver={setMouseOver}
      theme={theme}
      updateProjectItem={updateProjectItem}
    />
  </div>
);

Toolbar.propTypes = {
  i18n: PropTypes.object.isRequired,
  project: PropTypes.instanceOf(Map).isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
  updateProjectMerge: PropTypes.func.isRequired
};

export default Toolbar;
