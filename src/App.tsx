import React from 'react';
// import logo from './logo.svg';
// import './App.css'; 
// import { Counter } from './features/counter/Counter';
// -------- 프리젠테이셔널 컴포넌트 CounterContainer -------
// import CounterContainer from './containers/CounterContainer';
// -------- Hook을 사용해 받아온 컴포넌트 Counter -------
// import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* <CounterContainer /> */}
      {/* <Counter /> */}
      <TodoInsert />
      <TodoList />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
