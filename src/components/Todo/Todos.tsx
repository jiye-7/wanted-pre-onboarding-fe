import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IResponseTodo } from '../../@types/types';
import { createTodo, getTodos } from '../../redux/actions/todoAction';
import Todo from './Todo';
import { Container, Input } from '../SignIn/SignIn';
import styled from 'styled-components';

const WriteBox = styled.div`
	display: 'flex';
	flexdirection: 'row';
	justifycontent: 'center';
	alignitems: 'center';
`;

const Button = styled.button`
	width: 4rem;
	padding: 0.5rem;
	margin: 0.5rem 0 0 2rem;
	font-size: 1rem;
	font-family: bole;
`;

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
		<Container>
			{<h4>{todos.length === 0 && '작성한 글들이 없습니다... :)'}</h4>}
			{todos?.map((todo: IResponseTodo) => (
				<Todo key={todo.id} todo={todo} />
			))}
			<h3>등록할 내용을 입력해주세요 :)</h3>
			<WriteBox>
				<Input type="text" id="addtodo" value={todoValue} onChange={(e) => handleChangeInputValue(e)} />
				<Button onClick={handleAddTodo}>추가</Button>
			</WriteBox>
		</Container>
	);
};

export default Todos;
