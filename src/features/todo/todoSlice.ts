import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface Todo {
    id: number;
    text: string;
    done: boolean;
    // title: string;
    // content: string;
}

type TodosState = Todo[];

//초깃값 설정
const initialState: TodosState = [
    { id: 1, text: '타입스크립트 배우기', done: true },
    { id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true },
    { id: 3, text: '투두리스트 만들기', done: false },
];

// createAsyncThunk 예제
// const name = 'todo';
// const fetchTodo = createAsyncThunk(
//     `${name}/fetchTodo`, // 액션 이름을 정의해 주도록 합니다.
//     async (todoId, thunkAPI) => { // 비동기 호출 함수를 정의합니다.
//         const response = await todoApi.fetchTodoInfo(todoId);
//         return response.data;
//     }
// )

export const TodoSlice = createSlice({
    name: 'todos',
    initialState : initialState,
    reducers: {
        // addTodo(state: TodosState, action: PayloadAction<Todo>): TodosState {
        addTodo(state: TodosState, { payload }: PayloadAction<string>): TodosState {
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId,
                text: payload,
                done: false
            });
        },
        toggleTodo(state: TodosState, { payload }: PayloadAction<Todo>): TodosState {
            return state.map(todo => 
                todo.id === payload.id ? { ...todo, done: !todo.done } : todo
            );
        },
        removeTodo(state: TodosState, { payload }: PayloadAction<Todo>): TodosState {
            return state.filter(todo => todo.id !== payload.id);
        },
    }
});


export const selectTodo = (state: RootState) => state.todo;//.values;

/*
createSlice가 반환하는 객체
{
    name: "todos",
    reducer: (state, action) => newState,
    actions: {
      addTodo: (payload) => ({type: "todos/addTodo", payload}),
      toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
    },
    caseReducers: {
      addTodo: (state, action) => newState,
      toggleTodo: (state, action) => newState,
    }
}
*/

export const { addTodo, toggleTodo, removeTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

// function todos()



