/**
 * Use NavigationLink to prevent displaying of the link in browser's status bar.
 */
import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

const NavigationLink = ({active, onMouseOver, onMouseOut, navigate, router, text, title, theme, url}) => {
  const click = () => {
    router.push(url);
    navigate();
  };
  const
    linkClasses =
      'no-underline f4 dib pointer '
      + theme.linkHover + ' '
      + (active ? theme.linkActive : theme.linkInactive);

  return (
    <span
      className={linkClasses}
      onClick={click}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      title={title || text}
    >
      {text}
    </span>
  );
};

NavigationLink.propTypes = {
  active: PropTypes.bool,
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
