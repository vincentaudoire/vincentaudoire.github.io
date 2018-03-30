import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Hi, I'm Vincent</h1>
          <p>iOS developer <a href="https://next.n26.com">@N26</a></p>
        </div>
        <hr />
        <div className="d-flex flex-row justify-content-center">
          <a href="https://www.linkedin.com/in/vaudoire" className="p-2">Linkedin</a>
          <a href="https://github.com/vincentaudoire" className="p-2">GitHub</a>
          <a href="https://twitter.com/vincz_a" className="p-2">Twitter</a>
        </div>
      </div>
    );
  }
}

export default App;
