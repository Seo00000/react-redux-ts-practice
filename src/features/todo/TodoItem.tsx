import React, { useCallback } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { toggleTodo, removeTodo } from './todoSlice';
import '../../components/TodoItem.css';
import { TodoItemProps } from './Todo';

export default function TodoItem({ todo }: TodoItemProps) {
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
