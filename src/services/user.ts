import { axios } from '../config/axios';
import type { ApiUserResponse } from '@/types';

const LIMIT = 10;

type GetUsers = (params: { page?: number }) => Promise<ApiUserResponse | null>;

export const getUsers: GetUsers = async ({ page = 0 }) => {
  try {
    const { data } = await axios.get<ApiUserResponse>(
      `/users?limit=${LIMIT}&skip=${LIMIT * (page - 1)}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
