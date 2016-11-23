import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { i18nSelector, themeSelector } from '../selectors';
import Footer from '../components/common/Footer';

const FooterConnector = props => (
  <Footer {...props} />
);

FooterConnector.propTypes = {
  i18n: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  theme: themeSelector(state)
});

export default connect(mapStateToProps)(FooterConnector);
