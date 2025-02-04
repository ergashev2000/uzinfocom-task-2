import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export interface User {
  avatar: string | undefined;
  last_name: string;
  first_name: string;
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Count {
  user_id: number;
  category_id: number;
  count: number;
}

export const api = {
  getUsers: async () => {
    const response = await axios.get<User[]>(`${BASE_URL}/users`);
    return response.data;
  },

  getCategories: async () => {
    const response = await axios.get<Category[]>(`${BASE_URL}/categories`);
    return response.data;
  },

  getCounts: async () => {
    const response = await axios.get<Count[]>(`${BASE_URL}/counts`);
    return response.data;
  },

  setCount: async (userId: number, categoryId: number, count: number) => {
    const response = await axios.patch(`${BASE_URL}/counts`, {
      user_id: userId,
      category_id: categoryId,
      count: count,
    });
    return response.data;
  },
};
