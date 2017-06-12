/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';
import { getCode, ENTER, ESC } from '../../../../utils/keyEvents';

class ChannelName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.channelName,
      editMode: false,
    };

    this.startEdit = this.startEdit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.submit = this.submit.bind(this);
  }

  startEdit() {
    this.setState({ editMode: true });
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  keyUp(e) {
    const code = getCode(e);
    if ([ENTER, ESC].includes(code)) {
      e.preventDefault();
      if (code === ENTER) {
        this.submit();
      } else if (code === ESC) {
        this.cancelEdit();
      }
    }
  }

  cancelEdit() {
    this.setState({
      name: this.props.channelName,
      editMode: false,
    });
  }

  submit() {
    const { index, updateProject } = this.props;
    const { name } = this.state;

    updateProject(['channels', index, 'name'], name);
    this.setState({ editMode: false });
  }

  render() {
    const { theme } = this.props;
    const { name, editMode } = this.state;

    return (
      <div>
        {
          !editMode &&
          <span
            className={`i f6 tl ${theme.commonText}`}
            onClick={this.startEdit}
          >
            {name}
          </span>
        }
        {
          editMode &&
          <input
            autoFocus
            className="f6 bn bg-washed-yellow"
            onBlur={this.submit}
            onChange={this.changeName}
            onKeyUp={this.keyUp}
            value={name}
          />
        }
      </div>
    );
  }
}

ChannelName.propTypes = {
  channelName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setMouseOut: PropTypes.func.isRequired,
  setMouseOver: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default ChannelName;
