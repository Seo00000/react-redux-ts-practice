import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// -------- 프리젠테이셔널 컴포넌트 CounterContainer -------
import CounterContainer from './containers/CounterContainer';
// -------- Hook을 사용해 받아온 컴포넌트 Counter -------
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <CounterContainer /> */}
      <Counter />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
