import React from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* TODO: Logo */}
        <img src={logo} className="App-logo" alt="logo"/>
        <h3>
          Aren Marsden
        </h3>
        <p>
          College Student & Java Developer<br/>
          <small>England, United Kingdom</small>
        </p>
      </header>

      <header className="portfolio-header">
        <h3>Portfolio</h3>
      </header>
    </div>
  );
}

export default App;
