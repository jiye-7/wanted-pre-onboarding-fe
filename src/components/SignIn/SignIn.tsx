import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/actions/userAction';
import { Validation } from '../../lib/validation';
import { FormValue, IUser } from '../../@types/types';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 7rem 0 10rem;
	background-color: #efebe9;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

export const H1 = styled.h1`
	margin-bottom: 4rem;
`;

export const Form = styled.form`
	margin: auto 0;
	width: 100%;
`;

export const Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
`;

export const Label = styled.label`
	width: 80px;
`;

export const Input = styled.input`
	width: 13rem;
	padding: 0.4rem;
	border: none;
	border-radius: 0.4rem;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	background-color: #fff;
`;

export const Button = styled.button`
	width: 9rem;
	padding: 1rem;
	margin: 5rem 0 0 2rem;
	font-size: 1rem;
	font-family: bole;
`;

const SignIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const emailValid = useMemo(() => Validation.emailValidation(email), [email]);
	const passwordValid = useMemo(() => Validation.passwordValidation(password), [password]);

	const onSignIn = async (data: IUser): Promise<void> => {
		const { payload } = dispatch(await signInUser(data));
		if (payload.data) {
			setToken(payload.data.access_token);
			navigate('/');
		}
	};

	const onValidationForm = () => {
		if (emailValid && passwordValid) {
			const data = { email, password };
			onSignIn(data);
		}
	};

	const setToken = (token: string) => {
		localStorage.setItem('userToken', token);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { type, value } = e.target;

		if (type === FormValue.email) {
			setEmail(value);
		} else {
			setPassword(value);
		}
	};

	return (
		<Container>
			<H1>SignIn</H1>
			<Form onSubmit={onValidationForm}>
				<Box>
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" value={email} onChange={handleChange} />
				</Box>
				<Box>
					<Label htmlFor="pw">Password</Label>
					<Input id="pw" type="password" autoComplete="off" onChange={handleChange} />
				</Box>
				<Button
					type="button"
					className={emailValid || !passwordValid ? 'visible' : ''}
					disabled={!emailValid || !passwordValid}
					onClick={onValidationForm}
				>
					로그인
				</Button>
			</Form>
		</Container>
	);
};

export default SignIn;
