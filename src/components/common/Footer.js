import React from 'react';

const Footer = () => {
  const textStyle = {
    marginTop: '15px'
  };
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <small className="" style={textStyle}>Copyright &copy; <a href="https://github.com/przhkv" target="_blank">przhkv</a> {year}</small>
    </footer>
  );
};

export default Footer;
