import React from 'react';
import { IResponseTodo } from '../../@types/types';

interface IProps {
	todo: IResponseTodo;
}

const Todo = ({ todo }: IProps): JSX.Element => {
	return (
		<>
			<h4>
				{todo.todo}
				<button>{todo.isCompleted ? '완료' : '미완료'}</button>
			</h4>
		</>
	);
};

export default Todo;
