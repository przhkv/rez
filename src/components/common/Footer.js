import React, { PropTypes } from 'react';

const Footer = ({i18n, theme}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={'bt pv2 ' + theme.sectionBorder + ' ' + theme.footerText + ' ' + theme.bg}>
      <small className="db tc f6">
        {i18n.footer.copyright}&nbsp;&copy;&nbsp;
        <a
          href="https://github.com/przhkv"
          target="_blank"
          className={'no-underline ' + theme.footerLink}
        >
          przhkv
        </a>
        &nbsp;{year}
      </small>
    </footer>
  );
};

Footer.propTypes = {
  i18n: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Footer;
