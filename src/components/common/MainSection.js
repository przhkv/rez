import React, { PropTypes } from 'react';

const MainSection = ({children, theme}) => (
  <main className={'w-100 flex-auto ' + theme.bg}>
    {children}
  </main>
);

MainSection.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object.isRequired
};

export default MainSection;
