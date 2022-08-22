import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actions/userAction';
import { Validation } from '../../lib/validation';
import { FormValue } from '../../@types/types';

const SignUp = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const emailValid = useMemo(() => Validation.emailValidation(email), [email]);
	const passwordValid = useMemo(() => Validation.passwordValidation(password), [password]);

	const onValidationForm = async (): Promise<void> => {
		if (emailValid && passwordValid) {
			const data = { email, password };
			const { payload } = dispatch(await signUpUser(data));
			if (payload.data) {
				setToken(payload.data.access_token);
			}
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
		<form onSubmit={onValidationForm}>
			<h1>회원 가입</h1>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" value={email} onChange={handleChange} />
			</div>
			<div>
				<label htmlFor="pw">Password</label>
				<input id="pw" type="password" autoComplete="off" onChange={handleChange} />
			</div>
			<button type="button" disabled={!emailValid || !passwordValid} onClick={onValidationForm}>
				회원가입
			</button>
		</form>
	);
};

export default SignUp;
