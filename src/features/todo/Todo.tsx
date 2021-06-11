import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    Todo,
    addTodo,
    toggleTodo,
    removeTodo,
    selectTodo,
} from './todoSlice';
import '../../components/TodoItem.css';

// todo 리스트
function TodoList() {
    const todos: Todo[] = useAppSelector(selectTodo);
    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
}

type TodoItemProps = {
    todo: Todo;
};

// todo 각 항목
function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useAppDispatch();
    const onToggle = useCallback(() => dispatch(toggleTodo(todo)), [dispatch, todo]);
    const onRemove = useCallback(() => dispatch(removeTodo(todo)), [dispatch, todo]);

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>(x)</span>
        </li>
    )
}

function TodoInsert() {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch();
    const todoDispatch = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(value);
        // console.log(e.target);
        // addTodo(value);
        todoDispatch(value);
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder={"할 일을 입력하세요"}
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    );

}

export function Todos() {

    return (
        <div>
            <TodoList />
            <TodoInsert />
        </div>
    );
}

