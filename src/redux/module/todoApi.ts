import axios, { AxiosResponse } from 'axios';
import { IResponseTodo, IRequestTodo } from '../../@types/types';
import { TODO_SERVER } from '../../Config';

const SERVER_API = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production';

const token = localStorage.getItem('userToken');
const headers = {
	Authorization: `Bearer ${token ?? ''}`,
};

export const getTodosAPI = () => {
	return axios.get(`${SERVER_API}${TODO_SERVER}`, { headers }).then((res: AxiosResponse<IResponseTodo[]>) => res);
};

export const createTodoAPI = (value: string) => {
	return axios
		.post(
			`${SERVER_API}${TODO_SERVER}`,
			{ todo: value },
			{
				headers: {
					...headers,
					'Content-Type': 'application/json',
				},
			}
		)
		.then((res: AxiosResponse<IResponseTodo>) => res);
};

export const updateToDoAPI = (data: IRequestTodo) => {
	return axios
		.put(`${SERVER_API}${TODO_SERVER}/${data.id}`, data, {
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
		})
		.then((res: AxiosResponse<IResponseTodo>) => res);
};

export const deleteTodoAPI = (id: number) => {
	return axios.delete(`${SERVER_API}${TODO_SERVER}/${id}`, { headers }).then((res: AxiosResponse) => res);
};
