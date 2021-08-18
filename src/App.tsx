import React from 'react';
import { Counter } from './features/counter/Counter';
import { Todos } from './features/todo/Todo';
import { createGlobalStyle } from 'styled-components';
// -------- 프리젠테이셔널 컴포넌트 CounterContainer -------
// import CounterContainer from './containers/CounterContainer';
// -------- Hook을 사용해 받아온 컴포넌트 Counter -------
// import Counter from './components/Counter';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <GlobalStyle />
      <Todos />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
