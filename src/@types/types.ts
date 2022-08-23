export enum FormValue {
	password = 'password',
	email = 'email',
}

export interface IUser {
	email: string;
	password: string;
}

export type IResponseToken = {
	access_token: string;
};

export interface IResponseTodo {
	id: number;
	isCompleted: boolean;
	todo: string;
	userId: number;
}
