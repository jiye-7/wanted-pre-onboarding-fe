import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IResponseTodo } from '../../@types/types';
import { createTodo, getTodos } from '../../redux/actions/todoAction';
import Todo from './Todo';

const Todos = () => {
	const dispatch = useDispatch();
	const [todos, setTodos] = useState<IResponseTodo[]>([]);
	const [todoValue, setTodoValue] = useState<string>('');

	useEffect(() => {
		const allTodos = async (): Promise<void> => {
			try {
				const { payload } = dispatch(await getTodos());

				if (payload) {
					setTodos(payload.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		void allTodos();
	}, [dispatch]);

	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoValue(e.target.value);
	};

	const handleAddTodo = async () => {
		dispatch(await createTodo(todoValue));
	};

	return (
		<div>
			<h3>{todos.length === 0 && '데이터가 없습니다.'}</h3>
			{todos?.map((todo: IResponseTodo) => (
				<Todo key={todo.id} todo={todo} />
			))}
			<div>
				<label htmlFor="addtodo">등록할 내용을 입력해주세요 :)</label>
				<input type="text" id="addtodo" value={todoValue} onChange={(e) => handleChangeInputValue(e)} />
				<button onClick={handleAddTodo}>추가</button>
			</div>
		</div>
	);
};

export default Todos;
