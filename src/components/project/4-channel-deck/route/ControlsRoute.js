import React from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { ROUTE } from '../../../../constants/sequencer/channelLayoutTypes';
// import {} from '../../../../constants/sequencer/elements';
import { extractInputData } from '../../../../utils/mapUtils';
import SelectInput from '../../../common/inputs/SelectInput';


const ControlsRoute = ({ channels, i18n, indexOfChannel, setMouseOut, setMouseOver, theme,
                         updateProject }) => {
  // const mouseOverSelectOutput = () => setMouseOver('todo');
  const updateChannelOutput = output => updateProject(['channels', indexOfChannel, 'payload', 'output'], output);
  const updateSelectOption = e => updateChannelOutput(extractInputData(e).val);

  const currentOutput = channels.getIn([indexOfChannel, 'payload', 'output']);
  const currentId = channels.getIn([indexOfChannel, 'channelId']);
  const options =
    channels
      .filter(c => c.get('type') === ROUTE && c.get('channelId') !== currentId)
      .map(c => Map({value: c.get('channelId'), text: c.get('name')}))
      .concat(List.of({value: 'master', text: 'Master'}))
      .toJS();

  return (
    <div className="w-100">
      <SelectInput
        label={'Output'}
        name={'output'}
        onChange={updateSelectOption}
        options={options}
        theme={theme}
        value={currentOutput}
      />
    </div>
  );
};

ControlsRoute.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  i18n: PropTypes.object.isRequired,
  indexOfChannel: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired
};

export default ControlsRoute;
