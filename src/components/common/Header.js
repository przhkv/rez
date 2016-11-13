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
      linkClasses = 'no-underline hover-washed-yellow f5 f4-ns dib ',
      getClass = page => (this.props.page === page) ? 'washed-yellow' : 'green',
      setHome = () => navigate(pages.HOME),
      setSettings = () => navigate(pages.SETTINGS);

    return (
      <header className="db bg-black-90 w-100">
        <nav className="db dt-ns w-100 border-box pa2 ph4-m ph5-l" role="navigation">
          <div className="db dtc-ns v-mid w-100 w-25-ns tc tl-ns">
            <IndexLink
              className={linkClasses + getClass(pages.HOME)}
              onClick={setHome}
              title={i18n.headNav.projects}
              to="/"
            >
              {i18n.headNav.projects}
            </IndexLink>
          </div>
          <div className="db dtc-ns v-mid w-100 w-50-ns tc">
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
          <div className="db dtc-ns v-mid w-100 w-25-ns tc tr-ns">
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
