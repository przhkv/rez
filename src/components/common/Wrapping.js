import React, { PropTypes } from 'react';

const Wrapping = ({children}) => (
  <div className="w-100 flex flex-column min-vh-100">
    {children}
  </div>
);

Wrapping.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Wrapping;
