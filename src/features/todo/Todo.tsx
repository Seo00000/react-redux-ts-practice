import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Todo, addTodo, toggleTodo, removeTodo, selectTodo } from './todoSlice';
import '../../components/TodoItem.css';

// todo 리스트
function TodoList() {
  const todos: Todo[] = useAppSelector(selectTodo);
  if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

type TodoItemProps = {
  todo: Todo;
};

function TodoHead() {
  const todos: Todo[] = useAppSelector(selectTodo);
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <TodoHeadContainer>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadContainer>
  );
}

// todo 각 항목
function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch();
  const onToggle = useCallback(() => dispatch(toggleTodo(todo)), [dispatch, todo]);
  const onRemove = useCallback(() => dispatch(removeTodo(todo)), [dispatch, todo]);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemove}>
        (x)
      </span>
    </li>
  );
}

function TodoInsert() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const todoDispatch = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    todoDispatch(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input placeholder={'할 일을 입력하세요'} value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

const TodoContainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoHeadContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export function Todos() {
  return (
    <TodoContainer>
      <TodoHead />
      <TodoInsert />
      <TodoList />
    </TodoContainer>
  );
}
