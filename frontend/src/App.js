import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Home from './components/Home';

import 'react-circular-progressbar/dist/styles.css';
import './css/App.scss';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
