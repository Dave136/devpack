import { axios } from '../config/axios';
import { PAGE_LIMIT } from '@/constants';
import type { ApiUserResponse } from '@/types';

type GetUsers = (params: { page?: number }) => Promise<ApiUserResponse | null>;

export const getUsers: GetUsers = async ({ page = 0 }) => {
  try {
    const { data } = await axios.get<ApiUserResponse>(
      `/users?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * (page - 1)}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
