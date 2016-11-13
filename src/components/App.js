import React, { PropTypes } from 'react';
import Footer from './common/Footer';
import NavigationConnector from '../containers/NavigationConnector';
const App = props => (
      <div className="w-100">
        <NavigationConnector {...props}/>
        <main className="db w-100 bt b--black-10 bg-white">
          {props.children}
        </main>
        <Footer />
      </div>
    );

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
