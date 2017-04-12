import React from 'react';
import PropTypes from 'prop-types';

const MainSection = ({children, theme}) => (
  <main className={`w-100 flex-auto ${theme.bg}`}>
    {children}
  </main>
);

MainSection.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired
};

export default MainSection;
