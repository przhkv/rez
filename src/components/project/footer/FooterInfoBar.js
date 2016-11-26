import React, { PropTypes } from 'react';

const FooterInfoBar = ({i18n, mouseOver, theme}) => {
  return (
    <footer className={'db h2 bt pv2 ' + theme.sectionBorder + ' ' + theme.footerText + ' ' + theme.bg}>
      <small className="db tc f6">
        {mouseOver}
      </small>
    </footer>
  );
};

FooterInfoBar.propTypes = {
  i18n: PropTypes.object.isRequired,
  mouseOver: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default FooterInfoBar;