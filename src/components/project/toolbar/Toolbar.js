import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import AddRemoveChannel from './controls/AddRemoveChannel';

const Toolbar = props => (
  <div className={`flex-none order-2 w-100 bg-near-white ${props.theme.bg}`}>
    <AddRemoveChannel {...props} />
  </div>
);

Toolbar.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  editedChannelId: PropTypes.string.isRequired,
  i18n: PropTypes.object.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProjectItem: PropTypes.func.isRequired,
  updateProjectMerge: PropTypes.func.isRequired
};

export default Toolbar;
