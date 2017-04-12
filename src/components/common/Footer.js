import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({i18n, theme}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`bt pv2 ${theme.sectionBorder} ${theme.footerText} ${theme.bg}`}>
      <small className="db tc f6">
        {i18n.footer.copyright}&nbsp;&copy;&nbsp;
        <a
          className={`no-underline ${theme.footerLink}`}
          href="https://github.com/przhkv"
          rel="noreferrer noopener"
          target="_blank"
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
