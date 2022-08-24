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
		allTodos();
	}, [dispatch]);

	const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoValue(e.target.value);
	};

	const handleAddTodo = async () => {
		if (todoValue.length) {
			try {
				const { payload } = dispatch(await createTodo(todoValue));
				if (payload.status === 201) {
					setTodos([...todos, payload.data]);
				}
				setTodoValue('');
			} catch (err) {
				console.log(err, 'error가 발생하였습니다.');
			}
		}
	};

	return (
		<div>
			<h3>{todos.length === 0 && '데이터를 가져오는 중입니다.. :)'}</h3>
			{todos?.map((todo: IResponseTodo) => (
				<Todo key={todo.id} todo={todo} />
			))}
			<h3>등록할 내용을 입력해주세요 :)</h3>
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
				<input type="text" id="addtodo" value={todoValue} onChange={(e) => handleChangeInputValue(e)} />
				<button onClick={handleAddTodo}>추가</button>
			</div>
		</div>
	);
};

export default Todos;
