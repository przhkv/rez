import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';
import * as pages from '../../constants/pages';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }

  render() {
    const { i18n, loading, navigate } = this.props;
    const { collapsed } = this.state;

    const getClass = page =>
      (this.props.page === page) ? 'active' : '';
    const collapseToggleNav = () =>
      this.setState({collapsed: true});
    const setPage = e => {
      navigate(e.target.parentElement.id);
      collapseToggleNav();
    };
    const toggleCollapse = () => {
      const collapsed = !collapsed;
      this.setState({collapsed});
    };

    const navClass = collapsed ? 'collapse' : '';

    return (
      <nav role="navigation">
        <div>
          <div>
            <button type="button" onClick={toggleCollapse} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className={'navbar-collapse ' + navClass}>
            <ul>
              <li id={pages.HOME} className={getClass(pages.HOME)}>
                <IndexLink to="/" onClick={setPage}>{i18n.headNav.projects}</IndexLink>
              </li>
              <li id={pages.SETTINGS} className={getClass(pages.SETTINGS)}>
                <Link to="/settings" onClick={setPage}>{i18n.headNav.settings}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  i18n: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  page: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
};

export default Header;
