import React, { Component } from 'react';
import './App.css';
import Series from './containers/Series/index';
import Main from './components/Main/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Series List</h1>

        </header>
        <Main />
      </div>
    );
  }
}

export default App;
