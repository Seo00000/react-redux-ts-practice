import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Todo, addTodo, toggleTodo, removeTodo, selectTodo } from './todoSlice';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
// import TodoItem from './TodoItem';
import TodoInsert from './TodoInsert';
import '../../components/TodoItem.css';

export type TodoItemProps = {
  todo: Todo;
};

export function Todos() {
  return (
    <TodoContainer>
      <TodoHead />
      <TodoInsert />
      <TodoList />
    </TodoContainer>
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
