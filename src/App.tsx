import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Learn Redux
        </a>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
        <br/>
        <h1>New Line</h1>
        <h2>New Line2</h2>
      </header>
    </div>
  );
}

export default App;
