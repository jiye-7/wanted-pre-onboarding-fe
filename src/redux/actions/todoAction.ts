import { GET_TODOS, CREATE_TODO } from './types';
import { createTodoAPI, getTodosAPI } from './../module/todoApi';

export const getTodos = () => {
	return getTodosAPI().then((res) => ({
		type: GET_TODOS,
		payload: res,
	}));
};

export const createTodo = (data: string) => {
	return createTodoAPI(data).then((res) => ({
		type: CREATE_TODO,
		payload: res,
	}));
};
