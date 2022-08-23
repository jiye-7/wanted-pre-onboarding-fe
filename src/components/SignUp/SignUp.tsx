import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actions/userAction';
import { Validation } from '../../lib/validation';
import { FormValue, IUser } from '../../@types/types';

const SignUp = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const emailValid = useMemo(() => Validation.emailValidation(email), [email]);
	const passwordValid = useMemo(() => Validation.passwordValidation(password), [password]);

	const onSignUp = async (data: IUser): Promise<void> => {
		const { payload } = dispatch(await signUpUser(data));
		if (payload.data) {
			setToken(payload.data.access_token);
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
		<>
			<h1>회원 가입</h1>
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
					회원가입
				</button>
			</form>
		</>
	);
};

export default SignUp;
