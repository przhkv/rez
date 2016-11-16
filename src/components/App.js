import React, { PropTypes } from 'react';
import FooterConnector from '../containers/FooterConnector';
import NavigationConnector from '../containers/NavigationConnector';
const App = props => (
  <div className="w-100 flex flex-column min-vh-100">
    <NavigationConnector />
    <main className="w-100 flex-auto">
      {props.children}
    </main>
    <FooterConnector />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
