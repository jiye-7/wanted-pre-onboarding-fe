import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/actions/userAction';
import { Validation } from '../../lib/validation';
import { FormValue, IUser } from '../../@types/types';

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
		<>
			<h1>Login</h1>
			<form onSubmit={onValidationForm}>
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" value={email} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="pw">Password</label>
					<input id="pw" type="password" autoComplete="off" onChange={handleChange} />
				</div>
				<button type="button" disabled={!emailValid || !passwordValid} onClick={onValidationForm}>
					로그인
				</button>
			</form>
		</>
	);
};

export default SignIn;
