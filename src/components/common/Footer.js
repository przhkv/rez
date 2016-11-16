import React, { PropTypes } from 'react';

const Footer = ({i18n}) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bt b--black-10 pv2 gray">
      <small className="db tc f6">
        {i18n.footer.copyright}&nbsp;&copy;&nbsp;
        <a href="https://github.com/przhkv" target="_blank" className="no-underline hover-light-green green">przhkv</a>
        &nbsp;{year}
      </small>
    </footer>
  );
};

Footer.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default Footer;
