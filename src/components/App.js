import React, { PropTypes } from 'react';
import FooterConnector from '../containers/FooterConnector';
import NavigationConnector from '../containers/NavigationConnector';

const App = ({children}) => (
  <div className="w-100 flex flex-column min-vh-100">
    <NavigationConnector />
    {children}
    <FooterConnector />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
