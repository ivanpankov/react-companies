import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TreeView from '../TreeView';
import Details from '../Details';
import Notifications from '../Notifications';
import './styles.scss';

function App() {
  return (
    <Router>
      <div id="app">
        <TreeView />
        <Details />
        <Notifications />
      </div>
    </Router>
  );
}

export default App;
