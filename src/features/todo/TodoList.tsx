import { useAppSelector } from '../../app/hooks';
import { Todo, selectTodo } from './todoSlice';
import TodoItem from './TodoItem';
import '../../components/TodoItem.css';

// todo 리스트
export default function TodoList() {
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
