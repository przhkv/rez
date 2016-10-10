import React, { PropTypes } from 'react';
import Footer from './common/Footer';
import NavigationConnector from '../containers/NavigationConnector';

const App = props => (
      <div className="container px3">
        <NavigationConnector {...props}/>
        <div className="container app-container">
          {props.children}
        </div>
        <Footer />
      </div>
    );

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
