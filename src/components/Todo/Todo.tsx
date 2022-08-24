import { AxiosError } from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IResponseTodo } from '../../@types/types';
import { updateTodo } from '../../redux/actions/todoAction';

interface IProps {
	todo: IResponseTodo;
}

const Todo = ({ todo }: IProps): JSX.Element => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// 완료/미완료 여부
	const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);
	// 수정 여부
	const [isModify, setIsModify] = useState<boolean>(false);
	// 수정일 때 input value
	const [isInputValue, setIsInputValue] = useState<string>(todo.todo || '');

	// 완료/미완료 체크박스 값 변경
	const handleIsCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsCompleted(!isCompleted);
		handleModifyCompleted(!isCompleted);
	};

	// 완료/미완료 업데이트 요청
	const handleModifyCompleted = async (completeState: boolean) => {
		try {
			const { payload } = dispatch(
				await updateTodo({
					todo: isInputValue,
					isCompleted: completeState,
					id: todo.id,
				})
			);
			if (payload.status === 200) {
				console.log(payload);
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleIsSetModify = () => {
		setIsModify(!isModify);
	};

	const handleModify = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsInputValue(e.target.value);
	};

	return (
		<>
			{isModify ? (
				<div>
					<input
						type="text"
						id="addtodo"
						value={isInputValue}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleModify(e)}
					/>
					<button onClick={() => handleModifyCompleted(isCompleted)}>제출</button>
					<button onClick={handleIsSetModify}>취소</button>
				</div>
			) : (
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<h4>{todo.todo}</h4>
					<input
						type="checkbox"
						checked={isCompleted}
						value={isCompleted === false ? '미완료' : '완료'}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIsCompleted(e)}
					/>
					<span>{isCompleted === false ? '미완료' : '완료'}</span>
					{!isModify && <button onClick={handleIsSetModify}>수정</button>}
					{!isModify && <button>삭제</button>}
				</div>
			)}
		</>
	);
};

export default Todo;
