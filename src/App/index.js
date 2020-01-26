import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TreeView from '../TreeView';
import Details from '../Details';
import './styles.scss';

function App() {
  return (
    <Router>
      <div id="app">
        <TreeView />
        <Details />
      </div>
    </Router>
  );
}

export default App;
