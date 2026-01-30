import { api } from "./api";

export const fetchCart = async () => {
  const response = await api.get("cart/");
  return response.data;
};

export const updateCart = async (payload: any) => {
  const response = await api.post("cart/", payload);
  return response.data;
};
