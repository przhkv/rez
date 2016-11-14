import React, { PropTypes } from 'react';
import FooterConnector from '../containers/FooterConnector';
import NavigationConnector from '../containers/NavigationConnector';
const App = props => (
  <div className="w-100">
    <NavigationConnector />
    <main className="db w-100 bt b--black-10">
      {props.children}
    </main>
    <FooterConnector />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
