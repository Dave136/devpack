import { axios } from '../config/axios';
import { ApiProductResponse } from '@/types';
import { PAGE_LIMIT } from '@/constants';

type GetProducts = (params: {
  page?: number;
  query?: string | null;
}) => Promise<ApiProductResponse | null>;

const normal = (page: number) =>
  `/products?limit=${PAGE_LIMIT}&skip=${PAGE_LIMIT * (page - 1)}`;

const search = (query: string) => `/products/search?q=${query}`;

export const getProducts: GetProducts = async ({ page = 0, query = null }) => {
  try {
    const { data } = await axios.get<ApiProductResponse>(
      query ? search(query) : normal(page)
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
