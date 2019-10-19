import React from 'react';
import './css/App.scss';
import Home from './components/Home';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Home />
      <Feed />
    </div>
  );
}

export default App;
