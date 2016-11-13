import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bt b--black-10 pv2 mid-gray">
      <small className="db tc f6">Copyright &copy; <a href="https://github.com/przhkv" target="_blank">przhkv</a> {year}</small>
    </footer>
  );
};

export default Footer;
