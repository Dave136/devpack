import { axios } from '../config/axios';
import { ApiProductResponse } from '@/types';

const LIMIT = 10;

type GetProducts = (params: {
  page?: number;
}) => Promise<ApiProductResponse | null>;

export const getProducts: GetProducts = async ({ page = 0 }) => {
  try {
    const { data } = await axios.get<ApiProductResponse>(
      `/products?limit=${LIMIT}&skip=${LIMIT * (page - 1)}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
