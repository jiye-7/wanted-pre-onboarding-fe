import { SIGN_UP_USER, SIGN_IN_USER, AUTH_USER, AUTH_FAIL } from './types';
import { signUpUserAPI } from '../module/userAPI';

export const signUpUser = () => {
	return signUpUserAPI();
};
