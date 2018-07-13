import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="https://github.com/ue">
            <h1 className="App-title">Welcome to React With Sass</h1>
          </a>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          To get started, edit <code>assets/</code> some sass file and save to
          reload.
        </p>
      </div>
    );
  }
}

export default App;
