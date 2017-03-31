/**
 * Use NavigationLink to prevent displaying of the link in browser's status bar.
 */
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const NavigationLink = ({ active, disabled, onMouseOver, onMouseOut, navigate, router, text, theme,
                          title, url}) => {
  const click = () => {
    if (!disabled) {
      router.push(url);
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
  router: PropTypes.shape({push: PropTypes.func.isRequired}),
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default withRouter(NavigationLink);
