import { IRequestTodo } from './../../@types/types';
import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './types';
import { createTodoAPI, getTodosAPI, updateToDoAPI, deleteTodoAPI } from './../module/todoApi';

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

export const updateTodo = (data: IRequestTodo) => {
	return updateToDoAPI(data).then((res) => ({
		type: UPDATE_TODO,
		payload: res,
	}));
};

export const deleteTodo = (id: number) => {
	return deleteTodoAPI(id).then((res) => ({
		type: DELETE_TODO,
		payload: res,
	}));
};
