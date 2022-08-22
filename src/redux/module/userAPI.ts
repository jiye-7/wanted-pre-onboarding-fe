import axios, { AxiosResponse } from 'axios';
import { IResponseToken, IUser } from '../../@types/types';
import { USER_SERVER } from '../../Config';

const SERVER_API = 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production';
const headers = {
	'Content-Type': 'application/json',
};

export const signUpUserAPI = (data: IUser) => {
	return axios
		.post(`${SERVER_API}${USER_SERVER}/signup`, data, { headers })
		.then((res: AxiosResponse<IResponseToken>) => res);
};
