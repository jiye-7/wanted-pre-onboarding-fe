export const Validation = {
	emailValidation: (email: string): boolean => {
		const regexpEmail = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
		return regexpEmail.test(email);
	},
	passwordValidation: (password: string) => (password && password.length >= 8 ? true : false),
};
