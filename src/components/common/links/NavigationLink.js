/**
 * Use NavigationLink to prevent displaying of the link in browser's status bar.
 */
import React from 'react';
import PropTypes from 'prop-types';
import history from '../../../history';

const NavigationLink = ({
  active, disabled, onMouseOver, onMouseOut, navigate, text, theme, title, url,
}) => {
  const click = (event) => {
    if (event.button !== 0 /* left click */) {
      return;
    }

    if (!disabled) {
      history.push(url);
      navigate();
    }
  };
  const
    activeClass = active ? theme.linkActive : theme.linkInactive,
    pointerClass = !disabled ? 'pointer' : '',
    linkClasses = `no-underline f4 dib ${theme.linkHover} ${activeClass} ${pointerClass}`;

  return (
    <span
      className={linkClasses}
      disabled={disabled}
      onClick={click}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      title={title}
    >
      {text}
    </span>
  );
};

NavigationLink.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  navigate: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NavigationLink;
