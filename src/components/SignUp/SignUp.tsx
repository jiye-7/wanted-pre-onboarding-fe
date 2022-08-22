import React, { useMemo, useState } from 'react';
import { Validation } from '../../lib/validation';

export enum FormValue {
	password = 'password',
	email = 'email',
}

const SignUp = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const emailValid = useMemo(() => Validation.emailValidation(email), [email]);
	const passwordValid = useMemo(() => Validation.passwordValidation(password), [password]);

	const onValidationForm = () => {
		if (emailValid && passwordValid) {
			console.log('회원가입!');
		}
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
