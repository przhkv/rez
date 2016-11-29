import React, { PropTypes } from 'react';
import NavigationLink from './links/NavigationLink';
import { PROJECTS, SETTINGS } from '../../constants/pages';

const Header = ({i18n, loading, navigate, page, theme}) => {
  const
    navigateToProjects = () => navigate(PROJECTS),
    navigateToSettings = () => navigate(SETTINGS);

  return (
    <header className={'w-100 bb db ' + theme.sectionBorder + ' ' + theme.bg}>
      <nav className="w-100 db dt-ns border-box pa2 ph4-m ph5-l" role="navigation">
        <div className="w-100 w-50-ns db dtc-ns v-mid tc tl-ns">
          <NavigationLink
            active={page === PROJECTS}
            navigate={navigateToProjects}
            text={i18n.headNav.projects}
            theme={theme}
            url="/"
          />
        </div>
        <div className="w-100 w-50-ns db dtc-ns v-mid tc tr-ns">
          <NavigationLink
            active={page === SETTINGS}
            navigate={navigateToSettings}
            text={i18n.headNav.settings}
            theme={theme}
            url="/settings"
          />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
