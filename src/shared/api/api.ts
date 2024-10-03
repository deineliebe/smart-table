import { TProject, TUser } from "./types";

const URL = process.env.API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
    res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
    success: boolean;
} & T;

export type TProjectsResponse = TServerResponse<{
    data: TProject[];
}>;

export const getProjectsApi = () =>
  fetch(`${URL}/projects`)
    .then((res) => checkResponse<TProjectsResponse>(res))
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
});

export type TUsersResponse = TServerResponse<{
    data: TUser[];
}>;

export const getUsersApi = () =>
  fetch(`${URL}/users`)
.then((res) => checkResponse<TUsersResponse>(res))
.then((data) => {
    if (data?.success) return data;
    return Promise.reject(data);
});

export type TProfileResponse = TServerResponse<{
    data: TUser;
}>;

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
