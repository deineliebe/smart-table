import { TProfileResponse, TProjectsResponse, TUsersResponse } from './types';

const URL = 'http://localhost:3001'; //process.env.REACT_APP_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getProjectsApi = () =>
	fetch(`${URL}/projects`)
		.then((res) => checkResponse<TProjectsResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const getUsersApi = () =>
	fetch(`${URL}/users`)
		.then((res) => checkResponse<TUsersResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const getProfileApi = () =>
	fetch(`${URL}/profile`)
		.then((res) => checkResponse<TProfileResponse>(res))
		.then((data) => {
			if (data?.success) return data;
			return Promise.reject(data);
		});

export const api = {
	getProjectsApi,
	getUsersApi,
	getProfileApi
};
