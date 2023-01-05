import { axios } from '../config/axios';
import { PAGE_LIMIT } from '@/constants';
import type { ApiUserResponse } from '@/types';

type GetUsers = (params: {
  page?: number;
  query?: string | null;
}) => Promise<ApiUserResponse | null>;

const normal = (page: number) =>
  `/users?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * (page - 1)}`;

const search = (query: string) => `/users/search?q=${query}`;

export const getUsers: GetUsers = async ({ page = 0, query }) => {
  try {
    const { data } = await axios.get<ApiUserResponse>(
      query ? search(query) : normal(page)
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
