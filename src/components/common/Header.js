import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import { PROJECTS, SETTINGS } from '../../constants/pages';

const Header = ({i18n, loading, navigate, page}) => {
  const
    linkClasses = 'no-underline hover-dark-green f4 dib ',
    getLinkHighlightClass = (pageName) => (page === pageName) ? 'dark-green' : 'light-silver',
    navigateToProjects = () => navigate(PROJECTS),
    navigateToSettings = () => navigate(SETTINGS);

  return (
    <header className="w-100 bb b--black-10 db">
      <nav className="w-100 db dt-ns border-box pa2 ph4-m ph5-l" role="navigation">
        <div className="w-100 w-50-ns db dtc-ns v-mid tc tl-ns">
          <IndexLink
            className={linkClasses + getLinkHighlightClass(PROJECTS)}
            onClick={navigateToProjects}
            title={i18n.headNav.projects}
            to="/"
          >
            {i18n.headNav.projects}
          </IndexLink>
        </div>
        <div className="w-100 w-50-ns db dtc-ns v-mid tc tr-ns">
          <Link
            className={linkClasses + getLinkHighlightClass(SETTINGS)}
            onClick={navigateToSettings}
            title={i18n.headNav.settings}
            to="/settings"
          >
            {i18n.headNav.settings}
          </Link>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default Header;
