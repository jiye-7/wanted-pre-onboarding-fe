import { SIGN_UP_USER, SIGN_IN_USER, AUTH_USER, AUTH_FAIL } from './types';
import { signUpUserAPI } from '../module/userAPI';
import { IUser } from '../../@types/types';

export const signUpUser = (data: IUser) => {
	console.log(data);
	return signUpUserAPI(data).then((res) => ({
		type: SIGN_UP_USER,
		payload: res,
	}));
};
