import React from 'react';
import PropTypes from 'prop-types';

const Wrapping = ({children, fixedHeight}) => (
  <div className={`w-100 flex flex-column min-vh-100 ${fixedHeight ? 'vh-100' : ''}`}>
    {children}
  </div>
);

Wrapping.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  fixedHeight: PropTypes.bool
};

export default Wrapping;
