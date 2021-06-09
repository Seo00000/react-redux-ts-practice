import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import CounterContainer from './containers/CounterContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CounterContainer />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
