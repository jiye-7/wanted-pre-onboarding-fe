import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actions/userAction';
import { Validation } from '../../lib/validation';
import { FormValue, IUser } from '../../@types/types';
import { useNavigate } from 'react-router-dom';
import { Container, H1, Form, Box, Label, Input, Button } from '../SignIn/SignIn';

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const emailValid = useMemo(() => Validation.emailValidation(email), [email]);
	const passwordValid = useMemo(() => Validation.passwordValidation(password), [password]);

	const onSignUp = async (data: IUser): Promise<void> => {
		const { payload } = dispatch(await signUpUser(data));
		if (payload.data) {
			setToken(payload.data.access_token);
			navigate('/');
		}
	};

	const onValidationForm = () => {
		if (emailValid && passwordValid) {
			const data = { email, password };
			onSignUp(data);
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
			<H1>SignUp</H1>
			<Form onSubmit={onValidationForm}>
				<Box>
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" value={email} onChange={handleChange} />
				</Box>
				<Box>
					<Label htmlFor="pw">Password</Label>
					<Input id="pw" type="password" autoComplete="off" onChange={handleChange} />
				</Box>
				<Button type="button" disabled={!emailValid || !passwordValid} onClick={onValidationForm}>
					회원가입
				</Button>
			</Form>
		</Container>
	);
};

export default SignUp;
