import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { i18nSelector } from '../selectors';
import Footer from '../components/common/Footer';

const FooterConnector = props => (
  <Footer
    i18n={props.i18n}
  />
);

FooterConnector.propTypes = {
  i18n: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  i18n: i18nSelector(state)
});

export default connect(mapStateToProps)(FooterConnector);
