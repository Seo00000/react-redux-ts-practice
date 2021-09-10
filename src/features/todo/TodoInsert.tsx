import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from './todoSlice';
// import TodoHead from './TodoHead';
import '../../components/TodoItem.css';

export default function TodoInsert() {
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
