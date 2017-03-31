import React, { PropTypes } from 'react';

const FooterInfoBar = ({i18n, mouseOver, theme}) => (
  <footer className={`flex-none order-6 db h2 bt pv2 ${theme.sectionBorder} ${theme.footerText} ${theme.bg}`}>
    <small className="db tc f6">
      {i18n.helpInfo[mouseOver]}
    </small>
  </footer>
);

FooterInfoBar.propTypes = {
  i18n: PropTypes.object.isRequired,
  mouseOver: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default FooterInfoBar;
