import { SIGN_IN_USER, SIGN_UP_USER } from './types';
import { signInUserAPI, signUpUserAPI } from '../module/userAPI';
import { IUser } from '../../@types/types';

export const signUpUser = (data: IUser) => {
	return signUpUserAPI(data).then((res) => ({
		type: SIGN_UP_USER,
		payload: res,
	}));
};

export const signInUser = (data: IUser) => {
	return signInUserAPI(data).then((res) => ({
		type: SIGN_IN_USER,
		payload: res,
	}));
};
