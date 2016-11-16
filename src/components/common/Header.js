import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import * as pages from '../../constants/pages';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {i18n, loadedProjectsLinks, loading, navigate} = this.props;
    const
      linkClasses = 'no-underline hover-dark-green f5 f4-ns dib ',
      getClass = page => (this.props.page === page) ? 'dark-green' : 'light-silver',
      setHome = () => navigate(pages.HOME),
      setSettings = () => navigate(pages.SETTINGS);

    return (
      <header className="w-100 db bb b--black-10">
        <nav className="w-100 db dt-ns border-box pa2 ph4-m ph5-l" role="navigation">
          <div className="w-100 w-25-ns db dtc-ns v-mid tc tl-ns">
            <IndexLink
              className={linkClasses + getClass(pages.HOME)}
              onClick={setHome}
              title={i18n.headNav.projects}
              to="/"
            >
              {i18n.headNav.projects}
            </IndexLink>
          </div>
          <div className="w-100 w-50-ns db dtc-ns v-mid tc">
            {loadedProjectsLinks.map((linkData, i) => {
              const setPage = () => navigate(linkData.idTitle);
              return (
                <Link
                  key={i}
                  className={linkClasses + 'mr3 mr4-m ' + getClass(linkData.idTitle)}
                  onClick={setPage}
                  title={linkData.title}
                  to={'/seq/' + linkData.idTitle}
                >
                  {linkData.title}
                </Link>
            );})}
          </div>
          <div className="w-100 w-25-ns db dtc-ns v-mid tc tr-ns">
            <Link
              className={linkClasses + getClass(pages.SETTINGS)}
              onClick={setSettings}
              title={i18n.headNav.settings}
              to="/settings"
            >
              {i18n.headNav.settings}
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  i18n: PropTypes.object.isRequired,
  loadedProjectsLinks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default Header;
