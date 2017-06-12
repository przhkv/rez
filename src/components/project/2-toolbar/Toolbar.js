import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import AddRemoveChannel from './AddRemoveChannel';
import RulerMetre from './RulerMetre';
import RulerTime from './RulerTime';
import ShowHideTimeButton from './ShowHideTimeButton';
import { isTrue } from '../../../utils/stringBoolUtils';

const Toolbar = ({ i18n, project, setMouseOut, setMouseOver, theme, updateProjectItem,
                   updateProjectMerge, zoom }) =>
(
  <div className={`flex-none order-2 w-100 bg-near-white ${theme.bg}`}>
    {
      isTrue(project.getIn(['view', 'timeScale'])) &&
      <RulerTime zoom={zoom} />
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
    <RulerMetre
      bpm={Number(project.getIn(['common', 'bpm']))}
      measure={Number(project.getIn(['common', 'timeSignature', 'measure']))}
      notes={Number(project.getIn(['common', 'timeSignature', 'notes']))}
      zoom={zoom}
    />
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
  updateProjectMerge: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Toolbar;
